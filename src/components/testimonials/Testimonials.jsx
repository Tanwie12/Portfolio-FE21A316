import React, { useState } from 'react';
import './testimonials.css';
import AVT1 from '../../assets/avatar1.jpg';
import AVT2 from '../../assets/avatar2.jpg';
import AVT3 from '../../assets/avatar3.jpg';
import AVT4 from '../../assets/avatar4.jpg';




import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function Testimonials() {
  const data = [
    {
      avatar: AVT1,
      name: 'Lebron James',
      review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa exercitationem dolores earum.',
    },
    {
      avatar: AVT2,
      name: 'Mike Tyson',
      review: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      avatar: AVT3,
      name: 'Mike',
      review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa exercitationem dolores earum.',
    },
    {
      avatar: AVT4,
      name: 'Bruno',
      review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa exercitationem dolores earum.',
    },
  ];

  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
           
            <SwiperSlide className="testimonial" key={index} onClick={() => setSelectedTestimonial(index)}>
              <div className="client__avatar">
                <img src={avatar} alt="Avatar" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          
          );
        })}
      </Swiper>

      {selectedTestimonial !== null && (
        <div className="testimonial-popup">
          <div className="testimonial-content">
            <img src={data[selectedTestimonial].avatar} alt="Avatar" />
            <h5>{data[selectedTestimonial].name}</h5>
            <p>{data[selectedTestimonial].review}</p>
            <button className="close-button" onClick={() => setSelectedTestimonial(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Testimonials;
