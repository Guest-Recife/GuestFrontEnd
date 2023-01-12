interface MenuCard{
    
    title: string
    description: string
    price: string 
    
}

//update

export function MenuCard(props:MenuCard){
    return(
        <div className=" rounded-lg w-[30%] flex items-center p-4 shadow-lg max-sm:w-[80vw]">
                
            <div>
                <h1 className="font-semibold">{props.title}</h1>

                <div className="flex items-center justify-start gap-2">

                    <h2 className=" w-[70%] text-gray-guest text-sm">{props.description}</h2>

                    <div className="flex flex-col gap-1">

                        <h3 className=" pl-2 font-bold text-orange-guest">R$ {props.price}</h3>

                        <button className="pl-2 pr-2 pt-1 pb-1 bg-orange-guest rounded-2xl text-white text-xs transition duration-500 hover:shadow-2xl hover:bg-hover-orange-guest cursor-pointer hover:translate-y-1">Adicionar Item</button>

                    </div>
                    

                </div>
                

            </div>

        </div>  
    )
}