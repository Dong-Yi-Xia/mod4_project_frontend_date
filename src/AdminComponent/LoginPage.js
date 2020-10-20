import React from 'react'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import { Route, Switch} from 'react-router-dom'


class LoginPage extends React.Component {


    render(){
        return(
            <div>
                

                <Switch> 
                    <Route path='/login' exact>
                          <LoginForm userInfoFun={this.props.userInfoFun}/>
                    </Route>
                
                    <Route path='/register' exact>
                          <RegisterForm />
                    </Route>
                </Switch>
            </div>
        )
    }
}

export default LoginPage