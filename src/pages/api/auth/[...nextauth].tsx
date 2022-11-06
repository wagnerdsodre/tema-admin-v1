import NextAuth from "next-auth";
import Providers from "next-auth/providers";


export default NextAuth({
    providers:[
        Providers.GitHub({
            clientId:'Iv1.78b7d9d0b9d6e1d1',
            clientSecret:'2196fd943b691f38288077df2387ab0021f0ff57'
        }),
        Providers.Auth0({
            clientId:'KFIZ1PSUQUpNt0LH4Z0STgrpaDalq6Bc',
            clientSecret:'jhnZdujnlaAZlsrtbkbVqK9cRX4Ue0ixf2so0cZkNYITxIe3GvwOqkE1Xt8Dl3oE',
            domain:'dev-2ye4s443ufxtqnxj.us.auth0.com'
        })
    ]
})

