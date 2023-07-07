var ox = [["", "", "", ""], ["", "", "", ""], ["", "", "", ""], ["", "", "", ""]];
var tr = [[5, 5, 5, 5], [5, 5, 5, 5], [5, 5, 5, 5], [5, 5, 5, 5]];
var winner = document.getElementById("winner");

ox[1][1] = document.getElementById("r1c1");
ox[1][2] = document.getElementById("r1c2");
ox[1][3] = document.getElementById("r1c3");
ox[2][1] = document.getElementById("r2c1");
ox[2][2] = document.getElementById("r2c2");
ox[2][3] = document.getElementById("r2c3");
ox[3][1] = document.getElementById("r3c1");
ox[3][2] = document.getElementById("r3c2");
ox[3][3] = document.getElementById("r3c3");

var ctr = 0;
var rand = Math.random() * 2;
console.log(rand);

if (rand >= 1) {
    var a = 'X';
    var b = 'O';
}

else {
    var a = 'O';
    var b = 'X';
}


ox[1][1].addEventListener("click", () => {
    console.log('Hello');
    if (tr[1][1] == 5) {
        ox[1][1].style.color="black";
        if (ctr % 2 == 0) {
            tr[1][1] = 1;
            ox[1][1].innerHTML = a;
        }

        else {
            tr[1][1] = 0;
            ox[1][1].innerHTML = b;
        }

        ctr++;
        validate(tr);
    }

})

ox[1][2].addEventListener("click", () => {
    console.log('Hello');
    if (tr[1][2] == 5) {
        ox[1][2].style.color="black";
        if (ctr % 2 == 0) {
            tr[1][2] = 1;
            ox[1][2].innerHTML = a;
        }

        else {
            tr[1][2] = 0;
            ox[1][2].innerHTML = b;
        }

        ctr++;
        validate(tr);

    }
})

ox[1][3].addEventListener("click", () => {
    console.log('Hello');
    if (tr[1][3] == 5) {
        ox[1][3].style.color="black";
        if (ctr % 2 == 0) {
            tr[1][3] = 1;
            ox[1][3].innerHTML = a;
        }

        else {
            tr[1][3] = 0;
            ox[1][3].innerHTML = b;
        }

        ctr++;
        validate(tr);
    }
})

ox[2][1].addEventListener("click", () => {
    console.log('Hello');
    if (tr[2][1] == 5) {
        ox[2][1].style.color="black";
        if (ctr % 2 == 0) {
            tr[2][1] = 1;
            ox[2][1].innerHTML = a;
        }

        else {
            tr[2][1] = 0;
            ox[2][1].innerHTML = b;
        }

        ctr++;
        validate(tr);

    }
})

ox[2][2].addEventListener("click", () => {
    console.log('Hello');
    if (tr[2][2] == 5) {
        ox[2][2].style.color="black";
        if (ctr % 2 == 0) {
            tr[2][2] = 1;
            ox[2][2].innerHTML = a;
        }

        else {
            tr[2][2] = 0;
            ox[2][2].innerHTML = b;
        }

        ctr++;
        validate(tr);

    }
})

ox[2][3].addEventListener("click", () => {
    console.log('Hello');
    if (tr[2][3] == 5) {
        ox[2][3].style.color="black";
        if (ctr % 2 == 0) {
            tr[2][3] = 1;
            ox[2][3].innerHTML = a;
        }

        else {
            tr[2][3] = 0;
            ox[2][3].innerHTML = b;
        }

        ctr++;
        validate(tr);

    }
})

ox[3][1].addEventListener("click", () => {
    console.log('Hello');
    if (tr[3][1] == 5) {
        ox[3][1].style.color="black";
        if (ctr % 2 == 0) {
            tr[3][1] = 1;
            ox[3][1].innerHTML = a;
        }

        else {
            tr[3][1] = 0;
            ox[3][1].innerHTML = b;
        }

        ctr++;
        validate(tr);

    }
})

ox[3][2].addEventListener("click", () => {
    console.log('Hello');
    if (tr[3][2] == 5) {
        ox[3][2].style.color="black";
        if (ctr % 2 == 0) {
            tr[3][2] = 1;
            ox[3][2].innerHTML = a;
        }

        else {
            tr[3][2] = 0;
            ox[3][2].innerHTML = b;
        }

        ctr++;
        validate(tr);

    }
})

ox[3][3].addEventListener("click", () => {
    console.log('Hello');
    if (tr[3][3] == 5) {
        ox[3][3].style.color="black";
        if (ctr % 2 == 0) {
            tr[3][3] = 1;
            ox[3][3].innerHTML = a;
        }

        else {
            tr[3][3] = 0;
            ox[3][3].innerHTML = b;
        }

        ctr++;
        validate(tr);
    }
})


function validate(tr) {
    if (check(tr)) {
        winner.innerHTML = "Game Ends";
    }

    else if (ctr == 9) {
        winner.innerHTML = "Tie";
    }
}



function check(tr) {
    var diag1sum = 0;
    var diag2sum = 0;
    for (var i = 1; i <= 3; i++) {
        var rowsum = 0;
        var colsum = 0;

        for (var j = 1; j <= 3; j++) {
            rowsum += tr[i][j];
            colsum += tr[j][i];

            if (i === j)
                diag1sum += tr[i][j];

            if (i + j == 4)
                diag2sum += tr[i][j];
        }

        if (rowsum == 3 || rowsum == 0) {
            console.log('C1');
            return 1;
        }
        if (colsum == 3 || colsum == 0) {
            console.log('C2');
            return 1;
        }
    }

    if (diag1sum == 3 || diag1sum == 0) {
        console.log('C3');
        return 1;
    }

    if (diag2sum == 3 || diag2sum == 0) {
        console.log('C4');
        return 1;
    }

    return 0;
}


// function print(tr) {
//     for (var i = 1; i <= 3; i++) {
//         for (var j = 1; j <= 3; j++)
//             console.log(tr[i][j] + " ");
//     }
// }
