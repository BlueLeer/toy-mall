package com.lee.mall.seller.service;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.IService;
import com.lee.mall.seller.domain.Brand;

/**
 * @date: 2019/12/15
 * @time: 12:38
 * @author: lee
 * @description:
 */
public interface BrandService extends IService<Brand> {
    IPage<Brand> findPage(long current, long size);
}
