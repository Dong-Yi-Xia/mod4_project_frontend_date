import React from 'react'
import { Route } from 'react-router-dom'
import Character from './Character'
import CharacterInfoPage from './CharacterInfoPage'




class CharacterContainer extends React.Component{


    state ={
        display: true,
        character: []
    }
    
    handleNewDisplayFun =(info) => {
        this.setState({
            display: info[0],
            character: info[1]
        })
    }

    updatedLPFun = (updatedLP) => {
        this.setState({
            character: updatedLP
        })
    }
    
    renderSpecificCharacter = (routerProps) => {
            return <CharacterInfoPage character={this.state.character} updatedLPFun={this.updatedLPFun}/>     
    }



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

                {this.state.display 
                ? 
                charactersArray
                    :
                 <Route path="/characters/:id" exact render={this.renderSpecificCharacter}/>
                }  
                 
            </div>
        )
    }
} 

 
 

export default CharacterContainer
