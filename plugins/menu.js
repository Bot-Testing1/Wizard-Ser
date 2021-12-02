let fs = require('fs')
let path = require('path')
let levelling = require('../lib/levelling')
const defaultMenu = {
  before: `
╔═══════❮❮ *ᴡɪᴢᴀʀᴅ sᴇʀ* ❯❯\n║\n╚═══════════════◌\n\n        ╔╗╔╗╔══╗╔══╗\n        ║╚╝║║╔╗║╚║║╝\n        ║╔╗║║╠╣║╔║║╗\n        ╚╝╚╝╚╝╚╝╚══╝\n\n┌─────❲ *ᴀʙᴏᴜᴛ* ❳\n┊⎆ Hai, _%name !_\n┊⎆ Limit : _%limit Limit_\n┊⎆ Role : _%role_\n┊⎆ Level : _%level_\n┊⎆ Week : _%week_\n┊⎆ Date : _%date_\n┊⎆ Time : _%time_\n┊⎆ Uptime :  _%uptime (%muptime)_\n┊⎆ Database : _%totalreg_\n└─────────────────❋ཻུ۪۪⸙
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
        "description":"┌─────❲ *WIZARD-SER* ❳\n┊\n└─────────────────❋ཻུ۪۪⸙\n\n        ╔╗╔╗╔══╗╔══╗\n        ║╚╝║║╔╗║╚║║╝\n        ║╔╗║║╠╣║╔║║╗\n        ╚╝╚╝╚╝╚╝╚══╝\n\n┌─────❲ ᴀʙᴏᴜᴛ ❳\n┊☞ ᴏᴡɴᴇʀ : ☯︎ᴀᴊᴍᴀʟ ᴀɴᴅ ᴀᴄʜᴜ \n┊☞ wa.me/918590967139 \n┊☞ wa.me/919744196187 \n┊☞ ᴘʀᴇꜰɪx : ᴍᴜʟᴛɪ ᴘʀᴇꜰɪx \n┊☞ʙᴏᴛ ɴᴀᴍᴇ : ᴡɪᴢᴀʀᴅ sᴇʀ \n┊☞ ᴠᴇʀꜱɪᴏɴ : ᴠ1 \n┊☞ ɪɴꜱᴛᴀ : https://instagram.com/a_j_f_x\n└─────────────────❋ཻུ۪۪⸙",
        "buttonText": "𝐌𝐄𝐍𝐔",
        "listType": "SINGLE_SELECT",
        "sections": [
            {
              "rows": [
                {
                  "title": `🧾All Commands`,
                  "description": "Show all features",
                  "rowId": ".? all"
                }, {
                  "title": "💻Game",
                  "description": "Game features",
                  "rowId": ".? game"

                }, {
                  "title": "💸XP",
                  "description": "Features level & usage limit",
                  "rowId": ".? xp"

                },  {
                  "title": "Video Maker",
                  "description": "Making Different Types Of Videos",
                  "rowId": ".? .videomaker"

                },{
                  "title": "Sticker",
                  "description": "Features for making stickers",
                  "rowId": ".? stiker"
                }, { 
                "title": "Anime",
                "description": "Anime Related Plugin",
                "rowId": ".? anime"
              },  {
                  "title": "Quotes",
                  "description": "Gives You Random Quotes..",
                  "rowId": ".? quotes"
                }, {
                  "title": "Admin",
                  "description": "Group Admin Commands",
                  "rowId": ".? admin"
                }, {
                  "title": "Grup",
                  "description": "Group Related Commands",
                  "rowId": ".? grup"
                }, {
                  "title": "Premium",
                  "description": "Premium Users Plugins",
                  "rowId": ".? premium"
                }, {
                  "title": "Internet",
                  "description": "Commands Related To Internet",
                  "rowId": ".? internet"
                }, {
                  "title": "Anonymous",
                  "description": "To Start Anonymous Chatting",
                  "rowId": ".? anonymous"
                }, {
                  "title": "Magic Shell",
                  "description": "Random answer feature",
                  "rowId": `.? magicshell`
                }, {
                  "title": "Nulis & Logo",
                  "description": "Text Maker Coammnds",
                  "rowId": ".? nulis"
                }, {
                  "title": "Downloader",
                  "description": "Downloading Commnds",
                  "rowId": ".? downloader"
                }, {
                  "title": "Tools",
                  "description": "Tool features",
                  "rowId": ".? tools"
                }, {
                  "title": "Voice Changer",
                  "description": "To change the voice",
                  "rowId": `.? audio`
                }, {
                  "title": "Fun",
                  "description": "Just for fun",
                  "rowId": ".? fun"
                }, {
                  "title": "Database",
                  "description": "User database",
                  "rowId": ".? database"
                },{
                  "title": "Owner",
                  "description": "Owner's special features",
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
    }
    // use this if you use business whatsapp
    //   throw `
    // ┌〔 LIST MENU 〕
    // ├ ${_p + command} all
    // ├ ${_p + command} game
    // ├ ${_p + command} xp
    // ├ ${_p + command} stiker
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
    // ├ ${_p + command} owner
    // └────  
    //     `.trim()
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
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Presented by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
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
      xp4levelup: max - exp <= 0 ? `Ready for *${_p}levelup*` : `${max - exp} More XP for levelup`,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    await conn.send2ButtonLoc(m.chat, await (await fetch("https://i.imgur.com/GPfJCH7.jpg")).buffer(), text.trim(), '© ᴡɪᴢᴀʀᴅ sᴇʀ ©', 'Owner Bot', ',owner', 'All Commands', '.? all', m)
  } catch (e) {
    conn.reply(m.chat, 'Sorry, Try Again', m)
    throw e
  }
}
handler.help = ['menu', 'help','list','wizard', '?']
handler.tags = ['main']
handler.command = /^(menu|help|wizard|list|\?)$/i
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
function ucapan() {
  const time = moment.tz('Asia/Kolkata').format('HH')
  res = "Good Morning 🌄"
  if (time >= 4) {
    res = "Good Morning 🌞"
  }
  if (time > 10) {
    res = "Good afternoon 🌅"
  }
  if (time >= 15) {
    res = "Good Evening 🌆"
  }
  if (time >= 18) {
    res = "Good Night 🌌"
  }
  return res
}
