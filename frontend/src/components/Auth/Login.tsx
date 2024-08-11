import { Alert, Button, Form, Input, Spin } from "antd";
import { LOGIN } from "../../graphql/mutations";
import { useMutation } from "@apollo/client";
import { useEffect } from "react";

export const Login = () => {
  const [loginMutation, { data, loading, error }] = useMutation(LOGIN);

  useEffect(() => {
    if (data) {
      localStorage.setItem("access_token", data.login.token);
      window.location.reload();
    }
  }, [data]);

  const handleLogin = async (values: { email: string; password: string }) => {
    await loginMutation({
      variables: {
        input: {
          ...values,
        },
      },
    });
  };
  if (loading) return <Spin tip="Loading ..." />;
  return (
    <Form
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={handleLogin}
    >
      {error && (
        <Form.Item>
          <Alert message="Error" description={error.message} type="error" />
        </Form.Item>
      )}
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
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
