import styled from "styled-components"

import amyrobson from "../assets/avatars/image-amyrobson.png"
import juliusomo from "../assets/avatars/image-juliusomo.png"
import maxblagun from "../assets/avatars/image-maxblagun.png"
import ramsesmiron from "../assets/avatars/image-ramsesmiron.png"

import ReplyIcon from "../assets/icon-reply.svg"
import DeleteIcon from "../assets/icon-delete.svg"
import EditIcon from "../assets/icon-edit.svg"
import MinusIcon from "../assets/icon-minus.svg"
import MinusIcon2 from "../assets/icon-minus-2.svg"
import PlusIcon from "../assets/icon-plus.svg"
import PlusIcon2 from "../assets/icon-plus-2.svg"

const CommentCardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;

  .reply-line-container{
    display: ${props => props.type != "reply"? "none" : "flex"};

    width: 70px;
    justify-content: center;
  }

  .reply-line {
    height: ${props => props.last == "true"? "calc(100% - 20px)" : ""};;
    width: 2px;
    background-color: hsl(223, 19%, 93%);
  }
`

const CommentCard = styled.div`
  margin-bottom: 20px;
  border-radius: 15px;
  background-color: white;

  max-width: ${props => props.type == "reply"? "630px" : "700px"};
  height: 150px;

  padding: 20px;

  display: flex;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }

  .header-left, .header-right .action {
      display: flex;
      align-items: center;
  }

  .header-right {
    display: flex;

    .action {
      margin-left: 15px;
      cursor: pointer;
    }

    .action:hover{
      opacity: 50%;
    }
  }

  .header-left img {
    width: 30px;
  }

  .username {
    font-weight: 700;
  }

  .header-left .date {
    font-weight: 500;
    color: #949090;
    cursor: default;
  }

  .header-left-element {
    margin-right: 15px;
    cursor: pointer;
  }

  .header-right p {
    margin-left: 5px;
    color: hsl(238, 40%, 52%);
    font-weight: 700;
  }

  .header-right .delete p{
    color: hsl(358, 79%, 66%);
  }
  

  .header-right .reply {
    display: ${props => props.user == localStorage.currentUser? "none" : "default"};
  }
  
  .header-right .edit {
    display: ${props => props.user == localStorage.currentUser? "default" : "none"};
  }

  .header-right .delete {
    display: ${props => props.user == localStorage.currentUser? "defaul" : "none"};
  }
`

const VoteButton = styled.div`
  height: 90%;
  min-width: 40px;
  margin-right: 20px;

  background-color: hsl(228, 33%, 97%);

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0px 8px;
  border-radius: 8px;

  color: hsl(238, 40%, 52%);
  font-weight: 700;

  img {
    cursor: pointer;
    max-width: 11px;
  }

  img:hover{
    opacity: 50%;
  }
`

function Comment({Idcomment, Idreply, type, last, user, score, createdAt, content, downVote, upVote, openModal}) {

  function handleUpVote(){
    upVote(Idcomment, Idreply);
  }

  function handleDownVote(){
    downVote(Idcomment, Idreply);
  }

  function handleOpenModal(){
    openModal(Idcomment, Idreply);
  }

  return (
    <CommentCardContainer type={type} last={last}>
      <div className="reply-line-container">
        <div className="reply-line">
        </div>
      </div>

      <CommentCard type={type} user={user}>
        <VoteButton>
          <img src={PlusIcon2} alt="" onClick={handleUpVote}/>
          <p>{score}</p>
          <img src={MinusIcon2} alt="" onClick={handleDownVote}/>
        </VoteButton>

        <div className="CommentCardInfo">
          <header>
            <div className="header-left">
              <img src={eval(user)} alt="" className="header-left-element" />
              <p className="header-left-element username">{user}</p>
              <p className="header-left-element date">{createdAt}</p>
            </div>

            <div className="header-right">
              <div className="action reply">
                <img src={ReplyIcon} alt="" />
                <p>Reply</p>
              </div>

              <div className="action delete" onClick={handleOpenModal}>
                <img src={DeleteIcon} alt="" />
                <p>Delete</p>
              </div>

              <div className="action edit">
                <img src={EditIcon} alt="" />
                <p>Edit</p>
              </div>
            </div>
          </header>

          <p>
            {content}
          </p>
        </div>
      </CommentCard>
    </CommentCardContainer>
  )
}

export default Comment