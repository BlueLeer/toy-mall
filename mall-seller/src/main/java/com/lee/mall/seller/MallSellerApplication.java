package com.lee.mall.seller;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;

/**
 * @date: 2019/12/15
 * @time: 22:26
 * @author: lee
 * @description:
 */
@SpringBootApplication
@EnableDiscoveryClient
@EnableFeignClients
public class MallSellerApplication {
    public static void main(String[] args) {
        SpringApplication.run(MallSellerApplication.class, args);
    }
}
