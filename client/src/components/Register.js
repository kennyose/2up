import React, { Component } from 'react'

import {
  signup
} from '../firebase/actions'

import Section from 'grommet/components/Section'
import Form from 'grommet/components/Form'
import Header from 'grommet/components/Header'
import Heading from 'grommet/components/Heading'
import FormField from 'grommet/components/FormField'
import FormFields from 'grommet/components/FormFields'
import Paragraph from 'grommet/components/Paragraph'
import Footer from 'grommet/components/Footer'
import Button from 'grommet/components/Button'
import CheckBox from 'grommet/components/CheckBox'
import Select from 'grommet/components/Select'
import TextInput from 'grommet/components/TextInput'
import Spinning from 'grommet/components/icons/Spinning'



class Register extends Component {

  state = {
    title: '',
    name: '',
    gender: '',
    email: '',
    number: '',
    username: '',
    password: '',
    comfirmpassword: '',
    loading: false,
    errorMessage: '',
    emailError: '',
    nameError: '',
    usernameError: '',
    passwordError: '',
    numberError: ''
  }

  setTitle = (title) => {
    this.setState({ title: title.option })
  }
  setName = (name) => {
    this.setState({name: name.target.value})
  }
  setGender = (gender) => {
    this.setState({ gender: gender.option })
  }
  setNumber = (number) => {
    this.setState({ number: number.target.value })
  }
  setEmail = (email) => {
    this.setState({ email: email.target.value })
  }
  setUsername = (username) => {
    this.setState({ username: username.target.value })
  }
  setPassword = (password) => {
    this.setState({ password: password.target.value })
  }
  setConfirmPassword = (confirmpassword) => {
    this.setState({ confirmpassword: confirmpassword.target.value })
  }

  registerUser = (e) => {
    // Reset error States
    this.setState({
      errorMessage: '',
      emailError: '',
      nameError: '',
      usernameError: '',
      passwordError: '',
      numberError: ''
    });
    e.preventDefault();
    var {email, password, username, title, number, gender, name} = this.state;
    // Satellize input and show errors for diferent states
    if (name.length < 3) {
      this.setState({nameError: 'Please enter your REAL NAME'});
      // Show generic error at end of form
      this.setState({errorMessage: 'Error! Please Check'});
      return;
    } else if (number.length !== 11 || number.split('')[0] !== '0') {
      this.setState({numberError: 'Wrong Phone Number'});
      this.setState({errorMessage: 'Error! Please Check'});
      return;
    } else if (username.length < 3 || username.split(' ').length > 1) {
      this.setState({usernameError: 'Enter correct Username (No Spaces)'});
      this.setState({errorMessage: 'Error! Please Check'});
      return;
    } else if (password !== this.state.confirmpassword) {
      this.setState({passwordError: 'Passwords do not Match!'});
      this.setState({errorMessage: 'Error! Please Check'});
      return;
    } else {
      // if all is good, run firebase signup function
      this.setState({ loading: true })      
      signup(email, password, username, name, number, title, gender)
        .then(() => console.log('User Signup Successful'))
        .catch((error) => {
          this.setState({ loading: false })
          // TODO: Handle error codes and set errorMessage state
          if (error.code === 'auth/email-already-in-use') {
            this.setState({emailError: 'This email is already in use!'})
          } else if (error.code === 'auth/invalid-email') {
            this.setState({emailError: 'This email is invalid!'})
          } else if (error.code === 'auth/weak-password') {
            this.setState({passwordError: 'This password is too weak.'})
          }
          // Show generic error at end of form
          this.setState({errorMessage: 'Error! Please Check'})
        })
    }
  }

  render() {
    return (
      <div className='center' >
        <Section full={true} align='center' >
          <Header><Heading align='center' strong={true} >Register</Heading></Header>        
          <Form pad='large' onSubmit={this.registerUser} >
          <Header><p>The registration process is short and simple. Make sure you provide Information that is accurate. 
           Please note that you must be able to make payment within <span className='redC' >6 hours</span> after being matched with a Sponsor
           or your account will be disabled</p></Header>
            <FormFields>
              <FormField>
                <Select placeholder='Select Title' options={['Mr.', 'Mrs.', 'Miss', 'Dr.', 'Chief', 'Alhaji']} onChange={this.setTitle} value={this.state.title}/>              
              </FormField><br/>
              <FormField error={this.state.nameError} >
                <TextInput placeHolder='Full Name' onDOMChange={this.setName}/>                
              </FormField><br/>
              <FormField>
                <Select placeholder='Select Gender' options={['Male', 'Female', 'None']} onChange={this.setGender} value={this.state.gender} />
              </FormField><br/><hr/>
              <FormField error={this.state.numberError} >
                <TextInput placeHolder='Enter Phone Number (080********)' onDOMChange={this.setNumber} />
              </FormField><br/>
              <FormField error={this.state.emailError} >
                <TextInput placeHolder='Enter Email Address' onDOMChange={this.setEmail} type='email' />
              </FormField><br/>
              <FormField error={this.state.usernameError} >
                <TextInput placeHolder='Enter Unique Username' onDOMChange={this.setUsername} />
              </FormField><br/>
              <FormField error={this.state.passwordError} >
                <TextInput placeHolder='Enter Password' onDOMChange={this.setPassword} type='password' />
              </FormField>
              <FormField>
                <TextInput placeHolder='Confirm Password' onDOMChange={this.setConfirmPassword} type='password' />
              </FormField><br/>
              <fieldset>
                <FormField error={this.state.errorMessage} >
                  <Paragraph>I accept the Terms and Conditions</Paragraph>
                  <CheckBox id='agree' name='agree' defaultChecked={true} />
                </FormField>
              </fieldset>
            </FormFields>
            <hr/>
            {this.state.loading ? (<div><br/><Spinning /><br/><p>Registering User.....</p></div>) : (<i></i>)}
            <Footer >
              <Button label='REGISTER' type='submit' primary={true} onClick={this.registerUser} />
            </Footer>
          </Form>
        </Section>
      </div>
    )
  }
}

export default Register