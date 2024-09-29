import React from 'react'

const AboutMe = ({skillset,aboutme}) => {
  return (
    <section className="container3 my-5 mx-10 p-10" id="about">
      <span className="heading flex justify-center mb-5">About</span>
      <div className="macontainer flex justify-between absolute">
        <div className="rounded-2xl acontainers p-5">
          <div className="firstcon subheading text-center p-5 my-2 rounded-3xl text-2xl">About Me</div>
          <div className="secondcon rounded-3xl p-5 mt-5">{aboutme}</div>
        </div>
        <div className="rounded-2xl acontainers p-5">
          <div className='subheading text-center p-5 my-2 rounded-3xl text-2xl'>Skills</div>
          <div className="minskills flex flex-wrap">{skillset.map((ele,i) => <div key={i} className="mscon p-2 px-3 rounded-xl m-2">{ele}</div>)}</div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
