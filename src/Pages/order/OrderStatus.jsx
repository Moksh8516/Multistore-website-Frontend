import React from "react";
import { Grid } from "@mui/material";
import OrderDetail from "./OrderDetail";

const orderStatus = [
  { labels: "Order Placed", value: "OrderPlaced" },
  { labels: "Order Accepted", value: "OrderAccepted" },
  { labels: "Order Picked", value: "OrderPicked" },
  { labels: "Order Packed", value: "OrderPacked" },
  { labels: "Order Shipped", value: "OrderShipped" },
  { labels: "Order Delivered", value: "OrderDelivered" },
  { labels: "Cancelled", value: "cancelled" },
  { labels: "Returned", value: "returned" },
];

function OrderStatus() {
  return (
    <div>
      <Grid
        container
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Grid item xs={2.5}>
          <div className="bg-gray-100 h-auto p-5 sticky top-5 ">
            <h1 className="font-bold text-lg m-2 px-2 ">Filter</h1>
            <div className="space-y-4 mt-5 border border-gray-400 shadow-xl  p-4">
              <h1 className="font-semibold text-lg text-gray-900">
                Order Status
              </h1>
              {orderStatus.map((order) => (
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    key={order.labels}
                    defaultValue={order.value}
                    className="h-4 w-4 rounded-full
                    border-gray-300 bg-gray-200 border-2 text-orange-600 focus:ring-sky-500"
                  />
                  <label
                    htmlFor={order.value}
                    className="ml-3 text-sm text-gray-900 "
                  >
                    {order.labels}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </Grid>
        <Grid item xs={9}>
          <OrderDetail />
        </Grid>
      </Grid>
    </div>
  );
}

export default OrderStatus;
