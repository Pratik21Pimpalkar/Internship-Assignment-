import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import SearchIcon from '@mui/icons-material/Search';
import box from '../Assets/Images/mail.svg'
import logo from "../Assets/Images/Brandlogo.png";
import { Container } from "@mui/system";

const NavlinksStyle={
  fontFamily: "Open Sans, serif",
  fontSize: "0.875rem",
  textTransform: 'capitalize',
  marginLeft: '2rem'
}

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="absolute"
        style={{ background: "transparent", boxShadow: "none" }}
      >
        <Toolbar>
          <Container maxWidth={"lg"} style={{display:"flex"}}>
            <Box component="img" alt="Homejam" src={logo} style={{marginRight:"auto"}}  />
            <Button color="inherit" style={NavlinksStyle}><SearchIcon/><span style={{paddingLeft: "0.31rem"}}>Search</span></Button>
            <Button color="inherit" style={NavlinksStyle}>Help</Button>
            <Button color="inherit" style={NavlinksStyle}>Account</Button>
            <Button color="inherit" style={NavlinksStyle}><img src={box} alt="" srcSet="" /></Button>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
