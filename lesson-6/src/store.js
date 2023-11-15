import { makeObservable, observable, computed } from "mobx";

class Store {
  pokemon = [];
  filter = "";
  selectedPokemon = null;

  constructor() {
    makeObservable(this, {
      pokemon: observable,
      filter: observable,
      selectedPokemon: observable,
      filteredPokemon: computed,
      // filteredRenderPokemon: computed,
    });
  }

  get filteredPokemon() {
    return this.pokemon.filter(({ name: { english } }) =>
      english.toLocaleLowerCase().includes(this.filter.toLocaleLowerCase())
    );
  }
  // get filteredRenderPokemon() {
  //   return this.filteredPokemon
  //     .slice(0, 20)
  //     .map((pokemon) => (
  //       <PokemonRow
  //         key={pokemon.id}
  //         pokemon={pokemon}
  //         onClick={(pokemon) => store.setSelectedPokemon(pokemon)}
  //       />
  //     ));
  // }

  setPokemon(pokemon) {
    this.pokemon = pokemon;
  }
  setFilter(filter) {
    this.filter = filter;
  }
  setSelectedPokemon(selectedPokemon) {
    this.selectedPokemon = selectedPokemon;
  }
}

const store = new Store();

fetch("/react-lesson/pokemon.json")
  .then((resp) => resp.json())
  .then((pokemon) => store.setPokemon(pokemon));

export default store;
