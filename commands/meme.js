const getMemeUrls = require('get-meme-urls');
const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
let sq = args[0]
if(!sq) return message.reply("You must provide something to search with!")
let ind = Math.floor(Math.random() * 4);
console.log(ind)
let ps = 25
console.log(ps)


getMemeUrls(sq, [{apiKey:"f5a83654-2cdb-4881-a7a9-b965e8a8b2d0"}, {pageSize: ps}, {pageIndex: ind}]).then(result => {
  console.log(result)
  if(!result[0]) return message.reply("Couldn't find memes with this name!")
    var meme = result[Math.floor(Math.random() * result.length)];
    let memee = new Discord.RichEmbed()
	.setImage(meme)
.setFooter(`Requested by ${message.author.tag}`)
    message.channel.send(memee)
  }).catch(err => {
console.log(err)
 });

}
module.exports.help = {
	name: "meme"
}