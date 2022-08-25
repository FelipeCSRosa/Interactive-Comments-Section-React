import styled from "styled-components"

const StyledDeleteModal = styled.div`
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100vw; /* Full width */
  height: 100vh; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  justify-content: center;
  align-items: center;

  .modal-content {
    background-color: white;  
    width: 100%;
    max-width: 350px;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    header {
      font-weight: 700;
      color: hsl(212, 24%, 26%);
      margin-bottom: 20px;
    }

    .modal-text {
      margin-bottom: 20px;
      font-size: 0.9rem;
      width: 90%;
      color: #706e6e;;
    }

    footer {
      display: flex;
      justify-content: space-between;
    }

    .modal-button {
      text-align: center;
      width: 50%;
      max-width: 150px;
      font-weight: 700;
      color: white;
      padding: 12px;
      border-radius: 8px;
      cursor: pointer;
    }
 
    .modal-button-cancel {
      background-color: hsl(211, 10%, 45%);
    }

    .modal-button-delete {
      background-color: hsl(358, 79%, 66%);
    }

    .modal-button-cancel:hover {
      opacity: 50%;
    }

    .modal-button-delete:hover {
      opacity: 50%;
    }
  }
`

function DeleteModal({deleteComment}) {

  function closeModal(){
    var modal = document.getElementById("myModal");
    modal.style.display = "";
  }

  function handleDeleteComment(){
    deleteComment();
  }

  return (
    <StyledDeleteModal id="myModal">
      <div className="modal-content">
        <header>Delete comment</header>
        <p className="modal-text">Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
        <footer>
          <div className="modal-button modal-button-cancel" onClick={closeModal}>NO, CANCEL</div>
          <div className="modal-button modal-button-delete" onClick={handleDeleteComment}>YES, DELETE</div>
        </footer>
      </div>
    </StyledDeleteModal>
  )
}

export default DeleteModal