import React from 'react'
import { NavLink } from 'react-router-dom'
import $ from 'jquery'



class Character extends React.Component{



    clickheart = (evt) => {
        evt.target.classList.toggle("active")
    }
    
    // componentDidMount(){
    //     $('.ui.rating').rating()
    // }
   

    render(){
        let { name, age, imageURL} = this.props.character
        
        return(
            <div class="singleCard five wide column">
                

                <h3>{name}</h3>
    
                <NavLink to={`/characters/${name}`}>  
                    <img src={imageURL}  alt={name}/>
                </NavLink>
            
                <div class="ui heart rating" data-rating="1" data-max-rating="5" >
                    <i className="icon active"> </i>
                    <i className="icon"> </i>
                    <i className="icon"> </i>
                    <i className="icon"> </i>
                    <i className="icon"> </i>
                </div>
            
                <h5>Age: {age}</h5>
                 
            </div>
        )
    }
}

export default Character