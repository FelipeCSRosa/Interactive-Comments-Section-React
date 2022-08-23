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

  input[type=text] {
    width: 100%;
    margin: 0 20px;
    border-radius: 10px;
    border: 2px solid black;
    outline: none;

    padding: 15px 22px;
  }

  .button {
    background-color: hsl(238, 40%, 52%);
    height: fit-content;
    max-width: 90px;
    font-size: 1.2rem;
    font-weight: 500;
    padding: 0.4em 1em;
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }

  .button:hover {
    opacity: 50%;
  }
`

function AddComment({user}) {
  return (
    <AddCommentCard>
      <div>
        <img src={eval(user)} alt="" />
      </div>
      <input type="text" />
      <div className="button">SEND</div>
    </AddCommentCard>
  )
}

export default AddComment