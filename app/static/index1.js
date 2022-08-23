
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
    '                        <a href="/properties/property" class="btn btn-dark">Read More</a>'+
    '                        <a href="https://www.google.co.in/maps/place/Harvest+Park/@30.6402437,-97.8551576,17.12z/data=!4m13!1m7!3m6!1s0x8644de333fad8a37:0xd9ebe45f2a3425a4!2sLiberty+Hill,+TX+78642,+USA!3b1!8m2!3d30.6649119!4d-97.9225161!3m4!1s0x865b2be5635858eb:0xf71899d8df638187!8m2!3d30.6383383!4d-97.8526443" target="_blank" class="btn btn-dark">Locate on Google Maps</a>'+
    '                    </div>'+
    '                </div>'+
    '            </div>'
    var col=document.createElement('div');
    col.className='col';
    col.innerHTML=s;
    c.appendChild(col);
}
let d=[{
    'title': 'Liberty Hill',
    'state':'TX',
    'host': "Tara",
    'guest': 8,
    'bedroom':4,
    'bed':3,
    'bathroom':2,
    'cost':125
},{
    'title': 'Shenandoah',
    'state':'TX',
    'host': 'Tara',
    'guest': 8,
    'bedroom':4,
    'bed':4,
    'bathroom':2,
    'cost':190
},{
    'title': 'Mumbai',
    'state':'TX',
    'host': 'Tara',
    'guest': 34,
    'bedroom':34,
    'bed':23,
    'bathroom':32,
    'cost':19000
},{
    'title': 'Liberty Hill',
    'state':'TX',
    'host': "Tara",
    'guest': 8,
    'bedroom':4,
    'bed':3,
    'bathroom':2,
    'cost':125
}]
let c=document.getElementById("main-card");
function renderCards(){
    c.innerHTML=""
    for(var i=0;i<d.length;i++){
        insertCard(d[i])
    }
}
renderCards();