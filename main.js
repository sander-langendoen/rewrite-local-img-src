function replaceLocalImgs() {

    const localUrl = window.location.host;

    const imgs = document.getElementsByTagName("img");

    for (var i = 0; i < imgs.length; i++) {
    
        var newRegExInput = new RegExp(localUrl, "g");    
        var newSrc = imgs[i].src.replace(newRegExInput, liveUrl);
    
        imgs[i].src = newSrc;
      }
}

window.onload = replaceLocalImgs;