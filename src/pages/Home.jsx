import React from "react";
import Nav from "../component/Nav";

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Nav />
            <div>
                <img src="/MyPic/linh.jpg" alt="Linh" />
            </div>
            <div className="container mx-auto p-4">
                <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
                <p className="text-lg text-gray-700">
                    This is the home page of my portfolio website. Here you can find information about me, my projects, and how to contact me.
                </p>    
            </div>
        </div>
    );
}