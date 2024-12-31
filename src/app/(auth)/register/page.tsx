import { Metadata } from "next";
import FormRegister from "./FormRegister";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Register",
};

export default async function Register() {

  const cookieStore = await cookies();
  const user = cookieStore.get("user");
  const accessToken = cookieStore.get("Access-Token");

  if (user && accessToken) {
    redirect("/");
  }
  return (
    <div className="grid grid-cols-2 h-[100vh]">
      {/* Register Credential */}
      <FormRegister />
      {/* Jumbutron Image*/}
      <div>
        <div className="h-full w-full bg-slate-400"></div>
      </div>
    </div>
  );
}
