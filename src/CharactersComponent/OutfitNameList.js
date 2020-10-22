import React from 'react'

class OutfitNameList extends React.Component{

    handleChange = (evt) => {
        this.props.outfitStateFun(evt.target.value)
    }

    render(){
        let outlist = this.props.outfits.map(outfitObj => {
            return <option key={outfitObj.id} value={outfitObj.id}> {outfitObj.outfitname} </option>
        })

        return(
            <select value={this.props.theState.outfit} onChange={this.handleChange}>
                 <option value="0"> Select an Outfit </option> 
                {outlist}
            </select>
        )
    }
}

export default OutfitNameList