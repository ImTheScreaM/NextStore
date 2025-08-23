'use server'

import {z} from 'zod'
import {createSession, deleteSession} from "@/app/lib/session";
import {redirect} from "next/navigation";
import prisma from "@/app/lib/db/prisma";
import bcrypt from "bcryptjs";

const loginShema = z.object({
    email: z.string().email({message:'Invalid email address'}).trim(),
    password: z
        .string()
        .min(8,{message:'Password must be at least 8 characters'})
        .trim()
})

export async function registration(formData: FormData) {

    const email = formData.get("email") as string
    const password = formData.get("password") as string
    const name = formData.get("name") as string

    const user = await prisma.user.findUnique({where: {email:email}})

    if (user) {
        return console.log('user already exists')
    }

    if (password.length < 8) {
        return console.log('Password must be at least 8 characters long')
    }

    await prisma.user.create({
        data: {
            name:name,
            email:email,
            password:password,
        }
    })
    redirect("/signIn")
}


export async function login(prevState:any,formDate:FormData) {

    const result = loginShema.safeParse(Object.fromEntries(formDate))
    const {email, password} = result.data

    const user = await prisma.user.findUnique({
        where: {
            email:email
        }
    })

    if(!user || user.password !== password) {
        return {
            errors:{
                email:['Invalid email or password'],
            }
        }
    } else {
        await createSession(user.id)
        redirect('/')
    }
}

export async function logout() {
    await deleteSession()
    redirect('/')
}