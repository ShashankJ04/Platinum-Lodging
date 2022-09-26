/*var sb=document.getElementById("search_bar")
sb.addEventListener('keypress',(e)=>{
  if(window.event.keyCode==13)
    e.preventDefaut()
  else{
    search(sb.value)
    console.log(sb.value)
  }
})*/
function search(textEntered){
  textEntered=textEntered.toLowerCase()
  if(textEntered==""){
    renderCards()
    return null;
  }
  else if (t.length==0){
    for(var p=0;p<d.length;p++){
      t.push(d[p].title.toLowerCase())
      host.push(d[p].host.toLowerCase())
    }
  }
  ind={}
  console.log(t+" "+host)
  for(var p=0;p<d.length;p++){
    if (t[p].includes(textEntered)){
      ind[p]=0
    }
    else if(host[p].includes(textEntered)){
      ind[p]=0
    }
  }
  console.log(ind)
  console.log(Object.keys(ind))
  renderCardsSep(ind)
}
function sort(t){
    if(t.value==2){
        function compare( a, b ) {
            if ( a.bedroom < b.bedroom ){
              return -1;
            }
            if ( a.bedroom > b.bedroom ){
              return 1;
            }
            return 0;
          }
          d=d.sort( compare );
          console.log(d);
    }
    else if(t.value==1){
        function compare( a, b ) {
            if ( a.bathroom < b.bathroom ){
              return -1;
            }
            if ( a.bathroom > b.bathroom ){
              return 1;
            }
            return 0;
          }
          d=d.sort( compare );
          console.log(d);
    }
    if(t.value==3){
        function compare( a, b ) {
            if ( a.cost < b.cost ){
              return -1;
            }
            if ( a.cost > b.cost ){
              return 1;
            }
            return 0;
          }
          d=d.sort( compare );
          console.log(d);
          
    }
    else if(t.value==4){
        function compare( a, b ) {
            if ( a.cost > b.cost ){
              return -1;
            }
            if ( a.cost < b.cost ){
              return 1;
            }
            return 0;
          }
          d=d.sort( compare );
          console.log(d);
    }
    renderCards();
}
function insertCard(data){
    var s=
            '<div class="card">'+
    '            <img src="static/img/liberty-hill.webp" class="card-img-top" alt="..." width=\'50%\'></img>'+
    '            <div class="card-body">'+
    '                <h5 class="card-title"><b>'+data.title+'</b></h5>'+
    '                <p class="card-text">Entire home hosted by '+data.host+' '+
    '                     <ul type=\'disk\'>'+
    '                        <li>'+
    '                            '+
    '                        '+ data.guest+' guests'+
    '                        </li><li>'+
    '                        '+data.bedroom+' bedrooms'+
    '                        </li><li>'+
    '                        '+data.bed+' beds'+
    '                        </li><li>'+
    '                        '+data.bathroom+' bathrooms'+
    '                        </li>'+
    '                    </ul> <b>'+
    '                        '+data.cost+'</b> a night'+
    '                    </p>'+
    '                    <div></div>'+
    '                    <div>'+
    '                        <a href="properties/property/'+data.id+'" class="btn btn-dark">Read More</a>'+
    '                        <a href="https://www.google.co.in/maps/place/Harvest+Park/@30.6402437,-97.8551576,17.12z/data=!4m13!1m7!3m6!1s0x8644de333fad8a37:0xd9ebe45f2a3425a4!2sLiberty+Hill,+TX+78642,+USA!3b1!8m2!3d30.6649119!4d-97.9225161!3m4!1s0x865b2be5635858eb:0xf71899d8df638187!8m2!3d30.6383383!4d-97.8526443" target="_blank" class="btn btn-dark">Locate on Google Maps</a>'+
    '                    </div>'+
    '                </div>'+
    '            </div>'
    var col=document.createElement('div');
    col.className='col';
    col.innerHTML=s;
    c.appendChild(col);
}
let t=[]
let host=[]
let c=document.getElementById("main-card");
function renderCards(){
    c.innerHTML=""
    for(var i=0;i<d.length;i++){
        insertCard(d[i])
    }
}
function renderCardsSep(indexes){
  c.innerHTML=""
  indexes=Object.keys(indexes)
  for(var i=0;i<indexes.length;i++){
      insertCard(d[indexes[i]])
  }
}
renderCards();