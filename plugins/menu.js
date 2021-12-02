let fs = require('fs')
let path = require('path')
let levelling = require('../lib/levelling')
const defaultMenu = {
  before: `
╔═══════❮❮ *sᴘʏʀᴏ sɪʀ* ❯❯\n║\n╚═══════════════◌\n\n        ╔╗╔╗╔══╗╔══╗\n        ║╚╝║║╔╗║╚║║╝\n        ║╔╗║║╠╣║╔║║╗\n        ╚╝╚╝╚╝╚╝╚══╝\n\n┌─────❲ *ᴀʙᴏᴜᴛ* ❳\n┊⎆ Hai, _%name !_\n┊⎆ Limit : _%limit Limit_\n┊⎆ Role : _%role_\n┊⎆ Level : _%level_\n┊⎆ Week : _%week_\n┊⎆ Date : _%date_\n┊⎆ Time : _%time_\n┊⎆ Uptime :  _%uptime (%muptime)_\n┊⎆ Database : _%totalreg_\n└─────────────────❋ཻུ۪۪⸙
%readmore`.trimStart(),
  header: '╔════════╣ 𝗖𝗮𝘁𝗲𝗴𝗼𝗿𝘆 ╠═══════╗',
  body: '    ╠❏ _%cmd%islimit%isPremium_',
  footer: '╚═══════╣ 𝚆𝙸𝚉𝙰𝚁𝙳 𝚂𝙴𝚁 ╠════════╝\n',
  after: `
                        ❚❙❘❙ ❙❙❘❘❙ ❘❚ ❙❙❘❙❘ ❘❙❘ ❘ ❙❙ \n                        ©  ☯︎ᴀᴊᴍᴀʟ ᴀɴᴅ ᴀᴄʜᴜ
${'```★ᴡɪᴢᴀʀᴅ sᴇʀ✯```'}
`,
}
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
  let tags
  let teks = `${args[0]}`.toLowerCase()
  if (teks == 'all') tags = {
    'main': 'Main',
    'game': 'Game',
    'xp': 'Exp & Limit',
    'sticker': 'Stiker',
    'kerang': 'Magic Shell',
    'quotes': 'Quotes',
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`,
    'group': 'Grup',
    'premium': 'Premium',
    'internet': 'Internet',
    'anonymous': 'Anonymous Chat',
    'nulis': 'MagerNulis & Logo',
    'downloader': 'Downloader',
    'tools': 'Tools',
    'fun': 'Fun',
    'database': 'Database',
    'vote': 'Voting',
    'absen': 'Absent',
    'quran': 'Al Qur\'an',
    'audio': 'Voice Changer',
    'jadibot': 'Jadi Bot',
    'info': 'Info',
    'nsfw': 'Nsfw Premium',
    'nnsfw': 'Nsfw Free',
    'random': 'Random',
    'image': 'Image',
    'maker': 'Maker',
    'nhentai': 'Nhentai',
    'nhe': 'Nhe',
    'videomaker': 'Videomaker',
    '': 'Tanpa Kategori',
    }
  if (teks == 'main') tags = {
    'main': 'Utama'
  }
  if (teks == 'game') tags = {
    'game': 'Game'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'stiker') tags = {
    'sticker': 'Stiker'
  }
  if (teks == 'shell') tags = {
    'kerang': 'Magic Shell'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'admin') tags = {
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`
  }
  if (teks == 'grup') tags = {
    'group': 'Grup'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'MagerNulis & Logo'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'vote') tags = {
    'vote': 'Voting',
    'absen': 'Absen'
  }
  if (teks == 'quran') tags = {
    'quran': 'Al Qur\'an'
  }
  if (teks == 'audio') tags = {
    'audio': 'Voice Changer'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'Jadi Bot'
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == 'nsfw') tags = {
    'nsfw': 'Nsfw premium'
  }
  if (teks == 'nnsfw') tags = {
    'nnsfw': 'Nsfw Free'
  }
  if (teks == 'random') tags = {
    'random': 'Random'
  }
  if (teks == 'image') tags = {
    'image': 'Image'
  }
  if (teks == 'nhentai') tags = {
    'nhentai': 'Nhentai'
  }
  if (teks == 'maker') tags = {
    'maker': 'Maker'
  }
  if (teks == 'nhe') tags = {
    'nhe': 'Nhe'
  }
  if (teks == 'videomaker') tags = {
    'videomaker': 'Videomaker'
  }
  if (teks == 'tanpakategori') tags = {
    '': 'Tanpa Kategori'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }
