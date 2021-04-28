import React from 'react'
import './index.css'

class CardData extends React.Component {

    deleteButton = (character) => {
        this.props.deleteButton(character)
    }

    render(){
        let {name, image, id} = this.props.character
        
        return(
            <div className='card-data'>
                <h2>{name}</h2>
                <img src={image}></img>
                <br></br>
                <button onClick={() => this.deleteButton(this.props.character)}>Delete</button>
            </div>
        )
    }
}


export default CardData