import React, {useState, useEffect} from "react";
import { RestaurantCard } from "../components/Restaurants/RestaurantCard"

import ApiService from "../services/api";

export function Restaurants(){
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        const getrestaurantInfo = () => {
            const request = ApiService.request();

            return request.get('/restaurant');
        };

        getrestaurantInfo().then(({ data }) => {
            setRestaurants(data && data.body);
        }).catch(error => {
            console.log(error);
        });
    }, []);

    return(
        <body className="flex flex-col items-center">

            <div className="background-color: bg-orange-guest w-[100%] h-[20vh] flex flex-col items-center p-4 justify-center">

                <div className="flex flex-col items-center w-3/5"> 

                    <div className="w-full mb-4">
                        <input type="text" placeholder="Pesquise por comidas, restaurantes..." 
                            className="w-full p-2 text-black rounded-lg bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-gray-guest"
                            />
                    </div>

                    <div className="flex gap-4 w-full">
                        <input type="text" placeholder="Localização" 
                            className="block w-3/5 p-2 text-black rounded-lg bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-gray-guest"
                        />

                        <input type="text" placeholder="Preço" 
                            className="block w-2/5 p-2 text-black rounded-lg bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-gray-guest"
                        />
                    </div>

                </div>

            </div>

            <div className="w-[85vw] mt-4 p-2 flex justify-between border-solid border-b-[1px] border-gray-guest">
                <div className="text-md text-gray-guest">
                    58 Restaurantes
                </div>

                <div className="text-md text-gray-guest">
                    Filtrar
                </div>

            </div>

            <div className="mt-4 w-[85vw] text-lg font-semibold flex justify-self-start">
                Restaurantes
            </div>

            <div className="w-[90vw] items-center ml-[5vw] mt-8 flex gap-6 flex-wrap">

               {
                   restaurants.map(restaurant => {
                       return (
                            <RestaurantCard
                                image="https://10619-2.s.cdn12.com/rests/original/101_507783411.jpg"
                                title={restaurant.name}
                                adress={`${restaurant.address}, ${restaurant.number}`}
                                stars="★★★★"
                                reviews="246"
                                price="$$$"
                            />
                       );
                   })
               }

            </div>


        </body>

    )

}