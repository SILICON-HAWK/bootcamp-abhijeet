import React from "react";
import reviewData from "./data/reviewData.json";

type ReviewPageProps = {
  name: string;
};

type Review = {
  name: string;
  highlights?: string | string[];
  improvements?: string | string[];
  notes?: string;
  website?: string | { [key: string]: string };
  marks?: number | null; // Optional marks field
};

const ReviewPage: React.FC<ReviewPageProps> = ({ name }) => {
  // Find the review for the given classmate
  const review = reviewData.find((entry: Review) => entry.name === name);

  return (
    <div className="review-page">
      <h1>Review for {name}</h1>
      {review?.website && (
        typeof review.website === 'object' ? (
          <div className="link-container">
            {Object.entries(review.website).map(([name, link]) => (
              <a key={name} href={link} target="_blank" rel="noopener noreferrer">
                {name}
              </a>
            ))}
          </div>
        ) : (
          <a href={review.website} target="_blank" rel="noopener noreferrer">
            Visit {name}'s website
          </a>
        )
      )}

      {review ? (
        <div className="review-details">
          {review.highlights && (
            <section>
              <h2>Highlights</h2>
              {Array.isArray(review.highlights) ? (
                review.highlights.map((highlight, index) => (
                  <p key={index}>{highlight}</p>
                ))
              ) : (
                <p>{review.highlights}</p>
              )}
            </section>
          )}
          {review.improvements && (
            <section>
              <h2>Areas for Improvement</h2>
              {Array.isArray(review.improvements) ? (
                review.improvements.map((improvement, index) => (
                  <p key={index}>{improvement}</p>
                ))
              ) : (
                <p>{review.improvements}</p>
              )}
            </section>
          )}
          {review.notes && (
            <section>
              <h2>Notes</h2>
              <p>{review.notes}</p>
            </section>
          )}
          {review.marks !== null && (
            <section>
              <h2>Marks</h2>
              <p>{review.marks} / 10</p>
            </section>
          )}
        </div>
      ) : (
        <p>No review available for {name}.</p>
      )}
    </div>
  );
};

export default ReviewPage;
