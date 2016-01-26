'use strict';

$( init() );

function init(){
  console.log('main.js loaded!');
  // $('#addcontact').on('click', addNewContact);
  $(document).on('click', '#addnewcontact', addNewContact);
}


function addNewContact(){
  console.log($(this));
  var newContact = {
    firstname: $('#firstname').val(),
    lastname: $('#lastname').val(),
    address: $('#address').val(),
    phone: $('#phone').val(),
    dateid: Date.now()
  };

  $.post( "/contacts/add", newContact)
  .done(function( data ) {
    var reqData = data;
    window.location.href = '/contacts/view/'+newContact.dateid ;
    // viewContact(reqData);
    // console.log('received data:'+data);
    // alert( "Data Loaded: " + data );
    // $(document).load('/contacts/view/');
  });
  // console.log(newContact);
}

function viewContact(reqdata){
  var retrievalKey = reqdata;
  $.get( "/contacts/view/"+retrievalKey)
  .done(function( data ) {
    // alert( "Data Loaded: " + data );
    // if (data.redirect) {
    //         // data.redirect contains the string URL to redirect to
    //         window.location.href = data.redirect;
        // }
  });
}
