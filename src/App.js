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
import CharacterInfoPage from './CharactersComponent/CharacterInfoPage'

import { Route, Switch, withRouter, Link, NavLink } from 'react-router-dom'





class App extends React.Component {

      state = {
        characters : []
    }

    componentDidMount(){
        const charactersURL = 'http://localhost:3000/characters'
        fetch(charactersURL)
        .then(r => r.json())
        .then(resp => {
            this.setState({
                characters: resp
            })
        })
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
              <Route path="/characters" exact> 
                <CharactersPage characters={this.state.characters} />
              </Route>
              <Route path="/appointments" >
                <AppointmentsPage/>
              </Route>
              <Route path="/outfits" exact component={OutfitsPage} />
              <Route path="/profile" exact component={ProfilePage} />
              <Route path="/login" exact component={LoginPage} />


              <Route path="/characters/2" exact>
                <CharacterInfoPage/>
              </Route>
               

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


export default App;
