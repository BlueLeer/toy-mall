package com.lee.mall.user.pojo.req;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

/**
 * @date: 2019/12/15
 * @time: 21:25
 * @author: lee
 * @description:
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReqUser implements Serializable {
    private long current;
    private long size;

}
