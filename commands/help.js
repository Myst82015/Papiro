/**
 * @param {import('discord.js').Client} client 
 * @param {import('discord.js').Message} message 
 * @param {String} args 
 * @param {import('discord.js')} Discord
 */
// eslint-disable-next-line no-unused-vars
async function run(client, message, args, Discord) {

    let embed= new Discord.RichEmbed()
    .setColor("BLUE")
    .setDescription("Papiro Help")
    .addField("Available Commands:", "```config``` See the current config\n```serverinfo``` Displays some informations about the server\n```stats```Displays some statistics about the bot\n```partnerships```Displays the current partner bots")
    message.channel.send(embed)
}
        
module.exports = {
    config: {
        name: 'help', 
        aliases: ['h'], 
    },
    run: run
};
