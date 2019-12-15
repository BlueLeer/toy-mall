package com.lee.mall.user.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.lee.mall.user.domain.User;
import com.lee.mall.user.model.MyPage;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

/**
 * @date: 2019/12/15
 * @time: 12:36
 * @author: lee
 * @description:
 */
@Mapper
public interface UserMapper extends BaseMapper<User> {
    @Select("select id,username,password,phone,email from TB_USER ")
    IPage<User> findPage(Page page);
}
