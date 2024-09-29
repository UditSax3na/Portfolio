import React from 'react'
import LayoutSys from './LayoutSys';

const Projects = ({focusindex, Setfocusindex, projectlist, maxsize}) => {

  return (
    <section className="container2 my-5 mx-10 py-5 p-10" id="project">
      <span className="heading flex justify-center mb-5">Project</span>
      <div className="secondcontainer pholder mx-10 flex justify-evenly px-2 py-5"><LayoutSys focusindex={focusindex} Setfocusindex={Setfocusindex} element={projectlist[focusindex]} maxsize={maxsize}/></div>
    </section>
  )
}

export default Projects
