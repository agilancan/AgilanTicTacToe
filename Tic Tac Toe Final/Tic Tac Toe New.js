/*jshint esversion: 6 */

// Setting up the event listener
let userPosition_div = document.getElementById("squareProp");

userPosition_div.addEventListener('click', function() {
    console.log("hellow world!");
});


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

let board = new linkedList();
board.node(userPosition_div);


//Defining player position
function introWelcome() {
    console.log("Welcome to Tic Tac Toe!");
    var userInput = prompt("Do you want to be 'X' or 'O'?: ");
    return userInput
}


introWelcome();


//Tracker function
function tracker(userPosition_div) {
    if (userPosition_div) {
        for (let i = 0; i < 9; i = +2)
            return {
                return src='Tic Tac Toe Final\images\0058-500x500.png'; //X picture
            }
    } else {
        for (i = 1; i < 9; i = +2) {
            return src='Tic Tac Toe Final\images\004F-500x500.png'; //O picture
        }
    }