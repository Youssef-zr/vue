<template>
  <div class="section-footer text-left">
    <!-- Main Footer -->
    <footer
      class="footer-style-two"
      style="background-image: url(images/background/4.jpg);"
    >
      <div class="auto-container">
        <div class="row clearfix">
          <!--Content Column-->
          <div class="content-column col-lg-7 col-md-12 col-sm-12">
            <div class="inner-column">
              <h2 class="text-capitalize">à propos de nous</h2>
              <div class="text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries.
              </div>
              <div class="copyright-box">
                <div class="logo">
                  <a href="#"><img src="images/logo-small.png" alt="" /></a>
                </div>
                <div class="copyright">
                  Droits d'auteur
                  <span v-text="date"></span>
                  . Tous les droits sont Réservés
                </div>
              </div>
            </div>
          </div>
          <!--Info Column-->
          <div class="info-column col-lg-5 col-md-12 col-sm-12">
            <div class="inner-column">
              <h2 class="text-capitalize">contacter</h2>
              <div class="number">05.00.00.00.00</div>
              <ul class="info-list">
                <li>
                  <span>Email :</span>
                  info@sentiment.com
                </li>
                <li>
                  <span>horaires du travail :</span>
                  09:00 am - 17:00 pm
                </li>
              </ul>
              <ul class="social-icon-two">
                <li>Suivez Nous :</li>
                <li>
                  <a href="#"><span class="fa fa-facebook"></span></a>
                </li>
                <li>
                  <a href="#"><span class="fa fa-twitter"></span></a>
                </li>
                <li>
                  <a href="#"><span class="fa fa-google-plus"></span></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- End Main Footer -->
  </div>
</template>

<style lang="scss">
.text-capitalize {
  text-transform: capitalize;
}
</style>

<script>
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    }
  },
}
</script>
