import React from "react";
import { Grid } from "@mui/material";
import OrderDetail from "./OrderDetail";
function OrderStatus() {
  return (
    <div>
      <Grid
        container
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Grid item xs={4}></Grid>
        <Grid item xs={7}>
          <OrderDetail />
        </Grid>
      </Grid>
    </div>
  );
}

export default OrderStatus;
