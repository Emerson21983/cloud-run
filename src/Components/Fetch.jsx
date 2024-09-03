import { useEffect, useState } from "react";

function Fetch() {
    const [data, setData] = useState(
        {
            sprites: {
                front_default: ""
            },
            name: "",
            height: 0,
            weight: 0
        }
    )
    const [pokemon, setPokemon] = useState("")

    const FetchPokeApi = async (e) => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${e}`)
                .then((response) => response.json())
                .then((data) => setData(data))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div class="container flex">
                <div class="w-full bg-white rounded-lg p-8 flex flex-wrap relative z-10">
                    <div class="relative mb-4 flex w-full space-x-0">
                        <input type="text" value={pokemon} id="text" name="text" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e) => setPokemon(e.target.value)} />
                        <div className="pl-2">
                            <button class="text-white bg-indigo-500 p-2 border-0 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={() => {
                                FetchPokeApi(pokemon)
                                console.log(data)
                            }}>Fetch</button>
                        </div>
                    </div>
                </div>
            </div>
            {data.name !== '' && <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -m-4 justify-center items-center">
                        <div class="p-4 md:w-1/3">
                            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden p-2">
                                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={data.sprites.front_default} alt="blog" />
                                <div class="p-6">
                                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">POKEMON</h2>
                                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{data.name}</h1>
                                    <div class=" items-center flex-wrap ">
                                        <h1><b>Altura: </b>{data.height * 10}cm</h1>
                                        <h1><b>Peso: </b>{data.weight / 10}Kg</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>}
        </>
    )
}

export default Fetch;