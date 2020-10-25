import React from 'react'

class Outfit extends React.Component{


    handleDelete = (evt) => {
        fetch(`http://localhost:3000/outfits/${this.props.outfit.id}`, {
          method: 'DELETE',
          headers: {
            "Content-Type": "Application/json",
            "authorization": this.props.token
        },
        })
        .then (r => r.json())
        .then(deletedOutfit => {
          this.props.deletedOutfitFun(this.props.outfit)
        })
      }

      
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
                <td> <button className="ui button" onClick={this.handleDelete}> X </button> </td>
          </tr>
        )
    }
}

export default Outfit