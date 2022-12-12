import { RestaurantCard } from "../components/Restaurants/RestaurantCard"
export function Restaurants(){
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

               
                <RestaurantCard
                    image="https://10619-2.s.cdn12.com/rests/original/101_507783411.jpg"
                    title="Jhonny Gastrobar"
                    adress="Avenida Dezessete de Agosto, 895"
                    stars="★★★★"
                    reviews="246"
                    price="$$$"
        
                />  

                <RestaurantCard
                    image="https://i1.wp.com/conversagastronomica.com/wp-content/uploads/2021/01/IMG_7812-scaled.jpg"
                    title="Nez Bistrô"
                    adress="Praça de Casa Forte, 314"
                    stars="★★★★"
                    reviews="246"
                    price="$$$$"

                />             
                
                <RestaurantCard
                    image="https://www.diariodepernambuco.com.br/static/app/noticia_127983242361/2020/04/24/826798/20200424164108165328o.jpg"
                    title="Pizza Hut"
                    adress="Avenida Dezessete de Agosto, 734"
                    stars="★★★★"
                    reviews="246"
                    price="$$$"

                />

                <RestaurantCard
                    image="https://i0.wp.com/robertajungmann.com.br/wp-content/uploads/2019/10/Oma-P%C3%A2tisserie-Bistr%C3%B4.jpg?fit=1024%2C768&ssl=1"
                    title="Oma Pâtisserie"
                    adress="Rua José Godói Vasconcelos, 109"
                    stars="★★★★"
                    reviews="246"
                    price="$$$"

                />

                <RestaurantCard
                    image="https://cdn.discordapp.com/attachments/971602506264227850/1043265593714950224/E029602D-7E0B-4249-BE4D-9ABCEA787156.jpg"
                    title="Bar do pedrito"
                    adress="Avenida Dezessete de Agosto, 895"
                    stars="★★"
                    reviews="246"
                    price="$$$"

                />

                <RestaurantCard
                    image="https://10619-2.s.cdn12.com/rests/original/101_507783411.jpg"
                    title="Jhonny Gastroba"
                    adress="Avenida Dezessete de Agosto, 895"
                    stars="★★★"
                    reviews="246"
                    price="$$$"

                />    

                <RestaurantCard
                    image="https://10619-2.s.cdn12.com/rests/original/101_507783411.jpg"
                    title="Jhonny Gastrobar"
                    adress="Avenida Dezessete de Agosto, 895"
                    stars="★★★"
                    reviews="246"
                    price="$$$"

                />

                <RestaurantCard
                    image="https://10619-2.s.cdn12.com/rests/original/101_507783411.jpg"
                    title="Jhonny Gastrobar"
                    adress="Avenida Dezessete de Agosto, 895"
                    stars="★★★"
                    reviews="246"
                    price="$$$"

                />

                <RestaurantCard
                    image="https://10619-2.s.cdn12.com/rests/original/101_507783411.jpg"
                    title="Jhonny Gastrobar"
                    adress="Avenida Dezessete de Agosto, 895"
                    stars="★★★"
                    reviews="246"
                    price="$$$"

                />

                <RestaurantCard
                    image="https://10619-2.s.cdn12.com/rests/original/101_507783411.jpg"
                    title="Jhonny Gastrobar"
                    adress="Avenida Dezessete de Agosto, 895"
                    stars="★★★"
                    reviews="246"
                    price="$$$"

                />

                <RestaurantCard
                    image="https://10619-2.s.cdn12.com/rests/original/101_507783411.jpg"
                    title="Jhonny Gastrobar"
                    adress="Avenida Dezessete de Agosto, 895"
                    stars="★★★"
                    reviews="246"
                    price="$$$"

                />

                <RestaurantCard
                    image="https://10619-2.s.cdn12.com/rests/original/101_507783411.jpg"
                    title="Jhonny Gastrobar"
                    adress="Avenida Dezessete de Agosto, 895"
                    stars="★★★"
                    reviews="246"
                    price="$$$"

                />

                <RestaurantCard
                    image="https://10619-2.s.cdn12.com/rests/original/101_507783411.jpg"
                    title="Jhonny Gastrobar"
                    adress="Avenida Dezessete de Agosto, 895"
                    stars="★★★"
                    reviews="246"
                    price="$$$"

                />

                

            
            </div>


        </body>

    )

}