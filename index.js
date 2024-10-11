const task=document.getElementById('task')
const save=document.getElementById('save')
save.addEventListener('click',async(e)=>{
    e.preventDefault();
    console.log(task.value)
    const gettedTask=await window.api.setTask(task.value)
    console.log("getted task:",gettedTask)
    console.log("tasks get",gettedTask)
    const li=document.createElement('li')
    const para=document.createElement('p')
    const btn1=document.createElement('button')
    btn1.textContent='Done'
    const btn2=document.createElement('button')
    btn2.textContent='Delete'
    let index=0;
    gettedTask.forEach(task => {
        console.log('task sep: ',task.task)
        index=index+1
        para.textContent=task.task
        btn2.addEventListener('click',()=>{
            console.log('task deleted')
            window.api.delete(index)
            li.style.display='none'
        })
        btn1.addEventListener('click',()=>{
            console.log('task completed')
            window.api.update(index)
            para.style.color='green'
            btn1.disabled=true
            btn2.disabled=true
        })
    });
    li.append(para,btn1,btn2)
    const ul=document.getElementById('taskList')
    ul.appendChild(li)
    task.value=''
})