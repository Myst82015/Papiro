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
    .addField("Available Commands:", "```config``` See the current config\n```serveinfo``` Displays some informations about the server")
    message.channel.send(embed)
//message.channel.send('Help menu is coming soon')
}
        
module.exports = {
    config: {
        enabled: true,
        guildOnly: true,
        name: 'help', // Command Name
        aliases: ['h'], // Aliases vom Command
    },
    run: run
};
