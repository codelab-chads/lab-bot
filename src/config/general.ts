export const generalConfig: GeneralConfigType = {

    __templateVersion: '1.1.0',

	name: 'lab-bot',
	description: '',
	defaultLocale: 'fr',
	simpleCommandsPrefix: '!',
	ownerId: '260908777446965248',
	timezone: 'Europe/Paris',

	links: {
		invite: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
		supportServer: 'https://discord.gg/MqP9aDM3S6',
		gitRemoteRepo: 'https://github.com/barthofu/lab-bot',
	},
	
	automaticUploadImagesToImgur: false,

	devs: [
		'260908777446965248',
	],

	eval: {
		name: 'lab-bot',
		onlyOwner: false
	},

    activities: [
		{
			text: 'discord.js v14',
			type: 'PLAYING'
		},
		{
			text: 'some knowledge',
			type: 'STREAMING'
		}
	]

}

export const colorsConfig = {

	primary: '#bb69ea'
}
