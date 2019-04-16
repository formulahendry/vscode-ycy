# 超越鼓励师

在 VS Code 中连续写代码一小时（时间可配置），会有杨超越提醒你该休息啦~

## 超越杯编程大赛

本插件正在参加第一届超越杯编程大赛，如果你喜欢，请为“超越鼓励师 for VS Code”投上一票吧！请使用微信或 QQ 扫描下面的二维码进行投票，并能查看作品的视频介绍。

![vote-qr](images/vote-qr.png)

## 使用

除了每过一小时会自动弹出提醒页面，也可以按 `F1`, 然后输入 `ycy: 打开提醒页面`来打开提醒页面

![usage](images/usage.png)

## 配置

* `ycy.reminderViewIntervalInMinutes`: 展示提醒页面的时间间隔（分钟）。 (默认值为**60**)
* `ycy.showTitle`: 提示文字。 (默认值为**小哥哥，小哥哥，代码写久了，该休息啦~**)

* `ycy.isUseConfigImage`: 是否使用自己配置图片 (默认值为**false**)
* `ycy.configImages`: 配置图片数组（需要搭配ycy.isUseConfigImage为true） (默认值为**默认图片**)
例如: [
    "http://b-ssl.duitang.com/uploads/item/201806/04/20180604090459_gqqjo.jpg",
    "http://img5.imgtn.bdimg.com/it/u=2196122296,3201462689&fm=26&gp=0.jpg"
]
