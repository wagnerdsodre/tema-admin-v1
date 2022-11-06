import Layout from "../components/theme/Layout";
import useContextData from "../datas/hook/UseContext";

export default function Cadastro() {
 const data = useContextData()

  return (
    <div className={` `}>
        <Layout title="Cadastro" subtitle="Cadastro">
               
         <h1>{data.tema}</h1>
        
        </Layout>     
     </div>
  )
}
