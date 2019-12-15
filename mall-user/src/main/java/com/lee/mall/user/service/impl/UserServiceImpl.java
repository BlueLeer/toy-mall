package com.lee.mall.user.service.impl;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.lee.mall.user.domain.User;
import com.lee.mall.user.mapper.UserMapper;
import com.lee.mall.user.model.MyPage;
import com.lee.mall.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @date: 2019/12/15
 * @time: 12:40
 * @author: lee
 * @description:
 */
@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService {
    @Autowired
    private UserMapper userMapper;

    @Override
    public IPage<User> findPage(long current, long size) {
        IPage<User> page = userMapper.findPage(new Page(current, size));
        return page;
    }
}
