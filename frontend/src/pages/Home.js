import React from 'react';

  const Home = () => {
    // const categoriesList = categories.map((category, index) => (
    //   <a key={index} href={`/categories/${category.name}`} className="col text-center category__link">
    //     <div className="category__img shadow">
    //       <img src={`/img/${category.image}`} alt={category.name} loading="lazy" />
    //     </div>
    //     <div className="pt-1">{category.name}</div>
    //   </a>
    // ));

    return (
      <div className="row row-cols-12 row-cols-lg-6 g-2 g-lg-3 py-4">
        {/* {categoriesList} */}
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
