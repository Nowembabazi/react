import Link from "next/link";
import Menu from "../Menu";
const DefaultHeader = () => {
  return (
    <header className="header-area header-three">
      {/*====== Header Top Bar ======*/}
      <div className="header-top-bar pt-30 pb-30">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-1 d-none d-xl-block">
              {/*====== Site Branding ======*/}
              <div className="site-brading">
                <Link legacyBehavior href="/index-3">
                  <a className="brand-logo">
                  <img
                    src="assets/images/logo/logo-white.png"
                    alt="Site Logo"
                    style={{
                      marginLeft: 'px',
                      width: '100px', // Set the desired width
                      height: 'auto', // To maintain aspect ratio
                      borderRadius: '28px' // Set the curved border radius
                    }}
                  />
                
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-2 d-none d-xl-block">
              {/*====== Site Branding ======*/}
              <div className="site-brading">
                <Link legacyBehavior href="/index-3">
                  <a className="brand-logo">
                  <img
                    src="assets/images/logo/logo-1.png"
                    alt="Site Logo"
                    style={{
                      marginLeft: '3px',
                      paddingLeft: '-43px',
                      width: '120px', // Set the desired width
                      height: 'auto', // To maintain aspect ratio
                      borderRadius: '18px' // Set the curved border radius
                    }}
                  />
                   
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-8 col-lg-6">
              {/*====== Information Wrapper ======*/}
              <div className="information-wrapper">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="single-info-item-two">
                      <div className="inner-info">
                        <div className="icon">
                          <i className="far fa-map-marker-alt" />
                        </div>
                        <div className="info">
                          <span className="title">Office Address</span>
                         
                          <p>Willis Rd, 
                           Namirembe</p>
                          <p>Kampala, Uganda</p>
                         
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6" style={{ marginLeft: '18px' }}>
                    <div className="single-info-item-two">
                      <div className="inner-info">
                        <div className="icon"  >
                          <i className="far fa-envelope" />
                        </div>
                        <div className="info">
                          <span className="title">Email Address</span>
                          <p>
                            <a href="mailto:support@utalii.com">
                              contact@africatourismexpo.com
                            </a>
                            <p>
                            <a href="tel:+000(123)45688">+ (256) 703747685</a>
                          </p>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-lg-4">
                    <div className="single-info-item-two">
                      <div className="inner-info">
                        <div className="icon">
                          <i className="far fa-phone-plus" />
                        </div>
                        <div className="info">
                          <span className="title">Call</span>
                          <p>
                            <a href="tel:+000(123)45688">+ (256) 703747685</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*====== Header Navigation ======*/}
      <div className="header-navigation">
        <div className="nav-overlay" />
        <div className="container-fluid">
          <div className="primary-menu gray-bg">
            {/*====== Site Branding ======*/}
            <div className="site-brading d-block d-xl-none">
              <Link legacyBehavior href="/index-3">
                <a className="brand-logo">
                <img
                    src="assets/images/logo/logo-white.png"
                    alt="Site Logo"
                    style={{
                      width: '120px', // Set the desired width
                      height: 'auto', // To maintain aspect ratio
                      borderRadius: '28px' // Set the curved border radius
                    }}
                  />
                </a>
              </Link>
            </div>
            <div className="mobile-logo mb-30 d-block d-xl-none">
                <Link legacyBehavior href="/">
                  <a className="brand-logo">
                  <img
                    src="assets/images/logo/logo-1.png"
                    alt="Site Logo"
                    style={{
                      width: '120px', // Set the desired width
                      height: 'auto', // To maintain aspect ratio
                      borderRadius: '18px' // Set the curved border radius
                    }}
                  />
                  </a>
                </Link>
              </div>
            {/*====== Nav Menu ======*/}
            <div className="nav-menu">
              {/*====== Site Branding ======*/}
              <div className="mobile-logo mb-30 d-block d-xl-none">
                <Link legacyBehavior href="/">
                  <a className="brand-logo">
                  <img
                    src="assets/images/logo/logo-white.png"
                    alt="Site Logo"
                    style={{
                      width: '120px', // Set the desired width
                      height: 'auto', // To maintain aspect ratio
                      borderRadius: '28px' // Set the curved border radius
                    }}
                  />
                  </a>
                </Link>
              </div>
              
              {/*=== Nav Search ===*/}
              <div className="nav-search mb-30 d-block d-xl-none ">
                <form>
                  <div className="form_group">
                    <input
                      type="email"
                      className="form_control"
                      placeholder="Search Here"
                      name="email"
                      required
                    />
                    <button className="search-btn">
                      <i className="fas fa-search" />
                    </button>
                  </div>
                </form>
              </div>
              {/*====== Main Menu ======*/}
              <Menu />
              {/*====== Menu Button ======*/}
              <div className="menu-button mt-40 d-xl-none">
                <Link legacyBehavior href="/contact">
                  <a className="main-btn secondary-btn">
                    Book Now
                    <i className="fas fa-paper-plane" />
                  </a>
                </Link>
              </div>
            </div>
            {/*====== Nav Right Item ======*/}
            <div className="nav-right-item">
              <div className="lang-dropdown">
                <select className="wide">
                  <option value="English">English</option>
                  <option value="French">French</option>
                </select>
              </div>
              <div className="menu-button d-xl-block d-none">
                <Link legacyBehavior href="/contact">
                  <a className="main-btn primary-btn">
                    Book Now
                    <i className="fas fa-paper-plane" />
                  </a>
                </Link>
              </div>
              <div className="navbar-toggler">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default DefaultHeader;
