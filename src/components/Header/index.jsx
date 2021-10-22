import React, { useState, useEffect } from "react";
import "./Header.css";

export default function Header({ setIsShowingMore }) {
  // const [activeHome, setActiveHome] = useState(false);
  // const [activePages, setActivePages] = useState(false);
  // const [activeWatch, setActiveWatch] = useState(false);
  // const [activeGroups, setActiveGroups] = useState(false);
  // const [activeGaming, setActiveGaming] = useState(false);
  // const statusArr = [activeHome, activePages, ac];
  const [activeNav, setActiveNav] = useState(1);
  const [isSearching, setIsSearching] = useState(false);

  const handleNavClick = (activeNavNum) => {
    setActiveNav(activeNavNum);
  };
  const handleSearchClick = (e) => {};
  const handleSearchFocus = (e) => {
    setIsSearching(true);
    console.log(e.target);
    e.target.placeholder = "Search Facebook";
    e.target.parentNode.classList.remove("search--small-screen");
  };
  const handleSearchBlur = (e) => {
    setIsSearching(false);
    e.target.parentNode.classList.add("search--small-screen");
  };
  const handleIconTransitionEnd = (e) => {
    e.target.classList.add(`${isSearching ? "icon--remove" : "icon--insert"}`);
  };

  useEffect(() => {
    if (activeNav === 6) {
      setIsShowingMore(true);
    } else if (activeNav !== 6) {
      setIsShowingMore(false);
    }
  }, [activeNav]);
  return (
    <div className="header-container">
      <div className="header">
        <div className="header__left">
          {isSearching ? (
            <div className="header__back-from-search">
              <i
                data-visualcompletion="css-img"
                class="hu5pjgll m6k467ps"
                style={{
                  backgroundImage:
                    "url('https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/b1A2DlBdqL5.png')",
                  backgroundPosition: "-158px -13px",
                  backgroundSize: "auto",
                  width: "20px",
                  height: "20px",
                  backgroundRepeat: "no-repeat",
                  display: "inline-block",
                  filter: "invert(89%)",
                }}
              ></i>
            </div>
          ) : (
            <a href="">
              <svg
                viewBox="0 0 36 36"
                fill="url(#jsc_s_5)"
                height="40"
                width="40"
              >
                <defs>
                  <linearGradient
                    x1="50%"
                    x2="50%"
                    y1="97.0782153%"
                    y2="0%"
                    id="jsc_s_5"
                  >
                    <stop offset="0%" stop-color="#0062E0"></stop>
                    <stop offset="100%" stop-color="#19AFFF"></stop>
                  </linearGradient>
                </defs>
                <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path>
                <path
                  style={{ fill: "white" }}
                  d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"
                ></path>
              </svg>
            </a>
          )}

          <div
            className="header__search input search--small-screen"
            // onFocus={handleSearchClick}
          >
            <i
              data-visualcompletion="css-img"
              className={`search__icon ${
                isSearching ? "icon--disappear" : "icon--appear"
              }`}
              onTransitionEnd={handleIconTransitionEnd}
              style={{
                backgroundImage:
                  "url('https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/el3CzCBvi2r.png')",
                backgroundPosition: "-153px -109px",
                backgroundSize: "auto",
                width: "16px",
                height: "16px",
                backgroundRepeat: "no-repeat",
                // display: `${isSearching ? "none" : "inline-block"}`,
                filter: "invert(89%)",
              }}
            ></i>
            <input
              type="text"
              placeholder="Search Facebook"
              onFocus={handleSearchFocus}
              onBlur={handleSearchBlur}
            />
          </div>
        </div>
        <div className="header__middle">
          <ul className="header__nav">
            <li
              className={`header__nav-item home--disappear ${
                activeNav === 1 ? "nav-item--active" : "nav-item--inactive"
              }`}
              onClick={() => handleNavClick(1)}
            >
              <div className="nav-item__wrapper ">
                <svg viewBox="0 0 28 28" height="28" width="28">
                  <path
                    d={
                      activeNav === 1
                        ? "M25.825 12.29C25.824 12.289 25.823 12.288 25.821 12.286L15.027 2.937C14.752 2.675 14.392 2.527 13.989 2.521 13.608 2.527 13.248 2.675 13.001 2.912L2.175 12.29C1.756 12.658 1.629 13.245 1.868 13.759 2.079 14.215 2.567 14.479 3.069 14.479L5 14.479 5 23.729C5 24.695 5.784 25.479 6.75 25.479L11 25.479C11.552 25.479 12 25.031 12 24.479L12 18.309C12 18.126 12.148 17.979 12.33 17.979L15.67 17.979C15.852 17.979 16 18.126 16 18.309L16 24.479C16 25.031 16.448 25.479 17 25.479L21.25 25.479C22.217 25.479 23 24.695 23 23.729L23 14.479 24.931 14.479C25.433 14.479 25.921 14.215 26.132 13.759 26.371 13.245 26.244 12.658 25.825 12.29"
                        : "M17.5 23.979 21.25 23.979C21.386 23.979 21.5 23.864 21.5 23.729L21.5 13.979C21.5 13.427 21.949 12.979 22.5 12.979L24.33 12.979 14.017 4.046 3.672 12.979 5.5 12.979C6.052 12.979 6.5 13.427 6.5 13.979L6.5 23.729C6.5 23.864 6.615 23.979 6.75 23.979L10.5 23.979 10.5 17.729C10.5 17.04 11.061 16.479 11.75 16.479L16.25 16.479C16.939 16.479 17.5 17.04 17.5 17.729L17.5 23.979ZM21.25 25.479 17 25.479C16.448 25.479 16 25.031 16 24.479L16 18.327C16 18.135 15.844 17.979 15.652 17.979L12.348 17.979C12.156 17.979 12 18.135 12 18.327L12 24.479C12 25.031 11.552 25.479 11 25.479L6.75 25.479C5.784 25.479 5 24.695 5 23.729L5 14.479 3.069 14.479C2.567 14.479 2.079 14.215 1.868 13.759 1.63 13.245 1.757 12.658 2.175 12.29L13.001 2.912C13.248 2.675 13.608 2.527 13.989 2.521 14.392 2.527 14.753 2.675 15.027 2.937L25.821 12.286C25.823 12.288 25.824 12.289 25.825 12.29 26.244 12.658 26.371 13.245 26.133 13.759 25.921 14.215 25.434 14.479 24.931 14.479L23 14.479 23 23.729C23 24.695 22.217 25.479 21.25 25.479Z"
                    }
                  ></path>
                </svg>
              </div>
            </li>
            <li
              className={`header__nav-item pages--disappear ${
                activeNav === 2 ? "nav-item--active" : "nav-item--inactive"
              }`}
              onClick={() => handleNavClick(2)}
            >
              <div className="nav-item__wrapper ">
                <svg viewBox="0 0 28 28" height="28" width="28">
                  <path
                    d={
                      activeNav === 2
                        ? "M5 3.25v-1a.75.75 0 011.5 0v1a.75.75 0 01-1.5 0zm1.5 12.001a.75.75 0 01-1.5 0V8.749a.75.75 0 011.5 0v6.502zM5.75 20a.75.75 0 01.75.75v6.5a.75.75 0 01-1.5 0v-6.5a.75.75 0 01.75-.75zM24.857 5.328a.745.745 0 01.105.674L22.99 12l1.973 6.015a.75.75 0 01-.712.984H4.75a.75.75 0 010-1.5H7.5A.5.5 0 008 17V7.018a.5.5 0 00-.5-.5H4.75a.75.75 0 01-.003-1.5l4-.018c.078.01.11.006.164.018h15.34a.75.75 0 01.606.31z"
                        : "M5.75 4A.75.75 0 015 3.25v-1a.75.75 0 011.5 0v1a.75.75 0 01-.75.75zm.75 11.251a.75.75 0 01-1.5 0V8.749a.75.75 0 011.5 0v6.502zM5.75 28a.75.75 0 01-.75-.75v-6.5a.75.75 0 011.5 0v6.5a.75.75 0 01-.75.75zm15.737-16.234L23.214 6.5H9.5v11h13.715l-1.728-5.266a.749.749 0 010-.468zM4.75 5h19.5a.75.75 0 01.713.986l-1.974 6.006 1.974 6.023a.75.75 0 01-.713.985H4.75a.75.75 0 010-1.502L8 17.5v-11H4.75a.749.749 0 110-1.5z"
                    }
                  ></path>
                </svg>
              </div>
            </li>
            <li
              className={`header__nav-item watch--disappear ${
                activeNav === 3 ? "nav-item--active" : "nav-item--inactive"
              }`}
              onClick={() => handleNavClick(3)}
            >
              <div className="nav-item__wrapper ">
                <svg viewBox="0 0 28 28" height="28" width="28">
                  <path
                    d={
                      activeNav === 3
                        ? "M8.75 25.25C8.336 25.25 8 24.914 8 24.5 8 24.086 8.336 23.75 8.75 23.75L19.25 23.75C19.664 23.75 20 24.086 20 24.5 20 24.914 19.664 25.25 19.25 25.25L8.75 25.25ZM17.164 12.846 12.055 15.923C11.591 16.202 11 15.869 11 15.327L11 9.172C11 8.631 11.591 8.297 12.055 8.576L17.164 11.654C17.612 11.924 17.612 12.575 17.164 12.846M21.75 2.75 6.25 2.75C4.182 2.75 2.5 4.432 2.5 6.5L2.5 18C2.5 20.068 4.182 21.75 6.25 21.75L21.75 21.75C23.818 21.75 25.5 20.068 25.5 18L25.5 6.5C25.5 4.432 23.818 2.75 21.75 2.75"
                        : "M8.75 25.25C8.336 25.25 8 24.914 8 24.5 8 24.086 8.336 23.75 8.75 23.75L19.25 23.75C19.664 23.75 20 24.086 20 24.5 20 24.914 19.664 25.25 19.25 25.25L8.75 25.25ZM17.163 12.846 12.055 15.923C11.591 16.202 11 15.869 11 15.327L11 9.172C11 8.631 11.591 8.297 12.055 8.576L17.163 11.654C17.612 11.924 17.612 12.575 17.163 12.846ZM21.75 20.25C22.992 20.25 24 19.242 24 18L24 6.5C24 5.258 22.992 4.25 21.75 4.25L6.25 4.25C5.008 4.25 4 5.258 4 6.5L4 18C4 19.242 5.008 20.25 6.25 20.25L21.75 20.25ZM21.75 21.75 6.25 21.75C4.179 21.75 2.5 20.071 2.5 18L2.5 6.5C2.5 4.429 4.179 2.75 6.25 2.75L21.75 2.75C23.821 2.75 25.5 4.429 25.5 6.5L25.5 18C25.5 20.071 23.821 21.75 21.75 21.75Z"
                    }
                  ></path>
                </svg>
              </div>
            </li>
            <li
              className={`header__nav-item groups--disappear ${
                activeNav === 4 ? "nav-item--active" : "nav-item--inactive"
              }`}
              onClick={() => handleNavClick(4)}
            >
              <div className="nav-item__wrapper ">
                <svg viewBox="0 0 28 28" height="28" width="28">
                  <path
                    d={
                      activeNav === 4
                        ? "M21.877 19 21.364 19C21.139 19 20.971 18.802 20.996 18.577 21.01 18.461 21.017 18.342 21.017 18.221L21.017 17.724C21.017 16.568 20.667 15.491 20.066 14.591 19.899 14.338 20.067 14 20.369 14L20.521 14C22.274 14 23.5 15.492 23.5 17.327 23.5 18.25 22.772 19 21.877 19ZM17.75 10.75C17.75 9.384 18.535 8.5 19.75 8.5 20.965 8.5 21.75 9.384 21.75 10.75 21.75 11.991 20.853 13 19.75 13 18.647 13 17.75 11.991 17.75 10.75ZM19.5 18.221C19.5 19.202 18.682 20 17.678 20L10.323 20C9.317 20 8.5 19.202 8.5 18.221L8.5 17.724C8.5 15.395 10.442 13.5 12.828 13.5L15.173 13.5C17.559 13.5 19.5 15.395 19.5 17.724L19.5 18.221ZM6.25 10.75C6.25 9.384 7.035 8.5 8.25 8.5 9.465 8.5 10.25 9.384 10.25 10.75 10.25 11.991 9.353 13 8.25 13 7.147 13 6.25 11.991 6.25 10.75ZM7.934 14.591C7.334 15.491 6.983 16.568 6.983 17.724L6.983 18.221C6.983 18.342 6.991 18.461 7.004 18.577 7.03 18.802 6.861 19 6.637 19L6.123 19C5.228 19 4.5 18.25 4.5 17.327 4.5 15.492 5.727 14 7.479 14L7.631 14C7.933 14 8.102 14.338 7.934 14.591ZM14 6C15.697 6 16.75 7.15 16.75 9 16.75 10.655 15.517 12 14 12 12.484 12 11.25 10.655 11.25 9 11.25 7.15 12.304 6 14 6ZM14 1C6.832 1 1 6.832 1 14 1 21.169 6.832 27 14 27 21.169 27 27 21.169 27 14 27 6.832 21.169 1 14 1Z"
                        : "M25.5 14C25.5 7.649 20.351 2.5 14 2.5 7.649 2.5 2.5 7.649 2.5 14 2.5 20.351 7.649 25.5 14 25.5 20.351 25.5 25.5 20.351 25.5 14ZM27 14C27 21.18 21.18 27 14 27 6.82 27 1 21.18 1 14 1 6.82 6.82 1 14 1 21.18 1 27 6.82 27 14ZM7.479 14 7.631 14C7.933 14 8.102 14.338 7.934 14.591 7.334 15.491 6.983 16.568 6.983 17.724L6.983 18.221C6.983 18.342 6.99 18.461 7.004 18.578 7.03 18.802 6.862 19 6.637 19L6.123 19C5.228 19 4.5 18.25 4.5 17.327 4.5 15.492 5.727 14 7.479 14ZM20.521 14C22.274 14 23.5 15.492 23.5 17.327 23.5 18.25 22.772 19 21.878 19L21.364 19C21.139 19 20.97 18.802 20.997 18.578 21.01 18.461 21.017 18.342 21.017 18.221L21.017 17.724C21.017 16.568 20.667 15.491 20.067 14.591 19.899 14.338 20.067 14 20.369 14L20.521 14ZM8.25 13C7.147 13 6.25 11.991 6.25 10.75 6.25 9.384 7.035 8.5 8.25 8.5 9.465 8.5 10.25 9.384 10.25 10.75 10.25 11.991 9.353 13 8.25 13ZM19.75 13C18.647 13 17.75 11.991 17.75 10.75 17.75 9.384 18.535 8.5 19.75 8.5 20.965 8.5 21.75 9.384 21.75 10.75 21.75 11.991 20.853 13 19.75 13ZM15.172 13.5C17.558 13.5 19.5 15.395 19.5 17.724L19.5 18.221C19.5 19.202 18.683 20 17.677 20L10.323 20C9.317 20 8.5 19.202 8.5 18.221L8.5 17.724C8.5 15.395 10.441 13.5 12.828 13.5L15.172 13.5ZM16.75 9C16.75 10.655 15.517 12 14 12 12.484 12 11.25 10.655 11.25 9 11.25 7.15 12.304 6 14 6 15.697 6 16.75 7.15 16.75 9Z"
                    }
                  ></path>
                </svg>
              </div>
            </li>
            <li
              className={`header__nav-item game--appear ${
                activeNav === 5 ? "nav-item--active" : "nav-item--inactive"
              }`}
              onClick={() => handleNavClick(5)}
            >
              <div className="nav-item__wrapper">
                <svg viewBox="0 0 28 28" height="28" width="28">
                  <path
                    d={
                      activeNav === 5
                        ? "M10.25 18.5h6.25a.5.5 0 01.5.5v5.5a.5.5 0 01-.5.5H4.25C3.56 25 3 24.44 3 23.75V4.25C3 3.56 3.56 3 4.25 3h19.5c.69 0 1.25.56 1.25 1.25V9a.5.5 0 01-.5.5H10.25a.75.75 0 00-.75.75v7.5c0 .414.336.75.75.75zM11.5 17a.5.5 0 01-.5-.5v-5a.5.5 0 01.5-.5h13a.5.5 0 01.5.5v12.25c0 .69-.56 1.25-1.25 1.25H19a.5.5 0 01-.5-.5v-6.75a.75.75 0 00-.75-.75H11.5z"
                        : "M23.5 9.5H10.25a.75.75 0 00-.75.75v7c0 .414.336.75.75.75H17v5.5H4.5v-19h19v5zm0 14h-5v-6.25a.75.75 0 00-.75-.75H11V11h12.5v12.5zm1.5.25V4.25C25 3.561 24.439 3 23.75 3H4.25C3.561 3 3 3.561 3 4.25v19.5c0 .689.561 1.25 1.25 1.25h19.5c.689 0 1.25-.561 1.25-1.25z"
                    }
                  ></path>
                </svg>
              </div>
            </li>
            <li
              className={`header__nav-item more--appear ${
                activeNav === 6 ? "nav-item--active" : "nav-item--inactive"
              }`}
              onClick={() => handleNavClick(6)}
            >
              <div className="nav-item__wrapper ">
                <svg viewBox="0 0 28 28" height="28" width="28">
                  <path
                    d={
                      activeNav === 6
                        ? "M23.5 4a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19zm0 18a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19zm0-9a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19z"
                        : "M23.5 4a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19zm0 18a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19zm0-9a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19z"
                    }
                  ></path>
                </svg>
              </div>
            </li>
          </ul>
        </div>
        <div className="header__right">
          <div className="header__user">
            <img
              src="https://scontent.fhan3-5.fna.fbcdn.net/v/t1.6435-1/cp0/c0.21.60.60a/p60x60/169444839_1696627483862853_6011983667638103075_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=XEmhW9eD8aEAX_F7r88&_nc_ht=scontent.fhan3-5.fna&oh=b3e64eb36e0057fd0db89a5d4a236c84&oe=617A0A5A"
              alt=""
              className="user__image nav-item--icon"
            />
            <span className="user__name nav-item--name">Minh</span>
          </div>
          <div className="header__functions">
            <div className="functions__menu function--item">
              <i
                data-visualcompletion="css-img"
                className="menu--disappear"
                style={{
                  backgroundImage:
                    "url('https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/el3CzCBvi2r.png')",
                  backgroundPosition: "-168px -67px",
                  backgroundSize: "auto",
                  width: "20px",
                  height: "20px",
                  backgroundRepeat: "no-repeat",
                  // display: "inline-block",
                  filter: "invert(89%)",
                }}
              ></i>
              <i
                data-visualcompletion="css-img"
                className="create--appear"
                style={{
                  backgroundImage:
                    "url('https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/b1A2DlBdqL5.png')",
                  backgroundPosition: "0 -88px",
                  backgroundSize: "auto",
                  width: "20px",
                  height: "20px",
                  backgroundRepeat: "no-repeat",
                  filter: "invert(89%)",
                }}
              ></i>
            </div>
            <div className="functions__messages function--item">
              <svg
                viewBox="0 0 28 28"
                alt=""
                class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 fzdkajry"
                height="20"
                width="20"
              >
                <path d="M14 2.042c6.76 0 12 4.952 12 11.64S20.76 25.322 14 25.322a13.091 13.091 0 0 1-3.474-.461.956 .956 0 0 0-.641.047L7.5 25.959a.961.961 0 0 1-1.348-.849l-.065-2.134a.957.957 0 0 0-.322-.684A11.389 11.389 0 0 1 2 13.682C2 6.994 7.24 2.042 14 2.042ZM6.794 17.086a.57.57 0 0 0 .827.758l3.786-2.874a.722.722 0 0 1 .868 0l2.8 2.1a1.8 1.8 0 0 0 2.6-.481l3.525-5.592a.57.57 0 0 0-.827-.758l-3.786 2.874a.722.722 0 0 1-.868 0l-2.8-2.1a1.8 1.8 0 0 0-2.6.481Z"></path>
              </svg>
            </div>
            <div className="functions__notifications function--item">
              <svg
                viewBox="0 0 28 28"
                alt=""
                class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 fzdkajry"
                height="20"
                width="20"
              >
                <path d="M7.847 23.488C9.207 23.488 11.443 23.363 14.467 22.806 13.944 24.228 12.581 25.247 10.98 25.247 9.649 25.247 8.483 24.542 7.825 23.488L7.847 23.488ZM24.923 15.73C25.17 17.002 24.278 18.127 22.27 19.076 21.17 19.595 18.724 20.583 14.684 21.369 11.568 21.974 9.285 22.113 7.848 22.113 7.421 22.113 7.068 22.101 6.79 22.085 4.574 21.958 3.324 21.248 3.077 19.976 2.702 18.049 3.295 17.305 4.278 16.073L4.537 15.748C5.2 14.907 5.459 14.081 5.035 11.902 4.086 7.022 6.284 3.687 11.064 2.753 15.846 1.83 19.134 4.096 20.083 8.977 20.506 11.156 21.056 11.824 21.986 12.355L21.986 12.356 22.348 12.561C23.72 13.335 24.548 13.802 24.923 15.73Z"></path>
              </svg>
            </div>
            <div className="functions__account function--item">
              <i
                data-visualcompletion="css-img"
                class="hu5pjgll lzf7d6o1"
                style={{
                  backgroundImage:
                    "url(https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/el3CzCBvi2r.png)",
                  backgroundPosition: "-147px -88px",
                  backgroundSize: "auto",
                  width: "20px",
                  height: "20px",
                  backgroundRepeat: "no-repeat",
                  display: "inline-block",
                  filter: "invert(89%) sepia(6%) hue-rotate(185deg)",
                }}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}