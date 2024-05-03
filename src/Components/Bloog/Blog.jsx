import React from "react";
import './blog.css'
function Blog() {
  return (
    <div className="Ncode__blog-container section__padding">
      <div className="Ncode__blog-container-textwrapper">
        <div className="Ncode__blog-container-heading">
          <h1>
            Blockchain and Web3 Consulting Services Promising Solutions Driven
            by Expertise !
          </h1>
        </div>
        <div className="Ncode__blog-container-text">
          <p>
            We help organizations enter the gates of the decentarlized ecosystem
            and launch a future-ready metaverse. Our expert web3 consulting
            services help deliver a robust and sustainable solution for your
            requirements.
          </p>
        </div>
      </div>
      <div className="Ncode__blog-container-section__blogImg">
        <div className="Ncode__blog-conatiner-section-card">
          <div className="fade-effect"></div>
          {/* <h3>Metaverse & Games</h3>
          <button>Read More</button> */}
        </div>
        <div className="Ncode__blog-conatiner-section-card">
          <div className="fade-effect"></div>
          {/* <h3>Metaverse & Games</h3>
          <button>Read More</button> */}
        </div>
        <div className="Ncode__blog-conatiner-section-card">
          <div className="fade-effect"></div>
          {/* <h3>Metaverse & Games</h3>
          <button>Read More</button> */}
        </div>
      </div>
    </div>
  );
}

export default Blog;
