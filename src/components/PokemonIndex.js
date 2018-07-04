import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'


class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    value: ''
  }

  componentDidMount() {
    this.autoRefreshPokemon()
  }

  autoRefreshPokemon = () => {
    fetch('http://localhost:3000/pokemon').then(r => r.json()).then(data => this.setState({ pokemons: data }))
  }

  handleSearchChange = (e,{value}) => {
    console.log(e,{value})
    this.setState({value},this.filterCollection)
  }

  filterCollection = () => {
    return this.state.pokemons.filter(p=>{
      return p.name.toLowerCase().includes(this.state.value.toLowerCase())
    })
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleSearchChange, 500)} showNoResults={false} />
        <br />
        <PokemonForm autoRefreshPokemon={this.autoRefreshPokemon} />
        <br />
        <PokemonCollection pokemons={this.filterCollection()} />
      </div>
    )
  }
}

export default PokemonPage
