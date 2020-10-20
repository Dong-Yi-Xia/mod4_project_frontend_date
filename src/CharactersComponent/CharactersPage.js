import React from 'react'
import CharacterContainer from './CharacterContainer'
import CharacterInfoPage from './CharacterInfoPage'
import { Route, Switch } from 'react-router-dom'



class CharactersPage extends React.Component {

    state = {
        characters : [],
        filter: "all"
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

    handleSelection = (selectedValue) => {

        this.setState(oldState => {
            return{
                filter: selectedValue
            }
        })
    }


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

    filterArrayCharacters = () => {
        let choice = this.state.filter
        switch (choice){
            case "all" :
              return this.state.characters
           
            case "male" :
              return this.state.characters.filter(character => character.gender === "male")

            case "female" :
                return this.state.characters.filter(character => character.gender === "female")

            case "name" : 
            let copyCharacterNameArray= [...this.state.characters]  
            copyCharacterNameArray.sort( (nameA, nameB) => {
                return nameA.name.localeCompare(nameB.name)
            })
            return copyCharacterNameArray  
            
            case "age" : 
            let copyCharacterAgeArray= [...this.state.characters]  
            copyCharacterAgeArray.sort( (ageA, ageB) => {
                return ageA.age - ageB.age
            })
            return copyCharacterAgeArray    
        }
    }


    render(){
        
        return(
            <div className="characterMainContainer"> 
         
               

                <Switch> 
                    <Route path='/characters' exact>
                        <CharacterContainer 
                         characters={this.filterArrayCharacters()}
                         filter={this.state.filter}
                         handleSelection={this.handleSelection}
                         />
                    </Route>
                
                    <Route path="/characters/:id" exact render={this.renderSpecificCharacter}/>
                </Switch>

            </div>
        )
    }
}

export default CharactersPage