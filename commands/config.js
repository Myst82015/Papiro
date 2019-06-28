/**
 * @param {import('discord.js').Client} client 
 * @param {import('discord.js').Message} message 
 * @param {String} args 
 * @param {import('discord.js')} Discord
 */

// eslint-disable-next-line no-unused-vars
async function run(client, message, args, Discord) {
let embed = new Discord.RichEmbed()
.setColor('BLUE')
.setDescription(`Current configuration for **${message.guild.name}**`)
.addField("Anti-Invite", ':ballot_box_with_check:  Active')
.addField("Anti-NSFW", ':ballot_box_with_check:  Active')
.setTimestamp()
.setFooter(`${client.user.username} 2019`)
message.channel.send(embed)
}
    
module.exports = {
    config: {
        enabled: true,
        guildOnly: true,
        name: 'config', 
        aliases: []
    },
    run: run
};
