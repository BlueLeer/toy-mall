package com.lee.mall.seller.domain;

import lombok.Data;

import java.io.Serializable;

@Data
public class Brand implements Serializable {
    private Long id;

    private String name;

    private String firstChar;

}