/*jshint esversion: 6 */

//The winning moves sequences
const winningSequences = [
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9], 
    [1, 4, 7], 
    [2, 5, 8], 
    [3, 6, 9], 
    [1, 5, 9], 
    [3, 5, 7]
];


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

    this.tail = function() {
        return tail;
    }

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
        tail = node;
    };

    this.remove = function() {
        while(length > 5) {
            let currentNode = head;
            head = currentNode.next;
            length--;
        }
    };

//     this.neighbourCheck = function(i, squareNeibourghs) {
//         if(i > squareNeibourghs.length) {
//             return null;
//         } 
//         return squareNeibourghs + neighbourCheck(squareNeibourghs-1);
//     };

    
// // For each element in this array
// //for each element in this array
// //check if 

// for(let i = 0; i > squareNeibourghs.length; i++) {
//     if(squareNeibourghs[i] === squareNeibourghs[i][j]) {
//         return 'You win!';
//     }
// } return 

  
}

// 1. list neighbours
// 2. conduct a recursion on those afformentioned neighbours
// 3. the recursion should do the check on their respective neighbours until the conditon is met, then should close and revert back to the
// function that called it in the first place.
// 4. make sure each square has instructional code that dictates the neighbours it contains respectively



// Defining board, with a linked list
let board = new linkedList();






// 3. Starting from the 5th element do the linkedList Neighbour check function
// 4. Extract the 5th, 3rd, and 1st elements from the LinkedList, and put them in a new variable
// 5. Create a function that will take the three elements from the new variable and match against the 
// winning sequence patterns (using a linked list neighbour compare function)

// 5th element
// 3rd 
// 1st 
//currentWiin = [1,2,3]


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


// Variable that controls the back and forth X and O player positions
let toggle = false;


// Variable that checks if each square has already been clicked
let alreadyClicked = [false, false, false, false, false, false, false, false, false];


// Square 1 properties
userPosition1_div.addEventListener('click', function() {
    console.log('1');
    console.log(board);
    playerTurn(alreadyClicked);
    function playerTurn(alreadyClicked) {
        function changeImage(img) {
            document.getElementById('squary1').src = img;
        }
        if(alreadyClicked[0] === true) {
            return console.log('null');
        } else {
            if(userPosition1_div || userPosition2_div || userPosition3_div || userPosition4_div || userPosition5_div || userPosition6_div || userPosition7_div || userPosition8_div || userPosition9_div) {
                toggle = !toggle;
                console.log(toggle);
                if(toggle === true) {
                    changeImage("004F-500x500.png");
                    board.add(userPosition1_div);
                    board.remove();
                } else {
                    changeImage("0058-500x500.png");
                    board.add(userPosition1_div);
                    board.remove();
                }
            }
            alreadyClicked[0] = true;
        }
    }
});


// Square 2 properties
userPosition2_div.addEventListener('click', function() {
    console.log('2');
    console.log(board);
    playerTurn(alreadyClicked);
    function playerTurn(alreadyClicked) {
        function changeImage(img) {
            document.getElementById('squary2').src = img;
        }
        if(alreadyClicked[1] === true) {
            return console.log('null');
        } else {
            if(userPosition1_div || userPosition2_div || userPosition3_div || userPosition4_div || userPosition5_div || userPosition6_div || userPosition7_div || userPosition8_div || userPosition9_div) {
                toggle = !toggle;
                console.log(toggle);
                if(toggle === true) {
                    changeImage("004F-500x500.png");
                    board.add(userPosition2_div);
                    board.remove();
                } else {
                    changeImage("0058-500x500.png");
                    board.add(userPosition2_div);
                    board.remove();
                }
            }
            alreadyClicked[1] = true;
        }
    }
});


// Square 3 properties
userPosition3_div.addEventListener('click', function() {
    console.log('3');
    console.log(board);
    playerTurn(alreadyClicked);
    function playerTurn(alreadyClicked) {
        function changeImage(img) {
            document.getElementById('squary3').src = img;
        }
        if(alreadyClicked[2] === true) {
            return console.log('null');
        } else {
            if(userPosition1_div || userPosition2_div || userPosition3_div || userPosition4_div || userPosition5_div || userPosition6_div || userPosition7_div || userPosition8_div || userPosition9_div) {
                toggle = !toggle;
                console.log(toggle);
                if(toggle === true) {
                    changeImage("004F-500x500.png");
                    board.add(userPosition3_div);
                    board.remove();
                } else {
                    changeImage("0058-500x500.png");
                    board.add(userPosition3_div);
                    board.remove();
                }
            }
            alreadyClicked[2] = true;
        }
    }
});


