import React from 'react';

const Home = () => {
  return (
    <div className="row row-cols-12 row-cols-lg-6 g-2 g-lg-3 py-4">
      <a href="/exercises" className="col text-center category__link">
        <div className="category__img shadow">
          <img src="/img/exercises-icon.png" alt="Exercises" loading="lazy" />
        </div>
        <div className="pt-1">Exercises</div>
      </a>

      <a href="/goals" className="col text-center category__link">
        <div className="category__img shadow">
          <img src="/img/goals-icon.png" alt="Goals" loading="lazy" />
        </div>
        <div className="pt-1">Goals</div>
      </a>

      <a href="/articles" className="col text-center category__link">
        <div className="category__img shadow">
          <img src="/img/view-all.jpg" alt="View All articles" loading="lazy" />
        </div>
        <div className="pt-1">View All</div>
      </a>
    </div>
  );
};

export default Home;
