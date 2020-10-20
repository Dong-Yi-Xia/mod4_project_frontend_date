import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Character from './Character'
import CharacterInfoPage from './CharacterInfoPage'




class CharacterContainer extends React.Component{



    render(){

        let charactersArray = this.props.characters.map(characterObj => {
            return <Character 
                    key={characterObj.id}
                    character={characterObj} 
                    handleNewDisplayFun={this.handleNewDisplayFun}
                    />    
        })
        
        return(
            <div className="cardContainer ui grid">   
         
                {charactersArray}
     
            </div>
        )
    }
} 

 
 

export default CharacterContainer
