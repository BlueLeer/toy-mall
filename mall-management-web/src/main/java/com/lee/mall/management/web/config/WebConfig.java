package com.lee.mall.management.web.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * @date: 2019/12/15
 * @time: 13:08
 * @author: lee
 * @description: 踩坑: WebConfig继承了WebMvcConfigurationSupport,WebMvcConfigurationSupport
 * 在整个应用程序中只会生效一个，如果用户已经实现了 WebMvcConfigurationSupport，则 DelegatingWebMvcConfiguration
 * 将不会生效，换句话来说，WebMvcConfigurer 的所有实现类将不会生效。而在Spring 中，
 * 如果类路径上不存在 WebMvcConfigurationSupport 的实例，则将会默认实现
 * WebMvcConfigurerAdapter、DelegatingWebMvcConfiguration 来自定义mvc 配置
 */

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
    }
}
