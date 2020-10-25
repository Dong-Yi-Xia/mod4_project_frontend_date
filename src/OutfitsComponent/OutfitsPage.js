import React from 'react'
import OutfitForm from './OutfitForm'
import OutfitContainer from './OutfitContainer'


class OutfitsPage extends React.Component {
    render(){
       

        
        return(
            <div class="outfitpage">
                <OutfitForm 
                user={this.props.user} 
                newOutfitFun={this.props.newOutfitFun}
                token={this.props.token}
                />

                <OutfitContainer 
                outfits={this.props.outfits} 
                deletedOutfitFun={this.props.deletedOutfitFun}
                token={this.props.token}
                />
            </div>
        )
    }
}

export default OutfitsPage