
import './Insights.css'
function Cardofinsight({ data: { technology, name, content } }){
    
    return (
       
        <div className='technologycards'>
           <p style={{color:"#707070"}} className='mb-2'>{technology}</p>
           <h3 style={{color:"black",fontWeight:"bold",fontSize:"25px"}} className='mb-2'>{name}</h3>
           <p style={{color:"#707070"}}  className='mb-4'>{content}</p>
           <button className='readmore'>Read more ↗</button>
        </div>
        
    )
}


export default Cardofinsight