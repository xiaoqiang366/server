/*
 * @Content: 菜单管理
 * @Author: Edwin
 * @Date: 2019-01-24 23:44:32
 * @Last Modified by: Edwin
 * @Last Modified time: 2019-01-26 16:10:02
 */
const Router = require('koa-router')();
const Category = require('../control/category');


/**
 * @api {post} /category/add 分类添加
 * @apiName categoryAdd
 * @apiGroup Category
 * @apiDescription 添加菜品分类
 * @apiParam (params) {String} name 分类名称
 * @apiParam (params) {String} [desc='暂无描述'] 分类描述
 * @apiHeaderExample {json} Header:
 * {
 *    "Authorition": "xxxxxxxxxxxx"
 *  }
 *
 * @apiSuccessExample 添加成功
 * {
      "code": 1,
      "data": {
          "categoryId": "5c4be6f9751906b9606218c8"
      }
  }
 * @apiErrorExample {json} 未登录
  {
      "code": -1,
      "errMsg": "请先登录"
  }
* @apiErrorExample {json} 重复添加
  {
      "code": 0,
      "errMsg": "当前分类已存在, 请勿重复添加"
  }
 *
 */
Router.post("/add", Category.add)

/**
 * @api {get} /category/list 分类列表查询
 * @apiName categoryList
 * @apiGroup Category
 * @apiDescription 所有分类列表查询
 * @apiSuccessExample 添加成功
 * {
      "code": 1,
      "data": {
          "list": [
              {
                  "id": "5c4be1ba45b939b6a4f557b4",
                  "name": "本土推荐",
                  "desc": "目前仅支持xxx地区用户",
                  "createTime": "2019-01-26T04:27:38.574Z",
                  "updateTime": "2019-01-26T04:27:38.574Z"
              },
              {
                  "id": "5c4be29927bbd3b75808d32d",
                  "name": "本土推荐1",
                  "desc": "目前仅支持xxx地区用户",
                  "createTime": "2019-01-26T04:31:21.576Z",
                  "updateTime": "2019-01-26T04:31:21.576Z"
              }
          ],
          "total": 2
      }
  }
 *
 */
Router.get("/list", Category.list);

/**
 * @api {post} /category/delete 分类删除
 * @apiName categoryDelete
 * @apiGroup Category
 * @apiDescription 分类删除
 * @apiParam (params) {String} id 分类id
 * @apiSuccessExample 删除成功
 * {
        "code": 1,
        "data": "删除成功",
        "msg": "请求成功"
    }
 *
 * @apiErrorExample 分类不存在
 * {
        "code": 0,
        "errMsg": "当前分类不存在"
    }
 */
Router.post("/delete", Category.delete)

/**
 * @api {post} /category/update 分类修改
 * @apiName categoryUpdate
 * @apiGroup Category
 * @apiDescription
 * @apiParam (params) {String} id 分类id
 * @apiParam (params) {String} name 分类名称
 * @apiParam (params) {String} [desc='暂无描述'] 分类描述
 * @apiHeaderExample {json} Header:
 * {
 *    "Authorition": "xxxxxxxxxxxx"
 *  }
 *
 * @apiSuccessExample 成功
 * {
      "code": 1,
      "data": {
          "categoryId": "5c4be6f9751906b9606218c8"
      }
  }
 * @apiErrorExample {json} 未登录
  {
      "code": -1,
      "errMsg": "请先登录"
  }
* @apiErrorExample {json} 添加失败
  {
      "code": 0,
      "errMsg": "当前分类已存在"
  }
 *
 */
Router.post("/update", Category.update)

module.exports = Router;
