import useAuth from '../../datas/hook/UseAuth'



interface AvatarProps {
    className?: string

}

export default function Avatar(props: AvatarProps) {
    const { usuario } = useAuth()
    return (
        <>          
            <img src={usuario?.imagemUrl ?? '/images/avatar.svg'}
                          className={`
                    h-10 w-10 rounded-full cursor-pointer
                    ${props.className}
                `}
                />
        </>

    )
}