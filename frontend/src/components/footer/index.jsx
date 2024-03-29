import { Grid, Typography } from "@mui/material";
import React, { Component } from "react";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';

class Footer extends Component {
  render() {
    return (
      <Grid container direction="column">
        <Grid container gap='5px' justifyContent={'space-evenly'} className=" text-white bg-stone-800 ">

          <Grid container direction='column' alignItems={'center'} justifyContent='center' className=" h-20 w-56">
            <Grid container gap="10px" direction="row" justifyContent={'center'} alignItems='center' className="">
              <Grid item className="">
                <MapOutlinedIcon fontSize="large" className="text-yellow-400"/>
              </Grid>
              <Grid container direction="column" item className=" w-40">
                <Grid>
                  <Typography variant="h6">HeadOffice</Typography>
                </Grid>
                <Grid>
                  <Typography variant="p">Bandaragama</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid container direction='column' alignItems={'center'} justifyContent='center' className=" h-20 w-56">
            <Grid container gap="10px" direction="row" justifyContent={'center'} alignItems='center' className="">
              <Grid item className="">
                <AccessTimeOutlinedIcon fontSize="large" className="text-yellow-400"/>
              </Grid>
              <Grid container direction="column" item className=" w-40">
                <Grid>
                  <Typography variant="h6">Working</Typography>
                </Grid>
                <Grid>
                  <Typography variant="p">Service Available 24/7</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid container direction='column' alignItems={'center'} justifyContent='center' className=" h-20 w-56">
            <Grid container gap="10px" direction="row" justifyContent={'center'} alignItems='center' className="">
              <Grid item className="">
                <DraftsOutlinedIcon fontSize="large" className="text-yellow-400"/>
              </Grid>
              <Grid container direction="column" item className=" w-40">
                <Grid>
                  <Typography variant="h6">Email Us</Typography>
                </Grid>
                <Grid>
                  <Typography variant="p">easycarRental@gmail.com</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid container direction='column' alignItems={'center'} justifyContent='center' className=" h-20 w-56">
            <Grid container gap="10px" direction="row" justifyContent={'center'} alignItems='center' className="">
              <Grid item className="">
                <AddIcCallOutlinedIcon fontSize="large" className="text-yellow-400"/>
              </Grid>
              <Grid container direction="column" item className=" w-40">
                <Grid>
                  <Typography variant="h6"> Call Us Now</Typography>
                </Grid>
                <Grid>
                  <Typography variant="p">+94 765890563</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          
        </Grid>
        <Grid item>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="stretch"
            className="bg-stone-900 text-stone-300 h-44"
          >
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="stretch"
            >
              <Grid
                container
                item
                direction="column"
                justifyContent="center"
                className="bg-yellow-000 h-14"
              >

              </Grid>
              <Grid
                container
                item
                direction="column"
                justifyContent="center"
                className="bg-blue-000 text-white text-center h-12 justify-end "
              >
                <Typography variant="h3" className="font-dosis">Easy Car Rental</Typography>
              </Grid>
              <Grid
                container
                item
                direction="column"
                justifyContent="center"
                className="bg-blue-000 h-16"
              >
                <Typography variant="p" className="text-center">
                  Copyright © 2022 | Easy Car Rental. All right Are reserved
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
export default Footer;
