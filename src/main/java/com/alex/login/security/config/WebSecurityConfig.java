package com.alex.login.security.config;

import com.alex.login.users.appuser.AppUserService;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
@AllArgsConstructor
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    private final AppUserService appUserService;
    private final BCryptPasswordEncoder passwordEncoder;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(daoAuthenticationProvider());
        auth.inMemoryAuthentication().withUser("user").password(passwordEncoder.encode("pass")).authorities("USER");
    }

    @Bean
    public DaoAuthenticationProvider daoAuthenticationProvider() {
        DaoAuthenticationProvider provider =
                new DaoAuthenticationProvider();
        provider.setPasswordEncoder(passwordEncoder);
        provider.setUserDetailsService(appUserService);
        return provider;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .csrf()
            .disable()
            .authorizeRequests()
                .antMatchers("/")
                .permitAll()
                .antMatchers("/join")
                .permitAll()
                .antMatchers("/css/**")
                .permitAll()
                .antMatchers("/js/**")
                .permitAll()
                .antMatchers("/api/v*/**")
                .permitAll()
                .antMatchers("/images/**")
                .permitAll()
            .anyRequest()
            .authenticated()
            .and()
            .formLogin()
                .loginPage("/login")
                .defaultSuccessUrl("http://localhost:3000/success",true)
                .permitAll()
        ;
    }
}
