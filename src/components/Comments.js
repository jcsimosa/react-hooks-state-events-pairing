import React,{useState} from "react";

function Comments ({video}) {
    
    const [comments , setComments] = useState(true)

    const hideComments = () => {
        setComments(pV => !pV)
    }
  
    
    const commentsArray = video.comments.map((obj)=> {
        return (
         <div key={obj.id}> 
         <h3>{obj.user}</h3>
         <p>{obj.comment}</p>
         </div>
        )
    })
  
    
    return (
        <div>
         _______________________________________________________________________________
         <br />
         <br /> 
         <button onClick={hideComments}>{comments ? "Hide Comments": "Show Comments"}</button> 
        {comments ? (commentsArray) : null}
        <h4><strong>2 Comments</strong></h4>
        


        </div>
    );    
};

export default Comments