var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "GEL BERHABER ROL YAPALIM",
assets : {
large_image : "Numbani",
large_text : "Titan Medya/Titan RPG" // bu gözükmeyebilir!!
},
buttons : [{label : "Discord" , url : "https://discord.gg/XNXgApteu5"},{label : "Mta " , url : "mtasa://45.131.1.27:22003"}] //kendinize göre yazın
}
})
})
client.login({ clientId : "804137103868559381" }).catch(console.error);
client.on('ready', () => {
	console.log(`Herhangi bir hata bulunamadı.`)
	console.log(client.user.username, `hesabı ile yetkilendirildi.`)
});