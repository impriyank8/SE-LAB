import React, { useState } from 'react';
import './LearnPressDemo.css';
import { FaLinkedin } from 'react-icons/fa';

function LearnPressDemo() {
    const [activeTab, setActiveTab] = useState('description');
    const [openSections, setOpenSections] = useState({});

    const showTab = (tabId) => setActiveTab(tabId);
    const toggleSections = (chapterId) => {
        const allSections = document.querySelectorAll(".section-list");
        allSections.forEach((section) => {
            if (section.id !== chapterId) {
                section.style.display = "none";
            }
        });
        const sectionList = document.getElementById(chapterId);
        sectionList.style.display = sectionList.style.display === "none" ? "block" : "none";
    };

    return (
        <div className="container">
            {/* Header */}
            <header className="header">
                <h1>Introduction to LearnPress – LMS Plugin</h1>
            </header>

            {/* Main Content */}
            <div className="main-content">
                {/* Left Sidebar */}
                <div className="left-sidebar">
                    <div className="video-container">
                        <iframe
                            src="https://www.youtube.com/embed/Zt4fLu6pGt8"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="course-info">
                        <p><strong>👍</strong> 100% positive reviews</p>
                        <p><strong>🧑‍🎓</strong> 279 students</p>
                        <p><strong>📖</strong> 15 lessons</p>
                        <p><strong>🌐</strong> English</p>
                        <p><strong>📝</strong> 1 quiz</p>
                        <p><strong>✏️</strong> Yes</p>
                        <p><strong>♾️</strong> Unlimited access</p>
                    </div>
                    <a href="#" className="start-button">Start Now</a>
                </div>

                {/* Center Content */}
                <div className="content">
                    {/* Tabs */}
                    <div className="tabs">
                        <div className={`tab ${activeTab === 'description' ? 'active' : ''}`} onClick={() => showTab('description')}>Description</div>
                        <div className={`tab ${activeTab === 'curriculum' ? 'active' : ''}`} onClick={() => showTab('curriculum')}>Curriculum</div>
                        <div className={`tab ${activeTab === 'instructor' ? 'active' : ''}`} onClick={() => showTab('instructor')}>Instructor</div>
                        <div className={`tab ${activeTab === 'leaderboard' ? 'active' : ''}`} onClick={() => showTab('leaderboard')}>Leaderboard</div>
                    </div>

                    {/* Tab Content */}
                    {activeTab === 'description' && (
                        <div className="tab-content">
                            <p>This course will give you an overview of LAN and other networking basics. You’ll learn about IP addresses, serial data transfer, and computing types.</p>
                            <div className="feature-box">
                                <h3>In This Free Course, You Will Learn How To</h3>
                                <ul>
                                    <li>Interactive video tutorials</li>
                                    <li>Step-by-step setup guides</li>
                                    <li>Real-world case studies</li>
                                    <li>Hands-on assessments and quizzes</li>
                                    <li>In-depth modules on LMS customization and user management</li>
                                </ul>
                            </div>
                            <p>Idea 1: "Building an Online Learning Empire with LearnPress: A Step-by-Step Guide to Creating a Thriving eLearning Business"
                            This in-depth article would provide a comprehensive tutorial on how to leverage the LearnPress plugin to build a successful online learning platform. It would cover everything from setting up courses and lessons to monetization strategies and student engagement tactics.</p>
                            <p>Idea 2: "Unleash Your Teaching Superpowers: 10 Genius LearnPress Hacks to Take Your Online Courses to the Next Level"
                            This listicle would showcase 10 innovative ways to maximize the features and functionality of the LearnPress plugin, empowering online educators to create more engaging, effective, and profitable courses.</p>
                            <img src="https://eduma.thimpress.com/demo-learning-platform/wp-content/uploads/sites/101/2022/06/single-course-1.jpg" alt="LearnPress Course" />
                        </div>
                    )}

                    {activeTab === 'curriculum' && (
                         <div id="curriculum" className="tab-content active">
                         <div className="chapter-box">
                             <h3 onClick={() => toggleSections("chapter1")}>📍 LearnPress Getting Started</h3>
                             <div className="section-list" id="chapter1">
                                 <p>🧾 What is LearnPress?</p>
                                 <p>📒 How to use Learnpress?</p>
                                 <p>❓ Demo Quiz to Learnpress</p>
                             </div>
                         </div>
 
                         <div className="chapter-box">
                             <h3 onClick={() => toggleSections("chapter2")}>📍 Learnpress Live Course</h3>
                             <div className="section-list" id="chapter2">
                                 <p>👨🏻‍💻 Demo Zoom Meeting Lesson</p>
                                 <p>👨🏻‍💻 Demo Google Meeting Lesson</p>
                             </div>
                         </div>
                     </div>
                    )}

                    {activeTab === 'instructor' && (
                        <div className="tab-content">
                            <div className="instructor-profile">
                                <img src="https://media.istockphoto.com/id/1220701258/photo/sit-less-and-walk-more.jpg?s=612x612&w=0&k=20&c=uQvi4uvthrhPNFv3knxlJNTg5jtLptynTDZBxMzIPVs=" alt="Instructor" className="instructor-image" />
                                <p><strong>Saurabh Tiwari</strong></p>
                                <p>👉 Expert in Networking & Security</p>
                                <p>👉 Students taught: 5,000+</p>
                                <p>👉 Total courses offered: 10</p>
                                <a href="https://www.linkedin.com/in/saurabh-tiwari-a5450859/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="linkedin-link">
                                    <FaLinkedin size={30} className="linkedin-icon" />
                                </a>
                            </div>
                        </div>
                    )}

                    {activeTab === 'leaderboard' && (
                        <div className="tab-content">
                            {/* Leaderboard content */}
                        </div>
                    )}
                </div>
            </div>

            {/* Rating Section */}
            <div className="rating-section">
                🌟🌟🌟🌟🌟 5.0
            </div>
        </div>
    );
}

export default LearnPressDemo;
