//Requiring DotEnv
require("dotenv").config();

const { Client, Intents, Message, MessageManager } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const PREFIX = "$";

client.on('ready', () => {
    console.log(`Logged in as ${client.user.username}.`);
});

/*
1/8/22 4:15 AM Kick Command works without the Then, and Catch Error, 
but once those are Implemented Causes Codec to Ignore, and act as if the user is not in the server when 
ID of USer is Provided. must be debugged - Bug 0001-A
*/
client.on('message', (message) =>{
    if (message.author.bot) return;
    if (message.content.startsWith(PREFIX)) {
        const [CMD_NAME, ...args] = message.content
            .trim()
            .substring(PREFIX.length)
            .split(/\s+/);
        if (CMD_NAME === 'kick') {
            if (args.length === 0) return message.reply('Please Provide User ID');
            const member = message.guild.members.cache.get(args[0]);
            if (member) {
                member
                .kick()
                .then((member) => message.channel.send(`${member} was kicked from server.`))
                .catch((err) => message.channel.send('I do not have permssion to kick them :(')); 
            }else {
                message.channel.send('User was not found.');
            }
        }

    }
});
//Dev Test to test Replying
client.on('message', (message) => {
if (message.author.bot) return;
console.log(`[${message.author.tag}]: ${message.content}`);
if (message.content === 'Ping') {
    message.reply('Pong Bitch');
}
});

client.login(process.env.DISCORD_BOT_TOKEN);