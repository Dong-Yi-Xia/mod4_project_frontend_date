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
    // user: {
    //   outfits: {},
    //   appointments: {}
    // },
    user: [],
    outfits: []
  }
 
  userInfoFun = (userInfo) => {
    this.setState({
      username: userInfo
    })
    this.props.history.push("/profile")
  }

  componentDidMount(){
    fetch("http://localhost:3000/users/1")
    .then(r => r.json())
    .then(resp => {
      this.setState({
          user: resp,
          outfits: resp.outfits
      })
    })
  }

  newOutfitFun =(newOutfit) => {
    console.log(newOutfit)
    this.setState(oldstate => {
      return{
        outfits: [...this.state.outfits, newOutfit]
      }
    })
    // this.props.history.push("/characters")
   
    console.log(this)
  }
  

    render(){

      return (
        <div className="App">
          <header>
             <NavBar />

          </header>
     
          <main>
            <Switch>
              <Route path="/" exact component={Home} />

              <Route path="/characters"> 
                <CharactersPage />
              </Route>

              <Route path="/appointments" >
                <AppointmentsPage/>
              </Route>

              <Route path="/outfits" exact >
                  <OutfitsPage 
                  user={this.state.user} 
                  outfits={this.state.outfits}
                  newOutfitFun={this.newOutfitFun}
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
