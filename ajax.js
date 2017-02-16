$(document).ready(function () {

  $('.one').on('click', function(){
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      dataType: 'text'
    });
  });

  $('.two').on('click', function(){
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/ping',
      data: {},
      method: 'GET',
      dataType: 'text'
    }).done(function(data){
      console.log(data);
      $('#step3456').append(data);
    }).fail(function(){
      console.log('response failed!');
      $('#step3456').append('Sorry, you are at the wrong place.');
    }).always(function(){
      console.log('Hey the request finished!');
    })
  });

  $('.three').on('click', function(){
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/count',
      data: {},
      method: 'GET',
      dataType: 'text'
    }).done(function(data){
      console.log(data);
      $('#step7').append(data);
    }).fail(function(){
      console.log('response failed!');
      $('#step7').append('Sorry, you are at the wrong place.');
    }).always(function(){
      console.log('Hey the request finished!');
    })
  });

  $('.four').on('click', function(){
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/time',
      data: {timezone: 'Pacific/Honolulu'},
      method: 'GET',
      dataType: 'text'
    }).done(function(data){
      console.log(data);
      $('#step8').append(data);
    }).fail(function(){
      console.log('response failed!');
      $('#step8').append('Sorry, you are at the wrong place.');
    }).always(function(){
      console.log('Hey the request finished!');
    })
  });

  $('.five').on('click', function(){
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/a_car',
      data: {},
      method: 'GET',
      dataType: 'html'
    }).done(function(data){
      console.log(data);
      $('#cars').append(data);
    }).fail(function(){
      console.log('response failed!');
      $('#step9').append('Sorry, you are at the wrong place.');
    }).always(function(){
      console.log('Hey the request finished!');
    })
  });
});
