/* eslint-disable no-console */
const fs = require('fs');
/**
 * @param {import('discord.js').Client} bot
 */
async function Handle(bot) {
    fs.readdir('./commands/', (err, files) => {

        if (err) console.log(err);
        let jsfile = files.filter(f => f.split('.').pop() === 'js');
        if (jsfile.length <= 0) {
            console.log('[COMMAND] No Commands found!');
            return;
        }

        // eslint-disable-next-line no-unused-vars
        jsfile.forEach((f, _i) => {

            let props = require(`../commands/${f}`);
            console.log('[COMMAND]' + ` ${f}` + ' loaded!');
            
            bot.commands.set(props.config.name, props);
            props.config.aliases.forEach(alias => {
                bot.aliases.set(alias, props.config.name);
            });
        });
    });
}
module.exports = Handle;
