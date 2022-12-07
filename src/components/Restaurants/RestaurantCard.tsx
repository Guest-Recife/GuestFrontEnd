import fotosrestaurantes from "../../../public/logojhonny.jpg"

interface RestaurantCard{
    
    image: string
    title: string
    adress: string
    stars: string
    reviews: string
    price: string 
    
}

export function RestaurantCard(props:RestaurantCard){
    return(
        <div className=" rounded-lg cursor-pointer w-[30%] flex gap-4 items-center p-4 transition duration-500 hover:scale-110 hover:shadow-md">
                
            <img className="w-[100px] h-[100px] rounded-full" src={props.image} alt=""/>   
            
            <div>
                <h1 className="font-semibold">{props.title}</h1>
                <h2 className="text-gray-guest text-sm">{props.adress}</h2>

                <div className="flex gap-1 items-center">

                    <div className="text-yellow">
                        {props.stars}
                    </div>

                    <div className="text-gray-guest text-sm">
                        ({props.reviews} reviews)
                    </div>
                    
                </div>        

                <h3 className="text-orange-guest">{props.price}</h3>

            </div>

        </div>  
    )
}