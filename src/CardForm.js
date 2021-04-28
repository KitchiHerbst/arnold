import React from 'react';
class CardForm extends React.Component {
    submitHandler = (e) => {
        e.preventDefault()
        console.log('form submitted')
        let newName = e.target[0].value
        let newImage = e.target[1].value
        let newCharacter = {
            name: newName,
            image: newImage
          }
          e.target.reset()
          this.props.addCharacter(newCharacter)
    }
    render(){
        return (
            <form onSubmit={this.submitHandler}>
                <label>Character Name</label>
                <input type='text' placeholder='name'/>
                <br/>
                <label>Character Image</label>
                <input type='text' placeholder='image'/>
                <br/>
                <input type='submit'/>
            </form>
        )
    }
}
export default CardForm