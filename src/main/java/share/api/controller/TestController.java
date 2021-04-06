package share.api.controller;

import com.alibaba.fastjson.JSON;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import share.api.mapper.StockMapper;
import share.api.mapper.UserMapper;
import share.api.model.Stock;
import share.api.model.StockReal;
import share.api.model.User;
import share.api.model.UserStock;
import share.api.service.HttpClient;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Controller
public class TestController {
    @Autowired
    private StockMapper stockMapper;
    private UserMapper userMapper;

    @RequestMapping("testUser")
    public String testUser(Model model){
        List<StockReal> sz_stocks_top = stockMapper.queryStockTop();
        List<StockReal> sz_stocks_bot = stockMapper.queryStockBot();
        model.addAttribute("sz_stock_top", sz_stocks_top);
        model.addAttribute("sz_stock_bot", sz_stocks_bot);
        return "test.html";
    }

    @Autowired
    HttpClient httpClient;
    @RequestMapping(value="search",method={RequestMethod.GET})
    public String toSearch(Model model,@RequestParam String symbol){
        String url = "http://127.0.0.1:8000/real/"+symbol;
        Stock stock = JSON.toJavaObject(httpClient.client(url), Stock.class);

        return "search.html";
    }
}
