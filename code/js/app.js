const saveEditBoardModalButton = document.getElementById(
  "saveEditBoardModalButton"
);

const addNewBoardEditBoardModalButton = document.getElementById(
  "addNewBoardEditBoardModalButton"
);

const editBoardDialog = document.getElementById("editBoardDialog");

const addNewColumnButton = document.getElementById("addNewColumnButton");

addNewColumnButton.addEventListener("click", () => {
  editBoardDialog.showModal();
});

saveEditBoardModalButton.addEventListener("click", () => {
  editBoardDialog.closeModal();
});
