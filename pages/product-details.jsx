import PageBanner from "@/src/components/PageBanner";
import ProductDetailsSlider from "@/src/components/sliders/ProductDetailsSlider";
import Layout from "@/src/layout/Layout";
import { sliderActive3Item, sliderActive5Item } from "@/src/sliderProps";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
const ProductDetails = () => {
  return (
    <Layout extraClass={"pt-160"}>
      <PageBanner pageTitle={""} />
      {/*====== Start Shop Details Section ======*/}
      <section className="shop-details-section pt-100 pb-50">
        <div className="container">
          <div className="product-details-wrapper">
            
            <div className="row">
              <div className="col-xl-8">
                <Tab.Container defaultActiveKey={"descrptions"}>
                  <div className="description-wrapper mt-30 wow fadeInUp">
                    <div className="description-tabs mb-10">
                      <Nav as={"ul"} className="nav">
                        <Nav.Item as={"li"} className="nav-item">
                          <Nav.Link
                            as={"a"}
                            className="nav-link"
                            href="#descrptions"
                            eventKey="descrptions"
                          >
                            Description
                          </Nav.Link>
                        </Nav.Item>
                        {/* <Nav.Item as={"li"} className="nav-item">
                          <Nav.Link
                            as={"a"}
                            className="nav-link"
                            href="#information"
                            eventKey="information"
                          >
                            Additional Information
                          </Nav.Link>
                        </Nav.Item> */}
                        
                      </Nav>
                    </div>
                    <Tab.Content className="tab-content wow fadeInUp">
                      <Tab.Pane
                        className="tab-pane fade"
                        eventKey="descrptions"
                      >
                        <div className="content-box">
                          <h5 style={{ fontWeight: 'lighter', fontSize: '21px'}}>
                          Utalii Africa Tourism Expo is a one-of-a kind event scheduled to take place in June 2024 in
the Ugandan capital, Kampala.
Africa’s mega inaugural expo will, over the course of three days, provide a unique platform
for African countries and global tourism stakeholders to showcase their products and
services, build crucial networks with other players in the market, learn from one another
and close lucrative business deals.
Participants will have the collective opportunity to harness Africa’s rich, authentic, cultural
and natural heritage and hold crucial conversations, with the goal of reigniting the tourism
business in Africa and promoting inter-Africa travel and trade.
        </h5>
                            
                          
                        </div>
                      </Tab.Pane>
                     
                     
                    </Tab.Content>
                    {/*=== Review Form ===*/}
                    <div className="review-form-area wow fadeInUp mt-50 mb-40">
                      <h3 className="title">Send Us Reviews</h3>
                      <p>
                        We have 3k+ 5star Reviews
                        <img src="assets/images/shop/rate.png" alt />
                      </p>
                      <form className="review-form">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="form_group">
                              <input
                                type="text"
                                className="form_control"
                                placeholder="Full Name"
                                name="name"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form_group">
                              <input
                                type="text"
                                className="form_control"
                                placeholder="Email Address"
                                name="email"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form_group">
                              <input
                                type="url"
                                className="form_control"
                                placeholder="Website"
                                name="website"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form_group">
                              <textarea
                                name="message"
                                className="form_control"
                                placeholder="Write Message"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form_group">
                              <button className="main-btn primary-btn">
                                Send Reviews
                                <i className="fas fa-paper-plane" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </Tab.Container>
              </div>
              <div className="col-xl-4">
                <div className="sidebar-widget-area pl-lg-45 mt-30">
                  {/*=== Banner Widget ===*/}
                  <div className="sidebar-widget widget-product-banner mb-40 wow fadeInUp">
                    <div className="banner-content text-center">
                      <h4 className="title">Apply Now</h4>
                      <img
                        src="assets/images/shop/mockup.png"
                        alt="Banner Image"
                      />
                      <Link legacyBehavior href="/contact">
                        <a className="main-btn secondary-btn">
                          Book Now
                          <i className="far fa-paper-plane" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Shop Details Section ======*/}
      {/*====== Start Recent Product Section ======*/}
      
      {/*====== End Recent Product Section ======*/}
      {/*====== Start Gallery Section ======*/}
      <section className="gallery-section mbm-150">
        <div className="container-fluid">
          <Slider
            {...sliderActive5Item}
            className="slider-active-5-item fadeInUp"
          >
            {/*=== Single Gallery Item ===*/}
            <div className="single-gallery-item">
              <div className="gallery-img">
                <img src="assets/images/gallery/gl-1.jpg" alt="Gallery Image" />
                <div className="hover-overlay">
                  <a
                    href="assets/images/gallery/gl-1.jpg"
                    className="icon-btn img-popup"
                  >
                    <i className="far fa-plus" />
                  </a>
                </div>
              </div>
            </div>
            {/*=== Single Gallery Item ===*/}
            <div className="single-gallery-item">
              <div className="gallery-img">
                <img src="assets/images/gallery/gl-2.jpg" alt="Gallery Image" />
                <div className="hover-overlay">
                  <a
                    href="assets/images/gallery/gl-2.jpg"
                    className="icon-btn img-popup"
                  >
                    <i className="far fa-plus" />
                  </a>
                </div>
              </div>
            </div>
            {/*=== Single Gallery Item ===*/}
            <div className="single-gallery-item">
              <div className="gallery-img">
                <img src="assets/images/gallery/gl-3.jpg" alt="Gallery Image" />
                <div className="hover-overlay">
                  <a
                    href="assets/images/gallery/gl-3.jpg"
                    className="icon-btn img-popup"
                  >
                    <i className="far fa-plus" />
                  </a>
                </div>
              </div>
            </div>
            {/*=== Single Gallery Item ===*/}
            <div className="single-gallery-item">
              <div className="gallery-img">
                <img src="assets/images/gallery/gl-4.jpg" alt="Gallery Image" />
                <div className="hover-overlay">
                  <a
                    href="assets/images/gallery/gl-4.jpg"
                    className="icon-btn img-popup"
                  >
                    <i className="far fa-plus" />
                  </a>
                </div>
              </div>
            </div>
            {/*=== Single Gallery Item ===*/}
            <div className="single-gallery-item">
              <div className="gallery-img">
                <img src="assets/images/gallery/gl-5.jpg" alt="Gallery Image" />
                <div className="hover-overlay">
                  <a
                    href="assets/images/gallery/gl-5.jpg"
                    className="icon-btn img-popup"
                  >
                    <i className="far fa-plus" />
                  </a>
                </div>
              </div>
            </div>
            {/*=== Single Gallery Item ===*/}
            <div className="single-gallery-item">
              <div className="gallery-img">
                <img src="assets/images/gallery/gl-3.jpg" alt="Gallery Image" />
                <div className="hover-overlay">
                  <a
                    href="assets/images/gallery/gl-3.jpg"
                    className="icon-btn img-popup"
                  >
                    <i className="far fa-plus" />
                  </a>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Gallery Section ======*/}
    </Layout>
  );
};
export default ProductDetails;
