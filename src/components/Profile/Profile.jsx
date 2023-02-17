import React from "react";
import TopSectionContent from "./TopSectionContent";
import ProfileOptions from "./ProfileOptions";
import Pic1 from "../../img/rayan.jpg";

const Profile = () => {
  return (
    <>
      <div className="top-section">
        <div className="top-cloud-area"></div>
        <div className="setting-area">
          <i className="fa fa-cog"></i>
        </div>
        <TopSectionContent ImgPic={Pic1} />
      </div>
      <ProfileOptions />
    </>
  );
};

export default Profile;