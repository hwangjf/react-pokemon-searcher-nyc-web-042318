import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]:e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // debugger
    let pokeObj = {
      "height": 10,
      "weight": 130,
      "name": this.state.name,
      "abilities": [],
      "moves": [],
      "stats": [
        {
          "value": 80,
          "name": "special-defense"
        },
        {
          "value": 80,
          "name": "special-attack"
        },
        {
          "value": 63,
          "name": "defense"
        },
        {
          "value": 62,
          "name": "attack"
        },
        {
          "value": 60,
          "name": "speed"
        },
        {
          "value": this.state.hp,
          "name": "hp"
        }
      ],
      "types": [
        "grass",
        "poison"
      ],
      "sprites": {
        "front": this.state.frontUrl,
        "back": this.state.backUrl
      }
    }
    let config = {
      method:'POST',
      body:JSON.stringify(pokeObj),
      headers:{
        "Content-Type":"application/json"
      }
    }

    fetch('http://localhost:3000/pokemon',config).then(this.props.autoRefreshPokemon)

    this.setState({
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input 
              fluid label="Name" 
              placeholder="Name" 
              onChange={this.handleChange}
              name="name" 
              value={this.state.name} 
            />
            <Form.Input 
              fluid label="hp" 
              placeholder="hp" 
              onChange={this.handleChange}
              name="hp" 
              value={this.state.hp}
            />
            <Form.Input 
              fluid label="Front Image URL" 
              placeholder="url" 
              onChange={this.handleChange}
              name="frontUrl" 
              value={this.state.frontUrl}
            />
            <Form.Input 
              fluid label="Back Image URL" 
              placeholder="url" 
              onChange={this.handleChange}
              name="backUrl" 
              value={this.state.backUrl}
            />
          </Form.Group>
          <Form.Button onSubmit={this.handleSubmit}>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
