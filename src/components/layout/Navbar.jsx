import React from 'react';
import './Navbar.css';
import { assets } from "../../assets/asset";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCog, faIndianRupeeSign, faSignOutAlt, faChartLine,faExpand } from '@fortawesome/free-solid-svg-icons';


  



export default function Navbar() {

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  return (
    <div className='container-fluid p-0'>
      <nav className="navbar navbar-expand-lg p-0">
        <div className="container-fluid">
          <div className='logo'>
            <img src={assets.logo} alt="Logo" />
          </div>

          <div className='heading'>
            <Link className="navbar-brand" to="#"><span className="hed1">GO</span><span className="hed2">MART</span></Link>
          </div>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse  text-md-center text-sm-center" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/homePage">
                  <FontAwesomeIcon icon={faIndianRupeeSign} /> POS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/view-product">
                  <FontAwesomeIcon icon={faPlus} /> Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/view-category">
                  <FontAwesomeIcon icon={faPlus} /> Category
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/report">
                  <FontAwesomeIcon icon={ faChartLine} /> Reports
                </Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="/setting">
                  <FontAwesomeIcon icon={faCog} /> Setting
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/logout">
                  <FontAwesomeIcon icon={faSignOutAlt} /> Log Out
                </Link>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={handleFullscreen}>
                  <FontAwesomeIcon icon={faExpand} className="fa-icon" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
