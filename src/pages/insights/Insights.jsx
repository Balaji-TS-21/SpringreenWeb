import "./Insights.css"
import "./cards"
import { useState } from "react";
import Cardofinsight from "./cards"
import insightimage from "../insights/insightimage.jpg"

function Insights(){
   const Insights = [
  {
    technology: "Cloud Computing",
    name: "Accelerating Cloud Migrations",
    content: "Best practices for moving enterprise workloads to cloud infrastructure with security and scalability."
  },
  {
    technology: "Artificial Intelligence",
    name: "AI in Business Operations",
    content: "Leveraging AI to optimize decision-making and automate critical business processes."
  },
  {
    technology: "Cybersecurity",
    name: "Building Resilient IT Systems",
    content: "Strategies to protect enterprise networks and data from evolving cybersecurity threats."
  },
  {
    technology: "Data Analytics",
    name: "Data-Driven Decision Making",
    content: "Transforming raw data into actionable insights to drive smarter business outcomes."
  },
  {
    technology: "Sustainable Tech",
    name: "Green IT Practices",
    content: "Reducing environmental impact with energy-efficient hardware and eco-friendly data centers."
  },
  {
    technology: "Internet of Things",
    name: "Connected Infrastructure",
    content: "How IoT is reshaping industries through smart, connected systems and real-time data exchange."
  }
];

const vision=[
    {number:1,name:"Innovation First",para:"Pioneering cutting-edge technology solutions"},
     {number:2,name:"Customer Success",para:"Delivering exceptional value and results"},
      {number:3,name:"Excellence",para:"Setting the highest standards in IT services"}
]



const [text,setText]=useState("")
const [email, setEmail] = useState('');

const filteredinsights=Insights.filter((item)=>{
    const search=text.toLowerCase()
    return (
        item.name.toLowerCase().includes(search)||
        item.technology.toLowerCase().includes(search)||
        item.content.toLowerCase().includes(search)

    )

})

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
    alert('Thank you! We will contact you soon.');
  };

    return (
        <div className="insight-wrapper">
            <div className="feature">
                <h1 style={{fontWeight:"bold",fontSize:"35px",marginBottom:"15px"}}>Featured insights</h1>
             <p>Discover our latest research, innovations, and insights in sustainable IT solutions and technological <br /> advancements</p>
            </div>
             <div>
                <input type="search" placeholder="search insights..." className="insight-search" value={text} onChange={(e)=>{setText(e.target.value)}} />
        
             </div>

             <div className="cardscontainer">

                {filteredinsights.length > 0 ? (
          filteredinsights.map((item, index) => (
            <Cardofinsight key={index} data={item} />
          ))
        ) : (
          <p style={{color:"red"}}>No insights found </p>
        )}
                
              
             </div>

             <div className="imgcontainer">
                <div className="left">
                      <h1 style={{color:"#003934",fontSize:"30px",fontWeight:"bold",marginBottom:"20px"}}>Our Vision & values</h1>
                      <p style={{fontSize:'14px',marginBottom:"20px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, beatae obcaecati, velit iste tempore quis molestias deleniti laboriosam praesentium voluptas neque, ullam eum. Repudiandae</p>
                      <div>
                        {
                            vision.map((item,index)=>{
                                return (
                                    <div key={index} >
                                    <li type="none" style={{display:"flex",marginBottom:"30px"}}>
                                        <div className="circle">{item.number}</div>
                                    <div className="content">
                                    <h1>{item.name}</h1>
                                    <p>{item.para}</p>
                                    </div>
                                    </li>
                                    
                                    
                                    </div>
                                )
                            })
                        }
                      </div>
                </div>
                <div className="right">
                          <img src={insightimage}  style={{margin:"20px auto",borderRadius:"10px",height:"350px"}} alt="" />
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
export default Insights