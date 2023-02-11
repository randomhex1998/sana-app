import React from 'react';

const TopSectionContent = ({ImgPic}) => {
    return (
        <section className='top-section-content'>
            <div className='main-rounded'>
                <div className='sec-rounded'>
                    <img src={ImgPic} className="profile-pic" alt="profile" />
                </div>
            </div>

            <h2 className='top-section-title'>Rayan Jaberi</h2>
            <p className='top-section-sub'>Frontend web developer</p>
            <button className='top-section-btn'>Share Account</button>
        </section>
    );
};

export default TopSectionContent;