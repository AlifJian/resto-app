"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface loginBody {
  email: string;
  password: string;
}

export async function submitHandlerLogin(loginBodyData: loginBody) {
  const url = "http://127.0.0.1:3080/auth/login";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginBodyData),
  });
  if (!response.ok) {
    return console.log("Login gagal");
  }

  const data = await response.json();
  const cookieStore = await cookies();
  cookieStore.set({
    name: "user",
    value: "ada",
    httpOnly: false,
  });
  cookieStore.set({
    name: "Refresh-Token",
    value: data["refresh-token"],
    httpOnly: true,
  });
  cookieStore.set({
    name: "Access-Token",
    value: data["access-token"],
    httpOnly: true,
  });
  redirect("/");
}
