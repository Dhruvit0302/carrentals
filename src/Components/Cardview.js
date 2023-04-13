import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Snackbar,
  Typography,
} from "@mui/material";
import axios from "axios";
import { React, useState } from "react";

var list = [];
const Cardview = (props) => {
  const [snackBarState, setsnackBarState] = useState(false);

  const addToCart = () => {
    // alert(props.title + " added to Cart Successfully !");
    setsnackBarState(true);
    list = list.concat({
      title: props.title,
      price: props.price,
      email: props.email,
      make: props.make,
      model: props.model,
    });
    const emailids = localStorage.getItem("emails");
    list.push({ emailinterst: emailids });
    localStorage.setItem("total", JSON.stringify(list));
    axios
      .post(
        "https://qczrszylp1.execute-api.us-east-1.amazonaws.com/production/email",
        list
      )
      .then((response) => {
        alert("Your details has been sent to Owner");
      })
      .catch((error) => {
        console.log("There was an error!!!");
      });
    // setsnackBarState(false);
  };
  return (
    <Grid item xs={10} sm={6} md={6}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="75%"
            image={props.src}
            alt="item image"
          />
          <CardContent>
            <Typography variant="body1" color="text.secondary">
              Engine = {props.engine}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Car Make = {props.make}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Car Model= {props.model}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Price= $ {props.price}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Color = {props.color}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Email = {props.email}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <div>
            <Button
              style={{
                justifyContent: "center",
                alignContent: "center",
              }}
              size="small"
              variant="contained"
              onClick={addToCart}
            >
              Intrested
            </Button>
          </div>
        </CardActions>
      </Card>
    </Grid>
  );
};
export default Cardview;
