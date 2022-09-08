
//Read more working function

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
    
  }

//Read more blink
var blink = 
    document.getElementById('myBtn');

setInterval(function () {
    blink.style.opacity = 
    (blink.style.opacity == 0.4 ? 0.8 : 0.4);
}, 500); 


//PDF DOWNLOAD








var doc = new jsPDF();
var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
};
 
 
$('#download_btn').click(function () {
    
    document.getElementById("heading1").innerHTML=document.getElementById("heading").innerHTML;
    document.getElementById("heading2").innerHTML=document.getElementById("subheading").innerText;
    document.getElementById("para1").innerHTML=document.getElementById("card1").innerHTML;
    document.getElementById("para2").innerHTML=document.getElementById("card2").innerHTML;
    doc.fromHTML($('#htmlContent').html(), 15, 15, {
        'width': 700,
        'elementHandlers': specialElementHandlers
    });
    doc.save('platinum_lodging.pdf');
});

// feedback section 
function toggle_visibility() {
    var e = document.getElementById('feedback-main');
    
    if(e.style.display == 'block')
       e.style.display = 'none';
    else{
        e.style.display = 'block';
    }
       
 }
