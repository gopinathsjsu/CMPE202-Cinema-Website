import { useState, useEffect } from "react";
import logo from "../../../Statics/logo.png";

export default function NavBar() {
  const logoutUser = () => {
    localStorage.clear();
    fetch("http://127.0.0.1:5000/auth/logout")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error(error));
    window.location.href = "/";
  };

  return (
    <div className="container mx-auto flex flex-wrap p-1.5 flex-col md:flex-row items-center">
      <a className="flex items-center flex-shrink-0" href="/">
        <img className="h-16 w-20 mr-3" src={logo} alt="Logo" />
        <h1 className="text-3xl text-gray-900">TeamAlpha</h1>
      </a>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a className="mr-5 hover:text-gray-900" href="/">
          Home
        </a>
        <a className="mr-5 hover:text-gray-900" href="/membership">
          Membership
        </a>
        <a className="mr-5 hover:text-gray-900" href="/book-tickets">
          Book Tickets
        </a>
        <a className="mr-5 hover:text-gray-900" href="/about-us">
          About Us
        </a>
      </nav>
      {localStorage.getItem("token") !== null ? (
        
        <div className="flex items-center">
          <a className="mr-5 hover:text-gray-900" href="/dashboard">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFD-nZD4QejM8cDLL4zGxF_jJlF_659ijtYqqlLxs&s" className="w-8 h-8 rounded-md"/>
        </a>
          <a
            href="/"
            onClick={logoutUser}
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 px-4 focus:ring-red-300 font-medium rounded-lg text-sm py-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
          >
            Logout
          </a>
        </div>
      ) : (
        <a
          href="/auth/login"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 px-4 focus:ring-blue-300 font-medium rounded-lg text-sm py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Login
        </a>
      )}
    </div>
  );
}
