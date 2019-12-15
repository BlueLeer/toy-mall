package com.lee.mall.seller.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.lee.mall.seller.domain.Brand;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

/**
 * @date: 2019/12/15
 * @time: 12:36
 * @author: lee
 * @description:
 */
@Mapper
public interface BrandMapper extends BaseMapper<Brand> {
    @Select("select id,username,password,phone,email from TB_USER ")
    IPage<Brand> findPage(Page page);
}
