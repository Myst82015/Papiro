/**
 * @param {import('discord.js').Client} client 
 * @param {import('discord.js').Message} message 
 * @param {String} args 
 * @param {import('discord.js')} Discord
 */

// eslint-disable-next-line no-unused-vars
async function run(client, message, args, Discord) {
let sIcon = `https://cdn.discordapp.com/icons/${message.guild.id}/${message.guild.icon}.webp`;
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

        let region = {
        "brazil": ":flag_br: Brazil",
        "eu-central": ":flag_eu: Central Europe",
        "singapore": ":flag_sg: Singapore",
        "us-central": ":flag_us: U.S. Central",
        "sydney": ":flag_au: Sydney",
        "us-east": ":flag_us: U.S. East",
        "us-south": ":flag_us: U.S. South",
        "us-west": ":flag_us: U.S. West",
        "eu-west": ":flag_eu: Western Europe",
        "vip-us-east": ":flag_us: VIP U.S. East",
        "london": ":flag_gb: London",
        "amsterdam": ":flag_nl: Amsterdam",
        "hongkong": ":flag_hk: Hong Kong",
        "russia": ":flag_ru: Russia",
        "southafrica": ":flag_za:  South Africa"
    };
    let count;
    message.guild.fetchBans()
      .then(bans =>  console.log(bans.size))
        .catch(console.error);
console.log(count+ "test")

        let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];

        let sEmbed = new Discord.RichEmbed()
            .setTitle('Server Information')
            .setColor("BLUE")
            .setThumbnail(sIcon)
            .addField('Server Name', message.guild.name, true)
            .addField('Server Owner', message.guild.owner, true)
            .addField('Created On', message.guild.createdAt.toLocaleDateString("en-US", options), true)
            .addField('You Joined', message.member.joinedAt.toLocaleDateString("en-US", options), true)
            .addField('Server Region', region[message.guild.region], true) // was before region[message.guild.region] Myst 25.05.2019
            //.addField('Server Owner', message.guild.owner, true)
            .addField("Verification Level", verifLevels[message.guild.verificationLevel], true)// added a verification level Myst 25.205
            .addField('Total Members', `${message.guild.memberCount} [${message.guild.members.filter(u => u.user.bot == false).size} humans and ${message.guild.members.filter(b => b.user.bot === true).size} bots]`, true)
            //.addField('Humans', message.guild.members.filter(u => u.user.bot == false).size, true)
            //.addField('Bots', message.guild.members.filter(b => b.user.bot === true).size, true)
            .addField(`Ban Count`,/*`${count}`*/`Coming soon`, true)
            //.addField('Ban count', message.guild.fetchBans())
            .setFooter(`ID: ${message.guild.id} |`)
            .setTimestamp();
        return message.channel.send(sEmbed);

        

}
    
module.exports = {
    config: {
        enabled: true,
        guildOnly: true,
        name: 'serverinfo', 
        aliases: ["server", "si"]
    },
    run: run
};
