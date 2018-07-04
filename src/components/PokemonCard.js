import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  
  state = {
    img: "front"
  }

  handleClick = () => {
    this.state.img === "front" ? this.setState({ img: "back" }) : this.setState({ img: "front" })
  }


  render() {
    let {name, height, abilities, sprites, stats, types, weight} = this.props.pokemon

    return (
      <Card onClick={this.handleClick} >
        <div>
          <div className="image">
            <img src={ this.state.img==="front" ? sprites.front : sprites.back } />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {stats[5].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
