import React from 'react'

const Contact = () => {
  return (
    <section className="container4 my-5 mx-10 p-10" id="contact">
      <span className="heading flex justify-center mb-5">Contact</span>
      <form action="" method="POST">
        <div className="mcontainer flex flex-col rounded-2xl absolute">
          <div className="ccontainer ipdiv py-5 px-10 mt-10 mb-5 rounded-2xl">
            <input className='ip relative bg-transparent' type="text" placeholder='Your Name'/>
          </div>
          <div className="ccontainer ipdiv py-5 px-10 my-5 rounded-2xl">
            <input className='ip relative bg-transparent' type="text" placeholder='Your Name'/>
          </div>
          <div className="ccontainer py-5 px-10 my-5 rounded-2xl tacon">
            <textarea className='ta bg-transparent' name="message" id="message" placeholder='Your messages'></textarea>
          </div>
          <div className="cbuttons flex justify-evenly">
            <button className='btn p-2 px-5 rounded-xl'>reset</button>
            <button className='btn p-2 px-5 rounded-xl' type='submit'>send</button>
          </div>
        </div>
        </form>
    </section>
  )
}

export default Contact;
