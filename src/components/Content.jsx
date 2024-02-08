import React from 'react';
import Student from '../assets/student image.jpg';

export const Content = () => {
    return (
        <div className='container hero d-flex flex-column flex-lg-row justify-content-between align-items-center text-center text-lg-start fw-bold'>
            <section className='sect1 mb-2 mb-lg-0'>
                <h2 className='fw-medium'>Welcome to</h2>
                <h1 className='fw-bolder'>Nebula Nexus<br />Innovations</h1>
                <p>"Welcome to our educational hub, where we believe<br />
                    in a hands-on approach to learning. Our programs go<br />
                    beyond theory, focusing on practical knowledge that<br />
                    prepares students for real-world challenges. Immerse yourself<br />
                    in an educational experience that empowers you with the skills<br />
                    needed to thrive in today's dynamic industries."
                </p>
                <button className='btn btn-dark fs-5'>About Us</button>
            </section>
            <section className='sect2'>
                <img src={Student} alt="" className="img-fluid" />
            </section>
        </div>
    )
}
