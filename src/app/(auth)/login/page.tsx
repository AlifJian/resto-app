import InputCustom from "@/app/component/InputCustom";
import { Metadata } from "next";
import Link from "next/link";

export const metadata : Metadata = {
  title : "Login"
}

export default function Login() {
    return <div className="grid grid-cols-2 h-[100vh]">
      {/* Login other auth */}
      <div>
        <div className="h-full w-full bg-slate-400"></div>
      </div>
      {/* Login Credential */}
      <div className="bg-slate-200 flex justify-center items-center h-full w-full">
        <div className="backdrop-blur-md shadow-lg rounded-md w-[400px] h-[300px] p-4 py-8 text-center flex flex-col gap-y-2 ">
          <h2>Login</h2>
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
          <div className="mt-10">
              <Link className="mt-10 bg-slate-400 rounded-md shadow-sm p-2" href="/">Submit</Link>
          </div>
        </div>
      </div>
    </div>
}