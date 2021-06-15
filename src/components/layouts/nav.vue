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
                  <span class="flaticon-timer"></span>
                </div>
                <ul>
                  <li>
                    <strong>09:00 am - 17:00 pm</strong>
                    Horaires Du Travail
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
                    <strong>05.00.00.00.00</strong>
                    Nous Serons Heureux De Répondre à Vos Questions
                  </li>
                </ul>
              </div>

              <!--Info Box-->
              <div class="upper-column info-box">
                <div class="icon-box"><span class="flaticon-location-pin"></span></div>
                <ul>
                  <li>
                    <strong>info@sentiment.com</strong>
                     Envoyez Vos Masages
                  </li>
                </ul>
              </div>
            </div>
            <ul class="header-info-list">
              <li>Audit</li>
              <li>Expertise-Comptable</li>
              <li class="not">Conseil</li>

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
                      ['acac', 'ac', 'aud'].includes($route.name)
                        ? 'current'
                        : ''
                    "
                  >
                    <router-link to="/Audit">
                      Audit
                    </router-link>
                    <ul>
                      <li>
                        <router-link to="/audit-commissariat-aux-comptes">
                          AUDIT-COMMISSARIAT AUX COMPTES
                        </router-link>
                      </li>
                      <li>
                        <router-link to="/audit-contractuel">
                          audit-contractuel
                        </router-link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <router-link to="/Expertise-Comptable">
                      Expertise Comptable
                    </router-link>
                  </li>
                  <li
                    class="dropdown"
                    :class="
                      ['cjef', 'cseo', 'cec', 'cesd', 'Conseil'].includes(
                        $route.name,
                      )
                        ? 'current'
                        : ''
                    "
                  >
                    <router-link to="/Conseil">
                      Conseil
                    </router-link>
                    <ul>
                      <li>
                        <router-link to="/conseil-juridique-et-fiscal">
                          conseil-juridique-et-fiscal
                        </router-link>
                      </li>
                      <li>
                        <router-link
                          to="/conseil-en-strategie-et-en-organisation"
                        >
                          conseil-en-strategie-et-en-organisation
                        </router-link>
                      </li>
                      <li>
                        <router-link to="/conseil-en-corporate">
                          conseil-en-corporate
                        </router-link>
                      </li>
                      <li>
                        <router-link to="/conseil-en-systeme-dinformation">
                          conseil-en-systeme-dinformation
                        </router-link>
                      </li>
                    </ul>
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
                      À propos
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
                    </ul>
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
                        ['acac', 'ac', 'aud'].includes($route.name)
                          ? 'current'
                          : ''
                      "
                    >
                      <router-link to="/Audit">
                        Audit
                      </router-link>
                      <ul>
                        <li>
                          <router-link to="/audit-commissariat-aux-comptes">
                            AUDIT-COMMISSARIAT AUX COMPTES
                          </router-link>
                        </li>
                        <li>
                          <router-link to="/audit-contractuel">
                            audit-contractuel
                          </router-link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <router-link to="/Expertise-Comptable">
                        Expertise Comptable
                      </router-link>
                    </li>
                    <li
                      class="dropdown"
                      :class="
                        ['cjef', 'cseo', 'cec', 'cesd', 'Conseil'].includes(
                          $route.name,
                        )
                          ? 'current'
                          : ''
                      "
                    >
                      <router-link to="/Conseil">
                        Conseil
                      </router-link>
                      <ul>
                        <li>
                          <router-link to="/conseil-juridique-et-fiscal">
                            conseil-juridique-et-fiscal
                          </router-link>
                        </li>
                        <li>
                          <router-link
                            to="/conseil-en-strategie-et-en-organisation"
                          >
                            conseil-en-strategie-et-en-organisation
                          </router-link>
                        </li>
                        <li>
                          <router-link to="/conseil-en-corporate">
                            conseil-en-corporate
                          </router-link>
                        </li>
                        <li>
                          <router-link to="/conseil-en-systeme-dinformation">
                            conseil-en-systeme-dinformation
                          </router-link>
                        </li>
                      </ul>
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
                        À propos
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
                      </ul>
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
@media (min-width: 968px) {
  .navigation {
    .router-link-exact-active {
      color: #009dea !important;
    }

    .dropdown ul .router-link-active {
      color: #fff !important;
    }
  }
}

.main-header .header-upper .upper-right .header-info-list li.not::after {
  content: '';
}
</style>
