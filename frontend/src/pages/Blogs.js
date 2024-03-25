import React from "react";
import Header from "../components/Header";
import Layout from "../ui/Layout";
import { NavLink } from "react-router-dom";

const Blogs = () => {
  return (
    <Layout>
      <header className="blogs p-5">
        <h1 className="py-5 display-5 fw-bold text-white">Blogs</h1>
      </header>
      <div className="container mt-5">
        <h2 className="display-6 fw-bold text-center">All Blogs</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-4">
          <div className="col">
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididu nt ut labore et dolore magna
                  aliqua...
                </p>
                <NavLink to="/blog-details" className="btn btn-primary btn-lg">
                  Read More
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col">
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididu nt ut labore et dolore magna
                  aliqua...
                </p>
                <NavLink to="/blog-details" className="btn btn-primary btn-lg">
                  Read More
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col">
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididu nt ut labore et dolore magna
                  aliqua...
                </p>
                <NavLink to="/blog-details" className="btn btn-primary btn-lg">
                  Read More
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col">
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididu nt ut labore et dolore magna
                  aliqua...
                </p>
                <NavLink to="/blog-details" className="btn btn-primary btn-lg">
                  Read More
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col">
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididu nt ut labore et dolore magna
                  aliqua...
                </p>
                <NavLink to="/blog-details" className="btn btn-primary btn-lg">
                  Read More
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col">
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididu nt ut labore et dolore magna
                  aliqua...
                </p>
                <NavLink to="/blog-details" className="btn btn-primary btn-lg">
                  Read More
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blogs;
