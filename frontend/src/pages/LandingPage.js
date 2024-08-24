import React from 'react';

  const LandingPage = () => {
    return (
      <div className="row flex-lg-row align-items-center 5-g py-4 mb-4">
        <div className="col-12 col-lg-6">
            <img src={process.env.PUBLIC_URL + '/landing-design.png'} width="607" height="410" className="d-block mx-lg-auto img-fluid image-padding" loading="lazy" alt="Your health starts here."/>
        </div>

        <div className="col-12 col-lg-6">
          <h1 className="display-5 fw-bold mb-3">Welcome to Uzima Path</h1>
          <p className="lead">
              Uzima Path is a cutting-edge health and wellness app designed to empower you on your journey to optimal well-being. Our comprehensive platform offers personalized health insights, expert guidance, and a supportive community to help you achieve your health goals.
          </p>

          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <a href="/signup" className="btn btn-primary btn-dark btn-lg px-4 me-md-2">Sign Up</a>
              <a href="/login" className="btn btn-outline-secondary btn-lg px-4 me-md-2">Sign In</a>
          </div>
        </div>
      </div>
    );
  }

  export default LandingPage;
