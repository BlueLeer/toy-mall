package com.lee.mall.user.service;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.IService;
import com.lee.mall.user.domain.User;

/**
 * @date: 2019/12/15
 * @time: 12:38
 * @author: lee
 * @description:
 */
public interface UserService extends IService<User> {
    IPage<User> findPage(long current, long size);
}
