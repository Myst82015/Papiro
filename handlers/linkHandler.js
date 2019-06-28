const config = require('../config.js');
const { WebhookClient } = require('discord.js');
const loghook = new WebhookClient(config.Logging.WebHook.id, config.Logging.WebHook.token);

/**
 * @param {import('discord.js').Message} message 
 */
function handleLink(message) {
    if (message.member.hasPermission('ADMINISTRATOR')) return;

    if (message.content.match(config.RegEx.url) ||
        message.content.match(config.RegEx.discordMarkdown.invite)) {

        if (message.content.match(config.RegEx.discordMarkdown.invite)) {
            if (message.deletable) {
                message.delete(250);
                message.channel.send('Link Deleted:\n**Invite links are not permitted on this server**')
                    .then(msg => {
                        setTimeout(() => {
                            if (msg.deletable) msg.delete();
                        }, 15000);
                    });
                loghook.send(`${message.author.tag}(${message.author.id}) sent an Invite link`);
            }
        }
        else if (message.content.match(/(https?:\/\/)?(www\.)?(nakedphotos)?(\.club)\/.+[a-z|A-Z|0-9]/g) || message.content.match(/(https?:\/\/)?(www\.)?(privatepage\.vip)\/.+[a-z|0-9|A-Z]/gm)) {
            /* NSFW Link */
            message.delete();
            message.channel.send('NSFW content detected\n**You are not permitted to send this content on this server**')
                .then(msg => {
                    setTimeout(() => {
                        if (msg.deletable) msg.delete();
                    }, 15000);
                });
            const banMember = message.author;
            const reason = 'NSFW Link';


            message.guild.ban(banMember, { days: 1, reason: reason })
                .then(() => {
                    message.channel.send(`${message.author.tag} has been banned by Guardian for: Sending NSFW Links`)
                        .then(msg => {
                            setTimeout(() => {
                                if (msg.deletable) msg.delete();
                            }, 15000);
                        });
                    loghook.send(`${message.author.tag}(${message.author.id}) has been banned by Guardian for: Sending NSFW Links`);
                }).catch(err => {
                    message.channel.send('Error ' + err)
                        .then(msg => {
                            setTimeout(() => {
                                if (msg.deletable) msg.delete();
                            }, 15000);
                        });
                });
        }
    }
}
module.exports = handleLink;
