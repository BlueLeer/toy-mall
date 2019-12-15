package com.lee.mall.seller.controller;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.lee.mall.seller.domain.Brand;
import com.lee.mall.seller.pojo.req.ReqBrand;
import com.lee.mall.seller.service.BrandService;
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
public class BrandController {

    @Autowired
    private BrandService brandService;

    /**
     * 返回全部列表
     *
     * @return
     */
    @PostMapping("/findAll")
    public List<Brand> findAll() {
        return brandService.list();
    }

    @PostMapping("/findPage")
    public IPage<Brand> findPage(@RequestBody ReqBrand reqBrand) {
        return brandService.findPage(reqBrand.getCurrent(), reqBrand.getSize());

    }


}
