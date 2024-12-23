import React from "react";

const HomePage: React.FC = () => {
  return (
    <>
      <div className="review-page">
        <h1>Welcome to the Assignment Review Page</h1>
        <p className="review-details">
          This Is the review website I made for the sake of review Everyone's capstone tasks.
        </p>
        <section className="review-details">
          <h2>Things to Know</h2>
          <p>This page is Made with the help of React and the routing is done via react router
          </p>
          <p>You can navigate to various reviews using the left hand side Navigation Panel</p>
          <p>If any links are broken or otherwise wrong do contact me so that I can make changes to them</p>
        </section>
      </div>
      <footer>
        <p>DISCLAIMER : This page is not made with the explicit use of mobile phones, please try to use it on a desktop, It may or may not function on your mobile depending on the screen size. I will try to update the css and layout for mobile phone in the future </p>
      </footer>
    </>
  );
};

export default HomePage;