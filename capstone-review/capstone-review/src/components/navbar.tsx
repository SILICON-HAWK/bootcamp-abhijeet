import React from "react";
import { Link } from "react-router-dom";

type NavbarProps = {
  classmates: { id: number; name: string }[];
};

const Navbar: React.FC<NavbarProps> = ({ classmates }) => {
  return (
    <div className="navbar">
      <h2>BatchMates</h2>
      <ul>
        <li>
          <Link to="/" className="home-link">
            <li className="entire-li-link" id="home-button">Home</li>
          </Link>
        </li>
        {classmates.map((classmate) => (
          <ul key={classmate.id}>
            <Link to={`/reviews/${classmate.name}`}>
              <li className="entire-li-link">{classmate.name}</li>
            </Link>
          </ul>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
