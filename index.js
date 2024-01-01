//INICIO
const {    
    WAProto, 
    downloadContentFromMessage,
    undefined,
    Mimetype,
    useSingleFileAuthState
} = require('@adiwajshing/baileys')
const WebSocket = require('ws')
const uber = require('uberduck-api')
const pino = require('pino')
const { Aki } = require('aki-api')
const { fetchJson } = require('./lib/fetcher')
const { Youtube } = require('ytdownloader.js')
const fs = require('fs')
const { welcome, bye} = require('./src/js/welcomtext')
const {uploadimg} = require('./lib/uploadimg')
const util = require('util')
const execute = util.promisify(require('child_process').exec)
const { exec } = require('child_process')
const {stickerImgTag,
    stickerVidTag,
    addExif,
    stickerForVideo } = require('./lib/sticker')
const {getExtension,
    simih,
    getBuffer,
    getGroupAdmins,
    getRandom,
    banner,
    start,
    success,
    randompalavra } = require('./lib/functions')
const {color} = require('./lib/color')
const {helproleta} = require('./src/js/helproleta')
const  {addLevelingId,
    addLevelingLevel,
    addLevelingXp,
    getLevelingId,
    getLevelingLevel,
    getLevelingPosition,
    getLevelingXp} = require('./lib/level')
const { addTTTId,
    addTTTwin,
    addTTTdefeat,
    addTTTtie,
    addTTTpoints,
    getTTTId,
    getTTTwins,
    getTTTdefeats,
    getTTTties,
    getTTTpoints } = require('./lib/tictactoe.js')
const moment = require('moment-timezone')
const speed = require('performance-now')
const ffmpeg = require('fluent-ffmpeg')
const linkfy = require('linkifyjs')
const translate = require('translatte')
const ytdl = require('ytdl-core')
const { ytv} = require('./lib/ytv')
const NodeID3 = require('node-id3')

//arquivos js
const {mess, prefix, prefixs, vcard, OriginalOwner, ownerNumber, resp, 
    banmsgtype, banmsgporn, banmsglink, adminmsglink, adminmsgtype, 
    adminmsgporn, linkimgday, linkimgeve, linkimgnig, textmsgday, 
    textmsgeve, textmsgnig, botlindo, botfeio, cadebot, botbaianor, 
    botcorno, botfdp, botfofo, botgay, botgostoso, botputa, botviado, numbotfeio, linkbotlindo, 
    blockedcmdmsg, blockedmsg, notregister, 
    backgroundbyeimg, backgroundwelcomeimg, antinewchatmsg, antipvmsg, 
    delayantispamcmd, limitqnt, gpvotohelp, votohelp,
    registeruser, menuimg, menupack, menupres
} = require('./config')
const { help } = require('./src/menu/menu')
const { menudz } = require('./src/menu/menudono')
const { menup18 } = require('./src/menu/menu18')
const { menufoto } = require('./src/menu/menufoto')
const { menufig } = require('./src/menu/menus') 
const { menuadm } = require('./src/menu/menuadm')
const { menujo } = require('./src/menu/menuj')
const { packs } = require('./src/menu/pack')
const { presente } = require('./src/menu/presente')
var p = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|shorts\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
const {redes_sociais} = require('./src/js/sociais')

//arquivos json
const antinewchatlist = JSON.parse(fs.readFileSync('./src/database/antis/antinewchatlist.json'))
const antinewchat = JSON.parse(fs.readFileSync('./src/database/antis/antinewchat.json'))
const blockeds = JSON.parse(fs.readFileSync('./src/database/blocklist.json'))
const blockcmd = JSON.parse(fs.readFileSync('./src/database/blockcmd.json'))
const antipalavra = JSON.parse(fs.readFileSync('./src/database/antis/antipalavra.json'))
const listantipalavra = JSON.parse(fs.readFileSync('./src/database/listaantipalavra.json'))
const antispamcmd = JSON.parse(fs.readFileSync('./src/database/antis/antispamcmd.json'))
const antipv = JSON.parse(fs.readFileSync('./src/database/antis/antipv.json'))
const voto = JSON.parse(fs.readFileSync('./src/database/voto.json'))
const gpvoto = JSON.parse(fs.readFileSync('./src/database/gpvoto.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/database/nsfw.json'))
const welcome_group = JSON.parse(fs.readFileSync('./src/database/welcomegp.json'))
const bye_group = JSON.parse(fs.readFileSync('./src/database/byegp.json'))
const welkom = JSON.parse(fs.readFileSync('./src/database/welkom.json'))
const muted = JSON.parse(fs.readFileSync('./src/database/muted.json'))
const limitactive = JSON.parse(fs.readFileSync('./src/database/limitactive.json'))
const limitedlist = JSON.parse(fs.readFileSync('./src/database/limitedlist.json'))
const antidoc = JSON.parse(fs.readFileSync('./src/database/antis/antidoc.json'))
const antiimg = JSON.parse(fs.readFileSync('./src/database/antis/antiimg.json'))
const antivid = JSON.parse(fs.readFileSync('./src/database/antis/antivid.json'))
const antiloc = JSON.parse(fs.readFileSync('./src/database/antis/antiloc.json'))
const antictt = JSON.parse(fs.readFileSync('./src/database/antis/antictt.json'))
const antisticker = JSON.parse(fs.readFileSync('./src/database/antis/antisticker.json'))
const antiaudio = JSON.parse(fs.readFileSync('./src/database/antis/antiaudio.json'))	
const antilink = JSON.parse(fs.readFileSync('./src/database/antis/antilink.json'))
const antilinkhard = JSON.parse(fs.readFileSync('./src/database/antis/antilinkhard.json'))
const antiporn = JSON.parse(fs.readFileSync('./src/database/antis/antiporn.json'))
const antifake = JSON.parse(fs.readFileSync('./src/database/antis/antifake.json'))
const dontback = JSON.parse(fs.readFileSync('./src/database/antis/dontback.json'))
const roletarussa = JSON.parse(fs.readFileSync('./src/database/roletarussa.json'))
const samih = JSON.parse(fs.readFileSync('./src/database/simi.json'))
const autoreply = JSON.parse(fs.readFileSync('./src/database/autoreply.json'))
const contratos = JSON.parse(fs.readFileSync('./src/database/contratos.json'))
const leveling_block = JSON.parse(fs.readFileSync('./src/database/level_block.json'))
const akinator = JSON.parse(fs.readFileSync('./src/database/akinator.json'))
const forca = JSON.parse(fs.readFileSync('./src/database/forca.json'))
const puppet = JSON.parse(fs.readFileSync('./src/database/puppet_forca.json'))
const usedCommandRecently = new Set()
const tictactoe = JSON.parse(fs.readFileSync('./src/ttt/tictactoe.json'));

//arquivos ttt
const { ttthelp } = require('./src/ttt/config/ttthelp');
const { tttme } = require('./src/ttt/config/tttme');
var tttset = require('./src/ttt/config/tttset.json');
var esp = require('./src/ttt/config/tttframe.json');


//database de ttt
ky_ttt = []
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
var crashSocket = null
var crash = []
var doubleSocket = null
var double = []

function dataAtualFormatada(){
    var data = new Date(),
        dia  = data.getDate().toString().padStart(2, '0'),
        mes  = (data.getMonth()+1).toString().padStart(2, '0'),
        ano  = data.getFullYear();
    return dia+"/"+mes+"/"+ano;
}

