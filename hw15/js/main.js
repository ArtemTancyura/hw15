$("#menu-btn").click(function(){
    $(".responsive-menu").toggleClass('expand');
});

$(document).ready(function(){
    jQuery('.Accordion').click(function() {
        jQuery.scrollTo('#scroll-Accordion', 2500);
        return false;
    });
});
$(document).ready(function(){
    jQuery('.Tooltip').click(function() {
        jQuery.scrollTo('#scroll-Tooltip', 1000);
        return false;
    });
});
$(document).ready(function(){
    jQuery('.Tabs').click(function() {
        jQuery.scrollTo('#scroll-Tabs', 1500);
        return false;
    });
});
$(document).ready(function(){
    jQuery('.Dialog').click(function() {
        jQuery.scrollTo('#scroll-Dialog', 3000);
        return false;
    });
});

//Tooltip
$(function() {
    $( document ).tooltip({
        track: true,
        position: {
            my: "center bottom+80",
            at: "center top",
            using: function( position, feedback ) {
                $( this ).css( position );
                $( "<div>" )
                    .addClass( "arrow" )
                    .addClass( feedback.vertical )
                    .addClass( feedback.horizontal )
                    .appendTo( this );
            }
        }
    });
});
//Tabs
$(function() {
    $( "#scroll-Tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
    $( "#scroll-Tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
});
//Dialog
$(function() {
    var dialog, form,
        emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        name = $( "#name" ),
        email = $( "#email" ),
        password = $( "#password" ),
        allFields = $( [] ).add( name ).add( email ).add( password ),
        tips = $( ".validateTips" );

    function updateTips( t ) {
        tips
            .text( t )
            .addClass( "ui-state-highlight" );
        setTimeout(function() {
            tips.removeClass( "ui-state-highlight", 1500 );
        }, 500 );
    }

    function checkLength( o, n, min, max ) {
        if ( o.val().length > max || o.val().length < min ) {
            o.addClass( "ui-state-error" );
            updateTips( "Length of " + n + " must be between " +
                min + " and " + max + "." );
            return false;
        } else {
            return true;
        }
    }

    function checkRegexp( o, regexp, n ) {
        if ( !( regexp.test( o.val() ) ) ) {
            o.addClass( "ui-state-error" );
            updateTips( n );
            return false;
        } else {
            return true;
        }
    }

    function addUser() {
        var valid = true;
        allFields.removeClass( "ui-state-error" );

        valid = valid && checkLength( name, "username", 3, 16 );
        valid = valid && checkLength( email, "email", 6, 80 );
        valid = valid && checkLength( password, "password", 5, 16 );

        valid = valid && checkRegexp( name, /^[a-z]([0-9a-z_\s])+$/i, "Username may consist of a-z, 0-9, underscores, spaces and must begin with a letter." );
        valid = valid && checkRegexp( email, emailRegex, "eg. ui@jquery.com" );
        valid = valid && checkRegexp( password, /^([0-9a-zA-Z])+$/, "Password field only allow : a-z 0-9" );

        if ( valid ) {
            $( "#users tbody" ).append( "<tr>" +
                "<td>" + name.val() + "</td>" +
                "<td>" + email.val() + "</td>" +
                "<td>" + password.val() + "</td>" +
                "</tr>" );
            dialog.dialog( "close" );
        }
        return valid;
    }

    dialog = $( "#dialog-form" ).dialog({
        autoOpen: false,
        height: 300,
        width: 350,
        modal: true,
        buttons: {
            "Create an account": addUser,
            Cancel: function() {
                dialog.dialog( "close" );
            }
        },
        close: function() {
            form[ 0 ].reset();
            allFields.removeClass( "ui-state-error" );
        }
    });

    form = dialog.find( "form" ).on( "submit", function( event ) {
        event.preventDefault();
        addUser();
    });

    $( "#create-user" ).button().on( "click", function() {
        dialog.dialog( "open" );
    });
});
//accordion
$(function() {
    $( "#scroll-Accordion" ).accordion({
        collapsible: true
    });
});
//slider 1
$(window).load(function() {
    $('.flexslider').flexslider({
        animation: "slide"
    });
});