// Square 4 properties
userPosition4_div.addEventListener('click', function() {
    console.log('4');
    console.log(board);
    playerTurn(alreadyClicked);
    function playerTurn(alreadyClicked) {
        function changeImage(img) {
            document.getElementById('squary4').src = img;
        }
        if(alreadyClicked[3] === true) {
            return console.log('null');
        } else {
            if(userPosition1_div || userPosition2_div || userPosition3_div || userPosition4_div || userPosition5_div || userPosition6_div || userPosition7_div || userPosition8_div || userPosition9_div) {
                toggle = !toggle;
                console.log(toggle);
                if(toggle === true) {
                    changeImage("004F-500x500.png");
                    board.add(userPosition4_div);
                    board.remove();
                } else {
                    changeImage("0058-500x500.png");
                    board.add(userPosition4_div);
                    board.remove();
                }
            }
            alreadyClicked[3] = true;
        }
    }
});


// Square 5 properties
userPosition5_div.addEventListener('click', function() {
    console.log('5');
    console.log(board);
    playerTurn(alreadyClicked);
    function playerTurn(alreadyClicked) {
        function changeImage(img) {
            document.getElementById('squary5').src = img;
        }
        if(alreadyClicked[4] === true) {
            return console.log('null');
        } else {
            if(userPosition1_div || userPosition2_div || userPosition3_div || userPosition4_div || userPosition5_div || userPosition6_div || userPosition7_div || userPosition8_div || userPosition9_div) {
                toggle = !toggle;
                console.log(toggle);
                if(toggle === true) {
                    changeImage("004F-500x500.png");
                    board.add(userPosition5_div);
                    board.remove();
                } else {
                    changeImage("0058-500x500.png");
                    board.add(userPosition5_div);
                    board.remove();
                }
            }
            alreadyClicked[4] = true;
        }
    }
});


// Square 6 properties
userPosition6_div.addEventListener('click', function() {
    console.log('6');
    console.log(board);
    playerTurn(alreadyClicked);
    function playerTurn(alreadyClicked) {
        function changeImage(img) {
            document.getElementById('squary6').src = img;
        }
        if(alreadyClicked[5] === true) {
            return console.log('null');
        } else {
            if(userPosition1_div || userPosition2_div || userPosition3_div || userPosition4_div || userPosition5_div || userPosition6_div || userPosition7_div || userPosition8_div || userPosition9_div) {
                toggle = !toggle;
                console.log(toggle);
                if(toggle === true) {
                    changeImage("004F-500x500.png");
                    board.add(userPosition6_div);
                    board.remove();
                } else {
                    changeImage("0058-500x500.png");
                    board.add(userPosition6_div);
                    board.remove();
                }
            }
            alreadyClicked[5] = true;
        }
    }
});


// Square 7 properties
userPosition7_div.addEventListener('click', function() {
    console.log('7');
    console.log(board);
    playerTurn(alreadyClicked);
    function playerTurn(alreadyClicked) {
        function changeImage(img) {
            document.getElementById('squary7').src = img;
        }
        if(alreadyClicked[6] === true) {
            return console.log('null');
        } else {
            if(userPosition1_div || userPosition2_div || userPosition3_div || userPosition4_div || userPosition5_div || userPosition6_div || userPosition7_div || userPosition8_div || userPosition9_div) {
                toggle = !toggle;
                console.log(toggle);
                if(toggle === true) {
                    changeImage("004F-500x500.png");
                    board.add(userPosition7_div);
                    board.remove();
                } else {
                    changeImage("0058-500x500.png");
                    board.add(userPosition7_div);
                    board.remove();
                }
            }
            alreadyClicked[6] = true;
        }
    }
});


// Square 8 properties
userPosition8_div.addEventListener('click', function() {
    console.log('8');
    console.log(board);
    playerTurn(alreadyClicked);
    function playerTurn(alreadyClicked) {
        function changeImage(img) {
            document.getElementById('squary8').src = img;
        }
        if(alreadyClicked[7] === true) {
            return console.log('null');
        } else {
            if(userPosition1_div || userPosition2_div || userPosition3_div || userPosition4_div || userPosition5_div || userPosition6_div || userPosition7_div || userPosition8_div || userPosition9_div) {
                toggle = !toggle;
                console.log(toggle);
                if(toggle === true) {
                    changeImage("004F-500x500.png");
                    board.add(userPosition8_div);
                    board.remove();
                } else {
                    changeImage("0058-500x500.png");
                    board.add(userPosition8_div);
                    board.remove();
                }
            }
            alreadyClicked[7] = true;
        }
    }
});


