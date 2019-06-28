/**
 * @param {import('discord.js').Client} client 
 * @param {import('discord.js').Message} message 
 * @param {String} args 
 * @param {import('discord.js')} Discord
 */

// eslint-disable-next-line no-unused-vars
async function run(client, message, args, Discord) {

const embed = new Discord.RichEmbed()
            .setTitle('Current Partnerships')
            .setColor('BLUE')
            //.setColor(0x51267)
            .setDescription('[Membercounter Bot](https://discordbots.org/bot/448845486515027970)')
            .addField('Your bot is not displayed here?', 'Contact ◢◤Myst◢◤#4217 for a partnership' )
            .setTimestamp()
            .setFooter(`${client.user.username} 2019 `)
        message.channel.send(embed);
}
    
module.exports = {
    config: {
        name: 'partnerships', 
        aliases: ["ps", "partner" ]
    },
    run: run
};
