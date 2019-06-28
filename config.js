/* eslint-disable no-useless-escape */
module.exports = {
    token: 'YOUR_TOKEN',
    prefix: 'p!',
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
    Logging: {
        WebHook: {
            id: 'ID_OF_WEBHOOK',
            token: 'WEBHOOK_LOGGING_TOKEN'
        }
    }
};
