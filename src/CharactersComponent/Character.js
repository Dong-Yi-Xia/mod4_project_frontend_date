import React from 'react'
import { Route, Switch, NavLink, Redirect } from 'react-router-dom'
import CharacterInfoPage from './CharacterInfoPage'



class Character extends React.Component{


    // clickheart = (evt) => {
    //     evt.target.classList.toggle("active")
    // }

    // moreInfoCharacter = (routerProps) => {
    //     console.log(routerProps)
    //     // <CharacterPage character={this.props}/>
    // }

 
    render(){
        let {id, name, age, gender, occupation, lovePoint, favorite, bio, imageURL} = this.props.character
        
        return(
            <div className="singleCard five wide column">
                

                <h3>{name}</h3>
                <NavLink to={`/characters/${id}`}>  
                    <img src={imageURL} />
                </NavLink>
               
                
                <div class="ui heart rating" data-rating="1" data-max-rating="5" >
                    <i className="icon active"> </i>
                    <i className="icon"> </i>
                    <i className="icon"> </i>
                    <i className="icon"> </i>
                    <i className="icon"> </i>
                </div>


                {/* <Switch>

                    <Route path="/characters/2" Component={CharacterInfoPage}/>
               </Switch>  */}
                    
            
            </div>
        )
    }
}

export default Character