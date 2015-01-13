(function(){

    // Google WebFontからOpen Sansを読み込む
    var loadOpenSans = (function(){
        var d = document.documentElement;
        var h = document.head;
        var font_openSans = 'http://fonts.googleapis.com/css?family=Open+Sans:300,400,700';
        var newLinkElement_openSans = document.createElement('link');
        var getLanguage = d.lang;

        // Add original tag to overwrite the stylesheet. Add id 
        d.id = "betterwikipedia";
        d.classList.add("betterwikipedia");

        // Create link to receive Open Sans.
        newLinkElement_openSans.rel = "stylesheet";
        newLinkElement_openSans.type = "text/css";
        newLinkElement_openSans.href = font_openSans;

        // Insert script        
        h.insertBefore(newLinkElement_openSans, h.lastChild);
    })();

    // Load functions
    loadOpenSans();

})();