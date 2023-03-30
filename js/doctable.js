$(document).ready(function(){
    $('#data_table').before('<div id="nav"></div>');
    var rowsShown = 10;
    var rowsTotal = $('#data_table tbody tr').length;
    var numPages = rowsTotal/rowsShown;
    for(i = 0;i < numPages;i++) {
        var pageNum = i + 1;
        $('#nav').append('<a href="javascript:void()" rel="'+i+'">'+pageNum+'</a> ');
    }
    $('#data_table tbody tr').hide();
    $('#data_table tbody tr').slice(0, rowsShown).show();
    $("#nav a").css({
        fontSize: "25px",
        color: "#4d9586",
        paddingLeft: "5px",
        paddingRight: "5px",
        marginBottom: "10px"
    });
    $('#nav a:first').addClass('active').css("color", "white");


    $('#nav a').bind('click', function(){

        $('#nav a').removeClass('active').css("color", "#4d9586");
        $(this).addClass('active').css("color", "white");
        var currPage = $(this).attr('rel');
        var startItem = currPage * rowsShown;
        var endItem = startItem + rowsShown;
        $('#data_table tbody tr').css('opacity','0.0').hide().slice(startItem, endItem).
        css('display','table-row').animate({opacity:1}, 500);
        
    });
});