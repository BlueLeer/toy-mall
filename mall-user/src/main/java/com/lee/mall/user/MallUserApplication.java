package com.lee.mall.user;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;

/**
 * @date: 2019/12/15
 * @time: 12:20
 * @author: lee
 * @description:
 */
@SpringBootApplication
@EnableDiscoveryClient
@EnableFeignClients
public class MallUserApplication {
    public static void main(String[] args) {
        SpringApplication.run(MallUserApplication.class, args);
    }
}
