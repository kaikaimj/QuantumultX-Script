# 去微信公众号广告
^https?:\/\/mp\.weixin\.qq\.com\/mp\/getappmsgad url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/Wechat.js
# 知乎去广告
;https://api.zhihu.com/people/ url script-response-body https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20people.js
;https://api.zhihu.com/moments/recommend url script-response-body https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20feed.js
;https://api.zhihu.com/topstory/recommend url script-response-body https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20recommend.js
;https://api.zhihu.com/v4/questions url script-response-body https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20answer.js
;https?://link.zhihu.com/?target= url script-request-header https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20zhihu%20link.js
# 哔哩哔哩动画去广告
https://app.bilibili.com/x/v2/space?access_key url script-response-body https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20space.js
https://app.bilibili.com/x/resource/show/tab?access_key url script-response-body https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20tab.js
https://app.bilibili.com/x/v2/feed/index?access_key url script-response-body https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20feed.js
https://app.bilibili.com/x/v2/account/mine?access_key url script-response-body https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20account.js
https://app.bilibili.com/x/v2/view?access_key url script-response-body https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20view%20relate.js
https://api.bilibili.com/x/v2/reply/main?access_key url script-response-body https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20reply.js
https://api.live.bilibili.com/xlive/app-room/v1/index/getInfoByRoom?access_key url script-response-body https://raw.githubusercontent.com/onewayticket255/Surge-Script/master/surge%20bilibili%20live.js
# 哔哩哔哩番剧开启1080P+
^https:\/\/ap(p|i)\.bilibili\.com\/((pgc\/player\/api\/playurl)|(x\/v2\/account\/myinfo\?)|(x\/v2\/account/mine\?)) url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/bilifj.js
# 哔哩哔哩动画精简去广告
^https:\/\/app\.bilibili\.com\/(search\/resource|x\/(resource\/show\/tab|v2\/(view|rank|feed|reply\/main|account\/mine))) url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/Bilibili.js
# 91短视频
;^https?:\/\/.+\.(my10api|(.*91.*))\.(com|tips|app|xyz)(:\d{2,5})?\/api.php$ url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/91.js
^https?:\/\/.+\.(my10api|(.*91.*))\.(com|tips|app|xyz)(:\d{2,5})?\/api.php$ url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/91.js
#dayone
^https:\/\/dayone\.me\/api\/(users|v2\/users\/account-status)$ url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/dayone.js
#textnow
^https:\/\/api\.textnow\.me\/api2.0\/users\/.* url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/Textnow.js
#哔哩哔哩个人排行榜
;^https:\/\/app\.bilibili\.com\/x\/v2\/space\?access_key url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/bilibili_space_qx.js
#联通营业厅 去轮播广告
^https?://m.client.10010.com/uniAdmsInterface/getHomePageAd url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/china_unicom.js



[Hostname]
// custom hostname...
api.m.jd.com, pan.baidu.com, api.rr.tv, m.client.10010.com, www.baidu.com2.club, note.youdao.com,  www.xmind.cn, api.weibo.cn, mapi.weibo.com, *.uve.weibo.com, mp.weixin.qq.com, api.bilibili.com, app.bilibili.com, *.zhihu.com, p.du.163.com, ios.fuliapps.com, vsco.co, *.my10api.com, apple.fuliapps.com, account.wps.*, api.gotokeep.com, api.vuevideo.net, ios.xiangjiaoapps.com, apple.xiangjiaoapps.com, education.github.com, dayone.me, api.keepkeep.com,api.textnow.me
