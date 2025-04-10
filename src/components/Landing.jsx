import React from "react";
import UndrawBooks from "../assets/Undraw_Books.svg";
import { Link } from "react-router-dom";



const Landing = () => {
    const scrollToFeatures = () => {
        const featuresSection = document.getElementById("features");
        if (featuresSection) {
            featuresSection.scrollIntoView({ behavior: "smooth" });
        }
    };
  return <div>
    <section id="landing">
        <header>
            <div className="header__container">
                <div className="header__description">
                    <h1>America's Most Awarded Online Library Platform</h1>
                    <h2>Find your dream book with <span className="purple">Library</span></h2>
                    <Link to="#features">
                        <button className="btn" onClick={scrollToFeatures}>Browse Books</button>
                    </Link>
                </div>
                <figure className="header__img--wrapper">
                    <img src={UndrawBooks} alt="" />
                </figure>
            </div>
        </header>
    </section>
  </div>;
};

export default Landing;
