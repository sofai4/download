// now we start programing the back end of join page

let btnJoin = document.querySelector('#join'),
    input   = document.querySelectorAll('input'),
    gender  = document.querySelector('select');
btnJoin.onclick = function() {
    if(input[0].value.length > 2 && input[1].value.length > 3 && input[2].value.length > 8) {
            location.href = `http://localhost/server/down/index.php?n=join&&name=${input[0].value}&&email=${input[1].value}&&ps=${input[2].value}&&gender=${gender.value}`
    }else {
        console.log('The Info You Insert Is Not Valid')
    }
}