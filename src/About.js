import React from 'react';
import './about.css';
import ModelViewer from './ModelViewer'; // Import the ModelViewer component

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
                        <img src="path_to_image" alt="Team Member 1" />
                        <h3>Team Member 1</h3>
                        <p>Role</p>
                    </div>
                    <div className="team-member">
                        <img src="path_to_image" alt="Team Member 2" />
                        <h3>Team Member 2</h3>
                        <p>Role</p>
                    </div>
                    <div className="team-member">
                        <img src="path_to_image" alt="Team Member 3" />
                        <h3>Team Member 3</h3>
                        <p>Role</p>
                    </div>
                    <div className="team-member">
                        <img src="path_to_image" alt="Team Member 3" />
                        <h3>Team Member 4</h3>
                        <p>Role</p>
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
