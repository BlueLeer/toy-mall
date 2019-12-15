package com.lee.mall.user.controller;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.lee.mall.user.domain.User;
import com.lee.mall.user.pojo.req.ReqUser;
import com.lee.mall.user.service.UserService;
import com.netflix.discovery.converters.Auto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @date: 2019/12/15
 * @time: 20:16
 * @author: lee
 * @description:
 */
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    /**
     * 返回全部列表
     *
     * @return
     */
    @PostMapping("/findAll")
    public List<User> findAll() {
        return userService.list();
    }

    @PostMapping("/findPage")
    public IPage<User> findPage(@RequestBody ReqUser reqUser) {
        return userService.findPage(reqUser.getCurrent(), reqUser.getSize());

    }


}
