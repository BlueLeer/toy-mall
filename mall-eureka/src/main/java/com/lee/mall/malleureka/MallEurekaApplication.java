package com.lee.mall.malleureka;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

/**
 * @date: 2019/12/15
 * @time: 11:40
 * @author: lee
 * @description:
 */
@EnableEurekaServer
@SpringBootApplication
public class MallEurekaApplication {
    public static void main(String[] args) {
        SpringApplication.run(MallEurekaApplication.class, args);
    }

}
