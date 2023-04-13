import * as React from "react";
import { json } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Container,
  Box,
  Grid,
  SearchIcon,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Cardview from "./Cardview";
import axios from "axios";
import Header from "./Header";
const HomePage = () => {
  const navigate = useNavigate();
  const [searchInput, setsearchInput] = useState("");
  const [itemsList, setItems] = useState([]);

  const temp = localStorage.getItem("token");
  const tem1 = JSON.parse(temp);
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const handleClick = (e) => {
    e.preventDefault();
  };

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));
  return (
    <div>
        <Header/>
        <>
      <div></div>
      <>
        <div
          style={{
            // background: "#617143",
            display: "flex",
            // justifyContent: "space-between",
            // alignItems: "center",
          }}
        ></div>
        <Typography
          component="h4"
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom
        ></Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          paragraph
        ></Typography>
        <Typography variant="h5" align="center">
          Featured Products
        </Typography>
        <Container sx={{ py: 5, height: "100vh" }} maxWidth="md">
          <Grid container spacing={4}>
            {tem1.map((val, index) => (
              <Cardview
                key={index}
                color={val.color}
                price={val.Price}
                engine={val.engine}
                make={val.make}
                src={val.image}
                email= {val.email}
                year={val.year}
                model= {val.model}
              />
            ))}
          </Grid>
        </Container>
      </>
    </>
    </div>
    
  );
};

export default HomePage;
