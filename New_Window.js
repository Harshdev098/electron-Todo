const {BrowserWindow}=require('electron')
const path = require('path')

function createWindow(){
    const win=new BrowserWindow({
        width:600,
        height:500,
        webPreferences:{
            preload:path.join(__dirname,'preload.js')
        },
        contextIsolation:true
    })
    win.loadFile('index.html')
    win.webContents.openDevTools()
}

function createSecond(){
    const win2=new BrowserWindow({
        width:200,
        height:400,
    })
    win2.loadFile('index.html')
}

module.exports={createSecond,createWindow}