import { gql } from "@apollo/client";
import { Button, Form, Input } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSignUpMutation } from "./__generated__/SignUp";

function SignUp() {
  const [signUp] = useSignUpMutation();
  const [errors, setErrors] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const formChangeHandler = (
    key: "email" | "password" | "name",
    value: string
  ) => {
    formData[key] = value;
    setFormData({ ...formData });
  };

  const signUpHandler = () => {
    const { email, password, name } = formData;
    signUp({
      variables: {
        credentials: { email, password },
        name,
      },
    })
      .then((res) => {
        if (res.data?.signup.token) {
          localStorage.setItem("languageToken", res.data.signup.token);
          localStorage.setItem("selectedLearningLang", "");
          window.location.reload();
        } else {
          res.data?.signup.userErrors.map((error) =>
            setErrors([...errors, error.message])
          );
        }
      })
      .catch((err) => {
        if (err.message.includes("E11000")) {
          setErrors(["Email is already taken"]);
        }
      });
  };
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <Form onFinish={signUpHandler} layout="vertical">
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input
                onChange={(e) => formChangeHandler("name", e.target.value)}
                value={formData.name}
              />
            </Form.Item>
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

            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
            {errors.map((err) => (
              <div key={err} className="text-red-600">{err}</div>
            ))}
            <Button
              block
              className="!bg-indigo-500 !rounded-lg !mt-2 !text-white !hover:bg-indigo-900 transition"
              htmlType="submit"
            >
              Create Account
            </Button>
          </Form>
        </div>

        <div className="text-grey-dark mt-6">
          Already have an account?
          <Link
            className="no-underline border-b border-blue text-blue"
            to="/signin"
          >
            Sign in
          </Link>
          .
        </div>
      </div>
    </div>
  );
}

gql`
  mutation SignUp($credentials: CredentialsInput!, $name: String!) {
    signup(credentials: $credentials, name: $name) {
      token
      userErrors {
        message
      }
    }
  }
`;

export default SignUp;
