const Discord = require("discord.js");
const randomcolor = require('randomcolor');
var embed = new Discord.RichEmbed();
exports.run = (client, message, args) => {
message.delete()
embed.setAuthor("aeris#0018 Selfbot | Fuck My Life", client.user.displayAvatarURL)
.setImage("https://cdn.discordapp.com/attachments/310489121581826049/323615922302746624/xd.gif")
.setColor("#FE0101")
message.channel.send({embed})
}