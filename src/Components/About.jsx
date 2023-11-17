import React from 'react';
import './Styles/about.css'; // Import your CSS file for styling

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="content">
        <h2>About Us</h2>
        <p>
        Natural language processing (NLP) is an interdisciplinary subfield of computer science and linguistics. It is primarily concerned with giving computers the ability to support and manipulate speech. It involves processing natural language datasets, such as text corpora or speech corpora, using either rule-based or probabilistic (i.e. statistical and, most recently, neural network-based) machine learning approaches. The goal is a computer capable of "understanding" the contents of documents, including the contextual nuances of the language within them. The technology can then accurately extract information and insights contained in the documents as well as categorize and organize the documents themselves.
        </p>
      </div>
      <div className="image">
        <img src="https://lookinla.com/wp-content/uploads/2018/04/P1.gif" alt="About Us" />
      </div>
    </div>
  );
};

export default AboutPage;
