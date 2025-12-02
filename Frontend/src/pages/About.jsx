import React from 'react'

function About() {
  return (
    <div>
      <div>
        <div class="wrap">
			<div class="container">
				<div class="row justify-content-between">
						<div class="col-12 col-md d-flex align-items-center">
							<p class="mb-0 phone"><span class="mailus">Phone no:</span> <a href="#">+00 1234 567</a> or <span class="mailus">email us:</span> <a href="#">emailsample@email.com</a></p>
						</div>
						<div class="col-12 col-md d-flex justify-content-md-end">
							<div class="social-media">
				    		<p class="mb-0 d-flex">
				    			<a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-facebook"><i class="sr-only">Facebook</i></span></a>
				    			<a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-twitter"><i class="sr-only">Twitter</i></span></a>
				    			<a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-instagram"><i class="sr-only">Instagram</i></span></a>
				    			<a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-dribbble"><i class="sr-only">Dribbble</i></span></a>
				    		</p>
			        </div>
						</div>
				</div>
			</div>
		</div>

      <section class="hero-wrap hero-wrap-2" style={{
        backgroundImage: "url('/assets/images/bg_2.jpg')"}} data-stellar-background-ratio="0.5">
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text align-items-end">
          <div class="col-md-9  pb-5">
          	<p class="breadcrumbs mb-2"><span class="mr-2"><a href="index.html">Home <i class="fa fa-chevron-right"></i></a></span> <span>About us <i class="fa fa-chevron-right"></i></span></p>
            <h1 class="mb-0 bread">About Us</h1>
          </div>
        </div>
      </div>
    </section>
      {/* about section */}
      <section class="ftco-section ftco-no-pt ftco-no-pb">
    	<div class="container">
    		<div class="row d-flex no-gutters">
    			<div class="col-md-6 d-flex">
    				<div class="img d-flex align-items-center justify-content-center py-5 py-md-0" style={{backgroundImage: "url('/assets/images/about.jpg')"}}>
    					<div class="time-open-wrap">
    						<div class="desc p-4">
		    					<h2>Business Hours</h2>
			              <div class="opening-hours">
			              	<h4>Opening Days:</h4>
			              	<p class="pl-3">
			              		<span><strong>Monday – Friday:</strong> 9am to 20 pm</span>
			              		<span><strong>Saturday :</strong> 9am to 17 pm</span>
			              	</p>
			              	<h4>Vacations:</h4>
			              	<p class="pl-3">
			              		<span>All Sunday Days</span>
			              		<span>All Official Holidays</span>
			              	</p>
			              </div>
		    				</div>
								<div class="desc p-4 bg-secondary">
									<h3 class="heading">For Emergency Cases</h3>
									<span class="phone">(+01) 123 456 7890</span>
								</div>
    					</div>
    				</div>
    			</div>
    			<div class="col-md-6 pl-md-5 pt-md-5">
    				<div class="row justify-content-start py-5">
		          <div >
		          	<span class="subheading">Welcome to Cleaning Company</span>
		            <h2 class="mb-4">Let's make you fresher than ever</h2>
		            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
		          </div>
		        </div>
						<div class="row ftco-counter py-5" id="section-counter">
		          <div>
		            <div class="block-18">
		              <div class="text">
		                <strong class="number" data-number="45">5</strong>
		              </div>
		              <div class="text">
		              	<span>Years of <br/>Experienced</span>
		              </div>
		            </div>
		          </div>
		          <div className='mx-4'>
		            <div class="block-18">
		              <div class="text">
		                <strong class="number" data-number="2342">600</strong>
		              </div>
		              <div class="text">
		              	<span>Happy <br/>Customers</span>
		              </div>
		            </div>
		          </div>
		          <div className='mx-2'>
		            <div class="block-18">
		              <div class="text">
		                <strong class="number" data-number="30">450</strong>
		              </div>
		              <div class="text">
		              	<span>Building <br/>Cleaned</span>
		              </div>
		            </div>
		          </div>
		        </div>
	        </div>
        </div>
    	</div>
    </section>
      {/* about section ends */}

      <section className='ftco-section mt-5'>
			<div class="container">
				<div class="row">
					<div class="col-md-12 col-lg-3 pr-md-4 pb-lg-0 pb-4">
						<div class="heading-section  text-center text-lg-left">
	          	<span class="subheading">Team &amp; Staff</span>
	            <h2>Our Team</h2>
	            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
	            <p><a href="#" class="btn btn-secondary">View All Staff</a></p>
	          </div>
					</div>
					<div class="col-md-4 col-lg-3 d-flex">
						<div class="staff">
							<div class="img-wrap d-flex align-items-stretch">
								<div class="img align-self-stretch" style={{
        backgroundImage: "url('/assets/images/staff-1.jpg')", // Update path as needed
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh'
      }}></div>
							</div>
							<div class="text pt-3 px-3 pb-4 text-center">
								<h3>Lloyd Wilson</h3>
								<span class="position mb-2">Office Cleaner</span>
								<div class="faded">
									<ul class="ftco-social text-center">
		                <li ><a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-twitter"></span></a></li>
		                <li ><a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-facebook"></span></a></li>
		                <li ><a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-google"></span></a></li>
		                <li ><a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-instagram"></span></a></li>
		              </ul>
	              </div>
							</div>
						</div>
					</div>
					<div class="col-md-4 col-lg-3  d-flex">
						<div class="staff">
							<div class="img-wrap d-flex align-items-stretch">
								<div class="img align-self-stretch" style={{
        backgroundImage: "url('/assets/images/staff-2.jpg')", // Update path as needed
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh'
      }} ></div>
							</div>
							<div class="text pt-3 px-3 pb-4 text-center">
								<h3>Lloyd Wilson</h3>
								<span class="position mb-2">Office Cleaner</span>
								<div class="faded">
									<ul class="ftco-social text-center">
		                <li ><a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-twitter"></span></a></li>
		                <li ><a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-facebook"></span></a></li>
		                <li ><a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-google"></span></a></li>
		                <li ><a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-instagram"></span></a></li>
		              </ul>
	              </div>
							</div>
						</div>
					</div>
					<div class="col-md-4 col-lg-3  d-flex">
						<div class="staff">
							<div class="img-wrap d-flex align-items-stretch">
								<div class="img align-self-stretch" style={{
        backgroundImage: "url('/assets/images/staff-3.jpg')", // Update path as needed
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh'
      }}></div>
							</div>
							<div class="text pt-3 px-3 pb-4 text-center">
								<h3>Lloyd Wilson</h3>
								<span class="position mb-2">Office Cleaner</span>
								<div class="faded">
									<ul class="ftco-social text-center">
		                <li ><a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-twitter"></span></a></li>
		                <li ><a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-facebook"></span></a></li>
		                <li ><a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-google"></span></a></li>
		                <li ><a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-instagram"></span></a></li>
		              </ul>
	              </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

      <section class="ftco-section ftco-intro mt-5" style={{
        backgroundImage: "url('/assets/images/bg_3.jpg')"}} data-stellar-background-ratio="0.5">
    	<div class="overlay"></div>
    	<div class="container">
    		<div class="row justify-content-center">
    			<div class="col-md-8 text-center">
    				<h2>Together we will explore new things</h2>
    				<a href="" class="icon-video d-flex align-items-center justify-content-center"><span class="fa fa-play"></span></a>
    			</div>
    		</div>
    	</div>
    </section>

    <footer class="footer ftco-section">
			<div class="container">
				<div class="row">
					<div class="col-md-6 col-lg-3 mb-4 mb-md-0">
						<h2 class="footer-heading">Cleaning Company</h2>
						<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
						<ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-4">
              <li><a href="#"><span class="fa fa-twitter"></span></a></li>
              <li ><a href="#"><span class="fa fa-facebook"></span></a></li>
              <li ><a href="#"><span class="fa fa-instagram"></span></a></li>
            </ul>
					</div>
					<div class="col-md-6 col-lg-3 mb-4 mb-md-0">
						<h2 class="footer-heading">Latest News</h2>
						<div class="block-21 mb-4 d-flex">
              <a class="img mr-4 rounded" style={{
        backgroundImage: "url('/assets/images/image_2.jpg')"}}></a>
              <div class="text">
                <h3 class="heading"><a href="#">Even the all-powerful Pointing has no control about</a></h3>
                <div class="meta">
                  <div><a href="#"><span class="icon-calendar"></span> Mar. 04, 2020</a></div>
                  <div><a href="#"><span class="icon-person"></span> Admin</a></div>
                  <div><a href="#"><span class="icon-chat"></span> 19</a></div>
                </div>
              </div>
            </div>
            <div class="block-21 mb-4 d-flex">
              <a class="img mr-4 rounded" style={{
        backgroundImage: "url('/assets/images/image_1.jpg')"}}></a>
              <div class="text">
                <h3 class="heading"><a href="#">Even the all-powerful Pointing has no control about</a></h3>
                <div class="meta">
                  <div><a href="#"><span class="icon-calendar"></span> Mar. 04, 2020</a></div>
                  <div><a href="#"><span class="icon-person"></span> Admin</a></div>
                  <div><a href="#"><span class="icon-chat"></span> 19</a></div>
                </div>
              </div>
            </div>
					</div>
					<div class="col-md-6 col-lg-3 pl-lg-5 mb-4 mb-md-0">
						<h2 class="footer-heading">Quick Links</h2>
						<ul class="list-unstyled">
              <li><a href="#" class="py-1 d-block">Home</a></li>
              <li><a href="#" class="py-1 d-block">About</a></li>
              <li><a href="#" class="py-1 d-block">Services</a></li>
              <li><a href="#" class="py-1 d-block">Works</a></li>
              <li><a href="#" class="py-1 d-block">Blog</a></li>
              <li><a href="#" class="py-1 d-block">Contact</a></li>
            </ul>
					</div>
					<div class="col-md-6 col-lg-3 mb-4 mb-md-0">
						<h2 class="footer-heading">Have a Questions?</h2>
						<div class="block-23 mb-3">
              <ul>
                <li><span class="icon fa fa-map-marker"></span><span class="text">Sparkle Cleaning, Gandipuram, Coimbatore.</span></li>
                <li><a href="#"><span class="icon fa fa-phone"></span><span class="text">+2 392 3929 210</span></a></li>
                <li><a href="#"><span class="icon fa fa-paper-plane"></span><span class="text">info@yourdomain.com</span></a></li>
              </ul>
            </div>
					</div>
				</div>
				<div class="row mt-5">
            <div class="col-md-12 text-center">
            </div>
			</div>
            </div>
		</footer>
      {/* footer ends */}

    </div>
    </div>
  )
}

export default About