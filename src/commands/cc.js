module.exports = {
    category: 'Moderation',
    description: 'Deletes Multiple Messages',

    requireRoles: true,

    maxArgs: 1,
    expectedArgs: '[amount]',

    callback: async({message, interaction, channel, args}) => {

        const amount = parseInt(args.shift())

        if (message) {
            await message.delete()
        }

        const  { size } = await channel.bulkDelete(amount, true)

        const reply = `Deleted ${size} message(s).`

        if (interaction) {
            return reply
        }
    }
}