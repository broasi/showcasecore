$(document).ready(function () {
    if ($("#publisher_showcase_title_inside2").hasClass("thisNotSelected")) {
        $("#westfield_ps").addClass("notSelected");
        $("#publisher_showcase_title_inside1").addClass("SelectedTitle");
    }
    else {
        $("#warren_ps").addClass("notSelected");
        $("#publisher_showcase_title_inside2").addClass("SelectedTitle");
    }
});

function click_WarrenPS() {
    $("#warren_ps").fadeIn(2000);
    $("#westfield_ps").fadeOut(600);
    $("#publisher_showcase_title_inside1").css('background-color', 'green');
    $("#publisher_showcase_title_inside2").css('background-color', 'transparent');
    // $("#publisher_showcase_title").css('background-color', 'olivedrab');
}
function click_WestfieldPS() {
    $("#warren_ps").fadeOut(600);
    $("#westfield_ps").fadeIn(2000);
    $("#publisher_showcase_title_inside1").css('background-color', 'transparent');
    $("#publisher_showcase_title_inside2").css('background-color', 'green');
    //  $("#publisher_showcase_title").css('background-color', 'gray');
}