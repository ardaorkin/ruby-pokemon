import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../graphql/mutations";
import { Form, Input, Button, Spin, Alert } from "antd";
import { useEffect } from "react";

type User = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};

export const Signup = () => {
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);

  useEffect(() => {
    if (data) {
      localStorage.setItem("access_token", data.createUser.token);
      window.location.reload();
    }
  }, [data]);

  const handleSignup = async (values: User) => {
    await createUser({
      variables: {
        input: {
          ...values,
        },
      },
    });
  };

  if (loading) return <Spin tip="Loading..." />;

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={handleSignup}
    >
      {error && (
        <Form.Item>
          <Alert message="Error" description={error.message} type="error" />
        </Form.Item>
      )}
      <Form.Item
        label="First Name"
        name="firstName"
        rules={[{ required: true, message: "Please input your first name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Last Name"
        name="lastName"
        rules={[{ required: true, message: "Please input your last name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Signup
        </Button>
      </Form.Item>
    </Form>
  );
};
