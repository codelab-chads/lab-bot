import { Category } from "@discordx/utilities"
import { CommandInteraction, StringSelectMenuInteraction, Role as DRole } from "discord.js"
import { Client, SelectMenuComponent, SlashChoice, SlashOption } from "discordx"

import { Discord, Slash } from "@decorators"
import { Disabled, Guard } from "@guards"
import { Role } from "@services"
import { injectable } from "tsyringe"

@Discord()
@injectable()
@Category('Owner')
export default class RoleCommand {

	constructor(
		private role: Role,
	) {}


	@SelectMenuComponent({ id: 'prog-role-add' })
	@SelectMenuComponent({ id: 'sector-role-add' })
	async addRoles(interaction: StringSelectMenuInteraction) {

		this.editRoles('add', interaction)
	}


	@SelectMenuComponent({ id: 'prog-role-remove' })
	@SelectMenuComponent({ id: 'sector-role-remove' })
	async removeRoles(interaction: StringSelectMenuInteraction) {

		this.editRoles('remove', interaction)
	}


	private async editRoles(type: 'add' | 'remove', interaction: StringSelectMenuInteraction) {

		const roles = interaction.values
			.map(roleId => interaction.guild?.roles.cache.get(roleId))
			.filter(role => role) as DRole[]
		const member = await interaction.guild?.members.fetch(interaction.user.id)

		await member?.roles[type](roles)

		await interaction.reply({
			content: `Rôles ${type === 'add' ? 'ajoutés' : 'supprimés'}`,
			ephemeral: true
		})

		this.role.updateSelectRoleMessage(
			interaction.customId.includes('prog') ? 'programmingLanguages' : 'sector'
		)
		
	}


	@Slash()
	@Guard(
		Disabled
	)
	async update(
		@SlashChoice({ name: 'Programming Language', value: 'programmingLanguages' })
		@SlashChoice({ name: 'Sector', value: 'sector' }) 
		type: 'programmingLanguages' | 'sector',
		interaction: CommandInteraction,
		client: Client,
		{ localize }: InteractionData
	) {

		this.role.updateSelectRoleMessage(type)
	}
}