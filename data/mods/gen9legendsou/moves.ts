export const Moves: import('../../../sim/dex-moves').ModdedMoveDataTable = {
<<<<<<< HEAD
	volttackle: {
		inherit: true,
		onModifyMove(move, pokemon, target) {
			if (pokemon.baseSpecies.name === "Raichu-Mega-X") {
				move.self = { boosts: { atk: 1 } };
			}
		},
=======
	vcreate: {
		inherit: true,
		basePower: 150,
>>>>>>> 861216037e745fcdd3223f99dd1c3aa9281041b1
	},
};
