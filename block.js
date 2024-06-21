function getKey(e) {
    var n = e.keyCode;
    console.log(n);
    if (mode === 1) {
      if (n === 123) return false;
    } else {
      if (n === 16 || n === 17) mode = 2;
      if (n === 73 || n === 74 || n === 85 || n === 123) return false;
    }
  }
  
  var mode = 1;
  document.oncontextmenu = function() {
    return false;
  };
  window.onkeydown = getKey;
  