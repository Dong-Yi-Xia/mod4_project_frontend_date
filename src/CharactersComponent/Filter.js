import React from 'react'

class Filter extends React.Component {


    handleChange = (evt) => {
        this.props.handleSelection(evt.target.value)
    }

    render(){

        return(
            <div>
                <label className="filterTitle"> Interested In ... </label>
                <select value={this.props.filter} onChange={this.handleChange}>
                    <option value={"all"}> All </option>
                    <option value={"male"}> Male </option>
                    <option value={"female"}> Female </option>
                    <option value={"name"}> Sort By Name </option>
                    <option value={"age"}> Sort By Age </option>
                </select>
            </div>
        )
    }
}

export default Filter