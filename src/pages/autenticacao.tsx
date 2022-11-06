import { useState } from "react"

import InputFormAuth from "../components/theme/InputFormAuth"
import UseAuth from "../datas/hook/UseAuth"

interface propsAuthentication {
  text: string,
  children?: any
}
export default function Autenticacao(props: propsAuthentication) {
  const [mode, setMode] = useState<'login' | 'cadastro' >('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const {cadastrar, login, loginGoogle} = UseAuth()

const msgError = (msg, count = 5) :void => {
  setError(msg)
  setTimeout(() => setError(null), count * 1000)
}


  async function submeter() {
    try{
      if(mode === 'login') {
        setMode('login')
       await login(email, password)
      } else{
        await  cadastrar(email, password)
       setMode('cadastro')
       msgError('Ocoreu um erro')
      }

    }catch(e){
       msgError(e?.message??'Erro desconhecido')
    }
    
    
     
    
  }

  return (
    <div className={`flex h-screen items-center justify-center`}>
      <div className={`hidden md:block md:w-1/2 lg:w-2/3`}>
        <img src="https://source.unsplash.com/random"
          alt="Imagens "
          className={`h-screen object-cover w-full`}
        />
      </div>

      <div className={` shadow-l-3 m-10 flex-end w-full md:w-1/2 lg:w-1/3  `}>
       {error === null ? '':(
        <div>
       
        <p className={`text-red-500 p-2 border border-red-500`}>Ocorreu um erro!</p>
        </div>
       )}



        <h1 className={`font-semibold mb-5`}>
          {mode === 'login' ? "Entre com seu email e senha" : "Cadastre-se no Sistema"}</h1>


        <InputFormAuth
          label="Email"
          type='text'
          value={email}
          changeValue={setEmail}
          required
        />
        <InputFormAuth
          label="Password"
          type="password"
          value={password}
          changeValue={setPassword}
          required
        />

        <InputFormAuth
          label="Confirm Password"
          type="password"
          value={password}
          changeValue={setPassword}
          required
          modeRender={false}
        />

        <button onClick={submeter}
          className={`w-full text-white bg-slate-400 mt-6 my-4 py-3  rounded-lg 
         hover:bg-slate-900 hover:text-white   ` }>
          {mode == "login" ? "Entrar" : "Cadastrar"}
        </button>

        <hr className={`my-6 w-full border-gray-300`} />

        <button onClick={loginGoogle}
          className={`w-full text-white bg-gradient-to-br from-red-400 to-red-800 my-4 py-3  rounded-lg 
         hover:bg-gradient-to-br hover:from-red-600 hover:to-red-900 hover:text-white   ` }>
          Entre com sua conta do Google
        </button>

        {mode === 'cadastro' ? (
          <div className={`mt-8`}>
          Já possui uma conta ?
            <a onClick={() => setMode('login')}
              className={`cursor-pointer font-semibold text-gray-700`}
            > Entre com as suas credenciais </a>
          </div>


        ) : (
          <div className={`mt-8`}>
            Novo na plataforma ?
            <a onClick={() => setMode('cadastro')}
              className={`cursor-pointer font-semibold text-gray-700`}
            > Crie sua conta agora</a>
          </div>
        )


        }


      </div>
    </div>

  )
}