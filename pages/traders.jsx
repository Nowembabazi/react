import PageBanner from "@/src/components/PageBanner";
import ProductDetailsSlider from "@/src/components/sliders/ProductDetailsSlider";
import Layout from "@/src/layout/Layout";
import { sliderActive3Item, sliderActive5Item } from "@/src/sliderProps";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
const Traders = () => {
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
                        <Nav.Item as={"li"} className="nav-item">
                          <Nav.Link
                            as={"a"}
                            className="nav-link"
                            href="#information"
                            eventKey="information"
                          >
                            Additional Information
                          </Nav.Link>
                        </Nav.Item>
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

                           <h4>Benefits of being a Sponsor?</h4> 
                           <br></br>

                           <h4 className="sub-title">Ordinary Tier</h4> 
                           <br></br>
                           <h6>Benefits</h6>
                           
                           <li>
                           Recognition, branding and speaking opportunity in major show events
(opening ceremony, cocktail)
</li>
<li>
Ample branding at the show (venue, partner appreciation boards and
catalogue)
</li>
<li>
Opportunity to include a branded merchandise in the delegates bags
</li>
<li>
Panelist opportunity at the seminars
</li>
<li>
Online presence across all platforms; social media, mailers, home page,
match making page
</li>
<li>
6x6 Exhibition booth
</li>
<li>
X5 event access passes
</li>
<br></br>
<h4 className="sub-title">Silver Tier</h4> 
                           <br></br>
                           <h6>Benefits</h6>
                           
                           <li>
                           Recognition, branding and speaking opportunity in major show events
(opening ceremony, cocktail)
</li>
<li>
Ample branding at the show (venue, partner appreciation boards and
catalogue)
</li>
<li>
Opportunity to include a branded merchandise in the delegates bags
</li>
<li>
Panelist opportunity at the seminars
</li>
<li>
Online presence across all platforms; social media, mailers, home page,
match making page
</li>
<li>
6x6 Exhibition booth
</li>
<li>
X5 event access passes
</li>

<br></br>
<h4 className="sub-title">Gold Tier</h4> 
                           <br></br>
                           <h6>Benefits</h6>
                           
                           <li>
                           Recognition, branding and speaking opportunity in major show events
(opening ceremony, cocktail)
</li>
<li>
Ample branding at the show (venue, partner appreciation boards and
catalogue)
</li>
<li>
Opportunity to include a branded merchandise in the delegates bags
</li>
<li>
Panelist opportunity at the seminars
</li>
<li>
Online presence across all platforms; social media, mailers, home page,
match making page
</li>
<li>
6x6 Exhibition booth
</li>
<li>
X5 event access passes
</li>
 <br></br>
 <h4 className="sub-title">Platinum Tier</h4> 
                           <br></br>
                           <h6>Benefits</h6>
                           
                           <li>
                           Recognition, branding and speaking opportunity in major show events
(opening ceremony, cocktail)
</li>
<li>
Ample branding at the show (venue, partner appreciation boards and
catalogue)
</li>
<li>
Opportunity to include a branded merchandise in the delegates bags
</li>
<li>
Panelist opportunity at the seminars
</li>
<li>
Online presence across all platforms; social media, mailers, home page,
match making page
</li>
<li>
6x6 Exhibition booth
</li>
<li>
X5 event access passes
</li>

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
     
      {/*====== End Gallery Section ======*/}
    </Layout>
  );
};
export default Traders;