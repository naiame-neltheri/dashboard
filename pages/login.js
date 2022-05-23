const login = () => {
    return(
        <main className="h-screen bg-white w-screen flex justify-center items-center">
            <form className="container mx-auto w-1/4 flex-col p-5 gap-2 border border-black-300 rounded-md" action="/api/auth/login" method="post">
                <label className="font-medium">Username</label>
                <hr/>
                <input className="rounded-md w-full border border-black-700" placeholder="Username..." type="text" required></input>
                <label className="font-medium">Password</label>
                <hr/>
                <input className="rounded-md w-full border border-black-700" placeholder="Password..." type="password" required></input>
                <button className="border border-green-500 w-full bg-green-500 text-white rounded-md mt-3" type="submit">Login</button>
            </form>
        </main>
    );
}

export default login;