/*jshint esversion: 6 */

//The winning moves sequences
const sequence = ((1, 2, 3), (4, 5, 6), (7, 8, 9), (1, 4, 7), (2, 5, 8), (3, 6, 9), (1, 5, 9), (3, 5, 7));


//Creating a linked list
function linkedList() {
    let length = 0;
    let head = null;
    let tail = null;

    let Node = function(element) {
        this.element = element;
        this.next = null;
        this.previous = null;
    };

    this.size = function() {
        return length;
    };

    this.head = function() {
        return head;
    };

    this.add = function(element) {
        let node = new Node(element);
        if(head === null) {
            head = node;
        } else {
            let currentNode = head;

            while(currentNode.next) {
                currentNode = currentNode.next;
            }

            currentNode.next = node;
        }
        length++;
    };
}

// Defining board, with a linked list
let board = new linkedList();


// Setting up the event listener
let userPosition1_div = document.getElementById("squareProp1");
let userPosition2_div = document.getElementById("squareProp2");
let userPosition3_div = document.getElementById("squareProp3");
let userPosition4_div = document.getElementById("squareProp4");
let userPosition5_div = document.getElementById("squareProp5");
let userPosition6_div = document.getElementById("squareProp6");
let userPosition7_div = document.getElementById("squareProp7");
let userPosition8_div = document.getElementById("squareProp8");
let userPosition9_div = document.getElementById("squareProp9");

userPosition1_div.addEventListener('click', function() {
    board.add(userPosition1_div);
    console.log('1');
    console.log(board);
    let alreadyClicked;
    playerTurn(alreadyClicked);
});

userPosition2_div.addEventListener('click', function() {
    board.add(userPosition2_div);
    console.log('2');
    console.log(board);
    let alreadyClicked;
    playerTurn(alreadyClicked);
});

userPosition3_div.addEventListener('click', function() {
    board.add(userPosition3_div);
    console.log('3');
    console.log(board);
    playerTurn();
});

userPosition4_div.addEventListener('click', function() {
    board.add(userPosition4_div);
    console.log('4');
    console.log(board);
    playerTurn();
});

userPosition5_div.addEventListener('click', function() {
    board.add(userPosition5_div);
    console.log('5');
    console.log(board);
    playerTurn();
});

userPosition6_div.addEventListener('click', function() {
    board.add(userPosition6_div);
    console.log('6');
    console.log(board);
    playerTurn();
});

userPosition7_div.addEventListener('click', function() {
    board.add(userPosition7_div);
    console.log('7');
    console.log(board);
    playerTurn();
});

userPosition8_div.addEventListener('click', function() {
    board.add(userPosition8_div);
    playerTurn();
    console.log('8');
    console.log(board);
});

userPosition9_div.addEventListener('click', function() {
    board.add(userPosition9_div);
    console.log('9');
    console.log(board);
    playerTurn();
});


// Function for replacing the square images('blank','X','O')
function changeImage(img) {
    document.getElementById("squary").src = img;
}


// Function that determines if it is X's or O's turn
let toggle = false;

function playerTurn(alreadyClicked) {
    if(alreadyClicked === true) {
        return null;
    } else {
        alreadyClicked = true;
        if(userPosition1_div || userPosition2_div || userPosition3_div || userPosition4_div || userPosition5_div || userPosition6_div || userPosition7_div || userPosition8_div || userPosition9_div) {
            toggle = !toggle;
            console.log(toggle);
            if(toggle === true) {
                changeImage("004F-500x500.png");
            } else {
                console.log('O')
            }
        }
    }
}



