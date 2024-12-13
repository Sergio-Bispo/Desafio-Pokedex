


const pokeApi = {}

function convertPokeApiDetailPokemon(pokeDatail){
    const pokemon = new pokemon {}
    pokemon.namber = pokeDatail.id
    pokemon.name = pokeDatail.name

    const types = pokeDatail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types


    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDatail.sprates.other.dream_world.font_default

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
    .then((reponse) => reponse.join())
    .then(convertPokeApiDetailPokemon) 

    }


pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    
    fetch(url)  
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    //.catch ((error) => console.log(error)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonsDetails) => {
        debugger
        console.log(pokemonsDetails)
    })
    
}
/*Promise.all({
fetch['https://pokeapi.co/api/v2/pokemon/1'],
fetch['https://pokeapi.co/api/v2/pokemon/2'],
fetch['https://pokeapi.co/api/v2/pokemon/3'],
fetch['https://pokeapi.co/api/v2/pokemon/4'],
}).then{(results) => {
    console.log(results)
}}*/