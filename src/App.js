import React from 'react';
import './App.css';
import NotFound from './FirstPageComponent/NotFound'
import Home from './FirstPageComponent/Home'
import NavBar from './FirstPageComponent/NavBar'
import Footer from './FirstPageComponent/Footer'
import CharactersPage from './CharactersComponent/CharactersPage'
import AppointmentsPage from './AppointmentsComponent/AppointmentsPage'
import OutfitsPage from './OutfitsComponent/OutfitsPage'
import ProfilePage from './ProfileComponent/ProfilePage'
import LoginPage from './AdminComponent/LoginPage'
import RegisterForm from './AdminComponent/RegisterForm'


import { Route, Switch, withRouter } from 'react-router-dom'






class App extends React.Component {

  state = {
    user: [],
    outfits: [],
    appointments: [],
    token: "",
    id: 0
  }
 

  userInfoFun = (userInfo) => {
    // console.log(userInfo)
    this.helpHandleResponse(userInfo)
  }

  componentDidMount(){
    if(localStorage.token){
      fetch("http://localhost:3000/users/keep_logged_in", {
        method: "GET",
        headers: {
          "Authorization": localStorage.token
        }
      })
        .then(res => res.json())
        .then(this.helpHandleResponse)
        
    }
  }


  helpHandleResponse = (resp) => {
    if(resp.error){
      alert(resp.error)
      // console.error(resp.error)
    } else {
      localStorage.token = resp.token
      this.setState({
        id: resp.user.id,
        token: resp.token,
        user: resp.user,
        outfits: resp.user.outfits,
        appointments: resp.user.appointments
        
      })
      this.props.history.push("/profile")
    }
  }

  handleLogOut = () => {
    this.setState({
      user: [],
      outfits: [],
      appointments: [],
      token: "",
      id: 0
    })
    localStorage.clear()
  }


  newOutfitFun =(newOutfit) => {
    this.setState(oldstate => {
      return{
        outfits: [...this.state.outfits, newOutfit]
      }
    })
  }
  

  deletedOutfitFun = (deletedOutfit) => {
    let newOutfitArray = this.state.outfits.filter(outfit => {
      return outfit.id !== deletedOutfit.id
    })

    this.setState({
      outfits: newOutfitArray
    })
  }


  newAppointmentFun =(newAppointment) => {
    this.setState(oldstate => {
      return{
        appointments: [...oldstate.appointments, newAppointment]
      }
    })

    this.props.history.push("/appointments")
  }


  deletedAppointmentFun = (deletedAppointment) => {
    let newAppointmentArray = this.state.appointments.filter(appointment => {
      return appointment.id !== deletedAppointment.id
    })

    this.setState({
      appointments: newAppointmentArray
    })
  }



    render(){
// console.log(this.state)
      return (
        <div className="App">
          <header>
             <NavBar handleLogOut={this.handleLogOut}/>

          </header>
     
          <main>
            <Switch>
              <Route path="/" exact component={Home} />

              <Route path="/characters"> 
                <CharactersPage 
                userID={this.state.user.id}
                outfits={this.state.outfits}
                newAppointmentFun={this.newAppointmentFun}
                token={this.state.token}
                />
              </Route>

              <Route path="/appointments" >
                <AppointmentsPage 
                appointments={this.state.appointments} 
                userID={this.state.user.id}
                deletedAppointmentFun={this.deletedAppointmentFun}
                token={this.props.token}
                />
              </Route>

              <Route path="/outfits" exact >
                  <OutfitsPage 
                  user={this.state.user} 
                  outfits={this.state.outfits}
                  newOutfitFun={this.newOutfitFun}
                  deletedOutfitFun={this.deletedOutfitFun}
                  token={this.state.token}
                  />  
              </Route>

              <Route path="/profile" exact >
                <ProfilePage user={this.state.user} />
              </Route>

              <Route path="/login" exact >
                <LoginPage userInfoFun={this.userInfoFun}/> 
              </Route>

              <Route path='/register' exact component={RegisterForm}/>
        
              
              <Route component={NotFound} />
            </Switch>
          </main>

          <footer>
              <Footer />
          </footer>

        </div>
      )
    }
}


export default  withRouter(App);
