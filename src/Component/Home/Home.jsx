import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import { MagnifyingGlass } from "react-loader-spinner";

const Home = () => {
  const naviagation = useNavigation();
  const location = useLocation();
  console.log(location);

  return (
    <div className="h-screen">
      <Navbar></Navbar>
      <div className="h-[calc(100vh-165px)] ">
        {naviagation.state === "loading" ? (
          <p className="flex justify-center items-center h-screen">
            <MagnifyingGlass
              visible={true}
              height="80"
              width="80"
              ariaLabel="magnifying-glass-loading"
              wrapperStyle={{}}
              wrapperClass="magnifying-glass-wrapper"
              glassColor="#c0efff"
              color="#e15b64"
            />
          </p>
        ) : (
          <Outlet />
        )}
      </div>
      <div className="">
        <footer className="footer footer-center p-10 bg-base-200 text-base-content">
          <div>
            <p>Copyright © 2023 - All right reserved by Imrul Hassan Emon</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
