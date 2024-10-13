import React from 'react';
import './about.css';
import ModelViewer from './ModelViewer'; // Import the ModelViewer component
import Sank from './pookers_headshot.jpg';
import Sier from './SierraJanson.jpg';
import Ian from './ian_headshot.png';
import Leo from './leo_headshot.jpeg';

const About = () => {
    return (
        <div className="about-container">
            <section className="hero-section">
                <h1>
                    Say Hello To Green Box! <span className="wave">👋</span>
                </h1>
                <p>Efficiency based IOT! </p>
            </section>
            
            <section className="meet-the-team-section">
                <h2>Meet the Team</h2>
                <div className="team-members">
                    <div className="team-member">
                        <img src={Sank} alt="Team Member 1" />
                        <h3>Sankritya Anand Rai</h3>
                        <p>Fullstack, CAD</p>
                    </div>
                    <div className="team-member">
                        <img src={Sier} alt="Team Member 2" />
                        <h3>Sierra Janson</h3>
                        <p>Fullstack</p>
                    </div>
                    <div className="team-member">
                        <img src={Ian} alt="Team Member 3" />
                        <h3>Ian Bunsirisert</h3>
                        <p>Backend</p>
                    </div>
                    <div className="team-member">
                        <img src={Leo} alt="Team Member 3" />
                        <h3>Leo Li</h3>
                        <p>Backend</p>
                    </div>
                </div>
            </section>
            
            <section className="model-viewer-section">
                <h2>Explore Our Hardware</h2>
                <ModelViewer /> 
            </section>
            
            <section className="animated-leaf-section">
                <h2>What inspires us?</h2>
                <p>A more efficient future 🍃</p>
                <div className="leaf-emojis">
                    <span role="img" aria-label="leaf" className="leaf-emoji">🍃</span>
                    <span role="img" aria-label="leaf" className="leaf-emoji">🍃</span>
                    <span role="img" aria-label="leaf" className="leaf-emoji">🍃</span>
                </div>
            </section>
        </div>
    );
};

export default About;
