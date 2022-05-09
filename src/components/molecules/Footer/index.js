import React from 'react';
import './style.css';

const Footer = (props) => {
  return (
    <footer className="Footer">
      <section>
        Designed and built with{' '}
        <span className="Footer__Heart">&hearts;</span> by{'  '}
        <a
          href="https://www.linkedin.com/in/amitmaji30854a1a1/"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Amit Maji
        </a>
      </section>

      <section className="Footer__Items">
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Demo
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Code
        </a>
      </section>
    </footer>
  );
};

export default Footer;
