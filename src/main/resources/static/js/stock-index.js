function Stock_Index_Init(){
    symbol = ["sh000001","sz399001","sh000300","sz399415","sz399006"]

    for(i in symbol) {
        var output =`<table class="index_table" border="2" >
                    <tr hidden></tr>
                                <tr>`;
        $.ajax({
            url: "stock_real",
            type: "get",
            data: {
                symbol: symbol[i]
            },
            async: false,
        })
            .done(function (detail) {
                percentid = "index_percent" + detail.symbol;
                buttonid = "index_button" + detail.symbol;
                imgid = "index_img" + detail.symbol;
                output += `
                            <td class="symbol">` + detail.symbol + `</td>
                            <td class="symbol_name"><a href="www.baidu.com">` + detail.name + `</a></td>
                            <td class="price">` + detail.price + `</td>
                            <td id=` + percentid + ` class="percent" >` + detail.changepercent + `%</td>
                         <td><tr hidden></tr>
                                </tr>
                                <tr class="` + detail.symbol + `">
                                    <td colspan="6">
                                        <img id="` + imgid + `" class="crop" src="`;
                if (index_img_minute === 20) {
                    index_time[detail.symbol] = Math.random();
                    output += `http://image.sinajs.cn/newchart/min/n/` + detail.symbol + `.gif?t=` + index_time[detail.symbol] + ``;
                } else {
                    output += `http://image.sinajs.cn/newchart/min/n/` + detail.symbol + `.gif?t=` + index_time[detail.symbol] + ``;
                }
                output += `">
                                      <div class="div-left">
                                        <p>开盘价:` + detail.open + `</p>
                                        <p>最高价:` + detail.high + `</p>
                                        <p>最低价:` + detail.low + `</p>
                                        <p>成交量:` + detail.volume + `</p>
                                        <p>成交额:` + detail.turnover + `</p>           
                                        </div>                        
                                    </td>
                                </tr>
                               `;
                percent[detail.symbol] = detail.changepercent;
            })

        output += `</table>`
        $("#stock_index"+i).html(output)
        for (i in percent) {
            if (percent[i] < 0)
                $("#index_percent" + [i]).css("color", "green");
            if (percent[i] > 0)
                $("#index_percent" + [i]).css("color", "red");
        }
    }
    index_img_minute = index_img_minute-1;
    if(index_img_minute === 0)
        index_img_minute = 20;

    setTimeout("Stock_Index_Init()",1000*3);
}

