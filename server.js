if (Number(process.version.slice(1).split(".")[0]) < 8) throw new Error("Node 8.0.0 or higher is required. Update Node on your system.");

/* eslint-disable no-console */
const Discord = require('discord.js');
const config = require('./config.js');
/* Handlers */
const commandHandler = require('./handlers/commandHandler.js');
const linkHandler = require('./handlers/linkHandler.js');
const bot = new Discord.Client();
/* CMD Handler Init */
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
const talkedRecently = new Set();

bot.login(config.token);

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag} on ${bot.guilds.size} with ${bot.users.size}`);
    commandHandler(bot);
});

bot.on('message', async message => {
    if (message.author.bot) return;
    linkHandler(message);

    if (!message.content.startsWith(config.prefix)) return;

    if (talkedRecently.has(message.author.id)){
        message.channel.send("Please wait 2.5 seconds before exuting the command")
        .then(msg => {
            setTimeout(() => {
                if (msg.deletable) msg.delete();
            }, 15000);
        });
    }

// Adds the user to the set so that they can't talk for 2.5 seconds
talkedRecently.add(message.author.id);
setTimeout(() => {
  // Removes the user from the set after 2.5 seconds
  talkedRecently.delete(message.author.id);
}, 2500);

    const args = message.content.split(' ').slice(1);
    const cmd = message.content.toLowerCase().split('').slice(config.prefix.length).join('').split(' ')[0];
    let command;

    if (bot.commands.has(cmd)) {
        command = bot.commands.get(cmd);
    } else {
        command = bot.commands.get(bot.aliases.get(cmd));
    }

    if (command) return command.run(bot, message, args, Discord);


});

