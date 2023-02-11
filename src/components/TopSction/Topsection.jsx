import React from 'react';
import TopSectionContent from './TopSectionContent';
import Pic1 from "../../img/rayan.jpg";

const Topsection = () => {
    return (
        <div className='top-section'>
            <div className='setting-area'><i className='fa fa-cog'></i></div>
            <TopSectionContent ImgPic={Pic1}/>
        </div>
    );
};

export default Topsection;