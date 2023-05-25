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
  }, [dispatch]);
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleButton = (
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
    <div className="">
      <Navbar
        fluid={true}
        rounded={true}
        style={{
          backgroundColor: theme === "light" ? "white" : "#121212",
          color: theme === "light" ? "black" : "white",
        }}
      >
        <Navbar.Brand href="/">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            TShoe
          </span>
        </Navbar.Brand>

        <div className="flex md:order-2 ">
          {toggleButton}
          {isAuthenticated ? (
            <Dropdown
              arrowIcon={false}
              inline={true}
              label={
                <Avatar
                  alt="User settings"
                  img="https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.15752-9/346111352_541075654903369_3250665337686196684_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=H6J-Kwfghv8AX-SPcxH&_nc_ht=scontent.fsgn5-10.fna&oh=03_AdRA0V3bucPYH7w3cYzns45hArUOF35kYh64BkjPImGdPw&oe=64969A39"
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
