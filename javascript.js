
$(document).ready(function(){
    const url = window.location.hash;
    const path = url.substring(url.lastIndexOf('/') + 2);
    const typeN = path.charAt(0).toUpperCase() + path.slice(1);
    console.log(typeN)

    

    //Start of PokeList Data Table    
    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0",
        dataType: 'json',
        type: 'get',
        cache:false,
        success: function(pokeList){
            /*console.log(data);*/
            var pokeList_data = '';
            
            $.each(pokeList.results, function(index, value){
                /*console.log(value);*/
                var matches = value.url.match(/(?<=\/)[\+\-]?\d+\.?\d*(?=\/)/g);
                var number = matches.toString().padStart(4, "0");
                var pokeNum = number;
                var pokeName = value.name[0].toUpperCase() + value.name.slice(1);

                pokeList_data += '<tr>';
                pokeList_data += '<td>'+pokeName+'</td>';
                pokeList_data += '<td>'+pokeNum+'</td>';
                pokeList_data += '<td>'+ '<a href="https://bulbapedia.bulbagarden.net/wiki/' + value.name + '" target="_blank">View Pokemon</a></td>';
                
                pokeList_data += '</tr>';
            });
            $("#poke_list").append(pokeList_data);
        },
        error: function(d){
            /*console.log("error");*/
            alert("No Pokemon Have been found");
        }
    });

    //End of PokeList Data Table 

    // //Start of PokeType-Normal Data
    // $.ajax({
    //     url: "https://pokeapi.co/api/v2/type/3",
    //     dataType: 'json',
    //     type: 'get',
    //     cache:false,
    //     success: function(pokeTypeNormalList){
    //         /*console.log(data);*/
    //         var pokeTypeNormal_data = '';
            
    //         $.each(pokeTypeNormalList.pokemon, function(index, value){
                
    //             var matches = value.pokemon.url.match(/(?<=\/)[\+\-]?\d+\.?\d*(?=\/)/g);
    //             var number = matches.toString().padStart(4, "0");
    //             var pokeNum = number;
    //             var pokeName = value.pokemon.name[0].toUpperCase() + value.pokemon.name.slice(1);

    //             pokeTypeNormal_data += '<tr>';
    //             pokeTypeNormal_data += '<td>'+pokeName+'</td>';
    //             pokeTypeNormal_data += '<td>'+value.pokemon.url+'</td>';
    //             pokeTypeNormal_data += '<td>'+pokeNum+'</td>';
    //             pokeTypeNormal_data += '<td>'+ '<a href="https://bulbapedia.bulbagarden.net/wiki/' + value.pokemon.name + '" target="_blank">View Pokemon</a></td>';
    //             pokeTypeNormal_data += '</tr>';

    //         });
    //         $("#pokeTypeNormalList").append(pokeTypeNormal_data);
    //     },
    //     error: function(d){
    //         /*console.log("error");*/
    //         alert("No Pokemon Have been found");
    //     }
    // });

    //Start of PokeType-Normal Data
    $.ajax({
        url: "https://pokeapi.co/api/v2/type/" + path,
        dataType: 'json',
        type: 'get',
        cache:false,
        success: function(pokeTypeNormalList){
            /*console.log(data);*/
            var pokeTypes_data = '';
            var cardNum = 1;
            var idNum = 1;
            console.log(path);
            
            $.each(pokeTypeNormalList.pokemon, function(index, value){
                
                var matches = value.pokemon.url.match(/(?<=\/)[\+\-]?\d+\.?\d*(?=\/)/g);
                var number = matches.toString().padStart(4, "0");
                var pokeNum = number;
                var pokeName = value.pokemon.name[0].toUpperCase() + value.pokemon.name.slice(1);
                var cardID = "poke-card" + cardNum;
                var cardIn = "pokeCardInfo" + idNum;
                var img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + matches + ".png";
                var type = "#" + path;
                

                
                
                var card = document.createElement('div');
                    $(card).attr('id', 'poke-card');
        	        $(card).addClass( "poke-card" );
                    $( "#cards" ).append( card );


                var cardInfo = document.createElement('div');
                    $(cardInfo).attr('id', 'pokeCardInfo');
        	        $(cardInfo).addClass( "text-bottom-center" );
                    $( "#poke-card" ).append( cardInfo );    
                
                var cardImg = document.createElement('img');
                    $(cardImg).addClass( "center img-sq" );
                    $(cardImg).attr('src', img);
                    $( "#pokeCardInfo" ).append( cardImg );

                var h1 = document.createElement('h1');
                    $(h1).addClass( "font-25" );
                    h1.innerText = pokeName;
                    $( "#pokeCardInfo" ).append( h1 );    
                    $(card).attr('id', cardID);
                    $(cardInfo).attr('id', cardIn);

                    cardNum += 1;
                    idNum += 1;
                        
                    });
        },
        
        error: function(d){
            /*console.log("error");*/
            alert("No Pokemon Have been found");
        }
    });
    
    document.getElementById("type").innerHTML = typeN;
    // Get the button
let topbutton = document.getElementById("topBtn");


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}


});


          
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
