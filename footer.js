function Footer() {
  $("main").after(`
    
    <footer>
      <!-- footer-area-start -->
      <div class="tp-footer__area">
        <div
          class="tp-footer__bg"
          data-background="assets/img/footer/ft-bg-1.jpg"
        >
          <div class="container">
            <div class="row">
              <div
                class="col-xl-4 col-lg-4 col-md-6 mb-45 wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".3s"
              >
                <div class="tp-footer__widget footer-2-col-1">
                  <div class="tp-footer__logo">
                    <a href="index.html">
                      <img src="assets/img/logo/footer-1.png" alt="" />
                    </a>
                  </div>
                  <div class="tp-footer__text">
                    <p
                      >Suspendisse posuere egeteldapibus. <br />
                      Aliquam cong egeteldapib Aliquam <br />
                      congue posuere
                    </p>
                  </div>
                  <div class="tp-footer__contact-list">
                    <div
                      class="tp-footer__contact-item pb-20 d-flex about-items-center"
                    >
                      <div class="tp-footer__icon">
                        <i class="flaticon-mail"></i>
                      </div>
                      <div class="tp-footer__text">
                        <a href="mailto:poorexcharity@gmail.com"
                          >poorexcharity@gmail.com</a
                        >
                      </div>
                    </div>
                    <div
                      class="tp-footer__contact-item d-flex about-items-center"
                    >
                      <div class="tp-footer__icon">
                        <i aria-hidden="true" class="flaticon-phone"></i>
                      </div>
                      <div class="tp-footer__text">
                        <a href="tel:+990988764578">+99 (098) 876 4578</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-xl-2 col-lg-2 col-md-6 mb-45 wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".5s"
              >
                <div class="tp-footer__widget footer-2-col-2">
                  <h4 class="tp-footer__widget-title-2">Navigation</h4>
                  <div class="tp-footer__list">
                    <ul>
                      <li><a href="#">Recent Courses</a></li>
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Donation</a></li>
                      <li><a href="#">Latest News</a></li>
                      <li><a href="#">Contact Us</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                class="col-xl-2 col-lg-2 col-md-6 mb-45 wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".7s"
              >
                <div class="tp-footer__widget footer-2-col-3">
                  <h4 class="tp-footer__widget-title-2">Campaigns</h4>
                  <div class="tp-footer__list">
                    <ul>
                      <li><a href="#">Child Cancer</a></li>
                      <li><a href="#">Differently Abled</a></li>
                      <li><a href="#">Clean Water</a></li>
                      <li><a href="#">Start Fundraising</a></li>
                      <li><a href="#">Give Education</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                class="col-xl-4 col-lg-4 col-md-6 mb-45 wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".9s"
              >
                <div class="tp-footer__widget footer-2-col-4">
                  <div class="tp-footer__donate-box">
                    <h4 class="tp-footer__donate-title-sm"
                      >We Work Together For <br />
                      a Beautiful World, Come Join Us Today!</h4
                    >
                    <a class="tp-btn theme-2-bg" href="donation-sidebar.html"
                      >Donate Now</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- footer-area-end -->

      <!-- copyright-area-start -->
      <div class="tp-copyright__area tp-copyright__bg">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div class="tp-copyright__text text-center text-sm-start">
                <span>© Copyright 2023 by Poorex.com</span>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div class="tp-copyright__social text-center text-sm-end">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-pinterest-p"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- copyright-area-end -->
    </footer>
    
    `);
}

Footer();
