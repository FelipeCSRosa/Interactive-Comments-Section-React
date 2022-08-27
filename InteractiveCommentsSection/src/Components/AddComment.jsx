import styled from "styled-components"

import amyrobson from "../assets/avatars/image-amyrobson.png"
import juliusomo from "../assets/avatars/image-juliusomo.png"
import maxblagun from "../assets/avatars/image-maxblagun.png"
import ramsesmiron from "../assets/avatars/image-ramsesmiron.png"

const AddCommentCard = styled.div`
  border-radius: 15px;
  background-color: white;
  width: 100%;
  height: 150px;
  padding: 20px;
  display: flex;
  justify-content: space-between;

  img {
    width: 50px;
  }

  textarea {
    width: 100%;
    margin: 0 20px;
    border-radius: 10px;
    border: 2px solid black;
    padding: 15px 22px;
    resize: none;
    font-family: 'DM Sans', sans-serif;
  }

  .button {
    background-color: hsl(238, 40%, 52%);
    height: fit-content;
    min-width: 110px;
    font-size: 1.2rem;
    font-weight: 500;
    padding: 0.6em 1em;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    justify-content: center;
  }

  .button:hover {
    opacity: 50%;
  }
`

function AddComment({user, type}) {
  return (
    <AddCommentCard>
      <div>
        <img src={eval(user)} alt="" />
      </div>
      <textarea name="" id=""></textarea>
      <div className="button">{type}</div>
    </AddCommentCard>
  )
}

export default AddComment