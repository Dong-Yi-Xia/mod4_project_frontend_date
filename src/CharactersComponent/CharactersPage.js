import React from 'react'
import CharacterContainer from './CharacterContainer'


class CharactersPage extends React.Component {

 
    render(){
        
        return(
            <div className="characterMainContainer">
                
                <CharacterContainer 
                    characters={this.props.characters} 
                />

            </div>
        )
    }
}

export default CharactersPage