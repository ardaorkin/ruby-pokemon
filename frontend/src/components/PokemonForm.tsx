import { useMutation } from "@apollo/client";
import { Alert, Button, Form, Input, Select } from "antd";
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
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Name is required" }]}
      >
        <Input placeholder="Enter a name" allowClear required />
      </Form.Item>
      <Form.Item label="Powers" name="powers">
        <Input placeholder="Separate powers with commas" allowClear />
      </Form.Item>
      <Form.Item label="Kind" name="kind">
        <Select
          allowClear
          showSearch
          placeholder="Select a kind"
          optionFilterProp="children"
        >
          {[
            "fire",
            "water",
            "grass",
            "electric",
            "normal",
            "flying",
            "bug",
            "poison",
            "ground",
            "rock",
            "fighting",
            "psychic",
            "ghost",
            "ice",
            "dragon",
            "dark",
            "steel",
            "fairy",
          ].map((kind) => (
            <Select.Option key={kind} value={kind}>
              {kind.charAt(0).toUpperCase() + kind.slice(1)}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="Image URL" name="imageUrl">
        <Input placeholder="Enter an image URL" allowClear type="url" />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" loading={mutationLoading}>
          Add Pokemon
        </Button>
      </Form.Item>
    </Form>
  );
};
