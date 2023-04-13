import {
    AppBar,
    Button,
    IconButton,
    Stack,
    Toolbar,
    Typography,
    Box,
  } from "@mui/material";
 

  import React from "react";
  import { useNavigate } from "react-router-dom";

  
  function Header() {
 
  
    const navigate = useNavigate();
  
    return (
      <AppBar position="static">
        <Toolbar>
  
          <Stack direction="row" spacing={3}>
          <Button
              href="/"
              color="inherit"
              sx={{ fontSize: "20px" }}
            >
              Registration
            </Button>
            <Button href="/login" color="inherit" sx={{ fontSize: "20px" }}>
              {/* <Link to="/login"></Link> */}
              Logout
            </Button>
            <Button href="/homepage" color="inherit" sx={{ fontSize: "20px" }}>
              Home
            </Button>
            <Button href="/additem" color="inherit" sx={{ fontSize: "20px" }}>
              Add Item
            </Button>
          </Stack>
  
         
        </Toolbar>
      </AppBar>
    );
  }
  
  export default Header;
  