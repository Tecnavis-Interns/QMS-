import React, { useState } from "react";
import Navbar from "../../Landing/Navbar";
import loginBg from "../../assets/loginBg.png";
import { Card, CardBody } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import { Button } from "@nextui-org/react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseMain";

const Login = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      // Handle successful login, redirect user or perform any other action
      console.log("User logged in successfully:", userCredential.user);
    } catch (error) {
      setError(error.message); // Set error message for display
      console.error("Login error:", error);
    }
  };
  return (
    <div
      className="md:mx-64 mx-2 md:py-10 py-5 flex flex-col min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <Navbar />
      <div className="flex-1 flex items-center justify-center">
        <Card className="min-w-96 min-h-96">
          <CardBody className="bg-[#6236F5] rounded-lg text-white p-5">
            <h2 className="text-center font-semibold text-xl">Login Here</h2>
            <div className="flex flex-col gap-5 w-full flex-wrap md:flex-nowrap">
              <Input
                type="email"
                variant="flat"
                label={<span style={{ color: "#fff" }}>Email</span>}
                labelPlacement="outside"
                placeholder="Enter your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                label={<span style={{ color: "#fff" }}>Password</span>}
                variant="flat"
                placeholder="Enter your password"
                labelPlacement="outside"
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? (
                      <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
                type={isVisible ? "text" : "password"}
                className=""
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <p className="text-red-500">{error}</p>}
              <Button
                className="bg-transparent border-2 text-white"
                onClick={handleLogin}
              >
                Submit
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Login;
