export const generalConfig: GeneralConfigType = {

	name: 'lab-bot', // the name of your bot
	description: '', // the description of your bot
	defaultLocale: 'fr', // default language of the bot, must be a valid locale
	ownerId: process.env['BOT_OWNER_ID'] || '',
	timezone: 'Europe/Paris', // default TimeZone to well format and localize dates (logs, stats, etc)

	simpleCommandsPrefix: '!', // default prefix for simple command messages (old way to do commands on discord)
	automaticDeferring: true, // enable or not the automatic deferring of the replies of the bot on the command interactions

	// useful links
	links: {
		invite: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
		supportServer: 'https://discord.gg/MqP9aDM3S6',
		gitRemoteRepo: 'https://github.com/barthofu/lab-bot',
	},
	
	automaticUploadImagesToImgur: false, // enable or not the automatic assets upload

	devs: [], // discord IDs of the devs that are working on the bot (you don't have to put the owner's id here)

	eval: {
		name: 'bot', // name to trigger the eval command
		onlyOwner: false // restrict the eval command to the owner only (if not, all the devs can trigger it)
	},

	// define the bot activities (phrases under its name). Types can be: PLAYING, LISTENING, WATCHING, STREAMING
    activities: [
		{
			text: 'with lines of code',
			type: 'PLAYING'
		},
		{
			text: 'the new JS framework of the week',
			type: 'WATCHING'
		}
	]

}

// global colors
export const colorsConfig = {

	primary: '#bb69ea'
}
