

document.ready(function(e) {
  var itemlist = document.querySelector('#items');
  show(items1, itemlist);
  modalClick();
  var list = document.querySelectorAll('.sea');
  change(list, itemlist);
  
  // 判断鼠标是否滑动，
  window.onscroll = function() {
    var scrollH = document.documentElement.scrollTop || document.body.scrollTop; 
    var backtop = document.getElementById('box-backtop');
    if(scrollH > 0) {
      backtop.style.display = 'block';
    } else {
      backtop.style.display = 'none';
    }
  }
  var pitems = document.querySelectorAll(".box .box-list .list li p");
  var aitems = document.querySelectorAll(".box .box-list .list li a");
  for(let i = 0; i < aitems.length; i++) {
    aitems[i].onmouseenter = function() {
      pitems[i].style.display = 'block';
    }; 
    aitems[i].onmouseleave = function() {
      for(var j = 0; j < aitems.length; j++) {
        pitems[j].style.display = 'none';
      }
    }
}
});
// 改变季数时改变显示内容
function change(element, itemlist) {
  for(var i = 0; i < element.length; i++) {
    element[i].onclick = function(e) {
      var tabid = this.getAttribute('tabid');
      for(var j = 0; j < element.length; j++) {
        element[j].className = 'sea';
      }
      this.className += " active";
      switch(tabid) {
        case '1': 
          itemlist.innerHTML = '';
          show(items1, itemlist);
          modalClick();
        break;
        case '2': 
          itemlist.innerHTML = '';
          show(items2, itemlist);
          modalClick();
        break;
      }
    }
  }
}
// 定义添加HTML的函数
  function show(items, element) {
  
    for(var i = 0; i < items.length; i++) {
      var str = '';
      str += '<div class="item" id="item'+ i +'">';
      str += ' <div class="item-left">';
      str += ' <div class="title">';
      str += '  <h3>' + items[i].Museum + ' | ' + items[i].name +'</h3>';
      str += ' </div>';
      str += ' <div class="pic">';
      str += '  <img class="img-item" src ="./src/img/'+ items[i].name +'.jpg" alt="' + items[i].name +'">';
      str += ' </div>';
      str += ' </div>';
      str += ' <div class="item-right">';
      str += ' <div class="subtitle">' + items[i].subtitle + '</div>';
      str += ' <div class="desc">' + items[i].description + '</div>';
      str += ' </div>';
      str += ' <div class="link">';
      str += ' <a href="' + items[i].link + '" target="_blank">了解 ></a>';
      str += ' </div>';
      str += '</div>';
      str += '<hr>';
      element.innerHTML += str;

      var pitems = document.querySelectorAll(".box .box-list .list li p");
      pitems[i].innerHTML = items[i].name;
    }  
  }
 // 鼠标点击图片触发模态框事件
  function modalClick() {
    var modal = document.querySelector('.modal');
    var modalClose = document.querySelector('.modal-close');
    var modalCont = document.querySelector('.modal-content');
    var modalCover = document.querySelector('.modal-cover');
    var cloTop = modalClose.style.top;
    var contTop = modalCont.style.top;
    var coverTop = modalCover.style.top;
    var Imgs = document.querySelectorAll('.pic');
    for(let i = 0; i < Imgs.length; i++) {
      Imgs[i].onclick = function(e) {
        modal.style.display = 'block';
        modalCont.src = e.target.src;
        modalClose.style.top = window.pageYOffset + parseInt(cloTop) + 'px';
        modalCont.style.top = window.pageYOffset + parseInt(contTop) + 'px';
        modalCover.style.top = window.pageYOffset + parseInt(coverTop) + 'px';
        document.body.style.overflow = 'hidden';
      };
    }
    modalClose.onclick = function(e) {
      modal.style.display = 'none';
      modalCont.src = '';
      modalClose.style.top = cloTop;
      modalCont.style.top = contTop;
      modalCover.style.top = coverTop;
      document.body.style.overflow = 'visible';
    };
  }