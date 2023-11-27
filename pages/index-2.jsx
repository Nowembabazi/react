import GallerySection from "@/src/components/GallerySection";
import Layout from "@/src/layout/Layout";
import Home3Slider from "@/src/components/sliders/Home3";
import CounterTimer from "@/src/components/CounterTimer"; // Add your CSS file here
import {
  home2Slider,
  partnerSliderOne,
  sliderActive3Item,
  sliderActive4Item,
} from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import Slider from "react-slick";
const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});
const Index = () => {
  return (
  
    <Layout  extraClass={"pt-160"}>
      {/*====== Start Hero Section ======*/}
      <section className="partners-section black-dark-bg">
        <div className="cont">
        <img
                  src="assets/images/about/about-4.jpg"
                  alt="About image"
                  style={{
                    width: '100%', // Set the desired width
                    height: '300px', // To maintain aspect ratio
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
        {/* <div className="container-fluid">
          <div className="booking-form-wrapper">
            <form className="booking-form-two">
              <div className="form_group">
                <span>Check In</span>
                <label>
                  <i className="far fa-calendar-alt" />
                </label>
                <input
                  type="text"
                  className="form_control datepicker"
                  placeholder="Check In"
                />
              </div>
              <div className="form_group">
                <span>Check Out</span>
                <label>
                  <i className="far fa-calendar-alt" />
                </label>
                <input
                  type="text"
                  className="form_control datepicker"
                  placeholder="Check Out"
                />
              </div>
              <div className="form_group">
                <span>Guest</span>
                <label>
                  <i className="far fa-user-alt" />
                </label>
                <input
                  type="text"
                  className="form_control"
                  placeholder="Guest"
                  name="text"
                />
              </div>
              <div className="form_group">
                <span>Accommodations</span>
                <select className="wide">
                  <option data-display="Accommodations">Accommodations</option>
                  <option value={1}>Classic Tent</option>
                  <option value={1}>Forest Camping</option>
                  <option value={1}>Small Trailer</option>
                  <option value={1}>Tree House Tent</option>
                  <option value={1}>Tent Camping</option>
                  <option value={1}>Couple Tent</option>
                </select>
              </div>
              <div className="form_group">
                <button className="booking-btn">
                  Check Availability <i className="far fa-angle-double-right" />
                </button>
              </div>
            </form>
          </div>
        </div> */}
      </section>
    
     
    
      <section className="about-section pt-100 pb-50 mt-4">
        <div className="container">
          
        <span className="sub-title" style={{ marginLeft: '0px', marginRight: '0px', fontSize: '60px' }}>The Expo</span>
        <hr/>
        <h3 style={{ marginLeft: '20px', marginRight: '20px', fontWeight: 'lighter', fontSize: '26px' }}>Utalii Africa Tourism Expo (UATE) is an unprecedented event that seeks to redefine Africa's tourism journey. Taking place over the course of three days in June 2024 in the Ugandan capital, Kampala, the event will bring together key industry players from all over the continent for crucial conversations about the future. <br/>
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
          </div>
        </div>
      </section>
      {/* <section className="partners-section black-dark-bg">
        <div className="cont">
        <img
                  src="assets/images/about/about-3.jpg"
                  alt="About image"
                  style={{
                    width: '120%', // Set the desired width
                    height: 'auto', // To maintain aspect ratio
                    borderRadius: '10px',
                    marginLeft: '-4px',
                    marginRight: '84px'// Set the curved border radius
                  }}
                />
        </div>
      </section> */}
      <section className="services-section black-bg pt-100 pb-100">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-7">
            
              <div className="section-title text-center text-white mb-50 wow fadeInDown">
                <span className="sub-title">Exibitors</span>
                <h2>Daily Events as they happen.</h2>
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
                  Sit amet consectetur integer tincidunt nodalesry volutpat
                  neque ferme malesua da sceleris quecy massa lacus
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
                  Sit amet consectetur integer tincidunt nodalesry volutpat
                  neque ferme malesua da sceleris quecy massa lacus
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
                  Sit amet consectetur integer tincidunt nodalesry volutpat
                  neque ferme malesua da sceleris quecy massa lacus
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
                  Sit amet consectetur integer tincidunt nodalesry volutpat
                  neque ferme malesua da sceleris quecy massa lacus
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
                  Sit amet consectetur integer tincidunt nodalesry volutpat
                  neque ferme malesua da sceleris quecy massa lacus
                </p>
                <a href="#" className="btn-link">
                  Read More <i className="far fa-long-arrow-right" />
                </a>
              </div>
            </div>
          </Slider>
        </div>
      </section>
   
      <section className="team-section pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7">
           
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">Team Member</span>
                <h2>A word from the keynote speakers</h2>
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
                  <h4 className="title">Mr Nickson</h4>
                  <p className="position">Tech &amp; </p>
                  <p>
                  Sit amet consectetur integer tincidunt nodalesry volutpat
                  neque ferme malesua da sceleris quecy massa lacus
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
                  <h4 className="title">Mr Henry Mugabe</h4>
                  <p className="position">CEO</p>
                  <p>
                  Sit amet consectetur integer tincidunt nodalesry volutpat
                  neque ferme malesua da sceleris quecy massa lacus
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
                  Sit amet consectetur integer tincidunt nodalesry volutpat
                  neque ferme malesua da sceleris quecy massa lacus
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
     
      {/* <section className="activity-section pb-60">
        <div className="container-fluid">
         
          <Slider
            {...sliderActive3Item}
            className="slider-active-3-item wow fadeInUp"
          >
            
            <div className="single-activity-item mb-40">
              <div className="img-holder">
                <img src="assets/images/gallery/act-1.jpg" alt="Image" />
              </div>
              <div className="content">
                <div className="meta">
                  <ul>
                    <li>
                      <span className="icon">
                        <i className="flaticon-blanket" />
                      </span>
                    </li>
                    <li>
                      <span className="icon">
                        <i className="flaticon-cat" />
                      </span>
                    </li>
                    <li>
                      <span className="icon">
                        <i className="flaticon-tent" />
                      </span>
                    </li>
                    <li>
                      <span className="icon">
                        <i className="flaticon-fire" />
                      </span>
                    </li>
                  </ul>
                  <div className="rate">
                    <i className="fas fa-star" />
                    4.9
                  </div>
                </div>
                <h3 className="title">Classic Tents</h3>
                <p>
                  Quis autem veleum reprehenderit voluptate velit esse quame
                  nihile molestiae consequatur veillum dolorem eumy
                </p>
                <a href="#" className="main-btn filled-btn">
                  Check Now
                  <i className="fas fa-paper-plane" />
                </a>
              </div>
            </div>
          
            <div className="single-activity-item mb-40">
              <div className="img-holder">
                <img src="assets/images/gallery/act-2.jpg" alt="Image" />
              </div>
              <div className="content">
                <div className="meta">
                  <ul>
                    <li>
                      <span className="icon">
                        <i className="flaticon-blanket" />
                      </span>
                    </li>
                    <li>
                      <span className="icon">
                        <i className="flaticon-cat" />
                      </span>
                    </li>
                    <li>
                      <span className="icon">
                        <i className="flaticon-tent" />
                      </span>
                    </li>
                    <li>
                      <span className="icon">
                        <i className="flaticon-fire" />
                      </span>
                    </li>
                  </ul>
                  <div className="rate">
                    <i className="fas fa-star" />
                    4.9
                  </div>
                </div>
                <h3 className="title">Small Cabin Wood</h3>
                <p>
                  Quis autem veleum reprehenderit voluptate velit esse quame
                  nihile molestiae consequatur veillum dolorem eumy
                </p>
                <a href="#" className="main-btn filled-btn">
                  Check Now
                  <i className="fas fa-paper-plane" />
                </a>
              </div>
            </div>
           
            <div className="single-activity-item mb-40">
              <div className="img-holder">
                <img src="assets/images/gallery/act-3.jpg" alt="Image" />
              </div>
              <div className="content">
                <div className="meta">
                  <ul>
                    <li>
                      <span className="icon">
                        <i className="flaticon-blanket" />
                      </span>
                    </li>
                    <li>
                      <span className="icon">
                        <i className="flaticon-cat" />
                      </span>
                    </li>
                    <li>
                      <span className="icon">
                        <i className="flaticon-tent" />
                      </span>
                    </li>
                    <li>
                      <span className="icon">
                        <i className="flaticon-fire" />
                      </span>
                    </li>
                  </ul>
                  <div className="rate">
                    <i className="fas fa-star" />
                    4.9
                  </div>
                </div>
                <h3 className="title">RV Caravan Trailer</h3>
                <p>
                  Quis autem veleum reprehenderit voluptate velit esse quame
                  nihile molestiae consequatur veillum dolorem eumy
                </p>
                <a href="#" className="main-btn filled-btn">
                  Check Now
                  <i className="fas fa-paper-plane" />
                </a>
              </div>
            </div>
          </Slider>
        </div>
      </section> */}
    
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
     
      <section className="blog-section pt-100 pb-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6">
            
              <div className="blog-content-box mb-40 wow fadeInLeft">
              
                <div className="section-title mb-30">
                  <span className="sub-title">News &amp; Blog</span>
                  <h2>
                  Utalii Africa Tourism Expo 
                  set to happen
                  in 2024
                  </h2>
                </div>
                <p className="mb-20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, erat sit amet
        eleifend scelerisque, purus turpis malesuada urna, et euismod justo quam nec justo.
        Suspendisse potenti.
                </p>
                <Link legacyBehavior href="/blog-list">
                  <a className="btn-link">
                    View More Details <i className="far fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-6">
             
              <div className="single-blog-post-two mb-40 wow fadeInUp">
                <div className="post-thumbnail">
                  <img src="assets/images/blog/blog-4.jpg" alt="Blog Image" />
                </div>
                <div className="entry-content">
                  <div className="post-meta">
                    <span>
                      <i className="far fa-calendar-alt" />
                      <a href="#">November 15, 2023</a>
                    </span>
                    <h3 className="title">
                      <Link legacyBehavior href="/blog-details">
                        <a>Welcome to The News Daily!</a>
                      </Link>
                    </h3>
                    <Link legacyBehavior href="/blog-details">
                      <a className="main-btn filled-btn">
                        Read More
                        <i className="far fa-paper-plane" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            
              <div className="single-blog-post-two mb-40 wow fadeInDown">
                <div className="post-thumbnail">
                  <img src="assets/images/blog/blog-5.jpg" alt="Blog Image" />
                </div>
                <div className="entry-content">
                  <div className="post-meta">
                    <span>
                      <i className="far fa-calendar-alt" />
                      <a href="#">November 4, 2023</a>
                    </span>
                    <h3 className="title">
                      <Link legacyBehavior href="/blog-details">
                        <a>Meet the brains behind the expo</a>
                      </Link>
                    </h3>
                    <Link legacyBehavior href="/blog-details">
                      <a className="main-btn filled-btn">
                        Read More
                        <i className="far fa-paper-plane" />
                      </a>
                    </Link>
                  </div>
                </div>
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
                  <img
                    src="assets/images/partner/partner-6.png"
                    alt="Partner Image"
                  />
                </a>
              </div>
            </div>
            {/*=== Partner Item ===*/}
            <div className="single-partner-item">
              <div className="partner-img">
                <a href="#">
                  <img
                    src="assets/images/partner/partner-7.png"
                    alt="Partner Image"
                  />
                </a>
              </div>
            </div>
            {/*=== Partner Item ===*/}
            <div className="single-partner-item">
              <div className="partner-img">
                <a href="#">
                  <img
                    src="assets/images/partner/partner-8.png"
                    alt="Partner Image"
                  />
                </a>
              </div>
            </div>
            {/*=== Partner Item ===*/}
            <div className="single-partner-item">
              <div className="partner-img">
                <a href="#">
                  <img
                    src="assets/images/partner/partner-9.png"
                    alt="Partner Image"
                  />
                </a>
              </div>
            </div>
            {/*=== Partner Item ===*/}
            <div className="single-partner-item">
              <div className="partner-img">
                <a href="#">
                  <img
                    src="assets/images/partner/partner-10.png"
                    alt="Partner Image"
                  />
                </a>
              </div>
            </div>
            {/*=== Partner Item ===*/}
            <div className="single-partner-item">
              <div className="partner-img">
                <a href="#">
                  <img
                    src="assets/images/partner/partner-7.png"
                    alt="Partner Image"
                  />
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
