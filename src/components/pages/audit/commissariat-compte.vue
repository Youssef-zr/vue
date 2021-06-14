<template>
  <div class="section-audit">
    <!--Page Title-->
    <section
      class="page-title"
      style="background-image: url(/images/background/12.jpg);"
    >
      <div class="auto-container">
        <h1>COMMISSARIAT AUX COMPTES</h1>
        <ul class="page-breadcrumb">
          <li>
            <router-link to="/accueil">Accueil</router-link>
          </li>
          <li>COMMISSARIAT AUX COMPTES</li>
        </ul>
      </div>
    </section>
    <!--End Page Title-->
    <!--Welcome Section-->
    <section class="welcome-section text-left pb-5">
      <div class="auto-container">
        <div class="row clearfix">
          <!--Content Column-->
          <div class="content-column col-lg-7 col-md-12 col-sm-12">
            <div class="inner-column">
              <!--Sec Title-->
              <div class="sec-title pb-2">
                <div class="title">COMMISSARIAT AUX COMPTES</div>
              </div>
              <div class="text mt-0">
                Le commissaire aux comptes un acteur majeur au sein de nos
                économies modernes. En effet, il contribue à garantir la qualité
                et la transparence de l’information financière émise par
                l’entreprise, tant pour les besoins de gestion et d’analyse
                interne que pour les besoins des actionnaires, salariés,
                établissements financiers, clients, fournisseurs, donateurs ou
                pouvoirs publics.
              </div>
              <div class="clearfix">
                <div class="pull-left">
                  <router-link to="/contact" class="theme-btn btn-style-four">
                    Contacter
                  </router-link>
                </div>
                <div class="pull-right">
                  <div class="phone">
                    <span class="icon fa fa-phone"></span>
                    05.55.55.55.55
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--Image Column-->
          <div class="image-column col-lg-5 col-md-12 col-sm-12">
            <div class="inner-column mt-md-5 text-secondary">
              <div class="text">
                Sa mission essentielle consiste dans l’expression d’une opinion
                sur la régularité et la sincérité des comptes annuels et
                consolidés. Au-delà de cette notion de contrôle indispensable,
                le Commissaire aux Comptes est avant tout un partenaire aux
                cotés de l’entreprise.
              </div>
              <hr />
              <div class="text">
                Nos associés et collaborateurs mobilisent leurs expertises
                techniques et sectorielles pour servir les objectifs de cette
                mission dans un souci permanent d’efficacité et de proximité.
              </div>
            </div>
          </div>
        </div>
        <!-- buttons -->
        <div class="buttons mt-4 text-center">
          <router-link to="/Audit" class="theme-btn btn-style-three m-2">
            Audit
          </router-link>
          <router-link to="/contact" class="theme-btn btn-style-three m-2">
            audit-contractuel
          </router-link>
        </div>
      </div>
    </section>
    <!--End Welcome Section-->

    <!-- Approach Section -->
    <section
      class="approach-section pb-5"
      style="background-image: url(images/background/2.jpg);"
    >
      <div
        class="upper-box"
        style="background-image: url(images/background/1.jpg);"
      >
        <div class="auto-container">
          <div class="title">Nous Sommes Des Professionnels</div>
          <h5 class="text-light">
            FIREC & ASSOCIES vous accompagne dans le cadre des missions
            suivantes
          </h5>
        </div>
      </div>

      <div class="auto-container">
        <div class="blocks-section">
          <div class="row clearfix">
            <!--Services Block-->
            <div class="services-block col-lg-4 col-md-6 col-sm-12">
              <div class="inner-box">
                <div class="icon-box">
                  <span class="fa fa-key"></span>
                </div>
                <h3>
                  <a href="#" @click="prevent">
                    Certification des comptes sociaux et des comptes consolidés
                  </a>
                </h3>
                <div
                  class="overlay-box"
                  style="background-image: url(images/resource/service-1.jpg);"
                >
                  <div class="overlay-inner">
                    <div class="icon-box">
                      <span class="fa fa-key"></span>
                    </div>
                    <h5>
                      <a href="#" @click="prevent" class="text-light">
                        Certification des comptes sociaux et des comptes
                        consolidés
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <!--Services Block-->
            <div class="services-block col-lg-4 col-md-6 col-sm-12">
              <div class="inner-box">
                <div class="icon-box">
                  <span class="fa fa-plus-square"></span>
                </div>
                <h3>
                  <a href="#" @click="prevent">
                    Augmentation ou réduction du capital
                  </a>
                </h3>
                <div
                  class="overlay-box"
                  style="background-image: url(images/resource/service-1.jpg);"
                >
                  <div class="overlay-inner">
                    <div class="icon-box">
                      <span class="fa fa-plus-square"></span>
                    </div>
                    <h5>
                      <a href="#" @click="prevent" class="text-light">
                        Augmentation ou réduction du capital
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <!--Services Block-->
            <div class="services-block col-lg-4 col-md-6 col-sm-12">
              <div class="inner-box">
                <div class="icon-box">
                  <span class="fa fa-pie-chart"></span>
                </div>
                <h3>
                  <a href="#" @click="prevent">
                    Distribution d’acomptes sur dividendes
                  </a>
                </h3>
                <div
                  class="overlay-box"
                  style="background-image: url(images/resource/service-1.jpg);"
                >
                  <div class="overlay-inner">
                    <div class="icon-box">
                      <span class="fa fa-pie-chart"></span>
                    </div>
                    <h5>
                      <a href="#" @click="prevent" class="text-light">
                        Distribution d’acomptes sur dividendes
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <!--Services Block-->
            <div class="services-block col-lg-4 col-md-6 col-sm-12">
              <div class="inner-box">
                <div class="icon-box">
                  <span class="fa fa-list-alt"></span>
                </div>
                <h3>
                  <a href="#" @click="prevent">
                    Attestations et visa divers
                  </a>
                </h3>
                <div
                  class="overlay-box"
                  style="background-image: url(images/resource/service-1.jpg);"
                >
                  <div class="overlay-inner">
                    <div class="icon-box">
                      <span class="fa fa-list-alt"></span>
                    </div>
                    <h5>
                      <a href="#" @click="prevent" class="text-light">
                        Attestations et visa divers
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <!--Services Block-->
            <div class="services-block col-lg-4 col-md-6 col-sm-12">
              <div class="inner-box">
                <div class="icon-box">
                  <span class="fa fa-bolt"></span>
                </div>
                <h3>
                  <a href="#" @click="prevent">
                    Emission d’actions de préférence
                  </a>
                </h3>
                <div
                  class="overlay-box"
                  style="background-image: url(images/resource/service-1.jpg);"
                >
                  <div class="overlay-inner">
                    <div class="icon-box">
                      <span class="fa fa-bolt"></span>
                    </div>
                    <h5>
                      <a href="#" @click="prevent" class="text-light">
                        Emission d’actions de préférence
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <!--Services Block-->
            <div class="services-block col-lg-4 col-md-6 col-sm-12">
              <div class="inner-box">
                <div class="icon-box">
                  <span class="fa fa-history"></span>
                </div>
                <h3>
                  <a href="#" @click="prevent">
                    Transformation,avantages particuliers
                  </a>
                </h3>
                <div
                  class="overlay-box"
                  style="background-image: url(images/resource/service-1.jpg);"
                >
                  <div class="overlay-inner">
                    <div class="icon-box">
                      <span class="fa fa-history"></span>
                    </div>
                    <h5>
                      <a href="#" @click="prevent" class="text-light">
                        Transformation,avantages particuliers
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr>
          <div class="row mt-4">
            <div class="col-md-6">
              <div class="text">
                Par ailleurs, FIREC & ASSOCIES est souvent amené à intervenir
                dans un cadre légal, afin de contrôler les opérations de fusion,
                scission et apports partiels d’actif. Notre intervention conduit
                à l’émission d’une opinion indépendante concernant
                l’appréciation des valeurs et l’équité d’une opération
                financière.
              </div>
            </div>
            <div class="col-md-6">
              <div class="text">
                Notre expertise est fondée sur une expérience établie dans le
                domaine de l’évaluation d’entreprise, couplée à nos compétences
                juridiques dans ce type d’opération.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--Blog Page Section-->
    <section class="blog-page-section">
      <div class="auto-container">
        <div class="sec-title">
          <h3 class="title">Articles Récents</h3>
        </div>
        <div class="row clearfix">
          <!--News Block-->
          <div class="news-block col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box">
              <div class="image">
                <img src="images/resource/news-6.jpg" alt="" />
                <a
                  href="images/resource/news-6.jpg"
                  class="overlay-box"
                  data-fancybox="gallery"
                  data-caption=""
                >
                  <span class="icon flaticon-full-screen"></span>
                </a>
                <div class="post-date">
                  <span>28</span>
                  DEC
                </div>
              </div>
              <div class="lower-content">
                <h3>
                  <a href="blog-detail.html">
                    Our operations worldwide have been neutral.
                  </a>
                </h3>
                <div class="text">
                  Lorem ipsum dolor sit amet, ei qui essent pericula convenire
                  phaedrum lorem ipsum dolor sit amet, ei qui essent pericula
                  convenire.
                </div>
                <ul class="post-meta">
                  <li>
                    <a href="blog-detail.html">
                      <span class="icon fa fa-commenting-o"></span>
                      02
                    </a>
                  </li>
                  <li>
                    <a href="blog-detail.html">
                      <span class="icon fa fa-user"></span>
                      Admin
                    </a>
                  </li>
                  <li>
                    <a href="blog-detail.html">
                      <span class="icon fa fa-heart-o"></span>
                      03
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!--News Block-->
          <div class="news-block col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box">
              <div class="image">
                <img src="images/resource/news-10.jpg" alt="" />
                <a
                  href="images/resource/news-10.jpg"
                  class="overlay-box"
                  data-fancybox="gallery"
                  data-caption=""
                >
                  <span class="icon flaticon-full-screen"></span>
                </a>
                <div class="post-date">
                  <span>16</span>
                  oct
                </div>
              </div>
              <div class="lower-content">
                <h3>
                  <a href="blog-detail.html">
                    7 Tips To Move Your Project Move Forward.
                  </a>
                </h3>
                <div class="text">
                  Lorem ipsum dolor sit amet, ei qui essent pericula convenire
                  phaedrum lorem ipsum dolor sit amet, ei qui essent pericula
                  convenire.
                </div>
                <ul class="post-meta">
                  <li>
                    <a href="blog-detail.html">
                      <span class="icon fa fa-commenting-o"></span>
                      02
                    </a>
                  </li>
                  <li>
                    <a href="blog-detail.html">
                      <span class="icon fa fa-user"></span>
                      Admin
                    </a>
                  </li>
                  <li>
                    <a href="blog-detail.html">
                      <span class="icon fa fa-heart-o"></span>
                      03
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!--News Block-->
          <div class="news-block col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box">
              <div class="image">
                <img src="images/resource/news-11.jpg" alt="" />
                <a
                  href="images/resource/news-11.jpg"
                  class="overlay-box"
                  data-fancybox="gallery"
                  data-caption=""
                >
                  <span class="icon flaticon-full-screen"></span>
                </a>
                <div class="post-date">
                  <span>10</span>
                  sep
                </div>
              </div>
              <div class="lower-content">
                <h3>
                  <a href="blog-detail.html">
                    Don’t Worry About Creativity and Inspiration.
                  </a>
                </h3>
                <div class="text">
                  Lorem ipsum dolor sit amet, ei qui essent pericula convenire
                  phaedrum lorem ipsum dolor sit amet, ei qui essent pericula
                  convenire.
                </div>
                <ul class="post-meta">
                  <li>
                    <a href="blog-detail.html">
                      <span class="icon fa fa-commenting-o"></span>
                      02
                    </a>
                  </li>
                  <li>
                    <a href="blog-detail.html">
                      <span class="icon fa fa-user"></span>
                      Admin
                    </a>
                  </li>
                  <li>
                    <a href="blog-detail.html">
                      <span class="icon fa fa-heart-o"></span>
                      03
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!--News Block-->
          <div class="news-block col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box">
              <div class="image">
                <img src="images/resource/news-12.jpg" alt="" />
                <a
                  href="images/resource/news-12.jpg"
                  class="overlay-box"
                  data-fancybox="gallery"
                  data-caption=""
                >
                  <span class="icon flaticon-full-screen"></span>
                </a>
                <div class="post-date">
                  <span>28</span>
                  dec
                </div>
              </div>
              <div class="lower-content">
                <h3>
                  <a href="blog-detail.html">
                    Wall Street Taking Notes on Spotify Debut
                  </a>
                </h3>
                <div class="text">
                  Lorem ipsum dolor sit amet, ei qui essent pericula convenire
                  phaedrum lorem ipsum dolor sit amet, ei qui essent pericula
                  convenire.
                </div>
                <ul class="post-meta">
                  <li>
                    <a href="blog-detail.html">
                      <span class="icon fa fa-commenting-o"></span>
                      02
                    </a>
                  </li>
                  <li>
                    <a href="blog-detail.html">
                      <span class="icon fa fa-user"></span>
                      Admin
                    </a>
                  </li>
                  <li>
                    <a href="blog-detail.html">
                      <span class="icon fa fa-heart-o"></span>
                      03
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!--News Block-->
          <div class="news-block col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box">
              <div class="image">
                <img src="images/resource/news-13.jpg" alt="" />
                <a
                  href="images/resource/news-13.jpg"
                  class="overlay-box"
                  data-fancybox="gallery"
                  data-caption=""
                >
                  <span class="icon flaticon-full-screen"></span>
                </a>
                <div class="post-date">
                  <span>16</span>
                  oct
                </div>
              </div>
              <div class="lower-content">
                <h3>
                  <a href="blog-detail.html">
                    Dollar Slips Versus Yen As Trade Tensions Outlook
                  </a>
                </h3>
                <div class="text">
                  Lorem ipsum dolor sit amet, ei qui essent pericula convenire
                  phaedrum lorem ipsum dolor sit amet, ei qui essent pericula
                  convenire.
                </div>
                <ul class="post-meta">
                  <li>
                    <a href="blog-detail.html">
                      <span class="icon fa fa-commenting-o"></span>
                      02
                    </a>
                  </li>
                  <li>
                    <a href="blog-detail.html">
                      <span class="icon fa fa-user"></span>
                      Admin
                    </a>
                  </li>
                  <li>
                    <a href="blog-detail.html">
                      <span class="icon fa fa-heart-o"></span>
                      03
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!--News Block-->
          <div class="news-block col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box">
              <div class="image">
                <img src="images/resource/news-14.jpg" alt="" />
                <a
                  href="images/resource/news-14.jpg"
                  class="overlay-box"
                  data-fancybox="gallery"
                  data-caption=""
                >
                  <span class="icon flaticon-full-screen"></span>
                </a>
                <div class="post-date">
                  <span>10</span>
                  sep
                </div>
              </div>
              <div class="lower-content">
                <h3>
                  <a href="blog-detail.html">
                    Asia Shares Fail To Bounce With Wall Street
                  </a>
                </h3>
                <div class="text">
                  Lorem ipsum dolor sit amet, ei qui essent pericula convenire
                  phaedrum lorem ipsum dolor sit amet, ei qui essent pericula
                  convenire.
                </div>
                <ul class="post-meta">
                  <li>
                    <a href="blog-detail.html">
                      <span class="icon fa fa-commenting-o"></span>
                      02
                    </a>
                  </li>
                  <li>
                    <a href="blog-detail.html">
                      <span class="icon fa fa-user"></span>
                      Admin
                    </a>
                  </li>
                  <li>
                    <a href="blog-detail.html">
                      <span class="icon fa fa-heart-o"></span>
                      03
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!--Styled Pagination-->
        <ul class="styled-pagination text-center">
          <li class="prev">
            <a href="#"><span class="fa fa-long-arrow-left"></span></a>
          </li>
          <li><a href="#">1</a></li>
          <li><a href="#" class="active">2</a></li>
          <li><a href="#">3</a></li>
          <li class="next">
            <a href="#"><span class="fa fa-long-arrow-right"></span></a>
          </li>
        </ul>
        <!--End Styled Pagination-->
      </div>
    </section>
    <!--End Blog Page Section-->

    <!-- Call To Action -->
    <section class="call-to-action">
      <div class="auto-container">
        <div class="inner-container clearfix">
          <h3>
            Besoin d’un conseil ? N’hésitez pas à nous contacter.
          </h3>
          <router-link to="/contact" class="contact-btn">
            Contacter
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@media (min-width: 968px) {
  .section-audit {
    .services-block .inner-box {
      min-height: 260px;
    }
  }
}
</style>

<script>
export default {
  methods: {
    prevent(e) {
      e.preventDefault()
    },
  },
}
</script>
