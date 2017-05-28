/*************Loads the default json.data file and formats them automatically into a table/grid******/

$.ajax({
    url: 'js/data.json',
    dataType: 'json',
    success: function(data) {
        for (var i=0; i<data.length; i++) {
            var row = $('<tr><td class="country">' + data[i].country+ '</td><td class="plan">' + data[i].plan + '</td><td class="forecast">' + data[i].forecast + '</td><td class="bestcase">' + data[i].bestcase + '</td><td class="commit">' + data[i].commit+ '</td></tr>');
            $('#myTable').append(row);
        }
    },
    error: function(jqXHR, textStatus, errorThrown){
        alert('Error: ' + textStatus + ' - ' + errorThrown);
    }
});
/*******************************************/

//To keep all the checkboxes checked onLoad
$(function(){
    $('#checkbox-dropdown input:checkbox').attr('checked', 'checked');
});

/*************JQuery function to hide the particular columns based on the attribute***************/


$("input:checkbox:not(:checked)").each(function() {
    var column = "table ." + $(this).attr("name");
    $(column).hide();
});

$("input:checkbox").click(function(){
    var column = "table ." + $(this).attr("name");
    $(column).toggle();
});


$(".checkbox-dropdown").click(function () {
    $(this).toggleClass("is-active");
});

$(".checkbox-dropdown ul").click(function(e) {
    e.stopPropagation();
});