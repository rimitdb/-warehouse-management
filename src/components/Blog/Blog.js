import React from "react";

const Blog = () => {
    return (
        <div className="m-5">
            <h2 className="mb-5 text-center">Q1. Difference between Javascript and nodeJs</h2>
            <div className='d-flex justify-content-between'>
                <div className="mb-5">
                    <h4>Javascript</h4>
                    <ul>
                        <li>Javascript is a programming language. JS running in any browser with browser engine.</li>
                        <li>Javascript running any engine like Spider monkey (Fire Fox), JavaScript core (Safari),<br /> V8 (Google Chrome)</li>
                        <li>JavaScript is normally used for any client-side activity for one web application.</li>
                        <li>JavaScript is normally following Java Programming language standard.</li>
                    </ul>

                </div>
                <div className='mb-5'>
                    <h4>NodeJs</h4>
                    <ul>
                        <li>nodeJs is an interpreter and environment for Javascript.</li>
                        <li>nodeJs only run in V8 engine.</li>
                        <li>nodeJs mainly used for accessing or running any operating<br /> system for non-blocking operation.</li>
                        <li>nodeJs is written in C++ and provides a V8 engine base browser.</li>
                    </ul>
                </div>
            </div>
            <h2 className="mb-5 text-center">Q2. When should you use `nodeJs` and when should you use `mongoDB`?</h2>
            <div className="d-flex justify-content-between">
                <div className="mb-5">
                    <h4>When we should use nodeJs:</h4>
                    <ul>
                        <li>Node.js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. Node.js is regarded <br /> as the native land of the Internet of Things(IoT).</li>
                        <li>Node.js is perfect for Data streaming. Data streaming means breaking large files into smaller batches to provide<br /> smooth and impeccable streaming. Netflix’s programmers chose Node.js for building their streaming platform. </li>
                        <li>Node.js handly for collaborative tools because of it is ability to manage several processes at the same time. <br />Node.js is preferable for applications where immediate updates and management of multiple processes are needed</li>
                        <li>Node.js is good for several tasks simultaneously is the main reason it is so popular. With Node.js and the <br />appropriate frameworks developer have the opportunity to develop robots and JS-controlled devices like NodeBots.</li>
                    </ul>
                </div>
                <div className="mb-5">
                    <h4>When we should we use mongoDB</h4>
                    <ul>
                        <li>MongoDB are a good choice when your data is document-centric and doesn’t<br /> fit well into the schema of a relational database.</li>
                        <li>MongoDB stores data records as BSON documents. BSON is a binary <br />representation of JSON documents, though it contains more data types than JSON. </li>
                        <li>MongoDB supports multi-document ACID transactions, even across replica sets<br /> and sharded clusters.</li>
                        <li>MongoDB good at handling big data because they’re architected to scale well<br /> horizontally across multiple servers.</li>
                        <li>MongoDB’s ease of creating replicas — read-only copies of data — makes it a natural <br />for applications that demand high availability. </li>
                    </ul>
                </div>
            </div>
            <h2 className="mb-5 text-center">Q3. What is the purpose of `jwt`and how does it work</h2>
            <p>JWTs are used as a secure way to authenticate users and share information.

                Typically, a private key, or secret, is used by the issuer to sign the JWT. The receiver of the JWT will verify the signature to ensure that the token hasn’t been altered after it was signed by the issuer. It is difficult for unauthenticated sources to guess the signing key and attempt to change the claims within the JWT.</p>
            <h4>How JWT Works:</h4>
            <ul>
                <li>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties.</li>
                <li>A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.</li>
                <li>Once decoded, you will get two JSON strings:</li>
                <li> 1. The header and the payload.</li>
                <li>2. The signature.</li>
                <li>The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.</li>
                <li>The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.</li>
                <li>The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature. </li>
            </ul>
            <div>

            </div>
        </div>
    );
};

export default Blog;