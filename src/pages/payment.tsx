import { Wallet, ArrowRight } from 'phosphor-react'
import Swal from 'sweetalert2'

// Swal.fire({
//     icon: 'success',
//     text: 'Seu pedido já está sendo preparado!',
//     timer: 2000,
//     color: '#777777'
// })

// Swal.fire({
//     icon: 'error',
//     text: 'Desculpe, houve algum problema!',
//     timer: 2000,
//     color: '#777777'
// })

export function Payment(){
    return(
        <body className="flex flex-col items-center mb-5">

            <div className="background-color: bg-orange-guest w-[100%] h-[10vh] flex flex-col items-center p-4 justify-center">
                
                <div className="flex flex-col items-center w-3/5 font-semibold text-2xl text-white"> 

                    Pagamento

                </div>

            </div>

            <div className="flex flex-col w-full">
                <div className="flex self-center w-3/5 max-sm:w-[90vw] pl-5 mt-4 font-semibold text-xl text-gray-guest">
                    Resumo
                </div>

                <div className="mt-2 flex self-center justify-between w-3/5 max-sm:w-[90vw] p-5 shadow-xl">
                    <div  className="flex items-center" >
                        <div  className="max-sm:text-xs font-bold">
                            Mesa:
                        </div>
                        <div className="max-sm:text-xs ml-1">
                            08
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="max-sm:text-xs font-bold">
                            Garçom:
                        </div>
                        <div className="max-sm:text-xs ml-1">
                            Marcos
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="max-sm:text-xs font-bold">
                            Tempo:
                        </div>
                        <div className="max-sm:text-xs ml-1">
                            1h32m
                        </div>
                    </div>
                </div>

                <div className="flex self-center w-3/5 max-sm:w-[90vw] pl-5 mt-4 font-semibold text-xl text-gray-guest">
                    Carteira
                </div>
                
                <div className="flex flex-col self-center justify-between w-3/5 max-h-64 max-sm:w-[90vw] p-5 shadow-xl overflow-y-scroll overscroll-contain scrollbar-hide">
                    <div className="p-5 flex items-center justify-between w-full border-b border-solid border-gray-light">
                        <div className="text-gray-guest">**** **** **** 4587</div>
                        <div className="text-gray-guest">VISA</div>
                    </div>

                    <div className="p-5 flex items-center justify-between w-full border-b border-solid border-gray-light">
                        <div className="text-gray-guest">**** **** **** 4587</div>
                        <div className="text-gray-guest">MasterCard</div>
                    </div>

                    <div className="p-5 flex items-center justify-between w-full">
                        <div className='flex items-center gap-2'>
                            <Wallet size={32} color="#DE5C3D" weight="thin" />
                            <div className="text-gray-guest">Adicionar novo cartão</div>
                        </div>
                        <ArrowRight size={32} color="#DE5C3D" weight="thin" />
                    </div>
                </div>

                <div className="flex self-center w-3/5 max-sm:w-[90vw] pl-5 mt-4 font-semibold text-xl text-gray-guest">
                    Conta
                </div>

                <div className="flex flex-col self-center justify-between w-3/5 max-h-64 max-sm:w-[90vw] p-5 shadow-xl overflow-y-scroll overscroll-contain scrollbar-hide">
                    <div className="p-5 flex items-center justify-between w-full text-gray-guest">
                        <div>Batata Blue Cheese</div>
                        <div>2x</div>
                        <div>R$ 18,90</div>
                    </div>

                    <div className="p-5 flex items-center justify-between w-full text-gray-guest">
                        <div>Burguer de Picanha</div>
                        <div>2x</div>   
                        <div>R$ 21,90</div>
                    </div>

                    <div className="p-5 flex items-center justify-between w-full text-gray-guest">
                        <div>Cerveja Sol</div>
                        <div>6x</div>
                        <div>R$ 14,90</div>
                    </div>

                    <div className="p-5 flex items-center justify-between w-full text-gray-guest">
                        <div>Cerveja Heineken</div>
                        <div>6x</div>
                        <div>R$ 14,90</div>
                    </div>

                    <div className="p-5 flex items-center justify-between w-full text-gray-guest">
                        <div>Cerveja Heineken</div>
                        <div>6x</div>
                        <div>R$ 14,90</div>
                    </div>
                    
                </div>
                
                <div className="flex self-center w-3/5 max-sm:w-[90vw] pl-5 mt-4 font-semibold text-xl text-gray-guest">
                    Cupom
                </div>
                
                <div className="flex flex-col self-center justify-between w-3/5 max-h-64 max-sm:w-[90vw] p-5 shadow-xl">
                    <div className="flex items-center justify-between w-full text-gray-guest">
                        <input type="text" placeholder='DIGITE AQUI O SEU CUPOM' className='uppercase appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none' />
                    </div>
                </div>

                <div className='mt-2 flex self-center justify-between w-3/5 max-sm:w-[90vw] p-5 font-medium'>
                    <div>Parcial</div>
                    <div>R$ 124,36</div>
                </div>

                <div className='flex self-center justify-between w-3/5 max-sm:w-[90vw] p-5 pt-0 font-medium'>
                    <div>Serviço</div>
                    <div>R$ 12,43</div>
                </div>

                <div className='flex self-center justify-between w-3/5 max-sm:w-[90vw] p-5 pt-0 font-bold'>
                    <div>Total</div>
                    <div className='text-orange-guest'>R$ 136,79</div>
                </div>

                <div className='flex items-center justify-center w-full'>
                    <button
                        className=" w-3/5 mt-2 max-sm:w-4/5 text-white bg-orange-guest hover:bg-hover-orange-guest font-bold rounded-2xl text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                    >
                        Pagar Agora
                    </button>
                </div>

            </div>

        </body>
    )
}