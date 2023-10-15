

 var news = document.getElementById('news');
 var news1 = document.getElementById('news1');
 news.addEventListener('mouseover', function(){
    if (news1.style.display = 'block')
    news.style.display = 'none'
 });
 news.addEventListener('mouseout', function() {
    if (news1.style.display = 'none')
    news.style.display = 'block'
 
     
 });


 var help = document.getElementById('help');
 var help1 = document.getElementById('help1');
 help.addEventListener('mouseover', function(){
    if (help1.style.display = 'block')
    help.style.display = 'none'
 });
 help.addEventListener('mouseout', function() {
    if (help1.style.display = 'none')
    help.style.display = 'block'
 
     
 });

 var com = document.getElementById('com');
 var com1 = document.getElementById('com1');
 com.addEventListener('mouseover', function(){
    if (com1.style.display = 'block')
    com.style.display = 'none'
 });
 com.addEventListener('mouseout', function() {
    if (com1.style.display = 'none')
    com.style.display = 'block'
 
     
 });


 var guide = document.getElementById('guide');
 var guide1 = document.getElementById('guide1');
 guide.addEventListener('mouseover', function(){
    if (guide1.style.display = 'block')
    guide.style.display = 'none'
 });
 guide.addEventListener('mouseout', function() {
    if (guide1.style.display = 'none')
    guide.style.display = 'block'
 
     
 });


 


 var signin = document.getElementById('signin');
 var signin1 = document.getElementById('signin1');
 var signin2 = document.getElementById('signin2');
 signin.addEventListener('click', function(){
    if (signin1.style.display = 'none') 
    signin1.style.display = 'inline'
    signin2.style.display = 'none'   
 });

 var buttonx = document.getElementById('buttonx');
 buttonx.addEventListener('click', function() {
   signin1.style.display = 'none'
   signin2.style.display = 'block'
 });

 

 var fc1 = document.getElementById('fc1');
 var fc11 = document.getElementById('fc11');
 fc1.addEventListener('mouseover', function(){
   fc1.style.marginBottom = '3%'
   fc1.style.marginTop = '4%' 
 });
 fc1.addEventListener('mouseout', function(){
   fc1.style.marginBottom = '1%'
   fc1.style.marginTop = '7%' 

 });
 fc11.addEventListener('click', function(){
   window.location.href = 'https://www.ea.com/games/fifa/fifa-mobile/news/new-season-transition-details'
 });


 var fc2 = document.getElementById('fc2');
 
 fc2.addEventListener('mouseover', function(){
   fc2.style.marginBottom = '3%'
   fc2.style.marginTop = '4%' 
 });
 fc2.addEventListener('mouseout', function(){
   fc2.style.marginBottom = '1%'
   fc2.style.marginTop = '7%' 

 });
 var fc12 = document.getElementById('fc12');
 fc12.addEventListener('click', function(){
   window.location.href = 'https://www.ea.com/games/fifa/fifa-mobile/news/easportsfcmobile-reveal'
 });


 var fc3 = document.getElementById('fc3');
 
 fc3.addEventListener('mouseover', function(){
   fc3.style.marginBottom = '3%'
   fc3.style.marginTop = '4%' 
 });
 fc3.addEventListener('mouseout', function(){
   fc3.style.marginBottom = '1%'
   fc3.style.marginTop = '7%' 

 });
 var fc13 = document.getElementById('fc13');
 fc13.addEventListener('click', function(){
   window.location.href = 'https://www.ea.com/games/fifa/fifa-mobile/news/easportsfcmobile-limited-beta-testflight-guide'
 });


 var fc4 = document.getElementById('fc4');
 
 fc4.addEventListener('mouseover', function(){
   fc4.style.marginBottom = '3%'
   fc4.style.marginTop = '4%' 
 });
 fc4.addEventListener('mouseout', function(){
   fc4.style.marginBottom = '1%'
   fc4.style.marginTop = '7%' 

 });
 var fc14 = document.getElementById('fc14');
 fc14.addEventListener('click', function(){
   window.location.href = 'https://www.ea.com/games/fifa/fifa-mobile/news/easportsfcmobile-limited-beta'
 }); 


 var fc5 = document.getElementById('fc5');
 
 fc5.addEventListener('mouseover', function(){
   fc5.style.marginBottom = '3%'
   fc5.style.marginTop = '4%' 
 });
 fc5.addEventListener('mouseout', function(){
   fc5.style.marginBottom = '1%'
   fc5.style.marginTop = '7%' 

 });
 var fc15 = document.getElementById('fc15');
 fc15.addEventListener('click', function(){
   window.location.href = 'https://www.ea.com/games/fifa/fifa-mobile/news/community-roadmap-july-2023'
 });


 var fc6 = document.getElementById('fc6');
 
 fc6.addEventListener('mouseover', function(){
   fc6.style.marginBottom = '3%'
   fc6.style.marginTop = '4%' 
 });
 fc6.addEventListener('mouseout', function(){
   fc6.style.marginBottom = '1%'
   fc6.style.marginTop = '7%' 

 });
 var fc16 = document.getElementById('fc16');
 fc16.addEventListener('click', function(){
   window.location.href = 'https://www.ea.com/games/fifa/fifa-mobile/news/easportsfcmobile-announcement'
 });

 var mainbody = document.getElementById('mainbody');
 var home = document.getElementById('home');
 var eventnew = document.getElementById('eventnew');
 var footballplayer = document.getElementById('footballplayer');
 news1.addEventListener('click', function(){
   home.style.display = 'flex'
   eventnew.style.display = 'flex'
   mainbody.style.display = 'none'
   footballplayer.style.display = 'none'
 });
 var home1 = document.getElementById('home1')
 home1.addEventListener('click', function(){
   home1.style.display = 'none'
   eventnew.style.display = 'none'
   mainbody.style.display = 'block'
   footballplayer.style.display = 'block'


 });
 
 
 home.addEventListener('mouseover', function(){
   home.style.display = 'none'
   home1.style.display = 'block'
 });
 home1.addEventListener('mouseout', function(){
   if(home1.style.display = 'block'){
      home1.style.display = 'none'
      home.style.display = 'block'
   }

 });

