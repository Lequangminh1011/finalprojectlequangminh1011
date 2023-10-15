


var discover = document.getElementById('discover');
var learn = document.getElementById('learn');
var explore = document.getElementById('explore');


learn.addEventListener('mouseover', function(){
    learn.style.marginTop = '4%'
    learn.style.marginBottom = '9%'
});
learn.addEventListener('mouseout', function(){
    learn.style.marginTop = '5%'
    learn.style.marginBottom = '8%'
});

discover.addEventListener('mouseover', function(){
    discover.style.marginTop = '4%'
    discover.style.marginBottom = '9%'
});
discover.addEventListener('mouseout', function(){
    discover.style.marginTop = '5%'
    discover.style.marginBottom = '8%'
});

explore.addEventListener('mouseover', function(){
    explore.style.marginTop = '4%'
    explore.style.marginBottom = '9%'
});
explore.addEventListener('mouseout', function(){
    explore.style.marginTop = '5%'
    explore.style.marginBottom = '8%'
});


var button3cham = document.getElementById('button3cham');
var noidunggamekhac = document.getElementById('noidunggamekhac');
var lastcontent = document.getElementById('lastcontent');
var eax = document.getElementById('eax');
button3cham.addEventListener('click', function(){
    lastcontent.style.display = 'block'
    noidunggamekhac.style.display = 'none'
});

eax.addEventListener('click', function(){
    lastcontent.style.display = 'none'
    noidunggamekhac.style.display = 'flex'
})




