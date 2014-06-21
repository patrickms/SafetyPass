(function() { 
   var ifrm = document.createElement("IFRAME"); 
   ifrm.setAttribute("src", "https://patrickms.github.io/SafetyPass/safetypass.html"); 
   ifrm.style.width = 400+"px"; 
   ifrm.style.height = 200+"px"; 
   ifrm.style.top=1+"em";
   ifrm.style.left=1+"em";
   ifrm.style.position="fixed";
   ifrm.style.zIndex=1000000;
   ifrm.allowtransparency="false";
   document.body.appendChild(ifrm); 
   document.body.insertBefore(ifrm, document.body.firstChild);


   function receiveMessage(event)
   {
      //alert('message from '+event.origin)
      if (event.origin !== "http://patrickms.github.io" && event.origin !== "https://patrickms.github.io"
                                                       && event.origin !== "http://localhost:8000")
      {
         console.log("Message from a bad domain:"+event.origin+", returning")
       return;
      }

     if(event.data === "Which Domain?")
         ifrm.contentWindow.postMessage(document.domain,"*");
      else if(event.data === "Close SafetyPass")
         ifrm.remove();
         //alert(document.domain);
   }
   
   window.addEventListener("message", receiveMessage, false);

})();

