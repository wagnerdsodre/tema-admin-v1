import Link from 'next/link'
import UseAuth from '../../datas/hook/UseAuth'


interface AvatarProps {
    className?: string
   
}

export default function Avatar(props: AvatarProps) {
    const { usuario } = UseAuth()
    return (
       
            <img
                src={usuario?.imagemUrl ?? '/images/avatar.svg'}
                alt="Avatar do Usuário"
                className={`
                    h-10 w-10 rounded-full cursor-pointer
                    ${props.className}
                `}
            />
      
    )
}