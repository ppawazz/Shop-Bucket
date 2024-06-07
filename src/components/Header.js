import React from "react";
import studentPhoto from "../assets/student-photo.jpg"; // Path to student photo

const Header = () => {
  return (
    <header className="header">
      <img src={studentPhoto} alt="Student Logo" className="logo" />
      <h1>Shop Bucket</h1>
    </header>
  );
};

export default Header;
