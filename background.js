chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    
    let d = details.url;
   
    let s = d.split('/');

    if(s[2]!="www.example.com")
    {

      return {redirectUrl:"http://www.example.com/"};

    }else{

      return true;

    }

    return {};
   
  },
  {
    urls: [
      "<all_urls>",
    ],
    types: ["main_frame"]
  },
  ["blocking"]
);
