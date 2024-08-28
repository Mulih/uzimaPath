import React from 'react';
// import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home'>
            <section>
                <div className="row flex-lg-row align-items-center 5-g py-4 mb-4">
                    <div className="col-12 col-lg-6">
                        <img src={process.env.PUBLIC_URL + '/land-1.jpg'} width="607" height="510" className="d-block mx-lg-auto img-fluid" loading="lazy" alt="Healthy living." />
                    </div>

                    <div className="col-12 col-lg-6">
                        <h1 className="display-5 fw-bold mb-3">Welcome to Uzima Path</h1>
                        <p className="lead">
                            Uzima Path is Your personal health and fitness tracker designed to help you achieve your goals.
                            Our comprehensive platform offers personalized health insights, expert guidance, and a supportive community to help you achieve your health goals.
                        </p>

                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <a href="/explore-latest" className="btn btn-primary btn-dark btn-lg px-4 me-md-2">Explore Latest</a>
                            <a href="/show-random" className="btn btn-outline-secondary btn-lg px-4 me-md-2">Random Workout</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Home;
