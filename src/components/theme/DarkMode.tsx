import { iconMoon, iconSum } from "../icons"

interface propsButton {
    tema: string,
    alternarTema: () => void,
    className?:string
}

export default function DarkMode(props: propsButton) {
    return props.tema === "dark" ? (
        <div className={` ${props.className} p-1 rounded-full flex flex-col cursor-pointer  border-solid border-2 border-indigo-200
        items-center justify-center`} onClick={props.alternarTema}>
        {iconMoon}
        
            
        </div>


    ) : (
        <div className={` p-1 rounded-full flex cursor-pointer flex-col border-solid border-2 border-gray-700
        items-center justify-center`} onClick={props.alternarTema}>
        {iconSum}
        
        
        </div>

    )
}