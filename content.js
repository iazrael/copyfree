;(function(window, document){

function stopPropagation(e){
    e.stopPropagation();
    e.stopImmediatePropagation();
}
window.oncontextmenu = stopPropagation;
window.addEventListener('contextmenu', stopPropagation, true);

function onCopy(e){
    if(e.keyCode === 67 && (e.ctrlKey || e.metaKey)){
        stopPropagation(e);
    }
}
window.onkeydown = onCopy;
window.addEventListener('keydown', onCopy, true);
window.oncopy = stopPropagation;
window.addEventListener('copy', stopPropagation, true)

window.onselect = stopPropagation;
window.onselectstart = stopPropagation;
window.addEventListener('select', stopPropagation, true);
window.addEventListener('selectstart', stopPropagation, true);

window.onmousedown = stopPropagation;
window.onmouseup = stopPropagation;
window.addEventListener('mousedown', stopPropagation, true);
window.addEventListener('mouseup', stopPropagation, true);

//end coding
})(window, document);
//////////////////////////////////
