import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../Assets/Images/Brandlogo.png";
import { Container } from "@mui/system";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="absolute"
        style={{ background: "transparent", boxShadow: "none" }}
      >
        <Toolbar>
          <Container maxWidth={"lg"}>
            <Box component="img" alt="Homejam" src={logo}  />
            <Button color="inherit">Search</Button>
            <Button color="inherit">Help</Button>
            <Button color="inherit">Account</Button>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
