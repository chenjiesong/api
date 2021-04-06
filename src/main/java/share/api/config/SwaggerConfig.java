package share.api.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Profiles;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;
import org.springframework.core.env.Environment;
import java.util.ArrayList;

@Configuration // 配置类
@EnableSwagger2 // 开启Swagger2的自动配置
public class SwaggerConfig {
    /**
     * 配置 docket 和 Swagger 的具体参数
     * @return
     */

    @Bean
    public Docket docket(Environment environment) {
        // 设置要显示swagger的环境
        Profiles of = Profiles.of("dev", "test");
        // 判断当前是否处于该环境
        boolean flag = environment.acceptsProfiles(of);

        return new Docket(DocumentationType.SWAGGER_2)
                .groupName("页面")
                .apiInfo(apiInfo())
                // 通过.select()方法，去配置扫描接口
                .select()
                // RequestHandlerSelectors 配置扫描接口的具体方式
                .apis(RequestHandlerSelectors.basePackage("share.api.controller"))

                .build();

    }

    /**
     * 配置文档信息
     * @return
     */
    private ApiInfo apiInfo() {
        Contact contact = new Contact("BWH_Steven", "https://www.ideal-20.cn", "ideal_bwh@163.com");
        return new ApiInfo(
                "Swagger2", // title-标题
                "Swagger2", // description-描述
                "v1.0", // version-版本
                "https://www.ideal-20.cn", // termsOfServiceUrl-组织链接
                contact, // contact-联系人信息
                "Apach 2.0 许可", // license-许可
                "许可链接", // licenseUrl-许可连接
                new ArrayList<>()// vendorExtensions-扩展
        );
    }


}