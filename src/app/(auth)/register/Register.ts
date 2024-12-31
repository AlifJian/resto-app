"use server"

import { redirect } from "next/navigation"

interface registerData {
    name : string,
    email : string,
    password : string,
    'confirm-password' : string
}

export async function submitHandlerRegister(registerBodyData : registerData) {
    const url = "http://127.0.0.1:3080/auth/register"

    const response = await fetch(url, {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(registerBodyData)
    })



    const data = await response.json()
    if(!response.ok){
        return console.log("register gagal")
    }

    redirect('/login')
}