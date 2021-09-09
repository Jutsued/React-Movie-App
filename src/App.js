import logo from './logo.svg';
import './App.css';
import React, { useEffect, useImperativeHandle, useState, useRef } from 'react';
import Movie from './components/Movie';
import Nav from './components/Navbar';
import gitSvg from './github.svg';
import phone from './smartphone.svg';
import email from './email.svg';
import linkin from './linkedin.svg';


const apiHOME =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6193a0db431493626cef95cea16d4d9d&page=1";
const imgURL = "https://image.tmdb.org/t/p/w1280";
const searchAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=6193a0db431493626cef95cea16d4d9d&query=";



function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const container = useRef(null)
  const [isActive, setActive] = useState("false");
  
  
  useEffect(() => {
    getMovies(apiHOME);
  }, []);

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results)
      });
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      getMovies(searchAPI + searchTerm)
      setSearchTerm('');
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const handleOnClick = (e) => {
        const searchTerm = e.target.id;
        const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6193a0db431493626cef95cea16d4d9d&with_genres=${searchTerm}`;

        if(searchTerm) {
          getMovies(url)
        }
  }

  const handleScroll = () => {
    const div = container.current;
    const offset = window.scrollY;
    if(offset > 100) {
      setScrolled(true)
      div.className = 'stick';
    } else {
      setScrolled(false)
      div.className = ""
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  const handleToggle = () => {
    setActive(!isActive);
  };


  return (
    <>
      <Nav  
      submit = {handleOnSubmit}
      search = {searchTerm}
      handleChange = {handleOnChange}
      handleClick = {handleOnClick}
      container = {container}
      handleToggle = {handleToggle}
      isActive = {isActive}
      />
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie
            key={movie.id} {...movie} />)}
      </div>
      <main id="main2"></main>
      <div className="footer">
        <span className="logos">
          <a href="tel:%16464190206">
            <img src={phone} alt="phoneSVG"></img>
            </a>
          <a href="mailto:%pabloa.bonilla@outlook.com">
            <img src={email} alt="emailSVG"></img>
            </a>
          <a href="https://github.com/Jutsued">
            <img src={gitSvg} alt="gitSVG"></img>
            </a>
          <a href="https://www.linkedin.com/in/pablo-bonilla-999975190/">
            <img src={linkin} alt="linkinSVG"></img>
            </a>
        </span>
      </div>
    </>
  )
}

export default App;
