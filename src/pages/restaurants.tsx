import { RestaurantCard } from "../components/Restaurants/RestaurantCard"
export function Restaurants(){
    return(
        
        <body className="flex flex-col items-center">

            <div className="background-color: bg-orange-guest w-[100%] h-[20vh] flex flex-col items-center p-4 justify-center">
                
                <div className="flex flex-col items-center w-3/5"> 

                    <div className="w-full mb-4">
                        <input type="text" placeholder="Pesquise por comidas, restaurantes..." 
                            className="w-full p-2 text-gray-guest rounded-lg bg-gray-50 text-sm focus:outline-none"
                            />
                    </div>

                    <div className="flex gap-4 w-full">
                        <input type="text" placeholder="Localização" 
                            className="block w-3/5 p-2 text-gray-guest rounded-lg bg-gray-50 text-sm focus:outline-none"
                        />

                        <input type="text" placeholder="Preço" 
                            className="block w-2/5 p-2 text-gray-guest rounded-lg bg-gray-50 text-sm focus:outline-none"
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
            

            <div className="w-[90vw] items-center ml-[5vw] mt-12 flex gap-6 flex-wrap">

               
                <RestaurantCard
                    image="https://media-cdn.tripadvisor.com/media/photo-s/1a/7b/b9/dd/johnny-gastrobar.jpg"
                    title="Jhonny Gastrobar"
                    adress="Avenida Dezessete de Agosto, 895"
                    stars="★★★"
                    reviews="276"
                    price="$$$"
        
                />  

                <RestaurantCard
                    image="https://media-cdn.tripadvisor.com/media/photo-s/1a/7b/b9/dd/johnny-gastrobar.jpg"
                    title="Jhonny Gastrobar"
                    adress="Avenida Dezessete de Agosto, 895"
                    stars="★★★"
                    reviews="276"
                    price="$$$"

                />             
                
                <RestaurantCard
                    image="https://media-cdn.tripadvisor.com/media/photo-s/1a/7b/b9/dd/johnny-gastrobar.jpg"
                    title="Jhonny Gastrobar"
                    adress="Avenida Dezessete de Agosto, 895"
                    stars="★★★"
                    reviews="276"
                    price="$$$"

                />

                <RestaurantCard
                    image="https://media-cdn.tripadvisor.com/media/photo-s/1a/7b/b9/dd/johnny-gastrobar.jpg"
                    title="Jhonny Gastrobar"
                    adress="Avenida Dezessete de Agosto, 895"
                    stars="★★★"
                    reviews="276"
                    price="$$$"

                />

                <RestaurantCard
                    image="https://media-cdn.tripadvisor.com/media/photo-s/1a/7b/b9/dd/johnny-gastrobar.jpg"
                    title="Jhonny Gastrobar"
                    adress="Avenida Dezessete de Agosto, 895"
                    stars="★★★"
                    reviews="276"
                    price="$$$"

                />

                <RestaurantCard
                    image="https://media-cdn.tripadvisor.com/media/photo-s/1a/7b/b9/dd/johnny-gastrobar.jpg"
                    title="Jhonny Gastrobar"
                    adress="Avenida Dezessete de Agosto, 895"
                    stars="★★★"
                    reviews="276"
                    price="$$$"

                />    

                <RestaurantCard
                    image="https://media-cdn.tripadvisor.com/media/photo-s/1a/7b/b9/dd/johnny-gastrobar.jpg"
                    title="Jhonny Gastrobar"
                    adress="Avenida Dezessete de Agosto, 895"
                    stars="★★★"
                    reviews="276"
                    price="$$$"

                />

                <RestaurantCard
                    image="https://media-cdn.tripadvisor.com/media/photo-s/1a/7b/b9/dd/johnny-gastrobar.jpg"
                    title="Jhonny Gastrobar"
                    adress="Avenida Dezessete de Agosto, 895"
                    stars="★★★"
                    reviews="276"
                    price="$$$"

                />

                <RestaurantCard
                    image="https://media-cdn.tripadvisor.com/media/photo-s/1a/7b/b9/dd/johnny-gastrobar.jpg"
                    title="Jhonny Gastrobar"
                    adress="Avenida Dezessete de Agosto, 895"
                    stars="★★★"
                    reviews="276"
                    price="$$$"

                />

                <RestaurantCard
                    image="https://media-cdn.tripadvisor.com/media/photo-s/1a/7b/b9/dd/johnny-gastrobar.jpg"
                    title="Jhonny Gastrobar"
                    adress="Avenida Dezessete de Agosto, 895"
                    stars="★★★"
                    reviews="276"
                    price="$$$"

                />

                <RestaurantCard
                    image="https://media-cdn.tripadvisor.com/media/photo-s/1a/7b/b9/dd/johnny-gastrobar.jpg"
                    title="Jhonny Gastrobar"
                    adress="Avenida Dezessete de Agosto, 895"
                    stars="★★★"
                    reviews="276"
                    price="$$$"

                />

                <RestaurantCard
                    image="https://media-cdn.tripadvisor.com/media/photo-s/1a/7b/b9/dd/johnny-gastrobar.jpg"
                    title="Jhonny Gastrobar"
                    adress="Avenida Dezessete de Agosto, 895"
                    stars="★★★"
                    reviews="276"
                    price="$$$"

                />

                <RestaurantCard
                    image="https://media-cdn.tripadvisor.com/media/photo-s/1a/7b/b9/dd/johnny-gastrobar.jpg"
                    title="Jhonny Gastrobar"
                    adress="Avenida Dezessete de Agosto, 895"
                    stars="★★★"
                    reviews="276"
                    price="$$$"

                />

                

            
            </div>


        </body>

    )

}