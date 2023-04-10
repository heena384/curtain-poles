import React from "react";
import cur from "./logo1.png";

import {
  Call,
  FavoriteBorder,
  Mail,
  Person,
  PersonOutline,
  ShoppingCart,
} from "@material-ui/icons";
import { Box, Grid } from "@mui/material";

const Grid1 = () => {
  return (
    <>
      <div>
        <img src={cur} className="center center-m" alt="cur" />
      </div>
      <Grid container spacing={4}>
        <Grid item xs>
          <Box className="pt12 pt0 pr10 " style={{ textAlign: "center" }}>
            <a href="tel:08-654 74 90" style={{ color: "#000000" }}>
              <Call className=" w20 contact" style={{ verticalAlign: "top" }} />
            </a>
            <a
              className="calltext anch pl20 dnone  "
              href="tel:08-654 74 90"
              style={{ color: "#000000" }}
            >
              <span className="dnone">Call us! 08-654 74 90</span>
              <br className="brr" style={{ display: "none" }} />
            </a>
            <a href="tel:08-654 74 90" style={{ color: "#000000" }}>
              <Mail style={{ verticalAlign: "top" }} className="contact" />
            </a>

            <span className="calltext pl20 dnone" valign="middle">
              <a
                href="mailto:thepolestore.co.uk"
                style={{ color: "#000000" }}
                className="anch"
              >
                thepolestore.co.uk
              </a>
            </span>
          </Box>
        </Grid>
        <Grid className="headding pl24" item xs={4}>
          <Box className="headding">
            <p
              className="midtext fs16 headding"
              style={{ textAlign: "center", margin: "0px" }}
            >
              The Pole Store
            </p>
          </Box>
        </Grid>
        <Grid className="pl24" item xs>
          <Box
            className="pt12 pr10"
            style={{ textAlign: "right", padding: "0px 40px 0px 0px" }}
          >
            <span className="calltext" valign="middle">
              <a
                href="#"
                style={{ padding: "0px 20px 0px 0px" }}
                className="anch pr0"
              >
                <FavoriteBorder />
              </a>
              <a
                href="#"
                style={{ padding: "0px 20px 0px 0px" }}
                className="anch pr0"
              >
                <PersonOutline />
              </a>
              <a
                href="#"
                style={{ padding: "0px 20px 0px 0px" }}
                className="anch"
              >
                <ShoppingCart></ShoppingCart>
              </a>
            </span>
          </Box>
        </Grid>
      </Grid>
      <hr bgcolor="#0C0F86" width="100%"></hr>
    </>
  );
};

export default Grid1;
