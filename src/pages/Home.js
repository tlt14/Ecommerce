import React,{ Suspense } from "react";
import Carousel from "../components/Carousel";
import Loading from "../components/Loading";
const Newest = React.lazy(() => import("../features/product/Newest"));

function Home(props) {
  document.title = "Home";
  return (
    <>
      <Carousel />
      <Suspense fallback={<Loading/>}>
        <Newest />
      </Suspense>
    </>
  );
}

export default Home;
