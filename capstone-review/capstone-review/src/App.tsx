import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import ReviewPage from "./components/reviewPage";
import HomePage from "./components/homepage";
import "./App.css";

type classmates = {
  id: number;
  name: string;
};

const classmates = [
  { id: 1, name: "Abhijeet A S" },
  { id: 2, name: "Kousik Bose" },
  { id: 3, name: "Pradyot Soni" },
  { id: 4, name: "Davuluri Yashwant Rao" },
  { id: 5, name: "Yashraj Singh" },
  { id: 6, name: "Shifath Ali" },
  { id: 7, name: "Rohan B" },
  { id: 8, name: "Vadlamani Uday Kumar" },
  { id: 9, name: "Shilpa" },
  { id: 10, name: "Zoya Haider" },
  { id: 11, name: "Balaji S.K" },
  { id: 12, name: "Guduru Lakshmi Tanuja" },
  { id: 13, name: "Sonia Shaik" },
  { id: 14, name: "Tharala Varun Sai Yadav" }
];

console.log(classmates);


const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Navbar classmates={classmates} />
        <div className="content">
          <Routes>
          <Route path="/" element={<HomePage />} />
            {classmates.map((classmate) => (
              <Route
                key={classmate.id}
                path={`/reviews/${classmate.name}`}
                element={<ReviewPage name={classmate.name} />}
              />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
