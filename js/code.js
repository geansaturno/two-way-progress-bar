var duration = 2.3;
var loaded = false;
var loadListener = function(){
    document.body.className += ' loaded';
};

window.setTimeout(function(){
    if(loaded) loadListener();
}, duration * 1000);

window.addEventListener('load', function(){
    if(!loaded) loaded = true;
    else loadListener();
});
