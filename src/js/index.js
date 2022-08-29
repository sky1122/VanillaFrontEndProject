/* Your JS here. */
console.log('Hello World!')
window.onload = function(){

    var redBtn = document.getElementById('red');
    var blueBtn = document.getElementById('blue');
    var greyBtn = document.getElementById('grey');
    var btn = document.getElementsByClassName('container');
    var phoImg = document.getElementById('pho');
    var nameH = document.getElementById('name');
    
    redBtn.onclick = function(){
    
        btn[0].style.backgroundColor = 'brown';
    
    };

    blueBtn.onclick = function(){
    
        btn[0].style.backgroundColor = 'plum';
    
    };

    greyBtn.onclick = function(){
    
        btn[0].style.backgroundColor = 'grey';
    
    };

    phoImg.onclick = function(){
    
        document.getElementById("bio").style.display = "none";
    
    };

    nameH.onclick = function(){
    
        document.getElementById("bio").style.display = "block";
    
    };
    
    };
    
    