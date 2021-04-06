package share.api.controller;

import io.swagger.annotations.Api;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * @ClassName: PageController
 * @Description: TODO
 * @Author: BWH_Steven
 * @Date: 2020/5/26 10:56
 * @Version: 1.0
 */

@Api(value = "页面跳转value", tags = "页面跳转接口Tags" )
@Controller

public class PageController {

    @RequestMapping(value={ "Index"},method= {RequestMethod.GET})
    public String index() {
        return "index";
    }

    @RequestMapping(value="/About",method= {RequestMethod.GET})
    public String toAboutPage() {
        return "redirect:http://www.ideal-20.cn";
    }

    @RequestMapping(value="/Test",method= {RequestMethod.GET})
    public String toTestPage() {
        return "test";
    }

    @RequestMapping(value="/LoginPage",method= {RequestMethod.GET})
    public String toLoginPage() {
        return "views/login";
    }

    @RequestMapping(value="/LevelA/{name}",method= {RequestMethod.GET})
    public String toLevelAPage(@PathVariable("name") String name) {
        return "views/L-A/" + name;
    }

    @RequestMapping(value="/LevelB/{name}",method= {RequestMethod.GET})
    public String toLevelBPage(@PathVariable("name") String name) {
        return "views/L-B/" + name;
    }

    @RequestMapping(value="LevelC/{name}",method= {RequestMethod.GET})
    public String toLevelCPage(@PathVariable("name") String name) {
        return "views/L-C/" + name;
    }


}

