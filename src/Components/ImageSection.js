import React from 'react';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="about-info">
                <h4>I am<span> Yogita Khurana</span></h4>
                <p className="about-text">

                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Speciality</p>
                    </div>
                    <div className="right-section">
                        <p>: Yogita Khurana</p>
                        <p>: 20</p>
                        <p>: Indian</p>
                        <p>: English, Hindi</p>
                        <p>: Competitive coder and Web developer</p>
                    </div>
                </div>
                <a href="./YogitaKhurana.pdf" download><button className="btn">Download Cv</button></a>
            </div>
        </div>
    )
}

export default ImageSection;
