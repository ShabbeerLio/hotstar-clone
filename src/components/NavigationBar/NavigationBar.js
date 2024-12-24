import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router";
import "./NavigationBar.css";
import logo from "../../Assets/logo-d-plus.svg";
import {
  FiHome,
  FiUser,
  FiSearch,
  FiAirplay,
  FiMonitor,
  FiTarget,
  FiSlack,
} from "react-icons/fi";

const Navbar = () => {
  let timer;
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [final, setFinal] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  const searchUrl =
    "https://api.themoviedb.org/3/trending/movie/week?api_key=dbbabc4ba854dfe84597e635c79468d7";

  const imgUri = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    fetch(searchUrl)
      .then((res) => res.json())
      .then(
        (result) => {
          //   console.log(result);
          setItems(result.results);
          //   console.log(items);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  const search = (event) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      const searchResults = document.querySelector(".search-results");

      if (event.target.value === "") {
        if (!searchResults.classList.contains("hidden")) {
          searchResults.classList.add("hidden");
        }
      } else {
        if (searchResults.classList.contains("hidden"))
          searchResults.classList.remove("hidden");
        const result = items
          .filter((item) =>
            item.title.toLowerCase().includes(event.target.value.toLowerCase())
          )
          .slice(0, 5);
        setFinal(result);
      }
    }, 500);
  };

  const searchClick = () => {
    setFinal([]);
    document.querySelector(".search-box").value = "";
  };

  return (
    <nav className="navbar"
    style={{ width: isHovered ? "100%" : "6%", transition: "width 0.3s ease" }} >
      <img
        src={logo}
        alt=""
        className="logo"
        onClick={() => {
          navigate("/");
        }}
      />
      <ul className="nav-links nav-responsive"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} >
        <li className="nav-items nav-responsive dropdown-box">
          <Link to={"/profile"}>
            <FiUser />
            <p>Profile</p>
          </Link>
        </li>
        <li className="nav-items nav-responsive dropdown-box">
          <Link to={"/search"}>
            <FiSearch />
            <p>Search</p>
          </Link>
        </li>
        <li className="nav-items nav-responsive dropdown-box">
          <Link to={"/"}>
            <FiHome />
            <p>Home</p>
          </Link>
        </li>
        <li className="nav-items nav-responsive dropdown-box">
          <Link to={"/tv"}>
            <FiMonitor />
            <p>Tv</p>
          </Link>
        </li>
        <li className="nav-items nav-responsive dropdown-box">
          <Link to={"/movies"}>
            <FiAirplay />
            <p>Movies</p>
          </Link>
        </li>
        <li className="nav-items nav-responsive dropdown-box">
          <Link>
            <FiTarget to={"/sports"}/>
            <p>Sports</p>
          </Link>
        </li>
        <li className="nav-items nav-responsive dropdown-box">
          <Link>
            <FiSlack to={"/category"}/>
            <p>Category</p>
          </Link>
        </li>
      </ul>

      <div className="right-container">
        {/* <div className="search-field">
          <input
            type="text"
            className="search-box"
            placeholder="search"
            onChange={search}
          />
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
        </div>

        <button className="sub-btn">subscribe</button> */}
        {/* <a href="/" className="login-link">
          login
        </a> */}
      </div>
      <div className="search-results hidden">
        {final.map((searchList) => (
          <div className="outerbox">
            <Link to={"/movie/" + searchList.id} onClick={searchClick}>
              <div className="search-dropdown-menu">
                <div className="search-dropdown-img">
                  <img
                    className="searchImages"
                    src={imgUri + searchList.poster_path}
                    alt={searchList.title}
                  />
                </div>
                <div className="search-dropdown-title">
                  <h6>{searchList.title}</h6>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
