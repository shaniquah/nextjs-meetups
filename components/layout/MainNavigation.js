import Link from "next/link";
import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>ORS Meetups</div>
      <nav>
        <ul>
          <li>
            <Link href="/">All Meetups</Link>
          </li>
          <li>
            <Link href="/new-meetup">Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}


/*eslint-disable*/
import { useState } from "react";
import Link from "next/link";
import Image from "next/legacy/image";

import { useTheme } from "../../Context/ThemeContext";

// Faves
import { useContext } from "react";
import FavoritesContext from "../../Context/Favorites-context";
import Badge from "@mui/material/Badge";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";

const Navigation = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const favoriteCtx = useContext(FavoritesContext);

  return (
    <nav
      className={`w-full  ${
        theme === "dark" ? "bg-gray-700" : "bg-blue-500"
      }  bg-opacity-70 backdrop-blur-sm fixed top-0 left-0 right-0 z-10 h-18`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className={`block sm:hidden relative items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ${
                theme === "light" ? "text-black" : "text-gray-400"
              }`}
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen ? "true" : "false"}
            >
              <span className="absolute -inset-2"></span>
              <span className="sr-only">
                {mobileMenuOpen ? "Close main menu" : "Open main menu"}
              </span>
              <svg
                className={`block h- w-6 ${
                  mobileMenuOpen ? "hidden" : "block"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className={`block h-6 w-6 ${
                  mobileMenuOpen ? "block" : "hidden"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex mr- flex-shrink-0 items-center mr-12">
            <Link href={`/`}>
              ORS Meetups
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4 justify-start">
              <Link
                href={`/favorites`}
                className={`${
                  theme === "dark" ? "text-white" : "text-black"
                } hover:bg-gray-700 hover:text-white rounded-md  px-3 py-2 text-lg font-medium`}
              >
                Favorites{" "}
                <Badge
                  badgeContent={favoriteCtx.totalFavorites}
                  color="primary"
                  className="w-4 mr-8 text-center"
                />
              </Link>
            </div>
          </div>
          {/* mobile view */}
          {/* toggle */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-5 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
              onClick={toggleTheme}
            >
              {theme === "light" ? (
                <MoonIcon className="h-5 text-black w-5" />
              ) : (
                <SunIcon className="h-5 text-white w-5" />
              )}
            </button>
          </div>
          <div className="flex flex-center">
            <div>
              <button
                type="button"
                onClick={toggleMobileMenu}
                className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 ml-auto"
                id="user-menu-button"
                aria-expanded={mobileMenuOpen ? "true" : "false"}
                aria-haspopup="true"
              >
                <span className="absolute -inset-1.5"/>
                <span className="sr-only">Open user menu</span>
              </button>
            </div>
            <div
              className={`absolute top-16 left-0 ${
                mobileMenuOpen
                  ? "bg-blue-500 w-full mt-5 text-black mr-6 text-center "
                  : "hidden"
              }`}
              id="mobile-menu"
            >
              <Link
                href={`/favorites`}
                type="button"
                className={`${
                  theme === "light" ? "text-black" : "text-white bg-gray-700"
                } hover:bg-gray-700 hover:text-white w-full py-2 text-lg font-medium `}      
              >
                Favorites{" "}
                <Badge
                  badgeContent={favoriteCtx.totalFavorites}
                  color="primary"
                  className="w-0 "
                ></Badge>
              </Link>
              <Link
                href={`/`}
                type="button"
                className={`${
                  theme === "light" ? "text-black" : "text-white bg-gray-700"
                } hover:bg-gray-700 hover:text-white w-full py-2 text-lg font-medium `}      
              >
                All Meetups
              </Link>
              <Link
                href={`/new-meetup`}
                type="button"
                className={`${
                  theme === "light" ? "text-black" : "text-white bg-gray-700"
                } hover:bg-gray-700 hover:text-white w-full py-2 text-lg font-medium `}      
              >
                Add New Meetup
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

