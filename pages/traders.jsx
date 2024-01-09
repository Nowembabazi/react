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
                          <h4>Why be a Sponsor?</h4>
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
                        </div>
                      </Tab.Pane>
                      {/* <Tab.Pane className="tab-pane fade" eventKey="reviews">
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
                        </div>
                      </Tab.Pane> */}
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