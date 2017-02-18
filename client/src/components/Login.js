import React, { Component } from 'react'

import {
  login
} from '../../firebase/actions'

import Section from 'grommet/components/Section'
import Anchor from 'grommet/components/Anchor'
import LoginForm from 'grommet/components/LoginForm'
import UserAdminIcon from 'grommet/components/icons/base/UserAdmin';
import Spinning from 'grommet/components/icons/Spinning';



class Login extends Component {

  state = {
    errorMessage: '',
    loading: false
  }

  loginUser = (user) => {
    this.setState({ loading: true })
    // TODO => Handle Login functionality
    login(user.username, user.password).then(() => {
      this.setState({ loading: false })
    }, (error) => {
      this.setState({
        loading: false,
        errorMessage: error.message
      });
    })
    console.log(user)
  }

  render() {
    return (
      <div className='center' >
        <Section full={true} align='center' >
          <LoginForm onSubmit={this.loginUser}
          align='center'
          title='Login'
          secondaryText='Enter your Account Details'
          forgotPassword={<Anchor icon={<UserAdminIcon />} label='Forgot Password?' animateIcon={true} path='resetpass' />}
          rememberMe={true}
          errors={[this.state.errorMessage]} />
          <br/>
          {this.state.loading ? (<div><Spinning size='large' /><br/><p>Logging in.....</p></div>) : (<i></i>)}
        </Section>
      </div>
    )
  }
}

export default Login