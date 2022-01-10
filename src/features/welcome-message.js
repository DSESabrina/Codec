const { model } = require("mongoose")

module.exports = (client, instance) => {
    client.on("guildMemberAdd", (member) => {
        const { guild } = member

        const channel = guild.channels.cache.find((channel) => channel.name === "welcome")

        if (!channel) {
            return
        }

        channel.send(`Welcome ${member} to ${guild} We hope you enjoy your stay here, we recommend you head over to our Rules, and give them a read. We at Dragon Studios Entertainment want to make sure we can provide you the best place to keep updated, on our Game Projects, and updates on our community. The Development Team wish to bring you a a story driven game you will play over and over. Letting it expand your library of games, and mind to the Possiblities. Our Moto is Gaming is More than just a mere passion will you rise up to the Challenges our game's bring to you? See you out on the Fields Player One. `)
    })


}

module.exports.config = {
    displayName: 'Welcome Message',

    dbName: 'Welcome Message'
}