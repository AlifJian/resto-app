import { Metadata } from "next";
import FormLogin from "./FormLogin";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Login",
};


export default async function Login() {

  const cookieStore = await cookies()
  const user = cookieStore.get("user")
  const accessToken = cookieStore.get("Access-Token")

  if(user && accessToken){
    redirect("/")
  }


  return (
    <div className="grid grid-cols-2 h-[100vh]">
      {/* Login other auth */}
      <div>
        <div className="h-full w-full bg-slate-400"></div>
      </div>
      {/* Login Credential */}
      <div className="bg-slate-200 flex justify-center items-center h-full w-full">
        <div className="backdrop-blur-md shadow-lg rounded-md w-[400px] h-[300px] p-4 text-center flex flex-col gap-y-2 ">
          <h2>Login</h2>
          <FormLogin />
        </div>
      </div>
    </div>
  );
}
