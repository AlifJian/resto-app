import Link from "next/link";
import InputCustom from "@/app/component/InputCustom";
import { Metadata } from "next";

export const metadata : Metadata = {
  title : "Register"
}

export default function Register() {
  return (
    <div className="grid grid-cols-2 h-[100vh]">
      {/* Register Credential */}
      <div className="bg-slate-200 h-full w-full p-4">
        <h1>Register</h1>
        <div className="mt-8 p-8 flex flex-col gap-y-8">
          <InputCustom
            label="Username"
            placeholder="Your username"
            startContent
            eyeVisible={false}
          />
          <InputCustom
            startContent
            placeholder="your@gmail.com"
            label="Email"
            eyeVisible={false}
          />
          <InputCustom
            label="Password"
            placeholder="Enter your password"
            startContent
            eyeVisible={true}
          />
        </div>
        <Link className="mt-10 bg-slate-400 rounded-md shadow-sm p-2" href="/">
          Submit
        </Link>
      </div>
      {/* Jumbutron Image*/}
      <div>
        <div className="h-full w-full bg-slate-400"></div>
      </div>
    </div>
  );
}
