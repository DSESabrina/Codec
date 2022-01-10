module.exports = { 
    category: 'Public',
    description: 'replies with Discord Link', //Slash Commands

    callback: ({message, interaction}) => {
    
        const reply = 'https://discord.gg/Mgg8ERPy3D'

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

