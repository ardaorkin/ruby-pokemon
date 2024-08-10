import { Alert, Button, Form, Input, Modal } from "antd";
import { Pokemon } from "../types";
import { UPDATE_POKEMON } from "../graphql/mutations";
import { GET_POKEMONS } from "../graphql/queries";
import { useMutation } from "@apollo/client";

type PokemonEditFormProps = {
  pokemon: Pokemon | null;
  onClose: () => void;
};
export const PokemonEditForm = ({ pokemon, onClose }: PokemonEditFormProps) => {
  const [updatePokemon, { loading: mutationLoading, error: mutationError }] =
    useMutation(UPDATE_POKEMON, {
      refetchQueries: [{ query: GET_POKEMONS }],
    });

  const handleSubmit = (values: Pokemon) => {
    if (!pokemon) return;
    updatePokemon({ variables: { input: { ...values, id: pokemon.id } } });
    onClose();
  };

  return (
    <Modal
      title="Edit Pokemon"
      open={!!pokemon}
      footer={null}
      destroyOnClose
      onClose={onClose}
      onCancel={onClose}
    >
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={pokemon ?? {}}
        onFinish={handleSubmit}
      >
        {mutationError && (
          <Alert
            message="Error"
            description={mutationError.message}
            type="error"
            showIcon
          />
        )}
        <Form.Item label="Name" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="Powers" name="powers">
          <Input />
        </Form.Item>
        <Form.Item label="Kind" name="kind">
          <Input />
        </Form.Item>
        <Form.Item label="Image URL" name="imageUrl">
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button htmlType="submit" loading={mutationLoading}>
            Save
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
