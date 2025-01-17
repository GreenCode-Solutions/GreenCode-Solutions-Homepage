document.addEventListener("DOMContentLoaded", () => {
  let teamMembersWidth = document.querySelector(".team-members").clientWidth;
  let cards = document.querySelectorAll(".team-members > .card");
  console.log(cards[0].style.width);
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.width = `${teamMembersWidth * .70}px`;
  }
  
});