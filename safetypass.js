function makeFrame() { 
   alert('test');
   ifrm = document.createElement("IFRAME"); 
   ifrm.setAttribute("src", "http://patrickms.github.io/SafetyPass/safetypass.html"); 
   ifrm.style.width = 100+"%"; 
   ifrm.style.height = 200+"px"; 
   document.body.appendChild(ifrm); 
} 
