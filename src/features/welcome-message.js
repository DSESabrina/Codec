const { model } = require("mongoose")

module.exports = (client, instance) => {
    client.on("guildMemberAdd", (member) => {
        const { guild } = member

        const channel = guild.channels.cache.find((channel) => channel.name === "welcome")

        if (!channel) {
            return
        }

        channel.send(`Welcome ${member} to ${guild} We hope you enjoy your stay here, we recommend you head over to the server rules, and give them a read. We at Dragon Studios Entertainment want to make sure we can provide you the best place to keep updated, on our Game Projects, and updates on our community. Wheather or not you are within the Dragon Studios Server, or in your own Community. `)
    })


}

module.exports.config = {
    displayName: 'Welcome Message',

    dbName: 'Welcome Message'
}