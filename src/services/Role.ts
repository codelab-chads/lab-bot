import { singleton } from "tsyringe"

import { Client } from "discordx"
import { ActionRowBuilder, StringSelectMenuBuilder, SelectMenuComponentOptionData, TextChannel } from "discord.js"
import { rolesConfig } from "@configs"
import { fetchMessageWithinChannelById } from "@utils/functions"

@singleton()
export class Role {

    private rolesChannelId = '1017442781897183312'

    private readonly programmingLanguagesMessageId = '1017531669961515068'
    private readonly sectorMessageId = '1017531812785967165'

    constructor(
        private client: Client,
    ) {}

    async updateSelectRoleMessage(type: 'sector' | 'programmingLanguages') {

        const guild = await this.client.guilds.fetch(process.env['TEST_GUILD_ID'])

        const channel = await guild.channels.fetch(this.rolesChannelId)
		if (!channel) return false

		const rolesOption: Array<SelectMenuComponentOptionData> = rolesConfig[type].roles.map(role => ({
			label: role.name,
			value: role.roleId,
			description: role?.description,
			emoji: role?.icon,
		}))

		const addRolesRow = new ActionRowBuilder<StringSelectMenuBuilder>()
			.addComponents(
				new StringSelectMenuBuilder()
					.setCustomId(type === 'sector' ? 'sector-role-add' : 'prog-role-add')
					.setPlaceholder('Ajouter des rôles')
					.setMinValues(1)
					.setMaxValues(rolesOption.length)
					.addOptions(
						rolesOption
					)
			)

		const removeRolesRow = new ActionRowBuilder<StringSelectMenuBuilder>()
			.addComponents(
				new StringSelectMenuBuilder()
					.setCustomId(type === 'sector' ? 'sector-role-remove' : 'prog-role-remove')
					.setPlaceholder('Supprimer des rôles')
					.setMinValues(1)
					.setMaxValues(rolesOption.length)
					.addOptions(
						rolesOption
					)
			)


        const message = await fetchMessageWithinChannelById(
			channel as TextChannel,
			type === 'sector' ? this.sectorMessageId : this.programmingLanguagesMessageId
		)

        if (message) {

			console.debug('Message found, editing it')
			await message.edit({
				content: rolesConfig[type].content,
				components: [
					addRolesRow,
					removeRolesRow
				]
			})

		} else {
			
			const msg = await (channel as TextChannel).send({
				content: rolesConfig[type].content,
				components: [
					addRolesRow,
					removeRolesRow
				]
			})

			console.log(type, msg.id)
		}

        return true
    }

}