import React from 'react'

const Firstsection = () => {
  return <>
    <section className="container1 mb-5 mx-10 p-10" id="home">
        <div className="content flex flex-col absolute">
        <span className="subh1 text-lg">Hey, I'm</span>
        <span className="title">Udit Saxena</span>
        <span className="subh2 text-3xl flex justify-end">Web Developer</span>
        </div>
        <div className="smhandles absolute flex justify-between">
        <img className="githubicon cursor-pointer" src="github.png" alt="github" />
        <img className="linkedinicon cursor-pointer" src="linkedin.png" alt="linkedin" />
        </div>
        <div className="secondcontainer border-white rounded-3xl absolute"></div>
        <div className="shape sh1 border-white rounded-full absolute"></div>
        <div className="shape sh2 border-white rounded-full absolute"></div>
        <div className="shape sh3 border-white rounded-full absolute"></div>
        <img src="uditsaxenaprofilepic.jpg" alt="profileimage" className="ppfimage absolute border-white rounded-full shape" />
    </section>
  </>

}

export default Firstsection
