package com.lee.mall.seller.service.impl;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.lee.mall.seller.domain.Brand;
import com.lee.mall.seller.mapper.BrandMapper;
import com.lee.mall.seller.service.BrandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @date: 2019/12/15
 * @time: 12:40
 * @author: lee
 * @description:
 */
@Service
public class BrandServiceImpl extends ServiceImpl<BrandMapper, Brand> implements BrandService {
    @Autowired
    private BrandMapper userMapper;

    @Override
    public IPage<Brand> findPage(long current, long size) {
        IPage<Brand> page = userMapper.findPage(new Page(current, size));
        return page;
    }
}
