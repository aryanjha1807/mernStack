import React,{useState} from 'react'
import {AppBar, Typography,Toolbar,Tabs,Tab} from '@mui/material'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import {NavLink} from 'react-router-dom';

const Header = () => {
  const [value, setValue] = useState()
  return (
   // <div><center><h1>kl university</h1></center></div>
    <AppBar sx={{backgroundColor:"black"}} position='sticky'>
    <Toolbar>
      <AccountBalanceIcon/>
    <Typography>
      &nbsp; counselling and visitor management system 
    </Typography>
    <Tabs sx={{ml:'auto'}} textColor='inherit' indicatorColor='primary' value={value} onChange={(e,val)=>setValue(val)} >
      <Tab label="sign up" LinkComponent={NavLink} to='/signup'/>
      <Tab label="sign in" LinkComponent={NavLink} to='/signin'/>
      <Tab label="add counsellor" LinkComponent={NavLink} to='/counsellor'/>
      <Tab label="add visitor" LinkComponent={NavLink} to='/visitor'/>
      <Tab label="appointment" LinkComponent={NavLink} to='/appointment'/>
      <Tab label="fetchregistrations" LinkComponent={NavLink} to='/fetchregistrations'/>
    </Tabs>

    </Toolbar>
    
  </AppBar>
  )
}

export default Header