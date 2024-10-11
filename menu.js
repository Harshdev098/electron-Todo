const electron=require('electron')
const { createSecond } = require('./New_Window')
const menuItem=[
    {
        label:"File",
        submenu:[
            {
                label:"Tranport File"
            },
            {
                label:"View Notes"
            },
            {
                label:"Settings"
            }
        ]
    },
    {
        label:"Window",
        submenu:[
            {
                label:"New Window",
                click:()=>{createSecond()}
            },
            {
                label:"Close Window",
                click:()=>{electron.app.quit()}
            },
            {
                role:"Quit"
            }
        ]
    }
]

module.exports=menuItem