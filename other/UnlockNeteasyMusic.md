
## 网易云解锁：

### 1.1 IOS、iPadOS端安装并信任证书

首先下载CA证书，前往“设置-通用-描述文件”，安装「UnblockNeteaseMusic Root CA」，然后在“设置-通用-关于本机-证书信任设置”处开启对「UnblockNeteaseMusic Root CA」的信任。
CA证书（复制下面内容到iPhone或iPad原生浏览器中打开）：
```
https://raw.githubusercontent.com/nondanee/UnblockNeteaseMusic/master/ca.crt
```

### 1.2 为网易云音乐添加策略组
在圈X的[Policy]策略组下添加如下内容（如果你使用的是墨鱼小白2.0配置，则无需添加）：

```
static=网易云音乐, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Netease_Music_Unlock.png
```

### 1.3 为网易云音乐添加分流
在圈X的[filter_remote]分流下添加如下内容：
```
https://raw.githubusercontent.com/ddgksf2013/Filter/master/NeteaseMusic.list, tag=解锁网易云音乐, force-policy=网易云音乐, update-interval=-1, opt-parser=false, enabled=true
```

### 1.4 为网易云音乐添加魔法
在圈X的[server_remote]分流下添加如下内容：
```
https://gist.githubusercontent.com/ddgksf2013/baacafc36c685a0af41e500d9a4773ab/raw/Netease.list, tag=网易云线路, update-interval=172800, opt-parser=false, enabled=true
```
