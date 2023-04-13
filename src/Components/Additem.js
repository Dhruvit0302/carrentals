import React, { useState } from "react";
import { TextField, Button, Container, Box, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header";

function Additem() {
  console.log("VFGHDSVFDSFNDSVDGHDSHJDAMGDGKDHHEJHDHGVHVDKLF");
  const [make, setmake] = useState("");
  const [email, setEmail] = useState("");
  const [year, setYear] = useState("");
  const [model, setModel] = useState("");
  const [engine, setEngine] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState("");
  const navigate = useNavigate();

  const uploadphoto = (file) => {
    let photodocument = new FileReader();
    photodocument.onloadend = () => {
      setPhoto(photodocument.result);
    };
    photodocument.readAsDataURL(file);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(
      `make: ${make}, Email: ${email}, Price: ${price}, Year: , Model: , Engine: , Color: ${color}, Photo: ${photo}`
    );
    const CarData = {
      make: make,
      email: email,
      year: year,
      model: model,
      engine: engine,
      color: color,
      price: price,
      photo: photo,
    };
    axios
      .post(
        "https://qczrszylp1.execute-api.us-east-1.amazonaws.com/production/addcars",
        CarData
      )
      .then((response) => {
        alert("Car Details Added Successfully");
        navigate("/homepage");
      })
      .catch((error) => {
        console.log("There was an error!!!");
      });

    // Handle form submission here
  };

  return (
    <div>
      <Header />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Container
          maxWidth="sm"
          style={{
            border: "1px solid grey",
            borderRadius: "5px",
            textAlign: "center",
          }}
        >
          <Box mt={2} mb={2}>
            <form onSubmit={handleSubmit}>
              <h1>Add Items</h1>
              <TextField
                label="make"
                variant="outlined"
                value={make}
                onChange={(event) => setmake(event.target.value)}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Email"
                variant="outlined"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                fullWidth
                margin="normal"
              />
              <TextField
                label="year"
                variant="outlined"
                value={year}
                onChange={(event) => setYear(event.target.value)}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Model"
                variant="outlined"
                value={model}
                onChange={(event) => setModel(event.target.value)}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Engine"
                variant="outlined"
                value={engine}
                onChange={(event) => setEngine(event.target.value)}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Color"
                variant="outlined"
                value={color}
                onChange={(event) => setColor(event.target.value)}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Price"
                variant="outlined"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
                fullWidth
                margin="normal"
              />

              <Grid item container spacing={5} justifyContent="center">
                <Grid item xs={15} md={7}>
                  <Button
                    fullWidth
                    className="uploadImage"
                    variant="outlined"
                    accept="image"
                    value={photo}
                  >
                    {" "}
                    <input
                      type="file"
                      name="Choose Image"
                      required
                      onChange={(event) => {
                        uploadphoto(event.currentTarget.files[0]);
                      }}
                    />{" "}
                  </Button>
                </Grid>
              </Grid>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </form>
          </Box>
        </Container>
      </Grid>
    </div>
  );
}

export default Additem;
