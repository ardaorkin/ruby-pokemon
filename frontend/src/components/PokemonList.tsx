import { useMutation, useQuery } from "@apollo/client";
import {
  Alert,
  Avatar,
  Button,
  Card,
  Input,
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

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    const filteredPokemon = data.pokemons.filter((pokemon: Pokemon) =>
      pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setPokemonList(filteredPokemon);
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
    <div>
      <Input.Search
        size="large"
        autoFocus
        placeholder="Search Pokemon"
        onChange={handleSearch}
        style={{
          marginBottom: "2rem",
          width: "50%",
          maxWidth: 300,
          minWidth: 200,
        }}
      />
      <div className="pokemon-list">
        {[...pokemonList].map((pokemon: Pokemon) => {
          const {
            id = "",
            name = "",
            kind = "",
            powers = "",
            imageUrl = "",
          } = pokemon;
          return (
            <Card
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
                  onConfirm={(event) => handleDelete(event, id)}
                >
                  <Button type="link" danger>
                    Delete
                  </Button>
                </Popconfirm>,
              ]}
              cover={
                <Avatar
                  shape="circle"
                  src={imageUrl}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              }
              key={id}
              title={name}
              className="card"
              hoverable={false}
            >
              <div className="pokemon-details">
                <div>
                  <Typography.Text strong>Kind:</Typography.Text>{" "}
                  {kind && kind.charAt(0).toUpperCase() + kind.slice(1)}
                </div>
                <List
                  style={{ overflow: "scroll" }}
                  header={<strong>Powers</strong>}
                  dataSource={powers ? powers.split(",") : []}
                  renderItem={(item) => <List.Item>{item}</List.Item>}
                />
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
