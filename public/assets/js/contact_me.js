//$(function() {
//
//    $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
//        preventSubmit: true,
//        submitError: function($form, event, errors) {
//            // additional error messages or events
//            console.log($form, event, errors);
//        },
//        submitSuccess: function($form, event) {
//            event.preventDefault(); // prevent default submit behaviour
//            // get values from FORM
//            //var name = $("input#name").val();
//            //var email = $("input#email").val();
//            //var dob = $("input#dob").val();
//            //var anniversary = $("input#anniversary").val();
//            //var firstName = name; // For Success/Failure Message
//            //// Check for white space in name for Success/Fail message
//            //if (firstName.indexOf(' ') >= 0) {
//            //    firstName = name.split(' ').slice(0, -1).join(' ');
//            //}
//            //$.ajax({
//            //    url: "/",
//            //    type: "POST",
//            //    data: {
//            //        name: name,
//            //        dob: dob,
//            //        anniversary: anniversary,
//            //        email: email,
//            //        message: ""
//            //    },
//            //    cache: false,
//            //    success: function() {
//            //        // Success message
//            //        $('#success').html("<div class='alert alert-success'>");
//            //        $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
//            //            .append("</button>");
//            //        $('#success > .alert-success')
//            //            .append("<strong>Your information has been sent. </strong>");
//            //        $('#success > .alert-success')
//            //            .append('</div>');
//            //
//            //        //clear all fields
//            //        $('#contactForm').trigger("reset");
//            //    },
//            //    error: function() {
//            //        // Fail message
//            //        $('#success').html("<div class='alert alert-danger'>");
//            //        $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
//            //            .append("</button>");
//            //        $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
//            //        $('#success > .alert-danger').append('</div>');
//            //        //clear all fields
//            //        $('#contactForm').trigger("reset");
//            //    },
//            //})
//        },
//        filter: function() {
//            return $(this).is(":visible");
//        }
//    });
//
//    $("a[data-toggle=\"tab\"]").click(function(e) {
//        e.preventDefault();
//        $(this).tab("show");
//    });
//});
//
//
///*When clicking on Full hide fail/success boxes */
//$('#name').focus(function() {
//    $('#success').html('');
//});

$(document).on('ready', function(){

 $('#contactForm').on('submit', function(){

   event.preventDefault(); // prevent default submit behaviour

   // get values from FORM
   var name = $("input#name").val(),
       email = $("input#email").val(),
       dob = $("input#dob").val(),
       anniversary = $("input#anniversary").val()

   console.log({name: name, email: email, dob: dob, anniversary: anniversary});
   // Check for white space in name for Success/Fail message
   $.ajax({
     url: "/",
     type: "POST",
     data: {
       name: name,
       dob: dob,
       anniversary: anniversary,
       email: email,
       message: ""
     },
     cache: false,
     success: function() {
       // Success message
       $('#success').html("<div class='alert alert-success'>");
       $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
           .append("</button>");
       $('#success > .alert-success')
           .append("<strong>Your information has been sent. </strong>");
       $('#success > .alert-success')
           .append('</div>');

       //clear all fields
       $('#contactForm').trigger("reset");
     },
     error: function() {
       // Fail message
       $('#success').html("<div class='alert alert-danger'>");
       $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
           .append("</button>");
       $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
       $('#success > .alert-danger').append('</div>');
       //clear all fields
       $('#contactForm').trigger("reset");
     }
   })
 })

});