
import Header from "./Header"
import Sidebar from "./Sidebar"
import Content from "./Content"
import Footer from "./Footer"
import useContextData from "../../datas/hook/UseContext"
import ForceAuth from "./ForceAuth"



interface propsLayout {
  title: string,
  subtitle: string,
  children?: any
}


export default function Layout(props: propsLayout) {
  const { DarkOn, tema } = useContextData();

  return (
    <ForceAuth>
    <div className={` ${tema}  bg-gradient-to-t from-blue-200 to-blue-100 p-2
        dark:bg-gradient-to-t  flex h-screen w-screen`}>
      <Sidebar></Sidebar>
      <div className={`
          flex flex-col bg-slate-100 text-gray-700
          w-screen p-2  dark:bg-gray-900 dark:text-write
          `}>
        <Content>
          <div className={`flex flex-grow`}>
            <Header title={props.title} subtitle={props.subtitle} />
          </div>
          {props.children}
        </Content>

        <div>
          <Footer copyright="Power by Wagner S.">


          </Footer>
        </div>


      </div>
    </div>
    </ForceAuth>
  )
}