import { Button, Card } from "antd";
import { useState } from "react";
import { Login } from "./Login";
import { Signup } from "./Signup";

export const Auth = () => {
  const [authType, setAuthType] = useState<"login" | "signup">("login");
  return (
    <Card
      title={authType === "login" ? "Login" : "Signup"}
      style={{ width: 400 }}
    >
      {authType === "login" ? <Login /> : <Signup />}
      <Button
        type="link"
        onClick={() => setAuthType(authType === "login" ? "signup" : "login")}
      >
        {authType === "login"
          ? "Don't have an account? Sign up"
          : "Already have an account? Login"}
      </Button>
    </Card>
  );
};
