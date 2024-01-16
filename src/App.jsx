import { useState } from "react";
import "./style.css";

function App() {
  return (
    <>
      <h1>UI\UX Notes</h1>
    <div className="intro">
    <p>Creep Notes to get started on UI\UX</p>
      <h3>What is UX?</h3>
      <p>
        Simply put, user experience design is the process of planning the
        experience a person has when they interact with a product.UX design
        focuses on the interaction that a human user has with everyday products
        and services. The goal of UX design is to make using these products and
        services, both digital or physical, easy, logical, and fun.
      </p>
      <h3>What is UI?</h3>
      <p>
        UI (User Interface) design is the user-centered approach to designing
        the aesthetics of a digital product. In essence, they create the look
        and feel of a website or application’s user interface. An interface is
        the graphical layout of the application. These interfaces should not
        only be functional, but they should be easy to use and visually
        appealing.
      </p>
    </div>
    
      <div className="videos">
      <h2> Videos to watch</h2>
      <p>Basics</p>
    <ul>
      <li>
      <a href="https://www.youtube.com/watch?v=zHAa-m16NGk&list=LL&index=7" target="_blank" > What is UI\UX?</a>
      </li>
      <li>
      <a href="https://www.youtube.com/watch?v=5CxXhyhT6Fc&list=LL&index=6" target="_blank" > Difference between UI\UX?</a>
      </li>
    </ul>
    <p>Watch this video on how you go about creating your first wireframe</p>
    <ul>
    <li>
      <a href="https://www.youtube.com/watch?v=qpH7-KFWZRI&list=LL&index=5" target="_blank" > Creating your first wireframe using Wireframe.cc</a>
      </li>
      <li>
      <a href="https://www.youtube.com/watch?v=OtTJd59E8rI" target="_blank" > Creating your first wireframe using figma</a>
      </li>
    </ul>
       <p>There are many other softwares you can use to make your wireframes but these two are some of the most well known</p>
       <p>sign up for figma: <a href="https://www.figma.com/" target="_blank" >signup for figma</a></p>
       <p>sign up for wireframe.cc: <a href="https://wireframe.cc/" target="_blank" >signup for wireframe.cc</a></p>
       <p>Learn more about Figma here: <a href="https://www.youtube.com/watch?v=II-6dDzc-80" target="_blank" >More about Figma</a></p> 
      </div>
      <div className="practical">
      <h2> Praticals</h2>
      <p>Now that you've got the theory side of things, let's try a practical exercise.</p>
     <ol>
      <li>Create a simple wireframe for a login screen on a piece of paper

      </li>
      <li>Digitatize your wireframe with either figma or wiframe.cc

      </li>
     </ol>
      </div>
     
    </>
  );
}

export default App;
