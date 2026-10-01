import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';
import { projectsData } from '../../data/projectsData';

import './Projects.css';
import SingleProject from './SingleProject/SingleProject';

const projectCategories = [
    {
        id: 'software-development-automation',
        title: 'Software Development & Automation',
    },
    {
        id: 'ai-ml',
        title: 'AI / ML',
    },
    {
        id: 'freelance-projects',
        title: 'Freelance Projects',
    },
];

function ProjectCard({ project, theme }) {
    return (
        <SingleProject
            theme={theme}
            id={project.id}
            name={project.projectName}
            desc={project.projectDesc}
            tags={project.tags}
            code={project.code}
            demo={project.demo}
            image={project.image}
        />
    );
}

function Projects() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="projects" id="projects" style={{ backgroundColor: theme.secondary }}>
            <div className="projects--header">
                <h1 className="section-title">Projects</h1>
            </div>
            <div className="projects--body">
                <div className="projects--categories">
                    {projectCategories.map((category) => {
                        const categoryProjects = projectsData.filter(
                            (project) => project.category === category.id
                        );

                        return (
                            <section className="project-category" key={category.id}>
                                <div className="project-category--header">
                                    <h2>{category.title}</h2>
                                    <span aria-hidden="true" />
                                </div>
                                {categoryProjects.length > 0 ? (
                                    <div className="project-category--content">
                                        {categoryProjects.map((project) => (
                                            <ProjectCard
                                                key={project.id}
                                                project={project}
                                                theme={theme}
                                            />
                                        ))}
                                    </div>
                                ) : (
                                    <div className="project-category--empty">
                                        More work in this area will be added soon.
                                    </div>
                                )}
                            </section>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Projects;
