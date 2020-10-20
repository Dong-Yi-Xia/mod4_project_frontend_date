import React from 'react'
import CharacterContainer from './CharacterContainer'
import CharacterInfoPage from './CharacterInfoPage'
import { Route, Switch } from 'react-router-dom'


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

    // handleNewDisplayFun =(info) => {
    //     this.setState({
    //         character: info[1]
    //     })
    // }

    updatedLPFun = (updatedLP) => {
        let newCharArr = this.state.characters.map(character =>{
            if (character.id === updatedLP.id){
              return updatedLP
            } else{
              return character
            }
          })
      
          this.setState({
            characters: newCharArr
          })
    }

    renderSpecificCharacter = (routerProps) => {
        console.log(routerProps)
        let whatUserTyped = routerProps.match.params.id
        let foundCharacter = this.state.characters.find( (characterObj) => {
            return characterObj.name === whatUserTyped
        })
        if(foundCharacter){
            return <CharacterInfoPage character={foundCharacter} updatedLPFun={this.updatedLPFun}/>  
        } 
    }


    render(){
        
        return(
            <div className="characterMainContainer"> 
         
                <Switch> 
                    <Route path='/characters' exact>
                        <CharacterContainer characters={this.state.characters} />
                    </Route>
                
                    <Route path="/characters/:id" exact render={this.renderSpecificCharacter}/>
                </Switch>

            </div>
        )
    }
}

export default CharactersPage