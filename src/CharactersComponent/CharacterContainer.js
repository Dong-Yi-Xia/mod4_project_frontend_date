import React from 'react'
import Character from './Character'
import Filter from './Filter'




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

                <div className="filterBar">  
                    <Filter 
                     filter={this.props.filter}
                     handleSelection={this.props.handleSelection}
                    />
                </div>


                {charactersArray}
               

            </div>
        )
    }
} 

 
 

export default CharacterContainer
