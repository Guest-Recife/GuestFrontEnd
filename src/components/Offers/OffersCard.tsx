interface Offers{
    
    title: string
    description: string
    price: string 
    
}

export function OffersCard(props:Offers){
    return(
        <div className=" rounded-lg w-[30%] flex items-center p-4 shadow-lg max-sm:w-[80vw]">
                
            <div>
                <h1 className="font-semibold">{props.title}</h1>

                <div className="flex items-center justify-start gap-2">

                    <h2 className=" w-[70%] text-gray-guest text-sm">{props.description}</h2>

                    <div className="flex flex-col gap-1">

                        <h3 className=" pl-2 font-bold text-green text-xl">R$ {props.price}</h3>

                    </div>
                    

                </div>
                

            </div>

        </div>  
    )
}