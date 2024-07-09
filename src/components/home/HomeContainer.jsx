import React from "react";

function HomeContainer() {
  return (
    <>
      <div className="bg-white rounded-lg shadow-lg p-2 py-4 max-h-82 max-w-md justify-center ">
        <h3 className="text-center text-lg font-bold p-2 m-2 h-10">
          Revamp your home in style
        </h3>
        <div className="grid grid-rows-2 grid-cols-2 gap-4 ">
          <div className="flex flex-col justify-center">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
              alt=""
            />
            <p className="text-sm px-2 lg:px-3"> Air Conditions</p>
          </div>
          <div className="flex flex-col justify-center">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/June/BTF/17th/Shoes-low._SY116_CB555280724_.jpg"
              alt=""
            />
            <p className="text-sm px-2 lg:px-3">Sport Shoes</p>
          </div>
          <div className="flex flex-col justify-center">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg"
              alt=""
            />
            <p className="text-sm px-2 lg:px-3">
              cushion covers, bedshits & more
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_boAt_0.5x._SY116_CB553870684_.jpg"
              alt=""
            />
            <p className="text-sm  px-2 lg:px-3">starting at ₹249| boat </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeContainer;
