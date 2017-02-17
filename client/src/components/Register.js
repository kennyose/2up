import React, { Component } from 'react'

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



class Register extends Component {

  state = {
    title: undefined,
    name: ''
  }

  setTitle = (fn) => {
    this.setState({ title: fn.option })
    console.log(fn.option)
  }
  setName = (name) => {
    console.log(name);
  }

  registerUser= (userObject) => {
    console.log(userObject);
  }

  render() {
    return (
      <div className='center' >
        <Section full={true} >
          <Form>
            <Header><Heading>Register</Heading></Header>
            <FormFields>
              <FormField>
                <Select placeholder='Select Title' options={['Mr.', 'Mrs.', 'Miss', 'Dr.', 'Chief', 'Alhaji']} onChange={this.setTitle} value={this.state.title}/>              
              </FormField><br/>
              <FormField>
                <TextInput placeHolder='Full Name' onDOMChange={this.setName}/>                
              </FormField><br/>
              <fieldset>
                <Paragraph>You must accept the Terms and Conditions</Paragraph>
                <FormField>
                  <CheckBox id='agree' name='agree' label='I Accept the Terms and Conditions' />
                </FormField>
              </fieldset>
            </FormFields>
            <Footer pad={{"vertical": "medium"}}>
              <Button label='REGISTER' type='submit' primary={true} onClick={this.registerUser} />
            </Footer>
          </Form>
        </Section>
      </div>
    )
  }
}

export default Register