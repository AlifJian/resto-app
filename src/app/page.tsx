"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";



export default async function Home() {
  const cookieStore = await cookies();
  const user = cookieStore.get("user");
  const accessToken = cookieStore.get("Access-Token");


  if (!user && !accessToken) {
    redirect("/login");
  }

  return (
    <div className="h-[100vh] flex justify-center items-center">
      <h2>Ini Home Page</h2>
    </div>
  );
}
