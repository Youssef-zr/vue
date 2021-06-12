<template>
  <div class="section-contact">
    <!--Page Title-->
    <section
      class="page-title"
      style="background-image: url(images/background/11.jpg);"
    >
      <div class="auto-container">
        <h1>Contacter</h1>
        <ul class="page-breadcrumb">
          <li>
            <router-link to="/">Accueil</router-link>
          </li>
          <li>Contacter</li>
        </ul>
      </div>
    </section>
    <!--End Page Title-->

    <!--Default Form Section-->
    <section class="default-form-section">
      <div class="auto-container">
        <!--Title Box-->
        <div class="title-box">
          <div class="title">Écrire un message</div>
          <h2>Vous Avez Des Questions?</h2>
          <div class="text">
            Merci beaucoup pour votre intérêt pour notre entreprise et notre
            services et si vous avez des questions, veuillez nous écrire un
            message maintenant!
          </div>
        </div>

        <!--Default Form-->
        <div class="default-form style-two contact-form">
          <form method="post" action="sendemail.php" id="contact-form">
            <div class="row clearfix">
              <div class="form-group col-lg-6 col-md-6 col-sm-12">
                <input
                  type="text"
                  name="firstname"
                  value=""
                  placeholder="Votre nom"
                  required
                />
              </div>

              <div class="form-group col-lg-6 col-md-6 col-sm-12">
                <input
                  type="email"
                  name="email"
                  value=""
                  placeholder="Votre Email"
                  required
                />
              </div>

              <div class="form-group col-lg-12 col-md-12 col-sm-12">
                <textarea name="message" placeholder="Votre Message"></textarea>
              </div>

              <div class="form-group text-center col-lg-12 col-md-12 col-sm-12">
                <button type="submit" class="theme-btn message-btn">
                  Envoyer
                </button>
              </div>
            </div>
          </form>
        </div>
        <!--End Default Form-->
      </div>
    </section>
    <!--End Default Form Section-->

    <!--Contact Info Section-->
    <section class="contact-info-section">
      <div class="auto-container">
        <div class="row clearfix">
          <div class="column col-lg-4 col-md-6 col-sm-12">
            <ul>
              <li>
                <span class="icon flaticon-placeholder"></span>
                13005 Greenville Avenue
                <br />
                California, TX 70240
              </li>
            </ul>
          </div>

          <div class="column col-lg-4 col-md-6 col-sm-12">
            <ul>
              <li>
                <span class="icon flaticon-technology-2"></span>
                +1 800125 6524
                <br />
                mail@lezofinance.com
              </li>
            </ul>
          </div>

          <div class="column col-lg-4 col-md-6 col-sm-12">
            <ul>
              <li>
                <span class="icon flaticon-clock-2"></span>
                10:00am to 6:00pm
                <br />
                Sunday Closed
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!--End Contact Info Section-->
  </div>
</template>
