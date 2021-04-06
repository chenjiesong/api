var select_check_detail = [];
var select_img_minute = 20;
var select_time= [];
var index_img_minute = 20;
var index_time= [];
var select_flash;


function onLoad(){
    Rank();
    My_Select_Init();
    My_Recent_Init();
    Stock_Index_Init();
    Stock_Hot_Init();
    var date = new Date().Format("yyyy-MM-dd HH:mm:ss");
    $(".recentBox").hide()
    $("#stock_index1").hide()
    $("#stock_index2").hide()
    $("#stock_index3").hide()
    $("#stock_index4").hide()

    $("#rank_index1").hide()
    $("#rank_index2").hide()
    $("#rank_index3").hide()

}

$(function() {
    $("#nav_search")
        .bind('input propertychange', function() {
            stock_search();
    })
    $("#search_area")
        .mouseover(function (){
            if($("#nav_search").val().length>0)
                $(".nav_search_detail").show();
        })
        .mouseout(function (){
            $(".nav_search_detail").hide();
        })
    $(".nav_search_detail")
        .delegate('td','click',function(){
            alert($(this).attr("id").split("_")[1]);
    });
    $("#search_select").change(function(){
        $("#nav_search").val("");
    });
    $(".selectactive1").click(function () {
        $(".selectactive1").css({
            "background-color": "#b4d2e3",
            "padding":"3%"
        })
        $(".selectactive2").css({
            "background-color": "#f4f4f4",
            "padding":"2%"
        })
        $(".selectBox").show({
            duration: 300,
        })
        $(".recentBox").hide()
    });
    $(".selectactive2").click(function () {
        $(".selectactive2").css({
            "background-color": "#b4d2e3",
            "padding":"3%"
        })
        $(".selectactive1").css({
            "background-color": "#f4f4f4",
            "padding":"2%"
        })
        $(".recentBox").show({
            duration: 300,
        })
        $(".selectBox").hide()
    });

    $(".indexactive0").click(function () {
        $(".indexactive0").css({
            "background-color": "#b4d2e3",
            "padding":"3%"
        })
        $(".indexactive1").css({
            "background-color": "#f4f4f4",
            "padding":"2%"
        })
        $(".indexactive2").css({
            "background-color": "#f4f4f4",
            "padding":"2%"
        })
        $(".indexactive3").css({
            "background-color": "#f4f4f4",
            "padding":"2%"
        })
        $(".indexactive4").css({
            "background-color": "#f4f4f4",
            "padding":"2%"
        })
        $("#stock_index0").show({
            duration: 300,
        })
        $("#stock_index1").hide()
        $("#stock_index2").hide()
        $("#stock_index3").hide()
        $("#stock_index4").hide()
    });

    $(".indexactive1").click(function () {
        $(".indexactive1").css({
            "background-color": "#b4d2e3",
            "padding":"3%"
        })
        $(".indexactive0").css({
            "background-color": "#f4f4f4",
            "padding":"2%"
        })
        $(".indexactive2").css({
            "background-color": "#f4f4f4",
            "padding":"2%"
        })
        $(".indexactive3").css({
            "background-color": "#f4f4f4",
            "padding":"2%"
        })
        $(".indexactive4").css({
            "background-color": "#f4f4f4",
            "padding":"2%"
        })
        $("#stock_index1").show({
            duration: 300,
        })
        $("#stock_index0").hide()
        $("#stock_index2").hide()
        $("#stock_index3").hide()
        $("#stock_index4").hide()
    });

    $(".indexactive2").click(function () {
        $(".indexactive2").css({
            "background-color": "#b4d2e3",
            "padding":"3%"
        })
        $(".indexactive1").css({
            "background-color": "#f4f4f4",
            "padding":"2%"
        })
        $(".indexactive0").css({
            "background-color": "#f4f4f4",
            "padding":"2%"
        })
        $(".indexactive3").css({
            "background-color": "#f4f4f4",
            "padding":"2%"
        })
        $(".indexactive4").css({
            "background-color": "#f4f4f4",
            "padding":"2%"
        })
        $("#stock_index2").show({
            duration: 300,
        })
        $("#stock_index1").hide()
        $("#stock_index0").hide()
        $("#stock_index3").hide()
        $("#stock_index4").hide()
    });

    $(".indexactive3").click(function () {
        $(".indexactive3").css({
            "background-color": "#b4d2e3",
            "padding":"3%"
        })
        $(".indexactive1").css({
            "background-color": "#f4f4f4",
            "padding":"2%"
        })
        $(".indexactive2").css({
            "background-color": "#f4f4f4",
            "padding":"2%"
        })
        $(".indexactive0").css({
            "background-color": "#f4f4f4",
            "padding":"2%"
        })
        $(".indexactive4").css({
            "background-color": "#f4f4f4",
            "padding":"2%"
        })
        $("#stock_index3").show({
            duration: 300,
        })
        $("#stock_index1").hide()
        $("#stock_index2").hide()
        $("#stock_index0").hide()
        $("#stock_index4").hide()
    });

    $(".indexactive4").click(function () {
        $(".indexactive4").css({
            "background-color": "#b4d2e3",
            "padding":"3%"
        })
        $(".indexactive1").css({
            "background-color": "#f4f4f4",
            "padding":"2%"
        })
        $(".indexactive2").css({
            "background-color": "#f4f4f4",
            "padding":"2%"
        })
        $(".indexactive3").css({
            "background-color": "#f4f4f4",
            "padding":"2%"
        })
        $(".indexactive0").css({
            "background-color": "#f4f4f4",
            "padding":"2%"
        })
        $("#stock_index4").show({
            duration: 300,
        })
        $("#stock_index1").hide()
        $("#stock_index2").hide()
        $("#stock_index3").hide()
        $("#stock_index0").hide()
    });

    $(".rankactive0").click(function () {
        $(".rankactive0").css({
            "background-color": "#b4d2e3",
            "padding":"3%"
        })
        $(".rankactive1").css({
            "background-color": "#f4f4f4",
            "padding":"2%"
        })
        $(".rankactive2").css({
            "background-color": "#f4f4f4",
            "padding":"2%"
        })
        $(".rankactive3").css({
            "background-color": "#f4f4f4",
            "padding":"2%"
        })
        $("#rank_index0").show({
            duration: 300,
        })
        $("#rank_index1").hide()
        $("#rank_index2").hide()
        $("#rank_index3").hide()
    });

    $(".rankactive1").click(function () {
        $(".rankactive1").css({
            "background-color": "#b4d2e3",
            "padding":"3%"
        })
        $(".rankactive0").css({
            "background-color": "#f4f4f4",
            "padding":"2%"
        })
        $(".rankactive2").css({
            "background-color": "#f4f4f4",
            "padding":"2%"
        })
        $(".rankactive3").css({
            "background-color": "#f4f4f4",
            "padding":"2%"
        })
        $("#rank_index1").show({
            duration: 300,
        })
        $("#rank_index0").hide()
        $("#rank_index2").hide()
        $("#rank_index3").hide()
    });

    $(".rankactive2").click(function () {
        $(".rankactive2").css({
            "background-color": "#b4d2e3",
            "padding":"3%"
        })
        $(".rankactive1").css({
            "background-color": "#f4f4f4",
            "padding":"2%"
        })
        $(".rankactive0").css({
            "background-color": "#f4f4f4",
            "padding":"2%"
        })
        $(".rankactive3").css({
            "background-color": "#f4f4f4",
            "padding":"2%"
        })
        $("#rank_index2").show({
            duration: 300,
        })
        $("#rank_index1").hide()
        $("#rank_index0").hide()
        $("#rank_index3").hide()
    });

    $(".rankactive3").click(function () {
        $(".rankactive3").css({
            "background-color": "#b4d2e3",
            "padding":"3%"
        })
        $(".rankactive1").css({
            "background-color": "#f4f4f4",
            "padding":"2%"
        })
        $(".rankactive2").css({
            "background-color": "#f4f4f4",
            "padding":"2%"
        })
        $(".rankactive0").css({
            "background-color": "#f4f4f4",
            "padding":"2%"
        })
        $("#rank_index3").show({
            duration: 300,
        })
        $("#rank_index1").hide()
        $("#rank_index2").hide()
        $("#rank_index0").hide()
    });



})





