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
    errorMessage: ''
  }

  setTitle = (title) => {
    this.setState({ title: title.option })
    console.log(title.option)
  }
  setName = (name) => {
    console.log(name);
  }
  setGender = (gender) => {
    this.setState({ gender: gender.option })
    console.log(gender);
  }
  setNumber = (number) => {
    this.setState({ number: number.option })
  }
  setEmail = (email) => {
    this.setState({ email: email.option })
    console.log(email);
  }
  setUsername = (username) => {
    this.setState({ username: username.option })
    console.log(username);
  }
  setPassword = (password) => {
    this.setState({ password: password.option })
    console.log(password);
  }
  setConfirmPassword = (confirmpassword) => {
    this.setState({ confirmpassword: confirmpassword.option })
    console.log(confirmpassword);
  }

  registerUser = (e) => {
    e.preventDefault();
    this.setState({ loading: true })    
    var {email, password, username, title, number, gender, name} = this.state;
    signup(email, password, username, name, number, title, gender).then((userData) => {
      this.setState({ loading: false });
      // TODO: Redirect page to Dashboard??? or delegate to authStateChanged
    }, (error) => {
      this.setState({
        loading: false,
        errorMessage: error.message
      })
      // TODO: Handle error codes and set errorMessage state
    })
  }

  render() {
    return (
      <div className='center' >
        <Section full={true} align='center' >
          <Form pad='large' onSubmit={(e) => console.log(e)} >
            <Header><Heading align='center' strong={true} >Register</Heading></Header>
            <FormFields>
              <FormField>
                <Select placeholder='Select Title' options={['Mr.', 'Mrs.', 'Miss', 'Dr.', 'Chief', 'Alhaji']} onChange={this.setTitle} value={this.state.title}/>              
              </FormField><br/>
              <FormField>
                <TextInput placeHolder='Full Name' onDOMChange={this.setName}/>                
              </FormField><br/>
              <FormField>
                <Select placeholder='Select Gender' options={['Male', 'Female', 'None']} onChange={this.setGender} value={this.state.gender} />
              </FormField><br/><hr/>
              <FormField>
                <TextInput placeHolder='Enter Phone Number (080********)' onDOMChange={this.setNumber} />
              </FormField><br/>
              <FormField>
                <TextInput placeHolder='Enter Email Address' onDOMChange={this.setEmail} type='email' />
              </FormField><br/>
              <FormField>
                <TextInput placeHolder='Enter Unique Username' onDOMChange={this.setUsername} />
              </FormField><br/>
              <FormField>
                <TextInput placeHolder='Enter Password' onDOMChange={this.setPassword} type='password' />
              </FormField>
              <FormField>
                <TextInput placeHolder='Confirm Password' onDOMChange={this.setConfirmPassword} type='password' />
              </FormField><br/>
              <fieldset>
                <FormField>
                  <Paragraph>I accept the Terms and Conditions</Paragraph>
                  <CheckBox id='agree' name='agree' />
                </FormField>
              </fieldset>
            </FormFields>
            <hr/>
            {this.state.loading ? (<div><br/><Spinning /><br/></div>) : (<i></i>)}
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