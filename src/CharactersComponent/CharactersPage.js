import React from 'react'
import CharacterContainer from './CharacterContainer'


class CharactersPage extends React.Component {

    state = {
        characters : []
    }

    componentDidMount(){
        const charactersURL = 'http://localhost:3000/characters'
        fetch(charactersURL)
        .then(r => r.json())
        .then(resp => {
            this.setState({
                characters: resp
            })
        })
    }

    render(){
        
        return(
            <div className="characterMainContainer">
                
                <CharacterContainer 
                    characters={this.state.characters} 
                />

            </div>
        )
    }
}

export default CharactersPage