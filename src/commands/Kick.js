module.exports = {
    category: 'Moderation',
    description: 'Kicks User', //Slash Commands
    testOnly: true,
    ownerOnly: true,
    requireRoles: true,
    guildOnly: true,

    minArgs: 2,
    expectedArgs: '<user> <reason>',
    expectedArgsTypes: ['USER', 'STRING'],

    callback: ({message, interaction, args}) => {
        const target = message ? message.mentions.members?.first() : interaction.option.getMember('user')
        
        if (!target) {
            return 'Please Mention a User to Kick.'
        }

        if (!target.kickable) {
            return {
                custom: true,
                content: 'Cannot Kick this User',
                ephemeral: true
            }
        }

        args.shift()
        const reason = args.join(' ')

        target.kick(reason)

        return {
            custom: true,
            content: `<@${target.id}> Has been Kicked from the Server`,
            ephemeral: true
        } 
        
    }

}