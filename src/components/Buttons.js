import { useState } from "react";
import React from "react";

function Buttons({video}) {
    
    const [upVotes, setUpVotes] = useState(video.upvotes)

    const [downVotes, setDownVotes] = useState(video.downvotes)

   

    const togglelikes = () => {
        return setUpVotes(pV => pV + 1)
    }
    const dislikes = () => {
        return setDownVotes(pV => pV + 1)
    }
    
    return (
        <div>
            <button onClick={togglelikes}>{upVotes}👍</button>
            <button onClick={dislikes}>{downVotes}👎</button>
        </div>
    )

} 

export default Buttons