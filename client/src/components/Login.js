import React, { Component } from 'react'

import Section from 'grommet/components/Section'
import Anchor from 'grommet/components/Anchor'
import LoginForm from 'grommet/components/LoginForm'
import UserAdminIcon from 'grommet/components/icons/base/UserAdmin';




class Login extends Component {

  state = {
    errorMessage: ''
  }

  loginUser = (userObject) => {
    // TODO => Handle Login functionality
    console.log(userObject)
  }

  render() {
    return (
      <div className='center' >
        <Section full={true} align='center' >
          <LoginForm onSubmit={this.loginUser}
          align='center'
          usernameType='text'
          title='Login'
          secondaryText='Enter your Account Details'
          forgotPassword={<Anchor icon={<UserAdminIcon />} label='Forgot Password?' animateIcon={true} path='resetpass' />}
          rememberMe={true}
          errors={[this.state.errorMessage]} />
        </Section>
      </div>
    )
  }
}

export default Login