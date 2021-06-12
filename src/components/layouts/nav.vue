<template>
  <div class="navigation">
    <header class="main-header header-style-three">
      <!--Header-Upper-->
      <div class="header-upper">
        <div class="auto-container clearfix">
          <div class="pull-left logo-outer">
            <div class="logo">
              <a href="index.html">
                <img src="images/logo-2.png" alt="" title="" />
              </a>
            </div>
          </div>

          <div class="pull-right upper-right">
            <div class="info-columns clearfix">
              <!--Info Box-->
              <div class="upper-column info-box">
                <div class="icon-box">
                  <span class="flaticon-location-pin"></span>
                </div>
                <ul>
                  <li>
                    <strong>08:00 am - 16:00 pm</strong>
                    We Are Open For You
                  </li>
                </ul>
              </div>

              <!--Info Box-->
              <div class="upper-column info-box">
                <div class="icon-box">
                  <span class="flaticon-technology-1"></span>
                </div>
                <ul>
                  <li>
                    <strong>1-800-985-357</strong>
                    We Feel Happy to Talk
                  </li>
                </ul>
              </div>

              <!--Info Box-->
              <div class="upper-column info-box">
                <div class="icon-box"><span class="flaticon-timer"></span></div>
                <ul>
                  <li>
                    <strong>info@sentiment.com</strong>
                    Send Your Masages
                  </li>
                </ul>
              </div>
            </div>
            <ul class="header-info-list">
              <li>Help Desk</li>
              <li>Get A Free Quote</li>
              <li>Our Onlilne Shop</li>

              <li class="social">
                <span><a href="#" class="fa fa-facebook"></a></span>
                <span><a href="#" class="fa fa-twitter"></a></span>
                <span><a href="#" class="fa fa-google"></a></span>
                <span><a href="#" class="fa fa-instagram"></a></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--End Header Upper-->

      <!--Header Lower-->
      <div class="header-lower clearfix">
        <div class="auto-container">
          <!--Nav Box-->
          <div class="nav-outer clearfix">
            <!-- Main Menu -->
            <nav class="main-menu navbar-expand-md">
              <div class="navbar-header">
                <!-- Toggle Button -->
                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
              </div>

              <div
                class="navbar-collapse collapse clearfix"
                id="navbarSupportedContent"
              >
                <ul class="navigation clearfix">
                  <li>
                    <router-link to="/">Accueil</router-link>
                  </li>
                  <li
                    class="dropdown"
                    :class="
                      ['pnc', 'nve', 'np'].includes($route.name)
                        ? 'current'
                        : ''
                    "
                  >
                    <a href="#" @click="(e) => e.preventDefault()">
                      Qui Sommes Nous
                    </a>
                    <ul>
                      <li>
                        <router-link to="/pourquoi-nous-choisir">
                          pourquoi-nous-choisir
                        </router-link>
                      </li>
                      <li>
                        <router-link to="/nos-valeurs-et-engagements">
                          nos-valeurs-et-engagements
                        </router-link>
                      </li>
                      <li>
                        <router-link to="/nos-partenaires">
                          nos-partenaires
                        </router-link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <router-link to="/Audit">Audit</router-link>
                  </li>
                  <li>
                    <router-link to="/Expertise-Comptable">
                      Expertise Comptable
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/Conseil">Conseil</router-link>
                  </li>

                  <li>
                    <router-link to="/contact">
                      <i class="fa fa-phone"></i>
                      Contact
                    </router-link>
                  </li>
                </ul>
              </div>
            </nav>

            <!-- Main Menu End-->
            <div class="outer-box">
              <!--Search Box-->
              <div class="search-box-outer">
                <div class="dropdown">
                  <button
                    class="search-box-btn dropdown-toggle"
                    type="button"
                    id="dropdownMenu3"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span class="fa fa-search"></span>
                  </button>
                  <ul
                    class="dropdown-menu pull-right search-panel"
                    aria-labelledby="dropdownMenu3"
                  >
                    <li class="panel-outer">
                      <div class="form-container">
                        <form method="post" action="blog.html">
                          <div class="form-group">
                            <input
                              type="search"
                              name="field-name"
                              value=""
                              placeholder="Search Here"
                              required
                            />
                            <button type="submit" class="search-btn">
                              <span class="fa fa-search"></span>
                            </button>
                          </div>
                        </form>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--End Header Lower-->

      <!--Sticky Header-->
      <div class="sticky-header">
        <div class="auto-container">
          <div class="sticky-inner-container clearfix">
            <!--Logo-->
            <div class="logo pull-left">
              <a href="index.html" class="img-responsive">
                <img src="images/logo-small.png" alt="" title="" />
              </a>
            </div>

            <!--Right Col-->
            <div class="right-col pull-right">
              <!-- Main Menu -->
              <nav class="main-menu navbar-expand-md">
                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent1"
                  aria-controls="navbarSupportedContent1"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>

                <div
                  class="navbar-collapse collapse clearfix"
                  id="navbarSupportedContent1"
                >
                  <ul class="navigation clearfix">
                    <li>
                      <router-link to="/">Accueil</router-link>
                    </li>
                    <li
                      class="dropdown"
                      :class="
                        ['pnc', 'nve', 'np'].includes($route.name)
                          ? 'current'
                          : ''
                      "
                    >
                      <a href="#" @click="(e) => e.preventDefault()">
                        Qui Sommes Nous
                      </a>
                      <ul>
                        <li>
                          <router-link to="/pourquoi-nous-choisir">
                            pourquoi-nous-choisir
                          </router-link>
                        </li>
                        <li>
                          <router-link to="/nos-valeurs-et-engagements">
                            nos-valeurs-et-engagements
                          </router-link>
                        </li>
                        <li>
                          <router-link to="/nos-partenaires">
                            nos-partenaires
                          </router-link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <router-link to="/Audit">Audit</router-link>
                    </li>
                    <li>
                      <router-link to="/Expertise-Comptable">
                        Expertise Comptable
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/Conseil">Conseil</router-link>
                    </li>

                    <li>
                      <router-link to="/contact">
                        <i class="fa fa-phone"></i>
                        Contact
                      </router-link>
                    </li>
                  </ul>
                </div>
              </nav>
              <!-- Main Menu End-->
            </div>
          </div>
        </div>
      </div>
      <!--End Sticky Header-->
    </header>
  </div>
</template>

<style lang="scss">
.navigation {
  .router-link-exact-active {
    color: #009dea !important;
  }

  .dropdown .router-link-active {
    color: #fff !important;
  }
}
</style>
