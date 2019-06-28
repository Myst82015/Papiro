/* eslint-disable no-useless-escape */
module.exports = {
    token: 'YOUR_TOKEN', // Your bot token , obtain yours here https://discordapp.com/login?redirect_to=%2Fdevelopers%2Fapplications%2F
    prefix: 'p!', //prefix of the bot
    owner: ['263022860551847936', '232958128696590346'],
    RegEx: {
        discordMarkdown: {
            emoji: /^<a?:(\w+):(\d+)>$/g,
            channel: /^<#(\d+)>$/g,
            mention: /^<@!?(\d+)>$/g,
            role_mention: /^<@&(\d+)>$/g,
            invite: /(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li)|discordapp\.com\/invite|discordservers\.com\/server\/)\/.+[a-z]/g
        },
        Markdown: {
            spoiler: /\|\|([\s\S]+?)\|\|/g,
            strike: /~~(.+?)~~/,
            underline: /__(.+?)__/,
            bold: /\*\*(.+?)\*\*/,
            italics: /_(.+?)_/,
            italics2: /\*(.+?)\*/,
            codeString: /`(.+?)`/

        },
        url: {
            first: /^((?:https?|steam):\/\/[^\s<]+[^<.,:;"'\]\s])$/gm,
            second: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm
        }
    },
    //Papiro will log the message deletions into a certain channel. Therefore you need to create a weebhook for this channel
    Logging: {
        WebHook: {
            id: 'ID_OF_WEBHOOK',
            token: 'WEBHOOK_LOGGING_TOKEN'
        }
    }
};
