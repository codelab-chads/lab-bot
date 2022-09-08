export const generalConfig: GeneralConfigType = {

    __templateVersion: '1.1.0',

	name: 'lab-bot',
	description: '',
	defaultLocale: 'fr',
	simpleCommandsPrefix: '!',
	ownerId: '260908777446965248',
	timezone: 'Europe/Paris',

	links: {
		invite: 'https://www.change_invite_link_here.com',
		supportServer: 'https://discord.com/your_invitation_link',
		gitRemoteRepo: 'https://github.com/barthofu/tscord',
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
