/*
function getElementWithName(value, tag) {
  const elements = document.getElementsByTagName(tag);
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].textContent != value) continue;
    return elements[i];
  }
}

document.addEventListener("DOMNodeInserted", function (node) {
  if (node.target.className == "page-container" || node.target.className == "app-container") {
    const btn_approve = getElementWithName("Approve", "button");

    const observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (!mutation.target.disabled) {
          btn_approve.click();
        }
      });
    });

    observer.observe(btn_approve, {
      attributes: true,
    });
  }
});
*/
let AutoClick = setInterval(function() 
{
	try{
		var xPathRes = document.evaluate ('//div/button/div[contains(text(), "Approve")]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
		xPathRes.singleNodeValue.click();
	}catch(e){}
}, 2000);

setTimeout(() => {
      try{
		  window.location.reload();
	  }catch(e){}
    }, 600000);