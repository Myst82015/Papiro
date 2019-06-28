/**
 * @param {import('discord.js').Client} client 
 * @param {import('discord.js').Message} message 
 * @param {String} args 
 * @param {import('discord.js')} Discord
 */
var osutils = require("os-utils");
// eslint-disable-next-line no-unused-vars
async function run(client, message, args, Discord) {

console.log("Platform: " + osutils.platform());
console.log("Number of CPUs: " + osutils.cpuCount());
let  CpuUsage_ = 0
osutils.cpuUsage(function(v) {

  console.log("CPU Usage (%) : " + v);
const CpuUsage_ = v
});

console.log("Load Average (5m): " + osutils.loadavg(5));

console.log("Total Memory: " + osutils.totalmem() + "MB");

console.log("Free Memory: " + osutils.freemem() + "MB");

console.log("Free Memory (%): " + osutils.freememPercentage());

console.log("System Uptime: " + osutils.sysUptime() + "ms");

let embed = new Discord.RichEmbed()
.setDescription('Stats')
.addField('Platform:', osutils.platform())
.addField('Number of CPUs', osutils.cpuCount())
.addField('CPU Usage', CpuUsage_ + '%')
.addField('System Uptime', osutils.sysUptime() + "ms")

message.channel.send(embed)

}
    
module.exports = {
    config: {
        name: 'stats', 
        aliases: []
    },
    run: run
};
