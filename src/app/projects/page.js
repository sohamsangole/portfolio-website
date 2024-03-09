"use client";

import React, { useState, useEffect } from 'react';
import DropDownMenu from '../components/DropDownMenu'
import Image from 'next/image';

const getColorAtIndex = (index) => {
    return index % 20 - 1;
};

const openGithubLink = (githubLink) => {
    window.open(githubLink, '_blank');
};

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const buttonColors = [
        '#42A5F5', '#FFD54F', '#66BB6A', '#26C6DA', '#FFB74D',
        '#9575CD', '#FF8A65', '#26C6DA', '#FF7043', '#4DB6AC',
        '#FFCA28', '#FF5722', '#26A69A', '#64B5F6', '#FFA726',
        '#AB47BC', '#D4E157', '#66BB6A', '#FFB74D', '#29B6F6'
    ];
    useEffect(() => {
        // Fetch the project data from the JSON file
        fetch('/assets/projects.json')
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.error('Error fetching projects:', error));
    }, []);

    return (
        <main className={`bg-[#0c0e10] py-6 px-6 min-h-screen flex flex-col justify-between`} >
            <div className="flex justify-between">
                <button onClick={() => window.location.href = "/"}>[Home]</button>
                <div>
                    <DropDownMenu />
                </div>
            </div>
            <div className="flex items-center justify-center">
                {/* Render projects as buttons */}
                <div className="p-4 rounded-md">
                    {
                        projects.map(project => (
                            <button
                                key={project.id}
                                style={{
                                    backgroundColor: buttonColors[getColorAtIndex(project.id)]
                                    , transition: 'background-color 1s ease',
                                    cursor: 'pointer'
                                }}
                                className={`my-2 w-full text-left text-black text-lg px-4 py-2 rounded-md `}
                                onClick={() => openGithubLink(project.github_link)}
                            >
                                <div className="flex items-center justify-start">
                                    <Image src="/assets/github-mark.png" height={30} width={30} alt="Slide 1" />
                                    <div className='px-4'>
                                        <h2 className='py-1 text-lg'>{project.name}</h2>
                                        <p className='text-xs'>{project.description}</p>
                                    </div>
                                </div>
                            </button>
                        ))}
                </div>
            </div>
            <div className="flex items-center justify-center">
                <button>India</button>
            </div>
        </main>
    );
};

export default Projects;