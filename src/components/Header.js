import React, { useContext, useEffect } from "react";
import "./Header.css";
import { ThemeContext } from "../providers/themeContext";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { getProfile, logOut } from "../services/authRequest";
import logo from "../assets/logo.jpg";
function Header(props) {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    getProfile()(dispatch);
  }, [dispatch, isAuthenticated]);
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleButton = (
    // <label className="relative inline-flex items-center cursor-pointer">
    //   <input
    //     type="checkbox"
    //     value=""
    //     className="sr-only peer"
    //     onChange={(e) => setTheme(e.target.checked ? "light" : "dark")}
    //     checked={theme === "light"}
    //   />
    //   <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
    //   <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
    //     {theme === "light" ? "Light mode" : "Dark mode"}
    //   </span>
    // </label>
    <label className="switch mr-5">
      <input
        type="checkbox"
        onChange={(e) => setTheme(e.target.checked ? "light" : "dark")}
        checked={theme === "light"}
      />
      <span className="slider"></span>
    </label>
  );
  function handleLogout() {
    dispatch(logOut());
  }
  return (
    <div className="sticky top-0">
      <Navbar
        fluid={true}
        rounded={true}
        style={{
          backgroundColor: theme === "light" ? "white" : "#121212",
          color: theme === "light" ? "black" : "white",
          zIndex: 100,
          position: "sticky",
          top: 0,
        }}
      >
        <Navbar.Brand href="/">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            TShoe
          </span>
        </Navbar.Brand>

        <div className="flex md:order-2">
          {toggleButton}
          {isAuthenticated ? (
            <Dropdown
              arrowIcon={false}
              inline={true}
              label={
                <Avatar
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded={true}
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">{user?.username}</span>
                <span className="block truncate text-sm font-medium">
                  {user?.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item>
                <Link to="/my-order">My orders</Link>
              </Dropdown.Item>
              <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
            </Dropdown>
          ) : (
            <Link to="/login" className="dark:text-white font-bold ">
              Login
            </Link>
          )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Link
            to="/"
            className="font-bold text-gray-900 dark:text-white text-xl hover:text-gray-500 active:text-red-500 "
          >
            Home
          </Link>
          <Link
            to="/products"
            className="font-bold text-gray-900 dark:text-white text-xl hover:text-gray-500 active:text-red-500"
          >
            Products
          </Link>
          <Link
            to="/cart"
            className="font-bold text-gray-900 dark:text-white text-xl hover:text-gray-500 active:text-red-500"
          >
            Cart
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
