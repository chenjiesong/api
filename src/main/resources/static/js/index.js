var select_check_detail = [];
var select_img_minute = 20;
var select_time= [];
function onLoad(){
    Rank();
    My_Select();
}

function Rank() {
    $.ajax({
        url: "stock_bot",
        type: "get",
        data:{
            symbol:"sh"
        },
        async: false,
    })
        .done(function (data) {
            output = `
                    <table >
                        <tr>
                            <th class="text-left">symbol</th>
                            <th class="text-left">name</th>
                            <th class="text-left">percent</th>
                        </tr>
                    `
            for ( var i in data){
                output += `
                            <tr >
                                <td class="text-left">`+data[i].symbol+`</td>
                                <td class="text-left">`+data[i].name+`</td>
                                <td class="text-left">`+data[i].changepercent+`</td>
                            </tr>
                           `;
            }
            output +=`</table>`
            document.getElementById("bot").innerHTML = output;
        })

    $.ajax({
        url: "stock_top",
        type: "get",
        data:{
            symbol:"sh"
        },
        async: false,
    })
        .done(function (data) {
            output = `
                    <table>
                        <tr>
                            <th>symbol</th>
                            <th>name</th>
                            <th>percent</th>
                        </tr>
                    `
            for ( var i in data){
                output += `
                            <tr>
                                <td >`+data[i].symbol+`</td>
                                <td >`+data[i].name+`</td>
                                <td >`+data[i].changepercent+`</td>
                            </tr>
                           `;
            }
            output +=`</table>`
            document.getElementById("top").innerHTML = output;
        })

    setTimeout("Rank()",1000*120);

}

function My_Select(){
    percent = []

    $.ajax({
        url: "user_stock",
        type: "get",
        data:{
            uid:"1"
        },
        async: false,
    })
        .done(function (data) {
            output = `

                    <table class="select_table" border="2" >
                        <tr>
                        </tr>
                    `
            for ( var i in data){
                $.ajax({
                    url: "stock_real",
                    type: "get",
                    data:{
                        symbol:data[i].symbol
                    },
                    async: false,
                })
                    .done(function (detail) {
                        percentid= "percent"+detail.symbol;
                        buttonid = "button" +detail.symbol;
                        imgid = "img"+detail.symbol;
                        output += `
                        <tr >
                            <td >`+detail.symbol+`</td>
                            <td ><a href="www.baidu.com">`+detail.name+`</a></td>
                            <td >`+detail.price+`</td>
                            <td id="`+percentid+`">`+detail.changepercent+`% <button id="`+buttonid+`" style="font-size: 1.3rem" `;
                        if (select_check_detail[detail.symbol]===1||(select_check_detail[detail.symbol]!==0&&select_check_detail[detail.symbol]!==1))
                            output+=`class='fa fa-angle-down button-right'`;
                        else
                            output+=`class='fa fa-angle-up button-right'`;
                        output+=`
                             value="`+ detail.symbol + `" onclick="select_detail(this.value)"></button> </td>
                        <tr hidden></tr>
                        </tr>
                        <tr class="`+detail.symbol+`">
                            <td colspan="4">
                              <ul>
                              <div class="div-right">
                                <img id="`+imgid+`" class="crop" src="`;
                        if(select_img_minute===20) {
                            select_time[detail.symbol] = Math.random();
                            output += `http://image.sinajs.cn/newchart/min/n/` + detail.symbol + `.gif?t=` + select_time[detail.symbol] + ``;
                        }
                        else{
                            output+=`http://image.sinajs.cn/newchart/min/n/`+detail.symbol+`.gif?t=` + select_time[detail.symbol] + ``;
                        }
                        output+=`">
                            
                              </div>
                              <div class="div-left">
                                <p>开盘价:`+detail.open+`</p>
                                <p>最高价:`+detail.high+`</p>
                                <p>最低价:`+detail.low+`</p>
                                <p>成交量:`+detail.volume+`</p>
                                </div>
                              </ul>                           
                            </td>
                        </tr>
                       `;
                        if (select_check_detail[detail.symbol]!==0&&select_check_detail[detail.symbol]!==1){
                            select_check_detail[detail.symbol]= 1;
                        }
                        percent[detail.symbol] = detail.changepercent;
                    })

            }
            output +=`</table>`
            document.getElementById("select").innerHTML = output;
            for ( i in select_check_detail){
                if (select_check_detail[i] === 1)
                    $('.select_table').find("."+i).hide()
                if(percent[i]<0&&document.getElementById("percent"+[i]))
                    document.getElementById("percent"+[i]).style.color = "green";
                else
                    document.getElementById("percent"+[i]).style.color = "red";
            }
            select_img_minute = select_img_minute-1;
            if(select_img_minute === 0)
                select_img_minute = 20;
        })
    setTimeout("My_Select()",1000*3);
}


function select_detail(symbol) {

    details = $('.select_table').find("."+symbol);
    details.slideToggle();
    if(select_check_detail[symbol] === 1){
        select_check_detail[symbol] = 0;
        document.getElementById("button"+[symbol]).className = "fa fa-angle-up button-right";
    }
    else{
        select_check_detail[symbol] = 1;
        document.getElementById("button"+[symbol]).className = "fa fa-angle-down button-right";
    }
};


