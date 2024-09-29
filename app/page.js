'use client';

import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Firstsection from "@/components/firstsection";
import { useState } from "react";

export default function Home() {
  const[focusindex,Setfocusindex] = useState(0);
  const [menu,setmenu] = useState(0);
  const template = {
    title:"portfolio",
    desc:"Description of the project",
    project_preview:"/projectpreview.png",
    basedon:['css','js','html'],
    available:"www.google.com"
  }
  const template2 = {
    title:"chess duel",
    desc:"Description of the project",
    project_preview:"/projectpreview.png",
    basedon:['java','swing'],
    available:"www.google.com"
  }
  const template3 = {
    title:"webdeve",
    desc:"Description of the project",
    project_preview:"/projectpreview.png",
    basedon:['python','flask','django'],
    available:"www.google.com"
  }
  const projectlist = [template, template2, template3];
  const [maxsize, Setmaxsize] = useState(projectlist.length);
  const skillset = ["css",'java','python','c#','c++',"c","wpf","react","html","javascript", "nodejs","nextjs","expressjs","mongodb","mysql","sqlite","php"]
  const aboutme = ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti doloremque aut excepturi quia accusamus sapiente, nihil minus eligendi inventore magni molestias! Amet quis dolorum laborum sed eos qui accusamus. Est, dolorum ut. Animi, beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, illo.']
  return <>
  <header>
    <Navbar menu={menu} setmenu={setmenu}/>
  </header>
  <main className="flex flex-col justify-center">
    <Firstsection />
    <Projects focusindex = {focusindex} Setfocusindex = {Setfocusindex} projectlist={projectlist} maxsize={maxsize}/>
    <AboutMe skillset={skillset} aboutme={aboutme}/>
    <Contact />
  </main>
  <Footer />
  </>
}
