(function() { 
   alert('test');
   ifrm = document.createElement("IFRAME"); 
   ifrm.setAttribute("src", "http://patrickms.github.io/SafetyPass/safetypass.html"); 
   ifrm.style.width = 100+"%"; 
   ifrm.style.height = 200+"px"; 
   document.body.appendChild(ifrm); 

function receiveMessage(event)
{
  if (event.origin !== "http://patrickms.github.io" && event.origin !== "https://patrickms.github.io"
                                                       && event.origin !== "http://localhost:8000")
    return;

  alert('received: '+event.data);
}
   
   window.addEventListener("message", receiveMessage, false);


})();

