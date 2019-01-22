import {Component} from 'react'

class loginForm extends Component{
    render(){
        return(
            <div>
                <h1>Login Form</h1>
                <div>Username:<input></input></div>
                <div>Password:<input></input></div>
                <div><button>Login</button></div>
            </div>
        )
    }
}

export default loginForm