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

    // this.add = function(element) {
    //     let node = new Node(element);
    //     if(head === null) {
    //         head = node;
    //     } else {
    //         let currentNode = head;

    //         while(currentNode.next) {
    //             currentNode = currentNode.next;
    //         }

    //         currentNode.next = node;
    //     }
    //     length++;
    // };

    // this.add = function(element) {
    //     let node = new Node(element);
    //     if(head === null) {
    //         head = node;
    //     } else {
    //         let currentNode = head;
    //         while(currentNode.next) {
    //             currentNode = currentNode.next;
    //         }
    //         currentNode.next = node;
    //     }
    //     length++;
    //     tail = node;
    //     let currentNode = tail;
    //     while(currentNode.previous) {
    //         currentNode = currentNode.previous;
    //     }
    //     currentNode.previous = node;
    //     head = currentNode.next;
    // };

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
        let currentNode = head;
        head = currentNode.next;
        length--;
    };

    this.neighbourCheck = function() {
        re
    }

    // 1. list neighbours
    // 2. 



    

    // this.remove = function(element) {
    //     let currentNode = head;
    //     let previousNode;
    //     if(currentNode.element === element) {
    //         head = currentNode.next;
    //     } else {
    //         while(currentNode.element !== element) {
    //             previousNode = currentNode;
    //             currentNode = currentNode.next;
    //         }
    //         previousNode.next = currentNode.next;
    //     }
    //     length--;
    // };
}



// Defining board, with a linked list
let board = new linkedList();



// 1. Add 6th node
// 2. Make 6th node the new tail
// 3. Make second node the new Head




// 1. Need to count up to the 5th board element
// 2. Need to ensure board only contains 5 elements at any point
// 3. Starting from the 5th element do the linkedList Neighbour check function
// 4. Extract the 5th, 3rd, and 1st elements from the LinkedList, and put them in a new variable
// 5. Create a function that will take the three elements from the new variable and match against the 
// winning sequence patterns (using a linked list neighbour compare function)





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


// Variable that 
let alreadyClicked = [false, false, false, false, false, false, false, false, false];


// Square 1 properties
userPosition1_div.addEventListener('click', function() {
    board.add(userPosition1_div);
    board.remove();
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
                } else {
                    changeImage("0058-500x500.png");
                    return 1;
                }
            }
            alreadyClicked[0] = true;
            return 1;
        }
    }
});


// Square 2 properties
userPosition2_div.addEventListener('click', function() {
    board.add(userPosition2_div);
    board.remove();
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
                } else {
                    changeImage("0058-500x500.png");
                }
            }
            alreadyClicked[1] = true;
        }
    }
});


// Square 3 properties
userPosition3_div.addEventListener('click', function() {
    board.add(userPosition3_div);
    board.remove();
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
                } else {
                    changeImage("0058-500x500.png");
                }
            }
            alreadyClicked[2] = true;
        }
    }
});


// Square 4 properties
userPosition4_div.addEventListener('click', function() {
    board.add(userPosition4_div);
    board.remove();
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
                } else {
                    changeImage("0058-500x500.png");
                }
            }
            alreadyClicked[3] = true;
        }
    }
});


// Square 5 properties
userPosition5_div.addEventListener('click', function() {
    board.add(userPosition5_div);
    board.remove();
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
                } else {
                    changeImage("0058-500x500.png");
                }
            }
            alreadyClicked[4] = true;
        }
    }
});


// Square 6 properties
userPosition6_div.addEventListener('click', function() {
    board.add(userPosition6_div);
    board.remove();
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
                } else {
                    changeImage("0058-500x500.png");
                }
            }
            alreadyClicked[5] = true;
        }
    }
});


// Square 7 properties
userPosition7_div.addEventListener('click', function() {
    board.add(userPosition7_div);
    board.remove();
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
                } else {
                    changeImage("0058-500x500.png");
                }
            }
            alreadyClicked[6] = true;
        }
    }
});


// Square 8 properties
userPosition8_div.addEventListener('click', function() {
    board.add(userPosition8_div);
    board.remove();
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
                } else {
                    changeImage("0058-500x500.png");
                }
            }
            alreadyClicked[7] = true;
        }
    }
});


// Square 9 properties
userPosition9_div.addEventListener('click', function() {
    board.add(userPosition9_div);
    board.remove();
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
                } else {
                    changeImage("0058-500x500.png");
                }
            }
            alreadyClicked[8] = true;
        }
    }
});