// Square 9 properties
userPosition9_div.addEventListener('click', function() {
    console.log('9');
    console.log(board);
    playerTurn(alreadyClicked);
    function playerTurn(alreadyClicked) {
        function changeImage(img) {
            document.getElementById('squary9').src = img;
        }
        if(alreadyClicked[8] === true) {
            return console.log('null');
        } else {
            if(userPosition1_div || userPosition2_div || userPosition3_div || userPosition4_div || userPosition5_div || userPosition6_div || userPosition7_div || userPosition8_div || userPosition9_div) {
                toggle = !toggle;
                console.log(toggle);
                if(toggle === true) {
                    changeImage("004F-500x500.png");
                    board.add(userPosition9_div);
                    board.remove();
                } else {
                    changeImage("0058-500x500.png");
                    board.add(userPosition9_div);
                    board.remove();
                }
            }
            alreadyClicked[8] = true;
        }
    }
});













// make a linked list called board
// make each node on that list, a nested linked list with the neighbours as their own nodes






// Adding nodes to the objectBoard linked list
// function createNeigbourNodes() {
//     for(let i = 0; i < 10; i++){
//         objectBoard.add(i);
//     }
// }


// All square neighbours
let squareNeibourghs = {
    1:[2, 4, 5],
    2:[1, 3, 5],
    3:[2, 5, 6],
    4:[1, 5, 7],
    5:[4, 1, 2, 3, 6, 7, 8, 9],
    6:[3, 5, 9],
    7:[4, 5, 8],
    8:[7, 5, 9],
    9:[8, 5, 6]
}


// Defining another board as an object, with a linked list
let objectBoard = new linkedList();


// Creating the nine variables, that will hold the square linked lists
squareObject1 = new linkedList();
squareObject2 = new linkedList();
squareObject3 = new linkedList();
squareObject4 = new linkedList();
squareObject5 = new linkedList();
squareObject6 = new linkedList();
squareObject7 = new linkedList();
squareObject8 = new linkedList();
squareObject9 = new linkedList();


// Creating the inner linked links with the neighbours of each square
objectBoard.add(squareObject1);
objectBoard.add(squareObject2);
objectBoard.add(squareObject3);
objectBoard.add(squareObject4);
objectBoard.add(squareObject5);
objectBoard.add(squareObject6);
objectBoard.add(squareObject7);
objectBoard.add(squareObject8);
objectBoard.add(squareObject9);


// All squareObject neighbours
squareObject1.add(squareObject2);
squareObject1.add(squareObject4);
squareObject1.add(squareObject5);

squareObject2.add(squareObject3);
squareObject2.add(squareObject6);
squareObject2.add(squareObject5);
squareObject2.add(squareObject4);
squareObject2.add(squareObject1);

squareObject3.add(squareObject6);
squareObject3.add(squareObject5);
squareObject3.add(squareObject2);

squareObject4.add(squareObject1);
squareObject4.add(squareObject5);
squareObject4.add(squareObject7);

squareObject5.add(squareObject1);
squareObject5.add(squareObject2);
squareObject5.add(squareObject3);
squareObject5.add(squareObject4);
squareObject5.add(squareObject6);
squareObject5.add(squareObject7);
squareObject5.add(squareObject8);
squareObject5.add(squareObject9);

squareObject6.add(squareObject3);
squareObject6.add(squareObject5);
squareObject6.add(squareObject9);

squareObject7.add(squareObject4);
squareObject7.add(squareObject5);
squareObject7.add(squareObject8);

squareObject8.add(squareObject7);
squareObject8.add(squareObject5);
squareObject8.add(squareObject9);

squareObject9.add(squareObject8);
squareObject9.add(squareObject5);
squareObject9.add(squareObject6);


// constructor
// struct

// let square1 = {
//     name: name,
//     rightNeighbour: square2,
//     downNeighbour
//     this.leftNeightbour
//     this.leftDownNeighbour
//     this.upN
//     this.upN
//     this.upN
//     this.upN
// }







// this.neighbourCheck = function(i, squareNeibourghs) {
//     if(i > squareNeibourghs.length) {
//         return null;
//     } 
//     return squareNeibourghs + neighbourCheck(squareNeibourghs-1);
// };





