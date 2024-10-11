const {BrowserWindow,app, Menu, ipcMain}=require('electron')
const menuItem=require('./menu.js')
const { createWindow } = require('./New_Window.js')


const menu=Menu.buildFromTemplate(menuItem)
Menu.setApplicationMenu(menu)

const tasks=[]
app.whenReady().then(()=>{
    createWindow()
    ipcMain.handle('set-task',(event,para)=>{
        console.log("task is: ",para)
        tasks.push({task:para,status:false})
        console.log('task: ',tasks)
        return tasks;
    })
    ipcMain.handle('delete-task',(event,index)=>{
        console.log(index)
        tasks.splice(index-1,1)
        return tasks;
    })
    ipcMain.on('update-task',(event,index)=>{
        tasks[index-1].status=false
        console.log('task updated')
    })
})