import React, { useEffect, useState } from 'react';
import './testimonials.css';
import axios from 'axios';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function Testimonials() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/testimonials');
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleCreate = async () => {
    try {
      await axios.post('http://localhost:5000/api/testimonials/create');
      fetchTestimonials(); // Fetch testimonials again to update the data
      console.log('Testimonials created');
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete('http://localhost:5000/api/testimonials');
      setData([]);
      console.log('Testimonials deleted');
    } catch (error) {
      console.error(error);
    }
  };

  const handleToggleButtons = () => {
    setShowButtons(prevState => !prevState);
  };

  return (
    <section id="testimonials">
      <div className="toggle-buttons">
        
        <button className="toggle-button" onClick={handleToggleButtons}>
          {showButtons ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>

      {showButtons && (
        <div className="button-group">
          <button className="create-button" onClick={handleCreate}>
            Create Testimonials
          </button>
          <button className="delete-button" onClick={handleDelete}>
            Delete Testimonials
          </button>
        </div>
      )}

      <Swiper
        className="container testimonials__container"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {loading ? (
          <p>Loading...</p>
        ) : (
          data.map(({ avatar, name, review }, index) => (
            <SwiperSlide className="testimonial" key={index}>
              <div className="client__avatar">
                <img src={`http://localhost:5000/${avatar}`} alt="Avatar" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </section>
  );
}

export default Testimonials;
