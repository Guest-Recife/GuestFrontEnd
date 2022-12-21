import { OffersCard } from "../components/Offers/OffersCard";

export function Offers() {
    return (

        <body className="flex flex-col items-center pb-8">

            <div className="background-color: bg-orange-guest w-[100%] h-[25vh] flex flex-col items-center p-4 justify-center">

                <div className="flex flex-col items-center w-3/5">

                    <div className="w-full mb-4 max-sm:w-[80vw]">
                        <input type="text" placeholder="Pesquise por pratos, ingredientes..."
                            className="w-full p-2 text-black rounded-lg bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-white"
                        />
                    </div>

                    <div className="flex gap-4 w-full max-sm:w-[80vw]">
                        <input type="text" placeholder="Localização"
                            className="block w-3/5 p-2 text-black rounded-lg bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-white"
                        />

                        <input type="text" placeholder="Preço"
                            className="block w-2/5 p-2 text-black rounded-lg bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-white"
                        />
                    </div>

                    <div className="flex gap-4 w-full max-sm:w-[80vw] mt-4">
                        <input type="text" placeholder="Dia da semana"
                            className="block w-3/5 p-2 text-black rounded-lg bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-white"
                        />

                        <input type="text" placeholder="Horário"
                            className="block w-2/5 p-2 text-black rounded-lg bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-white"
                        />
                    </div>

                </div>

            </div>

            <div className="w-[85vw] mt-4 p-2 flex justify-end border-solid border-b-[1px] border-gray-guest">

                <div className="text-md text-gray-guest">
                    Filtrar
                </div>

            </div>

            <div className="w-[90vw] items-center ml-[5vw] mt-8 flex gap-6 flex-wrap max-sm:ml-0 max-sm:justify-center">

                <OffersCard

                    title="Batata Frita"
                    description="Porção com 200g de batatas fritas. (Acompanha maionese da casa)"
                    price="14,90"


                />

                <OffersCard

                    title="Batata Frita"
                    description="Porção com 200g de batatas fritas. (Acompanha maionese da casa)"
                    price="14,90"


                />

                <OffersCard

                    title="Batata Frita"
                    description="Porção com 200g de batatas fritas. (Acompanha maionese da casa)"
                    price="14,90"


                />

                <OffersCard

                    title="Batata Frita"
                    description="Porção com 200g de batatas fritas. (Acompanha maionese da casa)"
                    price="14,90"


                />

                <OffersCard

                    title="Batata Frita"
                    description="Porção com 200g de batatas fritas. (Acompanha maionese da casa)"
                    price="14,90"


                />



            </div>



        </body>



    )


}