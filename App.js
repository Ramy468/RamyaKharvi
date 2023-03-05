import TopBar from "./topbar/TopBar";
import React from "react";

function App() {
  return (
   <React.Fragment> 

<span class="d-block p-2 text-bg-success"><h2 className="text-center text-capitalize my-3">Blog-App</h2></span>
<span class="d-block p-2 text-bg-white"></span>


<div class="container text-center">


  <div class="row">
    <div class="col-2">
    
   
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
            <i className="topIcon fab fa-pinterest-square"></i>
            <i className="topIcon fab fa-instagram-square"></i>
           
    </div>

  <div className="col-8">
    <ul className="topList">
                    <li className="topListItem"><button type="button" class="btn btn-info">HOME</button></li>
                    <li className="topListItem"><button type="button" class="btn btn-info">ABOUT</button></li>
                    <li className="topListItem"><button type="button" class="btn btn-info">CONTACT</button></li>
                    <li className="topListItem"><button type="button" class="btn btn-info">GALLERY</button></li>
                    <li className="topListItem"><button type="button" class="btn btn-info">BLOG</button></li>
                </ul>
    </div>
    <div class="col"></div>
   
    <div className="topRight">
    <img src="https://picsum.photos/200/389" class="rounded-circle" alt="Cinque Terre" width="40" height="40"/>
    <i className="topSearchIcon fas fa-search"></i>
    
    
    </div>
  </div>
</div>
       

       <span class="d-block p-2 text-bg-white"></span>


<nav class="navbar navbar-expand-sm bg-warning">
  <div class="container-fluid">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
      </li>
     <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    
  </div>
</nav>

      
<marquee width="100%" direction="right" height="100px"><h1 className="text-center text-primary text-capitalize my-3">
This is my blog,Welcome to my channel.</h1>
</marquee>


    <div class="container text-center">
   
   <div class="row row-cols-4">
     <div class="col"><div class="card">
     <img src="https://picsum.photos/200/387" class="card-img-top" alt="..." />
   <div class="card-body">
     <p class="card-text text-white bg-warning">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   </div>
 </div></div>
     <div class="col"><div class="card">
     <img src="https://picsum.photos/200/357" class="card-img-top" alt="..." />
   <div class="card-body">
     <p class="card-text text-white bg-danger">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   </div>
 </div></div>

 

 <div class="col"><div class="card">
   <img src="https://picsum.photos/200/303" class="card-img-top" alt="..." />
   <div class="card-body">
     <p class="card-text text-white bg-info">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   </div>
 </div></div>

<div class="container mt-5">
    <div class="card bg-success-subtle">
      <div class="row">
        <div class="col-md-4">
  
         
        <img src="https://picsum.photos/200/349" class="rounded-circle" alt="Cinque Terre" width="60" height="60"/>
          <span class="d-block p-2 text-bg-white"></span>
          <img src="https://picsum.photos/200/372" class="rounded-circle" alt="Cinque Terre" width="60" height="60"/>
          <span class="d-block p-2 text-bg-white"></span>
          <img src="https://picsum.photos/200/378" class="rounded-circle" alt="Cinque Terre" width="60" height="60"/>
          <span class="d-block p-2 text-bg-white"></span>
          <img src="https://picsum.photos/200/375" class="rounded-circle" alt="Cinque Terre" width="60" height="60"/>
          <span class="d-block p-2 text-bg-white"></span>

          <img src="https://picsum.photos/200/347"class="img-fluid"></img>
          <span class="d-block p-2 text-bg-white"></span>
          
          
        </div>
          <div class="col-md-8 bg-danger-subtle">
          <div class="d-inline-flex p-2">I'm an inline flexbox container!</div>
          
            <h2 class="card-title mt-2">Latest Post</h2>
            <p class="text-info">Lorem ipsum dolar sit amet cohjgjghf</p>

            <ul class="list-group list-group-flush">
  <li class="list-group-item text-white bg-info">New Sport Blog</li>
 
  <li class="list-group-item text-white bg-danger">A travel blog for youngster</li>
  <li class="list-group-item text-white bg-primary">Fashion  Blog</li>
  <li class="list-group-item text-white bg-warning">Sports Blog</li>
  <li class="list-group-item text-white bg-success">Food Blog</li>
</ul>

        </div>
      </div>
    </div>
  </div>




<div class="split left">
<span class="d-block p-2 text-bg-white"></span>
  
    <img src="https://picsum.photos/200/334" alt=""/>
    <h2>Jane Flex</h2>
    <p class="text-warning">Some text.</p>
  </div>


<div class="split right">
<span class="d-block p-2 text-bg-white"></span>
  
    <img src="https://picsum.photos/200/307" alt=""/>
    <h2>John Doe</h2>
    <p class="text-primary">Some text here too.</p>
  </div>

 

<div class="split left">
<span class="d-block p-2 text-bg-white"></span>

    <img src="https://picsum.photos/200/308" alt=""/>
    <h2>Jane Flex</h2>
    <p class="text-danger">Some text.</p>
  </div>


<div class="split right">
<span class="d-block p-2 text-bg-white"></span>
  
    <img src="https://picsum.photos/200/309" alt=""/>
    <h2>John Doe</h2>
    <p class="text-success">Some text here too.</p>
  </div>



<div class="container-fluid p-5 bg-info text-white text-center">
<span class="d-block p-2 text-bg-white"></span>
  
    <img src="https://picsum.photos/200/311" alt=""/>
    <h2>John Doe</h2>
    <p>Some text here too.</p>
  </div>
  

<div class="container-fluid p-5 bg-warning text-white text-center">
<span class="d-block p-2 text-bg-white"></span>

    <img src="https://picsum.photos/200/312" alt=""/>
    <h2>Jane Flex</h2>
    <p>Some text here too.</p>
  </div>
  


<div class="container-fluid p-5 bg-success text-white text-center">
<span class="d-block p-2 text-bg-white"></span>

 
    <img src="https://picsum.photos/200/313" alt=""/>
    <h2>John Doe</h2>
    <p>Some text here too.</p>
  </div>

  
<div class="container-fluid p-5 bg-primary text-white text-center">
<span class="d-block p-2 text-bg-white"></span>

 
<img src="https://picsum.photos/200/314" alt=""/>
<h2>John Doe</h2>
<p>Some text here too.</p>
</div>
 

<div class="container-fluid p-5 bg-primary text-white text-center">
<span class="d-block p-2 text-bg-white"></span>
  <h1>Section 1</h1>
  <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
  <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
</div>

<div class="container-fluid p-5 bg-danger text-white text-center">


  <h1>Section 1</h1>
  <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
  <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
</div>

<div class="container-fluid p-5 bg-info text-white text-center">

  <h1>Section 1</h1>
  <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
  <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
</div>

<div class="container-fluid p-5 bg-dark text-white text-center">

  <h1>Section 1</h1>
  <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
  <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
</div> </div></div>



</React.Fragment> 
  );
 
};

export default App;
