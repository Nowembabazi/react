import GallerySection from "@/src/components/GallerySection";
import RelatedTours from "@/src/components/sliders/RelatedTours";
import Layout from "@/src/layout/Layout";
import { placeSlider,
       partnerSliderOne,
      } from "@/src/sliderProps";
import Link from "next/link";
import PageBanner from "@/src/components/PageBanner";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
const TourDetails = () => {
  return (
    <Layout extraClass={"pt-160"}>
      {/*====== Start Place Details Section ======*/}
      <section className="place-details-section">
        {/*=== Place Slider ===*/}
        <PageBanner pageTitle={"About Us"} />
        
        <div className="container">
          {/*=== Tour Details Wrapper ===*/}
          <div className="tour-details-wrapper pt-80">
            {/*=== Tour Title Wrapper ===*/}
            <div className="tour-title-wrapper pb-30 wow fadeInUp">
              <div className="row">
                <div className="col-xl-6">
                  <div className="tour-title mb-20">
                    <h3 className="title">About the Expo</h3>
                    <p>
                      <i className="far fa-map-marker-alt" />
                      Kampala, Uganda
                    </p>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="tour-widget-info">
                   
                    <div className="info-box mb-20">
                      <div className="icon">
                        <i className="fal fa-clock" />
                      </div>
                      <div className="info">
                        <h4>
                          <span>Durations</span>3 Days
                        </h4>
                      </div>
                    </div>
                    <div className="info-box mb-20">
                      <div className="icon">
                        <i className="fal fa-planet-ringed" />
                      </div>
                      <div className="info">
                        <h4>
                          <span>Tour Type</span>City Tour
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=== Tour Area Nav ===*/}
            <div className="tour-area-nav pt-20 pb-20 wow fadeInUp">
              <div className="row align-items-center">
                <div className="col-md-4">
                  <div className="ratings-box">
                    <ul className="ratings">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <a href="#">(3k Riviews)</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="share-nav">
                    <a href="#">
                      Share
                      <i className="far fa-share" />
                    </a>
                    <a href="#">
                      Reviews
                      <i className="far fa-share" />
                    </a>
                    <a href="#">
                      Whislist
                      <i className="far fa-heart" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-8">
                {/*=== Place Content Wrap ===*/}
                <div className="place-content-wrap pt-45 wow fadeInUp">
                  <h3 className="title">Explore The Expo.</h3>
                  <p>
                  Utalii Africa Tourism Expo™ (UATE), is Africa’s biggest Expo that brings together all the 54 African countries and the global tourism stakeholders to showcase their tourism products and services and close business deals. Never before has the continent of Africa experienced such a big event where tourism professionals, entrepreneurs, academia, artists, among others, meet to close businesses and chart a way forward for tourism in Africa.
UATE 2024 inaugural event will take place on Thursday 27th, Friday 28th & Saturday 29th June 2024 at Kololo Independence Grounds. Kampala, Uganda!
                  </p>
                  <h4>Advance Facilities</h4>
                  <p>
                    Neque porro quisquam est dolorem ipsum quia dolor si amet
                    consectetur adipisci velit sed quian numquam eius tempora
                    incidunt labore dolore magnam aliquam quaerat voluptatem.
                  </p>
                  <div className="row align-items-lg-center">
                    <div className="col-lg-5">
                      <ul className="check-list">
                        <li>
                          <i className="fas fa-badge-check" />
                         Lorem ipsum dolor sit amet
                          
                        </li>
                        <li>
                          <i className="fas fa-badge-check" />
                          Lorem ipsum dolor sit amet
                         
                        </li>
                        <li>
                          <i className="fas fa-badge-check" />
                          Lorem ipsum dolor sit amet
                         
                        </li>
                        <li>
                          <i className="fas fa-badge-check" />
                          lorem 
                        </li>
                        <li>
                          <i className="fas fa-badge-check" />
                         Lorem ipsum dolor sit amet
                        </li>
                        <li>
                          <i className="fas fa-badge-check" />
                          Lorem ipsum dolor sit amet
                        
                        </li>
                        <li>
                         
                          <i className="fas fa-badge-check" />
                         Lorem ipsum dolor sit amet

                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-7">
                      <img
                        src="assets/images/place/single-place-4.jpg"
                        className="mb-20 w-100"
                        alt="place image"
                      />
                    </div>
                  </div>
                 
                  <h4>
                  Lorem ipsum dolor sit amet

                  </h4>
                  <p>
                    Quis autem vel eum iure reprehenderit qui in ea voluptate
                    velit esse quam nihil molestiae consequatur vel eillum qui
                    dolorem eum fugiat quo voluptas nulla pariatur
                  </p>
                </div>
                {/*=== Days Area ===*/}
                <Tab.Container defaultActiveKey={"day1"}>
                  <div className="days-area mb-55 wow fadeInUp">
                    <Nav as={"ul"} className="nav nav-tabs mb-35">
                      <Nav.Item as={"li"} className="nav-item">
                        <Nav.Link
                          as="button"
                          className="nav-link"
                          eventKey="day1"
                        >
                          Day 1st
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as={"li"} className="nav-item">
                        <Nav.Link
                          as="button"
                          className="nav-link"
                          eventKey="day2"
                        >
                          Day 2nd
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as={"li"} className="nav-item">
                        <Nav.Link
                          as="button"
                          className="nav-link"
                          eventKey="day3"
                        >
                          Day 3rd
                        </Nav.Link>
                      </Nav.Item>
                      
                    </Nav>
                    <Tab.Content className="tab-content">
                      <Tab.Pane className="tab-pane fade" eventKey="day1">
                        <div className="content-box">
                          <p>
                            Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit sed quia consequuntur
                            magne doloreseos qui ratione voluptatem sequi
                            nesciunt. Neque porro quisquam est, qui dolorem
                            ipsum quia dolor si amet consectetur adipisci velit
                            sed quian numquam eius modi tempora incidunt
                          </p>
                          <ul className="check-list">
                            <li>
                              <i className="fas fa-badge-check" />
                              Lorem ipsum dolor sit amet
                            
                            </li>
                            <li>
                              <i className="fas fa-badge-check" />
                              Lorem ipsum dolor sit amet
                               
                            </li>
                            <li>
                              <i className="fas fa-badge-check" />
                                Lorem ipsum dolor sit amet
                              
                            </li>
                          </ul>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane className="tab-pane fade" eventKey="day2">
                        <div className="content-box">
                          <p>
                            Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit sed quia consequuntur
                            magne doloreseos qui ratione voluptatem sequi
                            nesciunt. Neque porro quisquam est, qui dolorem
                            ipsum quia dolor si amet consectetur adipisci velit
                            sed quian numquam eius modi tempora incidunt
                          </p>
                          <ul className="check-list">
                            <li>
                              <i className="fas fa-badge-check" />
                         Lorem ipsum dolor sit amet
                               
                            </li>
                            <li>
                              <i className="fas fa-badge-check" />
                         Lorem ipsum dolor sit amet
                              
                            </li>
                            <li>
                              <i className="fas fa-badge-check" />
                         Lorem ipsum dolor sit amet
                              
                            </li>
                          </ul>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane className="tab-pane fade" eventKey="day3">
                        <div className="content-box">
                          <p>
                            Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit sed quia consequuntur
                            magne doloreseos qui ratione voluptatem sequi
                            nesciunt. Neque porro quisquam est, qui dolorem
                            ipsum quia dolor si amet consectetur adipisci velit
                            sed quian numquam eius modi tempora incidunt
                          </p>
                          <ul className="check-list">
                            <li>
                              <i className="fas fa-badge-check" />
                         Lorem ipsum dolor sit amet
                               
                            </li>
                            <li>
                              <i className="fas fa-badge-check" />
                         Lorem ipsum dolor sit amet
                               
                            </li>
                            <li>
                              <i className="fas fa-badge-check" />
                         Lorem ipsum dolor sit amet
                            
                            </li>
                          </ul>
                        </div>
                      </Tab.Pane>
                      
                    </Tab.Content>
                  </div>
                </Tab.Container>
                {/*=== Map Box ===*/}
                {/* <div className="map-box mb-60 wow fadeInUp">
                  <iframe src="https://maps.google.com/maps?q=new%20york&t=&z=13&ie=UTF8&iwloc=&output=embed" />
                </div> */}
                {/*=== Calendar Box ===*/}
                {/* <div className="calendar-wrapper wow fadeInUp">
                  <div className="calendar-container mb-45" />
                </div> */}
                {/*=== Releted Tour Place ===*/}
                {/* <RelatedTours /> */}
                {/*=== Reviews Area ===*/}
                {/* <div className="reviews-wrapper mb-60 wow fadeInUp">
                  <div className="reviews-inner-box">
                    <div className="rating-value">
                      <h4>Clients Reviews</h4>
                      <div className="rate-score">4.9</div>
                      <ul className="ratings">
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <a href="#">(4.9)</a>
                        </li>
                      </ul>
                      <span className="reviews">3k Reviews</span>
                    </div>
                    <div className="reviews-progress">
                      <div className="single-progress-bar">
                        <div className="progress-title">
                          <h6>
                            Quality <span className="rate">4.8</span>
                          </h6>
                        </div>
                        <div className="progress">
                          <div
                            className="progress-bar wow slideInLeft"
                            style={{ width: "85%" }}
                          />
                        </div>
                      </div>
                      <div className="single-progress-bar">
                        <div className="progress-title">
                          <h6>
                            Team Member<span className="rate">4.6</span>
                          </h6>
                        </div>
                        <div className="progress">
                          <div
                            className="progress-bar wow slideInLeft"
                            style={{ width: "75%" }}
                          />
                        </div>
                      </div>
                      <div className="single-progress-bar">
                        <div className="progress-title">
                          <h6>
                            Locations<span className="rate">4.7</span>
                          </h6>
                        </div>
                        <div className="progress">
                          <div
                            className="progress-bar wow slideInLeft"
                            style={{ width: "90%" }}
                          />
                        </div>
                      </div>
                      <div className="single-progress-bar">
                        <div className="progress-title">
                          <h6>
                            Cost<span className="rate">4.9</span>
                          </h6>
                        </div>
                        <div className="progress">
                          <div
                            className="progress-bar wow slideInLeft"
                            style={{ width: "95%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/*=== Comments Area ===*/}
                {/* <div className="comments-area wow fadeInUp">
                  <ul className="comment-list">
                    <li>
                      <div className="comment">
                        <div className="comment-avatar">
                          <img
                            src="assets/images/place/comment-1.jpg"
                            alt="comment author"
                          />
                        </div>
                        <div className="comment-wrap">
                          <div className="comment-author-content">
                            <span className="author-name">
                              Glenn M. Whitaker
                              <span className="time">
                                <i className="far fa-clock" />5 Minute Ago
                              </span>
                            </span>
                            <span className="position">CEO &amp; Founder</span>
                            <ul className="comment-rating-ul">
                              <li>
                                <span className="title">Quality</span>
                                <span>
                                  <i className="fas fa-star" />
                                </span>
                                <span>
                                  <i className="fas fa-star" />
                                </span>
                                <span>
                                  <i className="fas fa-star" />
                                </span>
                                <span>
                                  <i className="fas fa-star" />
                                </span>
                                <span>
                                  <i className="fas fa-star" />
                                </span>
                              </li>
                              <li>
                                <span className="title">Location</span>
                                <span>
                                  <i className="fas fa-star" />
                                </span>
                                <span>
                                  <i className="fas fa-star" />
                                </span>
                                <span>
                                  <i className="fas fa-star" />
                                </span>
                                <span>
                                  <i className="fas fa-star" />
                                </span>
                                <span>
                                  <i className="fas fa-star" />
                                </span>
                              </li>
                              <li>
                                <span className="title">Services</span>
                                <span>
                                  <i className="fas fa-star" />
                                </span>
                                <span>
                                  <i className="fas fa-star" />
                                </span>
                                <span>
                                  <i className="fas fa-star" />
                                </span>
                                <span>
                                  <i className="fas fa-star" />
                                </span>
                                <span>
                                  <i className="fas fa-star" />
                                </span>
                              </li>
                              <li>
                                <span className="title">Team</span>
                                <span>
                                  <i className="fas fa-star" />
                                </span>
                                <span>
                                  <i className="fas fa-star" />
                                </span>
                                <span>
                                  <i className="fas fa-star" />
                                </span>
                                <span>
                                  <i className="fas fa-star" />
                                </span>
                                <span>
                                  <i className="fas fa-star" />
                                </span>
                              </li>
                              <li>
                                <span className="title">Price</span>
                                <span>
                                  <i className="fas fa-star" />
                                </span>
                                <span>
                                  <i className="fas fa-star" />
                                </span>
                                <span>
                                  <i className="fas fa-star" />
                                </span>
                                <span>
                                  <i className="fas fa-star" />
                                </span>
                                <span>
                                  <i className="fas fa-star" />
                                </span>
                              </li>
                            </ul>
                            <p>
                              At vero eos et accusamus et iusto odio dignissimos
                              ducimus qui blanditiis praesentium voluptatum
                              deleniti atque corrupti quos dolores et quas
                              molestias excepture
                            </p>
                            <a href="#" className="btn-link">
                              Reply
                              <i className="far fa-angle-double-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <ul className="comment-reply">
                        <li>
                          <div className="comment">
                            <div className="comment-avatar">
                              <img
                                src="assets/images/place/comment-2.jpg"
                                alt="comment author"
                              />
                            </div>
                            <div className="comment-wrap">
                              <div className="comment-author-content">
                                <span className="author-name">
                                  Glenn M. Whitaker
                                  <span className="time">
                                    <i className="far fa-clock" />5 Minute Ago
                                  </span>
                                </span>
                                <span className="position">
                                  CEO &amp; Founder
                                </span>
                                <ul className="comment-rating-ul">
                                  <li>
                                    <span className="title">Quality</span>
                                    <span>
                                      <i className="fas fa-star" />
                                    </span>
                                    <span>
                                      <i className="fas fa-star" />
                                    </span>
                                    <span>
                                      <i className="fas fa-star" />
                                    </span>
                                    <span>
                                      <i className="fas fa-star" />
                                    </span>
                                    <span>
                                      <i className="fas fa-star" />
                                    </span>
                                  </li>
                                  <li>
                                    <span className="title">Location</span>
                                    <span>
                                      <i className="fas fa-star" />
                                    </span>
                                    <span>
                                      <i className="fas fa-star" />
                                    </span>
                                    <span>
                                      <i className="fas fa-star" />
                                    </span>
                                    <span>
                                      <i className="fas fa-star" />
                                    </span>
                                    <span>
                                      <i className="fas fa-star" />
                                    </span>
                                  </li>
                                  <li>
                                    <span className="title">Services</span>
                                    <span>
                                      <i className="fas fa-star" />
                                    </span>
                                    <span>
                                      <i className="fas fa-star" />
                                    </span>
                                    <span>
                                      <i className="fas fa-star" />
                                    </span>
                                    <span>
                                      <i className="fas fa-star" />
                                    </span>
                                    <span>
                                      <i className="fas fa-star" />
                                    </span>
                                  </li>
                                  <li>
                                    <span className="title">Team</span>
                                    <span>
                                      <i className="fas fa-star" />
                                    </span>
                                    <span>
                                      <i className="fas fa-star" />
                                    </span>
                                    <span>
                                      <i className="fas fa-star" />
                                    </span>
                                    <span>
                                      <i className="fas fa-star" />
                                    </span>
                                    <span>
                                      <i className="fas fa-star" />
                                    </span>
                                  </li>
                                  <li>
                                    <span className="title">Price</span>
                                    <span>
                                      <i className="fas fa-star" />
                                    </span>
                                    <span>
                                      <i className="fas fa-star" />
                                    </span>
                                    <span>
                                      <i className="fas fa-star" />
                                    </span>
                                    <span>
                                      <i className="fas fa-star" />
                                    </span>
                                    <span>
                                      <i className="fas fa-star" />
                                    </span>
                                  </li>
                                </ul>
                                <p>
                                  At vero eos et accusamus et iusto odio
                                  dignissimos ducimus qui blanditiis praesentium
                                  voluptatum deleniti atque corrupti quos
                                  dolores et quas molestias excepture
                                </p>
                                <a href="#" className="btn-link">
                                  Reply
                                  <i className="far fa-angle-double-right" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div className="comment">
                        <div className="comment-avatar">
                          <img
                            src="assets/images/place/comment-3.jpg"
                            alt="comment author"
                          />
                        </div>
                        <div className="comment-wrap">
                          <div className="comment-author-content">
                            <span className="author-name">
                              Glenn M. Whitaker
                              <span className="time">
                                <i className="far fa-clock" />5 Minute Ago
                              </span>
                            </span>
                            <span className="position">CEO &amp; Founder</span>
                            <ul className="comment-rating-ul">
                              <li>
                                <span className="title">Quality</span>
                                <span>
                                  <i className="fas fa-star" />
                                </span>
                                <span>
                                  <i className="fas fa-star" />
                                </span>
                                <span>
                                  <i className="fas fa-star" />
                                </span>
                                <span>
                                  <i className="fas fa-star" />
                                </span>
                                <span>
                                  <i className="fas fa-star" />
                                </span>
                              </li>
                              <li>
                                <span className="title">Location</span>
                                <span>
                                  <i className="fas fa-star" />
                                </span>
                                <span>
                                  <i className="fas fa-star" />
                                </span>
                                <span>
                                  <i className="fas fa-star" />
                                </span>
                                <span>
                                  <i className="fas fa-star" />
                                </span>
                                <span>
                                  <i className="fas fa-star" />
                                </span>
                              </li>
                              <li>
                                <span className="title">Services</span>
                                <span>
                                  <i className="fas fa-star" />
                                </span>
                                <span>
                                  <i className="fas fa-star" />
                                </span>
                                <span>
                                  <i className="fas fa-star" />
                                </span>
                                <span>
                                  <i className="fas fa-star" />
                                </span>
                                <span>
                                  <i className="fas fa-star" />
                                </span>
                              </li>
                              <li>
                                <span className="title">Team</span>
                                <span>
                                  <i className="fas fa-star" />
                                </span>
                                <span>
                                  <i className="fas fa-star" />
                                </span>
                                <span>
                                  <i className="fas fa-star" />
                                </span>
                                <span>
                                  <i className="fas fa-star" />
                                </span>
                                <span>
                                  <i className="fas fa-star" />
                                </span>
                              </li>
                              <li>
                                <span className="title">Price</span>
                                <span>
                                  <i className="fas fa-star" />
                                </span>
                                <span>
                                  <i className="fas fa-star" />
                                </span>
                                <span>
                                  <i className="fas fa-star" />
                                </span>
                                <span>
                                  <i className="fas fa-star" />
                                </span>
                                <span>
                                  <i className="fas fa-star" />
                                </span>
                              </li>
                            </ul>
                            <p>
                              At vero eos et accusamus et iusto odio dignissimos
                              ducimus qui blanditiis praesentium voluptatum
                              deleniti atque corrupti quos dolores et quas
                              molestias excepture
                            </p>
                            <a href="#" className="btn-link">
                              Reply
                              <i className="far fa-angle-double-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div> */}
                {/*===  Comments Form  ===*/}
                <div className="comments-respond mb-30 wow fadeInUp">
                  <h3 className="comments-heading" style={{ marginBottom: 15 }}>
                    Leave a Comments
                  </h3>
                  <ul className="comment-rating-ul mb-20">
                    <li>
                      <span className="title">Quality</span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                    </li>
                    <li>
                      <span className="title">Location</span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                    </li>
                    <li>
                      <span className="title">Services</span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                    </li>
                    <li>
                      <span className="title">Team</span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                    </li>
                    <li>
                      <span className="title">Price</span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                      <span>
                        <i className="fas fa-star" />
                      </span>
                    </li>
                  </ul>
                  
                </div>
              </div>
              <div className="col-xl-4">
                {/*=== Sidebar Widget Area ===*/}
                <div className="sidebar-widget-area pt-60 pl-lg-30">
                  {/*=== Booking Widget ===*/}
                  <div className="sidebar-widget booking-form-widget wow fadeInUp mb-40">
                    <h4 className="widget-title">Booking a stoll</h4>
                    <form
                      onSubmit={(e) => e.preventDefault()}
                      className="sidebar-booking-form"
                    >
                      <div className="booking-date-time mb-20">
                        <div className="booking-item">
                          <label>Date</label>
                          <div className="bk-item booking-time">
                            <i className="far fa-calendar-alt" />
                            <input
                              type="text"
                              placeholder="Select Date"
                              className="datepicker"
                            />
                          </div>
                        </div>
                        <div className="booking-item">
                          <label>Time</label>
                          <div className="bk-item booking-date">
                            <i className="far fa-calendar-alt" />
                            <select className="wide">
                              <option value={1}>12.00 Am</option>
                              <option value={1}>01.00 Am</option>
                              <option value={1}>02.00 Am</option>
                              <option value={1}>03.00 Am</option>
                              <option value={1}>04.00 Am</option>
                              <option value={1}>05.00 Am</option>
                              <option value={1}>06.00 Am</option>
                              <option value={1}>07.00 Am</option>
                              <option value={1}>08.00 Am</option>
                              <option value={1}>09.00 Am</option>
                              <option value={1}>10.00 Am</option>
                              <option value={1}>11.00 Am</option>
                              <option value={1}>12.00 Pm</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="booking-guest-box mb-20">
                        <h6 className="mb-20">Rates for stolls</h6>
                        <div className="booking-item">
                          <label>Nationals $43</label>
                          <div className="bk-item booking-user">
                            <i className="far fa-user" />
                            <select className="wide">
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                            </select>
                          </div>
                        </div>
                        <div className="booking-item">
                          <label>Foreign Traders $29</label>
                          <div className="bk-item booking-user">
                            <i className="far fa-user" />
                            <select className="wide">
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                            </select>
                          </div>
                        </div>
                       
                      </div>
                      <div className="booking-extra mb-15 wow fadeInUp">
                        <h6 className="mb-10">Aditional Services</h6>
                        <div className="extra">
                          <i className="fas fa-check-circle" />
                          Service Per Boooking{" "}
                          <span>
                            <span className="currency">$</span>50
                          </span>
                        </div>
                        <div className="extra">
                          <i className="fas fa-check-circle" />
                          Service Per Person{" "}
                          <span>
                            <span className="currency">$</span>20
                          </span>
                        </div>
                      </div>
                      <div className="booking-total mb-20">
                        <div className="total">
                          <label>Total</label>
                          <span className="price">
                            <span className="currency">$</span>70
                          </span>
                        </div>
                      </div>
                      <div className="submit-button">
                        <button className="main-btn primary-btn">
                          Booking Now
                          <i className="far fa-paper-plane" />
                        </button>
                      </div>
                    </form>
                  </div>
                  {/*=== Booking Info Widget ===*/}
                  <div className="sidebar-widget booking-info-widget wow fadeInUp mb-40">
                    <h4 className="widget-title">Tour Information</h4>
                    <ul className="info-list">
                      <li>
                        <span>
                          <i className="far fa-user-circle" />
                          Max Guests<span>35</span>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-user-circle" />
                          Minimum Age<span>12+</span>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-map-marker-alt" />
                          Tour Location<span>Thailand</span>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-globe" />
                          Language<span>English</span>
                        </span>
                      </li>
                    </ul>
                  </div>
                  {/*=== Recent Place Widget ===*/}
                  {/* <div className="sidebar-widget recent-place-widget mb-40 wow fadeInUp">
                    <h4 className="widget-title">Last Minute Deals</h4>
                    <ul className="recent-place-list">
                      <li className="place-thumbnail-content">
                        <img
                          src="assets/images/place/thumb-1.jpg"
                          alt="post thumb"
                        />
                        <div className="place-content">
                          <ul className="ratings">
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="far fa-star" />
                            </li>
                          </ul>
                          <h5>
                            <Link legacyBehavior href="/tour-details">
                              <a>Infinity Pool Nears Beach</a>
                            </Link>
                          </h5>
                          <span className="price">
                            <span className="text">From :</span>
                            <span className="currency">$</span>45.23
                          </span>
                        </div>
                      </li>
                      <li className="place-thumbnail-content">
                        <img
                          src="assets/images/place/thumb-2.jpg"
                          alt="post thumb"
                        />
                        <div className="place-content">
                          <ul className="ratings">
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star-half-alt" />
                            </li>
                          </ul>
                          <h5>
                            <Link legacyBehavior href="/tour-details">
                              <a>Infinity Pool Nears Beach</a>
                            </Link>
                          </h5>
                          <span className="price">
                            <span className="text">From :</span>
                            <span className="currency">$</span>45.23
                          </span>
                        </div>
                      </li>
                      <li className="place-thumbnail-content">
                        <img
                          src="assets/images/place/thumb-3.jpg"
                          alt="post thumb"
                        />
                        <div className="place-content">
                          <ul className="ratings">
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                            <li>
                              <i className="fas fa-star" />
                            </li>
                          </ul>
                          <h5>
                            <Link legacyBehavior href="/tour-details">
                              <a>Infinity Pool Nears Beach</a>
                            </Link>
                          </h5>
                          <span className="price">
                            <span className="text">From :</span>
                            <span className="currency">$</span>45.23
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div> */}
                  {/*=== Banner Widget ===*/}
                  {/* <div className="sidebar-widget sidebar-banner-widget wow fadeInUp mb-40">
                    <div className="banner-widget-content">
                      <div className="banner-img">
                        <img
                          src="assets/images/blog/banner-1.jpg"
                          alt="Post Banner"
                        />
                        <div className="hover-overlay">
                          <div className="hover-content">
                            <h4 className="title">
                              <a href="#">Swimming Pool</a>
                            </h4>
                            <p>
                              <i className="fas fa-map-marker-alt" />
                              Marrakesh, Morocco
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Place Details Section ======*/}
      {/*====== Start Gallery Section ======*/}
      {/* <GallerySection /> */}
      {/*====== End Gallery Section ======*/}
    </Layout>
  );
};
export default TourDetails;
