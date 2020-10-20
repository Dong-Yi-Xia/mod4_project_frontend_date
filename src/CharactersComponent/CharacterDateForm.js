import React from 'react'


class CharacterDateForm extends React.Component{

    state = {
        date: "",
        location: "",
        outfit: ""
    }


    render(){
        return(
            <form className="ui form" onSubmit={this.handleSubmit}>
                <div className="inline fields">
                    <input 
                        type="date" 
                        name="date" 
                        // value={this.state.date}
                        // onChange={this.handleChange}
                    />
                    <input 
                        type="text" 
                        name="location" 
                        placeholder="location" 
                        // value={this.state.description}
                        // onChange={this.handleChange}
                    />
                    <select>
                        <option value={"--"}> Select an Outfit </option>
                    </select> 
                    
                    
                </div>
                <button className="ui button" type="submit" > 
                Request A Date
                </button>
            </form>
        )
    }
}

export default CharacterDateForm