/**
 * @param {import('discord.js').Client} client 
 * @param {import('discord.js').Message} message 
 * @param {String} args 
 * @param {import('discord.js')} Discord
 */

// eslint-disable-next-line no-unused-vars
async function run(client, message, args, Discord) {
    const embed = new Discord.RichEmbed()
                    .setColor(0x00fa69)
                    .setTitle('Invite me!')
                    .setDescription('Thank you for taking consideration into inviting me! \n [Click here](https://discordapp.com/oauth2/authorize?client_id=589903640458821632&scope=bot&permissions=8)')
                    .setFooter(`${client.user.username} 2019`)
                    .setTimestamp()
    message.channel.send(embed);

}
    
module.exports = {
    config: {
        enabled: true,
        guildOnly: true,
        name: 'invite', 
        aliases: ["botinvite"]
    },
    run: run
};
