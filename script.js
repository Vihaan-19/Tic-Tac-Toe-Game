var tr = [["5", "5", "5", "5"], ["5", "5", "5", "5"], ["5", "5", "5", "5"], ["5", "5", "5", "5"]]
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
var aud = ["", "", "", ""];
aud[0] = new Audio("neon-gaming-128925.mp3");
aud[1] = new Audio("stranger-things-124008.mp3");
aud[2] = new Audio("lady-of-the-80x27s-128379.mp3");
aud[3] = new Audio("kim-lightyear-just-a-dream-wake-up-153991.mp3");

$(document).ready(function () {
    $(".board button").click(function () {
        if (ctr == 0) {
            aud[Math.floor(rand * 1.5)].play();
        }

        if (this.innerHTML == ".") {
            this.style.color = "black";
            var i = Math.floor($(this).attr('id') / 10);
            var j = $(this).attr('id') % 10;
            console.log(i, j);
            if (ctr % 2 == 0) {
                tr[i][j] = 1;
                this.innerHTML = a;
            }

            else {
                tr[i][j] = 0;
                this.innerHTML = b;
            }

            ctr++;
            console.log(tr[i][j]);
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
})
