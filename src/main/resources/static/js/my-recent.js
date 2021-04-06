function My_Recent_Init(){
    percent = []
    var output = [];
    $.ajax({
        url:"user_id",
        type:"get",
        data:{
            username:$("#username").text()
        },
        async:false
    })
        .done(function (data){
            $.ajax({
                url:"user_recent",
                type:"get",
                data:{
                    uid:data
                },
                async:false
            })
                .done(function (data){
                    output+=`<table class="select_table" border="2" >
                                <tr>`;
                    for(var i in data){

                        $.ajax({
                            url: "stock_real",
                            type: "get",
                            data: {
                                symbol: data[i].symbol
                            },
                            async: false,
                        })
                            .done(function (detail) {
                                percentid = "recent_percent" + detail.symbol;
                                output += `
                                    <td class="symbol">` + detail.symbol + `</td>
                                    <td class="symbol_name"><a href="www.baidu.com">` + detail.name + `</a></td>
                                    <td class="price">` + detail.price + `</td>
                                    <td id=`+percentid+` class="percent" >` + detail.changepercent + `%</td>
                                    <td><a>删除</a></td>
                                </tr>
                            `;
                                percent[detail.symbol] = detail.changepercent;
                            })
                    }
                    output+=`</table>`
                    $("#recent").html(output)
                    for ( i in percent){
                        if(percent[i]<0)
                            $("#recent_percent"+[i]).css("color","green");
                        if(percent[i]>0)
                            $("#recent_percent"+[i]).css("color","red");
                    }

                })
        })
}