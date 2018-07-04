import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  mapPokemons = (props) => {
    return this.props.pokemons.map(p => {
      return (
          <PokemonCard key={p.id} pokemon={p} />
      )
    })
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.mapPokemons()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
