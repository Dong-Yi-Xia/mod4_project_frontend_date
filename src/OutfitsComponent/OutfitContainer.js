import React from 'react'
import Outfit from './Outfit'


class OutfitContainer extends React.Component{

    render(){

        let arrayOutfits = this.props.outfits.map(outfitObj => {
            return <Outfit 
                    key={outfitObj.id}
                    outfit={outfitObj}
                    // user={this.props.user}
                    />
        })

        return(
            <div className="outfitcontainer">
                 <table className="ui celled striped padded table">
                    <tbody>
                        <tr>
                            <th>
                            <h3 className="ui center aligned header">Outfitname</h3>
                            </th>
                            <th>
                            <h3 className="ui center aligned header">Headwear</h3>
                            </th>
                            <th>
                            <h3 className="ui center aligned header">Topwear</h3>
                            </th>
                            <th>
                            <h3 className="ui center aligned header">Bottomwear</h3>
                            </th>
                            <th>
                            <h3 className="ui center aligned header">Shoe</h3>
                            </th>
                            <th>
                            <h3 className="ui center aligned header">Accessories</h3>
                            </th>
                        </tr>
                            {arrayOutfits}
                    </tbody>
              </table>

          </div>
        )
    }
}

export default OutfitContainer