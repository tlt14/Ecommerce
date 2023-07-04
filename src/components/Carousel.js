import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
const fadeImages = [
  {
    url:banner1,
    caption: "First Slide",
  },
  {
    url: banner2,
    caption: "Second Slide",
  },
  {
    url: banner3,
    caption: "Third Slide",
  },
];
const Carousel = () => {
  return (
    <div className="slide-container w-10/12 m-auto py-5 z-0">
      <Slide>
        {fadeImages.map((fadeImage, index) => (
          <div key={index} className="each-slide max-h-[30rem]">
            <img
              style={{ width: "100%" }}
              src={fadeImage.url}
              alt=""
              // className="object-cover"
            />
            {/* <h2>{fadeImage.caption}</h2> */}  
          </div>
        ))}
      </Slide>
    </div>
  );
};
export default Carousel;
