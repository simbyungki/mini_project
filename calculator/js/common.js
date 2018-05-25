$('document').ready(function(){

});

//layer popup
function commonLayerOpen(thisClass){
    $('.'+thisClass).fadeIn();
}
function commonLayerClose(thisClass){
    $('.'+thisClass).fadeOut();
}

//get url path > category(folder) find
function pathCurrent(){
    var pathName = window.location.pathname;
    var pathSplit = pathName.split('/');
    var reversePath = pathSplit.reverse();
    var categoryName = reversePath[1];
    //category(folder) = reversePath[1];
    alert('catgegory :' + ' /' + categoryName + '/');
    /*분기처리
    if(categoryName === 'category명'){

    }
    */
}
