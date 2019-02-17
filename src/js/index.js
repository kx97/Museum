document.ready(function(e) {
  var itemlist = document.querySelector('#items');
  show(items1, itemlist);
  var list = document.querySelectorAll('.sea');
  for(var i = 0; i < list.length; i++) {
    list[i].onclick = function(e) {
      var tabid = this.getAttribute('tabid');
      for(var j = 0; j < list.length; j++) {
        list[j].className = 'sea';
      }
      this.className += " active";
      switch(tabid) {
        case '1': 
          itemlist.innerHTML = '';
          show(items1, itemlist);
        break;
        case '2': 
          itemlist.innerHTML = '';
          show(items2, itemlist);
        break;
      }
    }
  }
  
});

// 定义添加HTML的函数
  function show(items, element) {
    for(var i = 0; i < items.length; i++) {
      var str = '';
      str += '<div class="item">';
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
    }  
  }