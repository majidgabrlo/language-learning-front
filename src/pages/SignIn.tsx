import { gql } from "@apollo/client";
import { Button, Form, Input } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSignInMutation } from "./__generated__/SignIn";

function SignIn() {
  const [singIn] = useSignInMutation();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<string[]>([]);

  const formChangeHandler = (name: "email" | "password", value: string) => {
    formData[name] = value;
    setFormData({ ...formData });
  };

  const signInHandler = () => {
    singIn({ variables: { credentials: { ...formData } } }).then((res) => {
      if (res.data?.signin.token) {
        localStorage.setItem("languageToken", res.data.signin.token);
        localStorage.setItem("selectedLearningLang","")
        window.location.reload();
      } else {
        res.data?.signin.userErrors.map((error) =>
          setErrors([...errors, error.message])
        );
      }
    });
  };

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign in</h1>
          <Form onFinish={signInHandler} layout="vertical">
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input valid email!",
                  type: "email",
                },
              ]}
            >
              <Input
                onChange={(e) => formChangeHandler("email", e.target.value)}
                value={formData.email}
              />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                onChange={(e) => formChangeHandler("password", e.target.value)}
                value={formData.password}
              />
            </Form.Item>
            {errors.map((err) => (
              <div className="text-red-600">{err}</div>
            ))}
            <Button
              htmlType="submit"
              block
              className="!bg-indigo-500 !rounded-lg !mt-2 !text-white !hover:bg-indigo-900 transition"
            >
              Sign In
            </Button>
          </Form>
        </div>

        <div className="text-grey-dark mt-6">
          Already have an account?
          <Link
            className="no-underline border-b border-blue text-blue"
            to="../signup/"
          >
            Sign up
          </Link>
          .
        </div>
      </div>
    </div>
  );
}

gql`
  mutation SignIn($credentials: CredentialsInput!) {
    signin(credentials: $credentials) {
      token
      userErrors {
        message
      }
    }
  }
`;
export default SignIn;
