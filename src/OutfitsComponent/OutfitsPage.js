import React from 'react'
import OutfitForm from './OutfitForm'
import OutfitContainer from './OutfitContainer'


class OutfitsPage extends React.Component {
    render(){
       

        
        return(
            <div>
                <OutfitForm 
                user={this.props.user} 
                newOutfitFun={this.props.newOutfitFun}
                />

                <OutfitContainer 
                // user={this.props.user}
                outfits={this.props.outfits} 
                />
            </div>
        )
    }
}

export default OutfitsPage