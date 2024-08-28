import React, { useState } from "react";
import { Button, Form, Input, message } from "antd";
import axios from "@/api/index";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "@/context";
const Login = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);
  const navigete = useNavigate();
  const [state, dispatch] = useStateValue();
  const handleLogin = (values) => {
    setLoading(true);
    axios
      .post("/auth/login", values)
      .then((res) => {
        navigete("/");
        messageApi.success("Log in!");
        dispatch({ type: "LOGIN", payload: res.data.token });
        console.log(res);
      })
      .catch((err) => {
        messageApi.error("username or password in incorrect!");
        console.log(err);
      })
      .finally(() => setLoading(false));
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="flex h-screen items-center justify-center ">
      {contextHolder}
      <div className=" w-[400px] border p-5 rounded-lg py-10">
        <h3 className="text-center text-3xl mb-3">Login</h3>
        <Form
          className=""
          name="basic"
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          onFinish={handleLogin}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
              <div className=" my-4">
            <p className="text-xl font-[400]">  Username : emilys</p>
            <p className="text-xl font-[400]">  Password : emilyspass</p>
              </div>
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Username kiriting!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Password kiriting!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button
              disabled={loading}
              className="w-full"
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Login;
