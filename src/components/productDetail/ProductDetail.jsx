import React, { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Radio, RadioGroup } from "@headlessui/react";
import { Link, useParams } from "react-router-dom";
import { Rating } from "@mui/material";
import ProductReview from "./ProductReview";
import HomeCarousel from "../home/HomeCarousel";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProductByIdAsync,
  selectProductById,
} from "../../features/Product/ProductSlice";
import { selectLoggedInUser } from "../auth/authSlice";
import { addToCartAsync, fetchItemByUserIdAsync } from "../cart/cartSlice";

const kurta = [
  {
    id: 1,
  },
  {
    id: 2,
  },
];

const sizes = [
  { name: "XXS", inStock: false },
  { name: "XS", inStock: true },
  { name: "S", inStock: true },
  { name: "M", inStock: true },
  { name: "L", inStock: true },
  { name: "XL", inStock: true },
  { name: "2XL", inStock: true },
  { name: "3XL", inStock: true },
];

// const product = {
//   name: "Basic Tee 6-Pack",
//   price: "$192",
//   href: "#",
//   breadcrumbs: [
//     { id: 1, name: "Men", href: "#" },
//     { id: 2, name: "Clothing", href: "#" },
//   ],
//   images: [
//     {
//       src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
//       alt: "Two each of gray, white, and black shirts laying flat.",
//     },
//     {
//       src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
//       alt: "Model wearing plain black basic tee.",
//     },
//     {
//       src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
//       alt: "Model wearing plain gray basic tee.",
//     },
//     {
//       src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
//       alt: "Model wearing plain white basic tee.",
//     },
//   ],
//   colors: [
//     { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
//     { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
//     { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
//   ]
//   description:
//     'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
//   highlights: [
//     "Hand cut and sewn locally",
//     "Dyed with our proprietary colors",
//     "Pre-washed & pre-shrunk",
//     "Ultra-soft 100% cotton",
//   ],
//   details:
//     'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
// };

const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

let value = 4;

