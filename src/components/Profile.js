import React from "react";
import '../sass/components/profile.scss';

const Profile = () => {
    return(
        <div className="profile-parent">
            <nav>
                <h1>Logo</h1>
                <ul>
                    <li>Home</li>
                    <li>Profile</li>
                    <li>Contact Us</li>
                    <li>Help</li>
                </ul>
            </nav>

            <div className="profile-main">
                <div className="user-photo-name">
                    <img src="/logo512.png" alt="profile"/>
                    <div className="user-name-data">
                        <h1>Omkar Vashistha</h1>
                        <h3>Software developer</h3>
                    </div>
                </div>

                <div className="user-about">
                    <p>
                        I am ChatGPT, an advanced AI language model developed by OpenAI. 
                        Trained on a vast amount of diverse text data, my purpose is to assist and provide information on a wide range of topics. 
                        I can engage in conversations, answer questions, and generate human-like responses. With a knowledge cutoff in September 2021, 
                        I constantly strive to provide accurate and up-to-date information. As an AI, my abilities encompass various domains.
                    </p>
                </div>

                <div className="user-stats-graph">
                    <div className="user-stats">
                        <h1>Stats.</h1>
                        <div className="user-stats-like">
                            <div className="user-stat-icon">
                                <img src="logo192.png" alt="icon"/>
                            </div>
                            <div className="user-stat-data">
                                <h1>50</h1>
                                <h4>Blogs Likes</h4>
                            </div>
                        </div>
                        <div className="user-stats-shares">
                            <div className="user-stat-icon">   
                                <img src="logo192.png" alt="icon"/>
                            </div>
                            <div  className="user-stat-data">
                                <h1>50</h1>
                                <h4>Blogs Shares</h4>
                            </div>
                        </div>
                    </div>

                    <div className="user-graph">
                        <h1>Graph.</h1>
                        <div className="user-graph-chart">
                            Chart Here
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Profile;