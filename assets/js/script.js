$(document).ready(function(){

  //creo un array con dentro delle stringhe

  var arrayTodo = [
    "Parigi",
    "Londra",
    "New York"
  ];

  var arrayTodo2 = [
    "Pane",
    "Pasta",
    "Pomodori"
  ]

  //creo un ciclo for per leggere il contenuto dell'array creato

  for(var i=0; i < arrayTodo.length; i++){
    var stringaTodo = arrayTodo[i];


    var item = $('.template li').clone();
    $(item).find('.text').append(stringaTodo);
    $('.sx-app ul').append(item);

  }


  for(var i=0; i < arrayTodo2.length; i++){
    var stringaTodo2 = arrayTodo2[i];


    var item = $('.template li').clone();
    $(item).find('.text').append(stringaTodo2);
    $('.dx-app ul').append(item);

  }


    $(document).on('click', '.fa-trash-alt', function(){
      $(this).parent().remove();
    });

    $(document).on('click', '.sx-app .fas.fa-recycle', function(){
      $('.sx-app ul li').remove();
    });

    $(document).on('click', '.dx-app .fas.fa-recycle', function(){
      $('.dx-app ul li').remove();
    });


    $('.sx-app input').keyup(function(event){

      if(event.which === 13){

        var stringaTodo = $(this).val().trim();

        if(stringaTodo.length > 3){
          var item = $('.template li').clone();
          $(item).find('.text').append(stringaTodo);
          $('.sx-app ul').append(item);
          $(this).val('');
        }


      }


    });


    $('.dx-app input').keyup(function(event){

      if(event.which === 13){

        var stringaTodo2 = $(this).val().trim();

        if(stringaTodo2.length > 3){
          var item = $('.template li').clone();
          $(item).find('.text').append(stringaTodo2);
          $('.dx-app ul').append(item);
          $(this).val('');
        }


      }


    });








  















})