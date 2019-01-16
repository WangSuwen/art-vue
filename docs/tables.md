## 1、聊天窗口 表

> 用于记录聊天窗口，及展示顺序


```
-- chatwindows
  _id: XXXXX,
  type: userToUser/groups,
  members: [user1, user2],
  created: Date,
  update: Date,
```
  
  * 分类：
    * 用户对用户
    * 群组
  * 操作:
    * 实时更新 `update` 字段，方便排序
  * 查询：
    * 用户对用户：查询主用户的ID是否在 members中
    * 群组：这个暂定 跟`用户对用户`相同，这个不好，需要变更。  

## 2、聊天记录 表

> 用于记录聊天记录，及排序

```
-- chatlogs
  _id: XXXXXX,
  chatwindowsId: chatwindows._id,
  sendUserId: user1._id,
  sendUserAvatar: XXXX,  // 发送者头像
  receiveUserId: user2._id,
  content: 'XXXXXXXXXXXX',
  created: Date
```
* 操作： 用户点击某一个聊天窗口时，根据窗口ID按照时间倒序查询记录，前端展示时根据`sendUserId`来区分自己和别人说的话。
* 查询条数：默认查询最新10条。



