function Header() {
  $("body").prepend(`
     <!-- preloader -->
    <div id="preloader">
      <div class="preloader">
        <span></span>
        <span></span>
      </div>
    </div>
    <!-- preloader end  -->

    <!-- back-to-top-start  -->
    <button class="scroll-top scroll-to-target" data-target="html">
      <i class="far fa-angle-double-up"></i>
    </button>
    <!-- back-to-top-end  -->

    <!-- search popup start -->
    <div class="search__popup">
      <div class="container">
        <div class="row">
          <div class="col-xxl-12">
            <div class="search__wrapper">
              <div
                class="search__top d-flex justify-content-between align-items-center"
              >
                <div class="search__logo">
                  <a href="index.html">
                    <img src="assets/img/logo/footer-1.png" alt="" />
                  </a>
                </div>
                <div class="search__close">
                  <button
                    type="button"
                    class="search__close-btn search-close-btn"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 1L1 17"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1 1L17 17"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="search__form">
                <form action="#">
                  <div class="search__input">
                    <input
                      class="search-input-field"
                      type="text"
                      placeholder="Type here to search..."
                    />
                    <span class="search-focus-border"></span>
                    <button type="submit">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M19.0002 19.0002L17.2002 17.2002"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- search popup end -->

    <!-- tp-offcanvus-area-start -->
    <div class="tpoffcanvas-area">
      <div class="tpoffcanvas">
        <div class="tpoffcanvas__close-btn">
          <button class="close-btn"><i class="fal fa-times"></i></button>
        </div>
        <div class="tpoffcanvas__logo">
          <a href="index.html">
            <img src="assets/img/logo/footer-1.png" alt="" />
          </a>
        </div>
        <div class="tpoffcanvas__title">
          <p
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            incidunt eaque a cumque, porro maxime autem sed.</p
          >
        </div>
        <div class="tp-main-menu-mobile d-xl-none"></div>
        <div class="tpoffcanvas__contact-info">
          <div class="tpoffcanvas__contact-title">
            <h5>Contact us</h5>
          </div>
          <ul>
            <li>
              <i class="fa-light fa-location-dot"></i>
              <a
                href="https://www.google.com/maps/@23.8223586,90.3661283,15z"
                target="_blank"
                >Melbone st, Australia, Ny 12099</a
              >
            </li>
            <li>
              <i class="fas fa-envelope"></i>
              <a href="mailto:solaredge@gmail.com">themepure@gmail.com</a>
            </li>
            <li>
              <i class="fal fa-phone-alt"></i>
              <a href="tel:+48555223224">+48 555 223 224</a>
            </li>
          </ul>
        </div>
        <div class="tpoffcanvas__input">
          <div class="tpoffcanvas__input-title">
            <h4>Get UPdate</h4>
          </div>
          <form action="#">
            <div class="p-relative">
              <input type="text" placeholder="Enter mail" />
              <button>
                <i class="fas fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
        <div class="tpoffcanvas__social">
          <div class="social-icon">
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-pinterest-p"></i></a>
          </div>
        </div>
      </div>
    </div>
    <div class="body-overlay"></div>
    <!-- tp-offcanvus-area-end -->

    <header class="tp-header-height">
      <div
        id="header-sticky"
        class="tp-header-2__area tp-header-2__transparent"
      >
        <div class="container container-large">
          <div class="tp-header-2__plr">
            <div class="row align-items-center">
              <div class="col-xl-2 col-lg-6 col-md-4 col-7">
                <div class="tp-header-2__logo">
                  <a href="index.html">
                    <img src="assets/img/logo/logo-2.png" alt="" height="60" />
                  </a>
                </div>
              </div>
              <div class="col-xl-7 d-none d-xl-block">
                <div class="tp-header-2__main-menu">
                  <nav class="tp-main-menu-content">
                    <ul>
                      <li 
                        ><a href="index.html">Home</a>
                        
                      </li>
                      <!--/* <li class="has-dropdown"
                        ><a href="#">Pages</a>
                        <ul class="submenu tp-submenu">
                          <li><a href="about-us.html">About Us</a></li>
                          <li><a href="team.html">Team</a></li>
                          <li><a href="team-details.html">Team Details</a></li>
                          <li><a href="portfolio.html">Portfolio</a></li>
                          <li><a href="shop.html">Shop</a></li>
                          <li><a href="shop-details.html">Shop Details</a></li>
                          <li><a href="cart.html">Cart</a></li>
                          <li><a href="checkout.html">Checkout</a></li>
                          <li><a href="faq.html">Faq</a></li>
                          <li><a href="login.html">Login</a></li>
                          <li><a href="register.html">Register</a></li>
                          <li><a href="error.html">Error</a></li>
                        </ul>
                      </li> -->
                      <li
                        ><a href="donation-details.html">#WorkFlowNation</a>
                      </li>
                      <li class="has-dropdown"
                        ><a href="evant-details.html">Programmes</a>
                        <ul class="submenu tp-submenu">
                          <li><a href="event.html">#workFlowNation</a></li>
                          <li><a href="event.html">Spark Sessions</a></li>
                          <li><a href="event.html">Hackathons</a></li>
                          <li><a href="event.html">DigiDiva</a></li>
                          <li><a href="event.html">GovTech</a></li>
                          <li><a href="event.html">CLEANERGY</a></li>
                          <li><a href="event.html">GAVA</a></li>
                          <li><a href="event.html">AFCT Summit</a></li>
                        </ul>
                      </li>

                      <li 
                        ><a href="blog-details.html">About</a>
                      </li>
                      <li><a href="contact.html">Contact</a></li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div class="col-xl-3 col-lg-6 col-md-8 col-5">
                <div class="tp-header-2__right-box">
                  <div class="tp-header-2__right-action">
                    <ul>
                      <!--<li>
                        <div class="tp-header-2__icon-box d-none d-md-block">
                          <button class="search-open-btn"
                            ><i class="flaticon-loupe"></i
                          ></button>
                          <a href="login.html"><i class="flaticon-user"></i></a>
                        </div>
                      </li>
                      <li> -->
                        <div class="tp-header-2__btn d-none d-md-block">
                          <a class="tp-btn" href="donation-sidebar.html"
                            >Donate Now</a
                          >
                        </div>
                      </li>
                      <li>
                        <div class="tp-header-2__bar d-xl-none">
                          <button class="tp-menu-bar"
                            ><i class="fa-solid fa-bars-staggered"></i
                          ></button>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    `);
}

Header();
