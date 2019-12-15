package com.lee.mall.user.controller;

import com.google.gson.Gson;
import com.lee.mall.user.domain.User;
import com.lee.mall.user.pojo.req.ReqUser;
import com.netflix.discovery.converters.Auto;
import com.netflix.ribbon.proxy.annotation.Http;
import net.minidev.json.JSONUtil;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MockMvcBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import static org.junit.Assert.*;

/**
 * @date: 2019/12/15
 * @time: 21:01
 * @author: lee
 * @description:
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class UserControllerTest {

    @Autowired
    private WebApplicationContext context;

    private MockMvc mvc;
    private MockHttpSession session;

    @Before
    public void setUp() {
        mvc = MockMvcBuilders.webAppContextSetup(context).build();
        session = new MockHttpSession();

        User user = new User();
        user.setUsername("zhangsan");
        user.setPassword("123456");

        session.setAttribute("user", user);
    }

    /**
     * 查询所有用户测试用例
     */
    @Test
    public void findAll() throws Exception {
        mvc.perform(MockMvcRequestBuilders.post("/user/findAll").accept(MediaType.APPLICATION_JSON_UTF8)
                .content("{}".getBytes()).session(session))
                .andDo(MockMvcResultHandlers.print());

    }

    @Test
    public void findPage() throws Exception {
        ReqUser reqUser = new ReqUser(1, 10);
        String param = new Gson().toJson(reqUser);
        mvc.perform(
                MockMvcRequestBuilders.post("/user/findPage")
                        .accept(MediaType.APPLICATION_JSON_UTF8)
                        .content(param.getBytes())
                        .session(session)
        ).andDo(MockMvcResultHandlers.print());
    }
}