import React from "react";
import TopSectionContent from "./TopSectionContent";
import ProfileOptions from "./ProfileOptions";
import Pic1 from "../../img/rayan.jpg";

const Profile = () => {
  return (
    <>
      <section className="top-section">
        <div className="top-cloud-area"></div>
        <div className="setting-area">
          <i className="fa fa-cog"></i>
        </div>
        <TopSectionContent ImgPic={Pic1} />
      </section>
      <section className="profile-opt-area">
        <section className="profile-opt-wrapper">
          <ProfileOptions
            IcoName="fa-solid fa-store"
            OptionText="Shopping"
            IcoBackground="rgba(26, 188, 156,0.2)"
            IcoColor="#16a085"
          />
          <ProfileOptions
            IcoName="fa-solid fa-taxi"
            OptionText="Ubers"
            IcoBackground="rgba(155, 89, 182,0.2)"
            IcoColor="#8e44ad"
          />
          <ProfileOptions
            IcoName="fa-solid fa-basket-shopping"
            OptionText="Category"
            IcoBackground="rgba(211, 84, 0,0.2)"
            IcoColor="#d35400"
          />
          <ProfileOptions
            IcoName="fa-solid fa-heart"
            OptionText="Dates"
            IcoBackground="rgba(231, 76, 60,0.2)"
            IcoColor="#c0392b"
          />
          <ProfileOptions
            IcoName="fa-solid fa-chart-column"
            OptionText="State"
            IcoBackground="rgba(241, 196, 15,0.2)"
            IcoColor="#f39c12"
          />
          <ProfileOptions
            IcoName="fa-brands fa-cc-paypal"
            OptionText="Card"
            IcoBackground="rgba(52, 152, 219,0.2)"
            IcoColor="#2980b9"
          />
        </section>
      </section>
    </>
  );
};

export default Profile;
