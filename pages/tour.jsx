import GallerySection from "@/src/components/GallerySection";
import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
const Tour = () => {
  return (
    <Layout extraClass={"pt-160"}>
      <PageBanner pageTitle={"Explore Uganda With us"} />
      {/*====== Start Booking Section ======*/}
      <section className="booking-form-section pb-100">
        {/* <div className="container-fluid">
          <div className="booking-form-wrapper p-r z-2">
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
      {/*====== End Booking Section ======*/}
      {/*====== Start Places Section ======*/}
      <section className="places-section pb-100">
        {/* <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6 col-sm-12 places-column">
            
              <div className="single-place-item mb-60 wow fadeInUp">
                <div className="place-img">
                  <img
                    src="assets/images/place/place-1.jpg"
                    alt="Place Image"
                  />
                </div>
                <div className="place-content">
                  <div className="info">
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
                    <h4 className="title">
                      <Link legacyBehavior href="/tour-details">
                        <a>Sitting on Boat Spreading Her Arms</a>
                      </Link>
                    </h4>
                    <p className="location">
                      <i className="far fa-map-marker-alt" />
                      North Province, Maldives
                    </p>
                    <p className="price">
                      <i className="fas fa-usd-circle" />
                      Price<span className="currency">$</span>93.65
                    </p>
                    <div className="meta">
                      <span>
                        <i className="far fa-clock" />
                        05 Days
                      </span>
                      <span>
                        <i className="far fa-user" />
                        25
                      </span>
                      <span>
                        <Link legacyBehavior href="/tour-details">
                          <a>
                            Details
                            <i className="far fa-long-arrow-right" />
                          </a>
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12 places-column">
            
              <div className="single-place-item mb-60 wow fadeInUp">
                <div className="place-img">
                  <img
                    src="assets/images/place/place-2.jpg"
                    alt="Place Image"
                  />
                </div>
                <div className="place-content">
                  <div className="info">
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
                    <h4 className="title">
                      <Link legacyBehavior href="/tour-details">
                        <a>White Canopy Tent Near Coastline</a>
                      </Link>
                    </h4>
                    <p className="location">
                      <i className="far fa-map-marker-alt" />
                      North Province, Maldives
                    </p>
                    <p className="price">
                      <i className="fas fa-usd-circle" />
                      Price<span className="currency">$</span>93.65
                    </p>
                    <div className="meta">
                      <span>
                        <i className="far fa-clock" />
                        05 Days
                      </span>
                      <span>
                        <i className="far fa-user" />
                        25
                      </span>
                      <span>
                        <Link legacyBehavior href="/tour-details">
                          <a>
                            Details
                            <i className="far fa-long-arrow-right" />
                          </a>
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12 places-column">
             
              <div className="single-place-item mb-60 wow fadeInUp">
                <div className="place-img">
                  <img
                    src="assets/images/place/place-3.jpg"
                    alt="Place Image"
                  />
                </div>
                <div className="place-content">
                  <div className="info">
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
                    <h4 className="title">
                      <Link legacyBehavior href="/tour-details">
                        <a>Sitting on Boat Spreading Her Arms</a>
                      </Link>
                    </h4>
                    <p className="location">
                      <i className="far fa-map-marker-alt" />
                      Tambon Khlong Sok, Thailand
                    </p>
                    <p className="price">
                      <i className="fas fa-usd-circle" />
                      Price<span className="currency">$</span>93.65
                    </p>
                    <div className="meta">
                      <span>
                        <i className="far fa-clock" />
                        05 Days
                      </span>
                      <span>
                        <i className="far fa-user" />
                        25
                      </span>
                      <span>
                        <Link legacyBehavior href="/tour-details">
                          <a>
                            Details
                            <i className="far fa-long-arrow-right" />
                          </a>
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12 places-column">
              
              <div className="single-place-item mb-60 wow fadeInUp">
                <div className="place-img">
                  <img
                    src="assets/images/place/place-4.jpg"
                    alt="Place Image"
                  />
                </div>
                <div className="place-content">
                  <div className="info">
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
                    <h4 className="title">
                      <Link legacyBehavior href="/tour-details">
                        <a>Sitting on Boat Spreading Her Arms</a>
                      </Link>
                    </h4>
                    <p className="location">
                      <i className="far fa-map-marker-alt" />
                      Arefu, AG, Romania
                    </p>
                    <p className="price">
                      <i className="fas fa-usd-circle" />
                      Price<span className="currency">$</span>93.65
                    </p>
                    <div className="meta">
                      <span>
                        <i className="far fa-clock" />
                        05 Days
                      </span>
                      <span>
                        <i className="far fa-user" />
                        25
                      </span>
                      <span>
                        <Link legacyBehavior href="/tour-details">
                          <a>
                            Details
                            <i className="far fa-long-arrow-right" />
                          </a>
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12 places-column">
             
              <div className="single-place-item mb-60 wow fadeInUp">
                <div className="place-img">
                  <img
                    src="assets/images/place/place-5.jpg"
                    alt="Place Image"
                  />
                </div>
                <div className="place-content">
                  <div className="info">
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
                    <h4 className="title">
                      <Link legacyBehavior href="/tour-details">
                        <a>Cottages In The Middle Of Beach</a>
                      </Link>
                    </h4>
                    <p className="location">
                      <i className="far fa-map-marker-alt" />
                      Vaitāpē, French Polynesia
                    </p>
                    <p className="price">
                      <i className="fas fa-usd-circle" />
                      Price<span className="currency">$</span>93.65
                    </p>
                    <div className="meta">
                      <span>
                        <i className="far fa-clock" />
                        05 Days
                      </span>
                      <span>
                        <i className="far fa-user" />
                        25
                      </span>
                      <span>
                        <Link legacyBehavior href="/tour-details">
                          <a>
                            Details
                            <i className="far fa-long-arrow-right" />
                          </a>
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12 places-column">
            
              <div className="single-place-item mb-60 wow fadeInUp">
                <div className="place-img">
                  <img
                    src="assets/images/place/place-6.jpg"
                    alt="Place Image"
                  />
                </div>
                <div className="place-content">
                  <div className="info">
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
                    <h4 className="title">
                      <Link legacyBehavior href="/tour-details">
                        Beautiful Floating Villa on River
                      </Link>
                    </h4>
                    <p className="location">
                      <i className="far fa-map-marker-alt" />
                      Gaafu Dhaalu Atoll, Maldives
                    </p>
                    <p className="price">
                      <i className="fas fa-usd-circle" />
                      Price<span className="currency">$</span>93.65
                    </p>
                    <div className="meta">
                      <span>
                        <i className="far fa-clock" />
                        05 Days
                      </span>
                      <span>
                        <i className="far fa-user" />
                        25
                      </span>
                      <span>
                        <Link legacyBehavior href="/tour-details">
                          <a>
                            Details
                            <i className="far fa-long-arrow-right" />
                          </a>
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12 places-column">
             
              <div className="single-place-item mb-60 wow fadeInUp">
                <div className="place-img">
                  <img
                    src="assets/images/place/place-7.jpg"
                    alt="Place Image"
                  />
                </div>
                <div className="place-content">
                  <div className="info">
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
                    <h4 className="title">
                      <Link legacyBehavior href="/tour-details">
                        Man and Woman Walks on Dock
                      </Link>
                    </h4>
                    <p className="location">
                      <i className="far fa-map-marker-alt" />
                      Maldives
                    </p>
                    <p className="price">
                      <i className="fas fa-usd-circle" />
                      Price<span className="currency">$</span>93.65
                    </p>
                    <div className="meta">
                      <span>
                        <i className="far fa-clock" />
                        05 Days
                      </span>
                      <span>
                        <i className="far fa-user" />
                        25
                      </span>
                      <span>
                        <Link legacyBehavior href="/tour-details">
                          <a>
                            Details
                            <i className="far fa-long-arrow-right" />
                          </a>
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12 places-column">
             
              <div className="single-place-item mb-60 wow fadeInUp">
                <div className="place-img">
                  <img
                    src="assets/images/place/place-8.jpg"
                    alt="Place Image"
                  />
                </div>
                <div className="place-content">
                  <div className="info">
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
                    <h4 className="title">
                      <Link legacyBehavior href="/tour-details">
                        Trees Under White Clouds during Daytime
                      </Link>
                    </h4>
                    <p className="location">
                      <i className="far fa-map-marker-alt" />
                      Vaitāpē, French Polynesia
                    </p>
                    <p className="price">
                      <i className="fas fa-usd-circle" />
                      Price<span className="currency">$</span>93.65
                    </p>
                    <div className="meta">
                      <span>
                        <i className="far fa-clock" />
                        05 Days
                      </span>
                      <span>
                        <i className="far fa-user" />
                        25
                      </span>
                      <span>
                        <Link legacyBehavior href="/tour-details">
                          <a>
                            Details
                            <i className="far fa-long-arrow-right" />
                          </a>
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 col-sm-12 places-column">
              
              <div className="single-place-item mb-60 wow fadeInUp">
                <div className="place-img">
                  <img
                    src="assets/images/place/place-9.jpg"
                    alt="Place Image"
                  />
                </div>
                <div className="place-content">
                  <div className="info">
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
                    <h4 className="title">
                      <Link legacyBehavior href="/tour-details">
                        Body of Water Near Mountain
                      </Link>
                    </h4>
                    <p className="location">
                      <i className="far fa-map-marker-alt" />
                      Bali, Indonesia
                    </p>
                    <p className="price">
                      <i className="fas fa-usd-circle" />
                      Price<span className="currency">$</span>93.65
                    </p>
                    <div className="meta">
                      <span>
                        <i className="far fa-clock" />
                        05 Days
                      </span>
                      <span>
                        <i className="far fa-user" />
                        25
                      </span>
                      <span>
                        <Link legacyBehavior href="/tour-details">
                          <a>
                            Details
                            <i className="far fa-long-arrow-right" />
                          </a>
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
             
              <ul className="gowilds-pagination wow fadeInUp text-center">
                <li>
                  <a href="#">
                    <i className="far fa-arrow-left" />
                  </a>
                </li>
                <li>
                  <a href="#" className="active">
                    01
                  </a>
                </li>
                <li>
                  <a href="#">02</a>
                </li>
                <li>
                  <a href="#">03</a>
                </li>
                <li>
                  <a href="#">04</a>
                </li>
                <li>
                  <a href="#">
                    <i className="far fa-arrow-right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
        <h2  style={{ marginLeft: '20px', marginRight: '20px' }}>About Utalii.</h2>
        <hr/>
        <h5 style={{ marginLeft: '20px', marginRight: '20px', fontWeight: 'lighter', fontSize: '21px' }}>Utalii Africa Tourism Expo is a one-of-a kind event scheduled to take place in June 2024 in
                 the Ugandan capital, Kampala. <br/>
           <br/>
                 Africa’s mega inaugural expo will, over the course of three days, provide a unique platform
                for African countries and global tourism stakeholders to showcase their products and
                services, build crucial networks with other players in the market, learn from one another
                  and close lucrative business deals.
          <br/>
         <br/>
              Participants will have the collective opportunity to harness Africa’s rich, authentic, cultural
              and natural heritage and hold crucial conversations, with the goal of reigniting the tourism
                business in Africa and promoting inter-Africa travel and trade.</h5>

       <br />
          <hr />
           <br />
          <h2  style={{ marginLeft: '20px', marginRight: '20px' }}>About The Hosting Country.</h2>
        <hr/>
        <h5 style={{ marginLeft: '20px', marginRight: '20px', fontWeight: 'lighter', fontSize: '21px' }}>
          UATE will be hosted in the bustling East Africa city of Kampala, where vibrant colour, a
            cacophony of sound, a diverse population, rich past, strong cultural traditions and promise
          for the future combine in an unforgettable visitor experience.
         <br/>
         <br/>
         The host venue, the historically significant Kololo Ceremonial Grounds, located in the heart
           of the city, will provide guests with easy access to accommodation suited to every taste as
           well as to essential social amenities.
           <br />
           <br />
           When the expo ends, you will want to linger, and with Uganda’s lush forests, national parks,
           mountain gorillas, scenic sites, thrilling water activities, abundant bird life and colourful
           cultural life, among many others, there will be no shortage of activities to keep you
          engaged.
           
           </h5>
      </section>
      {/*====== End Places Section ======*/}
      {/*====== Start Gallery Section ======*/}
      {/* <GallerySection /> */}
      {/*====== End Gallery Section ======*/}
    </Layout>
  );
};
export default Tour;