const IAmove1 = () => {
	if (esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") {
		esp.a3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") {
		esp.a2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") {
		esp.b3 = "⭕"
	} else if (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") {
		esp.b1 = "⭕"
	} else if (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") {
		esp.c2 = "⭕"
	} else if (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") {
		esp.c1 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") {
		esp.b1 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") {
		esp.c2 = "⭕"
	} else if (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") {
		esp.a2 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") {
		esp.b3 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") {
		esp.a3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") {
		esp.a3 = "⭕"
	} else if (esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") {
		esp.a3 = "⭕"
	} else if (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") {
		esp.a2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") {
		esp.a1 = "⭕"
	} else if (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") {
		esp.b3 = "⭕"
	} else if (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") {
		esp.b2 = "⭕"
	} else if (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") {
		esp.b1 = "⭕"
	} else if (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") {
		esp.c2 = "⭕"
	} else if (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") {
		esp.c1 = "⭕"
	} else if (esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") {
		esp.b1 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") {
		esp.a1 = "⭕"
	} else if (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") {
		esp.c2 = "⭕"
	} else if (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") {
		esp.a2 = "⭕"
	} else if (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") {
		esp.b3 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") {
		esp.a3 = "⭕"
	} else if (esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") {
		esp.a1 = "⭕"
	} else if (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌") {
		esp.a3 = "⭕"
	}
}
const IAalter = () => {
	let randomALTER = Math.floor(Math.random() * 9)
	switch (randomALTER) {
		case 0:
			if (esp.a1 == "🔲") {
				tttset.reActivate2 = "off"
				esp.a1 = "⭕"
			}
		break
		case 1:
			if (esp.a2 == "🔲") {
				tttset.reActivate2 = "off"
				esp.a2 = "⭕"
			}
		break
		case 2:
			if (esp.a3 == "🔲") {
				tttset.reActivate2 = "off"
				esp.a3 = "⭕"
			}
		break
		case 3:
			if (esp.b1 == "🔲") {
				tttset.reActivate2 = "off"
				esp.b1 = "⭕"
			}
		break
		case 4:
			if (esp.b2 == "🔲") {
				tttset.reActivate2 = "off"
				esp.b2 = "⭕"
			}
		break
		case 5:
			if (esp.b3 == "🔲") {
				tttset.reActivate2 = "off"
				esp.b3 = "⭕"
			}
		break
		case 6:
			if (esp.c1 == "🔲") {
				tttset.reActivate2 = "off"
				esp.c1 = "⭕"
			}
		break
		case 7:
			if (esp.c2 == "🔲") {
				tttset.reActivate2 = "off"
				esp.c2 = "⭕"
			}
		break
		case 8:
			if (esp.c3 == "🔲") {
				tttset.reActivate2 = "off"
				esp.c3 = "⭕"
			}
		break
	}
}
const WinnerX = () => {
	if (
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="❌") || (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="❌") || (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="❌") || 
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="❌") || (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="❌") || (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="❌") || (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="❌")
	) {
		return true
	} else {
		return false
	}
}
const WinnerO = () => {
	if (
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="⭕") || (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="⭕") || (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="⭕") || 
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="⭕") || (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="⭕") || (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="⭕") || (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="⭕")
	) {
		return true
	} else {
		return false
	}
}
const Tie = () => {
	if (esp.a1!="🔲"&&esp.a2!="🔲"&&esp.a3!="🔲"&&esp.b1!="🔲"&&esp.b2!="🔲"&&esp.b3!="🔲"&&esp.c1!="🔲"&&esp.c2!="🔲"&&esp.c3!="🔲") {
		return true
	} else {
		return false
	}
}
const priorityC = () => {
	let randomPriC = Math.floor(Math.random() * 5)
	switch (randomPriC) {
		case 0 :
			if (esp.a1 == "🔲") {
				tttset.reActivate3 = "off"
				esp.a1 = "⭕"
			}
		break
		case 1 :
			if (esp.a3 == "🔲") {
				tttset.reActivate3 = "off"
				esp.a3 = "⭕"
			}
		break
		case 2 :
			if (esp.b2 == "🔲") {
				tttset.reActivate3 = "off"
				esp.b2 = "⭕"
			}
		break
		case 3 :
			if (esp.c1 == "🔲") {
				tttset.reActivate3 = "off"
				esp.c1 = "⭕"
			}
		break
		case 4 :
			if (esp.c3 == "🔲") {
				tttset.reActivate3 = "off"
				esp.c3 = "⭕"
			}
		break
	}
}
const IA = () => {
	if (WinnerX() || WinnerO() || Tie()) {
		tttset.reActivate1 = "off"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" && ( 
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		tttset.reActivate1 = "off"
		IAmove1()
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
			((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
			(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
			(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
			(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
		tttset.reActivate1 = "off"
		esp.a1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
			((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
			(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
			(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
			(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
		tttset.reActivate1 = "off"
		esp.a2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
			((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "❌") ||
			(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
			(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
			(esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
		tttset.reActivate1 = "off"
		esp.a3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
			((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
			(esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
		tttset.reActivate1 = "off"
		esp.b1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
			((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
			(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
			(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
			(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
			(esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
			(esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
			(esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
			(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
			(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
			(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
			(esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
			(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
			(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
			(esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
			(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
			(esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
			(esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
			(esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
			(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
			(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
			(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
			(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
			(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
			(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
		tttset.reActivate1 = "off"
		esp.b2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
			((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
			(esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
		tttset.reActivate1 = "off"
		esp.b3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
			((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
			(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
			(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
			(esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
		tttset.reActivate1 = "off"
		esp.c1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
			((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
			(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕"))) {
		tttset.reActivate1 = "off"
		esp.c2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
			((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
			(esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
			(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
			(esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
		tttset.reActivate1 = "off"
		esp.c3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" && (esp.a1 ==  "🔲" || esp.a3 ==  "🔲" || esp.b2 ==  "🔲" || esp.c1 ==  "🔲" || esp.c3 ==  "🔲")) {
		tttset.reActivate1 = "off"
		while (tttset.reActivate3 == "on") {
			priorityC()
		}
		tttset.reActivate3 = "on"
	} else if (tttset.tttdifficulty == "HARD" && ( 
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		tttset.reActivate1 = "off"
		IAmove1()
	} else if (tttset.tttdifficulty == "NORMAL" && ( 
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		tttset.reActivate1 = "off"
		let randomNORMAL = Math.floor(Math.random() * 3)
		if (randomNORMAL == 0 || randomNORMAL == 1) {
			IAmove1()
		} else {
			while (tttset.reActivate2 == "on") {
				IAalter()
			}
		}
		tttset.reActivate2 = "on"
	} else {
		let randomALL = Math.floor(Math.random() * 9)
		switch (randomALL) {
			case 0:
				if (esp.a1 == "🔲") {
					tttset.reActivate1 = "off"
					esp.a1 = "⭕"
				}
			break
			case 1:
				if (esp.a2 == "🔲") {
					tttset.reActivate1 = "off"
					esp.a2 = "⭕"
				}
			break
			case 2:
				if (esp.a3 == "🔲") {
					tttset.reActivate1 = "off"
					esp.a3 = "⭕"
				}
			break
			case 3:
				if (esp.b1 == "🔲") {
					tttset.reActivate1 = "off"
					esp.b1 = "⭕"
				}
			break
			case 4:
				if (esp.b2 == "🔲") {
					tttset.reActivate1 = "off"
					esp.b2 = "⭕"
				}
			break
			case 5:
				if (esp.b3 == "🔲") {
					tttset.reActivate1 = "off"
					esp.b3 = "⭕"
				}
			break
			case 6:
				if (esp.c1 == "🔲") {
					tttset.reActivate1 = "off"
					esp.c1 = "⭕"
				}
			break
			case 7:
				if (esp.c2 == "🔲") {
					tttset.reActivate1 = "off"
					esp.c2 = "⭕"
				}
			break
			case 8:
				if (esp.c3 == "🔲") {
					tttset.reActivate1 = "off"
					esp.c3 = "⭕"
				}
			break
		}
	}
}

async function ytDownlodMp3(url) {
	return new Promise((resolve, reject) => {
	  try {
		const id = ytdl.getVideoID(url)
		const yutub = ytdl.getInfo(`https://www.youtube.com/watch?v=${id}`)
		.then((data) => {
		  let pormat = data.formats
		  let audio = []
		  for (let i = 0; i < pormat.length; i++) {
			if (pormat[i].mimeType == 'audio/webm; codecs=\"opus\"') {
			  let aud = pormat[i]
			  audio.push(aud.url)
			}
		  }
		  const title = data.player_response.microformat.playerMicroformatRenderer.title.simpleText
		  const thumb = data.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url
		  const channel = data.player_response.microformat.playerMicroformatRenderer.ownerChannelName
		  const views = data.player_response.microformat.playerMicroformatRenderer.viewCount
		  const published = data.player_response.microformat.playerMicroformatRenderer.publishDate
  
		  const result = {
			title: title,
			thumb: thumb,
			channel: channel,
			published: published,
			views: views,
			url: audio[1]
		  }
		  return(result)
		})
		resolve(yutub)
	  } catch (error) {
		  reject(error);
		}
		console.log(error)
	})
}

const isFiltered = (from) => !!usedCommandRecently.has(from)
const addFilter = (from) => {
    usedCommandRecently.add(from)
    setTimeout(() => usedCommandRecently.delete(from), delayantispamcmd * 1000)
}

var cassinov = [ '🍇 🍇 🍇', '🍒 🍒 🍒', '🍎 🍎 🍎', '🍇 🍇 🍎', '🍇 🍇 🍒', '🍇 🍎 🍇','🍇 🍎 🍎','🍇 🍎 🍒','🍇 🍒 🍇','🍇 🍒 🍎','🍇 🍒 🍒','🍎 🍇 🍇','🍎 🍇 🍎','🍎 🍇 🍒','🍎 🍎 🍇','🍎 🍎 🍒','🍎 🍒 🍇','🍎 🍒 🍎','🍎 🍒 🍒','🍒 🍇 🍇','🍒 🍇 🍎','🍒 🍇 🍒','🍒 🍎 🍇','🍒 🍎 🍎','🍒 🍎 🍒','🍒 🍒 🍇','🍒 🍒 🍎']

console.log(banner.string)
function kyun(seconds){
    function pad(s){
      return (s < 10 ? '0' : '') + s;
    }
    var hours = Math.floor(seconds / (60*60));
    var minutes = Math.floor(seconds % (60*60) / 60);
    var seconds = Math.floor(seconds % 60);
  
    return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos`
}

const getFileBuffer = async (mediakey, MediaType) => {
    const stream = await downloadContentFromMessage(mediakey, MediaType)
    let buffer = Buffer.from([])
    for await(const chunk of stream) {
        buffer = Buffer.concat([buffer, chunk])
    }
    return buffer
}

const { state, saveState } = useSingleFileAuthState('./UserAuth.json')
async function startSocket() {
    var drezin = require('@adiwajshing/baileys').default({
        logger: pino({level: 'silent'}),
        auth: state,
        version: [2, 2220, 8],
        printQRInTerminal: true
    })
    
    drezin.ev.on('group-participants.update', async (num) => {
        const mdata = await drezin.groupMetadata(num.id)
        const time = moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')
        const pushname = num.id
        const dbackid = []
        for(i=0;i<dontback.length;++i) dbackid.push(dontback[i].groupId)

        if(dbackid.indexOf(num.id) >= 0) {
            if (num.action == 'add'){ 
                var ind = dbackid.indexOf(num.id)
                if(dontback[ind].actived && dontback[ind].number.indexOf(num.participants[0].split('@')[0]) >= 0) {
                    await drezin.sendMessage(mdata.id, {text:'*Olha quem deu as cara por aqui, sente o poder do ban cabaço*'})
                    drezin.groupParticipantsUpdate(mdata.id, [num.participants[0]], 'remove')
                    return
                }
            }
        }
        if(antifake.includes(num.id)) {
            if(num.action === 'add' && !num.participants[0].startsWith(55)) {
                await drezin.sendMessage(mdata.id , {video: {url: 'https://download1327.mediafire.com/8sa3fyjc4oeg/4obpxlqhcaet3a7/ezgif.com-gif-maker+%282%29.mp4'},
                gifPlayback: true,
                caption: 'Olá número fake, você não é permitido aqui, saia agora para própria segurança'})
                drezin.groupParticipantsUpdate(mdata.id, [num.participants[0]], 'remove')
                return
            }
        }
        if(!welkom.includes(num.id)) return
        try {
            try {
                ppimg = await drezin.profilePictureUrl(num.participants[0])
            } catch {
                ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
            }
            try {
                ppgp = await drezin.profilePictureUrl(mdata.id)
            } catch {
                ppgp = 'https://image.flaticon.com/icons/png/512/124/124034.png'
            }
            const groupIdWelcomed = []
            const groupIdBye = []
            for(let obj of welcome_group) groupIdWelcomed.push(obj.jid)
            for(let obj of bye_group) groupIdBye.push(obj.jid)
            const isByed = groupIdBye.indexOf(num.id) >= 0 ? true : false
            const isWelcomed = (groupIdWelcomed.indexOf(num.id) >= 0) ? true : false
            if(num.action === 'add') {
                if(isWelcomed) {
                    var ind = groupIdWelcomed.indexOf(num.id)
                    teks = welcome_group[ind].msg
                        .replace('#data#', dataAtualFormatada())
                        .replace('#hora#', time)
                        .replace('#groupname#', mdata.subject)
                        .replace('#numuser#', '@'+num.participants[0].split('@')[0])
                        .replace('#botnum#', drezin.user.id)
                        .replace('#user#', pushname)
                } else {
                    teks = welcome(num.participants[0].split('@')[0], mdata.subject)
                }
                let buff = await getBuffer(ppimg)
                ran = getRandom('.jpg')
                await fs.writeFileSync(ran, buff)
                const uploadpp = await uploadimg('brizaloka', ran, ran)
                fs.unlinkSync(ran)
                imgbuff = await getBuffer(`https://api.brizaloka-api.tk/photomod/v1/menu?apikey=brizaloka&profileimg=${uploadpp.resultado.link}&background=${backgroundwelcomeimg}&description=Seja bem-vindo&title=BEM-VINDO&username=${num.participants[0].split('@')[0]}`)
                drezin.sendMessage(mdata.id, {image: imgbuff, mentions: num.participants, caption: teks})
            } else if(num.action === 'remove') {
                mem = num.participants[0]
                try {
                    ppimg = await drezin.profilePictureUrl(`${mem.split('@')[0]}@c.us`)
                } catch {
                    ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }
                if(isByed) {
                    var ind = groupIdBye.indexOf(num.id)
                    teks = bye_group[ind].msg
                    .replace('#data#', dataAtualFormatada())
                    .replace('#hora#', time)
                    .replace('#groupname#', mdata.subject)
                    .replace('#numuser#', mem.split('@')[0])
                    .replace('#botnum#', drezin.user.id)
                    .replace('#user#', pushname)
                } else {
                    teks = bye(num.participants[0].split('@')[0])
                }
                let buff = await getBuffer(ppimg)
                ran = getRandom('.jpg')
                fs.writeFileSync(ran, buff)
                const upload = await uploadimg('brizaloka', ran, ran)
                imgbuff = await getBuffer(`https://api.brizaloka-api.tk/photomod/v2/menu?apikey=brizaloka&description=Ate mais ${mem.split('@')[0]}&profileimg=${upload.resultado.link}&background=${backgroundbyeimg}`)
                drezin.sendMessage(mdata.id, {image: imgbuff, caption: teks, mentions: num.participants})
                fs.unlinkSync(ran)

            }
        } catch (e) {
            console.log(e);
        }
    })

    drezin.ev.on('messages.upsert', async m => {
        try {
            const mek = m.messages[0]
            if(!mek.message) return
            if (mek.key && mek.key.remoteJid == 'status@broadcast') return
            if(mek.key.fromMe) return
            global.prefix

            //const group
            const preNumberBot = drezin.user.id
            const botNumber = preNumberBot.includes(':') ? preNumberBot.split(':')[0]+'@s.whatsapp.net' : preNumberBot
            const type = Object.keys(mek.message)[0] == 'senderKeyDistributionMessage' ? Object.keys(mek.message)[2] : (Object.keys(mek.message)[0] == 'messageContextInfo') ? Object.keys(mek.message)[1] : Object.keys(mek.message)[0]
            const from = mek.key.remoteJid
            const isGroup = from.endsWith('@g.us')
            const presender = isGroup ? mek.key.participant : mek.key.remoteJid
            const sender = presender.includes(':') ? `${presender.split(':')[0]}@s.whatsapp.net` : presender
            const groupMetadata = isGroup ? await drezin.groupMetadata(from) : ''
            const groupMembers = isGroup ? groupMetadata.participants : ''
            const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            const isOwner = ownerNumber.includes(sender)
            const crashRank = JSON.parse(fs.readFileSync('./src/database/crash.json'))
            const doubleRank = JSON.parse(fs.readFileSync('./src/database/double.json'))
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isGroupAdmins = groupAdmins.includes(sender) || false
            const groupName = isGroup ? groupMetadata.subject : ''
            const groupId = isGroup ? groupMetadata.id : ''
            const pushname = mek.pushName ? mek.pushName : ''
            const isAntiPalavra = isGroup ? antipalavra.includes(from) : false
            const isAntiSpamcmd = antispamcmd.includes('Ativado')
            const isAntiPv = (antipv.indexOf('Ativado') >= 0) ? true : false
            const isAntiNewchat = (antinewchat.indexOf('Ativado') >= 0) ? true : false
            const isVotoInit = voto.length > 0 ? true : false
            const isWelkom = isGroup ? welkom.includes(from) : false
            const isLimitActive = (limitactive.indexOf('Ativado') >= 0) ? true : false
            const isAntiDoc = isGroup ? antidoc.includes(from) : false
            const isAntiImg = isGroup ? antiimg.includes(from) : false
            const isAntiVid = isGroup ? antivid.includes(from) : false
            const isAntiLoc = isGroup ? antiloc.includes(from) : false
            const isAntiCtt = isGroup ? antictt.includes(from) : false
            const isAntiAudio = isGroup ? antiaudio.includes(from) : false
            const isAntiLink = isGroup ? antilink.includes(from) : false
            const isAntiLinkHard = isGroup ? antilinkhard.includes(from) : false
            const isAntiPorn = from.endsWith('@g.us') ? antiporn.includes(from) : false
            const isAntiFake = isGroup ? antifake.includes(from) : false
            const isBlockRoleta = roletarussa.includes(from)
            const isSimi = isGroup ? samih.includes(from) : false
            const isAutoReply = isGroup ? autoreply.includes(from) : false
            const isNsfw = isGroup ? nsfw.includes(from) : false
            const isBlockLevel = leveling_block.level_blocked
            const palavrasid = []

            //enviar imagens com botão
            const enviarImg = async (id, img1, text1, desc1, but = [], vr) => {
                buttonMessage = {
                image: {url: img1},
                caption: text1,
                footer: desc1,
                buttons: but,
                headerType: 4
                }
                drezin.sendMessage(id, buttonMessage, {quoted: vr})
                }

            idttt = []
            players1 = []
            players2 = []
            gilir = []
            for (let t of ky_ttt){
                idttt.push(t.id)
                players1.push(t.player1)
                players2.push(t.player2)
                gilir.push(t.gilir)
            }
            const isTTT = isGroup ? idttt.includes(from) : false
            isPlayer1 = isGroup ? players1.includes(sender) : false
            isPlayer2 = isGroup ? players2.includes(sender) : false
            const dbids = []
                for(i=0;i<dontback.length;++i) {
                    dbids.push(dontback[i].groupId)
                }
            const isDontBack = (isGroup && dbids.indexOf(from) >= 0) ? true : false
            for(let obj of listantipalavra) {
                palavrasid.push(obj.jid)
            }
            if(isBotGroupAdmins && isAntiAudio && type === 'audioMessage') {
                if(isGroupAdmins) return drezin.sendMessage(from, {text: adminmsgtype},{quoted: mek})
                await drezin.sendMessage(from, {text: banmsgtype}, {quoted: mek})
                drezin.groupParticipantsUpdate(from, [sender], 'remove')
            }
            if(isBotGroupAdmins && isAntiCtt && type === 'contactMessage') {
                if(isGroupAdmins) return drezin.sendMessage(from, {text: adminmsgtype},{quoted: mek})
                await drezin.sendMessage(from, {text: banmsgtype}, {quoted: mek})
                drezin.groupParticipantsUpdate(from, [sender], 'remove')
            }
            if(isBotGroupAdmins && isAntiImg && type === 'imageMessage') {
                if(isGroupAdmins) return drezin.sendMessage(from, {text: adminmsgtype},{quoted: mek})
                await drezin.sendMessage(from, {text: banmsgtype}, {quoted: mek})
                drezin.groupParticipantsUpdate(from, [sender], 'remove')
            }
            if(isBotGroupAdmins && isAntiDoc && type === 'documentMessage') {
                if(isGroupAdmins) return drezin.sendMessage(from, {text: adminmsgtype},{quoted: mek})
                await drezin.sendMessage(from, {text: banmsgtype}, {quoted: mek})
                drezin.groupParticipantsUpdate(from, [sender], 'remove')
            }
            if(isBotGroupAdmins && isAntiLoc && type === 'locationMessage') {
                if(isGroupAdmins) return drezin.sendMessage(from, {text: adminmsgtype},{quoted: mek})
                await drezin.sendMessage(from, {text: banmsgtype}, {quoted: mek})
                drezin.groupParticipantsUpdate(from, [sender], 'remove')
            }
            const content = JSON.stringify(mek.message)
            const time = moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')
            
            body = (mek.message.conversation && prefixs.includes(mek.message.conversation.charAt(0))) ? 
            mek.message.conversation : ( mek.message.imageMessage && prefixs.includes(mek.message.imageMessage.caption.charAt(0))) ? 
            mek.message.imageMessage.caption : mek.message.videoMessage && prefixs.includes(mek.message.videoMessage.caption.charAt(0)) ? 
            mek.message.videoMessage.caption : mek.message.extendedTextMessage && prefixs.includes(mek.message.extendedTextMessage.text.charAt(0)) ? 
            mek.message.extendedTextMessage.text : (mek.message.listResponseMessage && prefixs.includes(mek.message.listResponseMessage.singleSelectReply.selectedRowId.charAt(0)) && mek.message.listResponseMessage.singleSelectReply.selectedRowId) ? 
            mek.message.listResponseMessage.singleSelectReply.selectedRowId: ''
           
            budy = mek.message.conversation ? 
            mek.message.conversation : mek.message.extendedTextMessage ? 
            mek.message.extendedTextMessage.text : ''
            
            bady = mek.message.conversation ? 
            mek.message.conversation : mek.message.imageMessage ? 
            mek.message.imageMessage.caption : mek.message.videoMessage ? 
            mek.message.videoMessage.caption : mek.message.extendedTextMessage ? 
            mek.message.extendedTextMessage.text : (mek.message.listResponseMessage && mek.message.listResponseMessage.singleSelectReply.selectedRowId) ? 
            mek.message.listResponseMessage.singleSelectReply.selectedRowId: ''
            

            bidy =  bady.toLowerCase()
            selectedButton = (type == 'buttonsResponseMessage') ?
             mek.message.buttonsResponseMessage.selectedButtonId : ''
            
            const argsButton = selectedButton.trim().split(/ +/)
            const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
            const args = body.trim().split(/ +/).slice(1)
            const argis = bidy.trim().split(/ +/)
            const isCmd = prefixs.includes(body.charAt(0))
            var prefix = isCmd ? body.charAt(0) : ''

            const isCmdBlocked = (teks) => {
                return blockcmd.includes(teks)
            }
            const enviar = (teks) => {
                drezin.sendMessage(from, {text: teks}, {quoted: mek})
            }
            const isUrl = (url) => {
                if(linkfy.find(url)[0]) return true
                return false
            }
            const mentions = (teks, memberr, id) => {
                (id == null || id == undefined || id == false) ? drezin.sendMessage(from, {text: teks.trim(), mentions: memberr}) : drezin.sendMessage(from, {text: teks.trim(), mentions: memberr})
            }
            const isListAntiPalavra = (teks) => {
                var ind = palavrasid.indexOf(from)
                var is_checked = false
                if(ind >= 0) {
                    for(let obj of listantipalavra[ind].palavras) {
                        if(teks.includes(obj)) is_checked = true
                    }
                    return is_checked
                } else return false
            }
            const levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
                return`*「 Subiu de nível 」*
    *Nome* : ${pushname}
    *Wa.me* : wa.me/${sender.split("@")[0]}
    *Xp* : ${getLevelingXp(sender)}
    *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}`
            }

            if (isTTT && isPlayer2) {
                if (bady.toLowerCase().startsWith('y')) {
                    tto = ky_ttt.filter(ghg => ghg.id.includes(from))
                    tty = tto[0]
                    angka = tto[0].angka
                    ucapan =
                        `*🎳 Tictactoe 🎲*

    Player1 @${tty.player1.split('@')[0]}=❎
    Player2 @${tty.player2.split('@')[0]}=⭕

    Agora é a vez de @${tty.player1.split('@')[0]}

    ${angka[1]}${angka[2]}${angka[3]}
    ${angka[4]}${angka[5]}${angka[6]}
    ${angka[7]}${angka[8]}${angka[9]}`
                    drezin.sendMessage(from, {text: ucapan, mentions: [tty.player1, tty.player2] }, {
                        quoted: mek
                    })
                }
                if (bady.toLowerCase().startsWith('n')) {
                    tto = ky_ttt.filter(ghg => ghg.id.includes(from))
                    tty = tto[0]
                    naa = ky_ttt.filter(toek => !toek.id.includes(from))
                    ky_ttt = naa
                    drezin.sendMessage(from, {text: `Yahh @${tty.player2.split('@')[0]} Menolak:(`, mentions: [tty.player2]}, {
                        quoted: mek
                    })
                }
            }

            if (isTTT && isPlayer1) {
                nuber = parseInt(bady)
                if (isNaN(nuber)) return
                if (nuber < 1 || nuber > 9) return enviar('Digite os números corretamente')
                main = ky_ttt.filter(hjh => hjh.id.includes(from))
                if (!tttawal.includes(main[0].angka[nuber])) return enviar('Já preenchido, digite outro número que esteja disponível')
                if (main[0].gilir.includes(sender)) return enviar('Espere sua vez')
                s = '❎'
                main[0].angka[nuber] = s
                main[0].gilir = main[0].player1
                naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
                ky_ttt = naa
                pop = main[0]
                ky_ttt.push(pop)
                tto = ky_ttt.filter(hgh => hgh.id.includes(from))
                tty = tto[0]
                angka = tto[0].angka
                ttt = `${angka[1]}${angka[2]}${angka[3]}
    ${angka[4]}${angka[5]}${angka[6]}
    ${angka[7]}${angka[8]}${angka[9]}`

                ucapmenang = () => {
                    ucapan1 =
                        `*🎳 Resultado do Jogo 🎲*

    *Jogador vencedor🎉* @${tty.player1.split('@')[0]}\n
    *Quer jogar de novo? escreva ${prefix}tttplayer e marque a pessoa que deseja jogar*`
                    ucapan2 = `*🎳 Resultado do Jogo 🎲*

    *Resultado:*

    ${ttt}`
                    drezin.sendMessage(from, {text: ucapan1, mentions: [tty.player1]}, {
                        quoted: mek,
                    })
                    naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
                    return ky_ttt = naa
                }

                if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
                if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
                if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
                if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
                if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
                if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
                if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
                if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
                if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && !ttt.includes('4️⃣') && !
                    ttt.includes('5️⃣') && !
                    ttt.includes('6️⃣') && !ttt.includes('7️⃣') && !ttt.includes('8️⃣') && !ttt.includes('9️⃣')) {
                    ucapan1 = `*🎳 Resultado do Jogo 🎲*
    *Empate🗿👌*`
                    ucapan2 = `*🎳 Resultado do Jogo 🎲*

    *Resultado:*

    ${ttt}`
                    enviar(ucapan1)
                    naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
                    return ky_ttt = naa
                }
                ucapan = `*🎳 Tictactoe 🎲*

    Player2 @${tty.player2.split('@')[0]}=⭕
    Player1 @${tty.player1.split('@')[0]}=❎

    Agora é a vez de @${tty.player2.split('@')[0]}

    ${ttt}`
                drezin.sendMessage(from, {text: ucapan, mentions: [tty.player1, tty.player2]}, {
                    quoted: mek
                })
            }
            if (isTTT && isPlayer2) {
                nuber = parseInt(bady)
                if (isNaN(nuber)) return
                if (nuber < 1 || nuber > 9) return enviar('Digite os números corretamente')
                main = ky_ttt.filter(hjh => hjh.id.includes(from))
                if (!tttawal.includes(main[0].angka[nuber])) return enviar('Já preenchido, digite outro número que esteja disponível')
                if (main[0].gilir.includes(sender)) return enviar('Espere sua vez')
                s = '⭕'
                main[0].angka[nuber] = s
                main[0].gilir = main[0].player2
                naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
                ky_ttt = naa
                pop = main[0]
                ky_ttt.push(pop)
                tto = ky_ttt.filter(hgh => hgh.id.includes(from))
                tty = tto[0]
                angka = tto[0].angka
                ttt = `${angka[1]}${angka[2]}${angka[3]}
    ${angka[4]}${angka[5]}${angka[6]}
    ${angka[7]}${angka[8]}${angka[9]}`

                ucapmenang = () => {
                    ucapan1 = `*🎳 Resultado do Jogo 🎲*

    *Jogador vencedor🎉:* @${tty.player2.split('@')[0]}\n
    *Quer jogar de novo? escreva ${prefix}tictactoe e marque a pessoa que deseja jogar*`

                    ucapan2 = `*🎳 Tictactoe Atual 🎲*\n\n${ttt}`
                    drezin.sendMessage(from, {text: ucapan1, mentions: [tty.player2]}, {
                        quoted: mek
                    })
                    naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
                    return ky_ttt = naa
                }

                if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
                if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
                if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
                if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
                if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
                if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
                if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
                if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
                if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && !ttt.includes('4️⃣') && !
                    ttt.includes('5️⃣') && !
                    ttt.includes('6️⃣') && !ttt.includes('7️⃣') && !ttt.includes('8️⃣') && !ttt.includes('9️⃣')) {
                    ucapan1 = `*🎳 Resultado do Jogo 🎲*
    *Empate🗿👌*`
                    ucapan2 = `*🎳 Resultado do Jogo 🎲*
    *Resultado:*

    ${ttt}`
                    enviar(ucapan1)
                    naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
                    return ky_ttt = naa
                }
                ucapan = `*🎳 Tictactoe 🎲*

    Player1 @${tty.player1.split('@')[0]}=⭕
    Player2 @${tty.player2.split('@')[0]}=❎

    Agora é a vez de @${tty.player1.split('@')[0]}

    ${ttt}`
                drezin.sendMessage(from, {text: ucapan, mentions: [tty.player1, tty.player2]}, {
                    quoted: mek
                })
            }
            if ((isAntiPorn && isBotGroupAdmins)) {
                if (type === 'imageMessage') {
                    buff = await getFileBuffer(mek.message.imageMessage, 'image')
                    ran = getRandom('.'+await getExtension(mek.message.imageMessage.mimetype))
                    fs.writeFileSync(ran, buff)
                    const upload = await uploadimg('brizaloka', ran, ran)
                    setTimeout(async () => {
                        anu = await fetchJson(`https://api.brizaloka-api.tk/ia/porndetect?apikey=brizaloka&img=${upload.resultado.link}`)
                        console.log(anu);
                        if(parseInt(anu.probabilidades.porno) >= 70 && isGroupAdmins)  {
                            await drezin.sendMessage(from,{text: adminmsgporn}, {quoted: mek})
                            fs.unlinkSync(ran)
                            return
                        } else if(parseInt(anu.probabilidades.porno) >= 70 && !isGroupAdmins) {
                            await drezin.sendMessage(from,{text: banmsgporn}, {quoted: mek})
                            setTimeout(async function () {
                                drezin.groupParticipantsUpdate(from, [sender], 'remove')
                                fs.unlinkSync(ran)
                            }, 2000)
                            return
                        }
                        if(parseInt(anu.probabilidades.hentai) >= 70 && isGroupAdmins) {
                            await drezin.sendMessage(from,{text: adminmsgporn}, {quoted: mek})
                            fs.unlinkSync(ran)
                            return

                        }  else if(parseInt(anu.probabilidades.hentai) >= 70 && !isGroupAdmins) {
                            await drezin.sendMessage(from,{text: banmsgporn}, {quoted: mek})
                            setTimeout(async function () {
                                drezin.groupParticipantsUpdate(from, [sender], 'remove')
                                fs.unlinkSync(ran)
                            }, 2000)
                            return
                        }
                        if(parseInt(anu.probabilidades.sexy) >= 70) {
                            drezin.sendMessage(from,{text: 'Cuidado com oq manda em amigo, to com antiporn ativado'}, {quoted: mek})
                            fs.unlinkSync(ran)
                        }
                    }, 1600);
                }
            }
            if (isCmd && isFiltered(from) && !isGroup) {
                console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mSPAM\x1b[1;37m]', `[Tempo: ${color(time)}]`, '[Spam', 'de', color(sender.split('@')[0]), 'palavras :', color(args.length)+']')
                if(isAntiSpamcmd) {
                    return enviar(`「 ❗ 」Spam detectado. Espere ${delayantispamcmd} segundos`)
                }
            }
            if (isCmd && isFiltered(from) && isGroup) {
                console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mSPAM\x1b[1;37m]', `[Tempo: ${color(time)}]`, '[Spam', 'de', color(sender.split('@')[0]), 'grupo: ', color(groupName), 'palavras :', color(args.length)+']')
                if(isAntiSpamcmd) {
                    return enviar(`「 ❗ 」Spam detectado. Espere ${delayantispamcmd} segundos`)
                }
            }

            const allContratosJid = []
            for(let obj of contratos) allContratosJid.push(obj.jid)

            colors = ['red','white','black','blue','yellow','green']
            const isContrated = allContratosJid.indexOf(sender) >= 0 ? true : false
            const isMedia = (type === 'imageMessage' || type === 'videoMessage')
            const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
            const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
            const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
            const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
            if (!isGroup && isCmd && sender) console.log(`\x1b[1;37m╭━━━━━━━━━━━━━━━━━━━━━━━━━╮\n\x1b[1;37m┃ Número: ${color(sender.split('@')[0])}\n\x1b[1;37m┃ Data: ${color(time)}\n\x1b[1;37m┃ Comando: ${color(command)}\n\x1b[1;37m┃ Palavras: ${color(args.length)}\n\x1b[1;37m╰━━━━━━━━━━━━━━━━━━━━━━━━━╯`)
            if (!isGroup && !isCmd && sender) console.log(`\x1b[1;37m╭━━━━━━━━━━━━━━━━━━━━━━━━━╮\n\x1b[1;37m┃ Número: ${color(sender.split('@')[0])}\n\x1b[1;37m┃ Data: ${color(time)}\n\x1b[1;37m┃ Comando: Não\n\x1b[1;37m┃ Palavras: ${color(argis.length)}\n\x1b[1;37m╰━━━━━━━━━━━━━━━━━━━━━━━━━╯`)
            if (isCmd && isGroup && sender) console.log(`\x1b[1;37m╭━━━━━━━━━━━━━━━━━━━━━━━━━╮\n\x1b[1;37m┃ Número: ${color(sender.split('@')[0])}\n\x1b[1;37m┃ Data: ${color(time)}\n\x1b[1;37m┃ Comando: ${color(command)}\n\x1b[1;37m┃ Palavras: ${color(args.length)}\n\x1b[1;37m┃ Grupo: ${color(groupName)}\n\x1b[1;37m╰━━━━━━━━━━━━━━━━━━━━━━━━━╯`)
            if (!isCmd && isGroup && sender) console.log(`\x1b[1;37m╭━━━━━━━━━━━━━━━━━━━━━━━━━╮\n\x1b[1;37m┃ Número: ${color(sender.split('@')[0])}\n\x1b[1;37m┃ Data: ${color(time)}\n\x1b[1;37m┃ Comando: Não\n\x1b[1;37m┃ Palavras: ${color(argis.length)}\n\x1b[1;37m┃ Grupo: ${color(groupName)}\n\x1b[1;37m╰━━━━━━━━━━━━━━━━━━━━━━━━━╯`)
            if (isCmd && blockcmd.includes(command)) return enviar(blockedcmdmsg)
            if (isCmd && blockeds.includes(sender)) return enviar(blockedmsg)
            if (isAntiPv && !isOwner && !isGroup) {
                enviar(antipvmsg)
                drezin.updateBlockStatus(sender, 'block')
            }
            if (isCmd && !isOwner) addFilter(from)
            if (isCmd && allContratosJid.indexOf(sender) < 0 && command != 'assinar' && registeruser){ 
                buff = await getBuffer('https://drive.google.com/uc?export=download&id=1iQk7BZ64wR0Q_v-5QCSUhXdwJykfae0m')
                drezin.sendMessage(from, {video: buff, gifPlayback: true, caption: `Olá @${sender.split('@')[0]}, para poder usar meus comandos faça um contrato comigo com ${prefix}assinar nome|idade. Tenha um bom dia!` , mentions: [sender]}, {quoted: mek}) 
                return
            }

            if (!isGroup && !antinewchatlist.includes(sender)) {
                if(antinewchat.includes('Ativado') && !isOwner) {
                    enviar(antinewchatmsg)
                    drezin.updateBlockStatus(sender, 'block')
                    return
                } else {
                    antinewchatlist.push(sender)
                    fs.writeFileSync('./src/database/antis/antinewchatlist.json', JSON.stringify(antinewchatlist, null, 2))
                }
            }

            if(isAntiPalavra) {
                var isDetect = false
                ind = palavrasid.indexOf(from)
                for(let obj of listantipalavra[ind].palavras) {
                    if(bady.includes(obj)) isDetect = true;
                }
                if(isDetect && command != 'rmpalavra' && !isOwner) {
                    if(isGroupAdmins) return enviar('Palavra proibida detectad, sua sorte é que vc é adm')
                    await enviar('Palavra proibida detectada, banindo usuário...')
                    drezin.groupParticipantsUpdate(from, [sender], "remove")
                }
            }
            votoactivegp = []
            for(let obj of gpvoto) votoactivegp.push(obj.group_id)
            const isVotoGroupActived = (isGroup && votoactivegp.indexOf(from) >= 0 ) ? true : false

            const groupIdWelcomed = []
            for(let obj of welcome_group) groupIdWelcomed.push(obj.jid)
            const isWelcomed = (groupIdWelcomed.indexOf(from) >= 0) ? true : false

            const GroupsMutedActived = []
            for(let obj of muted) {
                GroupsMutedActived.push(obj.jid)
            }
            const isMuted = (isGroup && GroupsMutedActived.indexOf(from) >= 0) ? true : false
            const NumbersMuted = isMuted ? muted[GroupsMutedActived.indexOf(from)].numbers : []
            if(isMuted && NumbersMuted.indexOf(sender) >= 0){
                drezin.groupParticipantsUpdate(from, [sender], 'remove')
                enviar('*Eu avisei, vou descer o martelo do ban em tu 😡*')
            }

            const limitsids = []
            for(let nums of limitedlist) {
                limitsids.push(nums.jid)
            }
            if(!isOwner && isCmd && isLimitActive && limitsids.indexOf(sender) < 0) {
                var id = {
                    jid: sender,
                    limit: limitqnt
                }
                limitedlist.push(id)
                await fs.writeFileSync('./src/database/limitedlist.json', JSON.stringify(limitedlist, null, 2) + '\n')
            }
            if(!isOwner && isCmd && isLimitActive && limitsids.indexOf(sender) >= 0) {
                var ind = limitsids.indexOf(sender)
                if(limitedlist[ind].limit <= 0) return enviar('*Voce chegou no limite máximo de comandos dados*')
                limitedlist[ind].limit -= 1
                await fs.writeFileSync('./src/database/limitedlist.json', JSON.stringify(limitedlist, null, 2) + '\n')
            }

            if (tttset.tttstatus == "off" && tttset.autoEndTime == "on") {
                tttset.autoEndTime = "off"
                } else if (tttset.tttstatus == "on" && tttset.autoEndTime == "on") {
                if (isCmd) {
                const randomEndTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
                addLevelingXp(tttset.player, randomEndTTTXP)
                const checkTTTIdEnd = getTTTId(tttset.player)
                if (checkTTTIdEnd === undefined) addTTTId(tttset.player)
                addTTTpoints(tttset.player, randomEndTTTXP)
                drezin.sendMessage(tttset.local,{text: `❌ O TEMPO DE JOGO EXPIROU ❌\n\n Perdeu: ${randomEndTTTXP} XP 🔮`}, {quoted: tttset.mentionPlayer})
                } else {
                drezin.sendMessage(tttset.local,{text: `❌ O TEMPO DE JOGO EXPIROU ❌`}, {quoted: tttset.mentionPlayer})
                }
                esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
                esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
                esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
                tttset.tttstatus = "off"
                tttset.autoEndTime = "off"
            }

            async function autoReplyStart(){
                if(bidy.includes('pedro') && isAutoReply) {
                    drezin.sendMessage(from, {sticker: fs.readFileSync('./img/pedro.webp')}, {quoted: mek})
                }
                if(bidy.includes('cade o bot') && isAutoReply) return enviar(cadebot)
                if(bidy.includes('bot fdp') && isAutoReply) return enviar(botfdp)
                if(bidy.includes('bot gostoso') && isAutoReply) return enviar(botgostoso)
                if(bidy.includes('bot fofo') && isAutoReply) return enviar(botfofo)
                if(bidy.includes('bot baianor') && isAutoReply) return enviar(botbaianor)
                if(bidy.includes('bot corno') && isAutoReply) return enviar(botcorno)
                if(bidy.includes('bot feio') && isAutoReply) return enviar(botfeio)
                if(bidy.includes('bot puta') && isAutoReply) return enviar(botputa)
                if(bidy.includes('bot gay') && isAutoReply) return enviar(botgay)
                if(bidy.includes('bot viado') && isAutoReply) return enviar(botviado)
                if(bidy.includes(botNumber+' feio') && isAutoReply) return enviar(numbotfeio)
                if(bidy.includes('bot lindo') && isAutoReply) {
                    buff = await getBuffer(linkbotlindo)
                    teks = botlindo
                    drezin.sendMessage(from, {image: buff, caption: teks}, {quoted: mek})
                }
                if(bidy.includes('bom dia') && isAutoReply) {
                    buff = await getBuffer(linkimgday)
                    teks = textmsgday
                    drezin.sendMessage(from, {image: buff, caption: teks}, {quoted: mek})
                }
                if(bidy.includes('boa tarde') && isAutoReply) {
                    buff = await getBuffer(linkimgeve)
                    teks = textmsgeve
                    drezin.sendMessage(from, {image: buff, caption: teks}, {quoted: mek})
                }
                if(bidy.includes('boa noite') && isAutoReply) {
                    buff = await getBuffer(linkimgnig)
                    teks = textmsgnig
                    drezin.sendMessage(from, {image: buff, caption: teks}, {quoted: mek})
                }
            }
            function checkAntiLink() {
                if(isUrl(bady) && isAntiLinkHard && !isGroupAdmins && isBotGroupAdmins) {
                    enviar(banmsglink)
                    kic = `${sender.split("@")[0]}@s.whatsapp.net`
                    drezin.groupParticipantsUpdate(from, [kic], 'remove')
                }
                if(isUrl(bady) && isAntiLinkHard && isGroupAdmins && isBotGroupAdmins) {
                    enviar(adminmsglink)
                }

                if(bady.includes('://chat.whatsapp.com/') && isAntiLink && !isGroupAdmins && isBotGroupAdmins) {
                    enviar(banmsglink)
                    setTimeout(async function () {
                        kic = `${sender.split("@")[0]}@s.whatsapp.net`
                    drezin.groupParticipantsUpdate(from, [kic], 'remove')
                    }, 1000)
                }
                if(bady.includes('://chat.whatsapp.com/') && isAntiLink && isGroupAdmins && isBotGroupAdmins) {
                    enviar(adminmsglink)
                }
                if(bady.includes('://youtube.com/channel') && isAntiLink && !isGroupAdmins && isBotGroupAdmins) {
                    enviar(banmsglink)
                    setTimeout(async function () {
                        kic = `${sender.split("@")[0]}@s.whatsapp.net`
                    drezin.groupParticipantsUpdate(from, [kic], 'remove')
                    }, 1000)
                }
                if(bady.includes('://youtube.com/channel') && isAntiLink && isGroupAdmins && isBotGroupAdmins) {
                    enviar(adminmsglink)
                }
            }
            autoReplyStart()
            checkAntiLink()

            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            if(isBlockLevel) {
                try {
                    if (currentLevel != undefined && checkId != undefined) {
                        const amountXp = Math.floor(Math.random() * 10) + 500
                        requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                        getLevel = getLevelingLevel(sender)
                        addLevelingXp(sender, amountXp)
                        if (requiredXp <= getLevelingXp(sender)) {
                            addLevelingLevel(sender, 1)
                            await enviar(levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel))
                        }
                    } else addLevelingId(sender)
                } catch (err) {
                    console.error(err)
                }
            }

            switch(argsButton[0]) {
                case 'finaki':
                    if(argsButton[1] == 'nao') return enviar('*Puxa não foi desta vez 😔*') 
                    enviar('*SABIA! EU VENCI OTÁRIO 🥳*')
                    akinator[0][from] = undefined
                    fs.writeFileSync('./src/database/akinator.json', JSON.stringify(akinator, null, 2))
                    break
                case 'akinator':
                    if(argsButton[1] == 'nao') return enviar('*Até a próxima amigo*') 
                    if(akinator[0][from]) return enviar('*Desculpe-me amigo alguem ja está jogando, aguarde pra chegar sua vez*')
                    akinator[0][from] = {
                        id: from,
                        player: sender,
                        game: new Aki({region: 'pt'})
                    }
                    await akinator[0][from].game.start()
                    listMessage = {
                        text: akinator[0][from].game.question,
                        buttonText: 'Mostrar opções',
                        title: "Pergunta",
                        sections: [{
                            title: 'Opções',
                            rows: [{
                                rowId: `${prefix}respaki 0`,
                                title: 'Sim',
                                description: ''
                            },
                            {
                                rowId: `${prefix}respaki 1`,
                                title: 'Não',
                                description: ''
                            },{
                                rowId: `${prefix}respaki 2`,
                                title: 'Não sei',
                                description: ''
                            },{
                                rowId: `${prefix}respaki 3`,
                                title: 'Provavelmente sim',
                                description: ''
                            },
                            {
                                rowId: `${prefix}respaki 4`,
                                title: 'Provavelmente não',
                                description: ''
                            }]
                        }]
                    }
                    drezin.sendMessage(from, listMessage)
                    fs.writeFileSync('./src/database/akinator.json', JSON.stringify(akinator, null, 2))
                break
                case 'ytmp3':
                    if(argsButton.length < 4) return
                    try {
                        if(argsButton[1] == 'doc') {
                            enviar('*⬇️ Baixando música, aguarde um instante...*')
                            anumusic = await new Youtube().ytmp3(argsButton[2])
                            buffmusic = await getBuffer(anumusic.dl_link)
                            ran = getRandom('.mp4')
                            tags = {
                                title: anumusic.title,
                                artist: 'Instalado por Estelar Orion',
                                album: argsButton[3]
                            }
                            await NodeID3.write(tags, buffmusic, async function (err, buff) {
                                drezin.sendMessage(from, {document: buff, mimetype: 'audio/mp3', fileName: anumusic.title+'.mp3'})
                            })
                        }else if(argsButton[1] == 'aud') {
                            enviar('*⬇️ Baixando música, aguarde um instante...*')
                            anumusic = await new Youtube().ytmp3(argsButton[2])
                            buffmusic = await getBuffer(anumusic.dl_link)
                            ran = getRandom('.mp4')
                            tags = {
                                title: anumusic.title,
                                artist: 'Instalado por Estelar Orion',
                                album: argsButton[3]
                            }
                            NodeID3.write(tags, buffmusic, async function(err, buff) {
                                drezin.sendMessage(from, {audio: buff, mimetype: 'audio/mpeg', fileName: anumusic.title})
                            })
                        }
                    } catch {
                        enviar('Houve falha :/')
                    }
                    break
                case 'ytmp4':
                    if(argsButton.length < 4) return
                    try {
                        if(argsButton[1] == 'doc') {
                            enviar('*⬇️ Baixando vídeo, aguarde um instante...*')
                            anumusic = await ytv(argsButton[2])
                            buffmusic = await getBuffer(anumusic.dl_link)
                            drezin.sendMessage(from, {document: buffmusic, mimetype: 'video/mp4', fileName: anumusic.title+'.mp4'})
                        }else if(argsButton[1] == 'vid') {
                            enviar('*⬇️ Baixando vídeo, aguarde um instante...*')
                            anumusic = await ytv(argsButton[2])
                            buffmusic = await getBuffer(anumusic.dl_link)
                            drezin.sendMessage(from, {video: buffmusic, mimetype: 'video/mp4', fileName: anumusic.title})
                        }
                    } catch(e) {
                        console.log(e);
                        enviar('Houve falha :/')
                    }
                    break
            }

            const allCrashId = []
            for(let obj of crash) allCrashId.push(obj.id)
            const isPlayCrash = (await crash.find(obj => obj.id == sender)) ? true : false

            const allDoubleId = []
            for(let obj of double) allDoubleId.push(obj.id)
            const isPlayDouble =  (await double.find(obj => obj.id == sender)) ? true : false

            var doubleRankIds = []
            for(let obj of doubleRank) doubleRankIds.push(obj.id)
            const isDoubleRank = (await doubleRank.find(obj => obj.id == sender)) ? true : false

            var crashRankIds = []
            for(let obj of crashRank) crashRankIds.push(obj.id)
            const isCrashRank = (await crashRank.find(obj => obj.id == sender)) ? true : false

            const allForcaId = []
            for(let obj of forca) allForcaId.push(obj.id)
            const isPlayForca = allForcaId.indexOf(sender) >= 0 ? true : false

            async function doubleStart() {
                doubleSocket = new WebSocket('wss://api-v2.blaze.com/replication/?EIO=3&transport=websocket')
                doubleSocket.on('open', async function() {
                    doubleSocket.send('421["cmd",{"id":"subscribe","payload":{"room":"double_v2"}}]')
                    for(var i = 0; i < double.length; ++i) {
                        if(!double[i].isWebSocketInit) {
                            drezin.sendMessage(double[i].id, {text: '*Websocket conectado com sucesso!*'})
                            double[i].isWebSocketInit = true
                        }
                    }
                })
                doubleSocket.on('message', function(data) {
                    var str = data.toString()
                    if(str.startsWith('42["data",')) {
                        var json = JSON.parse(str.slice(2))[1]
                        if(json.id == 'double.tick') {
                            for(let i = 0; i < double.length; ++i) {
                                if(json.payload.status == 'waiting' && !double[i].isInit) {
                                    drezin.sendMessage(double[i].id, {text: '*Entrando na partida... ⏱️*'})
                                    double[i].isInit = true
                                }
                                if(json.payload.status == 'rolling' && !double[i].isWaiting) {
                                    drezin.sendMessage(double[i].id, {text: '*A Partida está em andamento! Aguarde...⏱️*\n\n*Acesse o site https://blaze.com/pt/games/double para ver a roleta em tempo real*'})
                                    double[i].isWaiting = true
                                }
                                if(json.payload.status == 'complete' && !double[i].isDone) {
                                    var color = parseInt(json.payload.color)
                                    var color_str = (color == 0) ? 'branco' : (color == 2) ? 'preto' : (color == 1) ? 'vermelho' : ''
                                    if(color == double[i].color) {
                                        if(doubleRankIds.indexOf(double[i].player) >=0) {
                                            var pos = doubleRankIds.indexOf(double[i].player)
                                            doubleRank[pos].wins += 1
                                            doubleRank[pos].media = (doubleRank[pos].wins - doubleRank[pos].loses)
                                        }
                                        drezin.sendMessage(double[i].id, {text: `*✅ Partida finalizada, parabéns você ganhou!🥳 ✅*\n\n_*A roleta parou na cor ${color_str}*_\n*Hoje é seu dia de sorte ein 😉*`})
                                    } else {
                                        if(doubleRankIds.indexOf(double[i].player) >=0) {
                                            var pos = doubleRankIds.indexOf(double[i].player)
                                            doubleRank[pos].loses += 1
                                            doubleRank[pos].media = (doubleRank[pos].wins - doubleRank[pos].loses)
                                        }
                                        drezin.sendMessage(double[i].id, {text: `*❌ Partida finalizada você perdeu!😔 ❌*\n\n_*A roleta parou na cor ${color_str}*_\n*Tente novamente, talvez você ganhe na próxima*`})
                                    }
                                    double[i].isDone = true
                                    if(i == double.length - 1){
                                        doubleSocket.close()
                                    }
                                }
                            }
                        }
                    }
                })
                doubleSocket.on('close', async function() {
                    var allIsDone = []
                    for(let i = 0; i < double.length; ++i) {
                        if(double[i].isDone) allIsDone.push(double[i].id)
                    }
                    if(allIsDone.length != double.length) {  
                        doubleStart()
                    } else {
                        fs.writeFileSync('./src/database/double.json', JSON.stringify(doubleRank, null, 2))
                        double = []
                        doubleSocket = null
                    }
                })
            }
            async function crashstart() {
                crashSocket = new WebSocket('wss://api-v2.blaze.com/replication/?EIO=3&transport=websocket')
                crashSocket.on('open', async function () {
                    await crashSocket.send('420["cmd",{"id":"subscribe","payload":{"room":"crash_v2"}}]')
                    for(var i = 0; i < crash.length; ++i) {
                        if(!crash[i].isWebSocketInit) {
                            drezin.sendMessage(crash[i].id, {text: '*Websocket conectado com sucesso!*'})
                            crash[i].isWebSocketInit = true
                        }
                    }
                })
                crashSocket.on('message', async function(data) {
                    var str = data.toString()
                    if(str.startsWith('42["data",')) {
                        var json = JSON.parse(str.slice(2))[1]
                        if(json.id == 'crash.tick') {
                            for(let i = 0; i < crash.length; ++i) {
                                if(json.payload.status == 'waiting' && !crash[i].isInit) {
                                    drezin.sendMessage(crash[i].id, {text: '*Partida iniciado com sucesso!*'})
                                    crash[i].isInit = true
                                }
                                if(json.payload.status == 'graphing' && !crash[i].isWaiting) {
                                    drezin.sendMessage(crash[i].id, {text: '*A Partida está em andamento!*\n\n*Acesse o site https://blaze.com/pt/games/crash para ver o gráfico em tempo real*'})
                                    crash[i].isWaiting = true
                                }
                                if(json.payload.status == 'complete' && !crash[i].isDone) {
                                    var points = parseFloat(json.payload.crash_point)
                                    if(points >= crash[i].porcent) {
                                        if(crashRankIds.indexOf(crash[i].player) >=0) {
                                            var pos = crashRankIds.indexOf(crash[i].player)
                                            crashRank[pos].wins += 1
                                            crashRank[pos].media = (crashRank[pos].wins - crashRank[pos].loses)
                                        }
                                        drezin.sendMessage(crash[i].id, {text: `*✅ Partida finalizada, parabéns você ganhou!🥳 ✅*\n\n*O crash parou em ${points}, hoje é seu dia de sorte ein 😉*`})
                                    } else {
                                        drezin.sendMessage(crash[i].id, {text: `*❌ Partida finalizada você perdeu que pena!😔 ❌*\n\n*O crash parou em ${points}, tente novamente, talvez você consiga!*`})
                                    }
                                    crash[i].isDone = true
                                    if(i == crash.length - 1){
                                        crashSocket.close()
                                    }
                                }
                            }
                        }
                    }
                })
                crashSocket.on('close', async function () {
                    var allIsDone = []
                    for(let i = 0; i < crash.length; ++i) {
                        if(crash[i].isDone) allIsDone.push(crash[i].id)
                    }
                    if(allIsDone.length != crash.length) {  
                        crashstart()
                    } else {
                        fs.writeFileSync('./src/database/crash.json', JSON.stringify(crashRank, null, 2))
                        crash = []
                        crashSocket = null
                    }
                })
            }

            switch(command) {
                case 'snapdown':
                    if(!mek.message.listResponseMessage) return
                    if(args.length < 1) return
                    teks = body.slice(10)
                    json_data = JSON.parse(teks)
                    try {
                        if(json_data.format == 'mp3') {
                            enviar('*⬇️ Baixando música aguarde... ⬇️*')
                            let buff =  await (await fetch(json_data.dl_link, {
                                headers: {
                                    "range": `bytes=0-${json_data.bytes}`
                                }
                            })).buffer()
                            await enviar('*🔄 Convertendo para mp3 🔄*')
                            ran = getRandom('.weba')
                            rano = getRandom('.mp3')
                            await fs.writeFileSync(ran, buff)
                            exec(`ffmpeg -i ${ran} -vn ${rano}`, async (err, res) => {
                                if(err) return enviar(`*Falha na conversao, Música possui copyright, baixe pelo comando ${prefix}play (nome da música ou link)*`)
                                var date = new Date()
                                let year = json_data.uploaded.includes('year') ? (await date.getFullYear() - json_data.uploaded.split(' ')[0]) : await date.getFullYear()
                                const writer = new ID3Writer(fs.readFileSync(rano))
                                await writer.setFrame('TIT2', json_data.title);
                                await writer.setFrame('TPE1', [json_data.artist,' Instalado por Estelar Orion'])
                                await writer.setFrame('TPE2', [json_data.artist +' * Instalado por Estelar Orion'])
                                await writer.setFrame('TALB', json_data.artist)
                                await writer.setFrame('TYER', year)
                                await writer.setFrame('APIC', {
                                    type: 3,
                                    data: await getBuffer(`https://i.ytimg.com/vi/${json_data.id}/hqdefault.jpg`),
                                    description: 'Instalado por Estelar Orion'
                                });
                                await writer.addTag();
                                const id3Buffer = Buffer.from(writer.arrayBuffer);
                                if(json_data.type =='aud') {
                                    await drezin.sendMessage(from, {
                                        audio: id3Buffer, 
                                        mimetype: 'audio/mpeg',
                                        contextInfo: {
                                            externalAdReply: {
                                                title: json_data.title,
                                                showAdAttribution: true,
                                                mediaType: 2,
                                                body: `Artista: ${json_data.artist} • Enviado há: ${json_data.uploaded}`,
                                                thumbnailUrl: `https://i.ytimg.com/vi/${json_data.id}/hqdefault.jpg`,
                                                mediaUrl: `https://youtu.be/${json_data.id}`
                                            }
                                        }
                                    })
                                } else if(json_data.type == 'doc') {
                                    await drezin.sendMessage(from, {
                                        document: id3Buffer, 
                                        mimetype: 'audio/mp3', 
                                        fileName: json_data.title+'.mp3'
                                    })
                                }
                                fs.unlinkSync(rano)
                                fs.unlinkSync(ran)
                            })

                        } else {
                            enviar('*⬇️ Baixando vídeo aguarde... ⬇️*')
                            let buff =  await (await fetch(json_data.dl_link)).buffer()
                            if(json_data.type == 'vid') {
                                drezin.sendMessage(from, {video: buff, mimetype: 'video/mp4', fileName: json_data.title+'.mp4'})
                            } else if(json_data.type == 'doc') {
                                drezin.sendMessage(from, {
                                    document: buff, 
                                    mimetype: 'video/mp4', 
                                    fileName: json_data.title+'.mp4'
                                })
                            }
                        }
                    } catch (e) {
                        console.log(e);
                        enviar('*Falha ao baixar música tente novamente*')
                    }
                    break 

                case 'snapnext':
                    if(!mek.message.listResponseMessage) return
                    if(args.length < 1) return
                    try {
                        teks = body.slice(10)
                        anu = await fetchJson(`https://api.brizaloka-api.tk/sociais/youtubesrc?apikey=brizaloka&query=${teks}`)
                        let rowsObj = []
                        for(let obj of anu.resultados) {
                            rowsObj.push({
                                title: obj.title, 
                                description: `Link: ${obj.link} • Duração: ${fmtMSS(obj.duration)}`,
                                rowId: `${prefix}snaptube ${obj.link}`,
                                type: 1
                            },)
                        }
                        drezin.sendMessage(from, {
                            text: 'Veja o titulo que deseja baixar',
                            title: '⬇️ Snaptube Search ⬇️',
                            footer: 'Clique no botão abaixo para ver os resultados:',
                            buttonText: `Resultados`,
                            sections: [{
                                title: 'Resultados',
                                rows: rowsObj
                            }]
                        })
                    } catch {
                        enviar('*Falha ao pesquisar*')
                    }
                    break

                case 'snaptube':
                case 'snap':
                    try {
                        if( args.length < 1) return enviar('*E o texto animal*')
                        enviar('*🔍Procurando Música via snaptube...🔎*')
                        teks =  command == 'snaptube' ? body.slice(10) : body.slice(6)
                        console.log(teks);
                        anu = await fetchJson(`https://api.brizaloka-api.tk/sociais/youtubesrc?apikey=brizaloka&query=${teks}`)
                        date = anu.resultados[0]
                        dated = `*Titulo: ${date.title}*\n*Link: ${date.link}*\n*Duração: ${(date.duration / 60).toFixed(2).toString().replace('.', ':')}*\n*Views: ${date.views}*\n*Canal: ${date.channel.name}*`
                        buff_music = await fetchJson(`https://api.snaptube.app/v1/video/details?url=${date.link}`)
                        var mp3 = []
                        var mp4 = []
                        for(let obj of buff_music.videoInfo.downloadInfoList) {
                            if(obj.formatExt == 'mp3') {
                                mp3.push({
                                    title: `Qualidade: ${obj.formatAlias} • Música`,
                                    description: `Tamanho: ${(obj.size / Math.pow(1024, 2)).toFixed(2)} MB`,
                                    rowId: `${prefix}snapdown {"uploaded": "${date.uploaded}", "artist": "${date.channel.name}", "title": "${date.title}", "id":"${date.id}", "type":"aud", "bytes":"${obj.size}", "format": "mp3", "dl_link":"${obj.partList[0].urlList[0]}"}`
                                },{
                                    title: `Qualidade: ${obj.formatAlias} • Documento`,
                                    description: `Tamanho: ${(obj.size / Math.pow(1024, 2)).toFixed(2)} MB`,
                                    rowId: `${prefix}snapdown {"uploaded": "${date.uploaded}", "artist": "${date.channel.name}", "title": "${date.title}", "id":"${date.id}", "type": "doc", "bytes":"${obj.size}", "format":"mp3", "dl_link":"${obj.partList[0].urlList[0]}"}`
                                })
                            } else if(obj.formatExt == 'mp4') {
                                mp4.push({
                                    title: `Qualidade: ${obj.formatAlias} • Vídeo`,
                                    description: `Tamanho: ${(obj.size / Math.pow(1024, 2)).toFixed(2)} MB`,
                                    rowId: `${prefix}snapdown {"uploaded": "${date.uploaded}", "artist": "${date.channel.name}", "title": "${date.title}", "id":"${date.id}", "type": "vid", "bytes":"${obj.size}", "format":"mp4", "dl_link":"${obj.partList[0].urlList[0]}"}`
                                },{
                                    title: `Qualidade: ${obj.formatAlias} • Documento`,
                                    description: `Tamanho: ${(obj.size / Math.pow(1024, 2)).toFixed(2)} MB`,
                                    rowId: `${prefix}snapdown {"uploaded": "${date.uploaded}", "artist": "${date.channel.name}", "title": "${date.title}", "id":"${date.id}", "type": "doc", "bytes":"${obj.size}", "format":"mp4", "dl_link":"${obj.partList[0].urlList[0]}"}`
                                })
                            }
                        }
                        thumb_buff = await getBuffer(buff_music.videoInfo.thumbnail)
                        await drezin.sendMessage(from, {
                            text: dated,
                            footer: 'Escolha a opção que deseja baixar:',
                            title: '⬇️ Snaptube Downloader ⬇️',
                            buttonText: 'Escolher formato',
                            sections: [{
                                title: 'Musica errada?',
                                rows: [{title: 'Proxima música ➡️', rowId: `${prefix}snapnext ${body.slice(10)}`}]
                            },{
                                title: 'Música • MP3',
                                rows: mp3
                            }, {
                                title: 'Vídeo • MP4',
                                rows: mp4
                            }]
                        })
                    } catch (e){
                        console.log(e)
                        enviar('*Música não encontrada*')
                    }
                    break

                case 'crashrank':
                    if(crashRank.length < 2) return enviar('Precisa de no mínimo 2 jogadores para o rank')
                    crashRank.sort((a, b) => b.media - a.media)
                    crashRankIds = []
                    for(let obj of crashRank) {
                        crashRankIds.push(obj.id)
                    }
                    teks = `*🏆 Lista dos melhores jogadores de crash 🏆*\n\n`
                    for(i=0;i < crashRank.length ; ++i) {
                        if(i == 0) teks += `🥇 ${i+1}º *${crashRank[i].pushname}*\n*Número: _${crashRank[i].id.split('@')[0]}_*\n*Vitórias: _${crashRank[i].wins}_*\n*Derrotas: _${crashRank[i].loses}_*\n\n`
                        else if(i == 1) teks += `🥈 ${i+1}º *${crashRank[i].pushname}*\n*Número: _${crashRank[i].id.split('@')[0]}_*\n*Vitórias: _${crashRank[i].wins}_*\n*Derrotas: _${crashRank[i].loses}_*\n\n`
                        else if(i == 2) teks += `🥉 ${i+1}º *${crashRank[i].pushname}*\n*Número: _${crashRank[i].id.split('@')[0]}_*\n*Vitórias: _${crashRank[i].wins}_*\n*Derrotas: _${crashRank[i].loses}_*\n\n`
                        else teks += `${i+1}º *${crashRank[i].pushname}*\n*Número: _${crashRank[i].id.split('@')[0]}_*\n*Vitórias: _${crashRank[i].wins}_*\n*Derrotas: _${crashRank[i].loses}_*\n\n`
                    }
                    enviar(teks)
                    break

                case 'doublerank':
                    if(doubleRank.length < 2) return enviar(`Precisa de no mínimo 2 jogadores para o rank`)
                    doubleRank.sort((a, b) => b.media - a.media)
                    doubleRankIds = []
                    for(let obj of doubleRank) {
                        doubleRankIds.push(obj.id)
                    }
                    teks = `*🏆 Lista dos melhores jogadores de double 🏆*\n\n`
                    for(i=0;i < doubleRank.length ; ++i) {
                        if(i == 0) teks += `🥇 ${i+1}º *${doubleRank[i].pushname}*\n*Número: _${doubleRank[i].id.split('@')[0]}_*\n*Vitórias: _${doubleRank[i].wins}_*\n*Derrotas: _${doubleRank[i].loses}_*\n\n`
                        else if(i == 1) teks += `🥈 ${i+1}º *${doubleRank[i].pushname}*\n*Número: _${doubleRank[i].id.split('@')[0]}_*\n*Vitórias: _${doubleRank[i].wins}_*\n*Derrotas: _${doubleRank[i].loses}_*\n\n`
                        else if(i == 2) teks += `🥉 ${i+1}º *${doubleRank[i].pushname}*\n*Número: _${doubleRank[i].id.split('@')[0]}_*\n*Vitórias: _${doubleRank[i].wins}_*\n*Derrotas: _${doubleRank[i].loses}_*\n\n`
                        else teks += `${i+1}º *${doubleRank[i].pushname}*\n*Número: _${doubleRank[i].id.split('@')[0]}_*\n*Vitórias: _${doubleRank[i].wins}_*\n*Derrotas: _${doubleRank[i].loses}_*\n\n`
                    }
                    enviar(teks)
                    break

                case 'doublestart':
                    if(isPlayDouble && !isGroup) return enviar('*Voce já apostou espere a partida terminar*')
                    if(isPlayDouble && isGroup) return enviar('*Para evitar confusão de mensagens no grupo, só uma pessoa pode apostar, caso não queira esperar aposte no privado*')
                    if(args.length < 1) return enviar('Diga a porcentagem que deseja apostar')
                    if(isNaN(args[0])) return enviar('Diga a porcentagem em apenas números')
                    if(parseInt(args[0]) >= 3) return enviar('Diga o número da cor correta')
                    if(!isDoubleRank) {
                        doubleRank.push({
                            pushname: pushname,
                            id: sender,
                            wins: 0,
                            loses: 0,
                            media: 0,
                        })
                        fs.writeFileSync('./src/database/double.json', JSON.stringify(doubleRank, null, 2))
                    }
                    double.push({
                        id: from,
                        player: sender,
                        color: parseInt(args[0]),
                        isInit: false,
                        isWaiting: false,
                        isDone: false,
                        isWebSocketInit: false
                    })
                    if(doubleSocket == null) {
                        enviar('*Iniciando websocket... ⏱️*')
                        doubleStart()
                    } else {
                        enviar('*Websocket já iniciado, encontrando partida... ⏱️*')
                    }
                    break
                case 'crashstart':
                    if(isPlayCrash && !isGroup) return enviar('*Voce já apostou espere a partida terminar*')
                    if(isPlayCrash && isGroup) return enviar('*Para evitar confusão de mensagens no grupo, só uma pessoa pode apostar, caso não queira esperar aposte no privado*')
                    if(args.length < 1) return enviar('Diga a porcentagem que deseja apostar')
                    if(isNaN(args[0])) return enviar('Diga a porcentagem em apenas números')
                    if(!isCrashRank) {
                        crashRank.push({
                            pushname: pushname,
                            id: sender,
                            wins: 0,
                            loses: 0,
                            media: 0,
                        })
                        fs.writeFileSync('./src/database/crash.json', JSON.stringify(crashRank, null, 2))
                    }
                    crash.push({
                        id: from,
                        porcent: parseInt(args[0]),
                        isInit: false,
                        isWaiting: false,
                        isDone: false,
                        isWebSocketInit: false
                    })
                    if(crashSocket == null) {
                        enviar('*Iniciando websocket... ⏱️*')
                        crashstart()
                    } else {
                        enviar('*Websocket já iniciado, encontrando partida... ⏱️*')
                    }
                    break

                case 'double':
                case 'doubleinit':
                    if(isPlayCrash && !isGroup) return enviar('*Voce já apostou espere a partida terminar*')
                    if(isPlayCrash && isGroup) return enviar('*Para evitar confusão de mensagens no grupo, só uma pessoa pode apostar, caso não queira esperar aposte no privado*')
                    rows = []
                    for(i=2;i<101;++i) rows.push({ title: `${i}%`, rowId: `${prefix}crashstart ` + i });
                    drezin.sendMessage(from , {
                        text: 'Aposte em uma cor e torça para que ganhe',
                        footer: 'Escolha a cor que deseja apostar',
                        title: 'Bem vindo ao jogo do double',
                        buttonText: 'Ver cores',
                        sections: [
                            {
                                title: 'Opções',
                                rows: [
                                    {title: '⚪ Branco 14x', description: 'Chances de ganhar 7%', rowId: `${prefix}doublestart 0`},
                                    {title: '⚫ Preto 2x', description: 'Chances de ganhar 46.5%', rowId: `${prefix}doublestart 2`},
                                    {title: '🔴 Vermelha 2x', description: 'Chances de ganhar 46.5%', rowId: `${prefix}doublestart 1`}
                                ]
                            }
                        ]
                    })
                    break

                case 'crash':
                case 'crashinit':
                    if(isPlayCrash && !isGroup) return enviar('*Voce já apostou espere a partida terminar*')
                    if(isPlayCrash && isGroup) return enviar('*Para evitar confusão de mensagens no grupo, só uma pessoa pode apostar, caso não queira esperar aposte no privado*')
                    rows = []
                    for(i=2;i<201;++i) rows.push({ title: `${i/2}%`, rowId: `${prefix}crashstart ` + i/2 });
                    drezin.sendMessage(from , {
                        text: 'Diga a porcentagem que vai aumentar?',
                        footer: 'Escolha a porcentagem que vai ser apostada',
                        title: 'Bem vindo ao jogo do crash',
                        buttonText: 'Ver opções',
                        sections: [
                            {
                                title: 'Opções',
                                rows: rows
                            }
                        ]
                    })
                    break

                case 'blaze':
                    drezin.sendMessage(from, {
                        text: 'Olá, seja bem-vindo aos jogos de aposta da blaze',
                        footer: 'Escolha que jogo deseja jogar: ',
                        title: 'Jogos de apostas Blaze',
                        buttonText: 'Mostrar jogos',
                        sections: [
                            {
                                title: 'Jogos de azar',
                                rows: [
                                    {title: 'Crash', description: 'Jogar crash na blaze', rowId: `${prefix}crash`},
                                    {title: 'Double', description: 'Jogar double na blaze', rowId: `${prefix}double`},
                                ]
                            },
                            {
                                title: 'Ranks',
                                rows: [
                                    {title: 'Rank do Crash', description: 'Ver os melhores jogadores de crash', rowId: `${prefix}crashrank`},
                                    {title: 'Rank do Double', description: 'Ver os melhores jogadores de double', rowId: `${prefix}doublerank`}
                                ]
                            }
                        ]
                    })
                    break

                case 'resetforca':
                    if(!isPlayForca) return enviar(`*Você não iniciou uma partida, para iniciar dê o comando ${prefix}jogodaforca*`)
                    pla_pos = allForcaId.indexOf(sender)
                    forca.splice(pla_pos, 1)
                    fs.writeFileSync('./src/database/forca.json', JSON.stringify(forca, null, 2))
                    enviar(`*Jogo da forca reiniciado com sucesso. Para iniciar outra partida dê o comando ${prefix}jogodaforca*`)
                    break

                case 'forca':
                    if(!isPlayForca) return enviar(`*Você não iniciou uma partida, para iniciar dê o comando ${prefix}jogodaforca*`)
                    if(args.length < 1) return enviar(`*Dê o comando mais a letra para advinhar*`)
                    if(args[0].trim().length < 2) {
                        p_pos = allForcaId.indexOf(sender)
                        find = forca[p_pos].word.match(args[0].toLowerCase())
                        is_correct = false 
                        while(find != null) {
                            res_tmp = forca[p_pos].word.indexOf(args[0].toLowerCase())
                            forca[p_pos].array_under_word[res_tmp] = args[0].toLowerCase()
                            forca[p_pos].array_word[res_tmp] = 0
                            forca[p_pos].word = forca[p_pos].word.replace(args[0].toLowerCase(), 0)
                            find = forca[p_pos].word.match(args[0].toLowerCase())
                            is_correct = true
                        }
                        if(is_correct) {
                            str_under = ''
                            for(i=0;i<forca[p_pos].array_under_word.length;++i) str_under += forca[p_pos].array_under_word[i]
                            attempts = forca[p_pos].attempts
                            if(str_under == forca[p_pos].word_original) {
                                enviar(`*Parabéns, Você venceu o jogo!✅🥳*\n\n${puppet[attempts]}\n\n_*Palavra: ${str_under.split('').join(' ')}*_`)
                                forca.splice(p_pos, 1)
                                fs.writeFileSync('./src/database/forca.json', JSON.stringify(forca, null, 2))
                            } else {
                                enviar(`*Você acertou!✅*\n\n${puppet[attempts]}\n\n_*Palavra: ${str_under.split('').join(' ')}*_\n*Você tem ${attempts} chances*`)
                                fs.writeFileSync('./src/database/forca.json', JSON.stringify(forca, null, 2))
                            }
                        } else  {
                            str_under = ''
                            for(i=0;i<forca[p_pos].array_under_word.length;++i) str_under += forca[p_pos].array_under_word[i]
                            forca[p_pos].attempts -= 1
                            attempts = forca[p_pos].attempts
                            if(forca[p_pos].attempts <= 0) {
                                forca.splice(p_pos, 1)
                                fs.writeFileSync('./src/database/forca.json', JSON.stringify(forca, null, 2))
                                enviar(`*Você perdeu o jogo!❌*\n\n${puppet[attempts]}\n\n*Palavra: ${str_under.split('').join(' ')}*\n*Suas chances se esgotaram*`)
                            } else {
                                enviar(`*Você errou!❌*\n\n${puppet[attempts]}\n\n*Palavra: ${str_under.split('').join(' ')}*\n*Você tem ${attempts} chances*`)
                                fs.writeFileSync('./src/database/forca.json', JSON.stringify(forca, null, 2))
                            }
                        }
                    } else {
                        p_pos = allForcaId.indexOf(sender)
                        if(forca[p_pos].word_original == args[0].toLowerCase()) {
                            attempts = forca[p_pos].attempts
                            enviar(`*Parabéns, Você venceu o jogo!✅🥳*\n\n${puppet[attempts]}\n\n_*Palavra: ${forca[p_pos].word_original.split('').join(' ')}*_`)
                            forca.splice(p_pos, 1)
                            fs.writeFileSync('./src/database/forca.json', JSON.stringify(forca, null, 2))
                        } else {
                            str_under = ''
                            for(i=0;i<forca[p_pos].array_under_word.length;++i) str_under += forca[p_pos].array_under_word[i]
                            forca[p_pos].attempts -= 1
                            attempts = forca[p_pos].attempts
                            if(forca[p_pos].attempts <= 0) {
                                forca.splice(p_pos, 1)
                                fs.writeFileSync('./src/database/forca.json', JSON.stringify(forca, null, 2))
                                enviar(`*Você perdeu o jogo!❌*\n\n${puppet[attempts]}\n\n*Palavra: ${str_under.split('').join(' ')}*\n*Suas chances se esgotaram*`)
                            } else {
                                enviar(`*Você errou!❌*\n\n${puppet[attempts]}\n\n*Palavra: ${str_under.split('').join(' ')}*\n*Você tem ${attempts} chances*`)
                                fs.writeFileSync('./src/database/forca.json', JSON.stringify(forca, null, 2))
                            }
                        }
                    }
                    break

                case 'jogodaforca':
                    if(isPlayForca) return enviar(`*Termine a partida iniciada para jogar uma nova, ou dê o comando ${p}resetforca*`)
                    word_correct = (await randompalavra()).slice(1).normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
                    under_word = '-'.repeat(word_correct.length)
                    forca.push({
                        id: sender,
                        word_original: word_correct,
                        word: word_correct,
                        under_word: under_word,
                        array_word: Array.from(word_correct),
                        array_under_word: Array.from(under_word),
                        tam: word_correct.length,
                        attempts: 6
                    })
                    fs.writeFileSync('./src/database/forca.json', JSON.stringify(forca, null, 2))
                    enviar(`*Jogo da forca iniciado!✅*\n\n*Palavra: ${under_word.split('').join(' ')}*\n*Para advinhar uma letra , dê o comando ${prefix}forca mais a letra*`)
                    break
                case 'blocklevel':
                    if(!isOwner) return enviar(mess.only.ownerB)
                    if(args.length < 1) return enviar('Diga 1 para ativar e 0 para desativar')
                    if(Number(args[0]) === 0) {
                        leveling_block.level_blocked = false
                        fs.writeFileSync('./src/database/level_block.json', JSON.stringify(leveling_block, null, 2))
                        enviar('*Sistema de níveis desbloqueado com sucesso!*')
                    } else if(Number(args[0]) === 1) {
                        leveling_block.level_blocked = true
                        fs.writeFileSync('./src/database/level_block.json', JSON.stringify(leveling_block, null, 2))
                        enviar('*Sistema de níveis bloqueado com sucesso!*')
                    } else return enviar('*Diga 1 para ativar e 0 para desativar*')
                    break
                
                case 'togif':
                    if ((isMedia && mek.message.videoMessage.seconds < 20 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 20)) {
                    const encmedia = isQuotedVideo ? mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : mek.message.videoMessage
                    media = getRandom('.'+(await getExtension(encmedia.mimetype)))
                    buff = await getFileBuffer(encmedia, 'video')
                    fs.writeFileSync(media, buff)
                        ran = getRandom('.mp4')
                        execute(`ffmpeg -i ${media} -fs 5M ${ran}`, async function(err, res){
                            if(err) return console.log(err)
                            drezin.sendMessage(from, {video: fs.readFileSync(ran), gifPlayback: true}, {quoted: mek})
                            fs.unlinkSync(media)	
                            fs.unlinkSync(ran)
                        })
                    } else if(isQuotedSticker){
                        const encmedia = isQuotedSticker ? mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage : mek.message.stickerMessage
                        rane = getRandom('.'+(await getExtension(encmedia.mimetype)))
                        buffimg = await getFileBuffer(encmedia, 'sticker')
                        console.log(rane);
                        await fs.writeFileSync(rane, buffimg)
                        const media = rane
                        link = await stickerForVideo(media)
                        setTimeout(async () => {
                            buff = await getBuffer(link)
                            await drezin.sendMessage(from, {video: buff, gifPlayback: true}, {quoted: mek})
                        }, 5000)
                        
                    } else {
                        enviar('*Diga as dimensões com largura e altura e o video tem que ter 20 segundo*')
                    }
                    break

                case 'add':
                    if(!isGroupAdmins) return enviar(mess.only.admin)
                    if(!isBotGroupAdmins) return enviar(mess.only.Badmin)
                    await enviar(`Adicionando ${args[0]} no grupo...`)
                    drezin.groupParticipantsUpdate(from, [args[0]+'@s.whatsapp.net'], 'add')
                break

                case 'resetaki':
                    if(akinator[0][from] && akinator[0][from].player != sender) return enviar('*Não é você que está jogando*')
                    akinator[0][from] = undefined
                    fs.writeFileSync('./src/database/akinator.json', JSON.stringify(akinator, null, 2))
                    buttons_opts = [
                        {buttonId: 'akinator sim', buttonText: {displayText: 'Sim'}, type: 1},
                        {buttonId: 'akinator nao', buttonText: {displayText: 'Não'}, type: 1},
                    ]
                    sendbuttonsMessage = {
                        text: `*Jogo reiniciado com sucesso! Deseja jogar outra partida*`,
                        footer: 'Sim ou não?',
                        buttons: buttons_opts,
                        headerType: 1
                    }
                    drezin.sendMessage(from, sendbuttonsMessage)
                    break

                case 'respaki':
                    if(!mek.message.listResponseMessage) return
                    if(akinator[0][from] && akinator[0][from].player != sender) return enviar('*Não é você que está jogando*')
                    if(args.length < 1) return
                    await akinator[0][from].game.step(args[0])
                    if(akinator[0][from].game.progress > 85) {
                        await akinator[0][from].game.win()
                        teks = `Por acaso seu personagem é ${akinator[0][from].game.answers[0].name}?`
                        buttons_opts = [
                            {buttonId: 'finaki sim', buttonText: {displayText: 'Sim'}, type: 1},
                            {buttonId: 'finaki nao', buttonText: {displayText: 'Não'}, type: 1},
                        ]
                        sendbuttonsMessage = {
                            image: {url: akinator[0][from].game.answers[0].absolute_picture_path},
                            caption: `Já sei!\n\n${teks}`,
                            footer: 'Sim ou não?',
                            buttons: buttons_opts,
                            headerType: 1
                        }
                        drezin.sendMessage(from, sendbuttonsMessage)
                    } else {
                        listMessage = {
                            text: akinator[0][from].game.question,
                            buttonText: 'Mostrar opções',
                            title: "Pergunta",
                            sections: [{
                                title: 'Opções',
                                rows: [{
                                    rowId: `${prefix}respaki 0`,
                                    title: 'Sim',
                                    description: ''
                                },
                                {
                                    rowId: `${prefix}respaki 1`,
                                    title: 'Não',
                                    description: ''
                                },{
                                    rowId: `${prefix}respaki 2`,
                                    title: 'Não sei',
                                    description: ''
                                },{
                                    rowId: `${prefix}respaki 3`,
                                    title: 'Provavelmente sim',
                                    description: ''
                                },
                                {
                                    rowId: `${prefix}respaki 4`,
                                    title: 'Provavelmente não',
                                    description: ''
                                }]
                            }]
                        }
                        drezin.sendMessage(from, listMessage)
                    }
                break

                case 'akinator':
                    buttons_opts = [
                        {buttonId: 'akinator sim', buttonText: {displayText: 'Sim'}, type: 1},
                        {buttonId: 'akinator nao', buttonText: {displayText: 'Não'}, type: 1},
                    ]
                    sendbuttonsMessage = {
                        text: "Olá, sou o akinator",
                        footerText: 'Vamos jogar um jogo?',
                        buttons: buttons_opts,
                        headerType: 1
                    }
                    drezin.sendMessage(from, sendbuttonsMessage)
                    break

                case 'randomship':
                    try{
                        buff = await getBuffer('https://arqaparecida.org.br/assets/img/arq_noticia/282.jpg')
                        if(!isGroup) return enviar(mess.only.group)
                        r1 = Math.floor(Math.random() * groupMetadata.participants.length + 0)
                        r2 = Math.floor(Math.random() * groupMetadata.participants.length + 0)
                        if(args.length < 1) {
                            drezin.sendMessage(from, {text: `*Pesquisando quem é a alma gêmea do @${groupMembers[r1].jid.slice(0, -15)}...*`, mentions: [groupMembers[r1].jid]})
                            setTimeout(async function () {
                                drezin.sendMessage(from, {image: buff, caption: `*✅ Consegui achar a alma gêmea do @${groupMembers[r1].jid.slice(0, -15)} ✅*\n 
    *De acordo com meus cálculos altamente precisos, a pessoa que combina com @${groupMembers[r1].jid.slice(0, -15)} é: @${groupMembers[r2].jid.slice(0, -15)}*`, mentions: [groupMembers[r1].jid, groupMembers[r2].jid]})
                            }, 3000)
                        
                        }
                        else {
                            num1 = args[0]
                            if(!isNaN(num1.slice(1)))
                            {
                                if(num1.startsWith('@')) {num1 = num1.slice(1)+'@s.whatsapp.net'}
                                else return('Número não encontrado')
                            }
                            else return enviar('Marque um Numero')
                            drezin.sendMessage(from, {text: `*Pesquisando quem é a alma gêmea do @${num1.slice(0, -15)} ...*`, mentions: [num1]})
                            setTimeout(async function () {
                                drezin.sendMessage(from, {image: buff, caption: `*✅ Consegui achar a alma gêmea do @${num1.slice(0, -15)} ✅*\n 
    *De acordo com meus cálculos altamente precisos, a pessoa que combina com @${num1.slice(0, -15)} é: @${groupMembers[r2].jid.slice(0, -15)}*`, mentions: [num1, groupMembers[r2].jid]})
                            }, 3000)
                        }
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'gay':
                    try {
                        buff = await getBuffer('https://www.economiasc.com/wp-content/uploads/2020/08/kit-2-bandeiras-gls-gay-lgbt-arco-iris-150m-x-090m-D_NQ_NP_819487-MLB28709953300_112018-F.jpg')
                    r = Math.floor(Math.random() * 100 + 0)
                    if(args.length < 1) {
                        if(isGroup) { num1 = mek.participant.slice(0, -15)+'@s.whatsapp.net'}
                        else{ num1 = mek.key.remoteJid.slice(0, -15)+'@s.whatsapp.net'}
                    }
                    else { num1 = args[0] 
                        if(!isNaN(num1.slice(1)))
                        {
                            if(num1.startsWith('@')) {num1 = num1.slice(1)+'@s.whatsapp.net'}
                        }
                    }
                    if(num1.slice(0, -15) == '') { num1 = num1+'@s.whatsapp.net'}
                    drezin.sendMessage(from, {text: `*⌛Puxando a ficha do @${num1.slice(0, -15)}, aguarde...⌛*`, mentions: [num1]})
                    setTimeout(async function () {
                        if(r == 0) return drezin.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} não é gay*\n*mas talvez você seja 🤨`, mentions: [num1]})
                        if(r > 0 && r <= 33) return drezin.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} é ${r}% gay*\n*perdeu o bv com o amigo*`, mentions: [num1]})
                        if(r > 33 && r <= 66) return drezin.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} é ${r}% gay*\n*ta devendo 50 pro traveco 🤣🤣*`, mentions: [num1]})
                        if(r > 66 && r <= 100) return drezin.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} é ${r}% gay*\n*da o butico por 5 conto pra pagar o agiota 🤣🤣*`, mentions: [num1]})
                    }, 3000)
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'comunista':
                    try {
                        buff = await getBuffer('https://conscienciapopularlivre.files.wordpress.com/2019/03/stalin.png?w=1101')
                        r = Math.floor(Math.random() * 100 + 0)
                    if(args.length < 1) {
                        if(isGroup) { num1 = mek.participant.slice(0, -15)+'@s.whatsapp.net'}
                        else{ num1 = mek.key.remoteJid.slice(0, -15)+'@s.whatsapp.net'}
                    }
                    else { num1 = args[0] 
                        if(!isNaN(num1.slice(1)))
                        {
                            if(num1.startsWith('@')) {num1 = num1.slice(1)+'@s.whatsapp.net'}
                        }
                    }
                    if(num1.slice(0, -15) == '') { num1 = num1+'@s.whatsapp.net'}
                    drezin.sendMessage(from, {text: `*⌛Puxando a ficha do @${num1.slice(0, -15)}, aguarde...⌛*`, mentions: [num1]})
                    setTimeout(async function () {
                        if(r > 0 && r <= 33) return drezin.sendMessage(from, {image: buff, caption: `*☭O @${num1.slice(0, -15)} é ${r}% comunista☭*\n*Passa fome o dia todo*`, mentions: [num1]})
                        if(r > 33 && r <= 66) return drezin.sendMessage(from, {image: buff, caption: `*☭O @${num1.slice(0, -15)} é ${r}% comunista☭*\n*Troca vodka invés de água*`, mentions: [num1]})
                        if(r > 66 && r <= 100) return drezin.sendMessage(from, {image: buff, caption: `*☭O @${num1.slice(0, -15)} é ${r}% comunista☭*\n*Manda os amigos pro gulag*`, mentions: [num1]})
                    }, 3000)
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'nazista':
                    try {
                        buff = await getBuffer('https://i.imgur.com/Dk8p21B.jpeg')
                        r = Math.floor(Math.random() * 100 + 0)
                    if(args.length < 1) {
                        if(isGroup) { num1 = mek.participant.slice(0, -15)+'@s.whatsapp.net'}
                        else{ num1 = mek.key.remoteJid.slice(0, -15)+'@s.whatsapp.net'}
                    }
                    else { num1 = args[0] 
                        if(!isNaN(num1.slice(1)))
                        {
                            if(num1.startsWith('@')) {num1 = num1.slice(1)+'@s.whatsapp.net'}
                        }
                    }
                    if(num1.slice(0, -15) == '') { num1 = num1+'@s.whatsapp.net'}
                    drezin.sendMessage(from, {text: `*⌛Puxando a ficha do @${num1.slice(0, -15)}, aguarde...⌛*`, mentions: [num1]})
                    setTimeout(async function () {
                        if(r > 0 && r <= 33) return drezin.sendMessage(from, {image: buff, caption: `*卐 O @${num1.slice(0, -15)} é ${r}% nazista 卐*\n*humilha o amiguinho judeu na escola*`, mentions: [num1]})
                        if(r > 33 && r <= 66) return drezin.sendMessage(from, {image: buff, caption: `*卐 O @${num1.slice(0, -15)} é ${r}% nazista 卐*\n*Tá em 5 gps nazistas no wpp*`, mentions: [num1]})
                        if(r > 66 && r <= 100) return drezin.sendMessage(from, {image: buff, caption: `*卐 O @${num1.slice(0, -15)} é ${r}% nazista 卐*\n*Já tem uma vaga no inferno*`, mentions: [num1]})
                    }, 3000)
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'corno':
                    try {
                    buff= await getBuffer('http://www.clicrbs.com.br/blog/fotos/129960post_foto.jpg')
                    r = Math.floor(Math.random() * 100 + 0)
                    if(args.length < 1) {
                        if(isGroup) { num1 = mek.participant.slice(0, -15)+'@s.whatsapp.net'}
                        else{ num1 = mek.key.remoteJid.slice(0, -15)+'@s.whatsapp.net'}
                    }
                    else { num1 = args[0] 
                        if(!isNaN(num1.slice(1)))
                        {
                            if(num1.startsWith('@')) {num1 = num1.slice(1)+'@s.whatsapp.net'}
                        }
                    }
                    if(num1.slice(0, -15) == '') { num1 = num1+'@s.whatsapp.net'}
                    drezin.sendMessage(from, {text: `*⌛Puxando a ficha do @${num1.slice(0, -15)}, aguarde...⌛*`, mentions: [num1]})
                    setTimeout(async function () {
                        if(num1.includes(OriginalOwner)) return enviar('*Meu criador não é corno*\n*Mas pelo oq eu vi aq os dados me dizem ao contrário sobre você🤨*')
                        if(r == 0) return drezin.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} não é corno*\n*mas talvez você seja 🤨`, mentions: [num1]})
                        if(r > 0 && r <= 33) return drezin.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} é ${r}% corno*\n*jogador de free fire*`, mentions: [num1]})
                        if(r > 33 && r <= 66) return drezin.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} é ${r}% corno*\n*1km de chifre kkkkkkk*`, mentions: [num1]})
                        if(r > 66 && r <= 100) return drezin.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} é ${r}% corno*\n*pesca satélite com o chifre é? kkkkk🤣🤣*`, mentions: [num1]})
                    }, 3000)
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'seudia':
                        try {
                        buff= await getBuffer('https://tudoparaum.files.wordpress.com/2013/05/sunrise-beach_00251139.jpg')
                        r = Math.floor(Math.random() * 100 + 0)
                        if(args.length < 1) {
                            if(isGroup) { num1 = mek.participant.slice(0, -15)+'@s.whatsapp.net'}
                            else{ num1 = mek.key.remoteJid.slice(0, -15)+'@s.whatsapp.net'}
                        }
                        else { num1 = args[0] 
                            if(!isNaN(num1.slice(1)))
                            {
                                if(num1.startsWith('@')) {num1 = num1.slice(1)+'@s.whatsapp.net'}
                            }
                        }
                        if(num1.slice(0, -15) == '') { num1 = num1+'@s.whatsapp.net'}
                        drezin.sendMessage(from, {text: `*⌛Puxando a ficha do @${num1.slice(0, -15)}, aguarde...⌛*`, mentions: [num1]})
                        setTimeout(async function () {
                            if(r == 0) return drezin.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} não tem chances de ter um bom dia*`, mentions: [num1]})
                            if(r > 0 && r <= 33) return drezin.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} tem ${r}% de chances de o seu dia ser bom*\n*A sorte n é pra tds amigo*`, mentions: [num1]})
                            if(r > 33 && r <= 40) return drezin.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} tem ${r}% de chances de o seu dia ser bom*\n*Eh algo de ruim ainda pode acontecer*`, mentions: [num1]})
                            if(r > 40 && r <= 66) return drezin.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} tem ${r}% de chances de o seu dia ser bom*\n*Boa chance de ter um bom dia*`, mentions: [num1]})
                            if(r > 66 && r <= 100) return drezin.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} tem ${r}% de chances de o seu dia ser bom*\n*Tenha um ótimo dia amigo*`, mentions: [num1]})
                        }, 3000)
                        } catch {
                            enviar(resp.erro)
                        }
                    break
                
                case 'bv':
                        try {
                        buff = await getBuffer('https://cdn.olhares.com/client/files/foto/big/493/4931645.jpg')
                        r = Math.floor(Math.random() * 100 + 0)
                        if(args.length < 1) {
                            if(isGroup) { num1 = mek.participant.slice(0, -15)+'@s.whatsapp.net'}
                            else{ num1 = mek.key.remoteJid.slice(0, -15)+'@s.whatsapp.net'}
                        }
                        else { num1 = args[0] 
                            if(!isNaN(num1.slice(1)))
                            {
                                if(num1.startsWith('@')) {num1 = num1.slice(1)+'@s.whatsapp.net'}
                            }
                        }
                        if(num1.slice(0, -15) == '') { num1 = num1+'@s.whatsapp.net'}
                        drezin.sendMessage(from, {text: `*⌛Puxando a ficha do @${num1.slice(0, -15)}, aguarde...⌛*`, mentions: [num1]})
                        setTimeout(async function () {
                            if(r == 0) return drezin.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} não tem chances de perder o bv*`, mentions: [num1]})
                            if(r > 0 && r <= 33) return drezin.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} tem ${r}% de chances de perder o bv*\n*Ainda e pequeno 🤣🤣 *`, mentions: [num1]})
                            if(r > 33 && r <= 40) return drezin.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} tem ${r}% de chances de perder o bv*\n*Mediana*`, mentions: [num1]})
                            if(r > 40 && r <= 66) return drezin.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} tem ${r}% de chances de perder o bv*\n*Tem uma boa chance de perder ein 🙃*`, mentions: [num1]})
                            if(r > 66 && r <= 100) return drezin.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} tem ${r}% de chances de perder o bv*\n*Falta pouco amigo com paciência tu consegue 😎*` , mentions: [num1]})
                        }, 3000)
                        } catch {
                            enviar(resp.erro)
                        }
                    break

                case 'gado':
                    try {
                    buff= await getBuffer('https://cdn.brasildefato.com.br/media/96db3810e29d6d33206f14bd7ec5ebeb.jpg')
                    r = Math.floor(Math.random() * 100 + 0)
                    if(args.length < 1) {
                        if(isGroup) { num1 = mek.participant.slice(0, -15)+'@s.whatsapp.net'}
                        else{ num1 = mek.key.remoteJid.slice(0, -15)+'@s.whatsapp.net'}
                    }
                    else { num1 = args[0] 
                        if(!isNaN(num1.slice(1)))
                        {
                            if(num1.startsWith('@')) {num1 = num1.slice(1)+'@s.whatsapp.net'}
                        }
                    }
                    if(num1.slice(0, -15) == '') { num1 = num1+'@s.whatsapp.net'}
                    drezin.sendMessage(from, {text: `*⌛Puxando a ficha do @${num1.slice(0, -15)}, aguarde...⌛*`, mentions: [num1]})
                    setTimeout(async function () {
                        if(r == 0) return drezin.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} não é gado*\n*mas talvez você seja 🤨`, mentions: [num1]})
                        if(r > 0 && r <= 33) return drezin.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} é ${r}% gado*\n*o que fala "ela é diferente poh"*`, mentions: [num1]})
                        if(r > 33 && r <= 66) return drezin.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} é ${r}% gado*\n*comprou água de banho da belle delphine ksksksk*`, mentions: [num1]})
                        if(r > 66 && r <= 100) return drezin.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} é ${r}% gado*\n*esse aí gastou todo o auxílio em pack do pé kkkkkk🤣🤣*`, mentions: [num1]})
                    }, 3000)
                    } catch {
                        enviar(resp.erro)
                    }
                     break

                    case 'gostosa':
                    case 'gostoso':
                        try {
                        buff = await getBuffer('https://vozdabahia.com.br/wp-content/uploads/2020/06/1_mia2-9308495.jpg')
                        r = Math.floor(Math.random() * 100 + 0)
                        if(args.length < 1) {
                            if(isGroup) { num1 = mek.participant.slice(0, -15)+'@s.whatsapp.net'}
                            else{ num1 = mek.key.remoteJid.slice(0, -15)+'@s.whatsapp.net'}
                        }
                        else { num1 = args[0] 
                            if(!isNaN(num1.slice(1)))
                            {
                                if(num1.startsWith('@')) {num1 = num1.slice(1)+'@s.whatsapp.net'}
                            }
                        }
                        if(num1.slice(0, -15) == '') { num1 = num1+'@s.whatsapp.net'}
                        drezin.sendMessage(from, {text: `*⌛Puxando a ficha do @${num1.slice(0, -15)}, aguarde...⌛*`, mentions: [num1]})
                        setTimeout(async function () {
                            if(r == 0) return drezin.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} parece que pegou fogo e foi apagado com gasolina kkkkkkkk, tu é mt feio em neguin kkkkkk*`, mentions: [num1]})
                            if(r > 0 && r <= 33) return drezin.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} é ${r}% gostoso(a)*\n*Tão feio que pra dar role com os amigos(as), eles tem que falar com a mãe "Seu jorge por favor me empresta o dragão" 🤣🤣*`, mentions: [num1]})
                            if(r > 33 && r <= 40) return drezin.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} é ${r}% gostoso(a)*\n*Parece mais um sirigueijo, um caranguejo amassado kkkkkkkk*`, mentions: [num1]})
                            if(r > 40 && r <= 66) return drezin.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} é ${r}% gostoso(a)*\n*Bonitinho você ein 😳👉👈*`, mentions: [num1]})
                            if(r > 66 && r <= 100) return drezin.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} é ${r}% gostoso(a)*\n*Passa o zap o-onii-chan 😳👉👈*`, mentions: [num1]})
                        }, 3000)
                        } catch {
                            enviar(resp.erro)
                        }
                        break

                    case 'qi':
                        try {
                        buff = await getBuffer('https://www.saudebusiness.com/sites/saudebusiness.com/files/styles/article_featured_retina/public/uploads/2016/01/alberteinstein.jpg')
                        r = Math.floor(Math.random() * 100 + 0)
                        if(args.length < 1) {
                            if(isGroup) { num1 = mek.participant.slice(0, -15)+'@s.whatsapp.net'}
                            else{ num1 = mek.key.remoteJid.slice(0, -15)+'@s.whatsapp.net'}
                        }
                        else { num1 = args[0] 
                            if(!isNaN(num1.slice(1)))
                            {
                                if(num1.startsWith('@')) {num1 = num1.slice(1)+'@s.whatsapp.net'}
                            }
                        }
                        if(num1.slice(0, -15) == '') { num1 = num1+'@s.whatsapp.net'}
                        drezin.sendMessage(from, {text: `*⌛Puxando a ficha do @${num1.slice(0, -15)}, aguarde...⌛*`, mentions: [num1]})
                        setTimeout(async function () {
                            if(r == 0) return drezin.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} tem apenas 2 neurônios*`, mentions: [num1]})
                            if(r > 0 && r <= 33) return drezin.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} tem ${r} de QI*\n*Burro pra klr kkkkkk 🤣🤣🤣*`, mentions: [num1]})
                            if(r > 33 && r <= 40) return drezin.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} tem ${r} de QI*\n*Passa de ano arrastado*`, mentions: [num1]})
                            if(r > 40 && r <= 66) return drezin.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} tem ${r} de QI*\n*Tira maior que 6 no boletim*`, mentions: [num1]})
                            if(r > 66 && r <= 100) return drezin.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} tem ${r} de QI*\n*Um novo Einstein*`, mentions: [num1]})
                        }, 3000)
                        } catch {
                            enviar(resp.erro)
                        }
                        break

                    case 'feio':
                        try {
                        buff = await getBuffer('https://imageproxy.ifunny.co/crop:x-20,resize:640x,quality:90x75/images/5d110052411408c78d2e670395d5e27aabcf9ab5815ff670acd9af359309b777_1.jpg')
                        r = Math.floor(Math.random() * 100 + 0)
                        if(args.length < 1) {
                            if(isGroup) { num1 = mek.participant.slice(0, -15)+'@s.whatsapp.net'}
                            else{ num1 = mek.key.remoteJid.slice(0, -15)+'@s.whatsapp.net'}
                        }
                        else { num1 = args[0] 
                            if(!isNaN(num1.slice(1)))
                            {
                                if(num1.startsWith('@')) {num1 = num1.slice(1)+'@s.whatsapp.net'}
                            }
                        }
                        if(num1.slice(0, -15) == '') { num1 = num1+'@s.whatsapp.net'}
                        drezin.sendMessage(from, {text: `*⌛Puxando a ficha do @${num1.slice(0, -15)}, aguarde...⌛*`, mentions: [num1]})
                        setTimeout(async function () {
                            if(r == 0) return drezin.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} não é feio, sorte da porra*`, mentions: [num1]})
                            if(r > 0 && r <= 33) return drezin.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} é ${r}% feio(a)*\n*Eh ta média...*`, mentions: [num1]})
                            if(r > 33 && r <= 40) return drezin.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} é ${r}% feio(a)*\n*nem todos nascem bonitos né*`, mentions: [num1]})
                            if(r > 40 && r <= 66) return drezin.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} é ${r}% feio(a)*\n*Parece um cão chupando manga kkkkkkkk*`, mentions: [num1]})
                            if(r > 66 && r <= 100) return drezin.sendMessage(from, {image: buff, caption: `*O @${num1.slice(0, -15)} é ${r}% feio(a)*\n*Cara feia do klr parece um dinossaro kkkkkkkkkkkkk*`, mentions: [num1]})
                        }, 3000)
                        } catch {
                            enviar(resp.erro)
                        }
                        break

                case 'ship':
                    try {
                    buff = await getBuffer('https://arqaparecida.org.br/assets/img/arq_noticia/282.jpg')
                    r = Math.floor(Math.random() * 100 + 0)
                    if(args.length < 1) enviar('*ATA, AGORA É POSSÍVEL SHIPAR FANTASMAS*')
                    if(args.length< 2) enviar('*NINGUÉM MERECER SER SHIPADO SOZINHO NÉ*')
                    num1 = args[0]
                    if(!isNaN(num1.slice(1)))
                    {
                        if(num1.startsWith('@')) {num1 = num1.slice(1)+'@s.whatsapp.net'}
                    }
                    if(num1.slice(0, -15) == '') { num1 = num1+'@s.whatsapp.net'}

                    num2 = args[1]
                    if(!isNaN(num2.slice(1)))
                    {
                        if(num2.startsWith('@')) {num2 = num2.slice(1)+'@s.whatsapp.net'}
                    }
                    if(num2.slice(0, -15) == '') { num2 = num2+'@s.whatsapp.net'}
                    enviar('*⌛Buscando dados na máquina do tempo, aguarde...⌛*')
                    setTimeout(async function(){
                        drezin.sendMessage(from, {image: buff, caption: `✅ *RESULTADOS OBTIDOS* ✅\n*CHANCES DE NAMORO ENTRE @${num1.slice(0, -15)} E @${num2.slice(0, -15)}* \n*SÃO DE: ${r}%*`,  mentions: [num1, num2]})
                    }, 3000)
                    } catch {
                        enviar(resp.erro)
                        }
                    break

                case 'ytsrcmp4':
                    teks = body.slice(10)
                    anu = await fetchJson(`https://api.brizaloka-api.tk/sociais/youtubesrc?apikey=brizaloka&query=${teks}`)
                    obj_yt = []
                    for(i=0;i< anu.resultados.length; ++i) {
                        let data = {
                            rowId: `${prefix}playmp4 `+ anu.resultados[i].title,
                            title: `${prefix}playmp4`,
                            description: anu.resultados[i].title
                        }
                        obj_yt.push(data)
                    }
                    butt = {
                        title: "✅ Músicas encotradas ✅",
                        buttonText: "Mostra lista de músicas",
                        text: `Palavra chave: ${teks}`,
                        listType: 1,
                        sections: [
                            {
                                title: "Músicas relacionadas",
                                rows: obj_yt
                            }
                        ]
                    }
                    drezin.sendMessage(from, butt) 
                    break

                case 'ytsrc':
                    teks = body.slice(7)
                    anu = await fetchJson(`https://api.brizaloka-api.tk/sociais/youtubesrc?apikey=brizaloka&query=${teks}`)
                    const objs = []
                    for(i=0;i< anu.resultados.length; ++i) {
                        let data = {
                            rowId: `${prefix}play `+ anu.resultados[i].title,
                            title: `${prefix}play`,
                            description: anu.resultados[i].title
                        }
                        objs.push(data)
                    }
                    const list = {
                        title: "✅ Músicas encotradas ✅",
                        buttonText: "Mostra lista de músicas",
                        description: `Palavra chave: ${teks}`,
                        listType: 1,
                        sections: [
                            {
                                title: "Músicas relacionadas",
                                rows: objs
                            }
                        ]
                    }
                    drezin.sendMessage(from, list)
                    break

                case 'sociais':
                    enviar(redes_sociais)
                    break
                case 'assinar':
                    if(isContrated) return enviar('*Caro amigo, Você já possui um contrato comigo*')
                    if(args[0].length < 1) return enviar('*Você está brincando comigo senhor? Você não escreveu nada*')
                    teks = body.slice(9)
                    if(teks.split('|').length < 1) return enviar('*Você esqueceu de escrever seu nome senhor*')
                    if(teks.split('|').length < 2) return enviar('*Você esqueceu de escrever sua idade senhor*')
                    gb1 = teks.split('|')[0].trim()
                    gb2 = teks.split('|')[1].trim()
                    if(isNaN(gb2)) return enviar('*Sem infantilidade meu caro amigo, sua idade agora tem letras?*')
                    contratos.push({
                        jid: sender,
                        name: gb1,
                        idade: gb2
                    })
                    fs.writeFileSync('./src/database/contratos.json', JSON.stringify(contratos, null, 2))
                    buff = await getBuffer('https://drive.google.com/uc?export=download&id=1OscQOCetMNgtAnRjTAJ0-2YdM2ghEN8P')
                    drezin.sendMessage(from, {video: buff, caption: `*Obrigado por ter assinado o contrato @${sender.split('@')[0]}, pode contar comigo a qualquer momento, só me chamar qnd precisar*`, gifPlayback: true}, {quoted: mek})
                    break

                case 'cassino':
                    enviar('*🎰Girando a roleta...🎰*')
                    r1 = Math.floor(Math.random() * cassinov.length + 0)
                    r2 = Math.floor(Math.random() * cassinov.length + 0)
                    r3 = Math.floor(Math.random() * cassinov.length + 0)
                    setTimeout(async function () {
                        if(r1 <= 2) {
                            teks = `*🎰 Roleta girada ✅ 🎰*\n\n${cassinov[r1]}\n${cassinov[r2]}\n${cassinov[r3]}\n\n*✅ Você ganhou!! ✅*\n*🥳👏 Parabéns 👏🥳*`
                            enviar(teks)
                        } 
                        else if(r2 <= 2) {
                            teks = `*🎰 Roleta girada ✅ 🎰*\n\n${cassinov[r1]}\n${cassinov[r2]}\n${cassinov[r3]}\n\n*✅ Você ganhou!! ✅*\n*🥳👏 Parabéns 👏🥳*`
                            enviar(teks)
                        }
                        else if(r3 <= 2) {
                            teks = `*🎰 Roleta girada ✅ 🎰*\n\n${cassinov[r1]}\n${cassinov[r2]}\n${cassinov[r3]}\n\n*✅ Você ganhou!! ✅*\n*🥳👏 Parabéns 👏🥳*`
                            enviar(teks)
                        }
                        else {
                            teks = `*🎰 Roleta girada ✅ 🎰*\n\n${cassinov[r1]}\n${cassinov[r2]}\n${cassinov[r3]}\n\n*❌ Você perdeu!! ❌*\n*😭🥺Que penaaa 🥺😭*`
                            enviar(teks)
                        }
                    }, 3000)
                    break

                case 'papel':
                        ran = Math.floor(Math.random() * 2 + 0)
                        if(ran == 2) return enviar('*📜 Papel. Empate 😐*')
                        if(ran == 1) return enviar('*✂️ Tesoura. Você perdeu 😜*')
                        if(ran == 0) return enviar('*🪨 Pedra. Você ganhou 😩*')
                    break

                    case 'pedra':
                        ran = Math.floor(Math.random() * 2 + 0)
                        if(ran == 2) return enviar('*📜 Papel. Você perdeu 😜*')
                        if(ran == 1) return enviar('*✂️ Tesoura. Você ganhou 😩*')
                        if(ran == 0) return enviar('*🪨 Pedra. Empate 😐*')
                    break

                    case 'tesoura':
                        ran = Math.floor(Math.random() * 2 + 0)
                        if(ran == 2) return enviar('*📜 Papel. Você ganhou 😩*')
                        if(ran == 1) return enviar('*✂️ Tesoura. Empate 😐*')
                        if(ran == 0) return enviar('*🪨 Pedra. Você perdeu 😜*')
                    break

                case 'ytmp3':
                    try{
                        if(args.length < 1) return enviar('CADE O LINK ANIMAL')
                        if(!args[0].match(p)) return enviar('❌ Isso não é um link do youtube ❌')
                        enviar('*Aguarde estou procurando o link...*')
                        anumusic = await new Youtube().ytmp3(args[0])
                        enviar('*⬇️ Baixando áudio ⬇️*')
                        buff = await getBuffer(anumusic.dl_link)
                        ran = getRandom('.mp3')
                        enviar('*🥳🥳 Download completo, enviando... 🥳🥳*')
                        await drezin.sendMessage(from, {audio: buff, mimetype: 'audio/mpeg'}, {quoted: mek})
                    } catch(e) {
                        console.log(e)
                        enviar('Error')
                    }
                    break

                case 'ytmp4':
                    try{
                        if(args.length < 1) return enviar('CADE O LINK ANIMAL')
                        if(!args[0].match(p)) return enviar('❌ Isso não é um link do youtube ❌')
                        enviar('*Aguarde estou procurando o link...*')
                        anumusic = await new Youtube().ytmp4(args[0])
                        enviar('*⬇️ Baixando vídeo ⬇️*')
                        buff = await getBuffer(anumusic.dl_link)
                        enviar('*🥳🥳 Download completo, enviando... 🥳🥳*')
                        drezin.sendMessage(from, {video: buff, mimetype: 'video/mp4'}, {quoted: mek})
                    } catch (e){
                        console.log(e)
                        enviar('Error')
                    }
                    break

                case 'tomp3':
                    try {
                    if (!isQuotedVideo) return enviar('❌ APENAS VIDEOS SENHOR ❌')
                    const encmedia = isQuotedVideo ? mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : mek.message.videoMessage
                    media = getRandom('.'+getExtension(encmedia.mimetype))
                    buff = getFileBuffer(encmedia, 'video')
                    fs.writeFileSync(media, buff)
                    ran = getRandom('.mp3')
                    exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                        fs.unlinkSync(media)
                        if (err) return enviar('❌ Falha ao converter video em audio ❌')
                        buffer = fs.readFileSync(ran)
                        drezin.sendMessage(from, {audio: buffer}, {quoted: mek})
                        fs.unlinkSync(ran)
                    })
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'playv2':
                    try {
                        if( args.length < 1) return enviar('*E o texto animal*')
                        enviar('*🔍Procurando Música aguarde🔎*')
                        teks = body.slice(8)
                        anu = await fetchJson(`https://api.brizaloka-api.tk/sociais/youtubesrc?apikey=brizaloka&query=${teks}`)
                        date = anu.resultados[0]
                        dated = `*✅ Música encontrada ✅*\n*Titulo: ${date.title}*\n*Link: ${date.link}*\n*Duração: ${date.duration} segs*\n*Views: ${date.views}segs*\n*Canal:${date.channel.name}*`
                        buff = await getBuffer(date.thumbnail)
                        await drezin.sendMessage(from, {image: buff, caption: dated})
                        var dur = date.duration
                        if(dur > 360) return enviar('*Apenas músicas com 6 minutos de duração*')
                        enviar('*⬇️ Baixando música ⬇️*')
                        try {
                            ytDownlodMp3(date.link).then(async res => {
                                buffmusic = await getBuffer(res.url)
                                drezin.sendMessage(from, {audio: buffmusic, mimetype: 'audio/mpeg'})
                            })
                            
                        }
                        catch {
                            enviar('*❌ Falha ao baixar áudio ❌*')
                        }
                    } catch (e){
                        console.log(e)
                        enviar('Error')
                    }
                    break

                case 'pmp4':
                case 'playmp4':
                    try {
                        if( args.length < 1) return enviar('*E o texto animal*')
                        enviar('*🔍Procurando Música aguarde🔎*')
                        teks = body.slice(6)
                        anu = await fetchJson(`https://api.brizaloka-api.tk/sociais/youtubesrc?apikey=brizaloka&query=${teks}`)
                        date = anu.resultados[0]
                        dated = `*✅ Música encontrada ✅*\n*Titulo: ${date.title}*\n*Link: ${date.link}*\n*Duração: ${date.duration} segs*\n*Views: ${date.views}segs*\n*Canal:${date.channel.name}*`
                        buff = await getBuffer(date.thumbnail)
                        var dur = date.duration
                        if(dur > 360) return enviar('*Desculpe-me senhor pois apenas é aceito 6 minutos de duração*')
                        await drezin.sendMessage(from, {
                            image: buff, 
                            caption: dated, 
                            footer: 'Escolha o formato que deseja ser enviado: ', 
                            headerType: 1, buttons: [
                                {buttonId: `ytmp4 doc ${date.link} ${date.channel.name}`, buttonText: {displayText: '📄 Documento'}, type: 1},
                                {buttonId: `ytmp4 vid ${date.link} ${date.channel.name}`, buttonText: {displayText: '🎬︎ Vídeo'}, type: 1}
                            ]}
                        , {quoted: mek})
                    } catch (e){
                        console.log(e)
                        enviar('Error tente novamente')
                    }
                    break

                case 'p':
                case 'play':
                    try {
                        if( args.length < 1) return enviar('*E o texto animal*')
                        enviar('*🔍Procurando Música aguarde🔎*')
                        teks = body.slice(6)
                        anu = await fetchJson(`https://api.brizaloka-api.tk/sociais/youtubesrc?apikey=brizaloka&query=${teks}`)
                        date = anu.resultados[0]
                        dated = `*✅ Música encontrada ✅*\n*Titulo: ${date.title}*\n*Link: ${date.link}*\n*Duração: ${date.duration} segs*\n*Views: ${date.views}segs*\n*Canal:${date.channel.name}*`
                        buff = await getBuffer(date.thumbnail)
                        var dur = date.duration
                        if(dur > 360) return enviar('*Desculpe-me senhor pois apenas é aceito 6 minutos de duração*')
                        await drezin.sendMessage(from, {
                            image: buff, 
                            caption: dated, 
                            footer: 'Escolha o formato que deseja ser enviado:', 
                            headerType: 1, buttons: [
                                {buttonId: `ytmp3 doc ${date.link} ${date.channel.name}`, buttonText: {displayText: '📄 Documento'}, type: 1},
                                {buttonId: `ytmp3 aud ${date.link} ${date.channel.name}`, buttonText: {displayText: '🎵 Áudio'}, type: 1}
                            ]}
                        , {quoted: mek})
                    } catch (e){
                        console.log(e)
                        enviar('Error tente novamente')
                    }
                    break

                case 'playmp4':
                    try {
                        if( args.length < 1) return enviar('*E o texto animal*')
                        enviar('*🔍Procurando Vídeo aguarde🔎*')
                        teks = body.slice(8)
                        anu = await fetchJson(`https://api.brizaloka-api.tk/sociais/youtubesrc?apikey=brizaloka&query=${teks}`)
                        date = anu.resultados[0]
                        dated = `*✅ Música encontrada ✅*\n*Titulo: ${date.title}*\n*Link: ${date.link}*\n*Duração: ${date.duration} segs*\n*Views: ${date.views}segs*\n*Canal:${date.channel.name}*`
                        buff = await getBuffer(date.thumbnail)
                        await drezin.sendMessage(from, {image: buff, caption: dated}, {quoted: mek})
                        var dur = date.duration
                        if(dur > 360) return enviar('*Desculpe-me senhor pois apenas é aceito 6 minutos de duração*')
                        enviar('*⬇️ Baixando vídeo ⬇️*')
                        try {
                            anumusic = await ytv(date.link, false)
                            buffmusic = await getBuffer(anumusic.dl_link)
                            drezin.sendMessage(from, {video: buffmusic, mimetype: 'video/mp4'}, {quoted: mek})
                        }
                        catch {
                            enviar('*❌ Falha ao baixar áudio ❌*')
                        }
                    } catch (e){
                        console.log(e)
                        enviar('Error tente com playv2')
                    }
                    break

                case 'lyrics':
                    try {
                    enviar(mess.wait)
                    teks = body.slice(8)
                    anu = await fetchJson(`https://api.brizaloka-api.tk/ia/lyricsfinder?apikey=brizaloka&query=${teks}`, {method: 'get'})
                    enviar(`*Nome da música: ${teks}*\n*Letras: ${anu.lyrics}*`)
                    } catch (e) {
                        console.log(e)
                        enviar(resp.erro)
                    }
                    break

                case 'ptlyrics':
                    try {
                    enviar(mess.wait)
                    teks = body.slice(10)
                    anu = await fetchJson(`https://api.brizaloka-api.tk/ia/lyricsfinder?apikey=brizaloka&query=${teks}`, {method: 'get'})
                    dated = `*Nome da música: ${teks}*\n*Letras:*\n*${anu.lyrics}*`
                    translate(dated, {to: 'pt'}).then(res => {
                        enviar(res.text)
                    }).catch (err => {
                        enviar(resp.erro)
                    })
                    } catch (e) {
                        console.log(e)
                        enviar(resp.erro)
                    }
                    break

                case 'gtts':
                    try {
                    if (args.length < 1) return drezin.sendMessage(from, {text: 'CADE A PRR DO CODIGO DO IDIOMA???'}, {quoted: mek})
                    const gtts = require('./lib/gtts')(args[0])
                    if (args.length < 2) return drezin.sendMessage(from, {text: 'CADE A PRR DO TEXTO'}, {quoted: mek})
                    dtt = body.slice(9)
                    ranm = getRandom('.mp3')
                    rano = getRandom('.ogg')
                    dtt.length > 600
                    ? enviar('QUER ESCREVER A BIBLIA KLR??')
                    : gtts.save(ranm, dtt, function() {
                        exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
                            fs.unlinkSync(ranm)
                            buff = fs.readFileSync(rano)
                            if (err) return enviar('Falhou:(')
                            drezin.sendMessage(from, {audio: buff, pttAudio: true}, {quoted: mek})
                            fs.unlinkSync(rano)
                        })
                    })
                    } catch (e) {
                        console.log(e);
                        enviar(resp.erro)
                    }
                    break

                case 'eroneko':
                    try {
                        if (isNsfw) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/eroneko?apikey=brizaloka')
                                drezin.sendMessage(from, {image: buffer}, {quoted: mek})
                            }
                            catch{
                                enviar(resp.erro)
                            }
                        }
                        else if(!isGroup) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/eroneko?apikey=brizaloka')
                                drezin.sendMessage(from, {image: buffer}, {quoted: mek})
                            }
                            catch{
                                enviar(resp.erro)
                            }
                        }
                        else return enviar('❌Somente PV e com o nsfw ativado❌')

                    } catch (e) {
                        console.log(`Error :`, color(e,'red'))
                        enviar(' *ERROR* ')
                    }
                    break

                case 'spank':
                    try {
                        if (isNsfw) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/spank?apikey=brizaloka')
                                drezin.sendMessage(from, {image: buffer}, image, {quoted: mek})
                            }
                            catch{
                                enviar(resp.erro)
                            }
                        }
                        else if(!isGroup) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/erokitsune?apikey=brizaloka')
                                drezin.sendMessage(from, {image: buffer}, image, {quoted: mek})
                            }
                            catch{
                                enviar(resp.erro)
                            }
                        }
                        else return enviar('❌Somente PV e com o nsfw ativado❌')

                    } catch (e) {
                        console.log(`Error :`, color(e,'red'))
                        enviar(' *ERROR* ')
                    }
                    break

                case 'eroyuri':
                    try {
                        if (isNsfw) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/eroyuri?apikey=brizaloka')
                                drezin.sendMessage(from, {image: buffer}, image, {quoted: mek})
                            }
                            catch{
                                enviar(resp.erro)
                            }
                        }
                        else if(!isGroup) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/eroyuri?apikey=brizaloka')
                                drezin.sendMessage(from, {image: buffer}, {quoted: mek})
                            }
                            catch{
                                enviar(resp.erro)
                            }
                        }
                        else return enviar('❌Somente PV e com o nsfw ativado❌')

                    } catch (e) {
                        console.log(`Error :`, color(e,'red'))
                        enviar(' *ERROR* ')
                    }
                    break

                case 'erokitsune':
                    try {
                        if (isNsfw) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/erokitsune?apikey=brizaloka')
                                drezin.sendMessage(from, {image: buffer}, {quoted: mek})
                            }
                            catch{
                                enviar(resp.erro)
                            }
                        }
                        else if(!isGroup) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/erokitsune?apikey=brizaloka')
                                drezin.sendMessage(from, {image: buffer}, {quoted: mek})
                            }
                            catch{
                                enviar(resp.erro)
                            }
                        }
                        else return enviar('❌Somente PV e com o nsfw ativado❌')

                    } catch (e) {
                        console.log(`Error :`, color(e,'red'))
                        enviar(' *ERROR* ')
                    }
                    break

                case 'lesbian':
                    try {
                        if (isNsfw) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/lesbian?apikey=brizaloka')
                                drezin.sendMessage(from, {image: buffer}, {quoted: mek})
                            }
                            catch{
                                enviar(resp.erro)
                            }
                        }
                        else if(!isGroup) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/lesbian?apikey=brizaloka')
                                drezin.sendMessage(from, {image: buffer}, {quoted: mek})
                            }
                            catch{
                                enviar(resp.erro)
                            }
                        }
                        else return enviar('❌Somente PV e com o nsfw ativado❌')

                    } catch (e) {
                        console.log(`Error :`, color(e,'red'))
                        enviar(' *ERROR* ')
                    }
                    break

                case 'girlmasturbategif':
                    try {
                        if (isNsfw) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/girlsologif?apikey=brizaloka')
                                ran = getRandom('.gif')
                                rano = getRandom('.mp4')
                                fs.writeFileSync(ran, buffer)
                                execute(`ffmpeg -i ${ran} -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ${rano}`, async function() {
                                    await drezin.sendMessage(from, fs.readFileSync(rano), video, {quoted: mek, mimetype: Mimetype.gif, caption: 'Nada melhor que hentai animado :)'})
                                    fs.unlinkSync(ran)
                                    fs.unlinkSync(rano)
                                    
                                })
                                
                            }
                            catch{
                                enviar(resp.erro)
                            }
                        }
                        else if(!isGroup) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/girlsologif?apikey=brizaloka')
                                drezin.sendMessage(from, {video: buffer, gifPlayback: true}, {quoted: mek})
                            }
                            catch{
                                enviar(resp.erro)
                            }
                        }
                        else return enviar('❌Somente PV e com o nsfw ativado❌')

                    } catch (e) {
                        console.log(`Error :`, color(e,'red'))
                        enviar(' *ERROR* ')
                    }
                    break

                case 'girlmasturbate':
                    try {
                        if (isNsfw) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/girlsolo?apikey=brizaloka')
                                drezin.sendMessage(from, {image: buffer}, {quoted: mek})
                            }
                            catch{
                                enviar(resp.erro)
                            }
                        }
                        else if(!isGroup) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/girlsolo?apikey=brizaloka')
                                drezin.sendMessage(from, {image: buffer}, {quoted: mek})
                            }
                            catch{
                                enviar(resp.erro)
                            }
                        }
                        else return enviar('❌Somente PV e com o nsfw ativado❌')

                    } catch (e) {
                        console.log(`Error :`, color(e,'red'))
                        enviar(' *ERROR* ')
                    }
                    break

                case 'nsfwfeetgif':
                    try {
                        if (isNsfw) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/feetgif?apikey=brizaloka')
                                drezin.sendMessage(from, {video: buffer}, {quoted: mek})
                            }
                            catch{
                                enviar(resp.erro)
                            }
                        }
                        else if(!isGroup) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/feetgif?apikey=brizaloka')
                                drezin.sendMessage(from, {video: buffer}, {quoted: mek})
                            }
                            catch{
                                enviar(resp.erro)
                            }
                        }
                        else return enviar('❌Somente PV e com o nsfw ativado❌')

                    } catch (e) {
                        console.log(`Error :`, color(e,'red'))
                        enviar(' *ERROR* ')
                    }
                    break

                case 'nsfwfeet':
                    try {
                        if (isNsfw) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/feet?apikey=brizaloka')
                                drezin.sendMessage(from, {image: buffer}, image, {quoted: mek})
                            }
                            catch{
                                enviar(resp.erro)
                            }
                        }
                        else if(!isGroup) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/feet?apikey=brizaloka')
                                drezin.sendMessage(from, {image: buffer}, image, {quoted: mek})
                            }
                            catch{
                                enviar(resp.erro)
                            }
                        }
                        else return enviar('❌Somente PV e com o nsfw ativado❌')

                    } catch (e) {
                        console.log(`Error :`, color(e,'red'))
                        enviar(' *ERROR* ')
                    }
                     break

                case 'futanari':
                    if (isNsfw)
                    {
                        buff = await getBuffer('https://api.brizaloka-api.tk/random/hentai/futanari?apikey=brizaloka')
                        drezin.sendMessage(from, {image: buff}, {quoted: mek})
                    }
                    else if (!isGroup)
                    {
                        buff = await getBuffer('https://api.brizaloka-api.tk/random/hentai/futanari?apikey=brizaloka')
                        drezin.sendMessage(from, {image: buff}, {quoted: mek})
                    }
                    else return enviar('❌Somente PV e com o nsfw ativado❌')
                    break

                case 'hentainekogif':
                    buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/nsfwnekogif?apikey=brizaloka')
                    ran = getRandom('.gif')
                    rano = getRandom('.mp4')
                    try {
                        if(isNsfw) {
                            fs.writeFileSync(ran, buffer)
                            execute(`ffmpeg -i ${ran} -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ${rano}`, async function () {
                                await drezin.sendMessage(from, {video: fs.readFileSync(rano), gifPlayback: true}, {quoted: mek})
                                fs.unlinkSync(ran)
                                fs.unlinkSync(rano)
                                
                            })
                        } else if(!isGroup) {
                            fs.writeFileSync(ran, buffer)
                            execute(`ffmpeg -i ${ran} -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ${rano}`, async function () {
                                await drezin.sendMessage(from, {video: fs.readFileSync(rano), gifPlayback: true}, {quoted: mek})
                                fs.unlinkSync(ran)
                                fs.unlinkSync(rano)
                            })
                        } else return enviar('❌Somente PV e com o nsfw ativado❌')
                    }
                    catch (e) {
                        enviar(resp.erro)
                    }
                    break

                case 'yuri':
                    try {
                        if (isNsfw)
                        {
                            buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/yuri?apikey=brizaloka')
                            drezin.sendMessage(from, {image: buffer,  caption: 'Pelo visto o senhor(a) curte desejos homossexuais'}, {quoted: mek})
                        }
                        else if (!isGroup)
                        {
                            buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/yuri?apikey=brizaloka')
                            drezin.sendMessage(from, {image: buffer,  caption: 'Pelo visto o senhor(a) curte desejos homossexuais'}, {quoted: mek})
                        }
                        else return enviar('❌Somente PV e com o nsfw ativado❌')
                    } catch (e) {
                        console.log(`Error :`, color(e,'red'))
                        enviar(' *ERROR* ')
                    }
                    break

                case 'cum':
                    buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/cumarts?apikey=brizaloka')
                    ran = getRandom('.gif')
                    rano = getRandom('.mp4')
                    try {
                        if(isNsfw) {
                            fs.writeFileSync(ran, buffer)
                            execute(`ffmpeg -i ${ran} -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ${rano}`, async function () {
                                await drezin.sendMessage(from, {video: fs.readFileSync(rano), gifPlayback: true}, {quoted: mek})
                                fs.unlinkSync(ran)
                                fs.unlinkSync(rano)
                            })
                        } else if(!isGroup) {
                            fs.writeFileSync(ran, buffer)
                            execute(`ffmpeg -i ${ran} -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ${rano}`, async function () {
                                await drezin.sendMessage(from, {video: fs.readFileSync(rano), gifPlayback: true}, {quoted: mek})
                                fs.unlinkSync(ran)
                                fs.unlinkSync(rano)		
                            })
                        } else return enviar('❌Somente PV e com o nsfw ativado❌')
                    }
                    catch (e) {
                        enviar(resp.erro)
                    }
                    break

                case 'anal':
                    try {
                        if (isNsfw)
                        {
                            buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/anal?apikey=brizaloka')
                            drezin.sendMessage(from, {image: buffer}, {quoted: mek, caption: 'Fetiches meios estranhos que o senhor(a) tem'})
                        }
                        else if (!isGroup)
                        {
                            buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/anal?apikey=brizaloka')
                            drezin.sendMessage(from, {image: buffer}, {quoted: mek, caption: 'Fetiches meios estranhos que o senhor(a) tem'})
                        }
                        else return enviar('❌Somente PV e com o nsfw ativado❌')
                    } catch (e) {
                        console.log(`Error :`, color(e,'red'))
                        enviar(' *ERROR* ')
                    }
                    break

                case 'nsfwtrap':
                    try {
                        if (isNsfw) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/trap?apikey=brizaloka')
                                drezin.sendMessage(from, {image: buffer, caption: 'O senhor(a) tem fetiche por homems afeminados?'}, {quoted: mek})
                            }
                            catch{
                                enviar(resp.erro)
                            }
                        }
                        else if(!isGroup) {
                            try{
                                buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/trap?apikey=brizaloka')
                                drezin.sendMessage(from, {image: buffer, caption: 'O senhor(a) tem fetiche por homems afeminados?'}, {quoted: mek})
                            }
                            catch{
                                enviar(resp.erro)
                            }
                        }
                        else return enviar('❌Somente PV e com o nsfw ativado❌')

                    } catch (e) {
                        console.log(`Error :`, color(e,'red'))
                        enviar(' *ERROR* ')
                    }
                    break

                case 'nsfwneko':
                    try {
                        if (isNsfw) {
                            try{
                            buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/eroneko?apikey=brizaloka')
                            drezin.sendMessage(from, {image: buffer, caption: 'Você tem fetiches de animais humanizados? Te vejo no inferno senhor'}, {quoted: mek})
                            }
                            catch{
                                enviar(resp.erro)
                            }
                        }
                        else if(!isGroup)
                        {
                            try{
                            buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/eroneko?apikey=brizaloka')
                            drezin.sendMessage(from, {image: buffer, caption: 'Você tem fetiches de animais humanizados? Te vejo no inferno senhor'}, {quoted: mek})
                            }
                            catch{
                                enviar(resp.erro)
                            }
                        }
                        else return enviar('❌Somente PV e com o nsfw ativado❌')
                    } catch (e) {
                        console.log(`Error :`, color(e,'red'))
                        enviar(' *ERROR* ')
                    }
                    break

                case 'nsfwblowjob':
                    try {
                    if (isNsfw)
                    {
                        buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/bj?apikey=brizaloka')
                        ran = getRandom('.gif')
                        rano = getRandom('.mp4')
                        try {
                            fs.writeFileSync(ran, buffer)
                            execute(`ffmpeg -i ${ran} -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ${rano}`, async function() {
                                await drezin.sendMessage(from, {video: fs.readFileSync(rano), gifPlayback: true, caption: 'Você tem desejos bem estranhos senhor'}, {quoted: mek})
                                fs.unlinkSync(ran)
                                fs.unlinkSync(rano)
                            })
                        }
                        catch (e) {
                            enviar(resp.erro)
                        }
                    }
                    else if(!isGroup) {
                        buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/bj?apikey=brizaloka')
                        ran = getRandom('.gif')
                        rano = getRandom('.mp4')
                        try {
                            fs.writeFileSync(ran, buffer)
                            execute(`ffmpeg -i ${ran} -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ${rano}`, async function() {
                                await drezin.sendMessage(from, {video: fs.readFileSync(rano), gifPlayback: true, caption: 'Você tem desejos bem estranhos senhor'}, {quoted: mek})
                                fs.unlinkSync(ran)
                                fs.unlinkSync(rano)
                            })
                        }
                        catch (e) {
                            enviar(resp.erro)
                        }
                    }
                    else return enviar('❌Somente PV e com o nsfw ativado❌')
                    } catch {
                        enviar(resp.erro)
                    }
                     break

                case 'randomhentai':
                    try {
                        if (isNsfw)
                        {
                            buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/hentai?apikey=brizaloka')
                            drezin.sendMessage(from, {image: buffer, caption: 'Vejo que o senhor tem desejos depravados'}, {quoted: mek})
                        }
                        else if (!isGroup)
                        {
                            buffer = await getBuffer('https://api.brizaloka-api.tk/random/hentai/hentai?apikey=brizaloka')
                            drezin.sendMessage(from, {image: buffer, caption: 'Vejo que o senhor tem desejos depravados'}, {quoted: mek})
                        }
                        else return enviar('❌Somente PV e com o nsfw ativado❌')
                    } catch (e) {
                        console.log(`Error :`, color(e,'red'))
                        enviar(' *ERROR* ')
                    }
                    break

                case 'nsfw':
                    try {
                        if (!isGroup) return enviar(mess.only.group)
                        if (!isGroupAdmins) return enviar(mess.only.admin)
                        if (args.length < 1) return enviar('E pra ativar ou n klr?')
                        if (Number(args[0]) === 1) {
                            if(isNsfw) return enviar('Ja esta ativo')
                            nsfw.push(from)
                            fs.writeFileSync('./src/database/nsfw.json', JSON.stringify(nsfw))
                            enviar('O modo nsfw foi ativado!')
                        }
                        else if (Number(args[0]) === 0) {
                            nsfw.splice(from, 1)
                            fs.writeFileSync('./src/database/nsfw.json', JSON.stringify(nsfw))
                            enviar('O modo nsfw foi desativado!')
                        }
                        else {
                            enviar('1 pra ativar e 0 pra desativar')
                        }
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'delttc':
                    if (!isGroup) return enviar(mess.only.group)
                    if (!isTTT) return enviar('Não há jogos neste grupo')
                    naa = ky_ttt.filter(toek => !toek.id.includes(from))
                    ky_ttt = naa
                    enviar('✅ Jogo reiniciado com sucesso meu caro senhor! ✅')
                    break

                case 'tttplayer':
                    if (!isGroup) return enviar(mess.only.group)
                    if (args.length < 1) return enviar('Marque o oponente que deseja jogar!')
                    if (isTTT) return enviar('Há um jogo neste grupo, por favor aguarde')
                    if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return enviar('Marque o oponente que deseja jogar!')
                    ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    player1 = sender
                    player2 = ment[0]
                    angka = ["0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"]
                    id = from
                    gilir = player2
                    ky_ttt.push({
                        player1,
                        player2,
                        id,
                        angka,
                        gilir
                    })
                    drezin.sendMessage(from,
                        {text: `*🎳 Duelo de Tic Tac Toe iniciado 🎲*

    @${player1.split('@')[0]} desafiou @${player2.split('@')[0]} para uma partida de tictactoe🔥

    @${player2.split('@')[0]} Você aceita o desafio Y(sim) N(não)

    Obs : Escreva ${prefix}delttt para reiniciar a partida`, mentions: [player2, player1]}, {
                            quoted: mek
                        })
                    break

                case 'ttthelp':
                    drezin.sendMessage(from, {text: ttthelp(prefix)}, {quoted: mek})
                break

                case 'tttme':
                    if (!isGroup) return enviar(mess.only.group)
                    const checkTTTIdMe = getTTTId(sender)
                    if (checkTTTIdMe === undefined) addTTTId(sender)
                    drezin.sendMessage(from, {text: tttme(sender.split('@')[0], getTTTwins(sender), getTTTdefeats(sender), getTTTties(sender), getTTTpoints(sender))}, {quoted:mek})
                break

                case 'tttrank':
                    if (!isGroup) return enviar(mess.only.group)
                    tictactoe.sort((a, b) => (a.points < b.points) ? 1 : -1)
                    mentioned_jid = []
                    let board = '*🔥Ranking dos melhores players🔥*\n\n'
                    try {
                    for (let i = 0; i < 3; i++) {
                        if (i == 0) {board += `${i + 1}º 🥇 : @${tictactoe[i].jid.split('@')[0]}\n➻❥ *Ganhou: ${tictactoe[i].wins}*\n➻❥ *Perdeu: ${tictactoe[i].defeats}*\n➻❥ *Empates: ${tictactoe[i].ties}*\n*➻❥ Pontuação: ${tictactoe[i].points}*\n\n`
                        } else if (i == 1) {board += `${i + 1}º 🥈 : @${tictactoe[i].jid.split('@')[0]}\n➻❥ *Ganhou: ${tictactoe[i].wins}*\n➻❥ *Perdeu: ${tictactoe[i].defeats}*\n➻❥ *Empates: ${tictactoe[i].ties}*\n*➻❥ Pontuação: ${tictactoe[i].points}*\n\n`
                        } else if (i == 2) {board += `${i + 1}º 🥉 : @${tictactoe[i].jid.split('@')[0]}\n➻❥ *Ganhou: ${tictactoe[i].wins}*\n➻❥ *Perdeu: ${tictactoe[i].defeats}*\n➻❥ *Empates: ${tictactoe[i].ties}*\n*➻❥ Pontuação: ${tictactoe[i].points}*\n\n`
                        }
                        mentioned_jid.push(tictactoe[i].jid)
                        } 
                        mentions(board, mentioned_jid, true)
                        } catch (err) {
                        console.log(err)
                        await drezin.sendMessage(from, {text: `*É necessário 3 jogadores para se construir um ranking*`}, {quoted: mek})
                    }
                break

                case 'coord':
                    tttset.playertest = sender
                    if (!isGroup) {
                    enviar(ptbr.group())
                    } else if (tttset.tttstatus == "off") {
                    enviar(`*O jogo não foi iniciado*\n*Digite ${prefix}ttt <dificukdade> para iniciar*`)
                    } else if (tttset.player != tttset.playertest) {
                    enviar(`*O jogo já foi iniciado por outro player, aguarde ele terminar...*`)
                    } else if (tttset.tttantibug == "on") {
                    enviar(`Aguarde a ação anterior ser concluída...`)
                    } else {
                    tttset.tttantibug = "on"
                    const coordX = args
                    if (coordX != 'a1' && coordX != 'a2' && coordX != 'a3' &&
                    coordX != 'b1' && coordX != 'b2' && coordX != 'b3' &&
                    coordX != 'c1' && coordX != 'c2' && coordX != 'c3') {
                    enviar(`*Diga a cordenada*\nExemplo: ${prefix}coord a1`)
                    tttset.tttantibug = "off"
                    } else {
                    switch (args[0]) {
                    case 'a1':
                    if (esp.a1 != "🔲") {
                        enviar('*Esse espaço ja foi marcado, tente outro')
                    } else {
                    esp.a1 = "❌"
                    while (tttset.reActivate1 == "on") {
                    IA()
                    }
                    }
                    break

                    case 'a2':
                    if (esp.a2 != "🔲") {
                        enviar('*Esse espaço ja foi marcado, tente outro')
                    } else {
                    esp.a2 = "❌"
                    while (tttset.reActivate1 == "on") {
                    IA()
                    }
                    }
                    break

                    case 'a3':
                    if (esp.a3 != "🔲") {
                        enviar('*Esse espaço ja foi marcado, tente outro')
                    } else {
                    esp.a3 = "❌"
                    while (tttset.reActivate1 == "on") {
                    IA()
                    }
                    }
                    break

                    case 'b1':
                    if (esp.b1 != "🔲") {
                        enviar('*Esse espaço ja foi marcado, tente outro')
                    } else {
                    esp.b1 = "❌"
                    while (tttset.reActivate1 == "on") {
                    IA()
                    }
                    }
                    break

                    case 'b2':
                    if (esp.b2 != "🔲") {
                        enviar('*Esse espaço ja foi marcado, tente outro')
                    } else {
                    esp.b2 = "❌"
                    while (tttset.reActivate1 == "on") {
                    IA()
                    }
                    }
                    break

                    case 'b3':
                    if (esp.b3 != "🔲") {
                        enviar('*Esse espaço ja foi marcado, tente outro')
                    } else {
                    esp.b3 = "❌"
                    while (tttset.reActivate1 == "on") {
                    IA()
                    }
                    }
                    break

                    case 'c1':
                    if (esp.c1 != "🔲") {
                        enviar('*Esse espaço ja foi marcado, tente outro')
                    } else {
                    esp.c1 = "❌"
                    while (tttset.reActivate1 == "on") {
                    IA()
                    }
                    }
                    break

                    case 'c2':
                    if (esp.c2 != "🔲") {
                    enviar('*Esse espaço ja foi marcado, tente outro')
                    } else {
                    esp.c2 = "❌"
                    while (tttset.reActivate1 == "on") {
                    IA()
                    }
                    }
                    break

                    case 'c3':
                    if (esp.c3 != "🔲") {
                    enviar('*Esse espaço ja foi marcado, tente outro')
                    } else {
                    esp.c3 = "❌"
                    while (tttset.reActivate1 == "on") {
                    IA()
                    }
                    }
                    break
                }
                tttset.reActivate1 = "on"
                enviar(`🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`)
                var randomTTTXP = 0
                if (WinnerX()) {
                if (isCmd) {
                switch (tttset.tttdifficulty) {
                    
                    case "EASY":
                    randomTTTXP = Math.floor(Math.random() * 25) + 25
                    addLevelingXp(tttset.player, randomTTTXP)
                    break

                    case "NORMAL":
                    randomTTTXP = Math.floor(Math.random() * 75) + 75
                    addLevelingXp(tttset.player, randomTTTXP)
                    break

                    case "HARD":
                    randomTTTXP = Math.floor(Math.random() * 200) + 200
                    addLevelingXp(tttset.player, randomTTTXP)
                    break

                    case "IMPOSSIBLE":
                    randomTTTXP = Math.floor(Math.random() * 1000) + 1000
                    addLevelingXp(tttset.player, randomTTTXP)
                    break

                    }
                    drezin.sendMessage(from, {text: `*VOCÊ VENCEU, PARABENS*\n\n *VOCÊ GANHOU ${randomTTTXP}XP*`})
                    } else {
                    drezin.sendMessage(from,{text: `*VOCÊ VENCEU, PARABENS*`},)
                    }
                    const currentTTTwins = getTTTwins(tttset.player)
                    const checkTTTIdWin = getTTTId(tttset.player)
                    if (currentTTTwins === undefined && checkTTTIdWin === undefined) addTTTId(tttset.player)
                    addTTTwin(tttset.player, 1)
                    addTTTpoints(tttset.player, randomTTTXP)
                    esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
                    esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
                    esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
                    tttset.tttstatus = "off"
                    tttset.waitingTime = "on"
                    } else if (WinnerO()) {
                    if (isCmd) {
                    switch (tttset.tttdifficulty) {
                        
                        case "EASY":
                        randomTTTXP = 0 - (Math.floor(Math.random() * 200) + 200)
                        addLevelingXp(tttset.player, randomTTTXP)
                        break

                        case "NORMAL":
                        randomTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
                        addLevelingXp(tttset.player, randomTTTXP)
                        break

                        case "HARD":
                        randomTTTXP = 0 - (Math.floor(Math.random() * 25) + 25)
                        addLevelingXp(tttset.player, randomTTTXP)
                        break

                        case "IMPOSSIBLE":
                        randomTTTXP = 0
                        addLevelingXp(tttset.player, randomTTTXP)
                        break
                    
                    }	
                    drezin.sendMessage(from, {text: `*Você perdeu*\n\n AGORA VC PAGARÁ: ${randomTTTXP}XP`})
                    } else {
                    drezin.sendMessage(from, {text: `*Você perdeu*`})
                    }
                    const currentTTTdefeats = getTTTdefeats(tttset.player)
                    const checkTTTIdDefeat = getTTTId(tttset.player)
                    if (currentTTTdefeats === undefined && checkTTTIdDefeat === undefined) addTTTId(tttset.player)
                    addTTTdefeat(tttset.player, 1)
                    addTTTpoints(tttset.player, randomTTTXP)
                    esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
                    esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
                    esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
                    tttset.tttstatus = "off"
                    tttset.waitingTime = "on"
                    } else if (Tie()) {
                    if (isCmd) {
                    drezin.sendMessage(from, {text: `*JOGO EMPATADO, NÃO HOUVE PERDAR*`})
                    } else {
                    drezin.sendMessage(from, {text: `*JOGO, EMPATADO, TENHA UM BOM DIA*`})
                    }
                    const currentTTTties = getTTTties(tttset.player)
                    const checkTTTIdTie = getTTTId(tttset.player)
                    if (currentTTTties === undefined && checkTTTIdTie === undefined) addTTTId(tttset.player)
                    addTTTtie(tttset.player, 1)
                    esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
                    esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
                    esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
                    tttset.tttstatus = "off"
                    tttset.waitingTime = "on"
                    }
                    tttset.tttantibug = "off"
                    }
                    }
                    break

                case 'ttt':				
                    if (!isGroup) {
                        enviar(mess.only.group)
                    } else if (tttset.tttstatus == "on") {
                        enviar(`*O jogo já foi iniciado por outro player, aguarde ele terminar...*`)
                    } else if (tttset.waitingTime == "on") {
                        enviar(`*Aguarde a ação anterior ser concluída...*`)
                    } else if (args == 0 || (args != 'easy' && args != 'Easy' && args != 'EASY' && args != 'normal' && args != 'Normal' && args != 'NORMAL' && args != 'hard' && args != 'Hard' && args != 'HARD'&& args != 'impossible'&& args != 'Impossible' && args != 'IMPOSSIBLE')) {
                        enviar(`*Dificuldade não encontrada, escolha uma válida*\n*Dificuldades: easy, normal, hard e impossible*`)
                    } else {
                        tttset.tttstatus = "on"
                        tttset.player = sender
                        tttset.playerName = sender.split('@')[0]
                        tttset.mentionPlayer = mek
                        tttset.local = from
                    if (args == 'easy' || args == 'Easy' || args == 'EASY') {
                        tttset.tttdifficulty = "EASY"
                    } else if (args == 'normal' || args == 'Normal' || args == 'NORMAL') {
                        tttset.tttdifficulty = "NORMAL"
                    } else if (args == 'hard' || args == 'Hard' || args == 'HARD') {
                        tttset.tttdifficulty = "HARD"
                    } else if (args == 'impossible' || args == 'Impossible' || args == 'IMPOSSIBLE') {
                        tttset.tttdifficulty = "IMPOSSIBLE"
                    }
                    const randomStartIA = Math.floor(Math.random() * 3)
                    if (randomStartIA == 0) {
                    IA()
                    tttset.reActivate1 = "on"	
                    }
                    enviar(`*PARTIDA INICIADA*\n*Dificuldade: ${tttset.tttdifficulty}*`)
                    drezin.sendMessage(from, {text: `🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`} )
                    drezin.sendMessage(from,{text: `Bom jogo`}) 
                    setTimeout( () => {
                    tttset.waitingTime = "off"
                    tttset.autoEndTime = "on"
                    }, 240000) //4 minuto
                    }
                    break

                case 'helproleta':
                    enviar(helproleta)
                    break

                case 'roletarussamed':
                    if(!isGroup) return enviar(mess.only.group)
                    if(roletarussa.includes(from)) return enviar('*Comandos de roleta russa bloqueados*')
                    if(!isBotGroupAdmins) return enviar(mess.only.Badmin)
                    if(!isGroupAdmins) return enviar(mess.only.admin)
                    enviar('*🔫Girando o tambor, Aguarde 10 segundos... 🔫*\n*😈😈 E se preparem para as consequências 😈😈*')
                    setTimeout(async function() {
                        r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
                        mem = groupMembers[r].id
                        if(mem.includes(OriginalOwner)) {
                            r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
                            mem = groupMembers[r].id
                        }
                        await drezin.sendMessage(from, {text: `*💥 O @${mem.split('@')[0]} Não teve sorte💥*\n*😈 Agora se prepare para as consequências 😈*`, mentions: [mem]})
                        await drezin.groupParticipantsUpdate(from, [mem], 'remove')
                        blockeds.push(mem)
                        fs.writeFileSync('./src/database/blocklist.json', JSON.stringify(blockeds))
                    }, 10000)
                    break

                case 'roletarussaeasy':
                    if(!isGroup) return enviar(mess.only.group)
                    if(roletarussa.includes(from)) return enviar('*Comandos de roleta russa bloqueados*')
                    if(!isBotGroupAdmins) return enviar(mess.only.Badmin)
                    if(!isGroupAdmins) return enviar(mess.only.admin)
                    enviar('*🔫Girando o tambor, Aguarde 10 segundos... 🔫*\n*😈😈 E se preparem para as consequências 😈😈*')
                    setTimeout(async function() {
                        r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
                        mem = groupMembers[r].id
                        if(mem.includes(OriginalOwner)) {
                            r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
                            mem = groupMembers[r].id
                        }
                        await drezin.sendMessage(from, {text: `*💥 O @${mem.split('@')[0]} Não teve sorte💥*\n*😈 Agora se prepare para as consequências 😈*`, mentions: [mem]})
                        await drezin.groupParticipantsUpdate(from, [mem], 'remove')
                        await drezin.sendMessage(from, {text: `*😈💥 O @${mem.split('@')[0]} pagou pelo seus atos💥😈*`, mentions: [mem]})
                    }, 10000)
                    break

                case 'roletarussapac':
                    if(!isGroup) return enviar(mess.only.group)
                    enviar('*🔫Girando o tambor...🔫, Aguarde 3 segundos*')
                    setTimeout(async function() {
                        r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
                        mem = groupMembers[r].id
                        if(mem.includes(OriginalOwner)) {
                            r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
                            mem = groupMembers[r].id
                        }
                        await drezin.sendMessage(from, {text: `*💥 O @${mem.split('@')[0]} foi burro o suficiente de apontar um revólver carregado na cabeça e atirar💥*`, mentions:[mem]})
                    }, 3000)
                    break

                case 'nfsticker':
                case 'nfstiker':
                    try {
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length < 3) {
                        const encmedia = isQuotedImage ? mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : mek.message.imageMessage
                        rane = getRandom('.'+await getExtension(encmedia.mimetype))
                        buffimg = await getFileBuffer(encmedia, 'image')
                        fs.writeFileSync(rane, buffimg)
                        const media = rane
                        ran = getRandom('.webp')
                        npack = args[0]
                        nauthor = args[1]
                        rano = getRandom('.exif')
                        await addExif(npack, nauthor, rano)
                        await ffmpeg(`./${media}`)
                            .input(media)
                            .on('start', function (cmd) {
                                console.log(`Started : ${cmd}`)
                            })
                            .on('error', function (err) {
                                console.log(`Error : ${err}`)
                                fs.unlinkSync(media)
                                enviar(mess.error.stick)
                            })
                            .on('end', async function () {
                                console.log('Finish')
                                try {
                                    exec(`webpmux -set exif ${rano} ${ran} -o ${ran}`, async (error) => {	
                                        if(error) return enviar(`*Houve uma falha, se tentar de novo pode funcionar :3*`)
                                        await drezin.sendMessage(from, {sticker: fs.readFileSync(ran)}, {quoted: mek})
                                        fs.unlinkSync(media)	
                                        fs.unlinkSync(ran)
                                        fs.unlinkSync(rano)
                                    })
                                } catch {
                                    exec(`webpmux -set exif ${rano} ${ran} -o ${ran}`, async (error) => {
                                        if(error) return enviar(`*Houve uma falha, se tentar de novo pode funcionar :3*`)
                                        await drezin.sendMessage(from, {sticker: fs.readFileSync(ran)}, {quoted: mek})
                                        fs.unlinkSync(media)	
                                        fs.unlinkSync(ran)
                                        fs.unlinkSync(rano)
                                    })
                                }
                            })
                            .addOutputOptions([`-vcodec`,`libwebp`,`-fs 0.99M`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                            .toFormat('webp')
                            .save(ran)
                    } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length < 3) {
                        const encmedia = isQuotedVideo ? mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : mek.message.videoMessage
                        rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                        imgbuff = await getFileBuffer(encmedia, 'video')
                        fs.writeFileSync(rane, imgbuff)
                        const media = rane
                        ran = getRandom('.webp')
                        enviar(mess.wait)
                        npack = args[0]
                        nauthor = args[1]
                        rano = getRandom('.exif')
                        await addExif(npack, nauthor, rano)
                        await ffmpeg(`./${media}`)
                            .inputFormat(media.split('.')[1])
                            .on('start', function (cmd) {
                                console.log(`Started : ${cmd}`)
                            })
                            .on('error', function (err) {
                                console.log(`Error : ${err}`)
                                fs.unlinkSync(media)
                                tipe = media.endsWith('.mp4') ? 'video' : 'gif'
                                enviar(`❌ Não foi possível converter ${tipe} em sticker`)
                            })
                            .on('end', async function () {
                                console.log('Finish')
                                try {
                                    exec(`webpmux -set exif ${rano} ${ran} -o ${ran}`, async (error) => {	
                                        if(error) return enviar(`*Houve uma falha, se tentar de novo pode funcionar :3*`)
                                        await drezin.sendMessage(from, {sticker: fs.readFileSync(ran)}, {quoted: mek})
                                        fs.unlinkSync(media)	
                                        fs.unlinkSync(ran)
                                        fs.unlinkSync(rano)
                                    })
                                } catch {
                                    exec(`webpmux -set exif ${rano} ${ran} -o ${ran}`, async (error) => {			
                                        if(error) return enviar(`*Houve uma falha, se tentar de novo pode funcionar :3*`)			
                                        await drezin.sendMessage(from, {sticker: fs.readFileSync(ran)}, {quoted: mek})
                                        fs.unlinkSync(media)	
                                        fs.unlinkSync(ran)
                                        fs.unlinkSync(rano)
                                    })
                                }
                            })
                            .addOutputOptions([`-vcodec`,`libwebp`,`-fs 0.99M`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                            .toFormat('webp')
                            .save(ran)
                    }
                    else return enviar(`Marque a imagem com o comando ${prefix}sticker ou coloque na legenda, o video ou gif so pode ter 10 segundos de duração, caso queira coloque apenas o numero de fps`)
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'nstiker':
                case 'nsticker':
                    teks = body.slice(10)
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
                        if(teks.split('|').length < 2) return enviar('*Diga o nome do autor e pacote usando | para separa-los*')
                        const encmedia = isQuotedImage ? mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : mek.message.imageMessage
                        rane = getRandom('.'+await getExtension(encmedia.mimetype))
                        buffimg = await getFileBuffer(encmedia, 'image')
                        fs.writeFileSync(rane, buffimg)
                        const media = rane
                        gb1 = teks.split('|')[0].trim()
                        gb2 = teks.split('|')[1].trim()
                        ran = getRandom('')
                        buff = await stickerImgTag(media, gb1, gb2, ran)
                        drezin.sendMessage(from, {sticker: buff.result}, {quoted: mek})
                    } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11)) {
                        if(teks.split('|').length < 2) return enviar('*Diga o nome do autor e pacote usando | para separa-los*')
                        const encmedia = isQuotedVideo ? mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : mek.message.videoMessage
                        rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                        imgbuff = await getFileBuffer(encmedia, 'video')
                        fs.writeFileSync(rane, imgbuff)
                        const media = rane
                        gb1 = teks.split('|')[0].trim()
                        gb2 = teks.split('|')[1].trim()
                        ran = getRandom('')
                        buff = await stickerVidTag(media, gb1, gb2, ran)
                        drezin.sendMessage(from,{sticker: buff.result}, {quoted: mek})
                    }
                    break

                case 'fsticker':
                case 'fstiker':
                    try {
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : mek.message.imageMessage
                        rane = getRandom('.'+await getExtension(encmedia.mimetype))
                        buffimg = await getFileBuffer(encmedia, 'image')
                        fs.writeFileSync(rane, buffimg)
                        const media = rane
                        ran = getRandom('.webp')
                        await ffmpeg(`./${media}`)
                            .input(media)
                            .on('start', function (cmd) {
                                console.log(`Started : ${cmd}`)
                            })
                            .on('error', function (err) {
                                console.log(`Error : ${err}`)
                                fs.unlinkSync(media)
                                enviar(mess.error.stick)
                            })
                            .on('end', async function () {
                                console.log('Finish')
                                drezin.sendMessage(from, {sticker: fs.readFileSync(ran)}, {quoted: mek})
                                fs.unlinkSync(media)
                                fs.unlinkSync(ran)
                            })
                            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                            .toFormat('webp')
                            .save(ran)
                    } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                        const encmedia = isQuotedVideo ? mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : mek.message.videoMessage
                        rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                        imgbuff = await getFileBuffer(encmedia, 'video')
                        fs.writeFileSync(rane, imgbuff)
                        const media = rane
                        ran = getRandom('.webp')
                        enviar(mess.wait)
                        await ffmpeg(`./${media}`)
                            .inputFormat(media.split('.')[1])
                            .on('start', function (cmd) {
                                console.log(`Started : ${cmd}`)
                            })
                            .on('error', function (err) {
                                console.log(`Error : ${err}`)
                                fs.unlinkSync(media)
                                tipe = media.endsWith('.mp4') ? 'video' : 'gif'
                                enviar(`❌ Não foi possível converter ${tipe} em sticker`)
                            })
                            .on('end', async function () {
                                console.log('Finish')
                                drezin.sendMessage(from, {sticker: fs.readFileSync(ran)}, {quoted: mek})
                                fs.unlinkSync(media)
                                fs.unlinkSync(ran)
                            })
                            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                            .toFormat('webp')
                            .save(ran)
                    }
                    else return enviar(`Marque a imagem com o comando ${prefix}sticker ou coloque na legenda, o video ou gif so pode ter 10 segundos de duração, caso queira coloque apenas o numero de fps`)
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'csticker':
                case 'cstiker':
                    if ((isMedia && mek.message.imageMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : mek.message.imageMessage
                        rane = getRandom('.'+await getExtension(encmedia.mimetype))
                        buffimg = await getFileBuffer(encmedia, 'image')
                        fs.writeFileSync(rane, buffimg)
                        media = rane
                        getpunt = getRandom('.png')
                        inpunt = getRandom('.webp')
                        exec(`convert ${media} -resize 512x512^ -gravity center -extent 512x512 ${getpunt} && magick ${getpunt} -quality 50 -define webp:lossless=true ${inpunt}`, async (error) => {
                            fs.unlinkSync(getpunt)
                            fs.unlinkSync(media)
                            if (error) return enviar("Error!")
                            await drezin.sendMessage(from, {sticker: fs.readFileSync(inpunt)}, {quoted: mek})
                            fs.unlinkSync(inpunt)
                        })
                    } else {
                        enviar("Apenas image!")
                    }
                    break

                case 'stiker':
                case 'sticker':
                    try{
                        if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
                            const encmedia = isQuotedImage ? mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : mek.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.webp')
                            execute(`ffmpeg -i ${media} -vf scale=512:512 ${ran}`, async function(err, result) {
                                if(err) return enviar(mess.error.stick)
                                await drezin.sendMessage(from, {sticker: {url: `./${ran}`}}, {quoted: mek})
                                await fs.unlinkSync(media)
                                await fs.unlinkSync(ran)
                            })
                        } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11)) {
                            const encmedia = isQuotedVideo ? mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : mek.message.videoMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'video')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            if(args.length < 1) framerate = 12
                            else framerate = args[0]
                            ran = getRandom('.webp')
                            enviar(mess.wait)
                            execute(`ffmpeg -i ${media} -y -vcodec libwebp -fs 0.99M -filter_complex "[0:v] scale=512:512,fps=${framerate},pad=512:512:-1:-1:color=white@0.0,split[a][b];[a]palettegen=reserve_transparent=on:transparency_color=ffffff[p];[b][p]paletteuse" -f webp ${ran}`, async function(err, res){
                                if(err) return enviar(mess.error.stick)
                                await drezin.sendMessage(from, {sticker: fs.readFileSync(ran)}, {quoted: mek})
                                enviar('*Se estiver cortado ou parado, digite o n° de fps apos escrever o comando*')
                                fs.unlinkSync(media)	
                                fs.unlinkSync(ran)
                            })
                        } else return enviar(`Marque a imagem com o comando ${prefix}sticker ou coloque na legenda, o video ou gif so pode ter 10 segundos de duração, caso queira coloque apenas o numero de fps`)
                    } catch (e) {
                        console.log(e)
                        enviar(resp.erro)
                    }
                    break

                case 'trash':
                    try{
                        if (isMedia && !mek.message.videoMessage || isQuotedImage) {
                            const encmedia = isQuotedImage ? mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : mek.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.'+media.split('.')[1])
                            const upload = await uploadimg('brizaloka', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/trash?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(media)
                        } else if(args[0] == 'me') {
                            try {
                                ppimg = await drezin.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/trash?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(ran)
                        } else if(mek.message.extendedTextMessage.contextInfo.mentionedJid) {
                            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await drezin.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/trash?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(ran)
                        } else return enviar('*Apenas fotos*')
                    } catch {
                        enviar(resp.erro)
                    }
                break

                case 'thomas':
                    try{
                        if (isMedia && !mek.message.videoMessage || isQuotedImage) {
                            const encmedia = isQuotedImage ? mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : mek.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.'+media.split('.')[1])
                            const upload = await uploadimg('brizaloka', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/thomas?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(media)
                        } else if(args[0] == 'me') {
                            try {
                                ppimg = await drezin.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/thomas?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(ran)
                        } else if(mek.message.extendedTextMessage.contextInfo.mentionedJid) {
                            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await drezin.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/thomas?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(ran)
                        } else return enviar('*Apenas fotos*')
                    } catch {
                        enviar(resp.erro)
                    }
                break

                case 'tatto':
                    try{
                        if (isMedia && !mek.message.videoMessage || isQuotedImage) {
                            const encmedia = isQuotedImage ? mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : mek.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.'+media.split('.')[1])
                            const upload = await uploadimg('brizaloka', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/tatto?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(media)
                        } else if(args[0] == 'me') {
                            try {
                                ppimg = await drezin.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/tatto?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(ran)
                        } else if(mek.message.extendedTextMessage.contextInfo.mentionedJid) {
                            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await drezin.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/tatto?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(ran)
                        } else return enviar('*Apenas fotos*')
                    } catch {
                        enviar(resp.erro)
                    }
                break

                case 'stonks':
                    try{
                        if (isMedia && !mek.message.videoMessage || isQuotedImage) {
                            const encmedia = isQuotedImage ? mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : mek.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.'+media.split('.')[1])
                            const upload = await uploadimg('brizaloka', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/stonks?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(media)
                        } else if(args[0] == 'me') {
                            try {
                                ppimg = await drezin.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/stonks?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(ran)
                        } else if(mek.message.extendedTextMessage.contextInfo.mentionedJid) {
                            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await drezin.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/stonks?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(ran)
                        } else return enviar('*Apenas fotos*')
                    } catch {
                        enviar(resp.erro)
                    }
                break

                case 'spank':
                    try{
                        if (isMedia && !mek.message.videoMessage || isQuotedImage) {
                            const encmedia = isQuotedImage ? mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : mek.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.'+media.split('.')[1])
                            const upload = await uploadimg('brizaloka', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/spank?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(media)
                        } else if(args[0] == 'me') {
                            try {
                                ppimg = await drezin.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/spank?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(ran)
                        } else if(mek.message.extendedTextMessage.contextInfo.mentionedJid) {
                            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await drezin.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/spank?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(ran)
                        } else return enviar('*Apenas fotos*')
                    } catch {
                        enviar(resp.erro)
                    }
                break

                case 'rip':
                    try{
                        if (isMedia && !mek.message.videoMessage || isQuotedImage) {
                            const encmedia = isQuotedImage ? mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : mek.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.'+media.split('.')[1])
                            const upload = await uploadimg('brizaloka', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/rip?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(media)
                        } else if(args[0] == 'me') {
                            try {
                                ppimg = await drezin.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/rip?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(ran)
                        } else if(mek.message.extendedTextMessage.contextInfo.mentionedJid) {
                            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await drezin.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/rip?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(ran)
                        } else return enviar('*Apenas fotos*')
                    } catch {
                        enviar(resp.erro)
                    }
                break

                case 'notstonks':
                    try{
                        if (isMedia && !mek.message.videoMessage || isQuotedImage) {
                            const encmedia = isQuotedImage ? mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : mek.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.'+media.split('.')[1])
                            const upload = await uploadimg('brizaloka', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/notstonks?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(media)
                        } else if(args[0] == 'me') {
                            try {
                                ppimg = await drezin.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/notstonks?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(ran)
                        } else if(mek.message.extendedTextMessage.contextInfo.mentionedJid) {
                            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await drezin.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/notstonks?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(ran)
                        } else return enviar('*Apenas fotos*')
                    } catch {
                        enviar(resp.erro)
                    }
                break

                case 'mms':
                    try{
                        if (isMedia && !mek.message.videoMessage || isQuotedImage) {
                            const encmedia = isQuotedImage ? mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : mek.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.'+media.split('.')[1])
                            const upload = await uploadimg('brizaloka', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/mms?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(media)
                        } else if(args[0] == 'me') {
                            try {
                                ppimg = await drezin.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/mms?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(ran)
                        } else if(mek.message.extendedTextMessage.contextInfo.mentionedJid) {
                            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await drezin.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/mms?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(ran)
                        } else return enviar('*Apenas fotos*')
                    } catch {
                        enviar(resp.erro)
                    }
                break

                case 'karaba':
                    try{
                        if (isMedia && !mek.message.videoMessage || isQuotedImage) {
                            const encmedia = isQuotedImage ? mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : mek.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.'+media.split('.')[1])
                            const upload = await uploadimg('brizaloka', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/karaba?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(media)
                        } else if(args[0] == 'me') {
                            try {
                                ppimg = await drezin.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/karaba?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(ran)
                        } else if(mek.message.extendedTextMessage.contextInfo.mentionedJid) {
                            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await drezin.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/karaba?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(ran)
                        } else return enviar('*Apenas fotos*')
                    } catch {
                        enviar(resp.erro)
                    }
                break

                case 'jail':
                    try{
                        if (isMedia && !mek.message.videoMessage || isQuotedImage) {
                            const encmedia = isQuotedImage ? mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : mek.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.'+media.split('.')[1])
                            const upload = await uploadimg('brizaloka', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/jail?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(media)
                        } else if(args[0] == 'me') {
                            try {
                                ppimg = await drezin.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/jail?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(ran)
                        } else if(mek.message.extendedTextMessage.contextInfo.mentionedJid) {
                            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await drezin.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/jail?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(ran)
                        } else return enviar('*Apenas fotos*')
                    } catch {
                        enviar(resp.erro)
                    }
                break

                case 'hitler':
                    try{
                        if (isMedia && !mek.message.videoMessage || isQuotedImage) {
                            const encmedia = isQuotedImage ? mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : mek.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.'+media.split('.')[1])
                            const upload = await uploadimg('brizaloka', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/hitler?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(media)
                        } else if(args[0] == 'me') {
                            try {
                                ppimg = await drezin.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/hitler?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(ran)
                        } else if(mek.message.extendedTextMessage.contextInfo.mentionedJid) {
                            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await drezin.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/hitler?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(ran)
                        } else return enviar('*Apenas fotos*')
                    } catch {
                        enviar(resp.erro)
                    }
                break

                case 'facepalm':
                    try{
                        if (isMedia && !mek.message.videoMessage || isQuotedImage) {
                            const encmedia = isQuotedImage ? mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : mek.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.'+media.split('.')[1])
                            const upload = await uploadimg('brizaloka', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/facepalm?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(media)
                        } else if(args[0] == 'me') {
                            try {
                                ppimg = await drezin.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/facepalm?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(ran)
                        } else if(mek.message.extendedTextMessage.contextInfo.mentionedJid) {
                            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await drezin.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/facepalm?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(ran)
                        } else return enviar('*Apenas fotos*')
                    } catch {
                        enviar(resp.erro)
                    }
                break

                case 'bluediscord':
                    try{
                        if (isMedia && !mek.message.videoMessage || isQuotedImage) {
                            const encmedia = isQuotedImage ? mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : mek.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.'+media.split('.')[1])
                            const upload = await uploadimg('brizaloka', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/bluediscord?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(media)
                        } else if(args[0] == 'me') {
                            try {
                                ppimg = await drezin.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/bluediscord?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(ran)
                        } else if(mek.message.extendedTextMessage.contextInfo.mentionedJid) {
                            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await drezin.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/bluediscord?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(ran)
                        } else return enviar('*Apenas fotos*')
                    } catch {
                        enviar(resp.erro)
                    }
                break

                case 'blackdiscord':
                    try{
                        if (isMedia && !mek.message.videoMessage || isQuotedImage) {
                            const encmedia = isQuotedImage ? mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : mek.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.'+media.split('.')[1])
                            const upload = await uploadimg('brizaloka', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/blackdiscord?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(media)
                        } else if(args[0] == 'me') {
                            try {
                                ppimg = await drezin.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/blackdiscord?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(ran)
                        } else if(mek.message.extendedTextMessage.contextInfo.mentionedJid) {
                            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await drezin.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/blackdiscord?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(ran)
                        } else return enviar('*Apenas fotos*')
                    } catch {
                        enviar(resp.erro)
                    }
                break

                case 'delete':
                    try{
                        if (isMedia && !mek.message.videoMessage || isQuotedImage) {
                            const encmedia = isQuotedImage ? mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : mek.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.'+media.split('.')[1])
                            const upload = await uploadimg('brizaloka', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/delete?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(media)
                        } else if(args[0] == 'me') {
                            try {
                                ppimg = await drezin.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/delete?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(ran)
                        } else if(mek.message.extendedTextMessage.contextInfo.mentionedJid) {
                            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await drezin.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/delete?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(ran)
                        } else return enviar('*Apenas fotos*')
                    } catch {
                        enviar(resp.erro)
                    }
                break

                case 'confusedstonks':
                    try{
                        if (isMedia && !mek.message.videoMessage || isQuotedImage) {
                            const encmedia = isQuotedImage ? mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : mek.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.'+media.split('.')[1])
                            const upload = await uploadimg('brizaloka', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/confusedstonks?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(media)
                        } else if(args[0] == 'me') {
                            try {
                                ppimg = await drezin.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/confusedstonks?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(ran)
                        } else if(mek.message.extendedTextMessage.contextInfo.mentionedJid) {
                            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await drezin.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/confusedstonks?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(ran)
                        } else return enviar('*Apenas fotos*')
                    } catch {
                        enviar(resp.erro)
                    }
                break

                case 'dobross':
                    try{
                        if (isMedia && !mek.message.videoMessage || isQuotedImage) {
                            const encmedia = isQuotedImage ? mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : mek.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.'+media.split('.')[1])
                            const upload = await uploadimg('brizaloka', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/dobross?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(media)
                        } else if(args[0] == 'me') {
                            try {
                                ppimg = await drezin.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/dobross?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(ran)
                        } else if(mek.message.extendedTextMessage.contextInfo.mentionedJid) {
                            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await drezin.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/dobross?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(ran)
                        } else return enviar('*Apenas fotos*')
                    } catch {
                        enviar(resp.erro)
                    }
                break

                case 'beatiful':
                    try{
                        if (isMedia && !mek.message.videoMessage || isQuotedImage) {
                            const encmedia = isQuotedImage ? mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : mek.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.'+media.split('.')[1])
                            const upload = await uploadimg('brizaloka', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/beatiful?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(media)
                        } else if(args[0] == 'me') {
                            try {
                                ppimg = await drezin.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/beatiful?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(ran)
                        } else if(mek.message.extendedTextMessage.contextInfo.mentionedJid) {
                            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await drezin.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/beatiful?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(ran)
                        } else return enviar('*Apenas fotos*')
                    } catch {
                        enviar(resp.erro)
                    }
                break

                case 'affect':
                    try{
                        if (isMedia && !mek.message.videoMessage || isQuotedImage) {
                            const encmedia = isQuotedImage ? mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : mek.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.'+media.split('.')[1])
                            const upload = await uploadimg('brizaloka', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/affect?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(media)
                        } else if(args[0] == 'me') {
                            try {
                                ppimg = await drezin.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/affect?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(ran)
                        } else if(mek.message.extendedTextMessage.contextInfo.mentionedJid) {
                            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await drezin.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/affect?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(ran)
                        } else return enviar('*Apenas fotos*')
                    } catch {
                        enviar(resp.erro)
                    }
                break

                case 'ad':
                    try{
                        if (isMedia && !mek.message.videoMessage || isQuotedImage) {
                            const encmedia = isQuotedImage ? mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : mek.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.'+media.split('.')[1])
                            const upload = await uploadimg('brizaloka', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/ad?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(media)
                        } else if(args[0] == 'me') {
                            try {
                                ppimg = await drezin.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/ad?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(ran)
                        } else if(mek.message.extendedTextMessage.contextInfo.mentionedJid) {
                            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await drezin.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/montage/ad?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(ran)
                        } else return enviar('*Apenas fotos*')
                    } catch {
                        enviar(resp.erro)
                    }
                break

                case 'mek':
                    if(!isOwner) return enviar(mess.only.ownerB)
                    enviar(JSON.stringify(mek, null, 2))
                    break

                case 'invert':
                    try{
                        if (isMedia && !mek.message.videoMessage || isQuotedImage) {
                            const encmedia = isQuotedImage ? mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : mek.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.'+media.split('.')[1])
                            const upload = await uploadimg('brizaloka', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/imgeffect/invert?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(media)
                        } else if(args[0] == 'me') {
                            try {
                                ppimg = await drezin.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/imgeffect/invert?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(ran)
                        } else if(mek.message.extendedTextMessage.contextInfo.mentionedJid) {
                            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await drezin.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/imgeffect/invert?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(ran)
                        } else return enviar('*Apenas fotos*')
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'greyscale':
                    try{
                        if (isMedia && !mek.message.videoMessage || isQuotedImage) {
                            const encmedia = isQuotedImage ? mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : mek.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.'+media.split('.')[1])
                            const upload = await uploadimg('brizaloka', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/imgeffect/greyscale?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(media)
                        } else if(args[0] == 'me') {
                            try {
                                ppimg = await drezin.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/imgeffect/greyscale?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(ran)
                        } else if(mek.message.extendedTextMessage.contextInfo.mentionedJid) {
                            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await drezin.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/imgeffect/greyscale?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(ran)
                        } else return enviar('*Apenas fotos*')
                    } catch {
                        enviar(resp.erro)
                    }
                break

                case 'lgbt':
                    try{
                        if (isMedia && !mek.message.videoMessage || isQuotedImage) {
                            const encmedia = isQuotedImage ? mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : mek.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.'+media.split('.')[1])
                            const upload = await uploadimg('brizaloka', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/imgeffect/gay?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(media)
                        } else if(args[0] == 'me') {
                            try {
                                ppimg = await drezin.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/imgeffect/gay?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(ran)
                        } else if(mek.message.extendedTextMessage.contextInfo.mentionedJid) {
                            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await drezin.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/imgeffect/gay?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(ran)
                        } else return enviar('*Apenas fotos*')
                    } catch {
                        enviar(resp.erro)
                    }
                break

                case 'blur':
                    try{
                        if (isMedia && !mek.message.videoMessage || isQuotedImage) {
                            const encmedia = isQuotedImage ? mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : mek.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.'+media.split('.')[1])
                            const upload = await uploadimg('brizaloka', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/imgeffect/blur?apikey=brizaloka&level=5&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(media)
                        } else if(args[0] == 'me') {
                            try {
                                ppimg = await drezin.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/imgeffect/blur?apikey=brizaloka&level=5&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(ran)
                        } else if(mek.message.extendedTextMessage.contextInfo.mentionedJid) {
                            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await drezin.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/imgeffect/blur?apikey=brizaloka&level=5&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(ran)
                        } else return enviar('*Apenas fotos*')
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'sepie':
                    try{
                        if (isMedia && !mek.message.videoMessage || isQuotedImage) {
                            enviar(mess.wait)
                            const encmedia = isQuotedImage ? mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : mek.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.'+media.split('.')[1])
                            const upload = await uploadimg('brizaloka', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/imgeffect/sepie?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(media)
                        } else if(args[0] == 'me') {
                            enviar(mess.wait)
                            try {
                                ppimg = await drezin.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/imgeffect/sepie?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(ran)
                        } else if(mek.message.extendedTextMessage.contextInfo.mentionedJid) {
                            enviar(mess.wait)
                            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await drezin.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/imgeffect/sepie?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {image: buff}, {quoted: mek})
                            fs.unlinkSync(ran)
                        } else return enviar('*Apenas fotos*')
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'lisa':
                    teks = body.slice(6)
                    buff = await getBuffer(`https://api.brizaloka-api.tk/imgeffect/lisapresentation?apikey=brizaloka&text=${teks}`)
                    drezin.sendMessage(from, {image: buff}, {quoted: mek})
                break

                case 'amongus':
                    try{
                        if (isMedia && !mek.message.videoMessage || isQuotedImage) {
                            enviar(mess.wait)
                            const encmedia = isQuotedImage ? mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : mek.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.'+media.split('.')[1])
                            rano = getRandom('.gif')
                            rane = getRandom('.mp4')
                            const upload = await uploadimg('brizaloka', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/gifeffect/amongus?apikey=brizaloka&img=${upload.resultado.link}&text1=${sender.split('@')[0]}%20nao%20era%20o%20impostor&text2=1%20impostor%20restando`)
                            fs.writeFileSync(rano, buff)
                            await exec(`ffmpeg -i ${rano} -pix_fmt yuv420p ${rane}`, async () => {
                                await drezin.sendMessage(from, {video: fs.readFileSync(rane), gifPlayback:true}, {quoted: mek})
                                fs.unlinkSync(ran)
                                fs.unlinkSync(rano)
                                fs.unlinkSync(rane)
                            })
                        } else if(args[0] == 'me') {
                            enviar(mess.wait)
                            try {
                                ppimg = await drezin.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.gif')
                            rane = getRandom('.mp4')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/gifeffect/amongus?apikey=brizaloka&img=${upload.resultado.link}&text1=${sender.split('@')[0]}%20nao%20era%20o%20impostor&text2=1%20impostor%20restando`)
                            fs.writeFileSync(rano, buff)
                            await exec(`ffmpeg -i ${rano} -pix_fmt yuv420p ${rane}`, async () => {
                                await drezin.sendMessage(from, {video: fs.readFileSync(rane), gifPlayback:true}, {quoted: mek})
                                fs.unlinkSync(ran)
                                fs.unlinkSync(rano)
                                fs.unlinkSync(rane)
                            })
                        } else if(mek.message.extendedTextMessage.contextInfo.mentionedJid) {
                            enviar(mess.wait)
                            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await drezin.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.gif')
                            rane = getRandom('.mp4')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/gifeffect/amongus?apikey=brizaloka&img=${upload.resultado.link}&text1=${sender.split('@')[0]}%20nao%20era%20o%20impostor&text2=1%20impostor%20restando`)
                            fs.writeFileSync(rano, buff)
                            await exec(`ffmpeg -i ${rano} -pix_fmt yuv420p ${rane}`, async () => {
                                await drezin.sendMessage(from, {video: fs.readFileSync(rane), gifPlayback:true}, {quoted: mek})
                                fs.unlinkSync(ran)
                                fs.unlinkSync(rano)
                                fs.unlinkSync(rane)
                            })
                        } else return enviar('*Apenas fotos*')
                    } catch (e){
                        console.log(e)
                        enviar(resp.erro)
                    }
                    break

                case 'triggerfig':
                    try{
                        if (isMedia && !mek.message.videoMessage || isQuotedImage) {
                            const encmedia = isQuotedImage ? mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : mek.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            enviar(mess.wait)
                            ran = getRandom('.'+media.split('.')[1])
                            const upload = await uploadimg('brizaloka', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/gifeffect/triggered?apikey=brizaloka&img=${upload.resultado.link}`)
                            rano = getRandom('.mp4')
                            rane = getRandom('.gif')
                            fs.writeFileSync(rano, buff)
                            execute(`ffmpeg -i ${rano} -y -vcodec libwebp -filter_complex "[0:v] scale=512:512,pad=512:512:-1:-1:color=white@0.0,split[a][b];[a]palettegen=reserve_transparent=on:transparency_color=ffffff[p];[b][p]paletteuse" -f webp ${rane}`, async function(err, res){
                                if(err) return enviar(mess.error.stick)
                                await drezin.sendMessage(from, {sticker: fs.readFileSync(rane)}, {quoted: mek})
                                fs.unlinkSync(rano)	
                                fs.unlinkSync(rane)
                                fs.unlinkSync(media)
                            })
                        } else if(args[0] == 'me') {
                            enviar(mess.wait)
                            try {
                                ppimg = await drezin.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/gifeffect/triggered?apikey=brizaloka&img=${upload.resultado.link}`)
                            rano = getRandom('.mp4')
                            rane = getRandom('.gif')
                            fs.writeFileSync(rano, buff)
                            execute(`ffmpeg -i ${rano} -y -vcodec libwebp -filter_complex "[0:v] scale=512:512,pad=512:512:-1:-1:color=white@0.0,split[a][b];[a]palettegen=reserve_transparent=on:transparency_color=ffffff[p];[b][p]paletteuse" -f webp ${rane}`, async function(err, res){
                                if(err) return enviar(mess.error.stick)
                                await drezin.sendMessage(from, {sticker: fs.readFileSync(rane)}, {quoted: mek})
                                fs.unlinkSync(rano)	
                                fs.unlinkSync(rane)
                                fs.unlinkSync(ran)
                            })
                        } else if(mek.message.extendedTextMessage.contextInfo.mentionedJid) {
                            enviar(mess.wait)
                            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await drezin.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/gifeffect/triggered?apikey=brizaloka&img=${upload.resultado.link}`)
                            rano = getRandom('.mp4')
                            rane = getRandom('.gif')
                            fs.writeFileSync(rano, buff)
                            execute(`ffmpeg -i ${rano} -y -vcodec libwebp -filter_complex "[0:v] scale=512:512,pad=512:512:-1:-1:color=white@0.0,split[a][b];[a]palettegen=reserve_transparent=on:transparency_color=ffffff[p];[b][p]paletteuse" -f webp ${rane}`, async function(err, res){
                                if(err) return enviar(mess.error.stick)
                                await drezin.sendMessage(from, {sticker: fs.readFileSync(rane)}, {quoted: mek})
                                fs.unlinkSync(rano)	
                                fs.unlinkSync(rane)
                                fs.unlinkSync(ran)
                            })
                        } else return enviar('*Apenas fotos*')
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'triggered':
                    try{
                        if (isMedia && !mek.message.videoMessage || isQuotedImage) {
                            enviar(mess.wait)
                            const encmedia = isQuotedImage ? mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : mek.message.imageMessage
                            rane = getRandom('.'+ await getExtension(encmedia.mimetype))
                            imgbuff = await getFileBuffer(encmedia, 'image')
                            fs.writeFileSync(rane, imgbuff)
                            const media = rane
                            ran = getRandom('.'+media.split('.')[1])
                            const upload = await uploadimg('brizaloka', media, ran)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/gifeffect/triggered?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {video: buff, gifPlayback: true}, {quoted: mek})
                            fs.unlinkSync(media)
                        } else if(args[0] == 'me') {
                            enviar(mess.wait)
                            try {
                                ppimg = await drezin.profilePictureUrl(sender)
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/gifeffect/triggered?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {video: buff, gifPlayback: true}, {quoted: mek})
                            fs.unlinkSync(ran)
                        } else if(mek.message.extendedTextMessage.contextInfo.mentionedJid) {
                            enviar(mess.wait)
                            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                            try {
                                ppimg = await drezin.profilePictureUrl(mentioned[0])
                            } catch {
                                ppimg = 'https://i.imgur.com/hRDp5D2.png'
                            }
                            ran = getRandom('.jpg')
                            rano = getRandom('.jpg')
                            buff = await getBuffer(ppimg)
                            fs.writeFileSync(ran, buff)
                            const upload = await uploadimg('brizaloka', ran, rano)
                            buff = await getBuffer(`https://api.brizaloka-api.tk/gifeffect/triggered?apikey=brizaloka&img=${upload.resultado.link}`)
                            drezin.sendMessage(from, {video: buff, gifPlayback: true}, {quoted: mek})
                            fs.unlinkSync(ran)
                        } else return enviar('*Apenas fotos*')
                    } catch {
                        enviar(resp.erro)
                    }
                break

                case 'ttp':
                    try{                 
                    if (args.length < 1) return enviar(`e o texto prr`)
                        attp2 = await getBuffer(`https://api.brizaloka-api.tk/ttp/ttp1?apikey=brizaloka&text=${body.slice(5)}&color=00ffff`)
                        drezin.sendMessage(from, {sticker: attp2}, {quoted: mek})
                    } catch(e) {
                        console.log(e)
                        enviar(resp.erro)
                    }
                break

                case 'ttp2':
                    try{                 
                    if (args.length < 1) return enviar(`e o texto prr`)
                        url = encodeURI(`https://api.brizaloka-api.tk/ttp/ttp2?apikey=brizaloka&text=${body.slice(6)}&color=00ffff`)
                        attp2 = await getBuffer(url)
                            drezin.sendMessage(from, {sticker: attp2}, {quoted: mek})
                    } catch(e) {
                        console.log(e)
                        enviar(resp.erro)
                    }
                break

                case 'ttp3':
                    try{                 
                    if (args.length < 1) return enviar(`e o texto prr`)
                        url = encodeURI(`https://api.brizaloka-api.tk/ttp/ttp3?apikey=brizaloka&text=${body.slice(6)}&color=00ffff`)
                        attp2 = await getBuffer(url)
                            drezin.sendMessage(from, {sticker: attp2}, {quoted: mek})
                    } catch(e) {
                        console.log(e)
                        enviar(resp.erro)
                    }
                break

                case 'ttp4':
                    try{                 
                    if (args.length < 1) return enviar(`e o texto prr`)
                        url = encodeURI(`https://api.brizaloka-api.tk/ttp/ttp4?apikey=brizaloka&text=${body.slice(6)}&color=00ffff`)
                        attp2 = await getBuffer(url)
                            drezin.sendMessage(from, {sticker: attp2}, {quoted: mek})
                    } catch(e) {
                        console.log(e)
                        enviar(resp.erro)
                    }
                break

                case 'ttp5':
                    try{                 
                    if (args.length < 1) return enviar(`e o texto prr`)
                        url = encodeURI(`https://api.brizaloka-api.tk/ttp/ttp5?apikey=brizaloka&text=${body.slice(6)}&color=00ffff`)
                        attp2 = await getBuffer(url)
                            drezin.sendMessage(from, {sticker: attp2}, {quoted: mek})
                    } catch(e) {
                        console.log(e)
                        enviar(resp.erro)
                    }
                break

                case 'ttp6':
                    try{                 
                    if (args.length < 1) return enviar(`e o texto prr`)
                        url = encodeURI(`https://api.brizaloka-api.tk/ttp/ttp6?apikey=brizaloka&text=${body.slice(6)}&color=00ffff`)
                        attp2 = await getBuffer(url)
                            drezin.sendMessage(from, {sticker: attp2}, {quoted: mek})
                    } catch(e) {
                        console.log(e)
                        enviar(resp.erro)
                    }
                break

                case 'attp':
                    try{                 
                    if (args.length < 1) return enviar(`e o texto prr`)
                        url = encodeURI(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
                        attp2 = await getBuffer(url)
                        drezin.sendMessage(from, {sticker: attp2}, {quoted: mek})
                    } catch(e) {
                        console.log(e)
                        enviar(resp.erro)
                    }
                break

                case 'attp2':
                    try{                 
                    if (args.length < 1) return enviar(`e o texto prr`)
                        url = encodeURI(`https://api.brizaloka-api.tk/ttp/attp1?apikey=brizaloka&text=${body.slice(7)}`)
                        attp2 = await getBuffer(url)
                            drezin.sendMessage(from, {sticker: attp2}, {quoted: mek})
                    } catch(e) {
                        console.log(e)
                        enviar(resp.erro)
                    }
                break

                case 'attp3':
                    try{                 
                    if (args.length < 1) return enviar(`e o texto prr`)
                        url = encodeURI(`https://api.brizaloka-api.tk/ttp/attp2?apikey=brizaloka&text=${body.slice(7)}`)
                        attp2 = await getBuffer(url)
                            drezin.sendMessage(from, {sticker: attp2}, {quoted: mek})
                    } catch(e) {
                        console.log(e)
                        enviar(resp.erro)
                    }
                break

                case 'attp4':
                    try{                 
                    if (args.length < 1) return enviar(`e o texto prr`)
                        url = encodeURI(`https://api.brizaloka-api.tk/ttp/attp3?apikey=brizaloka&text=${body.slice(7)}`)
                        attp2 = await getBuffer(url)
                            drezin.sendMessage(from, {sticker: attp2}, {quoted: mek})
                    } catch(e) {
                        console.log(e)
                        enviar(resp.erro)
                    }
                break

                case 'attp5':
                    try{                 
                    if (args.length < 1) return enviar(`e o texto prr`)
                        url = encodeURI(`https://api.brizaloka-api.tk/ttp/attp4?apikey=brizaloka&text=${body.slice(7)}`)
                        attp2 = await getBuffer(url)
                            drezin.sendMessage(from, {sticker: attp2}, {quoted: mek})
                    } catch(e) {
                        console.log(e)
                        enviar(resp.erro)
                    }
                break

                case 'attp6':
                    try{                 
                    if (args.length < 1) return enviar(`e o texto prr`)
                        url = encodeURI(`https://api.brizaloka-api.tk/ttp/attp5?apikey=brizaloka&text=${body.slice(7)}`)
                        attp2 = await getBuffer(url)
                            drezin.sendMessage(from, {sticker: attp2}, {quoted: mek})
                    } catch(e) {
                        console.log(e)
                        enviar(resp.erro)
                    }
                break

                case 'attp7':
                    try{                 
                    if (args.length < 1) return enviar(`e o texto prr`)
                        url = encodeURI(`https://api.brizaloka-api.tk/ttp/attp6?apikey=brizaloka&text=${body.slice(7)}`)
                        attp2 = await getBuffer(url)
                            drezin.sendMessage(from, {sticker: attp2}, {quoted: mek})
                    } catch(e) {
                        console.log(e)
                        enviar(resp.erro)
                    }
                break

                case 'hidemarcar':
                    if (!isGroup) return enviar(mess.only.group)
                    if (!isGroupAdmins) return enviar(mess.only.admin)
                    value = body.slice(12)
                    group = await drezin.groupMetadata(from)
                    member = group['participants']
                    mem = []
                    member.map( async adm => {
                    mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                    })
                    options = {
                        text: value,
                        mentions: mem,
                        quoted: mek
                    }
                    drezin.sendMessage(from, options)
                    break

                case 'autoreply':
                    try {
                        if (!isGroup) return enviar(mess.only.group)
                        if (!isGroupAdmins) return enviar(mess.only.admin)
                        if (args.length < 1) return enviar('Hmmmm')
                        if (Number(args[0]) === 1) {
                            if (isAutoReply) return enviar('Ja esta ativo')
                            autoreply.push(from)
                            fs.writeFileSync('./src/database/autoreply.json', JSON.stringify(autoreply))
                            enviar('Ativou com sucesso o recurso de auto respostas neste grupo✔️')
                        } else if (Number(args[0]) === 0) {
                            autoreply.splice(from, 1)
                            fs.writeFileSync('./src/database/autoreply.json', JSON.stringify(autoreply))
                            enviar('Desativou com sucesso o recurso de auto respostas neste grupo✔️')
                        } else {
                            enviar('1 para ativar, 0 para desativar')
                        }
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'marcar':
                    try {
                        if (!isGroup) return enviar(mess.only.group)
                        if (!isGroupAdmins) return enviar(mess.only.admin)
                        members_id = []
                        teks = (args.length > 1) ? body.slice(8).trim() : ''
                        teks += '\n\n'
                        for (let mem of groupMembers) {
                            teks += `*#* @${mem.id.split('@')[0]}\n`
                            members_id.push(mem.id)
                        }
                        mentions(teks, members_id, true)
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'marcar2':
                    try {
                        members_id = []
                        teks = (args.length > 1) ? body.slice(8).trim() : ''
                        teks += '\n\n'
                        for (let mem of groupMembers) {
                            teks += `╠➥ @${mem.id.split('@')[0]}\n`
                            members_id.push(mem.id)
                        }
                        enviar(teks)
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'marcar3':
                    try {
                        members_id = []
                        teks = (args.length > 1) ? body.slice(8).trim() : ''
                        teks += '\n\n'
                        for (let mem of groupMembers) {
                            teks += `╠➥ https://wa.me/${mem.id.split('@')[0]}\n`
                            members_id.push(mem.id)
                        }
                        drezin.sendMessage(from, {text: teks}, {quoted: mek})
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'simih':
                    try {
                        if (!isGroup) return enviar(mess.only.group)
                        if (!isGroupAdmins) return enviar(mess.only.admin)
                        if (args.length < 1) return enviar('Hmmmm')
                        if (Number(args[0]) === 1) {
                            if (isSimi) return enviar('O modo Simi está ativo')
                            samih.push(from)
                            fs.writeFileSync('./src/database/simi.json', JSON.stringify(samih))
                            enviar('Ativado com sucesso o modo simi neste grupo ✔️')
                        } else if (Number(args[0]) === 0) {
                            samih.splice(from, 1)
                            fs.writeFileSync('./src/database/simi.json', JSON.stringify(samih))
                            enviar('Desativado com sucesso o modo simi neste grupo ✔️')
                        } else {
                            enviar('1 para ativar, 0 para desativar')
                        }
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'roletrussablock':
                    try {
                        if (!isGroup) return enviar(mess.only.group)
                        if (!isGroupAdmins) return enviar(mess.only.admin)
                        if (!isBotGroupAdmins) return enviar(mess.only.Badmin)
                        if (args.length < 1) return enviar('Hmmmm')
                        if (Number(args[0]) === 1) {
                            if (isBlockRoleta) return enviar('Ja esta ativo')
                            roletarussa.push(from)
                            fs.writeFileSync('./src/database/roletarussa.json', JSON.stringify(roletarussa))
                            enviar('Bloqueado roleta russa com sucesso neste grupo✔️')
                        } else if (Number(args[0]) === 0) {
                            roletarussa.splice(from, 1)
                            fs.writeFileSync('./src/database/roletarussa.json', JSON.stringify(roletarussa))
                            enviar('Bloqueado roleta russa com sucesso neste grupo✔️')
                        } else {
                            enviar('1 para ativar, 0 para desativar')
                        }
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'promote':
                    try {
                    if (!isGroup) return enviar(mess.only.group)
                    if (!isGroupAdmins) return enviar(mess.only.admin)
                    if (!isBotGroupAdmins) return enviar(mess.only.Badmin)
                    if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    if (mentioned.length > 1) {
                        teks = 'Promovido com sucesso\n'
                        for (let _ of mentioned) {
                            teks += `@${_.split('@')[0]}\n`
                        }
                        mentions(from, mentioned, true)
                        drezin.groupParticipantsUpdate(from, mentioned, 'promote')
                    } else {
                        mentions(`Promovido com sucesso @${mentioned[0].split('@')[0]} Como Administrador do Grupo!`, mentioned, true)
                        drezin.groupParticipantsUpdate(from, mentioned, 'promote')
                    }
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'demote':
                    try {
                    if (!isGroup) return enviar(mess.only.group)
                    if (!isGroupAdmins) return enviar(mess.only.admin)
                    if (!isBotGroupAdmins) return enviar(mess.only.Badmin)
                    if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    if (mentioned.length > 1) {
                        teks = 'Rebaixado com sucesso\n'
                        for (let _ of mentioned) {
                            teks += `@${_.split('@')[0]}\n`
                        }
                        mentions(teks, mentioned, true)
                        drezin.groupParticipantsUpdate(from, mentioned, 'demote')
                    } else {
                        mentions(`Rebaixado com sucesso @${mentioned[0].split('@')[0]} Tornou-se um membro comum!`, mentioned, true)
                        drezin.groupParticipantsUpdate(from, mentioned, 'demote')
                    }
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'ban':
                    if (!isGroup) return enviar(mess.only.group)
                    if (!isGroupAdmins) return enviar(mess.only.admin)
                    if (!isBotGroupAdmins) return enviar(mess.only.Badmin)
                    if (mek.message.extendedTextMessage != undefined || mek.message.extendedTextMessage != null) {
                        num = mek.message.extendedTextMessage.contextInfo.participant
                        drezin.sendMessage(from, {text: bye(num.split('@')[0]), mentions: [num]}, {quoted: mek})
                        drezin.groupParticipantsUpdate(from, [num], 'remove')
                    }
                    else { 
                        enviar('Responda a mensagem da pessoa')
                    }
                    break

                case 'kick':
                    try {
                    if (!isGroup) return enviar(mess.only.group)
                    if (!isGroupAdmins) return enviar(mess.only.admin)
                    if (!isBotGroupAdmins) return enviar(mess.only.Badmin)
                    if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return enviar('Marque a')
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    if (mentioned.length > 1) {
                        teks = 'Pedidos recebidos, emitidos :\n'
                        for (let _ of mentioned) {
                            teks += `@${_.split('@')[0]}\n`
                        }
                        mentions(teks, mentioned, true)
                        drezin.groupParticipantsUpdate(from, mentioned, 'remove')
                    } else {
                        mentions(`Pedidos recebidos, emitidos : @${mentioned[0].split('@')[0]}`, mentioned, true)
                        drezin.groupParticipantsUpdate(from, mentioned, 'remove')
                    }
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'leave':
                    try {
                        if(!isOwner) return enviar(mess.only.ownerB)
                        if (!isGroup) return enviar(mess.only.group)
                        if (isGroupAdmins || isOwner) {
                            drezin.groupLeave(from)
                        } else {
                            enviar(mess.only.admin)
                        }
                    } catch {
                        enviar(resp.erro)
                    }
                     break

                case 'listadmins':
                    try {
                        if (!isGroup) return enviar(mess.only.group)
                        teks = `Lista dos caros adms do grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
                        no = 0
                        for (let admon of groupAdmins) {
                            no += 1
                            teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
                        }
                        mentions(teks, groupAdmins, true)
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'listbr':
                    if(!isGroup) return enviar(mess.only.group)
                    if(!isGroupAdmins) return enviar(mess.only.admin)
                    teks = '🇧🇷 Números brasileiros no grupo: 🇧🇷\n'
                    men = []
                    for(let mem of groupMembers) {
                        if(mem.id.startsWith(55)) {
                            teks += `➤ @${mem.id.split('@')[0]}\n`
                            men.push(mem.id)
                        }
                    }
                    if(teks.indexOf('➤') < 0) return enviar('🇧🇷 *Nenhum numero BR foi encontrado* 🇧🇷')
                    drezin.sendMessage(from, {text: teks, mentions: men})
                    break

                case 'listfake':
                    if(!isGroup) return enviar(mess.only.group)
                    if(!isGroupAdmins) return enviar(mess.only.admin)
                    teks = '🏳️ Números fakes no grupo: 🏳️\n'
                    men = []
                    for(let mem of groupMembers) {
                        if(!mem.id.startsWith(55)) {
                            teks += `➤ @${mem.id.split('@')[0]}\n`
                            men.push(mem.id)
                        }
                    }
                    if(teks.indexOf('➤') < 0) return enviar('*Nenhum numero Gringo foi encontrado*')
                    drezin.sendMessage(from, {text: teks, mentions: men})
                     break

                case 'listddd':
                    if(!isGroup) return enviar(mess.only.group)
                    if(!isGroupAdmins) return enviar(mess.only.admin)
                    if(args.length < 1) return enviar('*Fale o código do pais*')
                    if(isNaN(args[0]))return enviar('*Fale o código do pais*')
                    teks = `Números com codigo de país +${args[0]} registrados no grupo:\n`
                    men = []
                    for(let mem of groupMembers) {
                        if(mem.id.startsWith(args[0])) {
                            teks += `➤ @${mem.id.split('@')[0]}\n`
                            men.push(mem.id)
                        }
                    }
                    if(teks.indexOf('➤') < 0) return enviar(`*Nenhum numero +${args[0]} foi encontrado*`)
                    drezin.sendMessage(from, {text: teks, mentions: men})
                     break

                case 'linkgroup':
                    try {
                        if (!isGroup) return enviar(mess.only.group)
                        if (!isGroupAdmins) return enviar(mess.only.admin)
                        if (!isBotGroupAdmins) return enviar(mess.only.Badmin)
                        linkgc = await drezin.groupInviteCode(from)
                        console.log(linkgc)
                        enviar('https://chat.whatsapp.com/'+linkgc)
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'abrirgp':
                    try {
                        if (!isGroup) return enviar(mess.only.group)
                        if (!isGroupAdmins) return enviar(mess.only.admin)
                        if (!isBotGroupAdmins) return enviar(mess.only.Badmin)
                        drezin.groupSettingUpdate(from, 'not_announcement');
                        enviar('*✅ Grupo Aberto com sucesso ✅*')
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'mudarnome':
                    try {
                        if(!isGroup) return enviar(mess.only.group)
                        teks = body.slice(11)
                        drezin.groupUpdateSubject(from, teks)
                    } catch (e) {
                        console.log(e)
                        enviar(resp.erro)
                    }
                    break

                case 'fechargp':
                    try {
                        if (!isGroup) return enviar(mess.only.group)
                        if (!isGroupAdmins) return enviar(mess.only.admin)
                        if (!isBotGroupAdmins) return enviar(mess.only.Badmin)
                        drezin.groupSettingUpdate(from, 'announcement');
                        enviar('*✅ Grupo fechado com sucesso ✅*')
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'dontback':
                    if (!isGroup) return enviar(mess.only.admin)
                    if (!isGroupAdmins) return enviar(mess.only.admin)
                    if (args.length < 1) return enviar('Hmmmm')
                    if (Number(args[0]) === 1) {
                        var ind = dbids.indexOf(from)
                        if(isDontBack) {
                            dontback[ind].actived = true
                        } else {
                            dontback.push({
                                groupId: from,
                                actived: true,
                                number: []
                            })
                        }
                        fs.writeFileSync('./src/database/antis/dontback.json', JSON.stringify(dontback, null, 2) + '\n')
                        enviar(`Ativou com sucesso o recurso de don't back neste grupo✔️`)
                    } else if (Number(args[0]) === 0) {
                        var ind = dbids.indexOf(from)						
                        if(isDontBack) {
                            dontback[ind].actived = false
                        } else {
                            dontback.push({
                                groupId: from,
                                actived: false,
                                number: []
                            })
                        }
                        fs.writeFileSync('./src/database/antis/dontback.json', JSON.stringify(dontback, null, 2) + '\n')
                        enviar(`Desativou com sucesso o recurso de don't back neste grupo✔️`)
                    } else {
                        enviar('1 para ativar, 0 para desativar')
                    }
                    break

                case 'dbackadd':
                    if (!isGroup) return enviar(mess.only.admin)
                    if (!isGroupAdmins) return enviar(mess.only.admin)
                    if (args.length < 1) return enviar('Diga o numero sem espaço, + ou traço')
                    if (isNaN(args[0])) return enviar('Diga o numero sem espaço, + ou traço')
                    var ind = dbids.indexOf(from)
                    if(isDontBack) {
                        var numind = dontback[ind].number.indexOf(args[0])
                        if(numind >= 0) return enviar('*Esse Número ja esta incluso*')
                        dontback[ind].number.push(args[0])
                    } else {
                        dontback.push({
                            groupId: from,
                            actived: false,
                            number: [args[0]]
                        })
                    }
                    fs.writeFileSync('./src/database/antis/dontback.json', JSON.stringify(dontback, null, 2) + '\n')
                    enviar(`*Número adicionado a lista de don't back*`)

                      break
                case 'dbackrm':
                    if (!isGroup) return enviar(mess.only.admin)
                    if (!isGroupAdmins) return enviar(mess.only.admin)
                    if (args.length < 1) return enviar('Diga o numero sem espaço, + ou traço')
                    if (isNaN(args[0])) return enviar('Diga o numero sem espaço, + ou traço')
                    var ind = dbids.indexOf(from)
                    if(!isDontBack) return enviar('*Nenhum Número não foi adicionado*')
                    var numind = dontback[ind].number.indexOf(args[0])
                    if(numind < 0) return enviar('*Esse número não está incluso*')
                    dontback[ind].number.splice(numind, 1)
                    fs.writeFileSync('./src/database/antis/dontback.json', JSON.stringify(dontback, null, 2) + '\n')
                    enviar(`*Número removido a lista de don't back*`)
                break
                case 'dbacklist':
                    if (!isGroup) return enviar(mess.only.admin)
                    if (!isGroupAdmins) return enviar(mess.only.admin)
                    var ind = dbids.indexOf(from)
                    if(!isDontBack) return enviar('*Nenhum Número não foi adicionado*')
                    teks = '*Números que vou moer na porrada se voltar 😡:*\n'
                    for(i=0;i<dontback[ind].number.length;++i) {
                        teks += `➤ *${dontback[ind].number[i]}*\n`
                    }
                    teks += '*Esses ai vou descer meu martelo do ban 🥵*'
                    enviar(teks)
                    break

                case 'antifake':
                    try {
                    if (!isGroup) return enviar(mess.only.group)
                    if (!isGroupAdmins) return enviar(mess.only.admin)
                    if (args.length < 1) return enviar('Hmmmm')
                    if (Number(args[0]) === 1) {
                        if (isAntiFake) return enviar('Ja esta ativo')
                        antifake.push(from)
                        fs.writeFileSync('./src/database/antis/antifake.json', JSON.stringify(antifake))
                        enviar('Ativou com sucesso o recurso de antifake neste grupo✔️')
                    } else if (Number(args[0]) === 0) {
                        antifake.splice(from, 1)
                        fs.writeFileSync('./src/database/antis/antifake.json', JSON.stringify(antifake))
                        enviar('Desativou com sucesso o recurso de antifake neste grupo✔️')
                    } else {
                        enviar('1 para ativar, 0 para desativar')
                    }
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'antiporn':
                    try {
                        if (!isGroup) return enviar(mess.only.group)
                        if (!isGroupAdmins) return enviar(mess.only.admin)
                        if (!isBotGroupAdmins) return enviar(mess.only.Badmin)
                        if (args.length < 1) return enviar('Hmmmm')
                        if (Number(args[0]) === 1) {
                            if (isAntiPorn) return enviar('Ja esta ativo')
                            antiporn.push(from)
                            fs.writeFileSync('./src/database/antis/antiporn.json', JSON.stringify(antiporn))
                            enviar('Ativou com sucesso o recurso de antipornô neste grupo✔️')
                        } else if (Number(args[0]) === 0) {
                            antiporn.splice(from, 1)
                            fs.writeFileSync('./src/database/antis/antiporn.json', JSON.stringify(antiporn))
                            enviar('Desativou com sucesso o recurso de antipornô neste grupo✔️')
                        } else {
                            enviar('1 para ativar, 0 para desativar')
                        }
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'antilinkhard':
                    try {
                        if (!isGroup) return enviar(mess.only.group)
                        if (!isGroupAdmins) return enviar(mess.only.admin)
                        if (!isBotGroupAdmins) return enviar(mess.only.Badmin)
                        if (args.length < 1) return enviar('Hmmmm')
                        if (Number(args[0]) === 1) {
                            if (isAntiLinkHard) return enviar('Ja esta ativo')
                            antilinkhard.push(from)
                            fs.writeFileSync('./src/database/antis/antilinkhard.json', JSON.stringify(antilinkhard))
                            enviar('Ativou com sucesso o recurso de antilink hardcore neste grupo✔️')
                        } else if (Number(args[0]) === 0) {
                            antilinkhard.splice(from, 1)
                            fs.writeFileSync('./src/database/antis/antilinkhard.json', JSON.stringify(antilinkhard))
                            enviar('Desativou com sucesso o recurso de antilink harcore neste grupo✔️')
                        } else {
                            enviar('1 para ativar, 0 para desativar')
                        }
                    } catch {
                        enviar(resp.erro)
                    }
                     break

                case 'antilink':
                    try {
                        if (!isGroup) return enviar(mess.only.group)
                        if (!isGroupAdmins) return enviar(mess.only.admin)
                        if (!isBotGroupAdmins) return enviar(mess.only.Badmin)
                        if (args.length < 1) return enviar('Hmmmm')
                        if (Number(args[0]) === 1) {
                            if (isAntiLink) return enviar('Ja esta ativo')
                            antilink.push(from)
                            fs.writeFileSync('./src/database/antis/antilink.json', JSON.stringify(antilink))
                            enviar('Ativou com sucesso o recurso de antilink neste grupo✔️')
                        } else if (Number(args[0]) === 0) {
                            antilink.splice(from, 1)
                            fs.writeFileSync('./src/database/antis/antilink.json', JSON.stringify(antilink))
                            enviar('Desativou com sucesso o recurso de antilink neste grupo✔️')
                        } else {
                            enviar('1 para ativar, 0 para desativar')
                        }
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'antipalavra':
                    try {
                    if (!isGroup) return enviar(mess.only.group)
                    if (!isGroupAdmins) return enviar(mess.only.admin)
                    if (args.length < 1) return enviar('Hmmmm')
                    if (Number(args[0]) === 1) {
                        if (isAntiPalavra) return enviar('Ja esta ativo')
                        antipalavra.push(from)
                        if(palavrasid.indexOf(from) < 0) {
                            listantipalavra.push({
                                jid: from,
                                palavras: []
                            })
                        }
                        fs.writeFileSync('./src/database/antipalavra.json', JSON.stringify(antipalavra))
                        fs.writeFileSync('./src/database/listaantipalavra.json', JSON.stringify(listantipalavra, null, 2) + '\n')
                        enviar('Ativou com sucesso o recurso de anti palavras neste grupo✔️')
                    } else if (Number(args[0]) === 0) {
                        antipalavra.splice(from, 1)
                        fs.writeFileSync('./src/database/antipalavra.json', JSON.stringify(antipalavra))
                        enviar('Desativou com sucesso o recurso de anti palavras neste grupo✔️')
                    } else {
                        enviar('1 para ativar, 0 para desativar')
                    }
                    } catch {
                        enviar(resp.erro)
                    }
                     break

                case 'addpalavra':
                    if(!isGroupAdmins) return enviar(mess.only.admin)
                    if(!isAntiPalavra) return enviar('*Ative o anti palavra no grupo*')
                    if(args.length < 1) return enviar(resp.erropala)
                    if(isListAntiPalavra(args[0])) return enviar('*Já esta incluso essa palavra*')
                    if(palavrasid.indexOf(from) >= 0) {
                        ind = palavrasid.indexOf(from)
                        listantipalavra[ind].palavras.push(args[0])
                        fs.writeFileSync('./src/database/listaantipalavra.json', JSON.stringify(listantipalavra, null, 2) + '\n')
                        enviar(`*✔️ Adicionada com sucesso a palavra ${args[0]} na lista de anti palavras ✔️*`)
                    }
                    break

                case 'rmpalavra':
                    if(!isGroupAdmins) return enviar(mess.only.admin)
                    if(!isAntiPalavra) return enviar('*Ative o anti palavra no grupo*')
                    if(args.length < 1) return enviar(resp.erropala)
                    if(!isListAntiPalavra(args[0])) return enviar(resp.nopala)
                    if(palavrasid.indexOf(from) >= 0) {
                        ind = palavrasid.indexOf(from)
                        indpal = listantipalavra[ind].palavras.indexOf(args[0])
                        if(indpal >= 0) {
                            listantipalavra[ind].palavras.splice(indpal, 1)
                            fs.writeFileSync('./src/database/listaantipalavra.json', JSON.stringify(listantipalavra, null, 2) + '\n')
                            enviar(`*✔️ Removida com sucesso a palavra ${args[0]} na lista de anti palavras ✔️*`)
                        } else return enviar('*Esta palavra não está inclusa*')
                    }
                    break

                case 'listpalavra':
                    if(!isAntiPalavra) return enviar('*Ative o anti palavra no grupo*')
                    ind = palavrasid.indexOf(from)
                    if(ind < 0) return enviar('*Não há palavras proibidas no grupo*')
                    teks = '*🚫 A lista das palavras proibidas no grupo são: 🚫*\n'
                    for(i = 0; i < listantipalavra[ind].palavras.length; i++) {
                        teks += `❧ ${listantipalavra[ind].palavras[i]}\n`
                    }
                    enviar(teks)
                    break

                case 'antidoc':
                    try {
                        if (!isGroup) return enviar(mess.only.group)
                        if (!isGroupAdmins) return enviar(mess.only.admin)
                        if (!isBotGroupAdmins) return enviar(mess.only.Badmin)
                        if (args.length < 1) return enviar('Hmmmm')
                        if (Number(args[0]) === 1) {
                            if (isAntiDoc) return enviar('Ja esta ativo')
                            antidoc.push(from)
                            fs.writeFileSync('./src/database/antis/antidoc.json', JSON.stringify(antidoc))
                            enviar('Ativou com sucesso o recurso de anti documento neste grupo✔️')
                        } else if (Number(args[0]) === 0) {
                            antidoc.splice(from, 1)
                            fs.writeFileSync('./src/database/antis/antidoc.json', JSON.stringify(antidoc))
                            enviar('Desativou com sucesso o recurso de anti documento neste grupo✔️')
                        } else {
                            enviar('1 para ativar, 0 para desativar')
                        }
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'antiloc':
                    try {
                        if (!isGroup) return enviar(mess.only.group)
                        if (!isGroupAdmins) return enviar(mess.only.admin)
                        if (!isBotGroupAdmins) return enviar(mess.only.Badmin)
                        if (args.length < 1) return enviar('Hmmmm')
                        if (Number(args[0]) === 1) {
                            if (isAntiLoc) return enviar('Ja esta ativo')
                            antiloc.push(from)
                            fs.writeFileSync('./src/database/antis/antiloc.json', JSON.stringify(antiloc))
                            enviar('Ativou com sucesso o recurso de anti localização neste grupo✔️')
                        } else if (Number(args[0]) === 0) {
                            antiloc.splice(from, 1)
                            fs.writeFileSync('./src/database/antis/antiloc.json', JSON.stringify(antiloc))
                            enviar('Desativou com sucesso o recurso de anti localização neste grupo✔️')
                        } else {
                            enviar('1 para ativar, 0 para desativar')
                        }
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'antiimg':
                    try {
                        if (!isGroup) return enviar(mess.only.group)
                        if (!isGroupAdmins) return enviar(mess.only.admin)
                        if (!isBotGroupAdmins) return enviar(mess.only.Badmin)
                        if (args.length < 1) return enviar('Hmmmm')
                        if (Number(args[0]) === 1) {
                            if (isAntiImg) return enviar('Ja esta ativo')
                            antiimg.push(from)
                            fs.writeFileSync('./src/database/antis/antiimg.json', JSON.stringify(antiimg))
                            enviar('Ativou com sucesso o recurso de anti imagem neste grupo✔️')
                        } else if (Number(args[0]) === 0) {
                            antiimg.splice(from, 1)
                            fs.writeFileSync('./src/database/antis/antiimg.json', JSON.stringify(antiimg))
                            enviar('Desativou com sucesso o recurso de anti imagem neste grupo✔️')
                        } else {
                            enviar('1 para ativar, 0 para desativar')
                        }
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'antivideo':
                    try {
                        if (!isGroup) return enviar(mess.only.group)
                        if (!isGroupAdmins) return enviar(mess.only.admin)
                        if (!isBotGroupAdmins) return enviar(mess.only.Badmin)
                        if (args.length < 1) return enviar('Hmmmm')
                        if (Number(args[0]) === 1) {
                            if (isAntiVid) return enviar('Ja esta ativo')
                            antivid.push(from)
                            fs.writeFileSync('./src/database/antis/antivid.json', JSON.stringify(antivid))
                            enviar('Ativou com sucesso o recurso de anti video neste grupo✔️')
                        } else if (Number(args[0]) === 0) {
                            antivid.splice(from, 1)
                            fs.writeFileSync('./src/database/antis/antivid.json', JSON.stringify(antivid))
                            enviar('Desativou com sucesso o recurso de anti video neste grupo✔️')
                        } else {
                            enviar('1 para ativar, 0 para desativar')
                        }
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'antisticker':
                    try {
                        if (!isGroup) return enviar(mess.only.group)
                        if (!isGroupAdmins) return enviar(mess.only.admin)
                        if (!isBotGroupAdmins) return enviar(mess.only.Badmin)
                        if (args.length < 1) return enviar('Hmmmm')
                        if (Number(args[0]) === 1) {
                            if (isAntiSticker) return enviar('Ja esta ativo')
                            antisticker.push(from)
                            fs.writeFileSync('./src/database/antis/antivid.json', JSON.stringify(antisticker))
                            enviar('Ativou com sucesso o recurso de anti sticker neste grupo✔️')
                        } else if (Number(args[0]) === 0) {
                            antisticker.splice(from, 1)
                            fs.writeFileSync('./src/database/antis/antivid.json', JSON.stringify(antisticker))
                            enviar('Desativou com sucesso o recurso de anti sticker neste grupo✔️')
                        } else {
                            enviar('1 para ativar, 0 para desativar')
                        }
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'antictt':
                    try {
                        if (!isGroup) return enviar(mess.only.group)
                        if (!isGroupAdmins) return enviar(mess.only.admin)
                        if (!isBotGroupAdmins) return enviar(mess.only.Badmin)
                        if (args.length < 1) return enviar('Hmmmm')
                        if (Number(args[0]) === 1) {
                            if (isAntiCtt) return enviar('Ja esta ativo')
                            antictt.push(from)
                            fs.writeFileSync('./src/database/antis/antictt.json', JSON.stringify(antictt))
                            enviar('Ativou com sucesso o recurso de anti contato neste grupo✔️')
                        } else if (Number(args[0]) === 0) {
                            antictt.splice(from, 1)
                            fs.writeFileSync('./src/database/antis/antictt.json', JSON.stringify(antictt))
                            enviar('Desativou com sucesso o recurso de anti contato neste grupo✔️')
                        } else {
                            enviar('1 para ativar, 0 para desativar')
                        }
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'antiaudio':
                    try {
                        if (!isGroup) return enviar(mess.only.group)
                        if (!isGroupAdmins) return enviar(mess.only.admin)
                        if (!isBotGroupAdmins) return enviar(mess.only.Badmin)
                        if (args.length < 1) return enviar('Hmmmm')
                        if (Number(args[0]) === 1) {
                            if (isAntiAudio) return enviar('Ja esta ativo')
                            antiaudio.push(from)
                            fs.writeFileSync('./src/database/antis/antiaudio.json', JSON.stringify(antiaudio))
                            enviar('Ativou com sucesso o recurso de anti audio neste grupo✔️')
                        } else if (Number(args[0]) === 0) {
                            antiaudio.splice(from, 1)
                            fs.writeFileSync('./src/database/antis/antiaudio.json', JSON.stringify(antiaudio))
                            enviar('Desativou com sucesso o recurso de anti audio neste grupo✔️')
                        } else {
                            enviar('1 para ativar, 0 para desativar')
                        }
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'mylimit':
                    if(!isLimitActive) return enviar('*O limitador de comandos não esta ativado*')
                    if(limitsids.indexOf(sender) < 0) return enviar('*Você deve ser uns dos proprietários ou e a primeira vez que usa o bot*')
                    var ind = limitsids.indexOf(sender)
                    enviar(`*Olá ${pushname} o seu limite é de ${limitedlist[ind].limit} comandos restantes*`)
                    break

                case 'limitcmd':
                    try {
                        if (!isOwner) return enviar(mess.only.ownerB)
                        if (args.length < 1) return enviar('Hmmmm')
                        if (Number(args[0]) === 1) {
                            if (isLimitActive) return enviar('Ja esta ativo')
                            limitactive.push('Ativado')
                            fs.writeFileSync('./src/database/limitactive.json', JSON.stringify(limitactive))
                            enviar('Ativou com sucesso o recurso de limite no bot✔️')
                        } else if (Number(args[0]) === 0) {
                            fs.writeFileSync('./src/database/limitactive.json', JSON.stringify([]))
                            enviar('Desativou com sucesso o recurso de limite no bot✔️')
                        } else {
                            enviar('1 para ativar, 0 para desativar')
                        }
                        } catch {
                            enviar(resp.erro)
                        }
                    break

                case 'resetlimit':
                    if (!isOwner) return enviar(mess.only.ownerB)
                    fs.writeFileSync('./src/database/limitedlist.json', JSON.stringify([]))
                    enviar('Limite resetado com sucesso!! ✔️')
                    break

                case 'rmlimituser':
                    if(!isOwner) return enviar(mess.only.ownerB)
                    if(limitsids.indexOf(args[0]+'@s.whatsapp.net') < 0) return enviar('*Não há dados sobre esse número nos limites*')
                    var ind = limitsids.indexOf(args[0]+'@s.whatsapp.net')
                    limitedlist.splice(ind, 1)
                    fs.writeFileSync('./src/database/limitedlist.json', JSON.stringify(limitedlist, null, 2) + '\n')
                    mentions(`@${args[0]} foi resetado os limites`, [args[0]+'@s.whatsapp.net'], true)
                    break

                case 'level':
                    if(args.length < 1) {
                        const userLevel = getLevelingLevel(sender)
                        const userXp = getLevelingXp(sender)
                        if (userLevel === undefined && userXp === undefined) return enviar(`*Você não esta registrado, para se registrar digite ${prefix}registerlevel*`)
                        const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                        resul = `╭━━👾 𝙇𝙀𝙑𝙀𝙇 𝙎𝙏𝘼𝙏𝙐𝙎 👾━━╮\n┣⊱ *Nome* : ${pushname}\n┣⊱ *Wa.me:* wa.me/${sender.split('@')[0]}\n┣⊱ *XP atual/requirido:* ${userXp}/${requiredXp}\n┣⊱ *Level:* ${userLevel}\n╰━━━━━━━━━━━━━━━━━━━╯`
                        try {
                            ppimg = await drezin.profilePictureUrl(sender)
                        } catch {
                            ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                        }
                        ppbuff = await getBuffer(ppimg)
                        ran = getRandom('.jpg')
                        fs.writeFileSync(ran, ppbuff)
                        try {
                            const upload = await uploadimg('brizaloka', ran, ran)
                            buf = await getBuffer(`https://api.brizaloka-api.tk/photomod/rank?apikey=brizaloka&name=${sender.split('@')[0]}&atualxp=${userXp}&maxxp=${requiredXp}&desc=2021&colorbar=0061FF&colortext=FF2E00&background=https://i.imgur.com/tVKFNFk.png&profileimg=${upload.resultado.link}&rank=${getLevelingPosition(sender)}`)
                            fs.unlinkSync(ran)
                            drezin.sendMessage(from, {image: buf, caption: result}, {quoted: mek})
                        } catch {
                            enviar(resul)
                        }
                    } else if(!isNaN(args[0])) {
                        const num = args[0]+'@s.whatsapp.net'
                        const userLevel = getLevelingLevel(num)
                        const userXp = getLevelingXp(num)
                        if (userLevel === undefined && userXp === undefined) return enviar(`*Você não esta registrado, para se registrar digite ${prefix}registerlevel*`)
                        const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                        const pushname = drezin.contacts[num] != undefined ? drezin.contacts[num].vname || drezin.contacts[num].notify : undefined
                        resul = `╭━━👾 𝙇𝙀𝙑𝙀𝙇 𝙎𝙏𝘼𝙏𝙐𝙎 👾━━╮\n┣⊱ *Nome* : ${pushname}\n┣⊱ *Wa.me:* wa.me/${num.split('@')[0]}\n┣⊱ *XP atual/requirido:* ${userXp}/${requiredXp}\n┣⊱ *Level:* ${userLevel}\n╰━━━━━━━━━━━━━━━━━━━╯`
                        try {
                            ppimg = await drezin.profilePictureUrl(sender)
                        } catch {
                            ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                        }
                        ppbuff = await getBuffer(ppimg)
                        ran = getRandom('.jpg')
                        fs.writeFileSync(ran, ppbuff)
                        const upload = await uploadimg('brizaloka', ran, ran)
                        buf = await getBuffer(`https://api.brizaloka-api.tk/photomod/rank?apikey=brizaloka&name=${sender.split('@')[0]}&atualxp=${userXp}&maxxp=${requiredXp}&desc=2021&colorbar=0061FF&colortext=FF2E00&background=https://i.imgur.com/tVKFNFk.png&profileimg=${upload.resultado.link}&rank=${getLevelingPosition(sender)}`)
                        fs.unlinkSync(ran)
                        drezin.sendMessage(from, {image: buf, caption: result}, {quoted: mek})
                    } else return enviar('*Diga o número sem +, - ou espaço*')
                break 

                case 'mutados':
                    var ind = GroupsMutedActived.indexOf(from)
                    teks = 'Usuários mutados:\n'
                    for (let _ of muted[ind].numbers) {
                        teks += `@${_.split('@')[0]}\n`
                    }
                    teks += 'Se eles dizerem um piu, desço o martelo do ban neles 😡'
                    enviar(teks)
                    break

                case 'mute':
                    if(!isGroup) return enviar(mess.only.group)
                    if(!isGroupAdmins) return enviar(mess.only.admin)
                    if(!isBotGroupAdmins) return enviar(mess.only.Badmin)
                    if(args.length < 1) return enviar('*Marque o número que deseja mutar*')
                    if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return enviar('*Marque o número que deseja mutar*')
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    if(isMuted) {
                        var ind = GroupsMutedActived.indexOf(from)
                        teks = 'Usuários mutados:\n'
                        for (let _ of mentioned) {
                            teks += `@${_.split('@')[0]}\n`
                            muted[ind].numbers.push(_)
                        }
                        fs.writeFileSync('./src/database/muted.json', JSON.stringify(muted, null, 2) + '\n')
                        teks += 'Se eles dizerem um piu, desço o martelo do ban neles 😡'
                        mentions(teks, mentioned, true)
                    } else {
                        const data = {
                            jid: from,
                            numbers: mentioned
                        }
                        muted.push(data)
                        fs.writeFileSync('./src/database/muted.json', JSON.stringify(muted, null, 2) + '\n')
                        teks = 'Usuários mutados:\n'
                        for (let _ of mentioned) {
                            teks += `@${_.split('@')[0]}\n`
                        }
                        teks += 'Se eles dizerem um piu, desço o martelo do ban neles 😡'
                        mentions(teks, mentioned, true)
                    }
                    break

                case 'desmute':
                    if(!isGroup) return enviar(mess.only.group)
                    if(!isGroupAdmins) return enviar(mess.only.admin)
                    if(!isBotGroupAdmins) return enviar(mess.only.Badmin)
                    if(args.length < 1) return enviar('*Marque o número que deseja desmutar*')
                    if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return enviar('*Marque o número que deseja desmutar*')
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    var ind = GroupsMutedActived.indexOf(from)
                    if(isMuted) {
                        for(let _ of mentioned) {
                            if(muted[ind].numbers.indexOf(_) >= 0) {
                                var rmind = muted[ind].numbers.indexOf(_)
                                muted[ind].numbers.splice(rmind, 1)
                            }
                        }
                        fs.writeFileSync('./src/database/muted.json', JSON.stringify(muted, null, 2) + '\n')
                        teks = 'Usuários desmutados:\n'
                        for (let _ of mentioned) {
                            teks += `@${_.split('@')[0]}\n`
                        }
                        teks += 'Agr eles podem falar a vontade 😊'
                        mentions(teks, mentioned, true)
                    } else {
                        const data = {
                            jid: from,
                            numbers: []
                        }
                        muted.push(data)
                        fs.writeFileSync('./src/database/muted.json', JSON.stringify(muted, null, 2) + '\n')
                        teks = 'Usuários desmutados:\n'
                        for (let _ of mentioned) {
                            teks += `@${_.split('@')[0]}\n`
                        }
                        teks += 'Agr eles podem falar a vontade 😊'
                        mentions(teks, mentioned, true)
                    }
                    break

                case 'welcomehelp':
                    if(!isGroup) return enviar(mess.only.group)
                    if(!isGroupAdmins) return enviar(mess.only.admin)
                    enviar(`*Bem vindo ao menu de ajuda do sistema de boas vindas de grupos individuais o comando ${prefix}welcomeadd mais um texto cria uma mensagem de boas vindas quando alguém entra no gp`
                    + `e o comando ${prefix}byeadd cria uma mensagem de despedida, caso queira deixar a mensagem mais decorada também tem o sistema de variáveis, segue abaixo as variáveis que pode usar:*\n`
                    + `\n*#data#* - _mostra a data atual_`
                    + `\n*#hora#* - _mostra a hora atual_`
                    + `\n*#botnum#* - _mostra o numero do bot_`
                    + `\n*#user#* - _mostra o nome do usuário que entrar_`
                    + `\n*#numuser#* - _mostra o número do usuário que entrar_`
                    + `\n*#groupname#* - _mostra o nome do grupo_`)
                    break

                case 'welcome':
                    try {
                    if (!isGroup) return enviar(mess.only.group)
                    if (!isGroupAdmins) return enviar(mess.only.admin)
                    if (args.length < 1) return enviar('Hmmmm')
                    if (Number(args[0]) === 1) {
                        if (isWelkom) return enviar('Ja esta ativo')
                        welkom.push(from)
                        fs.writeFileSync('./src/database/welkom.json', JSON.stringify(welkom))
                        enviar('Ativou com sucesso o recurso de boas-vindas neste grupo✔️')
                    } else if (Number(args[0]) === 0) {
                        welkom.splice(from, 1)
                        fs.writeFileSync('./src/database/welkom.json', JSON.stringify(welkom))
                        enviar('Desativou com sucesso o recurso de boas-vindas neste grupo✔️')
                    } else {
                        enviar('1 para ativar, 0 para desativar')
                    }
                    } catch {
                        enviar(resp.erro)
                    }
                break

                case 'byeadd':
                    if(!isGroup) return enviar(mess.only.group)
                    if(!isGroupAdmins) return enviar(mess.only.admin)
                    if(args.length < 1) return enviar('*Escreva a mensagem de saída*')
                    teks = body.slice(8)
                    if(isByed) {
                        var ind = groupIdBye.indexOf(from)
                        bye_group[ind].msg = teks
                        fs.writeFileSync('./src/database/byegp.json', JSON.stringify(bye_group, null, 2) + '\n')
                        enviar('*Mensagem de saída alteradas com sucesso!*')
                    } else {
                        var json = {
                            jid: from,
                            msg: teks
                        }
                        bye_group.push(json)
                        fs.writeFileSync('./src/database/byegp.json', JSON.stringify(bye_group, null, 2) + '\n')
                        enviar('*Mensagem de saída criada com sucesso!*')
                    }
                    break

                case 'welcomeadd':
                    if(!isGroup) return enviar(mess.only.group)
                    if(!isGroupAdmins) return enviar(mess.only.admin)
                    if(args.length < 1) return enviar('*Escreva a mensagem de boas-vindas*')
                    teks = body.slice(12)
                    if(isWelcomed) {
                        var ind = groupIdWelcomed.indexOf(from)
                        welcome_group[ind].msg = teks
                        fs.writeFileSync('./src/database/welcomegp.json', JSON.stringify(welcome_group, null, 2) + '\n')
                        enviar('*Mensagem de boas vindas alteradas com sucesso!*')
                    } else {
                        var json = {
                            jid: from,
                            msg: teks
                        }
                        welcome_group.push(json)
                        fs.writeFileSync('./src/database/welcomegp.json', JSON.stringify(welcome_group, null, 2) + '\n')
                        enviar('*Mensagem de boas vindas criada com sucesso!*')
                    }
                    break

                case 'gpinitvoto':
                case 'gpvotoinit':
                    if(!isGroupAdmins) return enviar(mess.only.admin)
                    if(!isGroup) return enviar(mess.only.group)
                    if(isVotoGroupActived) return enviar('*Uma votação de grupo já foi iniciada*')
                    teks = body.slice(12).split('|')
                    if(teks.length <= 2) return enviar('*Deve ter pelo menos 2 opções e um tema para iniciar uma votação*')
                    t1 = teks[0]
                    optsdata = []
                    optsteks = ''
                    for(i=1;i<teks.length;++i){
                        optsdata.push({
                            nome: teks[i].trim(),
                            votou: []
                        })
                        if(i == teks.length) optsteks += `*${i}) ${teks[i].trim()}*`
                        else optsteks += `*${i}) ${teks[i].trim()}*\n`
                    }
                    votodata = {
                        group_id: from,
                        tema: t1.trim(),
                        votos: optsdata
                    }
                    gpvoto.push(votodata)
                    fs.writeFileSync('./src/database/gpvoto.json', JSON.stringify(gpvoto, null, 2) + '\n')
                    enviar(`*Votação de grupo iniciada*\n*Tema: ${t1.trim()}*\n\n*Opções:*\n${optsteks}`)
                    break

                case 'gpvotoclear':
                case 'gpclearvoto':
                    if(!isGroupAdmins) return enviar(mess.only.admin)
                    if(!isGroup) return enviar(mess.only.group)
                    if(!isVotoGroupActived) return enviar('*Uma votação de grupo não foi iniciada*')
                    var ind = votoactivegp.indexOf(from)
                    for(i=0;i< gpvoto[ind].votos.length;++i) gpvoto[ind].votos[i].votou = []
                    fs.writeFileSync('./src/database/gpvoto.json', JSON.stringify(gpvoto, null, 2) + '\n')
                    enviar(`*Votação de grupo resetada com o tema ${gpvoto[ind].tema}*`)
                    break

                case 'gpstatusvoto':
                case 'gpvotostatus':
                    if(!isGroup) return enviar(mess.only.group)
                    if(!isVotoGroupActived) return enviar('*Uma votação de grupo não foi iniciada*')
                    var ind = votoactivegp.indexOf(from)
                    opts = ''
                    for(i=0;i<gpvoto[ind].votos.length;++i) {
                        opts += `*${i+1}) ${gpvoto[ind].votos[i].nome}*\n*Votaram: ${gpvoto[ind].votos[i].votou.length}*\n\n`
                    }
                    enviar(`*Status de voto*\n*Tema: ${gpvoto[ind].tema}*\n*Opções:*\n${opts}`)
                    break

                case 'gpvoto':
                    if(!isGroup) return enviar(mess.only.group)
                    if(!isVotoGroupActived) return enviar('*Nenhuma votação foi iniciada*')
                    var ind = votoactivegp.indexOf(from)
                    votenum = args[0] - 1
                    if(isNaN(votenum)) return enviar('*Isso não é uma opção*')
                    allnumvoted = []
                    for(let obj of gpvoto[ind].votos) {
                        for(let nums of obj.votou) {
                            allnumvoted.push(nums)
                        }
                    }
                    if(allnumvoted.indexOf(sender) >= 0) return enviar('*Você já votou amigão*')
                    try {
                        gpvoto[ind].votos[votenum].votou.push(sender)
                        fs.writeFileSync('./src/database/gpvoto.json', JSON.stringify(gpvoto, null, 2) + '\n')
                        enviar('*Voto registrado com sucesso*')
                    } catch {
                        enviar('*Não foi encontrado essa opção*')
                    }
                    break

                case 'gpfinishvoto':
                case 'gpvotofinish':
                    if(!isGroupAdmins) return enviar(mess.only.admin)
                    if(!isGroup) return enviar(mess.only.group)
                    if(!isVotoGroupActived) return enviar('*Nenhuma votação foi iniciada*')
                    var ind = votoactivegp.indexOf(from)
                    teks = `*Opções:*\n`
                    for(i=0;i<gpvoto[ind].votos.length;++i) {
                        teks += `*${i+1}) ${gpvoto[ind].votos[i].nome}*\n*Votos: ${gpvoto[ind].votos[i].votou.length}*\n\n`
                    }
                    enviar(`*Votação encerrada*\n\n*Tema: ${gpvoto[ind].tema}*\n\n${teks}`)
                    fs.writeFileSync('./src/database/gpvoto.json', JSON.stringify([], null, 2) + '\n')
                    break

                case 'gpvotohelp':
                    enviar(gpvotohelp)
                    break

                case 'statusvoto':
                case 'votostatus':
                    if(!isVotoInit) return enviar('*Nenhuma votação foi iniciada*')
                    opts = ''
                    for(i=0;i<voto[0].votos.length;++i) {
                        opts += `*${i+1}) ${voto[0].votos[i].nome}*\n*Votaram: ${voto[0].votos[i].votou.length}*\n\n`
                    }
                    enviar(`*Status de voto*\n*Tema: ${voto[0].tema}*\n*Opções:*\n${opts}`)
                    break

                case 'voto':
                    if(!isVotoInit) return enviar('*Nenhuma votação foi iniciada*')
                    votenum = args[0] - 1
                    if(isNaN(votenum)) return enviar('*Isso não é uma opção*')
                    allnumvoted = []
                    for(let obj of voto[0].votos) {
                        for(let nums of obj.votou) {
                            allnumvoted.push(nums)
                        }
                    }
                    if(allnumvoted.indexOf(sender) >= 0) return enviar('*Você já votou amigão*')
                    try {
                        voto[0].votos[votenum].votou.push(sender)
                        fs.writeFileSync('./src/database/voto.json', JSON.stringify(voto, null, 2) + '\n')
                        enviar('*Voto registrado com sucesso*')
                    } catch {
                        enviar('*Não foi encontrado essa opção*')
                    }
                    break

                case 'finishvoto':
                case 'votofinish':
                    if(!isOwner) return enviar(mess.only.ownerB)
                    if(!isVotoInit) return enviar('*Nenhuma votação foi iniciada*')
                    teks = `*Opções:*\n`
                    for(i=0;i<voto[0].votos.length;++i) {
                        teks += `*${i+1}) ${voto[0].votos[i].nome}*\n*Votos: ${voto[0].votos[i].votou.length}*\n\n`
                    }
                    enviar(`*Votação encerrada*\n\n*Tema: ${voto[0].tema}*\n\n${teks}`)
                    fs.writeFileSync('./src/database/voto.json', JSON.stringify([], null, 2) + '\n')
                    break

                case 'votohelp':
                    enviar(votohelp)
                    break

                case 'initvoto':
                case 'votoinit':
                    if(!isOwner) return enviar(mess.only.ownerB)
                    if(isVotoInit) return enviar('*Uma votação já foi iniciada*')
                    teks = body.slice(10).split('|')
                    if(teks.length <= 2) return enviar('*Deve ter pelo menos 2 opções e um tema para iniciar uma votação*')
                    t1 = teks[0]
                    optsdata = []
                    optsteks = ''
                    for(i=1;i<teks.length;++i){
                        optsdata.push({
                            nome: teks[i].trim(),
                            votou: []
                        })
                        if(i == teks.length) optsteks += `*${i}) ${teks[i].trim()}*`
                        else optsteks += `*${i}) ${teks[i].trim()}*\n`
                    }
                    votodata = {
                        tema: t1.trim(),
                        votos: optsdata
                    }
                    voto.push(votodata)
                    fs.writeFileSync('./src/database/voto.json', JSON.stringify(voto, null, 2) + '\n')
                    enviar(`*Votação geral iniciada*\n*Tema: ${t1.trim()}*\n\n*Opções:*\n${optsteks}`)
                    break

                case 'votoclear':
                case 'clearvoto':
                    if(!isOwner) return enviar(mess.only.ownerB)
                    if(!isVotoInit) return enviar('*Nenhuma votação foi iniciada*')
                    for(i=0;i< voto[0].votos.length;++i) voto[0].votos[i].votou = []
                    fs.writeFileSync('./src/database/voto.json', JSON.stringify(voto, null, 2))
                    enviar(`*Votação geral resetada com o tema ${voto[0].tema}*`)
                    break

                case 'block':
                    try{
                        if(!isOwner) return enviar('Somente meu propietário e autorizados podem usar esse comando')
                        if(args.length <1 ) return enviar('Cade o número?')
                        num = args[0]
                        if(args[0].startsWith('@')){ num = num.slice(1)}
                        if(isNaN(num)) return enviar('Isso não é um numero de telefone')
                        if(num == OriginalOwner) return enviar('Não posso bloquear meu propietário')
                        if(blockeds.includes(num+'@s.whatsapp.net')) return enviar('Ja está bloqueado')
                        blockeds.push(num+'@s.whatsapp.net')
                        fs.writeFileSync('./src/database/blocklist.json', JSON.stringify(blockeds))
                        drezin.updateBlockStatus([num+'@s.whatsapp.net'], 'block')
                        enviar('*✅ Bloqueado com sucesso ✅*')
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'unblock':
                    try{
                        if(!isOwner) return enviar('Somente meu propietário e autorizados podem usar esse comando')
                        if(args.length <1 ) return enviar('Cade o número?')
                        num = args[0]
                        if(num.startsWith('@')){ num = num.slice(1)}
                        if(isNaN(num)) return enviar('Isso não é um numero de telefone')
                        if(!blockeds.includes(num+'@s.whatsapp.net')) return enviar('Ja está desbloqueado')
                        var indice = blockeds.indexOf(num+'@s.whatsapp.net');
                        blockeds.splice(indice, 1);
                        fs.writeFileSync('./src/database/blocklist.json', JSON.stringify(blockeds))
                        drezin.updateBlockStatus([num+'@s.whatsapp.net'], 'unblock')
                        enviar('*✅ Desbloqueado com sucesso ✅*')
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'antinewchat':
                    try {
                    if (!isOwner) return enviar(mess.only.ownerB)
                    if (args.length < 1) return enviar('Hmmmm')
                    if (Number(args[0]) === 1) {
                        if (isAntiNewchat) return enviar('Ja esta ativo')
                        antinewchat.push('Ativado')
                        fs.writeFileSync('./src/database/antis/antinewchat.json', JSON.stringify(antinewchat))
                        enviar('Ativou com sucesso o recurso de anti chat novo no bot✔️')
                    } else if (Number(args[0]) === 0) {
                        fs.writeFileSync('./src/database/antis/antinewchat.json', JSON.stringify([]))
                        enviar('Desativou com sucesso o recurso de anti chat novo no bot✔️')
                    } else {
                        enviar('1 para ativar, 0 para desativar')
                    }
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'antipv':
                    try {
                    if (!isOwner) return enviar(mess.only.ownerB)
                    if (args.length < 1) return enviar('Hmmmm')
                    if (Number(args[0]) === 1) {
                        if (isAntiPv) return enviar('Ja esta ativo')
                        antipv.push('Ativado')
                        fs.writeFileSync('./src/database/antis/antipv.json', JSON.stringify(antipv))
                        enviar('Ativou com sucesso o recurso de antipv no bot✔️')
                    } else if (Number(args[0]) === 0) {
                        fs.writeFileSync('./src/database/antis/antipv.json', JSON.stringify([]))
                        enviar('Desativou com sucesso o recurso de antipv no bot✔️')
                    } else {
                        enviar('1 para ativar, 0 para desativar')
                    }
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'antispamcmd':
                    try {
                        if (!isOwner) return enviar(mess.only.ownerB)
                        if (args.length < 1) return enviar('Hmmmm')
                        if (Number(args[0]) === 1) {
                            if (isAntiSpamcmd) return enviar('Ja esta ativo')
                            antispamcmd.push('Ativado')
                            fs.writeFileSync('./src/database/antis/antispamcmd.json', JSON.stringify(antispamcmd))
                            enviar('Ativou com sucesso o recurso de anti spam de comando no bot✔️')
                        } else if (Number(args[0]) === 0) {
                            fs.writeFileSync('./src/database/antis/antispamcmd.json', JSON.stringify([]))
                            enviar('Desativou com sucesso o recurso de anti spam de comando no bot✔️')
                        } else {
                            enviar('1 para ativar, 0 para desativar')
                        }
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'toimg':
                    try {
                        if (!isQuotedSticker) return enviar('❌ adesivo de resposta um ❌')
                        enviar(mess.wait)
                        buff = await getFileBuffer(mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
                        drezin.sendMessage(from, {image: buff}, {quoted: mek})
                    } catch (e) {
                        console.log(e);
                        enviar(resp.erro)
                    }
                    break

                case 'criador':
                        try {
                            drezin.sendMessage(from, {contacts: {displayName: 'Meu criador ^-^', contacts: [vcard]}})
                            drezin.sendMessage(from, {text: 'Este é o número do meu proprietário >_<, não envie spam ou bloqueio você'}, { quoted: mek} )
                        } catch {
                            enviar(resp.erro)
                        }
                    break

                case 'blacklist':
                    try{
                        mem_id = []
                        list = 'Lista das pessoas que não obedeço 🤏😎: \n'
                        for( i = 0; i < blockeds.length; i++) {
                            list += '@'+blockeds[i].split('@')[0]+'\n'
                            mem_id += blockeds[i]
                        }
                        drezin.sendMessage(from, {text: list, mentions: mem_id}, {quoted: mek})
                    } catch {
                        enviar(resp.erro)
                    }
                break

                case 'blocklist':
                    json_list = await drezin.getBlocklist()
                    teks = `🚫 *Números bloqueado pelo bot* 🚫\n\n`
                    for(let obj of json_list.content[0].content) {
                        teks += `➽ @${obj.attrs.jid.split('@')[0]}\n`
                    }
                    enviar(teks)
                    break

                case 'ping':
                    try{
                        timest = speed();
                        latensi = speed() - timest
                        enviar(`*Velocidade: _${latensi.toFixed(4)}ms_*`)
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'oficialcriador':
                        const vcardcreator = 'BEGIN:VCARD\n' 
                            + 'VERSION:3.0\n' 
                            + 'FN:Dr3z1n\n' 
                            + 'ORG:Lindo;\n' 
                            + 'TEL;type=CELL;type=VOICE;waid=556286231599:+55 62 8623-1599\n' 
                            + 'END:VCARD'
                        drezin.sendMessage(from, {contacts: {displayName: "drezin", contacts: [vcardcreator]}}, {quoted: mek})
                        drezin.sendMessage(from, {text:`*Esse é o contato do meu criador oficial, o do comando ${prefix}criador é o proprietário do bot*`})
                    break

                case 'info':
                    me = drezin.user
                    uptime = process.uptime()
                    teks = `*Nome do bot* : ${me.name}\n*Número do Bot* : @${me.id.split('@')[0]}\n*Prefix* : ${prefix}\n*Total de contatos bloqueados* : ${blocked.length}\n*O bot esta ativo desde* : ${kyun(uptime)}`
                    buffer = await getBuffer(await drezin.profilePictureUrl(drezin.user.id))
                    drezin.sendMessage(from, {image: buffer, caption: teks, mentions: [drezin.user.id]})
                    break

                case 'listblockcmd':
                    try{
                        teks = '*🚫 A lista de comandos bloqueado são: 🚫*\n'
                        for(i = 0; i < blockcmd.length; i++) {
                            teks += `❧ ${blockcmd[i]}\n`
                        }
                        enviar(teks)
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'ibere':
                    if(args.length < 1) return enviar('Escreva o texto de deseje que fale')
                    teks = body.slice(7)
                    uber.getAudioUrl('pub_mgqgxwvhxsukcqqawy', 'pk_d4cdd6d0-5ab7-4067-b9e2-8cdfdae6ec9f', 'ibere', teks).then(async res => {
                        buff = await getBuffer(res)
                        drezin.sendMessage(from, {audio: buff, mimetype: 'audio/mpeg'})
                    })
                    break

                case 'eminem':
                    if(args.length < 1) return enviar('Escreva o texto de deseje que fale')
                    teks = body.slice(7)
                    uber.getAudioUrl('pub_mgqgxwvhxsukcqqawy', 'pk_d4cdd6d0-5ab7-4067-b9e2-8cdfdae6ec9f', 'eminem', teks).then(async res => {
                        buff = await getBuffer(res)
                        drezin.sendMessage(from, {audio: buff, mimetype: 'audio/mpeg'})
                    })
                    break

                case 'chapolin':
                    if(args.length < 1) return enviar('Escreva o texto de deseje que fale')
                    teks = body.slice(7)
                    uber.getAudioUrl('pub_mgqgxwvhxsukcqqawy', 'pk_d4cdd6d0-5ab7-4067-b9e2-8cdfdae6ec9f', 'chapolin-br', teks).then(async res => {
                        buff = await getBuffer(res)
                        drezin.sendMessage(from, {audio: buff, mimetype: 'audio/mpeg'})
                    })
                    break

                case 'patolino':
                    if(args.length < 1) return enviar('Escreva o texto de deseje que fale')
                    teks = body.slice(7)
                    uber.getAudioUrl('pub_mgqgxwvhxsukcqqawy', 'pk_d4cdd6d0-5ab7-4067-b9e2-8cdfdae6ec9f', 'patolino', teks).then(async res => {
                        buff = await getBuffer(res)
                        drezin.sendMessage(from, {audio: buff, mimetype: 'audio/mpeg'})
                    })
                    break

                case 'faustao':
                    if(args.length < 1) return enviar('Escreva o texto de deseje que fale')
                    teks = body.slice(7)
                    uber.getAudioUrl('pub_mgqgxwvhxsukcqqawy', 'pk_d4cdd6d0-5ab7-4067-b9e2-8cdfdae6ec9f', 'faustao', teks).then(async res => {
                        buff = await getBuffer(res)
                        drezin.sendMessage(from, {audio: buff, mimetype: 'audio/mpeg'})
                    })
                    break

                case 'blockcmd':
                    try {
                        if(!isOwner) return enviar('Quem é Você?')
                        if (args.length < 1) return enviar('*Bloquear com que comando?*')
                        if(isCmdBlocked(args[0])) return enviar('*Já esta incluso essa palavra*')
                        cmd = args[0]
                        blockcmd.push(cmd)
                        fs.writeFileSync('./src/database/blockcmd.json', JSON.stringify(blockcmd))
                        enviar('*✅ Comando bloqueado com sucesso ✅*')
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'unblockcmd':
                    try {
                    if(!isOwner) return enviar(mess.only.ownerB)
                    if(args.length < 1) return enviar(resp.erropala)
                    if(!isCmdBlocked(args[0])) return enviar(resp.nopala)
                    ind = blockcmd.indexOf(args[0])
                    blockcmd.splice(ind, 1)
                    fs.writeFileSync('./src/database/blockcmd.json', JSON.stringify(blockcmd))
                    enviar(`*✔️ Comando ${args[0]} desbloqueado com sucesso*`)
                    } catch {
                        enviar(resp.erro)
                    }
                    break
// NOVOS COMANDOS
                case 'flower':
                    try {
                    if(args.length < 1 ) return enviar(resp.erropala)
                    if(isCmdBlocked(args[0])) return enviar(resp.nopala)
                    txt = body.slice(7)
                    enviar(resp.espere)
                    bla = await fetchJson(`https://api.brizaloka-api.tk/photooxy/flower?apikey=brizaloka&text=${txt}`)
                    blabla = await getBuffer(bla.resultado)

                    drezin.sendMessage(from, {image: blabla, mimetype: "image/jpeg"})
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'undergrass':
                    try {
                    if(args.length < 1 ) return enviar(resp.erropala)
                    if(isCmdBlocked(args[0])) return enviar(resp.nopala)
                    txt = body.slice(11)
                    enviar(resp.espere)
                    bla = await fetchJson(`https://api.brizaloka-api.tk/photooxy/undergrass?apikey=brizaloka&text=${txt}`)
                    blabla = await getBuffer(bla.resultado)

                    drezin.sendMessage(from, {image: blabla, mimetype: "image/jpeg"})
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'tipograff':
                    try {
                    if(args.length < 1 ) return enviar(resp.erropala)
                    if(isCmdBlocked(args[0])) return enviar(resp.nopala)
                    txt = body.slice(10)
                    enviar(resp.espere)
                    bla = await fetchJson(`https://api.brizaloka-api.tk/photooxy/typography?apikey=brizaloka&text=${txt}`)
                    blabla = await getBuffer(bla.resultado) 

                    drezin.sendMessage(from, {image: blabla, mimetype: 'image/jpeg'})
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'narutologo':
                    try {
                    if(args.length < 1 ) return enviar(resp.erropala)
                    if(isCmdBlocked(args[0])) return enviar(resp.nopala)
                    txt = body.slice(10)
                    enviar(resp.espere)
                    bla = await fetchJson(`https://api.brizaloka-api.tk/photooxy/naruto?apikey=brizaloka&text=${txt}`)
                    blabla = await getBuffer(bla.resultado) 
    
                    drezin.sendMessage(from, {image: blabla, mimetype: 'image/jpeg'})
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'love':
                    try {
                    if(args.length < 1 ) return enviar(resp.erropala)
                    if(isCmdBlocked(args[0])) return enviar(resp.nopala)
                    txt = body.slice(5)
                    enviar(resp.espere)
                    bla = await fetchJson(`https://api.brizaloka-api.tk/photooxy/love?apikey=brizaloka&text=${txt}`)
                    blabla = await getBuffer(bla.resultado) 
        
                    drezin.sendMessage(from, {image: blabla, mimetype: 'image/jpeg'})
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'coffe':
                    try {
                    if(args.length < 1 ) return enviar(resp.erropala)
                    if(isCmdBlocked(args[0])) return enviar(resp.nopala)
                    txt = body.slice(6)
                    enviar(resp.espere)
                    bla = await fetchJson(`https://api.brizaloka-api.tk/photooxy/coffe?apikey=brizaloka&text=${txt}`)
                    blabla = await getBuffer(bla.resultado) 
            
                    drezin.sendMessage(from, {image: blabla, mimetype: 'image/jpeg'})
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'coffe2':
                    try {
                    if(args.length < 1 ) return enviar(resp.erropala)
                    if(isCmdBlocked(args[0])) return enviar(resp.nopala)
                    txt = body.slice(7)
                    enviar(resp.espere)
                    bla = await fetchJson(`https://api.brizaloka-api.tk/photooxy/coffev2?apikey=brizaloka&text=${txt}`)
                    blabla = await getBuffer(bla.resultado) 
                
                    drezin.sendMessage(from, {image: blabla, mimetype: 'image/jpeg'})
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'cemitery':
                    try {
                    if(args.length < 1 ) return enviar(resp.erropala)
                    if(isCmdBlocked(args[0])) return enviar(resp.nopala)
                    txt = body.slice(10)
                    enviar(resp.espere)
                    bla = await fetchJson(`https://api.brizaloka-api.tk/photooxy/cemitery?apikey=brizaloka&text=${txt}`)
                    blabla = await getBuffer(bla.resultado) 
                
                    drezin.sendMessage(from, {image: blabla, mimetype: 'image/jpeg'})
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'googlelogo':
                    try {
                    if (args.length < 1 ) return enviar(resp.erropala)
                    if (isCmdBlocked(args[0])) return enviar(resp.nopala)
                    txt = body.slice(11)
                    txt1 = txt.split("|")[0];
                    txt2 = txt.split("|")[1];
                    enviar(resp.espere)
                    bla = await fetchJson(`https://api.brizaloka-api.tk/photooxy/googlesrc?apikey=brizaloka&text=${txt1}&text2=${txt2}`)
                    blabla = await getBuffer(bla.resposta)

                    drezin.sendMessage(from, {image: blabla, mimetype: 'image/jpeg'})
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'gradient':
                    try {
                    if(args.length < 1 ) return enviar(resp.erropala)
                    if(isCmdBlocked(args[0])) return enviar(resp.nopala)
                    txt = body.slice(9)
                    enviar(resp.espere)
                    bla = await fetchJson(`https://api.brizaloka-api.tk/photooxy/gradient?apikey=brizaloka&text=${txt}`)
                    blabla = await getBuffer(bla.resultado) 
                    
                    drezin.sendMessage(from, {image: blabla, mimetype: 'image/jpeg'})
                    } catch {
                        enviar(resp.erro)
                    }
                    break
                
                case 'glowing':
                    try {
                    if(args.length < 1 ) return enviar(resp.erropala)
                    if(isCmdBlocked(args[0])) return enviar(resp.nopala)
                    txt = body.slice(7)
                    enviar(resp.espere)
                    bla = await fetchJson(`https://api.brizaloka-api.tk/photooxy/glowing?apikey=brizaloka&text=${txt}`)
                    blabla = await getBuffer(bla.resultado) 
                        
                    drezin.sendMessage(from, {image: blabla, mimetype: 'image/jpeg'})
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'pubglogo':
                    try {
                    if (args.length < 1 ) return enviar(resp.erropala)
                    if (isCmdBlocked(args[0])) return enviar(resp.nopala)
                    txt = body.slice(9)
                    txt1 = txt.split("|")[0];
                    txt2 = txt.split("|")[1];
                    enviar(resp.espere)
                    bla = await fetchJson(`https://api.brizaloka-api.tk/photooxy/pubg?apikey=brizaloka&text=${txt1}&text2=${txt2}`)
                    blabla = await getBuffer(bla.resultado)
    
                    drezin.sendMessage(from, {image: blabla, mimetype: 'image/jpeg'})
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'battlefield':
                    try {
                    if (args.length < 1 ) return enviar(resp.erropala)
                    if (isCmdBlocked(args[0])) return enviar(resp.nopala)
                    txt = body.slice(12)
                    txt1 = txt.split("|")[0];
                    txt2 = txt.split("|")[1];
                    enviar(resp.espere)
                    bla = await fetchJson(`https://api.brizaloka-api.tk/photooxy/btf4?apikey=brizaloka&text=${txt2}&text2=${txt2}`)
                    blabla = await getBuffer(bla.resultado)
        
                    drezin.sendMessage(from, {image: blabla, mimetype: 'image/jpeg'})
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'shinerainbow':
                    try {
                    if(args.length < 1 ) return enviar(resp.erropala)
                    if(isCmdBlocked(args[0])) return enviar(resp.nopala)
                    txt = body.slice(13)
                    enviar(resp.espere)
                    bla = await fetchJson(`https://api.brizaloka-api.tk/photooxy/shinerainbow?apikey=brizaloka&text=${txt}`)
                    blabla = await getBuffer(bla.resultado) 
                            
                    drezin.sendMessage(from, {image: blabla, mimetype: 'image/jpeg'})
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'graffit':
                    try {
                    if(args.length < 1 ) return enviar(resp.erropala)
                    if(isCmdBlocked(args[0])) return enviar(resp.nopala)
                    txt = body.slice(8)
                    enviar(resp.espere)
                    bla = await fetchJson(`https://api.brizaloka-api.tk/photooxy/graffiti?apikey=brizaloka&text=${txt}`)
                    blabla = await getBuffer(bla.resultado) 
                                
                    drezin.sendMessage(from, {image: blabla, mimetype: 'image/jpeg'})
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'neon':
                    try {
                    if(args.length < 1 ) return enviar(resp.erropala)
                    if(isCmdBlocked(args[0])) return enviar(resp.nopala)
                    txt = body.slice(5)
                    enviar(resp.espere)
                    bla = await fetchJson(`https://api.brizaloka-api.tk/photooxy/neon/rainbow?apikey=brizaloka&text=${txt}`)
                    blabla = await getBuffer(bla.resultado) 
                                    
                    drezin.sendMessage(from, {image: blabla, mimetype: 'image/jpeg'})
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'neon2':
                    try {
                    if(args.length < 1 ) return enviar(resp.erropala)
                    if(isCmdBlocked(args[0])) return enviar(resp.nopala)
                    txt = body.slice(6)
                    enviar(resp.espere)
                    bla = await fetchJson(`https://api.brizaloka-api.tk/photooxy/neon/green?apikey=brizaloka&text=${txt}`)
                    blabla = await getBuffer(bla.resultado) 
                                        
                    drezin.sendMessage(from, {image: blabla, mimetype: 'image/jpeg'})
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'neon3':
                    try {
                    if(args.length < 1 ) return enviar(resp.erropala)
                    if(isCmdBlocked(args[0])) return enviar(resp.nopala)
                    txt = body.slice(6)
                    enviar(resp.espere)
                    bla = await fetchJson(`https://api.brizaloka-api.tk/photooxy/neon/blue?apikey=brizaloka&text=${txt}`)
                    blabla = await getBuffer(bla.resultado) 
                                            
                    drezin.sendMessage(from, {image: blabla, mimetype: 'image/jpeg'})
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'neon4':
                    try {
                    if(args.length < 1 ) return enviar(resp.erropala)
                    if(isCmdBlocked(args[0])) return enviar(resp.nopala)
                    txt = body.slice(6)
                    enviar(resp.espere)
                    bla = await fetchJson(`https://api.brizaloka-api.tk/photooxy/neon/yellow?apikey=brizaloka&text=${txt}`)
                    blabla = await getBuffer(bla.resultado) 
                                                
                    drezin.sendMessage(from, {image: blabla, mimetype: 'image/jpeg'})
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'neon5':
                    try {
                    if(args.length < 1 ) return enviar(resp.erropala)
                    if(isCmdBlocked(args[0])) return enviar(resp.nopala)
                    txt = body.slice(6)
                    enviar(resp.espere)
                    bla = await fetchJson(`https://api.brizaloka-api.tk/photooxy/neon/sky?apikey=brizaloka&text=${txt}`)
                    blabla = await getBuffer(bla.resultado) 
                                                    
                    drezin.sendMessage(from, {image: blabla, mimetype: 'image/jpeg'})
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'phlogo':
                    try {
                    if(args.length < 1 ) return enviar(resp.erropala)
                    if(isCmdBlocked(args[0])) return enviar(resp.nopala)
                    txt = body.slice(7)
                    txt1 = txt.split("|")[0];
                    txt2 = txt.split("|")[1];
                    enviar(resp.espere)
                    bla = await fetchJson(`https://api.brizaloka-api.tk/textpro/ph?apikey=brizaloka&text1=${txt1}&text2=${txt2}`)
                    blabla = await getBuffer(bla.img)

                    drezin.sendMessage(from, {image: blabla, mimetype: 'image/jpeg'})
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'marvel':
                    try {
                    if(args.length < 1) return enviar(resp.erropala)
                    if(isCmdBlocked(args[0])) return enviar(resp.nopala)
                    txt = body.slice(6)
                    txt1 = txt.split("|")[0];
                    txt2 = txt.split("|")[1];
                    enviar(resp.espere)
                    bla = await fetchJson(`https://api.brizaloka-api.tk/textpro/marvel?apikey=brizaloka&text1=${txt1}&text2=${txt2}`)
                    blabla = await getBuffer(bla.img)

                    drezin.sendMessage(from, {image: blabla, mimtype: 'image/jpeg'})
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'avengers':
                    try {
                    if(args.length < 1) return enviar(resp.erropala)
                    if(isCmdBlocked(args[0])) return enviar(resp.nopala)
                    txt = body.slice(9)
                    txt1 = txt.split("|")[0];
                    txt2 = txt.split("|")[1];
                    enviar(resp.espere)
                    bla = await fetchJson(`https://api.brizaloka-api.tk/textpro/avengers?apikey=brizaloka&text1=${txt1}&text2=${txt2}`)
                    blabla = await getBuffer(bla.img)
    
                    drezin.sendMessage(from, {image: blabla, mimtype: 'image/jpeg'})
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'thunder':
                    try {
                    if(args.length < 1 ) return enviar(resp.erropala)
                    if(isCmdBlocked(args[0])) return enviar(resp.nopala)
                    txt = body.slice(8)
                    enviar(resp.espere)
                    bla = await fetchJson(`https://api.brizaloka-api.tk/textpro/thunder?apikey=brizaloka&text=${txt}`)
                    blabla = await getBuffer(bla.img) 
                                                        
                    drezin.sendMessage(from, {image: blabla, mimetype: 'image/jpeg'})
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'dropwater':
                    try {
                    if(args.length < 1 ) return enviar(resp.erropala)
                    if(isCmdBlocked(args[0])) return enviar(resp.nopala)
                    txt = body.slice(8)
                    enviar(resp.espere)
                    bla = await fetchJson(`https://api.brizaloka-api.tk/textpro/dropwater?apikey=brizaloka&text=${txt}`)
                    blabla = await getBuffer(bla.img) 
                                                            
                    drezin.sendMessage(from, {image: blabla, mimetype: 'image/jpeg'})
                    } catch {
                    enviar(resp.erro)
                    }
                    break

                case 'neonlight':
                    try {
                    if(args.length < 1 ) return enviar(resp.erropala)
                    if(isCmdBlocked(args[0])) return enviar(resp.nopala)
                    txt = body.slice(10)
                    enviar(resp.espere)
                    bla = await fetchJson(`https://api.brizaloka-api.tk/textpro/neonlight?apikey=brizaloka&text=${txt}`)
                    blabla = await getBuffer(bla.img) 
                                                                
                    drezin.sendMessage(from, {image: blabla, mimetype: 'image/jpeg'})
                    } catch {
                    enviar(resp.erro)
                    }
                    break

                case 'glitch':
                    try {
                    if(args.length < 1 ) return enviar(resp.erropala)
                    if(isCmdBlocked(args[0])) return enviar(resp.nopala)
                    txt = body.slice(7)
                    enviar(resp.espere)
                    bla = await fetchJson(`https://api.brizaloka-api.tk/textpro/impressive_glitch?apikey=brizaloka&text=${txt}`)
                    blabla = await getBuffer(bla.img) 
                                                                    
                    drezin.sendMessage(from, {image: blabla, mimetype: 'image/jpeg'})
                    } catch {
                    enviar(resp.erro)
                    }
                    break

                case 'bearlogo':
                    try {
                    if(args.length < 1 ) return enviar(resp.erropala)
                    if(isCmdBlocked(args[0])) return enviar(resp.nopala)
                    txt = body.slice(7)
                    enviar(resp.espere)
                    bla = await fetchJson(`https://api.brizaloka-api.tk/textpro/bearlogo?apikey=brizaloka&text=${txt}`)
                    blabla = await getBuffer(bla.img) 
                                                                        
                    drezin.sendMessage(from, {image: blabla, mimetype: 'image/jpeg'})
                    } catch {
                    enviar(resp.erro)
                    }
                    break 

                case 'lionlogo':
                    try {
                    if(args.length < 1) return enviar(resp.erropala)
                    if(isCmdBlocked(args[0])) return enviar(resp.nopala)
                    txt = body.slice(9)
                    txt1 = txt.split("|")[0];
                    txt2 = txt.split("|")[1];
                    enviar(resp.espere)
                    bla = await fetchJson(`https://api.brizaloka-api.tk/textpro/lionlogo?apikey=brizaloka&text1=${txt1}&text2=${txt2}`)
                    blabla = await getBuffer(bla.img)
        
                    drezin.sendMessage(from, {image: blabla, mimtype: 'image/jpeg'})
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'wolflogo':
                    try {
                    if(args.length < 1) return enviar(resp.erropala)
                    if(isCmdBlocked(args[0])) return enviar(resp.nopala)
                    txt = body.slice(9)
                    txt1 = txt.split("|")[0];
                    txt2 = txt.split("|")[1];
                    enviar(resp.espere)
                    bla = await fetchJson(`https://api.brizaloka-api.tk/textpro/wolflogo?apikey=brizaloka&text1=${txt1}&text2=${txt2}`)
                    blabla = await getBuffer(bla.img)
            
                    drezin.sendMessage(from, {image: blabla, mimtype: 'image/jpeg'})
                    } catch {
                        enviar(resp.erro)
                    }
                    break

                case 'matrix':
                    try {
                    if(args.length < 1 ) return enviar(resp.erropala)
                    if(isCmdBlocked(args[0])) return enviar(resp.nopala)
                    txt = body.slice(7)
                    enviar(resp.espere)
                    bla = await fetchJson(`https://api.brizaloka-api.tk/textpro/matrix?apikey=brizaloka&text=${txt}`)
                    blabla = await getBuffer(bla.img) 
                                                                            
                    drezin.sendMessage(from, {image: blabla, mimetype: 'image/jpeg'})
                    } catch {
                        enviar(resp.erro)
                    }
                    break 

                case '3dbox':
                    try {
                    if(args.length < 1 ) return enviar(resp.erropala)
                    if(isCmdBlocked(args[0])) return enviar(resp.nopala)
                    txt = body.slice(6)
                    enviar(resp.espere)
                    bla = await fetchJson(`https://api.brizaloka-api.tk/textpro/box3d?apikey=brizaloka&text=${txt}`)
                    blabla = await getBuffer(bla.img) 
                                                                                
                    drezin.sendMessage(from, {image: blabla, mimetype: 'image/jpeg'})
                    } catch {
                        enviar(resp.erro)
                    }
                    break 

                case 'space':
                    try {
                    if(args.length < 1 ) return enviar(resp.erropala)
                    if(isCmdBlocked(args[0])) return enviar(resp.nopala)
                    txt = body.slice(6)
                    enviar(resp.espere)
                    bla = await fetchJson(`https://api.brizaloka-api.tk/textpro/space?apikey=brizaloka&text=${txt}`)
                    blabla = await getBuffer(bla.img) 
                                                                                    
                    drezin.sendMessage(from, {image: blabla, mimetype: 'image/jpeg'})
                    } catch {
                        enviar(resp.erro)
                    }
                    break 

                case 'circuit':
                    try {
                    if(args.length < 1 ) return enviar(resp.erropala)
                    if(isCmdBlocked(args[0])) return enviar(resp.nopala)
                    txt = body.slice(8)
                    enviar(resp.espere)
                    bla = await fetchJson(`https://api.brizaloka-api.tk/textpro/circuit?apikey=brizaloka&text=${txt}`)
                    blabla = await getBuffer(bla.img) 
                                                                                    
                    drezin.sendMessage(from, {image: blabla, mimetype: 'image/jpeg'})
                    } catch {
                        enviar(resp.erro)
                    }
                    break 

                case 'magma':
                    try {
                    if(args.length < 1 ) return enviar(resp.erropala)
                    if(isCmdBlocked(args[0])) return enviar(resp.nopala)
                    txt = body.slice(6)
                    enviar(resp.espere)
                    bla = await fetchJson(`https://api.brizaloka-api.tk/textpro/magma?apikey=brizaloka&text=${txt}`)
                    blabla = await getBuffer(bla.img) 
                                                                                    
                    drezin.sendMessage(from, {image: blabla, mimetype: 'image/jpeg'})
                    } catch {
                        enviar(resp.erro)
                    }
                    break 

                case 'menulite':
                    drezin.sendMessage(from, { text: help(prefix, time, pushname, `Wa.me/${sender.split('@')[0]}`)}, {quoted: mek })
                    break

                case 'pack':
                    menua18 = fs.readFileSync("./src/audios/packs.opus")
                    buff = await getBuffer(menupack)
                    drezin.sendMessage(from, {audio: menua18, ppt:true}) 
                    drezin.sendMessage(from, {image: buff, caption: packs(time, pushname, `Wa.me/${sender.split('@')[0]}`)}, "Ala o punheteiro kkk", {quoted: mek})
                    break

                case 'presente':
                    menupr = fs.readFileSync("./src/audios/presente.opus")
                    buff = await getBuffer(menupres)
                    drezin.sendMessage(from, {audio: menupr, ppt:true})
                    drezin.sendMessage(from, {image: buff, caption: presente(time, pushname, `Wa.me/${sender.split('@')[0]}`)}, "Presente feito por Dr3z1n", {quoted: mek})
                    break

                case 'menudono':
                    drezin.sendMessage(from, { text: menudz(prefix, time, pushname,`Wa.me/${sender.split('@')[0]}`)}, {quoted: mek})
                    break 

                case 'menufig':
                    drezin.sendMessage(from, { text: menufig(prefix, time, pushname, `Wa.me/${sender.split('@')[0]}`)}, {quoted: mek})
                    break
                
                case 'menu18':
                    drezin.sendMessage(from, { text: menup18(prefix, time, pushname, `Wa.me/${sender.split('@')[0]}`)}, {quoted: mek})
                    break

                case 'menujogo':
                    drezin.sendMessage(from, { text: menujo(prefix, time, pushname, `Wa.me/${sender.split('@')[0]}`)}, {quoted: mek})
                    break

                case 'menufoto':
                   drezin.sendMessage(from, { text: menufoto(prefix, time, pushname, `Wa.me/${sender.split('@')[0]}`)}, {quoted: mek})
                    break

                    case 'menuadm':
                        drezin.sendMessage(from, { text: menuadm(prefix, time, pushname, `Wa.me/${sender.split('@')[0]}`)}, {quoted: mek})
                         break

                case 'instabot':
                    enviar(resp.espere)
                    enviar(from, `${instabot}`,
                    instabot = `╭━━━━━━━━━━━━━━━━━━━╮
                    ┃🔥☄️𝙀𝙨𝙩⃟𝙚𝙡𝙖𝙧 𝙊𝙧𝙞⃟𝙤𝙣☄️🔥
                    ┃  
                    ┃ 🕐 𝐃𝐚𝐭𝐚: ${time}
                    ┃ 🙂 𝐔𝐬𝐮𝐚́𝐫𝐢𝐨: ${pushname}
                    ┃ 🌎 𝐖𝐚𝐦𝐞: Wa.me/${sender.split('@')[0]}                                   
                    ┃
                    ┣━━ ⬇️🤖 𝐓𝐮𝐭𝐨𝐫𝐢𝐚𝐥 𝐝𝐞 𝐢𝐧𝐬𝐭𝐚𝐥𝐚𝐫 🤖⬇️ ━╮
                    ┃ 
                    ┃ *Instalar no Termux*
                    ┃ apt update && apt upgrade
                    ┃ apt install git -y
                    ┃ apt install nodejs -y
                    ┃ apt install ffmpeg -y
                    ┃ git clone https://github.com/Dr3z1n/estelar-bot
                    ┃ cd estelar-bot
                    ┃ sh install.sh
                    ┃ 
                    ┃ *Iniciar o bot*
                    ┃ sh start.sh
                    ┃ 
                    ┃ *Caso de erro, instale o*
                    ┃ *modulo para termux*
                    ┃ pkg install yarn
                    ┃ yarn
                    ┃ 
                    ┃ *Se não estiver funcionando o qrcode*
                    ┃ 
                    ┃ sh gerarqr.sh
                    ┃ node index.js
                    ┃ 
                    ┃ se caso queira colocar 
                    ┃ o bot 24h 
                    ┃ irei mostrar depois
                    ┃ 
                    ┃ *Caso não consiga iniciar*
                    ┃ é meio dificil escanear
                    ┃ o qr code, vc liga 
                    ┃ o  bot escaneia 
                    ┃ volta no termux
                    ┃ liga denovo enquanto 
                    ┃ estiver no loop
                    ┃ ai prontinho bot funcionando
                    ┃ link grupo ofc do bot
                    ┃ https://linkebr.com/grupoofv
                    ┃ 
                    ╰━━━━━━━━━━━━━━━━━━━╯`, {quoted: mek})
                    break

                case 'ajuda':
                case 'help':
                case 'comandos':
                case 'menu':
                    menump3 = fs.readFileSync("./src/audios/menu.opus")
                    buff = await getBuffer(menuimg)
                    drezin.sendMessage(from, {audio: menump3, ppr: true})
                    drezin.sendMessage(from, {image: buff, caption: help(prefix,time, pushname,`Wa.me/${sender.split('@')[0]}`)}, "Leia com Atenção", {quoted: mek})
                    break

                default:
                    if (isGroup && isSimi && budy != undefined && type === 'textMessage' && bidy.toLowerCase().includes('drezin')) {
                        console.log(budy)
                        muehe = await simih(budy)
                        console.log(muehe)
                        enviar(muehe)
                    }
                    if(isCmd) {
                        console.log(color('[ERRO]','red'), `[Comando ${command} que foi dado por ${color(sender.split('@')[0])} não é registrado]`)    
                        enviar(notregister)
                    }
            }
        } catch(e) {
            console.log('*Houve um erro!*')
            console.log(e)
        }
    })

    drezin.ev.on('connection.update', async (update) => {
        const {connection, lastDisconnect, qr} = update
        if(qr) {
            console.log(color('[','white'), color('!','red'), color(']','white'), color(' Escaneie o qr code, mas vc precisa de um celular novo ou wpp web'))
        }
        if(connection === 'close') {
            startSocket()
        }
        if(connection === 'open') {
            connected = true    
            success('2', 'Pronto, conectei :)')
        }
        if(connection === 'connecting') {
            connected = false
            start('2', 'Pera la to conectando...')
        }
        if(update.isNewLogin) {
            success('2', 'Conectado com sucesso! Reinicie o programa para logar no whatsapp web')
        }
    })

    drezin.ev.on ('creds.update', saveState)
}
startSocket()