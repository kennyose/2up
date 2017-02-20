import React, { Component } from 'react'

import {
  logout
} from '../firebase/actions'

import profileImage from '../images/profileMale.jpg';

import Section from 'grommet/components/Section'
import Button from 'grommet/components/Button'
import Image from 'grommet/components/Image'
import Heading from 'grommet/components/Heading'
import Columns from 'grommet/components/Columns'
import Box from 'grommet/components/Box'
import Notification from 'grommet/components/Notification'
import Paragraph from 'grommet/components/Paragraph'



// import Icons
import AccessVolumeControlIcon from 'grommet/components/icons/base/AccessVolumeControl'
import UserIcon from 'grommet/components/icons/base/User'
import Label from 'grommet/components/Label';
import MailIcon from 'grommet/components/icons/base/Mail'
import Edit from 'grommet/components/icons/base/Edit'
import UserExpertIcon from 'grommet/components/icons/base/UserExpert';
import LogoutIcon from 'grommet/components/icons/base/Logout';




import DashHeader from './DashHeader';

class Dashboard extends Component {

  state = {
    userData: JSON.parse(localStorage.getItem('userData'))
  }

  logoutUser = () => {
    logout();
  }

  getSponsor = () => {
    console.log('Get Sponsor')
  }

  render() {
    var { userData } = this.state;
    return (
      <div>
        <Section full={true} align='center' >
          <DashHeader />
          <Section basis='full' pad='none' full='horizontal' separator='bottom' ></Section>
          <Columns justify='center' >
            <Box align='center' separator='right' >
              <Image src={profileImage} size='small' alt='Profile Image' />
              <Heading tag='h4' strong={true} >WELCOME, {userData.name}</Heading>
              <Label size='small'><UserIcon size='small' /> {userData.username}</Label>
              <Label size='small'><AccessVolumeControlIcon size='small' /> {userData.number}</Label>
              <Label size='small'><MailIcon size='small' /> {userData.email}</Label>
              <br />
              <Button accent={true} icon={<Edit />} label='Edit Profile' path='/dashboard/updateaccount' /><br />
            </Box>
            <Box align='center' size='large' separator='left' pad='small'>
              <Notification message='No Sponsor' state='You do not have a sponsor yet. Click the GET SPONSOR button below to join a package' status='warning' /><br />
              <Button primary={true} accent={true} icon={<UserExpertIcon />} label='GET SPONSOR' onClick={this.getSponsor} /><br />
              <Paragraph align='start' >Please Note that you must be ready to pay your Sponsor within <span className='redC' >6 Hours</span> to avoid disabling your Account.
              You will be Automatically assigned as a Sponsor to other members once your sponsor confirms payment.</Paragraph>
            </Box>
          </Columns>
          <br />
          <Button icon={<LogoutIcon />} secondary={true} label='LOGOUT' onClick={this.logoutUser} />
        </Section>
      </div>
    )
  }
}

export default Dashboard