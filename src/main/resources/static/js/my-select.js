function My_Select_Init(){
    $.ajax({
        url:"user_count_stock",
        type:"get",
        data:{
            username:$("#username").text()
        },
        async:false
    })
        .done(function (data){
            myPageInit({
                pages:Math.ceil(data/5),
                currentPage: 1,
                element: '.my-page',
                callback: function(page) {
                    My_Select(page);
                }
            });
        })
}

function My_Select(page){

    percent = []
    $.ajax({
        url:"user_id",
        type:"get",
        data:{
            username:$("#username").text()
        },
        async:false,

    })
        .done(function (data){
            $.ajax({
                url: "user_stock",
                type: "get",
                data:{
                    uid:data
                },
                async: false,
            })
                .done(function (data) {
                    output = `
                            <table class="select_table" border="2" >
                                <tr>
                                </tr>
                            `
                    for ( var i in data) {
                        if (i < page * 5 && i >= (page - 1) * 5) {
                            $.ajax({
                                url: "stock_real",
                                type: "get",
                                data: {
                                    symbol: data[i].symbol
                                },
                                async: false,
                            })
                                .done(function (detail) {
                                    percentid = "select_percent" + detail.symbol;
                                    buttonid = "select_button" + detail.symbol;
                                    imgid = "select_img" + detail.symbol;
                                    output += `
                                <tr >
                                    <td class="symbol">` + detail.symbol + `</td>
                                    <td class="symbol_name"><a href="www.baidu.com">` + detail.name + `</a></td>
                                    <td class="price">` + detail.price + `</td>
                                    <td id="` + percentid + `" class="percent">` + detail.changepercent + `% </td>
                                    <td><button id="` + buttonid + `" style="font-size: 1.3rem" `;
                                    if (select_check_detail[detail.symbol] === 1 || (select_check_detail[detail.symbol] !== 0 && select_check_detail[detail.symbol] !== 1))
                                        output += `class='fa fa-angle-down button-right'`;
                                    else
                                        output += `class='fa fa-angle-up button-right'`;
                                    output += `
                                     value="` + detail.symbol + `" onclick="select_detail(this.value)"></button> </td>
                                     <td><a>删除</a></td>
                                <tr hidden></tr>
                                </tr>
                                <tr class="` + detail.symbol + `">
                                    <td colspan="6">
                                        <img id="` + imgid + `" class="crop" src="`;
                                    if (select_img_minute === 20) {
                                        select_time[detail.symbol] = Math.random();
                                        output += `http://image.sinajs.cn/newchart/min/n/` + detail.symbol + `.gif?t=` + select_time[detail.symbol] + ``;
                                    } else {
                                        output += `http://image.sinajs.cn/newchart/min/n/` + detail.symbol + `.gif?t=` + select_time[detail.symbol] + ``;
                                    }
                                    output += `">
                                      <div class="div-left">
                                        <p>开盘价:` + detail.open + `</p>
                                        <p>最高价:` + detail.high + `</p>
                                        <p>最低价:` + detail.low + `</p>
                                        <p>成交量:` + detail.volume + `</p>
                                        <p>成交额:` + detail.turnover + `</p>
                                        <p>买一价:` + detail.buy1 + `</p>
                                        <p>买一手:` + detail.buy1_hand + `</p>
                                        <p>卖一价:` + detail.sell1 + `</p>          
                                        <p>卖一手:` + detail.sell1_hand + `</p>                   
                                        </div>                        
                                    </td>
                                </tr>
                               `;
                                    if (select_check_detail[detail.symbol] !== 0 && select_check_detail[detail.symbol] !== 1) {
                                        select_check_detail[detail.symbol] = 1;
                                    }
                                    percent[detail.symbol] = detail.changepercent;
                                })


                        }
                    }
                    output +=`</table>`
                    $("#select").html(output);
                    select_date = new Date().Format("yyyy-MM-dd HH:mm:ss");
                    select_subhead = "刷新时间："+select_date+"（每3秒刷新）"
                    $("#select_flash_time").html(select_subhead);
                    for ( i in select_check_detail){
                        if (select_check_detail[i] === 1)
                            $('.select_table').find("."+i).hide()
                        if(percent[i]<0)
                            $("#select_percent"+[i]).css("color","green");
                        if(percent[i]>0)
                            $("#select_percent"+[i]).css("color","red");
                    }
                    select_img_minute = select_img_minute-1;
                    if(select_img_minute === 0)
                        select_img_minute = 20;
                })
        })
    if(select_flash)
        clearTimeout(select_flash)
    select_flash = setTimeout("My_Select("+page+")",1000*3);
}

function select_detail(symbol) {
    details = $('.select_table').find("."+symbol);
    details.slideToggle();
    if(select_check_detail[symbol] === 1){
        select_check_detail[symbol] = 0;
        $('.select_table').find("."+[symbol]).show({
            duration: 1300,
        })
        $("#select_button"+[symbol]).attr("class","fa fa-angle-up button-right");
    }
    else{
        select_check_detail[symbol] = 1;
        $("#select_button"+[symbol]).attr("class","fa fa-angle-down button-right");
    }
};