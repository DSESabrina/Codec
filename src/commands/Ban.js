module.exports = {
    category: 'Moderation',
    description: 'Bans User', //Slash Commands
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
            return 'Please Mention a User to Ban.'
        }

        if (!target.bannable) {
            return {
                custom: true,
                content: 'Cannot Ban this User Ya Idiot',
                ephemeral: true
            }
        }

        args.shift()
        const reason = args.join(' ')

        target.ban({
            reason,
            days: 7
        })

        return {
            custom: true,
            content: `<@${target.id}> Has been Banned from the Server`,
            ephemeral: true
        } 
        
    }

}