function stock_search(){
    if($("#nav_search").val().length > 0){
        $(".nav_search_detail").show();
        input = $("#search_select").val();
        $.ajax({
            url:"stock_search_"+input,
            type:"get",
            data:{
                [input]:$("#nav_search").val()
            },
            async:false,
        })
            .done(function (data) {
                output = [];
                output +=`<table>`;
                for(i in data){
                    selectid = "search_" + data[i].symbol;
                    output +=`<tr>                     
                                <td id="`+selectid+`">`+data[i].name+`（`+data[i].symbol+`）</td>`;
                }
                output+=`</tr></table>`
                $(".nav_search_detail").html(output);
            })
    }
    else{
        $(".nav_search_detail").hide();
    }
}
