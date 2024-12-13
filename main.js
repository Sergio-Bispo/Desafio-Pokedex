//function convertPokemonToLi(pokemonTypes){
//return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
//}
const pokemonList = document.getElementById('pokemoList')
const loadMoreButton =document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 10
let offset = 0;


function leadPokemonItens(offset, limit ) {
    pokeApi.getPokemons(limit, offset).then((pokemons = []) => {
        const newHTML = pokemons.map(pokemon) => `
               <li class= "pokemons ${pokemon.type}">
            <span class="number">#${pokemon.namber}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((Type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

            <img src=${pokemon.photo}"
                 alt=${"pokemon.name"}>    
            </div>
            
            </li>
            .join('')
            `
        pokemonList.innerHTML += newHtml
})

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit

    const qtdRecordWidthNexPage = offset + limit

    if (qtdRecordWidthNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        leadMoreButton.parentElement.RemoveChild(loadMoreButton)
    } else{
}      loadPokemonItens(offset, limit)
})

}





