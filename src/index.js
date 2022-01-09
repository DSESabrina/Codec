//Requiring DotEnv
require("dotenv").config();

const mongoose = require('mongoose')
const WOKCommands = require('wokcommands')
const path = require('path')
const { Client, Intents, Message, MessageManager, GuildManager } = require('discord.js');
const client = new Client({ 
    intents: [
        Intents.FLAGS.GUILDS, 
        Intents.FLAGS.GUILD_MESSAGES, 
        Intents.FLAGS.GUILD_MEMBERS] });
const PREFIX = "$";

client.on('ready', () => {
    console.log(`Logged in as ${client.user.username}.`);
});

client.on('ready', async () => {
    const dbOptions = {
        keepalive: true
    }
})
new WOKCommands(client, {
   
    commandsDir: path.join(__dirname, 'commands'),
    testServers: ['929295238604935188'],
    botOwners: ['634520206387052565', '641816774072991793'],
    mongoUri: process.env.MONGO_URI
})

.setDefaultPrefix('.c')

client.login(process.env.DISCORD_BOT_TOKEN);