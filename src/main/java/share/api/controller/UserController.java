package share.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import share.api.mapper.UserMapper;
import share.api.model.StockReal;
import share.api.model.User;
import share.api.model.UserRecent;

import java.util.List;

@Controller
public class UserController {
    @Autowired
    private UserMapper userMapper;
    @RequestMapping(value = "/user_id", method = RequestMethod.GET)
    @ResponseBody
    public Integer queryUseridByUsername(@RequestParam String username) {
        return userMapper.queryUserByUserName(username).getUid();
    }

    @RequestMapping(value = "/user_recent", method = RequestMethod.GET)
    @ResponseBody
    public List<UserRecent> queryUseridByUsername(@RequestParam int uid) {
        return userMapper.queryUserRecent(uid);
    }
}
