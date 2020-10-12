window.onload = function(){

    var gCells =document.getElementById("board").querySelectorAll("div"), option = 0;

    document.querySelector("#board div:nth-of-type(1)").setAttribute("class", "square"); 
    document.querySelector("#board div:nth-of-type(2)").setAttribute("class", "square");
    document.querySelector("#board div:nth-of-type(3)").setAttribute("class", "square");
    document.querySelector("#board div:nth-of-type(4)").setAttribute("class", "square");
    document.querySelector("#board div:nth-of-type(5)").setAttribute("class", "square");
    document.querySelector("#board div:nth-of-type(6)").setAttribute("class", "square");
    document.querySelector("#board div:nth-of-type(7)").setAttribute("class", "square");
    document.querySelector("#board div:nth-of-type(8)").setAttribute("class", "square");
	document.querySelector("#board div:nth-of-type(9)").setAttribute("class", "square");
	
	const ticCells = document.querySelectorAll('.square');


	const x_alpha = 'X';
	const o_alpha = 'O';
	let Active = true;

	const altSymbol = (letter) => letter === 'X' ? x_alpha : o_alpha;

	const computeWin = (letter) => {
		Active = false;
  		if (letter === 'X') {
			var win = document.getElementById("status").innerHTML = "Congratulations! " + `${altSymbol(letter)}`+ " is the Winner!";
			document.getElementById('game').querySelector("div").setAttribute("class", "you-won");
  		} else {
			var win = document.getElementById("status").innerHTML = "Congratulations! " + `<span>${altSymbol(letter)}</span>`+ " is the Winner!";
			document.getElementById('game').querySelector("div").setAttribute("class", "you-won");
  		}
	};

	const checkWinners = () => {
		const topLeft = ticCells[0].classList[1];
		const topMiddle = ticCells[1].classList[1];
		const topRight = ticCells[2].classList[1];
		const middleLeft = ticCells[3].classList[1];
		const middleMiddle = ticCells[4].classList[1];
		const middleRight = ticCells[5].classList[1];
		const bottomLeft = ticCells[6].classList[1];
		const bottomMiddle = ticCells[7].classList[1];
		const bottomRight = ticCells[8].classList[1];
	  

		if (topLeft && topLeft === topMiddle && topLeft === topRight) {
		  computeWin(topLeft);
		} else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) {
		  computeWin(middleLeft);
		} else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
		  computeWin(bottomLeft);
		} else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
		  computeWin(topLeft);
		} else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
		  computeWin(topMiddle);
		} else if (topRight && topRight === middleRight && topRight === bottomRight) {
		  computeWin(topRight);
		} else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
		  computeWin(topLeft);
		} else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
		  computeWin(topRight);
		}
	};
	

	for (var t = 0; t < gCells.length; t++){
		gCells[t].onclick = function() {
			if (!Active || this.classList[1] === 'X' || this.classList[1] === 'O') {
				return;
			}
			
			if(option%2 === 0){

				checkWinners();
				option += 1;
                this.classList.add("X");

			}else {

				checkWinners();
				option += 1;
				this.classList.add("O");
			

		};
	}
		gCells[t].addEventListener("mouseover", function (){
				this.classList.add("hover");
				checkWinners();
			});
		
		gCells[t].addEventListener("mouseout", function (){
			this.classList.remove("hover");
		});

	}

	var res = document.querySelector("button");

	res.onclick = function () {
	window.location.reload();
	}
	
}

