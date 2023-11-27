import Link from "next/link";
import { Fragment, useState } from "react";
import SearchModal from "./SearchModal";

const Menu = () => {
  return (
    <Fragment>
      <DeskTopMenu />
      <MobileMenu />
    </Fragment>
  );
};
export default Menu;

const DeskTopMenu = () => {
  const [searchModal, setSearchModal] = useState(false);
  return (
    <Fragment>
      <SearchModal
        show={searchModal}
        handleClose={() => setSearchModal(false)}
      />
      <nav className="main-menu d-none d-xl-block">
        <ul>
          <li className="menu-item has-children">
            <a href="index-2" style={{ fontSize: '16px' }}>
              Home 
              <span className="dd-trigger">
                <i className="far fa-angle-down" />
              </span>
            </a>
            
          </li>
          <li className="menu-item has-children">
            <a href="#" style={{ fontSize: '16px' }}>
              About UATE
              <span className="dd-trigger">
                <i className="far fa-angle-down" />
              </span>
            </a>
            <ul className="sub-menu">
              <li>
                <Link href="tour">About Utalii</Link>
              </li>
              <li>
                <Link href="">UATE Details</Link>
              </li>
            </ul>
          </li>
          <li className="menu-item has-children">
            <a href="exhibitors" style={{ fontSize: '16px' }}>
              Exhibitors
              <span className="dd-trigger">
                <i className="far fa-angle-down" />
              </span>
            </a>
            <ul className="sub-menu">
              <li>
                <Link href="contact">Registration</Link>
              </li>
              <li>
                <Link href="">Exhibitor Details</Link>
              </li>
            </ul>
          </li>
          <li className="menu-item has-children">
            <a href="sponsors" style={{ fontSize: '16px' }}>
              Sponsors
              <span className="dd-trigger">
                <i className="far fa-angle-down" />
              </span>
            </a>
            <ul className="sub-menu">
              <li>
                <Link href="contact">Registration</Link>
              </li>
              <li>
                <Link href="">Sponsor Details</Link>
              </li>
            </ul>
          </li>
          <li className="menu-item has-children">
            <a href="traders" style={{ fontSize: '16px' }}>
              Trader Visitors
              <span className="dd-trigger">
                <i className="far fa-angle-down" />
              </span>
            </a>
            <ul className="sub-menu">
              <li>
                <Link href="contact">Registration</Link>
              </li>
              <li>
                <Link href="contact">Details</Link>
              </li>
             
            </ul>
          </li>
          
          <li className="menu-item has-children">
            <a href="product-details" style={{ fontSize: '16px' }}>
              Media
              <span className="dd-trigger">
                <i className="far fa-angle-down" />
              </span>
            </a>
            <ul className="sub-menu">
              {/* <li>
                <Link href="about">About Us</Link>
              </li> */}
              {/* <li>
                <Link href="gallery">Our Gallery</Link>
              </li> */}
              {/* <li>
                <Link href="events">Our Events</Link>
              </li> */}
              <li>
                <Link href="">Media Details</Link>
              </li>
             
              <li>
                <Link href="contact">Registration</Link>
              </li>
            </ul>
          </li>
        
        </ul>
      </nav>
    </Fragment>
  );
};

const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <nav className="main-menu d-block d-xl-none">
      <ul>
        <li className="menu-item has-children">
          <a href="#">
            Home
            <span className="dd-trigger" onClick={() => activeMenuSet("home")}>
              <i className="far fa-angle-down" />
            </span>
          </a>
         
        </li>
        <li className="menu-item has-children">
          <a href="#">
            About UATE
            <span className="dd-trigger" onClick={() => activeMenuSet("Tours")}>
              <i className="far fa-angle-down" />
            </span>
          </a>
          <ul className="sub-menu" style={activeLi("")}>
            <li>
              <Link href="tour">About Utalii</Link>
            </li>
            <li>
              <Link href="tour-details">UATE Details</Link>
            </li>
          </ul>
        </li>
        <li className="menu-item has-children">
          <a href="exhibitors">
            Exhibitors
            <span
              className="dd-trigger"
              onClick={() => activeMenuSet("Destination")}
            >
              <i className="far fa-angle-down" />
            </span>
          </a>
          {/* <ul className="sub-menu" style={activeLi("Destination")}>
            <li>
              <Link href="destination">Destination</Link>
            </li>
            <li>
              <Link href="destination-details">Destination Details</Link>
            </li>
          </ul> */}
        </li>
        <li className="menu-item has-children">
          <a href="product-details">
            Sponsors
            <span className="dd-trigger" onClick={() => activeMenuSet("Blog")}>
              <i className="far fa-angle-down" />
            </span>
          </a>
          <ul className="sub-menu" style={activeLi("")}>
            {/* <li>
              <Link href="blog-list">Blog List</Link>
            </li>
            <li>
              <Link href="blog-details">Blog Details</Link>
            </li> */}
          </ul>
        </li>
        <li className="menu-item has-children">
            <a href="traders">
              Trader Visitors
              <span className="dd-trigger">
                <i className="far fa-angle-down" />
              </span>
            </a>
            <ul className="sub-menu">
              {/* <li>
                <Link href="destination">Destination</Link>
              </li> */}
             
            </ul>
          </li>
          
        <li className="menu-item has-children">
          <a href="#">
            Media
            <span className="dd-trigger" onClick={() => activeMenuSet("")}>
              <i className="far fa-angle-down" />
            </span>
          </a>
          <ul className="sub-menu" style={activeLi("")}>
            <li>
              <Link href="product-details">Media</Link>
            </li>
            {/* <li>
              <Link href="gallery">Our Gallery</Link>
            </li> */}
            {/* <li>
              <Link href="events">Our Events</Link>
            </li> */}
            {/* <li>
              <Link href="shop">Our Shop</Link>
            </li>
            <li>
              <Link href="product-details">Product Details</Link>
            </li> */}
            <li>
              <Link href="contact">Contact</Link>
            </li>
          </ul>
        </li>
        {/* <li className="menu-item search-item">
          <div
            className="search-btn"
            data-bs-toggle="modal"
            data-bs-target="#search-modal"
          >
            <i className="far fa-search" />
          </div>
        </li> */}
      </ul>
    </nav>
  );
};
