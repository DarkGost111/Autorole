const Discord = require("discord.js")//  
const client = new Discord.Client();// 

client.on('ready', () => {
    console.log(`Tornados is Online Now`)
})


 client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","Tornados"));
    });

client.login(process.env.BOT_TOKEN);
