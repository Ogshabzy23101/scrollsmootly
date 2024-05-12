import React from 'react'
import Title from './Title'
import  {Servicedatas}  from '../Data'

const Service = () => {
  return (
    
   <section className="section services" id="services">
    <Title title={'our'} subTitle={'services'}/>
      <div className="section-center services-center">
        {Servicedatas.map((data) => {
          const { icon, text, title, id } = data
          return (<article className="service" key={id}>
            <span className="service-icon"><i className={icon}></i></span>
            <div className="service-info">
              <h4 className="service-title">{title}</h4>
              <p className="service-text">
                {text}
              </p>
            </div>
          </article>)
        })}
    </div>
   </section>
  )
}

export default Service

