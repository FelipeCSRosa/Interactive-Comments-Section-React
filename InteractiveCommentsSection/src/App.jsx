import Comment from "./Components/Comment"
import AddComment from "./Components/AddComment";

import Data from "./data.json"
import { useState } from "react";
import DeleteModal from "./Components/DeleteModal";

localStorage.setItem('currentUser', Data.currentUser);

function App() {
  let [data, setData] = useState(Data);

  function UpVote(Idcomment, Idreply){
    if(Idreply === undefined){
      
      setData(Data.comments.find(e => e.id === Idcomment).score += 1)
      
    }else{
      
      setData(Data.comments.find(e => e.id === Idcomment).replies.find(e => e.id === Idreply).score += 1)
      
    }
  }

  function DownVote(Idcomment, Idreply){
    if(Idreply === undefined){
      
      let score = Data.comments.find(e => e.id === Idcomment).score;
      if(score <= 0){
        setData(Data.comments.find(e => e.id === Idcomment).score = 0)
      }else{
        setData(Data.comments.find(e => e.id === Idcomment).score -= 1)
      }
      
    }else{
      
      let score = Data.comments.find(e => e.id === Idcomment).replies.find(e => e.id === Idreply).score;
      if(score <= 0){
        setData(Data.comments.find(e => e.id === Idcomment).replies.find(e => e.id === Idreply).score = 0)
      }else{
        setData(Data.comments.find(e => e.id === Idcomment).replies.find(e => e.id === Idreply).score -= 1)
      }
      
    }
  }

  function openModal(mdIdComment, mdIdReply) {
    localStorage.setItem('mdIdComment', mdIdComment);
    localStorage.setItem('mdIdReply', mdIdReply);
    // Get the modal
    var modal = document.getElementById("myModal");
    modal.style.display = "flex";

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }

  function deleteComment(){
    

    let actIdComment = localStorage.getItem('mdIdComment')
    let actIdReply = localStorage.getItem('mdIdReply')

    if(actIdReply === "undefined"){

      

      let index = Data.comments.findIndex(e => {
        return e.id == actIdComment;
      });
      

      setData(Data.comments.splice(index, 1));

      var modal = document.getElementById("myModal");
      modal.style.display = "none";
      
    }else{
      

      let index = Data.comments.find(e => e.id == actIdComment).replies.findIndex(e => {
        return e.id == actIdReply;
      })

      

      setData(Data.comments.find(e => e.id == actIdComment).replies.splice(index, 1));

      var modal = document.getElementById("myModal");
      modal.style.display = "none";
    }
  }

  function updateComment(idComment, idReply, text){
    if(idReply === undefined){
      

      setData(Data.comments.find(e => e.id === idComment).content = text)
    }else{
      

      setData(Data.comments.find(e => e.id === idComment).replies.find(e => e.id === idReply).content = text)
    }
  }

  return (
    <main>
      <DeleteModal deleteComment={deleteComment}/>
      {
        Data.comments.map( comment => {
          return (
            <>
              <Comment Idcomment={comment.id} key={comment.id} user={comment.user} score={comment.score} createdAt={comment.createdAt} content={comment.content} downVote={DownVote} upVote={UpVote} openModal={openModal} updateComment={updateComment}/>
              {
                comment.replies.map((reply, i, arr) => {
                  if(arr.length - 1 === i){
                    return (
                      <Comment Idcomment={comment.id} Idreply={reply.id} key={reply.id} user={reply.user} score={reply.score} createdAt={reply.createdAt} content={reply.content} type="reply" last="true" downVote={DownVote} upVote={UpVote} openModal={openModal} updateComment={updateComment}/>
                    )
                  } else {
                    return (
                      <Comment Idcomment={comment.id} Idreply={reply.id} key={reply.id} user={reply.user} score={reply.score} createdAt={reply.createdAt} content={reply.content} type="reply" downVote={DownVote} upVote={UpVote} openModal={openModal} updateComment={updateComment}/>
                    )
                  }
                })
              }
            </>
          )
        })
      }
      <AddComment user={localStorage.getItem("currentUser")} type="SEND"/>
    </main>
  )
}

export default App