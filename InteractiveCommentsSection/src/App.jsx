import Comment from "./Components/Comment"
import AddComment from "./Components/AddComment";

import Data from "./data.json"
import { useEffect, useState } from "react";

localStorage.setItem('currentUser', Data.currentUser);

function App() {
  let [data, setData] = useState(Data);

  function UpVote(Idcomment, Idreply){
    if(Idreply === undefined){
      console.log("Comment")
      setData(Data.comments.find(e => e.id === Idcomment).score += 1)
      console.log(Data.comments.find(e => e.id === Idcomment));
    }else{
      console.log("Reply")
      setData(Data.comments.find(e => e.id === Idcomment).replies.find(e => e.id === Idreply).score += 1)
      console.log(Data.comments.find(e => e.id === Idcomment).replies.find(e => e.id === Idreply));
    }
  }

  function DownVote(Idcomment, Idreply){
    if(Idreply === undefined){
      console.log("Comment")
      setData(Data.comments.find(e => e.id === Idcomment).score -= 1)
      console.log(Data.comments.find(e => e.id === Idcomment));
    }else{
      console.log("Reply")
      setData(Data.comments.find(e => e.id === Idcomment).replies.find(e => e.id === Idreply).score -= 1)
      console.log(Data.comments.find(e => e.id === Idcomment).replies.find(e => e.id === Idreply));
    }
  }

  return (
    <main>
      {
        Data.comments.map( comment => {
          return (
            <>
              <Comment Idcomment={comment.id} key={comment.id} user={comment.user} score={comment.score} createdAt={comment.createdAt} content={comment.content} downVote={DownVote} upVote={UpVote}/>
              {
                comment.replies.map((reply, i, arr) => {
                  if(arr.length - 1 === i){
                    return (
                      <Comment Idcomment={comment.id} Idreply={reply.id} key={reply.id} user={reply.user} score={reply.score} createdAt={reply.createdAt} content={reply.content} type="reply" last="true" downVote={DownVote} upVote={UpVote}/>
                    )
                  } else {
                    return (
                      <Comment Idcomment={comment.id} Idreply={reply.id} key={reply.id} user={reply.user} score={reply.score} createdAt={reply.createdAt} content={reply.content} type="reply" downVote={DownVote} upVote={UpVote}/>
                    )
                  }
                })
              }
            </>
          )
        })
      }
      <AddComment />
    </main>
  )
}

export default App