import React from 'react'

class Outfit extends React.Component{

    render(){
        
        let {outfitname, headwear, topwear, bottomwear, shoe, accessories} = this.props.outfit
        return(
            <tr>
                <td> {outfitname}</td>
                <td> {headwear}</td>
                <td> {topwear}</td>
                <td> {bottomwear}</td>
                <td> {shoe}</td>
                <td> {accessories}</td>
                <td> <button className="ui button"> X </button> </td>
          </tr>
        )
    }
}

export default Outfit