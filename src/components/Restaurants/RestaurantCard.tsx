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
        <div className="w-[30%]  flex gap-2 items-center justify-between p-4">
                
            <img className="w-[100px] h-[100px] rounded-full" src={props.image} alt=""/>   
            
            <div>
                <h1 className="font-semibold">{props.title}</h1>
                <h2 className="text-gray-guest">{props.adress}</h2>

                <div className="flex gap-1">

                    <div className="text-yellow">
                        {props.stars}
                    </div>

                    <div className="text-gray-guest">
                        ({props.reviews} reviews)
                    </div>
                    
                </div>        

                <h3 className="text-orange-guest">{props.price}</h3>

            </div>

        </div>  
    )
}