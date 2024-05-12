import React from 'react'
import Title from './Title'
import { ToursDatas } from '../Data'


const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title={'featured'} subTitle={'tours'} />

      <div className="section-center featured-center">
        {
          ToursDatas.map((data) => {
            const { id, title, icon, iconText, date, days, image, text, price } = data;
            return (
              <article className="tour-card" key={id}>
                <div className="tour-img-container">
                  <img src={image} className="tour-img" alt="" />
                  <p className="tour-date">{date}</p>
                </div>
                <div className="tour-info">
                  <div className="tour-title">
                    <h4>{title}</h4>
                  </div>
                  <p>
                    {text}
                  </p>
                  <div className="tour-footer">
                    <p>
                      <span><i className={icon}></i></span>{iconText}
                    </p>
                    <p>{days}</p>
                    <p>{price}</p>
                  </div>
                </div>
              </article>
            )
          })

        }

      </div>
    </section>
  )
}

export default Tours
