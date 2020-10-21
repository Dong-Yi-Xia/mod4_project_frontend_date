import React from 'react'

class OutfitForm extends React.Component{
    state ={
        outfitname: "", 
        headwear: "", 
        topwear: "", 
        bottomwear: "", 
        shoe: "", 
        accessories: "",
        user_id: ""
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        let {outfitname, headwear, topwear, bottomwear, shoe, accessories} = this.state
        let {id} = this.props.user

        fetch("http://localhost:3000/outfits", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({
                outfitname: outfitname, 
                headwear: headwear, 
                topwear: topwear, 
                bottomwear: bottomwear, 
                shoe: shoe, 
                accessories: accessories,
                user_id: id
            })
        })
          .then(res => res.json())
          .then(newOutfit => {
            this.props.newOutfitFun(newOutfit)        
          })  
      }


    handleChange = (evt) => {
        let {name, value} = evt.target
        this.setState({
          [name]: value
        })
    }


    render(){

        let {outfitname, headwear, topwear, bottomwear, shoe, accessories} = this.state

        return(
            <div>
                 <form className="outfitForm" onSubmit={this.handleSubmit}>
                     <h1>Create a New OutFit</h1>
                    <input type="text" placeholder="outfitname" name="outfitname" 
                      value={outfitname} onChange={this.handleChange} required
                      />
                    <input type="text" placeholder="headwear" name="headwear" 
                      value={headwear} onChange={this.handleChange} required
                      /> 
                    <input type="text" placeholder="topwear" name="topwear" 
                    value={topwear} onChange={this.handleChange} required
                    />
                    <input type="text" placeholder="bottomwear" name="bottomwear" 
                    value={bottomwear} onChange={this.handleChange} required
                    />   
                    <input type="text" placeholder="shoe" name="shoe" 
                    value={shoe} onChange={this.handleChange} required
                    />
                   <input type="text" placeholder="accessories" name="accessories" 
                    value={accessories} onChange={this.handleChange} required
                    />       
  
                    <button class="ui primary button" type="submit" > Submit </button>
                </form>

            </div>
        )
    }
}

export default OutfitForm