package com.lee.mall.user.model;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;

/**
 * @date: 2019/12/15
 * @time: 20:30
 * @author: lee
 * @description: 分页参数模型
 */
public class MyPage<T> extends Page<T> {
    public MyPage(long current, long size) {
        super(current, size);
    }
}
