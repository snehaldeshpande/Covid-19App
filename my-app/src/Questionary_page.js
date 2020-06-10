import React from 'react';
import Data from './data.json'
import './q.css'


function Que() {

     function handleClick(e){
      e.preventDefault();
      console.log("submitted")
     alert("Your response has been submitted successfully")
      
   

    
}


    

    return (
        
        <div className="Container" style={{width:"750px",marginTop:"40px",height:"820px","backgroundColor":"#F5FAFA","marginLeft":'600px',"marginRight":"500px"}} className="App">
        <form className="data" style={{margin:"40px"}}>
        <h2 style={{"marginTop":"20px","marginBottom":"30px","textAlign":"center"}}><b>Questions</b></h2>
        <form  className="posts">
        
        {Data.map(post =>{
            return(
                <div key={post.id} className="post">
                    <h4><b>{post.question10}</b></h4>
                    </div>
                    )
        })} 
                    <div>
                    <input style={{"marginLeft":"2.0em"}} type="radio" id="yes" name="ans1"  value="Yes" required></input>
                        <label >Yes</label>
                        <input style={{"marginLeft":"2.0em"}}type="radio" id="no" name="ans1"  value="No"></input>
                        <label >No</label> 
                            
                     </div>   
                
                     {Data.map(post =>{
            return(
                <div key={post.id} className="post">
                    <h4><b>{post.question10}</b></h4>
                    </div>
                    )
        })} 
                    <div>
                    <input style={{"marginLeft":"2.0em"}} type="radio" id="yes" name="ans2"  value="Yes" required></input>
                        <label >Yes</label>
                        <input style={{"marginLeft":"2.0em"}}type="radio" id="no" name="ans2"  value="No"></input>
                        <label >No</label> 
                            
                     </div>       




          
                     {Data.map(post =>{
            return(
                <div key={post.id} className="post">
                    <h4><b>{post.question10}</b></h4>
                    </div>
                    )
        })} 
                    <div>
                    <input style={{"marginLeft":"2.0em"}} type="radio" id="yes" name="ans3"  value="Yes" required></input>
                        <label >Yes</label>
                        <input style={{"marginLeft":"2.0em"}}type="radio" id="no" name="ans3"  value="No"></input>
                        <label >No</label> 
                            
                     </div>   




                     {Data.map(post =>{
            return(
                <div key={post.id} className="post">
                    <h4><b>{post.question10}</b></h4>
                    </div>
                    )
        })} 
                    <div>
                    <input style={{"marginLeft":"2.0em"}} type="radio" id="yes" name="ans4"  value="Yes" required></input>
                        <label >Yes</label>
                        <input style={{"marginLeft":"2.0em"}}type="radio" id="no" name="ans4"  value="No"></input>
                        <label >No</label> 
                            
                     </div>   


                       
        {Data.map(post =>{
            return(
                <div key={post.id} className="post">
                    <h4><b>{post.question5}</b></h4>
                    </div>
                    )
        })} 
                    <div>
                    <input style={{"marginLeft":"2.0em"}} type="radio" id="yes" name="ans5"  value="Yes" required></input>
                        <label >Yes</label>
                        <input style={{"marginLeft":"2.0em"}}type="radio" id="no" name="ans5"  value="No"></input>
                        <label >No</label> 
                            
                     </div>   




                       
        {Data.map(post =>{
            return(
                <div key={post.id} className="post">
                    <h4><b>{post.question6}</b></h4>
                    </div>
                    )
        })} 
                    <div>
                    <input style={{"marginLeft":"2.0em"}} type="radio" id="yes" name="ans6"  value="Yes" required></input>
                        <label>Yes</label>
                        <input style={{"marginLeft":"2.0em"}}type="radio" id="no" name="ans6"  value="No"></input>
                        <label >No</label> 
                            
                     </div>   




                        
        {Data.map(post =>{
            return(
                <div key={post.id} className="post">
                    <h4><b>{post.question7}</b></h4>
                    </div>
                    )
        })} 
                    <div>
                    <input style={{"marginLeft":"2.0em"}} type="radio" id="yes" name="ans7"  value="Yes" required></input>
                        <label >Yes</label>
                        <input style={{"marginLeft":"2.0em"}}type="radio" id="no" name="ans7"  value="No"></input>
                        <label >No</label> 
                            
                     </div>   



                       
                     {Data.map(post =>{
            return(
                <div key={post.id} className="post">
                    <h4><b>{post.question8}</b></h4>
                    </div>
                    )
        })} 
                    <div>
                    <input style={{"marginLeft":"2.0em"}} type="radio" id="yes" name="ans8"  value="Yes" required></input>
                        <label>Yes</label>
                        <input style={{"marginLeft":"2.0em"}}type="radio" id="no" name="ans8"  value="No"></input>
                        <label>No</label> 
                            
                     </div>   




                       
                     {Data.map(post =>{
            return(
                <div key={post.id} className="post">
                    <h4><b>{post.question9}</b></h4>
                    </div>
                    )
        })} 
                    <div>
                    <input style={{"marginLeft":"2.0em"}} type="radio" id="yes" name="ans9"  value="Yes" required></input>
                        <label >Yes</label>
                        <input style={{"marginLeft":"2.0em"}}type="radio" id="no" name="ans9"  value="No"></input>
                        <label >No</label> 
                            
                     </div>   



                       
                     {Data.map(post =>{
            return(
                <div key={post.id} className="post">
                    <h4><b>{post.question10}</b></h4>
                    </div>
                    )
        })} 
                    <div>
                    <input style={{"marginLeft":"2.0em"}} type="radio" id="yes" name="ans10"  value="Yes" required></input>
                        <label >Yes</label>
                        <input style={{"marginLeft":"2.0em"}}type="radio" id="no" name="ans10"  value="No"></input>
                        <label >No</label> 
                            
                     </div>   
                     




                                  

        <div class="btn">
        <button type="submit" onClick={handleClick} class="btn btn-primary">Submit</button>
        </div>
        </form>
        </form>
        </div>
      );
    }
 
 

export default Que;