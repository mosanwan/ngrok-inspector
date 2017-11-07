const child = require("child_process");
const request = require("request");

const url = "http://ngrok.aispre.com";
const key = "4365cf9ec29a064b";

function startTunnel() {
    console.log("尝试启动sunny.exe key = " + key);
    //let p=child.exec(__dirname+"\\sunny.exe", ["clientid", key]);
    child.exec(__dirname+"\\start.bat",{encoding:"gb2312"},(err,stdout,stderr)=>{
        console.log(err,stdout.toString(),stderr.toString())
    })
    
}

function checkup() {
    console.log("测试连接~");
    request.get(url, { timeout: 10000 })
        .on('error', (err) => {
            console.log("测试连接发生错误：" + err)
        })
        .on("response", (response) => {
            let code = response.statusCode;
            if (code == 200 || code == 401) {
                console.log("连接成功");
            } else {
                console.log("连接失败:StatusCode=" + code);
                startTunnel();
            }
        })
}

setInterval(function () {
    checkup();
}, 11000);
checkup();