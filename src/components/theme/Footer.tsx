interface propsFooter{
    copyright:string,
    children?:any
}


export default function Footer(props:propsFooter){
    return(
        <div className={` mb-0 fixed flex flex-col`}>
         {props.copyright}
         {props.children}
        </div>
    )
}