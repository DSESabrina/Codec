module.exports = {
    category: 'Testing',
    description: 'replies with pong', //Slash Commands
    slash: 'both',
    testOnly: true,
    ownerOnly: true,

    callback: ({message, interaction}) => {
    
        const reply = 'Pong Why are You Pinging me?'

        if (message) {
            message.reply({
                content: reply
            })
            return
        }

        interaction.reply({
            content: reply
        })

        return {
            content: reply
        }
    },
}

