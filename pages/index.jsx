import GallerySection from "@/src/components/GallerySection";
import Layout from "@/src/layout/Layout";
import {
  home1Slider,
  sliderActive3Item,
  partnerSliderOne,
  sliderActive4Item,
  testimonialSliderOne,
} from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});
const Index = () => {
  return (
 
    <Layout  extraClass={"pt-140"}>
    {/*====== Start Hero Section ======*/}
    <section className="partners-section black-dark-bg">
      <div className="cont">
      <img
                src="assets/images/about/about-4.jpg"
                alt="About image"
                style={{
                  width: '100%', // Set the desired width
                  height: '400px', // To maintain aspect ratio
                  borderRadius: '10px',
                  marginLeft: '0px',
                  marginRight: '0px'// Set the curved border radius
                }}
              />
      </div>
    </section>
    { <header2/>}
    {/* <Home3Slider /> */}
    <br />
    <br />
    <hr style={{ fontSize: '24px' }}/>
    
    <section className="booking-form-section">
   
    
    {/* <CounterTimer /> */}
      <div className="container-fluid">
        <div className="booking-form-wrapper">
          <form className="booking-form-two">
            <div className="form_group">
              <span>Sponsors</span>
              <label>
                <i className="far fa-user-alt" />
              </label>
              <input
                type="text"
                className="form_control datepicker"
                placeholder="Register"
              />
            </div>
            <div className="form_group">
              <span>Media</span>
              <label>
                <i className="far fa-user-alt" />
              </label>
              <input
                type="text"
                className="form_control datepicker"
                placeholder="Register"
              />
            </div>
            <div className="form_group">
              <span>Exhibitors</span>
              <label>
                <i className="far fa-user-alt" />
              </label>
              <input
                type="text"
                className="form_control"
                placeholder="Register"
                name="text"
              />
            </div>
            {/* <div className="form_group">
              <span>Trade Visitors</span>
              <select className="wide">
                <option data-display="Accommodations">Trade Visitors</option>
                <option value={1}>Classic Tent</option>
                <option value={1}>Forest Camping</option>
                <option value={1}>Small Trailer</option>
                <option value={1}>Tree House Tent</option>
                <option value={1}>Tent Camping</option>
                <option value={1}>Couple Tent</option>
              </select>
            </div> */}
            <div className="form_group">
              <button className="booking-btn">
                Check Availability <i className="far fa-angle-double-right" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  
   
  
    <section className="about-section pt-100 pb-50 mt-4">
      <div className="container">
        
      <span className="sub-title" style={{ marginLeft: '0px', marginRight: '0px', fontSize: '32px' }}>The Expo</span>
      <hr/>
      <h3 style={{ marginLeft: '20px', marginRight: '20px', fontWeight: 'lighter', fontSize: '21px' }}>Utalii Africa Tourism Expo (UATE) is an unprecedented event that seeks to redefine Africa's tourism journey. Taking place over the course of three days in June 2024 in the Ugandan capital, Kampala, the event will bring together key industry players from all over the continent for crucial conversations about the future. <br/>
       </h3>
       <br />
       <Link legacyBehavior href="/blog-details">
                    <a className="main-btn filled-btn" style={{ fontSize: '20px', }}>
                      African Tourism
                      <br />
                      Read More
                      <i className="far fa-paper-plane" />
                    </a>
                  </Link>
      </div>
       
    </section>
   
    <br />
    <br />
    <br />
    <br />

     <section className="fun-section">
      <div className="container">
        {/*=== Fun Wrapper ===*/}
        <div
          className="fun-wrapper pt-80 pb-40 bg_cover"
          style={{ 
            backgroundImage: "url(assets/images/bg/map.png)",
            width: '100%',
            marginLeft: '0px',
            height: 'Auto'
                    }}
          
        >
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              {/*=== Counter Item ===*/}
              <div className="single-counter-item-two mb-30">
                <div className="inner-counter text-center">
                  <div className="icon">
                    <i className="flaticon-journey" />
                  </div>
                  <div className="content text-white">
                    <h2 className="number">
                      <Counter end={54} />
                    </h2>
                    <p>African Countries</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              {/*=== Counter Item ===*/}
              <div className="single-counter-item-two mb-30">
                <div className="inner-counter text-center">
                  <div className="icon">
                    <i className="flaticon-tent-1" />
                  </div>
                  <div className="content text-white">
                    <h2 className="number">
                      <Counter end={100} />
                    </h2>
                    <p>Media</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              {/*=== Counter Item ===*/}
              <div className="single-counter-item-two mb-30">
                <div className="inner-counter text-center">
                  <div className="icon">
                    <i className="flaticon-reviews" />
                  </div>
                  <div className="content text-white">
                    <h2 className="number">
                      <Counter end={80} />
                    </h2>
                    <p>Speakers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              {/*=== Counter Item ===*/}
              <div className="single-counter-item-two mb-30">
                <div className="inner-counter text-center">
                  <div className="icon">
                    <i className="flaticon-award" />
                  </div>
                  <div className="content text-white">
                    <h2 className="number">
                      <Counter end={1000} />
                      +
                    </h2>
                    <p>Exhibitors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="who-we-section">
      <div className="container">
        <div className="row align-items-xl-center">
          {/* <div className="col-lg-6 order-2 order-lg-1">
           
            <div className="we-image-box text-center text-lg-left wow fadeInLeft">
              <img
                src="assets/images/gallery/we-1.jpg"
                className="radius-top-left-right-288"
                alt="Image"
              />
            </div>
          </div> */}

          <div className="col-lg-6 order-1 order-lg-2" >
          
          
            <div className="we-one_content-box wow fadeInRight">
              <div className="section-title mb-30">
                <br/>
                
                <span className="sub-title" style={{ fontSize: '32px' }}>Insight</span>
                
                {/* <h2>this will talk about the sponsors &amp; and more</h2> */}
              </div>
      
      <h5 style={{ marginTop: '-24px', marginLeft: '20px', marginRight: '20px', fontWeight: 'lighter', fontSize: '21px' }}>
          Africa’s mega inaugural expo will happen over the course of three days, provide a unique platform
            for African countries and global tourism stakeholders to showcase their products and
         services, build crucial networks with other players in the market, learn from one another
         and close lucrative business deals.
<br/>
<br/>
         Participants will have the collective opportunity to harness Africa’s rich, authentic, cultural
         and natural heritage and hold crucial conversations, with the goal of reigniting the tourism
        business in Africa and promoting inter-Africa travel and trade.</h5>
<br/>
<br />
<br />
              {/* <div className="skill-wrapper">
                <div className="single-skill-circle text-center">
                  <div className="inner-circle">
                    <div className="line" />
                    <span className="number">60%</span>
                  </div>
                  <h5>Saticfied Clients</h5>
                </div>
                <div className="single-skill-circle text-center">
                  <div className="inner-circle">
                    <div className="line" />
                    <span className="number">93%</span>
                  </div>
                  <h5>Success Rate</h5>
                </div>
              </div> */}
            </div>
          </div>
          <hr/>
          <div className="col-lg-6 order-1 order-lg-2" style={{ backgroundColor: ' #DEDEDE',             
                                                                borderRadius: '18px', }}>
          
          <div className="we-one_content-box wow fadeInRight" >
            <div className="section-title mb-30">
              <br />
              <span className="sub-title" style={{ fontSize: '32px' }}>Activities</span>
              
            </div>
            <div className="col-lg-5" >
                    <ul className="check-list">
                      <li>
                        <i className="fas fa-badge-check" />
                       B2B Meetings
                      </li>
                    
                      <li>
                        <i className="fas fa-badge-check"  style={{ }}/>
                        Seminars
                       
                      </li>
                      <li>
                        <i className="fas fa-badge-check" />
                        Exhibitions
                       
                      </li>
                      <li>
                        <i className="fas fa-badge-check" />
                        Workshops 
                      </li>
                      <li>
                        <i className="fas fa-badge-check" />
                       Deal closing
                      </li>
                      <li>
                        <i className="fas fa-badge-check" />
                        FAM Trips
                      
                      </li>
                      <li>
                       
                        <i className="fas fa-badge-check" />
                       Scheduled Media Interviews

                      </li>
                    </ul>
                    <br/>
                  </div>
           
          
          </div>
        </div>
        </div>
      </div>
    </section>
  
    <section className="services-section  pt-100 pb-100" style={{ backgroundColor: ' #DEDEDE',             
                                                                borderRadius: '18px', }}>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xl-7">
          
            <div className="section-title text-center text-white mb-50 wow fadeInDown">
              <span className="sub-title">Exibitors</span>
              <h2  style={{ fontSize: '32px', color:'black' }} >Daily Events as they happen.</h2>
            </div>
          </div>
        </div>
       
        <Slider
          {...sliderActive4Item}
          className="slider-active-4-item wow fadeInUp"
        >
      
          <div className="single-service-item-two">
            <div
              className="hover-bg bg_cover"
              style={{
                backgroundImage: "url(assets/images/service/hover-bg.jpg)",
              }}
            />
            <div className="content">
              <div className="icon">
                <i className="flaticon-camping" />
              </div>
              <h3 className="title">
                <a href="#">Day 1 </a>
              </h3>
              <p>
              All events happening on day one of the expo will be fed in here
              </p>
              <a href="#" className="btn-link">
                Read More <i className="far fa-long-arrow-right" />
              </a>
            </div>
          </div>
         
          <div className="single-service-item-two">
            <div
              className="hover-bg bg_cover"
              style={{
                backgroundImage: "url(assets/images/service/hover-bg.jpg)",
              }}
            />
            <div className="content">
              <div className="icon">
                <i className="flaticon-cable-car" />
              </div>
              <h3 className="title">
                <a href="#">Day 2 </a>
              </h3>
              <p>
              All events happening on day two of the expo will be fed in here
              </p>
              <a href="#" className="btn-link">
                Read More <i className="far fa-long-arrow-right" />
              </a>
            </div>
          </div>
         
          <div className="single-service-item-two">
            <div
              className="hover-bg bg_cover"
              style={{
                backgroundImage: "url(assets/images/service/hover-bg.jpg)",
              }}
            />
            <div className="content">
              <div className="icon">
                <i className="flaticon-trailer" />
              </div>
              <h3 className="title">
                <a href="#">Day 3 </a>
              </h3>
              <p>
               All events happening on day three of the expo will be fed in here
              </p>
              <a href="#" className="btn-link">
                Read More <i className="far fa-long-arrow-right" />
              </a>
            </div>
          </div>
      
          <div className="single-service-item-two">
            <div
              className="hover-bg bg_cover"
              style={{
                backgroundImage: "url(assets/images/service/hover-bg.jpg)",
              }}
            />
            <div className="content">
              <div className="icon">
                <i className="flaticon-firewood" />
              </div>
              <h3 className="title">
                <a href="#"> Presentations</a>
              </h3>
              <p>
                Speeches and presentations will be fed in here.
              </p>
              <a href="#" className="btn-link">
                Read More <i className="far fa-long-arrow-right" />
              </a>
            </div>
          </div>
         
          <div className="single-service-item-two">
            <div
              className="hover-bg bg_cover"
              style={{
                backgroundImage: "url(assets/images/service/hover-bg.jpg)",
              }}
            />
            <div className="content">
              <div className="icon">
                <i className="flaticon-cable-car" />
              </div>
              <h3 className="title">
                <a href="#">News Corner </a>
              </h3>
              <p>
                Every new set of information about UATE will be fed in here.
              </p>
              <a href="#" className="btn-link">
                Read More <i className="far fa-long-arrow-right" />
              </a>
            </div>
          </div>
        </Slider>
      </div>
    </section>
    <section className="events-section pt-100 pb-1000">
        <div className="container">
          {/*====== Products Filter ======*/}
          <div className="page-item-filter mb-40 wow fadeInUp">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-7">
                {/*====== Show Text ======*/}
                <div className="show-text mb-20">
                  <h4>The News Corner</h4>
                </div>
              </div>
              <div className="col-md-5">
                {/*====== Product Dropdown ======*/}
                <div className="product-dropdown float-md-end">
                  <span className="title">Sort By</span>
                  <select className="wide">
                    <option data-display="Default">Default</option>
                    <option value={1}>Best Event</option>
                    <option value={2}>New Events</option>
                    <option value={3}>Upcoming Event</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="single-event-item mb-30 wow fadeInUp">
                <div className="img-holder">
                  <img
                    src="assets/images/event/event-1.jpg"
                    alt="Event Image"
                  />
                </div>
                <div className="content">
                  <div className="meta">
                    <span>
                      <i className="far fa-calendar-alt" />
                      <a href="#">September 25, 2022</a>
                    </span>
                    <h3 className="title">
                      <a href="#">Keep upto date with the Expo</a>
                    </h3>
                    <p className="location">
                      <i className="far fa-map-marker-alt" /> kololo
                      Kampala , Uganda
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="single-event-item mb-30 wow fadeInUp">
                <div className="img-holder">
                  <img
                    src="assets/images/event/event-2.jpg"
                    alt="Event Image"
                  />
                </div>
                <div className="content">
                  <div className="meta">
                    <span>
                      <i className="far fa-calendar-alt" />
                      <a href="#">September 25, 2024</a>
                    </span>
                    <h3 className="title">
                      <a href="#">Keep upto date with the Expo</a>
                    </h3>
                    <p className="location">
                      <i className="far fa-map-marker-alt" /> kololo Kampala, Uganda
                      
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12">
              <div className="single-event-item mb-30 wow fadeInUp">
                <div className="img-holder">
                  <img
                    src="assets/images/event/event-3.jpg"
                    alt="Event Image"
                  />
                </div>
                <div className="content">
                  <div className="meta">
                    <span>
                      <i className="far fa-calendar-alt" />
                      <a href="#">September 25, 2024</a>
                    </span>
                    <h3 className="title">
                      <a href="#">Keep upto date with the Expo</a>
                    </h3>
                    <p className="location">
                      <i className="far fa-map-marker-alt" /> kololo Kampala, Uganda
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    <section className="team-section pt-100 pb-70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7">
         
            <div className="section-title text-center mb-50 wow fadeInDown">
              <span className="sub-title">Team Member</span>
              <h2  style={{ fontSize: '32px' }} >A word from the keynote speakers</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-md-6 col-sm-12">
          
            <div className="single-team-item mb-30 wow fadeInUp">
              <div className="member-img">
                <img src="assets/images/team/team-1.jpg" alt="Team Image" />
              </div>
              <div className="member-info">
                <h4 className="title">The board of UATE</h4>
                <p className="position"> </p>
                <p>
                This section will have a brief word about the expo from the founders
              </p>
                <ul className="social-link">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-sm-12">
            
            <div className="single-team-item mb-30 wow fadeInUp">
              <div className="member-img">
                <img src="assets/images/team/team-2.jpg" alt="Team Image" />
              </div>
              <div className="member-info">
                <h4 className="title">Speaker of Parliament</h4>
                <p className="position">CEO</p>
                <p>
                This section will have a brief word about the expo from the founders and more
              </p>
                <ul className="social-link">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-sm-12">
           
            <div className="single-team-item mb-30 wow fadeInUp">
              <div className="member-img">
                <img src="assets/images/team/team-3.jpg" alt="Team Image" />
              </div>
              <div className="member-info">
                <h4 className="title">Mr Francis</h4>
                <p className="position">FOUNDER</p>
                <p>
                This section will have a brief word about the expo from the founders
              </p>
                <ul className="social-link">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </section>
   
   
    <section
      className="cta-bg overlay bg_cover pt-150 pb-150"
      style={{ backgroundImage: "url(assets/images/about/about-5.jpg)" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
          
            <div className="cta-content-box text-center text-white wow fadeInUp">
              <h2 className="mb-35">
              Do not miss out on the expo!
              </h2>
              <Link legacyBehavior href="/about">
                <a className="main-btn secondary-btn">
                  Check Availability
                  <i className="far fa-paper-plane" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
   
    
    <section className="partners-section black-dark-bg" style={{ marginBottom: '-180px', color: 'lightgreen' }}>
      <div className="container">
        {/*=== Partners Slider ===*/}
        <Slider
          {...partnerSliderOne}
          className="partner-slider-one pt-80 pb-50 wow fadeInUp"
        >
          {/*=== Partner Item ===*/}
          <div className="single-partner-item">
            <div className="partner-img">
              <a href="#">
                {/* <img
                  src="assets/images/partner/partner-6.png"
                  alt="Partner Image"
                /> */}
                <h2>Sponsor 1</h2>
              </a>
            </div>
          </div>
          {/*=== Partner Item ===*/}
          <div className="single-partner-item">
            <div className="partner-img">
              <a href="#">
                {/* <img
                  src="assets/images/partner/partner-7.png"
                  alt="Partner Image"
                /> */}
                <h2>sponsor 2</h2>
              </a>
            </div>
          </div>
          {/*=== Partner Item ===*/}
          <div className="single-partner-item">
            <div className="partner-img">
              <a href="#">
                {/* <img
                  src="assets/images/partner/partner-8.png"
                  alt="Partner Image"
                /> */}
                <h2>sponsor 3</h2>
              </a>
            </div>
          </div>
          {/*=== Partner Item ===*/}
          <div className="single-partner-item">
            <div className="partner-img">
              <a href="#">
                {/* <img
                  src="assets/images/partner/partner-9.png"
                  alt="Partner Image"
                /> */}
                <h2>sponsor 4</h2>
              </a>
            </div>
          </div>
          {/*=== Partner Item ===*/}
          <div className="single-partner-item">
            <div className="partner-img">
              <a href="#">
                {/* <img
                  src="assets/images/partner/partner-10.png"
                  alt="Partner Image"
                /> */}
                 <h2>sponsor 5</h2>
              </a>
            </div>
          </div>
          {/*=== Partner Item ===*/}
          <div className="single-partner-item">
            <div className="partner-img">
              <a href="#">
                {/* <img
                  src="assets/images/partner/partner-7.png"
                  alt="Partner Image"
                /> */}
                 <h2>sponsor 6</h2>
              </a>
            </div>
          </div>
        </Slider>
      </div>
    </section>
    {/* ====== End Blog Section ======
    ====== Start Gallery Section ======
    <GallerySection />
    /*====== End Gallery Section ====== */}
  </Layout>
  
  );
};
export default Index;