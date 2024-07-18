import React, { useState } from "react";
import { Grid, Box, Avatar, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

function ProductReview() {
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);

  const date = new Date();
  const dateToString = date.toLocaleString();

  return (
    <div>
      <div className="grid gap-2 justify-center pb-4 border">
        <Box
          className="m-2"
          sx={{ display: "flex", gap: "2", alignItems: "center" }}
        >
          <Avatar
            className="text-white"
            sx={{ width: 56, height: 56, bgcolor: "#0ea5e9" }}
          >
            MK
          </Avatar>
          <h3 className="text-lg text-gray-900 px-2 " name="ReviewName">
            Moksh
          </h3>
        </Box>

        <div className="space-y-2">
          <div className="space-y-2 p-2">
            <p className="text-base text-gray-500 ">
              Reviewed in India in on {dateToString}
            </p>
            <Box
              sx={{
                width: 200,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
                readOnly
              />
              {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
              )}
            </Box>
            <details className="text-gray-500 text-sm  max-w-sm max-h-32">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              tempore dolor modi incidunt amet nostrum facere quo! Delectus
              aperiam nobis, earum, reiciendis dicta quidem velit error
              architecto fugiat vel libero.
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductReview;
