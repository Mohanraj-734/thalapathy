import React from "react";
import './portfolio.css';
import img from './port.img.jpeg';

function Portfolio() {
  return (
    <>
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <a class="navbar-brand text-white " href="#">Dheeraj Jha</a>
          <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon bar "></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active text-white" aria-current="page" href="#"><i class="fa-solid fa-house nav1"></i> Home</a>
              <a class="nav-link text-white" href="#"><i class="fa-brands fa-microsoft nav1"></i> UI</a>
              <a class="nav-link text-white" href="#"><i class="fa-regular fa-comment-dots nav1"></i> Blogs</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="one">
      <div className="title1">
      <h1>Hi! Nice to meet you <br/> <h1 className="title">I'm Dheeraj Jha</h1> </h1>
      </div>
      <div className="one1">
        <div className="para">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi excepturi accusantium dolore quis laboriosam incidunt suscipit alias tenetur, non numquam, exercitationem id perferendis molestiae illum at cupiditate. Aperiam voluptates illum dignissimos cum quos. Provident sed laudantium laborum in quia architecto ex, eum quis animi excepturi maxime iste beatae accusantium autem dignissimos ipsam, delectus dolor eos!</p>
          <div className="icons">
            <a href="#"><i class="fa-brands fa-instagram fa-2xl insta"></i></a>
            <a href="#"><i class="fa-brands fa-youtube fa-2xl youtube"></i></a>
            <a href="#"><i class="fa-brands fa-linkedin fa-2xl in"></i></a>
            <a href="#"><i class="fa-brands fa-twitter fa-2xl tweet"></i></a>
            <a href="#"><i class="fa-brands fa-behance fa-2xl be"></i></a>
            <a href="#"><i class="fa-brands fa-square-github fa-2xl git"></i></a>
          </div>
          <button type="button" class="btn btn-primary btn1">Contact Me</button>
          <button type="button" class="btn btn-light btn2">Downdolad CV</button>
        </div>
        <div className="para1">
          <img src={img} alt="img" />
        </div>
        </div>
      </div>


    </>
  )
}
export default Portfolio