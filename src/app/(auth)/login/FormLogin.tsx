"use client";

import InputCustom from "@/app/component/InputCustom";
import { useState } from "react";
import {submitHandlerLogin} from "@/app/(auth)/login/Login"

export default function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className="flex flex-col gap-y-4">
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
      <div>
        <button
          className="mt-5 bg-slate-400 rounded-md shadow-sm p-2"
          type="submit"
          onClick={() => {
            setIsLoading(true)
            submitHandlerLogin({email,password})
          }
          }>
          {isLoading? <span>Loading...</span> : <span>Submit</span>}
        </button>
      </div>
    </div>
  );
}
