import { ArrowRight } from 'phosphor-react'

interface perfilOptions{
    children: string,
}

export function PerfilOptions(perfilOptions: perfilOptions){
    return(
        <div className="w-full max-w-lg flex items-center p-4 border-b border-solid border-gray-light">
            <div className="flex justify-between items-center appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none">               
                <div>{perfilOptions.children}</div>
                <ArrowRight size={32} color="#DE5C3D" weight="thin" cursor='pointer'/>           
            </div>
        </div>
    )
}
