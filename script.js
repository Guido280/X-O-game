let turn = 'x';
let up = document.querySelector('.up');
let bord = [];

function end(num1, num2, num3) {
    up.innerHTML = `${bord[num1]} winner`
    document.getElementById('item' + num1).style.backgroundColor = '#000';
    document.getElementById('item' + num2).style.backgroundColor = '#000';
    document.getElementById('item' + num3).style.backgroundColor = '#000';

    setInterval(function() { up.innerHTML += '.' }, 1000);
    setTimeout(function() { location.reload() }, 4000)
}


function winner() {
    for (let i = 1; i < 10; i++) {
        bord[i] = document.getElementById('item' + i).innerHTML;
    }
    if (bord[1] == bord[2] && bord[2] == bord[3] && bord[1] != '') {

        end(1, 2, 3);



    } else if (bord[4] == bord[5] && bord[5] == bord[6] && bord[6] != '') {


        end(4, 5, 6);

    } else if (bord[7] == bord[8] && bord[8] == bord[9] && bord[9] != '') {

        end(7, 8, 9);

    } else if (bord[1] == bord[4] && bord[4] == bord[7] && bord[1] != '') {
        end(1, 4, 7);


    } else if (bord[2] == bord[5] && bord[5] == bord[8] && bord[5] != '') {

        end(2, 5, 8);


    } else if (bord[3] == bord[6] && bord[6] == bord[9] && bord[6] != '') {


        end(3, 6, 9);

    } else if (bord[1] == bord[5] && bord[5] == bord[9] && bord[9] != '') {

        end(1, 5, 9);


    } else if (bord[3] == bord[5] && bord[5] == bord[7] && bord[5] != '') {

        end(3, 5, 7);


    }

}

function game(id) {
    let elemnt = document.getElementById(id)
    if (turn === 'x' && elemnt.innerHTML == '') {
        elemnt.innerHTML = 'x';
        turn = 'o';
        up.innerHTML = 'O'
    } else if (turn === 'o' && elemnt.innerHTML == '') {
        elemnt.innerHTML = 'o';
        turn = 'x';
        up.innerHTML = 'x'
    }
    winner();
}