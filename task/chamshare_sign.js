
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */
function sign() {
    const isSurge = typeof $httpClient != "undefined";
	const isQuanX = typeof $task != "undefined";
    const url = `https://api.techmall.chamshare.cn/daysign/sign`;
    const method = `PUT`;
    const headers = {
    'content-type' : `application/json`
    };
    const body = `{"access_token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2ODU0NDU1MzMsIm5iZiI6MTY4NTQ0NTUzMywiZXhwIjoxNzAwOTk3NTMzLCJkYXRhIjp7Im1lbWJlcl9pZCI6MjA1NjI3MCwic2Vzc2lvbl9rZXkiOiJ6UWRTNllxY0xuZW9meXZFTDRuZUR3PT0ifX0.xRnq6VWfLq4q9Dtt1bXoOGsbl1gEu7DCEznIk9rA2k0"}`;

    const myRequest = {
        url: url,
        method: method,
        headers: headers,
        body: body
    };

    if(isQuanX){
        $task.fetch(myRequest).then(response => {
            const result = JSON.parse(response.body);
            if(result.code === 0){
                $notify("长泰签到", "🎉 签到成功", result.msg)
            }else{
                $notify("长泰签到", "🎉 重复签到", result.msg)
            }
            console.log("长泰结果：" + response.body);
            $done();
        }, reason => {
            $notify("长泰签到", "❌ 签到异常", reason.error)
            console.log("长泰签到异常：" + reason.error);
            $done();
        });
    }
    
    if(isSurge){
        $httpClient.post(myRequest, (error, response, body) => {
            if(error){
                $notification.post("长泰签到", "❌ 签到异常", error)
                console.log("长泰签到异常：" + error);
                
            }else{
                const result = JSON.parse(response.body);
                if(result.code === 0){
                    $notification.post("长泰签到", "🎉 签到成功", result.msg)
                }else{
                    $notification.post("长泰签到", "🎉 重复签到", result.msg)
                }
                console.log("长泰结果：" + response.body);
            }
            $done();
        })
    }
    
}
