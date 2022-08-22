import styled from "styled-components"

import juliusomo from "../assets/avatars/image-juliusomo.png"

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

  input {
    width: 100%;
    margin: 0 20px;
    border-radius: 10px;
    border: 2px solid black;
    outline: none;
  }

  .button {
    background-color: hsl(238, 40%, 52%);
    height: fit-content;
    font-size: 1.2rem;
    font-weight: 500;
    padding: 0.4em 0.6em;
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }

  .button:hover {
    opacity: 50%;
  }
`

function AddComment() {
  return (
    <AddCommentCard>
      <div>
        <img src={juliusomo} alt="" />
      </div>
      <input type="text" />
      <div className="button">BUTTON</div>
    </AddCommentCard>
  )
}

export default AddComment