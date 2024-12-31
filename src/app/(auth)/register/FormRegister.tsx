"use client";

import InputCustom from "@/app/component/InputCustom";
import { useState } from "react";
import { submitHandlerRegister } from "./Register";

export default function FormRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="bg-slate-200 h-full w-full p-4">
      <h1>Register</h1>
      <div className="mt-8 p-8 flex flex-col gap-y-8">
        <InputCustom
          label="Username"
          inputType="text"
          placeholder="Your username"
          startContent
          eyeVisible={false}
          parentValueHandler={setName}
        />
        <InputCustom
          startContent
          placeholder="your@gmail.com"
          label="Email"
          inputType="email"
          eyeVisible={false}
          parentValueHandler={setEmail}
        />
        <InputCustom
          label="Password"
          inputType="password"
          placeholder="Enter your password"
          startContent
          eyeVisible={true}
          parentValueHandler={setPassword}
        />
        <InputCustom
          label="Confirm Password"
          inputType="password"
          placeholder="Enter your password"
          startContent
          eyeVisible={true}
          parentValueHandler={setConfirmPassword}
        />
      </div>
      <button
        className="mt-10 bg-slate-400 rounded-md shadow-sm p-2"
        onClick={() => {
          setIsLoading(true);
          submitHandlerRegister({
            email,
            name,
            password,
            "confirm-password": confirmPassword,
          });
        }}
      >
        {isLoading ? <span>Loading...</span> : <span>Submit</span>}
      </button>
    </div>
  );
}
