
package share.api.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.rememberme.JdbcTokenRepositoryImpl;
import org.springframework.security.web.authentication.rememberme.PersistentTokenRepository;
import org.springframework.security.web.authentication.rememberme.TokenBasedRememberMeServices;
import share.api.utils.MD5Util;
import share.api.service.UserService;
import share.api.model.User;
import javax.sql.DataSource;
import javax.annotation.Resource;

/**
 * @ClassName: SecurityConfig
 * @Description: TODO
 * @Author: BWH_Steven
 * @Date: 2020/5/26 11:49
 * @Version: 1.0
 */


@ComponentScan
@EnableWebSecurity
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {


    @Resource
    private UserService<User> userService;
    /*
    private DataSource dataSource;

    @Bean
    PersistentTokenRepository persistentTokenRepository(){

        JdbcTokenRepositoryImpl jdbcTokenRepository = new JdbcTokenRepositoryImpl();
        jdbcTokenRepository.setDataSource(dataSource);
        jdbcTokenRepository.setCreateTableOnStartup(true);
        return jdbcTokenRepository;
    }
    */

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests().antMatchers("/").permitAll()
                .antMatchers("/levelA/**").hasAnyRole("USER","ADMIN","SUPER_ADMIN")
                .antMatchers("/levelB/**").hasAnyRole("ADMIN","SUPER_ADMIN")
                .antMatchers("/levelC/**").hasRole("SUPER_ADMIN")
                .and().formLogin()

                // ????????????????????????
                .and().formLogin()
                .usernameParameter("username")
                .passwordParameter("password")
                .loginPage("/LoginPage")
                .failureUrl("/LoginPage?error=true")
                .defaultSuccessUrl("/Index")

                .loginProcessingUrl("/login")

                //??????
                .and().logout().logoutSuccessUrl("/")

                //?????????
                .and().rememberMe().rememberMeParameter("remember-me")
                /*
                .userDetailsService(userService)
                .tokenRepository(persistentTokenRepository())
                .tokenValiditySeconds(60)//token????????????????????????60???
                */
                //??????csrf????????????????????????????????????????????????post????????????logout??????
                .and().csrf().disable();

    }




    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userService).passwordEncoder(new PasswordEncoder() {
            @Override
            public String encode(CharSequence rawPassword) {
                return MD5Util.MD5EncodeUtf8((String) rawPassword);
            }

            @Override
            public boolean matches(CharSequence rawPassword, String encodedPassword) {
                return encodedPassword.equals(MD5Util.MD5EncodeUtf8((String) rawPassword));
            }
        });
    }

}
