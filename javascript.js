(function(){
    document.addEventListener('click', function(event){
        var penguinPic = document.getElementsByClassName("penguin");

        if (!event.target.matches('.penguin')) return;
        penguinPic[0].style.width += "50%";
    });
})();