// // Recurive function that will check it's neighbours
// for(let i = 0; i > squareNeibourghs.length; i++) {
//     if(squareNeibourghs[i] === squareNeibourghs[i][j]) {
//         return 'You win!';
//     }
// } return 








// if first element is equal to the second element
// then move on to the the neighbouring elements


// 1 => 2 (right)
// 1 => 5 (right, down)
// 1 => 4 (down)

// 2 => 3 (right)
// 2 => 6 (right, down)
// 2 => 5 (down)
// 2 => 4 (left, down)
// 2 => 1 (left)

// 3 => 6 (down)
// 3 => 5 (left, down)
// 3 => 2 (left)

// 4 => 1 (up)
// 4 => 5 (right)
// 4 => 7 (dowm)

// 5 => 1 (left, up)
// 5 => 2 (up)
// 5 => 3 (right, up)
// 5 => 4 (left)
// 5 => 6 (right)
// 5 => 7 (left, dowm)
// 5 => 8 (dowm)
// 5 => 9 (right, dowm)

// 6 => 3 (right, up)
// 6 => 5 (left)
// 6 => 9 (dowm)

// 7 => 4 (up)
// 7 => 5 (right, up)
// 7 => 8 (right)

// 8 => 7 (left)
// 8 => 5 (up)
// 8 => 9 (right)

// 9 => 8 (left)
// 9 => 5 (left, up)
// 9 => 6 (up)





// use a square constructor method to check neighbours
//if neighbour check is true, then continue to the neighbour check in the same direction of the true enighbours


function Board(name) {
    this.constructor = Board,
    this.name = name
}

function Square(name, neighbourUp, neighbourRightUp, neighbourRight, neighbourRightDown, neighbourDown, neighbourLeftDown, neighbourLeft, neighbourLeftUp) {
    this.constructor = Square,
    this.name = name,
    this.neighbourUp = neighbourUp,
    this.neighbourRightUp = neighbourRightUp,
    this.neighbourRight = neighbourRight,
    this.neighbourRightDown = neighbourRightDown,
    this.neighbourDown = neighbourDown,
    this.neighbourLeftDown = neighbourLeftDown,
    this.neighbourLeft = neighbourLeft,
    this.neighbourLeftUp = neighbourLeftUp,
    this.neighbourCheck = function() {
        if(this.neighbourUp === true) {
            if(this.this.neighbourUp === true) {
                return 'You Win!';
            }
        }
    }
}


// intention is to pass a square function thru this. Makes code cleaner and more accessible
function neighbourCheck(square) {
    return square
}

neighbourCheck(square1);

Square.prototype = Object.create(Board.prototype);

// order matters!!!!

let square1 = new Square('square1', null, null, neighbourRight, neighbourRightDown, neighbourDown, null, null, null);
let square2 = new Square('square2', neighbourUp, neighbourRightUp, neighbourRight, neighbourRightDown, neighbourDown, neighbourLeftDown, neighbourLeft, neighbourLeftUp);
let square3 = new Square('square3', neighbourUp, neighbourRightUp, neighbourRight, neighbourRightDown, neighbourDown, neighbourLeftDown, neighbourLeft, neighbourLeftUp);
let square4 = new Square('square4', neighbourUp, neighbourRightUp, neighbourRight, neighbourRightDown, neighbourDown, neighbourLeftDown, neighbourLeft, neighbourLeftUp);
let square5 = new Square('square5', neighbourUp, neighbourRightUp, neighbourRight, neighbourRightDown, neighbourDown, neighbourLeftDown, neighbourLeft, neighbourLeftUp);
let square6 = new Square('square6', neighbourUp, neighbourRightUp, neighbourRight, neighbourRightDown, neighbourDown, neighbourLeftDown, neighbourLeft, neighbourLeftUp);
let square7 = new Square('square7', neighbourUp, neighbourRightUp, neighbourRight, neighbourRightDown, neighbourDown, neighbourLeftDown, neighbourLeft, neighbourLeftUp);
let square8 = new Square('square8', neighbourUp, neighbourRightUp, neighbourRight, neighbourRightDown, neighbourDown, neighbourLeftDown, neighbourLeft, neighbourLeftUp);
let square9 = new Square('square9', neighbourUp, neighbourRightUp, neighbourRight, neighbourRightDown, neighbourDown, neighbourLeftDown, neighbourLeft, neighbourLeftUp);

square1.prototype.neighbourUp = asdfasdf;

// 2 => 3 (right)
// 2 => 6 (right, down)
// 2 => 5 (down)
// 2 => 4 (left, down)
// 2 => 1 (left)
