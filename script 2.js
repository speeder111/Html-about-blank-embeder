var urlObj = new window.URL(window.location.href);
//this is the link, replace it with your owns

function validerurl(){
  var url = document.getElementById("website-url").value;
  console.log(url);
  if (url) {
    var win;


    if (win) {
      win.focus();
    } else {
      win = window.open();

      win.document.body.style.margin = '0';
      win.document.body.style.height = '100vh';
      var iframe = win.document.createElement('iframe');
      iframe.style.border = 'none';
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.margin = '0';
      iframe.src = url;
      win.document.body.appendChild(iframe);
    }

    // document.querySelector('button').innerHTML = "Already Open";
  };
  
}
