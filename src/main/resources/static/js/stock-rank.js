function Rank() {
    percent = []
    $.ajax({
        url: "stock_bot",
        type: "get",
        data:{

        },
        async: false,
    })
        .done(function (data) {
            output = `
                    <table >
                    `
            for ( var i in data){
                percentid= "rank_bot_percent"+data[i].symbol;
                num = parseInt(i)+1;
                output += `
                            <tr >
                                <td style="text-align: center;width:3em"> `+num+`</td>
                                <td class="text-left symbol" >`+data[i].symbol+`</td>
                                <td class="text-center symbol_name"><a href="www.baidu.com">`+data[i].name+`</a></td>
                                <td class="price">` + data[i].trade + `</td>
                                <td id="`+percentid+`" class="text-right percent">`+data[i].changepercent+`%</td>
                            </tr>
                           `;
                percent[data[i].symbol] = data[i].changepercent;
            }
            output +=`</table>`
            $("#rank_index1").html(output);
            for ( i in percent){
                if(percent[i]<0)
                    $("#rank_bot_percent"+[i]).css("color","green");
                if(percent[i]>0)
                    $("#rank_bot_percent"+[i]).css("color","red");
            }
        })
    $.ajax({
        url: "stock_top",
        type: "get",
        data:{

        },
        async: false,
    })
        .done(function (data) {
            output = `
                    <table>
                    `
            for ( var i in data){
                num = parseInt(i)+1;
                percentid= "rank_top_percent"+data[i].symbol;
                output += `
                            <tr>
                                <td style="text-align: center;width:3em"> `+num+`</td>
                                <td class="text-left symbol">`+data[i].symbol+`</td>
                                <td class="text-center symbol_name"><a href="www.baidu.com">`+data[i].name+`</a></td>
                                <td class="price">` + data[i].trade + `</td>
                                <td id="`+percentid+`" class="text-right percent">`+data[i].changepercent+`%</td>
                            </tr>
                           `;
                percent[data[i].symbol] = data[i].changepercent;
            }
            output +=`</table>`
            $("#rank_index0").html(output);
            for ( i in percent){
                if(percent[i]<0)
                    $("#rank_top_percent"+[i]).css("color","green");
                if(percent[i]>0)
                    $("#rank_top_percent"+[i]).css("color","red");
            }
        })

    $.ajax({
        url: "stock_pb",
        type: "get",
        data:{

        },
        async: false,
    })
        .done(function (data) {
            output = `
                    <table>
                    `
            for ( var i in data){
                num = parseInt(i)+1;
                percentid= "rank_top_percent"+data[i].symbol;
                output += `
                            <tr>
                                <td style="text-align: center;width:3em"> `+num+`</td>
                                <td class="text-left symbol">`+data[i].symbol+`</td>
                                <td class="text-center symbol_name"><a href="www.baidu.com">`+data[i].name+`</a></td>
                                <td class="price">` + data[i].trade + `</td>
                                <td id="`+percentid+`" class="text-right percent">`+data[i].changepercent+`%</td>
                            </tr>
                           `;
                percent[data[i].symbol] = data[i].changepercent;
            }
            output +=`</table>`
            $("#rank_index2").html(output);
            for ( i in percent){
                if(percent[i]<0)
                    $("#rank_top_percent"+[i]).css("color","green");
                if(percent[i]>0)
                    $("#rank_top_percent"+[i]).css("color","red");
            }
        })


    $.ajax({
        url: "stock_turnover",
        type: "get",
        data:{

        },
        async: false,
    })
        .done(function (data) {
            output = `
                    <table>
                    `
            for ( var i in data){
                num = parseInt(i)+1;
                percentid= "rank_top_percent"+data[i].symbol;
                output += `
                            <tr>
                                <td style="text-align: center;width:3em"> `+num+`</td>
                                <td class="text-left symbol">`+data[i].symbol+`</td>
                                <td class="text-center symbol_name"><a href="www.baidu.com">`+data[i].name+`</a></td>
                                <td class="price">` + data[i].trade + `</td>
                                <td id="`+percentid+`" class="text-right percent">`+data[i].changepercent+`%</td>
                            </tr>
                           `;
                percent[data[i].symbol] = data[i].changepercent;
            }
            output +=`</table>`
            $("#rank_index3").html(output);
            for ( i in percent){
                if(percent[i]<0)
                    $("#rank_top_percent"+[i]).css("color","green");
                if(percent[i]>0)
                    $("#rank_top_percent"+[i]).css("color","red");
            }
        })
    setTimeout("Rank()",1000*120);

}