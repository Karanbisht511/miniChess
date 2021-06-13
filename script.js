//board
let board = document.getElementById("board");
let player1 = document.getElementById("p1");
let player2 = document.getElementById("p2");
let p1 = 0,
  p2 = 0;
let boxes = document.getElementsByClassName("box"); //selecting all boxes of board
let p1Down = []; //katti gotiyan
let p2Down = [];
//Pieces of the board
let pieces = [
  `<i class="fas fa-chess-rook fa-2x"></i>`,
  `<i class="fas fa-chess-knight fa-2x"></i>`,
  `<i class="fas fa-chess-bishop fa-2x">`,
  `<i class="fas fa-chess-queen fa-2x"></i>`,
  `<i class="fas fa-chess-king fa-2x"></i>`,
  `<i class="fas fa-chess-bishop fa-2x"></i>`,
  `<i class="fas fa-chess-knight fa-2x"></i>`,
  `<i class="fas fa-chess-rook fa-2x"></i>`,
  `<i class="fas fa-chess-pawn fa-2x"></i>`,
  `<i class="fas fa-chess-pawn fa-2x"></i>`,
  `<i class="fas fa-chess-pawn fa-2x"></i>`,
  `<i class="fas fa-chess-pawn fa-2x"></i>`,
  `<i class="fas fa-chess-pawn fa-2x"></i>`,
  `<i class="fas fa-chess-pawn fa-2x"></i>`,
  `<i class="fas fa-chess-pawn fa-2x"></i>`,
  `<i class="fas fa-chess-pawn fa-2x"></i>`,
  `<i class="fal fa-chess-pawn-alt fa-2x"></i>`,
  `<i class="fal fa-chess-pawn-alt fa-2x"></i>`,
  `<i class="fal fa-chess-pawn-alt fa-2x"></i>`,
  `<i class="fal fa-chess-pawn-alt fa-2x"></i>`,
  `<i class="fal fa-chess-pawn-alt fa-2x"></i>`,
  `<i class="fal fa-chess-pawn-alt fa-2x"></i>`,
  `<i class="fal fa-chess-pawn-alt fa-2x"></i>`,
  `<i class="fal fa-chess-pawn-alt fa-2x"></i>`,
  `<i class="fal fa-chess-rook-alt fa-2x"></i>`,
  `<i class="far fa-chess-knight fa-2x"></i>`,
  `<i class="far fa-chess-bishop fa-2x"></i>`,
  `<i class="far fa-chess-queen fa-2x"></i>`,
  `<i class="far fa-chess-king fa-2x"></i>`,
  `<i class="far fa-chess-bishop fa-2x"></i>`,
  `<i class="far fa-chess-knight fa-2x"></i>`,
  `<i class="fal fa-chess-rook-alt fa-2x"></i>`,
];

// Initializing the board
let k = 0;
function run1() {
  for (var row = 1; row != 9; row++) {
    for (var column = 1; column != 9; column++) {
      if ((row + column) % 2 === 0 && row < 3) {
        let blackBox = document.createElement("div");
        blackBox.innerHTML = pieces[k];
        blackBox.classList.add("black");
        blackBox.classList.add("box");
        blackBox.style.textAlign = "center";
        blackBox.style.gridColumnStart = column;
        blackBox.style.gridRowStart = row;
        board.appendChild(blackBox);
        k++;
      } else if ((row + column) % 2 != 0 && row < 3) {
        let whiteBox = document.createElement("div");
        whiteBox.innerHTML = pieces[k];
        whiteBox.classList.add("white");
        whiteBox.classList.add("box");
        whiteBox.style.textAlign = "center";
        whiteBox.style.gridColumnStart = column;
        whiteBox.style.gridRowStart = row;
        board.appendChild(whiteBox);
        k++;
      } else if ((row + column) % 2 === 0 && row > 6) {
        let blackBox = document.createElement("div");
        blackBox.innerHTML = pieces[k];
        blackBox.classList.add("black");
        blackBox.classList.add("box");
        blackBox.style.textAlign = "center";
        blackBox.style.gridColumnStart = column;
        blackBox.style.gridRowStart = row;
        board.appendChild(blackBox);
        k++;
      } else if ((row + column) % 2 != 0 && row > 6) {
        let whiteBox = document.createElement("div");
        whiteBox.innerHTML = pieces[k];
        whiteBox.classList.add("white");
        whiteBox.classList.add("box");
        whiteBox.style.textAlign = "center";
        whiteBox.style.gridColumnStart = column;
        whiteBox.style.gridRowStart = row;
        board.appendChild(whiteBox);
        k++;
      } else if ((row + column) % 2 === 0) {
        let blackBox = document.createElement("div");
        // blackBox.innerHTML = pieces[k];
        blackBox.classList.add("black");
        blackBox.classList.add("box");
        blackBox.style.textAlign = "center";
        blackBox.style.gridColumnStart = column;
        blackBox.style.gridRowStart = row;
        board.appendChild(blackBox);
      } else if ((row + column) % 2 !== 0) {
        let whiteBox = document.createElement("div");
        // whiteBox.innerHTML = pieces[k];
        whiteBox.classList.add("white");
        whiteBox.classList.add("box");
        whiteBox.style.textAlign = "center";
        whiteBox.style.gridColumnStart = column;
        whiteBox.style.gridRowStart = row;
        board.appendChild(whiteBox);
      }
    }
  }
}

