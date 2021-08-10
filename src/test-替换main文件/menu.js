// 失败
const {app, BrowserWindow, Menu} = require('electron')
const fs = require('fs')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('../index.html')
}

const template = [
  {
    "label":"Open Recent",
    "role":"recentdocuments",
    "submenu":[
      {
        "label":"Clear Recent",
        "role":"clearrecentdocuments"
      }
    ]
  }
]
const menu = Menu.buildFromTemplate(template)

app.whenReady().then(() => {
  Menu.setApplicationMenu(menu)
})
