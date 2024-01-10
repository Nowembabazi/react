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
                        {/* <Nav.Item as={"li"} className="nav-item">
                          <Nav.Link
                            as={"a"}
                            className="nav-link"
                            href="#reviews"
                            eventKey="reviews"
                          >
                            Reviews (2)
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
                        <p style={{ fontWeight: 'lighter', fontSize: '21px' }}>
                          The expo will attract buyers from all over the world, providing you with an unimaginable
                          market, right at your doorstep. At UATE, you will have the opportunity to explore industry
                          trends, establish leadership and credibility in your field, make on-the-spot sales and interact
                          with key policy makers. By participating in the expo you will be able to build strategic
                          partnerships, tap into new markets and leverage the available media exposure – both local
                           and global – in order to drive sustainable business.
                          </p>
                          <img
                                  src="./assets/images/hero/White and Green Sponsorship Poster - Made with PosterMyWall (1).jpg"
                                    alt="Description of the image"
                                  className="image-style"
                                  style={{
                                   // Set the desired width
                                    height: '800px',// To maintain aspect ratio
                                    borderRadius: '10px',
                                    marginBottom: '80px',
                                    marginRight: '-20px'// Set the curved border radius
                                  }}
                                    />
                        </div>
                      </Tab.Pane>
                      <Tab.Pane
                        className="tab-pane fade"
                        eventKey="information"
                      >
                        <div className="content-box">
                          <p>
                            Sorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Tortor nulla id sit neque scelerisque
                            pulvinar. amet interdum turpis consequat adipiscing.
                            Elementum feugiat sed duis consectetur varius et
                            cras mattis. Lobortis auctor sit in eu nisl fusce
                            augue venenatis, dui. Phasellus eget sagittis
                            mauris, nibh augue cursus Tristique amet
                            sollicitudin sit nulla aliquam, imperdiet sed ut
                            diam. Suspendisse ipsum rhoncus nulla lectus. Id
                            neque in urna neque non amet. Tortor sed aliquam in
                            faucibus enim, posuere. Sed etaccumsan neque posuere
                            tempus in cras. Ornare lectus pretium est eget
                            purus, enim quam purus netus.
                          </p>
                          <p>
                            Dictum ultrices et suspendisse amet mattis in
                            pellentesque. Vulputate arcu, consectetur odio donec
                            nec duis ultrices facilisi. Mauris cursus elit diam,
                            urna suspendisse et, amet. Vitae ligula ultrices
                            nulla justo, enim lorem duis. Volutpat sit et neque
                            aliquam diam at at neque acus augue
                          </p>
                          <br></br>
                          <img
                                  src="./assets/images/hero/White and Green Sponsorship Poster - Made with PosterMyWall (1).jpg"
                                    alt="Description of the image"
                                  className="image-style"
                                  style={{
                                   // Set the desired width
                                    height: '800px',// To maintain aspect ratio
                                    borderRadius: '10px',
                                    marginBottom: '80px',
                                    marginRight: '-20px'// Set the curved border radius
                                  }}
                                    />
                        </div>
                      </Tab.Pane>
                     
                    </Tab.Content>
                    {/*=== Review Form ===*/}
                    
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
      {/* <section className="gallery-section mbm-150">
        <div className="container-fluid">
          <Slider
            {...sliderActive5Item}
            className="slider-active-5-item fadeInUp"
          >
          
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
      </section> */}
      {/*====== End Gallery Section ======*/}
    </Layout>
  );
};
export default ProductDetails;
