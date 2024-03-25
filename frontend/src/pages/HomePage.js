import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FeaturedBlogs from "../components/FeaturedBlogs";
import Blogs from "./Blogs";
import BlogPostPage from "./BlogPostPage";
import Layout from "../ui/Layout";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <Layout>
      <section className="hero">
        <div className="container text-end text-white pt-5 w-50">
          <h1 className="text-uppercase fw-bold display-3 mt-5">
            Everyday Urban Concrete Jungle
          </h1>
          <p className="subtitle is-4 ps-lg-5 ms-lg-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididu nt ut labore et dolore magna aliqua. Ut
            enim. ad minim veniam.
          </p>
          <NavLink to="/blog-details" className="btn btn-primary btn-lg">
            Read More
          </NavLink>
        </div>
      </section>
      <section className="mt-5 container">
        <p className="text-center mb-0">Lorem ipsum dolor</p>
        <h2 className="text-center fw-bold mb-5">TRAVEL ESSENTIALS TIPS</h2>
        <div className="card mb-3 border-0">
          <div className="row g-4">
            <div className="col-md-6">
              <img
                src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/blog-post-img-01.jpg"
                className="img-fluid"
                alt="..."
              />
            </div>
            <div className="col-md-6 pe-5">
              <div className="card-body py-0">
                <p className="card-text mb-0">
                  <small className="text-muted">October 8, 2019</small>
                </p>
                <h3 className="card-title fw-bold mb-2">
                  MOVING TROUGH: THE EVERYDAY URBAN JUNGLE OF YOUR CITY
                </h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididu nt ut labore et dolore magna
                  aliqua. Ut enim. ad minim veniam ...
                </p>
                <NavLink to="/blog-details" className="btn btn-primary btn-lg">
                  Read More
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3 border-0">
          <div className="row g-4">
            <div className="col-md-6 ps-5">
              <div className="card-body py-0">
                <p className="card-text mb-0">
                  <small className="text-muted">October 8, 2019</small>
                </p>
                <h3 className="card-title fw-bold mb-2">
                  TOP HIKING TRAILS IN THE PERUVIAN AMAZON RAIN FOREST
                </h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididu nt ut labore et dolore magna
                  aliqua. Ut enim. ad minim veniam ...
                </p>
                <NavLink to="/blog-details" className="btn btn-primary btn-lg">
                  Read More
                </NavLink>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/blog-post-img-02.jpg"
                className="img-fluid"
                alt="..."
              />
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5 container">
        <p className="text-center mb-0">Lorem ipsum dolor</p>
        <h2 className="text-center fw-bold mb-5">FEATURED BLOG POSTS</h2>
        <FeaturedBlogs />
      </section>
    </Layout>
  );
};

export default HomePage;
