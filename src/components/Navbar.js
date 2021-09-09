import React, { useState } from "react";

const Nav = (props) => {
    return(<> 
    <header ref={props.container}>
    
        <nav className="navbar" id="test">
          <a href="#" className="toggle-button" ref={props.toggleButton} onClick={props.handleToggle}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </a>
           
          <div className={props.isActive ? "navbar-links active" : 'navbar-links'} 
          >
            <ul>
              <li id="smooth">
                <form onSubmit={props.submit}>
                  <input
                    className="search"
                    id="search"
                    type="search"
                    placeholder="search"
                    value={props.search}
                    onChange={props.handleChange} />
                </form>
              </li>
              <li><a href="#" id="28" className="find" onClick={props.handleClick}>Action</a></li>
              <li><a href="#" id="12" className="find" onClick={props.handleClick}>Adventure</a></li>
              <li><a href="#" id="16" className="find" onClick={props.handleClick}>Animation</a></li>
              <li><a href="#" id="14" className="find" onClick={props.handleClick}>Fiction</a></li>
              <li><a href="#" id="27" className="find" onClick={props.handleClick}>Horror</a></li>
              <li><a href="#" id="99" className="find" onClick={props.handleClick}>Documentary</a></li>
              <li><a href="#" id="35" className="find" onClick={props.handleClick}>Comedy</a></li>
            </ul>
          </div>
        </nav> 

      </header>
    </>
)}

export default Nav;