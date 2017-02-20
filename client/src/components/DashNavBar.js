import React, { Component } from 'react'

import {
  logout
} from '../firebase/actions'


import Sidebar from 'grommet/components/Sidebar'
import Box from 'grommet/components/Box'
import Header from 'grommet/components/Header'
import Menu from 'grommet/components/Menu'
import Title from 'grommet/components/Title'
import Anchor from 'grommet/components/Anchor'
import Footer from 'grommet/components/Footer'
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';


// Icons
import HomeIcon from 'grommet/components/icons/base/Home'
import GroupIcon from 'grommet/components/icons/base/Group'
import UserIcon from 'grommet/components/icons/base/User'
import MailIcon from 'grommet/components/icons/base/Mail'
import HelpIcon from 'grommet/components/icons/base/Help';
import SocialFacebookIcon from 'grommet/components/icons/base/SocialFacebook';
import SocialInstagramIcon from 'grommet/components/icons/base/SocialInstagram';
import SocialTwitterIcon from 'grommet/components/icons/base/SocialTwitter';
import SocialMailIcon from 'grommet/components/icons/base/SocialMail';
import UserAddIcon from 'grommet/components/icons/base/UserAdd';
import TaskIcon from 'grommet/components/icons/base/Task';
import AnnounceIcon from 'grommet/components/icons/base/Announce';
import LogoutIcon from 'grommet/components/icons/base/Logout';
import ChatIcon from 'grommet/components/icons/base/Chat';
import Edit from 'grommet/components/icons/base/Edit'
import LineChartIcon from 'grommet/components/icons/base/LineChart';
import PlatformRedhatIcon from 'grommet/components/icons/base/PlatformRedhat';
import CurrencyIcon from 'grommet/components/icons/base/Currency';
import ArticleIcon from 'grommet/components/icons/base/Article';





class NavSideBar extends Component {

  logoutUser = () => {
    logout();
  }

  render() {
    return (
      <Sidebar size='small' colorIndex='neutral-1' >
        <Header pad='medium' justify='center' >
          <Title>
            <span>2Up!</span>
          </Title>
        </Header>
        <Box flex='grow' justify='start'>
          <Menu primary={true} >
            <hr />
            <Accordion>
              <AccordionPanel pad='small' heading={<Anchor icon={<UserIcon />} label='ACCOUNT' animateIcon={true} />}>
                <Anchor icon={<Edit />} label='Edit Profile' animateIcon={true} /><br/>
                <Anchor icon={<CurrencyIcon />} label='Bank Details' animateIcon={true} /><br/>
                <Anchor icon={<PlatformRedhatIcon />} label='Update Picture' animateIcon={true} /><br/>
                <Anchor icon={<LineChartIcon />} label='History' animateIcon={true} />                
              </AccordionPanel>
            </Accordion>
            <Anchor icon={<HomeIcon />} label='DASHBOARD' animateIcon={true} path='/dashboard' />
            <Anchor icon={<TaskIcon />} label='PACKAGES' animateIcon={true} path='/dashboard/packages' />            
            <Anchor icon={<AnnounceIcon />} label='REFERRALS' animateIcon={true} path='/dashboard/referrals' />
            <Anchor icon={<ChatIcon />} label='HELP/SUPPORT' animateIcon={true} path='/dashboard/support' />
            <Anchor icon={<ArticleIcon />} label='RULES' animateIcon={true} path='/rules' />            
            <Anchor icon={<GroupIcon />} label='TESTIMONIES' animateIcon={true} path='/testimonies' />
            <Anchor icon={<HelpIcon />} label='FAQ' animateIcon={true} path='/faq' />
            <hr />
            <Anchor icon={<LogoutIcon />} label='LOGOUT' animateIcon={true} onClick={this.logoutUser} />
            <hr />
          </Menu>
        </Box>
        <Footer align='center' >
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