if (!args[0]) {
    conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
      "listMessage": {
        "title": "ᴡɪᴢᴀʀᴅ-sᴇʀ ʙʏ ᴀᴊᴍᴀʟ ᴀɴᴅ ᴀᴄʜᴜ",
        "description":"┌─────❲ *WIZARD-SER* ❳\n┊\n└─────────────────❋ཻུ۪۪⸙\n\n        ╔╗╔╗╔══╗╔══╗\n        ║╚╝║║╔╗║╚║║╝\n        ║╔╗║║╠╣║╔║║╗\n        ╚╝╚╝╚╝╚╝╚══╝\n\n┌─────❲ ᴀʙᴏᴜᴛ ❳\n┊☞ ᴏᴡɴᴇʀ : ☯︎ᴀᴊᴍᴀʟ ᴀɴᴅ ᴀᴄʜᴜ \n┊☞ wa.me/919744196187 \n┊☞ ᴘʀᴇꜰɪx : ᴍᴜʟᴛɪ ᴘʀᴇꜰɪx \n┊☞ʙᴏᴛ ɴᴀᴍᴇ : ᴡɪᴢᴀʀᴅ sᴇʀ \n┊☞ ᴠᴇʀꜱɪᴏɴ : ᴠ1 \n┊☞ ɪɴꜱᴛᴀ : https://instagram.com/a_j_f_x\n└─────────────────❋ཻུ۪۪⸙",
        "buttonText": "𝐌𝐄𝐍𝐔",
        "listType": "SINGLE_SELECT",
        "sections": [
          {
            "rows": [
              {
                "title": `All Commands`,
                "description": "",
                "rowId": ".? all"
                }, {
                "title": "Main menu",
                "description": "",
                "rowId": ".? main"
              }, {
                "title": "Game menu",
                "description": "",
                "rowId": ".? game"

              }, {
                "title": "XP",
                "description": "",
                "rowId": ".? xp"

              }, {
                "title": "Sticker Menu",
                "description": "",
                "rowId": ".? stiker"
              }, {
                "title": "Magic Shell",
                "description": "",
                "rowId": ".? kerang"
              }, {
                "title": "Quotes",
                "description": "",
                "rowId": ".? quotes"
              }, {
                "title": "Admin Commands",
                "description": "",
                "rowId": ".? admin"
              }, {
                "title": "Group Menu",
                "description": "",
                "rowId": ".? grup"
              }, {
                "title": "Premium",
                "description": "",
                "rowId": ".? premium"
              }, {
                "title": "Internet Menu",
                "description": "",
                "rowId": ".? internet"
              }, {
                "title": "Anonymous",
                "description": "",
                "rowId": ".? anonymous"
              }, {
                "title": "Nulis & Logo",
                "description": "",
                "rowId": ".? nulis"
              }, {
                "title": "Downloader Menu",
                "description": "",
                "rowId": ".? downloader"
              }, {
                "title": "Tools Menu",
                "description": "",
                "rowId": ".? tools"
              }, {
                "title": "Fun Menu",
                "description": "",
                "rowId": ".? fun"
              }, {
                "title": "Database",
                "description": "",
                "rowId": ".? database"
              }, {
                "title": "Vote & Absen",
                "description": "",
                "rowId": ".? vote"
              }, {
                "title": "Al-Qur\'an",
                "description": "",
                "rowId": ".? quran"
              }, {
                "title": "Voice Changer",
                "description": "",
                "rowId": ".? audio"
              }, {
                "title": "Wizard-Ser",
                "description": "",
                "rowId": ".? spyrobot"
              }, {
                "title": "Info Bot",
                "description": "",
                "rowId": ".? info"
                }, {
                "title": "Nsfw premium",
                "description": "",
                "rowId": ".? nsfw"
                }, {
                "title": "Nsfw Free",
                "description": "",
                "rowId": ".? nnsfw"
                }, {
                "title": "Random Menu",
                "description": "",
                "rowId": ".? random"
                }, {
                "title": "Image",
                "description": "",
                "rowId": ".? image"
                }, {
                "title": "Nhentai",
                "description": "",
                "rowId": ".? nhentai"
                }, {
                "title": "Nhe",
                "description": "",
                "rowId": ".? nhe"
                }, {
                "title": "Maker Menu",
                "description": "",
                "rowId": ".? maker"
                }, {
                "title": "Videomaker Menu",
                "description": "",
                "rowId": ".? videomaker"
              }, {
                "title": "No Categories",
                "description": "",
                "rowId": ".? NoCategories"
              }, {
                "title": "Owner Menu",
                "description": "",
                "rowId": ".? owner"
              }
            ]
          }
        ], "contextInfo": {
          "stanzaId": m.key.id,
          "participant": m.sender,
          "quotedMessage": m.message
        }
      }
    }, {}), { waitForAck: true })
    throw 0
  }
  //   throw `
  // ┌〔 SPYRO SIR MENU 〕
  // ├ ${_p + command} all
  // ├ ${_p + command} Utama
  // ├ ${_p + command} game
  // ├ ${_p + command} xp
  // ├ ${_p + command} stiker
  // ├ ${_p + command} kerang
  // ├ ${_p + command} quotes
  // ├ ${_p + command} admin
  // ├ ${_p + command} group
  // ├ ${_p + command} premium
  // ├ ${_p + command} internet
  // ├ ${_p + command} anonymous
  // ├ ${_p + command} nulis
  // ├ ${_p + command} downloader
  // ├ ${_p + command} tools
  // ├ ${_p + command} fun
  // ├ ${_p + command} database
  // ├ ${_p + command} vote
  // ├ ${_p + command} quran
  // ├ ${_p + command} audio
  // ├ ${_p + command} jadibot
  // ├ ${_p + command} info
  // ├ ${_p + command} Nsfw premium
  // ├ ${_p + command} Nsfw Free
  // ├ ${_p + command} Random
  // ├ ${_p + command} Image
  // ├ ${_p + command} Nhentai
  // ├ ${_p + command} Nhe
  // ├ ${_p + command} Maker
  // ├ ${_p + command} Videomaker
  // ├ ${_p + command} tanpa kategori
  // ├ ${_p + command} owner
  // └────  
  //     `.trim()

  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
      // for (let tag of plugin.tags)
      //   if (!(tag in tags)) tags[tag] = tag
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp <= 0 ? `Siap untuk *${_p}levelup*` : `${max - exp} XP lagi untuk levelup`,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    await conn.send2Button(m.chat, text.trim(),       '*╭─➤* 𝗜𝗡𝗙𝗢 𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗥 »\n *│❖* ᴀᴜᴛʜᴏʀ : ☯︎ᴀᴊᴍᴀʟ ᴀɴᴅ ᴀᴄʜᴜ \n *│❖* ɪɴꜱᴛᴀ :https://instagram.com/a_j_f_x\n *│❖* ᴡʜᴀᴛꜱ:Wa.me/919744196187\n *╰────────────────❋ཻུ۪۪⸙* ', 'RULES', '.rules', 'OWNER', '.owner',{ quoted: m })
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false 

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(1)
const readMore = more.repeat(1)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
