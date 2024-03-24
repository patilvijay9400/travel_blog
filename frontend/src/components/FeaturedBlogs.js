import React from "react";
import ReactOwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const FeaturedBlogs = () => {
  const options = {
    loop: true,
    margin: 10,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
    animatOut: "slideOutUp",
    autoplayHoverPause: true,
    dots: true,
    responsive: {
      768: {
        items: 3,
      },
      540: {
        items: 1,
        innerWidth: "100%",
        outerWidth: "100%",
      },
    },
  };
  return (
    <div>
      <ReactOwlCarousel className="owl-theme" {...options}>
        <div className="item">
          <div class="card border-0 rounded-0">
            <img
              src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/blog-post-img-45.jpg"
              class="card-img-top rounded-0"
              alt="..."
            />
            <div class="card-body px-0">
              <a href="#" class="card-link">
                October 8, 2019
              </a>
              <a href="#" class="card-link">
                Alisa Michaels
              </a>
              <h5 class="card-title">
                MY FAVORITE HIKING TRAILS AROUND BRAZIL
              </h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididu nt ut labore et dolore magna aliqua...
              </p>
              <button type="button" className="btn btn-primary">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="item">
          <div class="card border-0 rounded-0">
            <img
              src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/blog-post-img-45.jpg"
              class="card-img-top rounded-0"
              alt="..."
            />
            <div class="card-body px-0">
              <a href="#" class="card-link">
                October 8, 2019
              </a>
              <a href="#" class="card-link">
                Alisa Michaels
              </a>
              <h5 class="card-title">
                MY FAVORITE HIKING TRAILS AROUND BRAZIL
              </h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididu nt ut labore et dolore magna aliqua...
              </p>
              <button type="button" className="btn btn-primary">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="item">
          <div class="card border-0 rounded-0">
            <img
              src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/blog-post-img-45.jpg"
              class="card-img-top rounded-0"
              alt="..."
            />
            <div class="card-body px-0">
              <a href="#" class="card-link">
                October 8, 2019
              </a>
              <a href="#" class="card-link">
                Alisa Michaels
              </a>
              <h5 class="card-title">
                MY FAVORITE HIKING TRAILS AROUND BRAZIL
              </h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididu nt ut labore et dolore magna aliqua...
              </p>
              <button type="button" className="btn btn-primary">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="item">
          <div class="card border-0 rounded-0">
            <img
              src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/blog-post-img-45.jpg"
              class="card-img-top rounded-0"
              alt="..."
            />
            <div class="card-body px-0">
              <a href="#" class="card-link">
                October 8, 2019
              </a>
              <a href="#" class="card-link">
                Alisa Michaels
              </a>
              <h5 class="card-title">
                MY FAVORITE HIKING TRAILS AROUND BRAZIL
              </h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididu nt ut labore et dolore magna aliqua...
              </p>
              <button type="button" className="btn btn-primary">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="item">
          <div class="card border-0 rounded-0">
            <img
              src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/blog-post-img-45.jpg"
              class="card-img-top rounded-0"
              alt="..."
            />
            <div class="card-body px-0">
              <a href="#" class="card-link">
                October 8, 2019
              </a>
              <a href="#" class="card-link">
                Alisa Michaels
              </a>
              <h5 class="card-title">
                MY FAVORITE HIKING TRAILS AROUND BRAZIL
              </h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididu nt ut labore et dolore magna aliqua...
              </p>
              <button type="button" className="btn btn-primary">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="item">
          <div class="card border-0 rounded-0">
            <img
              src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/blog-post-img-45.jpg"
              class="card-img-top rounded-0"
              alt="..."
            />
            <div class="card-body px-0">
              <a href="#" class="card-link">
                October 8, 2019
              </a>
              <a href="#" class="card-link">
                Alisa Michaels
              </a>
              <h5 class="card-title">
                MY FAVORITE HIKING TRAILS AROUND BRAZIL
              </h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididu nt ut labore et dolore magna aliqua...
              </p>
              <button type="button" className="btn btn-primary">
                Read More
              </button>
            </div>
          </div>
        </div>
      </ReactOwlCarousel>
    </div>
  );
};

export default FeaturedBlogs;
