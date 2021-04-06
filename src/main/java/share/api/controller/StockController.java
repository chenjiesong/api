package share.api.controller;

import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.JSON;
import io.swagger.annotations.Api;
import io.swagger.models.HttpMethod;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import share.api.mapper.StockMapper;
import share.api.mapper.UserMapper;
import share.api.model.Stock;
import share.api.model.StockReal;
import share.api.model.UserStock;
import share.api.service.HttpClient;

import java.util.Dictionary;
import java.util.List;


/**
 * @ClassName: PageController
 * @Description: TODO
 * @Author: BWH_Steven
 * @Date: 2020/5/26 10:56
 * @Version: 1.0
 */

@Api(value = "", tags = "股票接口" )
@RestController

public class StockController {

    @Autowired
    HttpClient httpClient;
    @RequestMapping (value =  "/stock_real" ,method = RequestMethod.GET)
    public Stock stock_real(@RequestParam String symbol){
        String url = "http://127.0.0.1:8000/real/"+symbol;
        return JSON.toJavaObject(httpClient.client(url),Stock.class);
    }

    @Autowired
    private StockMapper stockMapper;
    @RequestMapping(value = "/user_stock", method = RequestMethod.GET)
    @ResponseBody
    public List<UserStock> queryStockUser(@RequestParam Integer uid){
        return stockMapper.queryUserStockByUid(uid);
    }

    @Autowired
    private UserMapper userMapper;
    @RequestMapping(value = "/user_count_stock", method = RequestMethod.GET)
    @ResponseBody
    public Integer queryCountStockUser(@RequestParam String username){
        return stockMapper.queryCountUserStockByUid(userMapper.queryUserByUserName(username).getUid());
    }


    @RequestMapping("/Stock")
    public String queryStockUser(Model model){
        List<StockReal> sz_stocks_top = stockMapper.queryStockTop();
        List<StockReal> sz_stocks_bot = stockMapper.queryStockBot();
        model.addAttribute("sz_stock_top", sz_stocks_top);
        model.addAttribute("sz_stock_bot", sz_stocks_bot);
        return "test.html";
    }

    @RequestMapping(value = "/stock_top", method = RequestMethod.GET)
    @ResponseBody
    public List<StockReal> queryStockTop(){
        return stockMapper.queryStockTop();
    }

    @RequestMapping(value = "/stock_bot", method = RequestMethod.GET)
    @ResponseBody
    public List<StockReal> queryStockBot(){
        return stockMapper.queryStockBot();
    }

    @RequestMapping(value = "/stock_pb", method = RequestMethod.GET)
    @ResponseBody
    public List<StockReal> queryStockPb(){
        return stockMapper.queryStockPb();
    }

    @RequestMapping(value = "/stock_turnover", method = RequestMethod.GET)
    @ResponseBody
    public List<StockReal> queryStockTurnover(){
        return stockMapper.queryStockTurnover();
    }

    @RequestMapping(value = "/stock_volume", method = RequestMethod.GET)
    @ResponseBody
    public List<StockReal> queryStockVolume(){
        return stockMapper.queryStockVolume();
    }

    @RequestMapping(value = "/stock_search_code", method = RequestMethod.GET)
    @ResponseBody
    public List<StockReal> queryStockByCode(@RequestParam String code){
        return stockMapper.queryStockByCode(code);
    }

    @RequestMapping(value = "/stock_search_name", method = RequestMethod.GET)
    @ResponseBody
    public List<StockReal> queryStockByName(@RequestParam String name){
        return stockMapper.queryStockByName(name);
    }


}
