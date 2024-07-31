/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useNavigate } from "react-router";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import logo from '../../assets/images/Logo.png'


export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const token = localStorage.getItem('token');
  const type = localStorage.getItem('type');
  const navigate = useNavigate()

  return (
    <nav
      className={
        (props.transparent
          ? "top-0 absolute z-50 w-full"
          : "relative bg-white shadow-lg") +
        " flex flex-wrap items-center justify-between px-2"
      }
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className={
              (props.transparent ? "text-white" : "text-gray-800") +
              " text-sm font-bold leading-relaxed inline-block mr-4 whitespace-nowrap uppercase"
            }
          // href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
          >
            <img src={logo} alt='...' style={{height:"5rem"}}/>
          </a>
          {
            !navbarOpen && <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <MenuOutlinedIcon sx={{ color: "white" }} />
            </button>
          }
          {
            navbarOpen && <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <CloseOutlinedIcon sx={{ color: "white" }} />
            </button>
          }
        </div>
        <div
          className={
            "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
            (navbarOpen ? " block rounded shadow-lg" : " hidden")
          }
          id="example-navbar-warning"
        >

          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="flex items-center cursor-pointer">
              <a
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }

              >

                <span onClick={() => navigate("/")} className=" inline-block ml-2 cursor-pointer">Home</span>
              </a>
            </li>
            <li className="flex items-center">
              <a
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
              >

                <span onClick={() => navigate("/join")} className=" inline-block ml-2 cursor-pointer">Join</span>
              </a>
            </li>

            <li className="flex items-center cursor-pointer">
              <a
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }

              >

                <span onClick={() => navigate("/about")} className="inline-block ml-2 cursor-pointer">About Us</span>
              </a>
            </li>

            <li className="flex items-center cursor-pointer">
              <a
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }

              >
                <span onClick={() => navigate("/events")} className="inline-block ml-2 cursor-pointer">Events</span>
              </a>
            </li>
            <li className="flex items-center cursor-pointer">
              <a
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }

              >
                <span onClick={() => navigate("/faq")} className="inline-block ml-2 cursor-pointer">FAQ</span>
              </a>
            </li>

            {!token && <li onClick={() => navigate("/login")} className="flex items-center">
              <button
                className={
                  (props.transparent
                    ? "bg-white text-gray-800 active:bg-gray-100"
                    : "bg-pink-500 text-white active:bg-pink-600") +
                  " text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                }
                type="button"
                style={{ transition: "all .15s ease" }}
              >
                Login
              </button>
            </li>}
            {token && <li onClick={() => navigate(`/${type === "brand" ? "brands" : type}`)} className="flex items-center">
              <button
                className={
                  (props.transparent
                    ? "bg-white text-gray-800 active:bg-gray-100"
                    : "bg-pink-500 text-white active:bg-pink-600") +
                  " text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                }
                type="button"
                style={{ transition: "all .15s ease" }}
              >
                {type}
              </button>
            </li>}
          </ul>
        </div>
      </div>
    </nav>
  );
}
