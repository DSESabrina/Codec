module.exports = (client, instance) => {
    client.on("guildMemberAdd", (member) => {
        const { guild } = member

        const channel = guild.channel.cache.find((channel) => channel.name === "welcome")

        if (!channel) {
            return
        }

        channel.send(`Welcome ${memebr} to ${server} We hope you enjoy your stay here, we recommend you head over to our #rules, and give them a read. We at Dragon Studios Entertainment want to make sure we can provide you the best place to keep updated, on our Game Projects, and updates on our community. `)
    })
}