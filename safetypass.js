(function() { 
   alert('test');
   var ifrm = document.createElement("IFRAME"); 
   ifrm.setAttribute("src", "https://patrickms.github.io/SafetyPass/safetypass.html"); 
   ifrm.style.width = 100+"%"; 
   ifrm.style.height = 200+"px"; 
   document.body.appendChild(ifrm); 

   function receiveMessage(event)
   {
      if (event.origin !== "http://patrickms.github.io" && event.origin !== "https://patrickms.github.io"
                                                       && event.origin !== "http://localhost:8000")
       return;

     // if(event.data === "Which Domain?")
         ifrm.postMessage(document.domain,"*");
   }
   
   window.addEventListener("message", receiveMessage, false);

})();

