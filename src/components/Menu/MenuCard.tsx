import React from "react";
import { X as Close } from 'phosphor-react'

interface MenuCard{
    
    title: string
    description: string
    price: string 
    
}

//update

export function MenuCard(props:MenuCard){

    const [showModal, setShowModal] = React.useState(false);

    return(
        <div className=" rounded-lg w-[30%] flex items-center p-4 shadow-lg max-sm:w-[80vw]">
                
            <div>
                <h1 className="font-semibold">{props.title}</h1>

                <div className="flex items-center justify-start gap-2">

                    <h2 className=" w-[70%] text-gray-guest text-sm">{props.description}</h2>

                    <div className="flex flex-col gap-1">

                        <h3 className=" pl-2 font-bold text-orange-guest">R$ {props.price}</h3>

                        {/* <button className="pl-2 pr-2 pt-1 pb-1 bg-orange-guest rounded-2xl text-white text-xs transition duration-500 hover:shadow-2xl hover:bg-hover-orange-guest cursor-pointer hover:translate-y-1">Adicionar Item</button> */}

                        <button className="pl-2 pr-2 pt-1 pb-1 bg-orange-guest rounded-2xl text-white text-xs transition duration-500 hover:shadow-2xl hover:bg-hover-orange-guest cursor-pointer hover:translate-y-1"
                            onClick={() => setShowModal(true)}>
                                Adicionar Item
                        </button>

                    {showModal ? (
                        <>
                            <div
                                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                            >
                                <div className="relative w-auto my-6 mx-auto max-w-3xl max-sm:w-[80vw] ">
                                {/*content*/}
                                <div className="border-0 rounded-2xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex items-start justify-between pt-5 rounded-t w-4/5 self-center">
                                        <h3 className="text-black text-3xl font-semibold">
                                            Resumo
                                        </h3>

                                        <button
                                            className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setShowModal(false)}
                                        >
                                            <Close color="#425A7D"/>
                                        </button>
                                    </div>

                                    <div className="flex self-center justify-between w-4/5 p-5 shadow-xl mt-4">
                                        <div className="max-sm:text-xs">Mesa: 08</div>
                                        <div className="max-sm:text-xs">Garçom: Marcos</div>
                                        <div className="max-sm:text-xs">Tempo: 1h32m</div>
                                    </div>

                                    <div className="flex items-start justify-between pt-8 rounded-t w-4/5 self-center mb-4">
                                        <h3 className="text-black text-xl font-semibold">
                                            Meus Itens
                                        </h3>

                                        <div className="text-gray-guest">3</div>
                                    </div>

                                    <div className="flex items-start justify-between rounded-t w-4/5 self-center bg-gray-superligth p-5 border-b border-solid border-black rounded-b">
                                        <div className="flex items-center justify-between w-full">
                                            <div className="flex flex-col">
                                                <div  className="text-black font-bold">Chicken Wings</div>
                                                <div className="text-gray-guest font-medium">R$ 32,90</div>
                                            </div>

                                            <div className="flex">
                                                <div>-</div>
                                                <div>1</div>
                                                <div>+</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-start justify-between rounded-t w-4/5 self-center bg-gray-superligth p-5 border-b border-solid border-black rounded-b">
                                        <div className="flex justify-between w-full">
                                            <div className="flex flex-col">
                                                <div className="text-black font-bold">Chicken Wings</div>
                                                <div  className="text-gray-guest font-medium">R$ 32,90</div>
                                            </div>

                                            <div className="flex">
                                                <div>-</div>
                                                <div>1</div>
                                                <div>+</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-start justify-between rounded-t w-4/5 self-center bg-gray-superligth p-5 border-b border-solid border-black rounded-b">
                                        <div className="flex justify-between w-full">
                                            <div className="flex flex-col">
                                                <div className="text-black font-bold">Chicken Wings</div>
                                                <div className="text-gray-guest font-medium">R$ 32,90</div>
                                            </div>

                                            <div className="flex">
                                                <div>-</div>
                                                <div>1</div>
                                                <div>+</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-start justify-between pt-8 rounded-t w-4/5 self-center mb-4">
                                        <h3 className="text-black text-xl font-semibold">
                                            Parcial
                                        </h3>

                                        <div className="text-gray-guest">R$ 48,70</div>
                                    </div>
                                    

                                    {/*body*/}
                                    <div className="relative p-6 flex-auto">
                                    <p className="text-marcilio-blue-500 my-4 text-slate-500 text-lg leading-relaxed">
                                        I always felt like I could do anything. That’s the main
                                        thing people are controlled by!
                                    </p>
                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center justify-center p-6">
                                        <button
                                            className=" w-4/5 bg-marcilio-blue-500 text-white bg-orange-guest active:bg-hover-orange-guest font-bold rounded-2xl text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Confirmar Pedido
                                        </button>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                    ) : null}
                    </div>
                    

                </div>
                

            </div>

            

        </div>  

        
    )
}