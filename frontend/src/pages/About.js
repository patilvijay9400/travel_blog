import React from "react";
import Layout from "../ui/Layout";

const About = () => {
  return (
      <Layout>
          <header className="about p-5">
              <h1 className="py-5 display-5 fw-bold text-white">About Us</h1>
              
          </header>
      <div className="container mt-5 text-center">
        <h2 className="display-6 fw-bold">About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec
          magna nec arcu sodales tincidunt. Proin et est nec tellus condimentum
          euismod. Vestibulum auctor volutpat dui, vel condimentum lacus
          vestibulum sit amet. Mauris congue justo in ipsum varius fringilla.
          Phasellus posuere justo sit amet efficitur feugiat. Aliquam vel nulla
          consequat, vulputate metus eget, interdum nibh. Fusce volutpat, risus
          ut convallis consectetur, orci nunc fermentum dui, vel lobortis eros
          lacus at nisi. Integer facilisis elit sit amet pulvinar lobortis.
        </p>
        <p>
          Quisque tincidunt vitae orci eget dictum. Morbi bibendum massa ac
          mauris pharetra consectetur. Donec gravida felis nec tellus sodales
          interdum. Nulla eu neque sed felis varius feugiat ac et nunc. Aenean
          sagittis magna vel eros placerat, sed tristique enim vulputate. Fusce
          vehicula magna nec odio dapibus, eget fermentum orci efficitur. Cras
          sit amet ex eu velit egestas feugiat. In ac libero eget sapien
          venenatis tempus vitae vel odio.
        </p>
      </div>
    </Layout>
  );
};

export default About;