help1.addEventListener('click', function(){
   window.location.href = 'https://help.ea.com/en/help-top-issues/?product=fifa-mobile&r=1'
});
guide1.addEventListener('click', function(){
   window.location.href = 'https://www.ea.com/games/fifa/fifa-mobile/guide'
});




com1.addEventListener('click', function(){
  window.location.href = 'https://answers.ea.com/t5/FIFA-Mobile/ct-p/fifa-mobile-19-en'
});
guide1.addEventListener('click', function(){
  window.location.href = 'https://www.ea.com/games/fifa/fifa-mobile/guide'
});
road1.addEventListener('click', function(){
  window.location.href = 'https://www.ea.com/games/fifa/fifa-mobile/road-to-the-final'
});


var signinimg = document.getElementById('signinimg');
var signinimg1 = document.getElementById('signinimg1');

signinimg.addEventListener('mouseover', function(){  
   signinimg.style.marginTop = '4%'
   signinimg1.style.marginBottom = '6%';  
});
signinimg.addEventListener('mouseout', function(){ 
  signinimg.style.marginTop = '5%';
  signinimg1.style.marginBottom = '5%'; 
});

var createaccountimg = document.getElementById('createaccountimg');
var createaccountimg1 = document.getElementById('createaccountimg1');
createaccountimg.addEventListener('mouseover', function(){  
  createaccountimg.style.marginTop = '4%'
  createaccountimg1.style.marginBottom = '6%';  
});
createaccountimg.addEventListener('mouseout', function(){ 
  createaccountimg.style.marginTop = '5%';
  createaccountimg1.style.marginBottom = '5%'; 
});

var checkemail = document.getElementById('checkemail');
checkemail.addEventListener('click', function(){
  window.location.href = 'https://signin.ea.com/p/juno/login?execution=e1638051626s1&initref=https%3A%2F%2Faccounts.ea.com%3A443%2Fconnect%2Fauth%3Finitref_replay%3Dfalse%26response_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fmyaccount.ea.com%252Fcp-ui%252Faboutme%252Flogin%26locale%3Den_US%26client_id%3Dcustomer_portal'
});



function signin12() {
  
  var inputemail = document.getElementById('inputemail').value;
  var inputage = document.getElementById('inputage').value;
  var signin123 = document.getElementById('signin123');
  var signinsuccess = document.getElementById('signinsuccess12');
  if (inputemail == "" || inputage == ""){
    alert("please fill all fields")
  } 

  else if (isNaN(inputage)){
    alert("age must be a number")
  }
  else {
    signinsuccess.style.display = 'block'
    signin123.style.display = 'none'
  }
  
};

var privacy = document.getElementById('privacy');
privacy.addEventListener('click', function(){
  window.location.href = 'https://www.ea.com/legal/privacy-portal'

});

var preferences = document.getElementById('preferences');
preferences.addEventListener('click', function(){
  window.location.href = 'https://signin.ea.com/p/juno/login?execution=e1638051626s1&initref=https%3A%2F%2Faccounts.ea.com%3A443%2Fconnect%2Fauth%3Finitref_replay%3Dfalse%26response_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fmyaccount.ea.com%252Fcp-ui%252Faboutme%252Flogin%26locale%3Den_US%26client_id%3Dcustomer_portal'
});











 




 

