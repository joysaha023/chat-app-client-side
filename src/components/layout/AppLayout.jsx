import React from "react";
import Header from "./Header";
import Title from "../shared/Title";
import { Grid } from "@mui/material";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    return (
      <>
        <Title></Title>
        <Header></Header>

        <Grid container height={"calc(100vh - 4rem)"}>
          <Grid item xs={4} height={"100%"} bgcolor="primary.main">First</Grid>
          <Grid item xs={4} height={"100%"} bgcolor="primary.main"> <WrappedComponent {...props}></WrappedComponent></Grid>
          <Grid item xs={4} height={"100%"} bgcolor="primary.main">Third</Grid>
        </Grid>
       
     </>
);
  }
};

export default AppLayout;
