package com.lee.mall.user.domain;

import lombok.Data;

import java.io.Serializable;
import java.util.Date;

/**
 * @date: 2019/12/15
 * @time: 12:35
 * @author: lee
 * @description:
 */
@Data
public class User implements Serializable {
    private Long id;

    private String username;

    private String password;

    private String phone;

    private String email;

    private Date created;

    private Date updated;

    private String sourceType;

    private String nickName;

    private String name;

    private String status;

    private String headPic;

    private String qq;

    private Long accountBalance;

    private String isMobileCheck;

    private String isEmailCheck;

    private String sex;

    private Integer userLevel;

    private Integer points;

    private Integer experienceValue;

    private Date birthday;

    private Date lastLoginTime;
}
