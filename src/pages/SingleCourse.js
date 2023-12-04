import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Loading from '../components/Loading';
import coursesData from '../data/data'; 

export default function SingleCourse() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [course, setCourse] = useState(null);

  useEffect(() => {
    setLoading(true);

    // Replace this logic with your data retrieval logic
    const selectedCourse = coursesData.find(
      (course) => course.id === parseInt(id)
    );

    if (selectedCourse) {
      setCourse(selectedCourse);
    } else {
      setCourse(null);
    }

    setLoading(false);
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!course) {
    return <h2 className="section-title">No course to display</h2>;
  } else {
    const { Name, ImageLink, Category, Info, Price, Instructor, Topics } =
      course;

    return (
      <section className="section cocktail-section">
        <Link to="/" className="btn btn-primary">
          Back to home
        </Link>
        <h2 className="section-title">{Name}</h2>
        <div className="drink">
          <img src={ImageLink} alt={Name} />
          <div className="drink-info">
            <p>
              <span className="drink-data">Name :</span> {Name}
            </p>
            <p>
              <span className="drink-data">Category :</span> {Category}
            </p>
            <p>
              <span className="drink-data">Info :</span> {Info}
            </p>
            <p>
              <span className="drink-data">Price :</span> {Price}
            </p>
            <p>
              <span className="drink-data">Instructor :</span> {Instructor}
            </p>
            <p>
              <span className="drink-data">Topics :</span> {Topics.join(', ')}
            </p>
          </div>
        </div>
      </section>
    );
  }
}
