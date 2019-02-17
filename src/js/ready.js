
  document.ready = function(callback) {
    if(document.addEventListener) {
      document.addEventListener("DOMContentLoaded", callback, false);
    } else {
      document.attachEvent('onreadystatechange', function() {
        if(document.readyState == "interactive") {
          callback(window.event);
        }
      });
    }
  };