var z = 1;
var prevElement;
function firstClick() {
  document.addEventListener("click", function (e) {
    if (e.target.matches(".box")) {
      if (z === 1) {
        console.log(z);
        prevElement = e.target.innerHTML;
        // console.log(e.target.firstChild);
        if (e.target.firstChild)
          if (e.target.firstChild.classList[0] === "fas") {
            p1++;
            player1.innerText = p1;
          } else if (
            e.target.firstChild.classList[0] === "fal" ||
            e.target.firstChild.classList[0] === "far"
          ) {
            p2++;
            player2.innerText = p2;
          }

        // console.log(prevElement);
        e.target.innerHTML = " ";
        z++;
      } else if (z === 2) {
        console.log(z);
        z = 1;
        console.log(e.target);

        e.target.innerHTML = prevElement;
      }
    } else if (
      e.target.matches(".fas") ||
      e.target.matches(".far") ||
      e.target.matches(".fal")
    ) {
      if (z === 1) {
        console.log(z);
        prevElement = e.target.outerHTML;
        // console.log(e.target);
        if (e.target.classList[0] === "fas") {
          p1++;
          player1.innerText = p1;
        } else if (
          e.target.classList[0] === "fal" ||
          e.target.classList[0] === "far"
        ) {
          p2++;
          player2.innerText = p2;
        }

        // console.log(prevElement);
        e.target.outerHTML = " ";
        z++;
      } else if (z === 2) {
        console.log(z);
        z = 1;
        console.log(e.target);
        // let deadPiece = e.target.outerHTML;
        // deads(deadPiece);
        // console.log("p1Down:" + p1Down);
        // console.log("p2Down:" + p2Down);

        e.target.outerHTML = prevElement;
      }
    }
  });
}

function deads(piece) {
  console.log(piece);
  try {
    if (piece.classList[0] === "white") {
      switch (piece.classList[1]) {
        case "fa-chess-pawn":
          p1Down.push("pawn");
          break;
        case "fa-chess-rook":
          p1Down.push("rook");
          break;
        case "fa-chess-knight":
          p1Down.push("knight");
          break;
        case "fa-chess-bishop":
          p1Down.push("bishop");
          break;
        case "fa-chess-queen":
          p1Down.push("queen");
          break;
        case "fa-chess-king":
          p1Down.push("king");
          break;
      }
    } else if (piece.classList[0] === "fal" || piece.classList[0] === "far") {
      switch (piece.classList[1]) {
        case "fa-chess-pawn-alt":
          p2Down.push("pawn");
          break;
        case "fa-chess-rook-alt":
          p2Down.push("rook");
          break;
        case "fa-chess-knight":
          p2Down.push("knight");
          break;
        case "fa-chess-bishop":
          p2Down.push("bishop");
          break;
        case "fa-chess-queen":
          p2Down.push("queen");
          break;
        case "fa-chess-king":
          p2Down.push("king");
          break;
      }
    }
  } catch (error) {}
}

run1();
firstClick();
