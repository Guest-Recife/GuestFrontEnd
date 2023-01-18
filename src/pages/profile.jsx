import React, {useState, useEffect} from "react";
import { PerfilOptions } from "../components/Form/PerfilOptions";

import ApiService from "../services/api";

export function Profile(){
    const [user, setUser] = useState([]);

    useEffect(() => {
        const getUserInfo = () => {
            const request = ApiService.request();

            return request.get('/user');
        };

        getUserInfo().then(({ data }) => {
            setUser(data && data.body);
        }).catch(error => {
            console.log(error);
        });
    }, []);

    return (
        <div>
            <div className="h-[15vh] bg-orange-guest flex items-center justify-center">
                <div className='w-full max-w-2xl flex items-center justify-center '>
                <div>
                    <img className="mr-8 w-20 h-20 rounded-full drop-shadow-lg" src="../public/foto-perfil.jpeg" alt="Foto de Perfil" />
                </div>
                <div className='flex flex-col items-center'>
                    <h1 className='text-2xl text-white'>{user.name}</h1>
                    <h4 className='mt-0.5 text-xs text-white'>{user.email} | {user.phone}</h4>
                </div>
                </div>
            </div>
            <div className='h-auto mt-8 bg-white flex flex-col items-center justify-center'>

                <div className="w-full max-w-2xl max-sm:w-[90vw] max-h-full bg-white flex flex-col p-8 items-center rounded-lg h-5/6 drop-shadow-2xl">

                    <PerfilOptions children='Histórico de Pedidos'></PerfilOptions>
                    <PerfilOptions children='Formas de Pagamento'></PerfilOptions>
                    <PerfilOptions children='Notificações'></PerfilOptions>
                    <PerfilOptions children='Créditos e Recompensas'></PerfilOptions>
                    <PerfilOptions children='Configurações'></PerfilOptions>
                    <PerfilOptions children='Ajuda & Suporte'></PerfilOptions>
                    <PerfilOptions children='Perguntas Frequentes'></PerfilOptions>

                </div>

                <h3 className='mt-8 text-md text-orange-guest hover:text-hover-orange-guest cursor-pointer hover:underline transition duration-200'>Desconectar</h3>

            </div>  
        </div>
    )
}
