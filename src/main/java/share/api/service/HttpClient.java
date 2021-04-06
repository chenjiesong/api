package share.api.service;

import com.alibaba.fastjson.JSONObject;
import io.swagger.models.HttpMethod;

import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import share.api.model.UserStock;


@Service
public class HttpClient {
    /*url请求参数，method请求方式，MultiValueMap获取结果的封装*/
    public JSONObject client(String url){
        RestTemplate template=new RestTemplate();
        ResponseEntity<JSONObject> response1=template.getForEntity(url,JSONObject.class);
        return  response1.getBody();
    }
}
