interface propsLogo{
    url:any,
    icon?:any,
    heigth?:string,
    width?:string,
   }

export default function Logo(props: propsLogo){
    return(
        <div className={`
        w-${props.width} h-${props.width} `}>
       <img src={props.url} alt="logo" />
        </div>
    )
}