const {contextBridge,ipcRenderer}=require('electron')

contextBridge.exposeInMainWorld('api',{
    setTask:(value)=>{
        const taskArray=ipcRenderer.invoke('set-task',value)
        console.log(taskArray)
        return taskArray;
    },
    delete:(index)=>{
        const updatedTask=ipcRenderer.invoke('delete-task',index)
        return updatedTask;
    },
    update:(index)=>{
        ipcRenderer.send('update-task',index)
    }
})