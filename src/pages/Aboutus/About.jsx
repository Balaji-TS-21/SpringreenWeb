import "./About.css"
import { useState } from "react";

function Aboutus(){
    const [email, setEmail] = useState('');
    const milestone=[
        {target:"1000+",name:"projects"},
        {target:"21",name:"Team memebers"},
        {target:"850+",name:"Clients"},
        {target:"850+",name:"Clients"}
    ]
    const testmonial=[
        {content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quibusdam Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, excepturi?",name:"~ John Ciflin@Abc"},
        {content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quibusdam Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, excepturi?",name:"~ John Ciflin@Abc"},
        {content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quibusdam Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, excepturi?",name:"~ John Ciflin@Abc"},
        {content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quibusdam Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, excepturi?",name:"~ John Ciflin@Abc"},
        {content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quibusdam Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, excepturi?",name:"~ John Ciflin@Abc"},
        {content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quibusdam Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, excepturi?",name:"~ John Ciflin@Abc"},
        {content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quibusdam Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, excepturi?",name:"~ John Ciflin@Abc"},
    ]

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
    alert('Thank you! We will contact you soon.');
  }; 
    return (
        <div className="about-wrapper">
            <div className="image-wrapper">
                   <div className="gray-card">
                           <h1 style={{fontSize:"37px",fontWeight:"bold",marginBottom:"10px"}}>About <br /> Our Company.</h1>
                           <p style={{fontSize:"15px",fontWeight:"500"}}>Lorem ipsum dolor sit amet consectetur. Nunc nunc mus volutpat aliquam est gravida maecenas egestas. Purus donec consequat in at aliquam nibh. Fermentum tortor convallis vulputate dignissim vulputate Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, fugiat Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, excepturi? </p>
                   </div>
            </div>

            <div className="milestones">
                <h1>Our Milestone</h1>
                <p>We already completed more than 1000 projects successfully and more counting.</p>
            </div>
            <div className="mile-cards-container">
                {
                    milestone.map((item,index)=>{
                        return (
                            <div className="mile-cards" key={index}>
                                  <h1>{item.target}</h1>
                                 <p>{item.name}</p>
                            </div>


                        )

                    })
                }
              
            </div>

            <div className="milestones">
                <h1>Our testmonials</h1>
                <p>Its crafted with the latest trend of design & coded with all modern approaches</p>
            </div>

            <div>
                <div className="testimonial-wrapper">
  <div className="testimonial-track">

    {
        testmonial.map((item,index)=>{
            return (
                <div  key={index}>
                 <div className="testimonial">
                    {item.content}
                    <p>{item.name}</p>
                 </div>
</div>
            )
        })
    }

    
   
    
  </div>
</div>



            </div>
       

    
        <div className="trend">
                <h1 style={{fontWeight:"bold"}}>2019-2025</h1>
                <div className="design">
                    <h1>From 2019, we providing our services, check our best solutions.</h1>
                    <p>Its crafted with the latest trend of design & coded with all modern approaches. Its a robust & multi-dimensional usable template.</p>
                </div>
            </div>
     
            

            <section className="py-10 bg-white-600 text-black ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-2xl font-bold mb-5">
              Get a Callback from Springreen
            </h2>
            <form onSubmit={handleSubmit} className="flex">
              <input
              style={{marginLeft:"100px",border:"1px solid black"}}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email here"
                required
                className=" w-[530px] px-4 py-1 rounded-lg text-black-100 focus:outline-none  bg-white"
              />
              <button
                type="submit"
                className="bg-primary-800 text-white px-3 py-2 rounded-lg font-semibold hover:bg-primary-900 transition-all duration-300 hover:scale-105"
              >
                Submit
              </button>
              
            </form>
            <p className="text-sm text-danger-100  mt-3">
              Lorem ipsum dolor sit amet consectetur. Dictumst nisl orci nam tortor fusce donec viverra id.
            </p>
          </div>
        </div>
      </section>

        </div>
    )
}
export default Aboutus