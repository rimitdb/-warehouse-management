import React from 'react';

const Blog = () => {
    return (
        <div className='m-5 p-5'>
            <h2 className='mb-5'>Q1. Difference between authorization and authentication</h2>
            <div className='d-flex justify-content-between'>
                <div className='mb-5'>
                    <h4>Authorization</h4>
                    <ul>
                        <li>Authentication is the process of verifying user.</li>
                        <li>Authentication works through passwords, one-time pins, biometric information, <br /> and other information provided or entered by the user.</li>
                        <li>Authentication is the first step of a good identity and access management process.</li>
                        <li>Authentication is visible to and partially changeable by the user.</li>
                    </ul>

                </div>
                <div className='mb-5'>
                    <h4>Authentication</h4>
                    <ul>
                        <li>Authorization is the process of verifying user access permission to specific applications, files, and data.</li>
                        <li>Authorization works through settings that are implemented and maintained by the organization.</li>
                        <li>Authorization always takes place after authentication.</li>
                        <li>Authorization isn’t visible to or changeable by the user.</li>
                    </ul>
                </div>
            </div>
            <h2 className='mb-5'>Q2. Why are you using firebase? What other options do you have to implement authentication?</h2>
            <div>
                <h4>Reason behind using Firebase are:</h4>
                <ul>
                    <li>Free Multi-Platform Firebase Authentication</li>
                    <li>Firebase Testing Services to Improve App Quality</li>
                    <li>Free Use of Firebase Dynamic Links</li>
                    <li>Google Analytics</li>
                    <li>Provides A Free Start to Newbies</li>
                    <li>Reliable & Extensive Databases</li>
                    <li>Fast & Safe Hosting</li>
                    <li>Firebase Cloud Messaging for Cross-Platform</li>
                    <li>Increment in Revenues with App Indexing API</li>
                    <li>Machine Learning Capabilities</li>
                </ul>
            </div>
            <div>
                <h4>Different ways to Authenticate a Web Application</h4>
                <ul>
                    <li>Cookie-Based authentication.</li>
                    <li>Token-Based authentication.</li>
                    <li>Third party access(OAuth, API-token)</li>
                    <li>OpenId.</li>
                    <li>SAML</li>
                </ul>
            </div>
            <h2 className='mb-5'>Q3. What other services does firebase provide other than authentication</h2>
            <h4>Useful Firebase Services For Web/App Developer are:</h4>
            <ul>
                <li>Cloud Firestore</li>
                <li>Cloud Functions</li>
                <li>Hosting</li>
                <li>Cloud Storage</li>
                <li>Google Analytics</li>
                <li>Predictions</li>
                <li>Cloud Messaging</li>
                <li>Dynamic Links</li>
                <li>Remote Config</li>
            </ul>
            <div>

            </div>
        </div>
    );
};

export default Blog;