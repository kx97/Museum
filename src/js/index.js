
  var itemlist = document.querySelector('#items');
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
    str += ' <a href="' + items[i].link + '">了解 ></a>';
    str += ' </div>';
    str += '</div>';
    str += '<hr>';
    itemlist.innerHTML += str;
  }