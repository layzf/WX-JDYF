export function get_wxml(className, callback) {
  wx.createSelectorQuery().selectAll(className).boundingClientRect(callback).exec()
}

export function switchNav(event) {
  var cur = ''
  event == 1 ? cur = 1 : cur = event.currentTarget.dataset.current
  switch (cur) {
    case 0:
      wx.redirectTo({
        url: '../index/index',
      })
      break;
    case 1:
      wx.redirectTo({
        url: '../index-gold/index-gold',
      });
      break;
    case 2:
      wx.redirectTo({
        url: '../index-case/index-case',
      });
      break;
    case 3:
      wx.redirectTo({
        url: '../index-my/index-my',
      });
      break;
  }
}

export var caseList = [{

      title: '【金雕验房日志】金茂府精装房验房1.12',
      mark: '原创：金雕验房监理'
    },
    {
      title: '【金雕验房日志】金茂府精装房验房1.12',
      mark: '原创：金雕验房监理'
    },
    {
      title: '【金雕验房日志】金茂府精装房验房1.12',
      mark: '原创：金雕验房监理'
    },
    {
      title: '【金雕验房日志】金茂府精装房验房1.12',
      mark: '原创：金雕验房监理'
    }, {
      title: '【金雕验房日志】金茂府精装房验房1.12',
      mark: '原创：金雕验房监理'
    }, {
      title: '【金雕验房日志】金茂府精装房验房1.12',
      mark: '原创：金雕验房监理'
    }, {
      title: '【金雕验房日志】金茂府精装房验房1.12',
      mark: '原创：金雕验房监理'
    }
]

