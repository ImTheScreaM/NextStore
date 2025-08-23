'use client'

import {useActionState} from "react";
import {login} from "@/app/lib/action";
import {useFormStatus} from "react-dom";

export default function SignIn() {
    const [state,loginAction] = useActionState(login,undefined);
    console.log(state)
    return (
        <div className='p-8'>
            <form action={loginAction} method='POST' className='flex flex-col items-center gap-12'>
                <h2 className="text-3xl text-center mb-6">Войти в аккаунт</h2>
                <div className='flex flex-col gap-5 m-auto border p-10 rounded-lg max-w-sm'>
                    <div>
                        <label>Почта</label>
                        <input type="email" required={true} name='email' placeholder='Email...'/>
                    </div>
                    <div>
                        <label>Пароль</label>
                        <input type="password" required={true} name='password' placeholder='Password...' />
                    </div>
                    <div className='grid'>
                        <SubmitButton/>
                    </div>
                </div>
                <a href='/signUp'>Нет аккаунта?</a>
            </form>
        </div>
    )
}

function SubmitButton() {
    const {pending} = useFormStatus()
    return (
        <button disabled={pending} type='submit'>Sign In</button>
    )
}