function ProductDetail() {
  const params = useParams();
  const product = useSelector(selectProductById);
  const [selectedSize, setSelectedSize] = useState(sizes[2]);
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  console.log(user.data.user._id);

  const handleCart = (e) => {
    dispatch(
      addToCartAsync({ ...product, quantity: 1, user: user.data.user._id })
    );
  };
  useEffect(() => {
    dispatch(fetchProductByIdAsync(params.productId));
  }, [dispatch, params.productId]);
  // todo: in sever data wewill add colors and sizes
  return (
    <div>
      {product && (
        <div className="bg-white">
          <div className="pt-6">
            <nav aria-label="Breadcrumb">
              <ol
                role="list"
                className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
              >
                {product.breadcrumbs &&
                  product.breadcrumbs.map((breadcrumb) => (
                    <li key={breadcrumb.id}>
                      <div className="flex items-center">
                        <Link
                          to={breadcrumb.href}
                          className="mr-2 text-sm font-medium text-gray-900"
                        >
                          {breadcrumb.name}
                        </Link>
                        <svg
                          width={16}
                          height={20}
                          viewBox="0 0 16 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="h-5 w-4 text-gray-300"
                        >
                          <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                        </svg>
                      </div>
                    </li>
                  ))}
                <li className="text-sm">
                  <Link
                    to={product.href}
                    aria-current="page"
                    className="font-medium text-gray-500 hover:text-gray-600"
                  >
                    {product.title}
                  </Link>
                </li>
              </ol>
            </nav>

            {/* Section add */}
            <section className="grid sm:grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10">
              {/* Image gallery */}
              <div className="flex flex-col items-center">
                <div className=" overflow-hidden rounded-lg max-w-[36rem] max-h-[35rem]">
                  <img
                    src={product.thumbnail}
                    alt={product.images[0].alt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="flex flex-wrap space-x-5 justify-center">
                  {product.images.map((items) => (
                    <div className=" max-w-[5rem] max-h-[5rem] mt-4 overflow-hidden rounded-lg">
                      <img
                        src={items.src}
                        alt={items.alt}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Product info */}
              <div className="lg:col-span-1 max-w-2xl px-4 pb-10 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-10">
                <div className="lg:col-span-2 ">
                  <h1 className="lg:text-3xl font-semibold text-base tracking-tight text-gray-900 sm:text-lg my-2 lg:py-2">
                    {product.brand}
                  </h1>
                  <h1 className="lg:text-2xl font-bold text-base tracking-tight text-gray-900 sm:text-lg my-2 opacity-70">
                    {product.title}
                  </h1>
                </div>

                {/* Options */}
                <div className="mt-4 lg:row-span-3 lg:mt-0">
                  <h2 className="sr-only">Product information</h2>
                  <div className="flex space-x-5 items-center text-base lg:text-xl text-gray-900 ">
                    <p className="font-semibold">
                      {Math.floor(
                        product.price * (1 - product.discountPercentage / 100)
                      )}
                    </p>
                    <p className="opacity-50 line-through">{product.price}</p>
                    <p className="text-red-700 font-semibold">
                      -{product.discountPercentage}%
                    </p>
                  </div>

                  {/* Reviews */}
                  <div className="mt-4">
                    <h3 className="sr-only">Reviews</h3>
                    <div className="flex items-center">
                      <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                      />
                      <p className="sr-only">
                        {reviews.average} out of 5 stars
                      </p>
                      <Link
                        to={reviews.href}
                        className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        {reviews.totalCount} reviews
                      </Link>
                    </div>
                  </div>

                  <form className="mt-6">
                    {/* Colors */}
                    {/* <div>
                      <h3 className="text-sm font-medium text-gray-900">Color</h3>

                      <fieldset aria-label="Choose a color" className="mt-4">
                        <RadioGroup
                          value={selectedColor}
                          onChange={setSelectedColor}
                          className="flex items-center space-x-3"
                        >
                          {product.colors.map((color) => (
                            <Radio
                              key={color.name}
                              value={color}
                              aria-label={color.name}
                              className={({ focus, checked }) =>
                                classNames(
                                  color.selectedClass,
                                  focus && checked ? "ring ring-offset-1" : "",
                                  !focus && checked ? "ring-2" : "",
                                  "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                                )
                              }
                            >
                              <span
                                aria-hidden="true"
                                className={classNames(
                                  color.class,
                                  "h-8 w-8 rounded-full border border-black border-opacity-10"
                                )}
                              />
                            </Radio>
                          ))}
                        </RadioGroup>
                      </fieldset>
                    </div> */}

                    {/* Sizes */}
                    <div className="mt-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium text-gray-900">
                          Size
                        </h3>
                      </div>

                      <fieldset aria-label="Choose a size" className="mt-4">
                        <RadioGroup
                          value={selectedSize}
                          onChange={setSelectedSize}
                          className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-10"
                        >
                          {sizes &&
                            sizes.map((size) => (
                              <Radio
                                key={size.name}
                                value={size}
                                disabled={!size.inStock}
                                className={({ focus }) =>
                                  classNames(
                                    size.inStock
                                      ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                      : "cursor-not-allowed bg-gray-50 text-gray-200",
                                    focus ? "ring-2 ring-violet-500" : "",
                                    "group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                                  )
                                }
                              >
                                {({ checked, focus }) => (
                                  <>
                                    <span>{size.name}</span>
                                    {size.inStock ? (
                                      <span
                                        className={classNames(
                                          checked
                                            ? "border-violet-500"
                                            : "border-transparent",
                                          focus ? "border" : "border-2",
                                          "pointer-events-none absolute -inset-px rounded-md"
                                        )}
                                        aria-hidden="true"
                                      />
                                    ) : (
                                      <span
                                        aria-hidden="true"
                                        className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                      >
                                        <svg
                                          className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                          viewBox="0 0 100 100"
                                          preserveAspectRatio="none"
                                          stroke="currentColor"
                                        >
                                          <line
                                            x1={0}
                                            y1={100}
                                            x2={100}
                                            y2={0}
                                            vectorEffect="non-scaling-stroke"
                                          />
                                        </svg>
                                      </span>
                                    )}
                                  </>
                                )}
                              </Radio>
                            ))}
                        </RadioGroup>
                      </fieldset>
                    </div>

                    <Link to="/cart">
                      <button
                        type="submit"
                        onClick={handleCart}
                        className="mt-10 flex items-center justify-center rounded-full border border-transparent bg-violet-600 px-8 py-3 text-base font-medium text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
                      >
                        Add to Cart
                      </button>
                    </Link>
                  </form>
                </div>

                <div className="py-5 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                  {/* Description and details */}
                  <div>
                    <h3 className="sr-only">Description</h3>
                    <div className="space-y-6">
                      <p className="text-base text-gray-900">
                        {product.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-10">
                    <h3 className="text-sm font-medium text-gray-900">
                      Highlights
                    </h3>

                    <div className="mt-4">
                      <ul
                        role="list"
                        className="list-disc space-y-2 pl-4 text-sm"
                      >
                        {product.highlights &&
                          product.highlights.map((highlight) => (
                            <li className="text-gray-400">
                              <span className="text-gray-600">{highlight}</span>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h2 className="text-sm font-medium text-gray-900">
                      Details
                    </h2>

                    <div className="mt-4 space-y-6">
                      <p className="text-sm text-gray-600">{product.details}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Rating and Reviews */}
            <section className="pt-10">
              <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-3 pb-10">
                <div>
                  <h1 className="font-semibold text-gray-900 m-2 pb-4 text-lg ml-4">
                    Customer Reviews
                  </h1>
                  <div className="p-5">
                    {product.reviews.map((review) => (
                      <ProductReview review={review} />
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="pt-10">
              <h1 className="text-gray-900 font-semibold text-lg p-5 mb-3">
                Similar Products
              </h1>
              <div className="">
                {kurta.map((item) => (
                  <HomeCarousel product={item} key={{ item }} />
                ))}
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
