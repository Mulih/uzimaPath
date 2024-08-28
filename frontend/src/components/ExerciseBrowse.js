// ExerciseBrowse.js
import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { useAuthContext } from '../Hooks/useAuthContext.js'
const ExerciseBrowse = () => {
  const { category } = useParams();
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { user } = useAuthContext();

  useEffect(() => {
    fetch(`https://api.sebhulse.com/v1/filter/?type=${category}&level=beginner&area=full`, {
        withCredentials: true,
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${user.token}`,
            'Access-Control-Allow-Origin': '*'
        }
    })
      .then(response => {
        setExercises(response.data[category]);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [category, user]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)} Exercises</h2>
      <div className="row row-cols-12 row-cols-lg-6 g-2 g-lg-3 py-4">
        {exercises.map((exercise, index) => (
          <div key={index} className="col text-center category__link">
            <a href={`/exercises/${category}/${exercise.id}`}>
              <div className="category__img shadow">
                {/* Assuming you have an image URL */}
                <img src="/path/to/exercise/image.jpg" alt={exercise.name} loading="lazy" />
              </div>
              <div className="pt-1">{exercise.name}</div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExerciseBrowse;