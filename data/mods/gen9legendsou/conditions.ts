export const Conditions: import('../../../sim/dex-conditions').ModdedConditionDataTable = {
	gem: {
		duration: 1,
		affectsFainted: true,
		onBasePower(basePower, user, target, move) {
			this.debug('Gem Boost');
			return this.chainModify(1.5);
		},
	},
};
