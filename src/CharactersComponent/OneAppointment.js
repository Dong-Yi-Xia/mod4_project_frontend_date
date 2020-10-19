import React from 'react'

class OneAppointment extends React.Component{

    render(){
        let {date, location, user} = this.props.appointment

        return(
            <tr>
                <td> {date}</td>
                <td> {location}</td>
                <td> {user.name}</td>
            </tr>
        )
    }
}

export default OneAppointment