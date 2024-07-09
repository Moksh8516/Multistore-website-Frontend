import React from "react";

function CategoryCrousel({ product }) {
  return (
    <div>
      <div className="cursor-pointer flex flex-col justify-center items-center object-fit bg-white rounded-lg shadow-lg overflow-hidden mx-3 m-2">
        <div className="h-52 w-auto">
          <img
            className="h-full w-full object-cover object-center group-hover:opacity-75"
            src={product.thumbnail}
            alt="crousel product image"
          />
        </div>
        <div className="m-2">
          <h3 className="text-base h-8 font-medium text-gray-900">
            {product.title}
          </h3>
          <p className="text-gray-600 mt-4 h-20 text-sm overflow-hidden">
            {product.description.slice(0, 100)}
            {"..."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CategoryCrousel;
