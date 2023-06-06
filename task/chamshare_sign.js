
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

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

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
