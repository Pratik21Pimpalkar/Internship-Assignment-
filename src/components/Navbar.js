import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import box from "../Assets/Images/mail.svg";
import logo from "../Assets/Images/Brandlogo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import { Typography } from "@mui/material";

const NavlinksStyle = {
  fontFamily: "Open Sans, serif",
  fontSize: "0.875rem",
  minWidth: "auto",
  textTransform: "capitalize",
};

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu=()=>{
    setMenu(!menu)
  }
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="absolute"
        style={{ background: "transparent", boxShadow: "none" }}
      >
        <Toolbar>
          <Container
            maxWidth={"lg"}
            style={{ display: "flex", alignItems: "center" }}
          >
            <Box
              component="img"
              alt="Homejam"
              src={logo}
              className="pointerCursor"
              style={{ marginRight: "auto" }}
            />
            <Button
              color="inherit"
              className="pointerCursor"
              style={NavlinksStyle}
            >
              <SearchIcon style={{ minWidth: "auto" }} />
              <Typography
                display={{ xs: "none", md: "block" }}
                style={{ paddingLeft: "0.31rem" }}
              >
                Search
              </Typography>
            </Button>
            <Box display={{ lg: "block", xs: "none" }}>
              <Button
                color="inherit"
                className="pointerCursor"
                display={{ lg: "block", md: "none" }}
                style={NavlinksStyle}
              >
                Help
              </Button>
            </Box>
            <Box display={{ lg: "block", xs: "none" }}>
              <Button
                color="inherit"
                className="pointerCursor"
                style={NavlinksStyle}
              >
                Account
              </Button>
            </Box>
            <Button
              color="inherit"
              className="pointerCursor"
              style={NavlinksStyle}
            >
              <img src={box} alt="" srcSet="" />
            </Button>
            <Box display={{ md: "block", lg: "none" }}>
              {!menu ? (
                <MenuIcon onClick={handleMenu} style={{ fontSize: "1.7rem" }} />
              ) : (
                <CloseIcon  onClick={handleMenu} />
              )}
            </Box>
            {menu && (
              <Box style={{position:'absolute', top:"50%", left:"50%", transform:"translate(-50%,-50%)"}}>
                <Button
                  color="inherit"
                  className="pointerCursor"
                  display={{ lg: "block", md: "none" }}
                  style={NavlinksStyle}
                >
                  Help
                </Button>
                 
                <Button
                  color="inherit"
                  className="pointerCursor"
                  display={{ lg: "block", md: "none" }}
                  style={NavlinksStyle}
                >
                  Account
                </Button>
              </Box>
            )}
            
          </Container>
        </Toolbar>
      </AppBar>
      
    </Box>
    </>
  );
};

export default Navbar;
