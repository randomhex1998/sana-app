import React from "react";

const ProfileOptions = ({ IcoName, OptionText, IcoBackground }) => {
  return (
    <div className="profile-option">
      <div
        className="profile-ico-area"
        style={{ backgroundColor: IcoBackground }}>
        <i className={IcoName}></i>
      </div>
      <h4>{OptionText}</h4>
    </div>
  );
};

export default ProfileOptions;
