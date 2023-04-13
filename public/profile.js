const popupcreatepost = document.querySelector('.popupcreatepost');
const popupeditpost = document.querySelector('.popupeditpost');
// const fade = document.querySelector('#containerid');
const postcreatebtn = document.querySelector('.createpostbtn');
const editbtn = document.querySelector('popupeditbtn');
const closeModalButton = document.querySelector('#closecreatepage');
const closeeditbtn = document.querySelector('#closeedit');
// const drpbtn = document.querySelector('.dropbtn');
//show popup
postcreatebtn.addEventListener('click', () => {
    popupcreatepost.classList.toggle('show');
    popupcreatepost.style.display = 'block';
    
    
})

closeModalButton.addEventListener('click', () => {
    popupcreatepost.style.display = 'none';
    
});
function removeUser1(){
    document.getElementById('table').deleteRow(1);
}
function removeUser2(){
    document.getElementById('table').deleteRow(2);
}
function removeUser3(){
    document.getElementById('table').deleteRow(3);
}
function removeUser4(){
    document.getElementById('table').deleteRow(4);
}
function removeUser5(){
    document.getElementById('table').deleteRow(5);
}

editbtn.addEventListener('click', () => {
    popupeditpost.classList.toggle('show');
    popupeditpost.style.display = 'block';
});

closeeditbtn.addEventListener('click', () => {
    popupeditpost.style.display = 'none';
});

window.addEventListener('click', function (event) {
    if (event.target === popupcreatepost) {
        popupcreatepost.style.display = 'none';
    }
    if (event.target === popupeditpost) {
        popupeditpost.style.display = 'none';
    }
});
