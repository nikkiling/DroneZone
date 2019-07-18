//Build menu from json file

$(document).ready(function() {

    //Data
    var data = [{"name":"Home","url":"#"},{"name":"About","url":"\/about"},{"name":"Pricing","url":"\/pricing"},{"name":"Our drones","url":"\/our-drones"},{"name":"Our realizations","url":"\/our-realizations"},{"name":"Contact","url":"http:\/\/ya.ru","marked":true}];


    $(".navbar-collapse").append("<ul class='navbar-list'></ul>");

    $.each( data, function( key, val ) {
        //if marked
        var isMarked = val.marked ? " marked" : "";

        //if external link
        var target = val.url.match(/^http([s]?):\/\/.*/) ? "_blank":"_self";

        var li = "<li class='nav-item" + isMarked + "'>"
            + "<a class='nav-link' target='" + target +"'" + "href=" + val.url + ">"
            + val.name + "</a></li>";

        $(".navbar-list").append(li);
    });

    //Build from server file

    // $.ajax({
    //     url: 'js/menu.json',
    //     dataType: 'json',
    //     success: function( data ) {
    //
    //         $(".navbar-collapse").append("<ul class='navbar-list'></ul>");
    //
    //         $.each( data, function( key, val ) {
    //             //if marked
    //             var isMarked = val.marked ? " marked" : "";
    //
    //             //if external link
    //             var target = val.url.match(/^http([s]?):\/\/.*/) ? "_blank":"_self";
    //
    //             var li = "<li class='nav-item" + isMarked + "'>"
    //                 + "<a class='nav-link' target='" + target +"'" + "href=" + val.url + ">"
    //                 + val.name + "</a></li>";
    //
    //             $(".navbar-list").append(li);
    //         });
    //
    //     },
    //     error: function( data ) {
    //         console.log('error');
    //     }
    // });


    //Menu functions
    var topMenu = $(".navbar-collapse");
    var topMenuCloseButton = $(".j_close_button");
    var topMenuOpenButton = $(".j_open_button");

    //Open menu
    topMenuOpenButton.click(function (e) {
        $("body").addClass("show-menu");
        e.stopPropagation();
    });

    //Close menu
    topMenuCloseButton.click(function (e) {
        $("body").removeClass("show-menu");
        e.stopPropagation();
    });

    //Close menu on click outside of the menu
    $(document).click(function() {
        $("body").removeClass("show-menu");
    });

    topMenu.click(function(e) {
        e.stopPropagation();
    });
});