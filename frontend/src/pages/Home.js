import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home'>
            <section>
                <div className="row flex-lg-row align-items-center 5-g py-4 mb-4">
                    <div className="col-12 col-lg-6">
                        <img src={process.env.PUBLIC_URL + '/land-1.jpg'} width="607" height="510" className="home-img d-block mx-lg-auto img-fluid" loading="lazy" alt="Healthy living." />
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
            <section className='article-secion pb-4 pt-4'>
                <div>
                    <div className="d-flex mb-2 align-items-center">
                        <h3>Latest Articles</h3>
                    </div>
                    <div className='article-post'>
                        <h4>The Importance of Setting Achievable Goals</h4>
                        <p>Learn how setting realistic and achievable goals can lead to long-term success in your fitness journey.</p>
                        <Link to={"https://jackcanfield.com/blog/goal-setting/"} className='col tex-center article__link'>Read More</Link>
                    </div>
                    <div className='article-post'>
                        <h4>How to Stay Motivated</h4>
                        <p>Discover tips and tricks to stay motivated and on track with your fitness goals.</p>
                        <Link to={"https://www.snapfitness.com/us/blog/10-tips-to-stay-motivated-with-your-fitness-goals/"} className='col tex-center article__link'>Read More</Link>
                    </div>
                    <div className='article-post'>
                        <h4>How to Track Your Progress</h4>
                        <p>Discover the best ways to track your progress and stay on track with your fitness goals.</p>
                        <Link to={"https://www.nutrisense.io/blog/how-to-track-your-fitness?srsltid=AfmBOooQYqqFtGHLYW7RZoDG3j8K2ufe-MkjSZAUeXl-GyP1ywxh74NT/"} className='col tex-center article__link'>Read More</Link>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Home;
