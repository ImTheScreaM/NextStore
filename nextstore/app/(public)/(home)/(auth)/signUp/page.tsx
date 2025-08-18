export default async function SignUp() {
    return (
        <div className='p-8'>
            <form action='/login' method='POST' className='flex flex-col items-center gap-12'>
                <h2 className="text-3xl text-center mb-6">Создать аккаунт</h2>
                <div className='flex flex-col gap-5 m-auto border p-10 rounded-lg max-w-sm'>
                    <div>
                        <label>Имя пользователя</label>
                        <input type="text" required={true} name='username' placeholder='Login...'/>
                    </div>
                    <div>
                        <label>Почта</label>
                        <input type="email" required={true} name='email' placeholder='Email...' />
                    </div>
                    <div>
                        <label>Пароль</label>
                        <input type="password" required={true} name='password' placeholder='Password...' />
                    </div>
                    <div className='grid'>
                        <button type='submit'>Sign In</button>
                    </div>
                </div>
                <a href='/signIn'>Есть аккаунт?</a>
            </form>
        </div>
    )
}