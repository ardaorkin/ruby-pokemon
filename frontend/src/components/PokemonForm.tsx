import { useMutation } from "@apollo/client";
import { Alert, Button, Form, Input } from "antd";
import { CREATE_POKEMON } from "../graphql/mutations.ts";
import { GET_POKEMONS } from "../graphql/queries.ts";
import { CreatePokemonInput } from "../types.ts";

export const PokemonForm = () => {
  const [form] = Form.useForm();
  const [createPokemon, { loading: mutationLoading, error: mutationError }] =
    useMutation(CREATE_POKEMON, {
      refetchQueries: [{ query: GET_POKEMONS }],
    });

  const handleSubmit = (values: CreatePokemonInput) => {
    createPokemon({ variables: { input: values } });
    form.resetFields();
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
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
      <Form.Item>
        <Button htmlType="submit" loading={mutationLoading}>
          Add Pokemon
        </Button>
      </Form.Item>
    </Form>
  );
};
