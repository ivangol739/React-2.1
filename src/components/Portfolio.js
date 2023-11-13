import { useState } from 'react'
import projects from '../data/projects'
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';

export default function Portfolio() {

  const [filter, setFilter] = useState('All')
  let filteredProjects = projects;

  if (filter !== "All") {
    filteredProjects = projects.filter(
      (project) => project.category === filter
    )
  }

  return (
    <>
      <header className='header'>
        <div className='wrapper'>
          <Toolbar 
            filters={["All", "Websites", "Flayers", "Business Cards"]}
            selected={filter}
            onSelectFilter={(filter) => setFilter(filter)}
          />
        </div>
      </header>

      <div className='body'>
        <div className='wrapper'>
          <ProjectList projects={filteredProjects}/>
        </div>
      </div>
    </>
  )
}

