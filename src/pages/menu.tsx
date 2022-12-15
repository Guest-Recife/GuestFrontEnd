import { MenuCard } from "../components/Menu/MenuCard";

export function Menu(){
    return(

        <body className="flex flex-col items-center pb-8">

            <div className="background-color: bg-orange-guest w-[100%] h-[20vh] flex flex-col items-center p-4 justify-center">
                
                <div className="flex flex-col items-center w-3/5"> 

                    <div className="w-full mb-4 max-sm:w-[80vw]">
                        <input type="text" placeholder="Pesquise por pratos, ingredientes..." 
                            className="w-full p-2 text-black rounded-lg bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-white"
                            />
                    </div>

                    <div className="flex gap-4 w-full max-sm:w-[80vw]">
                        <input type="text" placeholder="Tempo de preparo" 
                            className="block w-3/5 p-2 text-black rounded-lg bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-white"
                        />

                        <input type="text" placeholder="Preço" 
                            className="block w-2/5 p-2 text-black rounded-lg bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-white"
                        />
                    </div>

                </div>

            </div>

            <div className="w-[85vw] mt-4 p-2 flex justify-between border-solid border-b-[1px] border-gray-guest">

                <div className="text-lg font-bold text-orange-guest">
                    Petiscos
                </div>

            </div>

            <div className="w-[90vw] items-center ml-[5vw] mt-8 flex gap-6 flex-wrap max-sm:ml-0 max-sm:justify-center">

                <MenuCard

                    title="Batata Frita"
                    description="Porção com 200g de batatas fritas. (Acompanha maionese da casa)"
                    price="14,90"

                
                />

                <MenuCard

                    title="Batata Frita"
                    description="Porção com 200g de batatas fritas. (Acompanha maionese da casa)"
                    price="14,90"


                />

                <MenuCard

                    title="Batata Frita"
                    description="Porção com 200g de batatas fritas. (Acompanha maionese da casa)"
                    price="14,90"


                />

                <MenuCard

                    title="Batata Frita"
                    description="Porção com 200g de batatas fritas. (Acompanha maionese da casa)"
                    price="14,90"


                />

            </div>

            <div className="w-[85vw] mt-4 p-2 flex justify-between border-solid border-b-[1px] border-gray-guest">

                <div className="text-lg font-bold text-orange-guest">
                    Pratos Individuais
                </div>

            </div>

            <div className="w-[90vw] items-center ml-[5vw] mt-8 flex gap-6 flex-wrap">

                <MenuCard

                    title="Batata Frita"
                    description="Porção com 200g de batatas fritas. (Acompanha maionese da casa)"
                    price="14,90"

                
                />

                <MenuCard

                    title="Batata Frita"
                    description="Porção com 200g de batatas fritas. (Acompanha maionese da casa)"
                    price="14,90"


                />

                <MenuCard

                    title="Batata Frita"
                    description="Porção com 200g de batatas fritas. (Acompanha maionese da casa)"
                    price="14,90"


                />

                <MenuCard

                    title="Batata Frita"
                    description="Porção com 200g de batatas fritas. (Acompanha maionese da casa)"
                    price="14,90"


                />

            </div>

        </body>



    )


}