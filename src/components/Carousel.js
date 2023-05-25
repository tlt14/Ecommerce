import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const fadeImages = [
  {
    url: "https://media.licdn.com/dms/image/C5112AQEaaI6z3NxGLQ/article-inline_image-shrink_1000_1488/0/1520238935596?e=1689811200&v=beta&t=m2ab0-4L1O3aAgazLHhx_dbhVnA8cg4oxi81b1CBT54",
    caption: "First Slide",
  },
  {
    url: "https://media.licdn.com/dms/image/C5112AQFIVQBt4514ow/article-inline_image-shrink_1000_1488/0/1520156614976?e=1689811200&v=beta&t=qgD3RvAipI8QiBkrqrjWVBKhXXseSJ_jB8xD9SSWcVg",
    caption: "Second Slide",
  },
  {
    url: "https://media.licdn.com/dms/image/C5112AQEbrswDJBdyKg/article-inline_image-shrink_1000_1488/0/1520192850086?e=1689811200&v=beta&t=KDEms_oMuo06T6z8kv0V07Unn_9bc5Rs8uTO5F93r24",
    caption: "Third Slide",
  },
];
const Carousel = () => {
  return (
    <div className="slide-container w-10/12 m-auto py-5 z-0">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index} className="each-slide max-h-[30rem]">
            <img
              style={{ width: "100%" }}
              src={fadeImage.url}
              alt=""
              className="object-cover"
            />
            {/* <h2>{fadeImage.caption}</h2> */}
          </div>
        ))}
      </Fade>
    </div>
  );
};
export default Carousel;
