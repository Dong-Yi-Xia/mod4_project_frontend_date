import React from 'react'
import Character from './Character'


function CharacterContainer({characters}){


    let charactersArray = characters.map(characterObj => {
        return <Character 
                    key={characterObj.id} 
                    character={characterObj} 
                />
    })


    return(
        <div className="cardContainer ui grid">
                {charactersArray}
        </div>
    )
} 

export default CharacterContainer
