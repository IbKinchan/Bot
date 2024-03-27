//RECODE BY Kinchan 
//Credit DGXEON

const fs = require('fs')
const chalk = require('chalk')

//owmner v card
global.ytname = "YT: KinchanGTPS" //YouTube channel kamu 
global.socialm = "GitHub: lbKinchan" //Nama Github Atau Instagram Kamu 
global.location = "Indonesia, Kalimantan Selatan, Banjarmasin" //Lokasi Kamu

//new
global.botname = 'Kinchan Bot' //Nama Bot Kamu
global.ownernumber = '6285389296108' //Nomor Kamu Jangan Nomor Bot
global.ownername = 'Kinchan' //Nama Kamu Bukan Nama Bot
global.websitex = "" //Website Kamu Apabila Tidak Punya Kosongkan saja 
global.wagc = "https://chat.whatsapp.com/GKf7SN6jonIAu4DdWzBTkX" //Link Group CHAT Kamu
global.themeemoji = '🪀' // Ganti Ke Emoji Yang Kamu Suka
global.wm = "DGXEON" //Ubah Nama Wm Kamu
global.botscript = '' //Link Script
global.packname = "Sticker By" //Packname [ sticker by ] Ganti Ke Nama Kamu
global.author = "Kinchan\n\n+6285389296108" //Ubah Author Kamu Dan Nomor Kamu
global.creator = "6285389296108@s.whatsapp.net" //Nomor Creator Kamu
global.xprefix = '.' //Ganti Ke Prefix Kamu Sukai Apabila Tidak Ingin Jangan di ubah
global.premium = ["6285389296108"] //Ganti Nomor Untuk Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v3' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //autoblock nomor Ganti Ke false untuk off Ganti Ke true untuk on
global.antiforeignnumber = '91' //Anti Nomor Asing Ganti Ke false untuk off Ganti Ke true untuk on
global.welcome = false //welcome/left Ganti Ke false untuk off Ganti Ke true untuk on
global.anticall = false //Bot Akan Ngeblock Apabila Di Telpon Ganti Ke false untuk off Ganti Ke true untuk on
global.autoswview = false //auto status/story Ganti Ke false untuk off Ganti Ke true untuk on
global.adminevent = false //perlihatkan promote/demote Ganti Ke false untuk off Ganti Ke true untuk on
global.groupevent = false //perlihatkan update messages in group chat Ganti Ke false untuk off Ganti Ke true untuk on
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//Ganti Thumbnail Kamu Di './XeonMedia/theme
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})