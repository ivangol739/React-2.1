import Project from './Project';

export default function ProjectList ({ projects }) {
  const column1 = [];
  const column2 = [];
  const column3 = [];

  projects.forEach((project, index) => {
    if ( index % 3 === 0 ) {
      column1.push(project);
    } else if ( index % 3 === 1 ) {
      column2.push(project);
    } else if ( index % 3 === 2) {
      column3.push(project)
    }
  })

  return (
    <div className='gallery'>
      <div className='column'>
        {column1.map((project, index) => {
          return (
            <Project 
              key={index}
              src={process.env.PUBLIC_URL + `/assets/images/${project.img}`} />
          )
        })}
      </div>
      <div className='column'>
        {column2.map((project, index) => {
          return (
            <Project 
              key={index}
              src={process.env.PUBLIC_URL + `/assets/images/${project.img}`} />
          )
        })}
      </div>
      <div className='column'>
        {column3.map((project, index) => {
          return (
            <Project 
              key={index}
              src={process.env.PUBLIC_URL + `/assets/images/${project.img}`} />
          )
        })}
      </div>
    </div>
  )
}