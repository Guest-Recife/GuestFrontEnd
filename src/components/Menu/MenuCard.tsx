interface MenuCard{
    
    title: string
    description: string
    price: string 
    
}

export function MenuCard(props:MenuCard){
    return(
        <div className=" rounded-lg cursor-pointer w-[30%] flex gap-4 items-center p-4 transition duration-500 hover:scale-110 hover:shadow-md">
                
               
            
            <div>
                <h1 className="font-semibold">{props.title}</h1>

                <div className="flex ">

                    <h2 className=" w-[250px] text-gray-guest text-sm">{props.description}</h2>

                    <div className="flex flex-col">

                        <h3 className="font-bold ml-8 text-orange-guest">{props.price}</h3>

                        <button className="ml-8 bg-orange-guest rounded-lg text-white">Comprar</button>

                    </div>
                    

                </div>
                

            </div>

        </div>  
    )
}