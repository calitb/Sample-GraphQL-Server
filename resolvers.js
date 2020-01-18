const pokemons = require('.//pokemons.json');

const resolvers = {
  Query: {
    pokemons: () => {     
      return pokemons;
    },
    pokemon: (parent, args) => {
      const id = parseInt(args.id, 10)
      const matches = pokemons.filter( pokemon => parseInt(pokemon.id, 10) === id)
      return matches.length > 0 ? matches[0] : null
    }
  },
  Mutation: {
    addNickname: (parent, args) => {
      const id = parseInt(args.id, 10)
      const pokemon = pokemons[id - 1]
      pokemon.nickname = args.nickname
      return pokemon
    }
  },
  Pokemon: {
    image: (parent) => `https://img.pokemondb.net/artwork/${parent.name.toLowerCase().replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '').replace(' ', '-')}.jpg`
  }
};

module.exports = resolvers;