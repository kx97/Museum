"use strict";function change(l,i){for(var e=0;e<l.length;e++)l[e].onclick=function(e){for(var t=this.getAttribute("tabid"),o=0;o<l.length;o++)l[o].className="sea";switch(this.className+=" active",t){case"1":i.innerHTML="",show(items1,i),modalClick();break;case"2":i.innerHTML="",show(items2,i),modalClick()}}}function show(e,t){for(var o=0;o<e.length;o++){var l="";l+='<div class="item" id="item'+o+'">',l+=' <div class="item-left">',l+=' <div class="title">',l+="  <h3>"+e[o].Museum+" | "+e[o].name+"</h3>",l+=" </div>",l+=' <div class="pic">',l+='  <img class="img-item" src ="./src/img/'+e[o].name+'.jpg" alt="'+e[o].name+'">',l+=" </div>",l+=" </div>",l+=' <div class="item-right">',l+=' <div class="subtitle">'+e[o].subtitle+"</div>",l+=' <div class="desc">'+e[o].description+"</div>",l+=" </div>",l+=' <div class="link">',l+=' <a href="'+e[o].link+'" target="_blank">了解 ></a>',l+=" </div>",l+="</div>",l+="<hr>",t.innerHTML+=l,document.querySelectorAll(".box .box-list .list li p")[o].innerHTML=e[o].name}}function modalClick(){for(var t=document.querySelector(".modal"),o=document.querySelector(".modal-close"),l=document.querySelector(".modal-content"),i=document.querySelector(".modal-cover"),s=o.style.top,n=l.style.top,c=i.style.top,e=document.querySelectorAll(".pic"),a=0;a<e.length;a++)e[a].onclick=function(e){t.style.display="block",l.src=e.target.src,o.style.top=window.pageYOffset+parseInt(s)+"px",l.style.top=window.pageYOffset+parseInt(n)+"px",i.style.top=window.pageYOffset+parseInt(c)+"px",document.body.style.overflow="hidden"};o.onclick=function(e){t.style.display="none",l.src="",o.style.top=s,l.style.top=n,i.style.top=c,document.body.style.overflow="visible"}}document.ready(function(e){var t=document.querySelector("#items");show(items1,t),modalClick(),change(document.querySelectorAll(".sea"),t),window.onscroll=function(){var e=document.documentElement.scrollTop||document.body.scrollTop,t=document.getElementById("box-backtop");t.style.display=0<e?"block":"none"};for(var o=document.querySelectorAll(".box .box-list .list li p"),l=document.querySelectorAll(".box .box-list .list li a"),i=function(e){l[e].onmouseenter=function(){o[e].style.display="block"},l[e].onmouseleave=function(){for(var e=0;e<l.length;e++)o[e].style.display="none"}},s=0;s<l.length;s++)i(s)});