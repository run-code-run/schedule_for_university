/**
 * Created by Alex on 07.05.2017.
 */
$(".tab_item").not(":first").hide();
$(".wrapper .tab").click(function() {
    $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
