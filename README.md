<!--
 * @Author: 贾晨昊
 * @Date: 2025-04-21 14:17:55
 * @LastEditors: 贾晨昊
 * @LastEditTime: 2025-04-21 15:10:43
 * @Description: 
-->
# bc-snippet-code README

## 业务常用片段

### vue文件

- `vue3`  生成一个页面默认结构
- `admin.list` 生成一个标准后台页面，上面搜索下面列表
- `admin.modal` 生成弹窗模板
- `admin.detail` 生成详情页面模板
- `v-p` 生成v-permission语句

### ts,tsx

- `admin.searchConfig` 配合`admin.list`使用，快速生成列表和搜索项配置
- `admin.modalConfig` 配合 `admin.modal`使用，用于函数式调用模板
- `admin.input` 配合 `admin.searchConfig`使用，生成搜索项input配置
- `admin.select` 配合 `admin.searchConfig`使用，生成搜索项select配置
- `admin.range-picker` 配合 `admin.searchConfig`使用，生成搜索项range-picker配置
- `admin.to` 配合async使用，同步调用接口且支持try catch的语句，推荐异步请求用它
### ts
- `admin.router` 生成一个基本的路由结构，只对ts文件起作用
- `admin.enum` 生成一个枚举结构，包括下拉列表和获取枚举名称方法

![enum1](https://image01f.bckid.com.cn/bc-snippet-code/enum1.gif)

- `admin.enumOptions` 生成只有下拉列表和获取枚举名称方法的枚举结构

![enums2](https://image01f.bckid.com.cn/bc-snippet-code/enums2.gif)

## 新增创建ApiMount弹窗
1. 右键目录，选择`新建弹窗`或`新建弹窗Vue2版`


**Enjoy!**
