import { useMutation, useQuery } from "@apollo/client";
import {
  Alert,
  Avatar,
  Button,
  Card,
  List,
  Popconfirm,
  Spin,
  Typography,
} from "antd";
import { useEffect, useState } from "react";
import { DELETE_POKEMON } from "../graphql/mutations.ts";
import { GET_POKEMONS } from "../graphql/queries.ts";
import { Pokemon } from "../types.ts";

type PokemonListProps = {
  onSelectPokemon: (pokemon: Pokemon) => void;
};

export const PokemonList = ({ onSelectPokemon }: PokemonListProps) => {
  const { data, loading, error } = useQuery(GET_POKEMONS);
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  const [deletePokemon] = useMutation(DELETE_POKEMON, {
    refetchQueries: [{ query: GET_POKEMONS }],
  });

  useEffect(() => {
    if (data) {
      setPokemonList(data.pokemons);
    }
  }, [data]);

  const handleDelete = (
    event: React.MouseEvent<HTMLElement, MouseEvent> | undefined,
    id: string
  ) => {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }
    deletePokemon({ variables: { input: { id } } });
  };

  if (loading) return <Spin />;
  if (error)
    return (
      <Alert
        message="Error"
        description={error.message}
        type="error"
        showIcon
      />
    );
  return (
    <div className="pokemon-list">
      {[...pokemonList].map((pokemon: Pokemon) => (
        <Card
          styles={{
            body: {
              overflow: "scroll",
              height: 250,
            },
          }}
          actions={[
            <Button
              type="link"
              onClick={() => onSelectPokemon(pokemon)}
              style={{ marginRight: "8px" }}
            >
              Edit
            </Button>,
            <Popconfirm
              title="Are you sure?"
              onConfirm={(event) => handleDelete(event, pokemon.id)}
            >
              <Button type="link" danger>
                Delete
              </Button>
            </Popconfirm>,
          ]}
          cover={
            <Avatar
              shape="circle"
              src={pokemon.imageUrl}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          }
          key={pokemon.id}
          title={pokemon.name}
          className="card"
          hoverable={false}
        >
          <div className="pokemon-details">
            <div>
              <Typography.Text strong>Kind:</Typography.Text> {pokemon.kind}
            </div>
            <List
              style={{ overflow: "scroll" }}
              header={<strong>Powers</strong>}
              dataSource={pokemon.powers.split(",")}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
          </div>
        </Card>
      ))}
    </div>
  );
};
