import React, { Component } from 'react'

import Sidebar from 'grommet/components/Sidebar'
import Box from 'grommet/components/Box'
import Header from 'grommet/components/Header'
import Menu from 'grommet/components/Menu'
import Title from 'grommet/components/Title'
import Anchor from 'grommet/components/Anchor'
import Footer from 'grommet/components/Footer'

// Icons
import HomeIcon from 'grommet/components/icons/base/Home'
import GroupIcon from 'grommet/components/icons/base/Group'
import UserIcon from 'grommet/components/icons/base/User'
import AboutIcon from 'grommet/components/icons/base/Briefcase'
import MailIcon from 'grommet/components/icons/base/Mail'
import InfoIcon from 'grommet/components/icons/base/Info'
import SocialFacebookIcon from 'grommet/components/icons/base/SocialFacebook';
import SocialInstagramIcon from 'grommet/components/icons/base/SocialInstagram';
import SocialTwitterIcon from 'grommet/components/icons/base/SocialTwitter';
import SocialMailIcon from 'grommet/components/icons/base/SocialMail';
import UserAddIcon from 'grommet/components/icons/base/UserAdd';
import LoginIcon from 'grommet/components/icons/base/Login';





class NavSideBar extends Component {
  render() {
    return (
      <Sidebar size='small' colorIndex='neutral-1' >
        <Header pad='medium' justify='center' >
          <Title>
            <span>2Up!</span>
          </Title>
        </Header>
        <Box flex='grow' justify='start'>
          <Menu primary={true} size='large' >
            <hr/>
            <Anchor icon={<HomeIcon />} label='HOME' animateIcon={true} href='#' />
            <Anchor icon={<AboutIcon />} label='ABOUT' animateIcon={true} href='#' />
            <Anchor icon={<MailIcon />} label='CONTACT' animateIcon={true} href='#' />
            <Anchor icon={<InfoIcon />} label='FAQ' animateIcon={true} href='#' />
            <Anchor icon={<GroupIcon />} label='TESTIMONIES' animateIcon={true} href='#' />
            <Anchor icon={<UserIcon />} label='ACCOUNT' animateIcon={true} href='#' />
            <hr/>
            <Anchor icon={<LoginIcon />} label='LOGIN' animateIcon={true} href='#' />
            <Anchor icon={<UserAddIcon />} label='SIGNUP' animateIcon={true} href='#' />            
            <hr/>
          </Menu>
          </Box>
          <Footer>
            <Anchor icon={<SocialFacebookIcon />} animateIcon={true} href='#' />
            <Anchor icon={<SocialTwitterIcon />} animateIcon={true} href='#' />
            <Anchor icon={<SocialInstagramIcon />} animateIcon={true} href='#' />
            <Anchor icon={<SocialMailIcon />} animateIcon={true} href='#' />
          </Footer>
      </Sidebar>
        )
  }
}

export default NavSideBar