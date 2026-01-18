import RandomTeams from '../../random-battles/gen9/teams';

export interface SSBSet {
	species: string;
	ability: string | string[];
	item: string | string[];
	gender: GenderName | GenderName[];
	moves: (string | string[])[];
	signatureMove: string;
	evs?: { hp?: number, atk?: number, def?: number, spa?: number, spd?: number, spe?: number };
	ivs?: { hp?: number, atk?: number, def?: number, spa?: number, spd?: number, spe?: number };
	nature?: string | string[];
	shiny?: number | boolean;
	level?: number;
	happiness?: number;
	skip?: string;
	teraType?: string | string[];
}
interface SSBSets { [k: string]: SSBSet }

export const ssbSets: SSBSets = {
	/*
	// Example:
	Username: {
		species: 'Species', ability: 'Ability', item: 'Item', gender: '',
		moves: ['Move Name', ['Move Name', 'Move Name']],
		signatureMove: 'Move Name',
		evs: {stat: number}, ivs: {stat: number}, nature: 'Nature', teraType: 'Type',
	},
	// Species, ability, and item need to be capitalized properly ex: Ludicolo, Swift Swim, Life Orb
	// Gender can be M, F, N, or left as an empty string
	// each slot in moves needs to be a string (the move name, capitalized properly ex: Hydro Pump), or an array of strings (also move names)
	// signatureMove also needs to be capitalized properly ex: Scripting
	// You can skip Evs (defaults to 84 all) and/or Ivs (defaults to 31 all), or just skip part of the Evs (skipped evs are 0) and/or Ivs (skipped Ivs are 31)
	// You can also skip shiny, defaults to false. Level can be skipped (defaults to 100).
	// Nature needs to be a valid nature with the first letter capitalized ex: Modest
	*/
	// Please keep sets organized alphabetically based on staff member name!
	'1/2 Boom': {
		species: 'Electrode-Hisui', ability: 'Protean', item: 'Choice Specs', gender: '', level: 50,
		moves: ['Chloroblast', 'Mind Blown', 'Steel Beam'],

		signatureMove: 'Light of Ruin',
		evs: { hp: 4, spa: 252, spe: 252 }, ivs: { atk: 0 }, nature: 'Modest', teraType: 'Fairy',
	},
	'3-0 in a best of 3': {
		species: 'Gholdengo', ability: 'Surge Surfer', item: 'Metronome', gender: '', level: 50,
		moves: ['Metronome', '', ''],
		signatureMove: '',
		evs: { hp: 252, atk: 252, def: 252, spa: 252, spd: 252, spe: 252 }, nature: 'Serious', teraType: 'Steel',
	},
	'AMFADS': {
		species: 'Cresselia', ability: 'Battle Armor', item: 'Red Card', gender: '', level: 50,
		moves: ['Cosmic Power', 'Ally Switch', 'Moonlight'],
		signatureMove: 'Struggle',
		evs: { hp: 252, def: 252, spd: 252 }, ivs: { atk: 0 }, nature: 'Bold', teraType: 'Psychic',
	},
	'Angry': {
		species: 'Torkoal', ability: 'White Smoke', item: 'Charcoal', gender: '', level: 50,
		moves: ['Raging Fury', 'Rage Fist', 'Rage Powder'],
		signatureMove: 'Eruption',
		evs: { hp: 252, atk: 252, def: 4, spa: 156 }, ivs: { spe: 0 }, nature: 'Rash', teraType: 'Ghost',

	},
	'Banned': {
		species: 'Incineroar', ability: 'Blaze', item: 'Sitrus Berry', gender: '', level: 50,
		moves: ['Fire Punch', 'Bite', 'Growl'],
		signatureMove: 'Quick Attack',
		evs: { hp: 36, atk: 212, def: 132, spd: 52, spe: 76 }, nature: 'Adamant', teraType: 'Fire',

	},
	'Big Boongus': {
		species: 'Foongus', ability: 'Sturdy', item: 'Berry Juice', gender: '', level: 5,
		moves: ['Spore', 'Rage Powder', 'Pain Split'],
		signatureMove: 'Max Guard',
		evs: { spe: 236 }, ivs: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0 }, nature: 'Timid', teraType: 'Water',
	},
	'BIG FAN': {
		species: 'Rotom-Fan', ability: 'Levitate', item: 'Sitrus Berry', gender: '', level: 50,
		moves: ['10,000,000 Volt Thunderbolt', 'G-Max Wind Rage', 'Oblivion Wing'],
		signatureMove: 'Max Guard',

		evs: { hp: 244, def: 60, spa: 84, spd: 60, spe: 60 }, nature: 'Modest', teraType: 'Electric',
	},
	'Birb': {
		species: 'Fletchinder', ability: 'Gale Wings', item: 'Focus Sash', gender: '', level: 59,
		moves: ['Tailwind', 'Will-O-Wisp', 'Feint'],
		signatureMove: 'Oblivion Wing',
		evs: { hp: 4, spa: 252, spe: 252 }, nature: 'Timid', teraType: 'Dark',
	},

	'Boom': {
		species: 'Regieleki', ability: 'Galvanize', item: 'Choice Band', gender: '', level: 50,
		moves: ['Explosion', '', ''],
		signatureMove: '',

		evs: { atk: 252, spe: 252 }, nature: 'Adamant', teraType: 'Electric',
	},
	'Bright Powder': {
		species: 'Articuno', ability: 'Snow Cloak', item: 'Bright Powder', gender: '', level: 50,
		moves: ['Protect', 'Freeze-Dry', 'Roost'],
		signatureMove: 'Ancient Power',
		evs: { hp: 52, spa: 252, spe: 204 }, ivs: { atk: 0 }, nature: 'Modest', teraType: 'Dragon',
	},

	'Charm': {
		species: 'Whimsicott', ability: 'Soul-Heart', item: 'Focus Sash', gender: '', level: 50,
		moves: ['Charm', 'Tailwind', 'Moonblast'],

		signatureMove: 'Energy Ball',

		evs: { hp: 4, spa: 252, spe: 252 }, ivs: { atk: 0 }, nature: 'Timid', teraType: 'Fairy',
	},
	'Chicken': {
		species: 'Squawkabilly', ability: 'Hustle', item: 'Choice Scarf', gender: '', level: 50,

		moves: ['Brave Bird', 'Parting Shot', 'Tera Blast'],
		signatureMove: 'Final Gambit',
		evs: { hp: 212, atk: 252, spe: 44 }, nature: 'Adamant', teraType: 'Ghost',
	},
	'Confusion': {
		species: 'Goodra', ability: 'Tangled Feet', item: 'Aguav Berry', gender: '', level: 50,
		moves: ['Outrage', 'Raging Fury', 'Thrash'],
		signatureMove: 'Petal Dance',
		evs: { atk: 220, spa: 252, spe: 212 }, nature: 'Naughty', teraType: 'Fire',

	},
	'Conix vs Elm': {
		species: 'Overqwil', ability: 'Intimidate', item: 'Bright Powder', gender: '', level: 50,
		moves: ['Barb Barrage', 'Minimize', 'Stockpile'],
		signatureMove: 'Rest',
		evs: { hp: 252, def: 4, spd: 252 }, nature: 'Impish', teraType: 'Dark',
	},
	'Cool Guy': {
		species: 'Marowak', ability: 'Competitive', item: 'Choice Specs', gender: '', level: 50,
		moves: ['Sandsear Storm', 'Make It Rain', 'Astral Barrage'],
		signatureMove: 'Hydro Pump',
		evs: { hp: 4, spa: 252, spe: 252 }, ivs: { atk: 0 }, nature: 'Modest', teraType: 'Water',

	},
	'Counts as a Bird': {
		species: 'Donphan', ability: 'Sturdy', item: 'Weakness Policy', gender: '', level: 50,
		moves: ['Earthquake', 'Ice Shard', 'Tailwind'],

		signatureMove: 'Protect',
		evs: { hp: 252, atk: 252, spd: 4 }, nature: 'Adamant', teraType: 'Ice',
	},
	'Dead Fish Song': {

		species: 'Dondozo', ability: 'Arena Trap', item: 'Binding Band', gender: '', level: 55,
		moves: ['Perish Song', '', ''],
		signatureMove: '',
		evs: { hp: 252, def: 252, spd: 252 }, ivs: { atk: 0, spe: 0 }, nature: 'Sassy', teraType: 'Water',
	},
	'Don Nacci': {
		species: 'Naclstack', ability: 'Purifying Salt', item: 'Eviolite', gender: '', level: 50,
		moves: ['Fissure', 'Salt Cure', 'Shore Up'],
		signatureMove: 'Protect',
		evs: { hp: 244, atk: 4, def: 28, spd: 220, spe: 12 }, nature: 'Careful', teraType: 'Flying',
	},
	'Dozo <3': {

		species: 'Tatsugiri', ability: 'Commander', item: 'Love Ball', gender: '', level: 50,
		moves: ['Revival Blessing', 'Struggle', ''],
		signatureMove: '',
		evs: { hp: 252, spe: 244 }, nature: 'Timid', teraType: 'Dragon',

	},
	'Eat Sleep': {
		species: 'Snorlax', ability: 'Comatose', item: 'Iapapa Berry', gender: '', level: 50,
		moves: ['Snore', 'Yawn', 'Bug Bite'],
		signatureMove: 'Crunch',

		evs: { hp: 252, atk: 44, def: 124, spa: 252, spd: 84 }, ivs: { spe: 0 }, nature: 'Brave', teraType: 'Bug',
	},
	'Elm\'s Favorite Child': {
		species: 'Walking-Wake', ability: 'Solar Power', item: 'Life Orb', gender: '', level: 50,
		moves: ['Hydro Steam', 'Hydro Steam', 'Hydro Steam'],
		signatureMove: 'Hydro Steam',
		evs: { hp: 4, def: 4, spa: 252, spd: 4, spe: 244 }, ivs: { atk: 0 }, nature: 'Modest', teraType: 'Water',
	},

	'Elm\'s Surprise': {
		species: 'Delphox', ability: 'Blaze', item: 'Shed Shell', gender: '', level: 50,
		moves: ['Fire Spin', 'Encore', 'Heat Wave'],
		signatureMove: 'Protect',
		evs: { hp: 4, spa: 252, spe: 252 }, ivs: { atk: 0 }, nature: 'Timid', teraType: 'Fairy',
	},
	'FDL': {
		species: 'Falinks', ability: 'Supreme Overlord', item: 'Clear Amulet', gender: '', level: 53,
		moves: ['No Retreat', 'Close Combat', 'Bullet Punch'],
		signatureMove: 'Detect',
		evs: { hp: 252, atk: 252, def: 252, spa: 252, spd: 252, spe: 252 }, nature: 'Adamant', teraType: 'Steel',
	},

	'Glare': {
		species: 'Chewtle', ability: 'Prankster',
		item: ['Draco Plate', 'Dread Plate', 'Earth Plate', 'Fist Plate', 'Flame Plate', 'Icicle Plate', 'Insect Plate', 'Iron Plate', 'Meadow Plate', 'Mind Plate', 'Pixie Plate', 'Sky Plate', 'Splash Plate', 'Spooky Plate', 'Stone Plate', 'Toxic Plate', 'Zap Plate'],

		gender: '', level: 75,
		moves: ['Glare', 'Judgment', 'Coaching'],
		signatureMove: 'Fake Out',
		evs: { hp: 4, spa: 252, spe: 252 }, nature: 'Timid', teraType: 'Ghost',
	},
	'Happy': {
		species: 'Haxorus', ability: 'Victory Star', item: 'Loaded Dice', gender: '', level: 50,
		moves: ['Scale Shot', 'King\'s Shield', 'Victory Dance'],

		signatureMove: 'Celebrate',
		evs: { hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1 }, ivs: { hp: 1, atk: 1, def: 1, spa: 1, spd: 1, spe: 1 }, nature: 'Jolly', teraType: 'Fairy',
	},
	'Holy Shit Iron!': {
		species: 'Iron-Hands', ability: 'Unseen Fist', item: 'Iron Plate', gender: '', level: 50,
		moves: ['Electro Drift', 'Iron Head', 'Vacuum Wave'],
		signatureMove: 'Iron Defense',
		evs: { hp: 44, atk: 76, def: 124, spa: 252, spd: 236, spe: 148 }, nature: 'Mild', teraType: 'Steel',
	},
	'Holy Shit Leaves': {
		species: 'Iron-Leaves', ability: 'Quark Drive', item: 'Choice Scarf', gender: '', level: 50,
		moves: ['Volt Switch', 'U-turn', 'Flip Turn'],

		signatureMove: 'Parting Shot',
		evs: { hp: 4, atk: 252, spa: 252, spe: 252 }, nature: 'Quirky', teraType: 'Grass',
	},
	'Holy Shit Shocks': {

		species: 'Magneton', ability: 'Teravolt', item: 'Shock Drive', gender: '', level: 57,
		moves: ['Shock Wave', 'Psyshock', 'Venoshock'],
		signatureMove: 'Freeze Shock',
		evs: { hp: 4, atk: 252, spa: 252, spd: 132, spe: 244 }, nature: 'Naive', teraType: 'Psychic',
	},
	'Hungry': {
		species: 'Druddigon', ability: 'Gluttony', item: 'Figy Berry', gender: '', level: 50,
		moves: ['Belly Drum', 'Dragon Claw', 'Iron Head'],

		signatureMove: 'Protect',
		evs: { hp: 252, atk: 252, def: 4, spd: 4 }, nature: 'Adamant', teraType: 'Steel',
	},
	'Incident': {
		species: 'Mimikyu', ability: 'Disguise', item: 'Safety Goggles', gender: '', level: 50,
		moves: ['Shadow Sneak', 'Play Rough', 'Will-O-Wisp'],
		signatureMove: 'Taunt',
		evs: { hp: 164, atk: 252, spe: 92 }, nature: 'Adamant', teraType: 'Fairy',
	},
	'Knife': {
		species: 'Dracozolt', ability: 'Sharpness', item: 'Life Orb', gender: '', level: 50,
		moves: ['Behemoth Blade', 'Sacred Sword', 'Ceaseless Edge'],

		signatureMove: 'Protect',
		evs: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 }, nature: 'Quirky', teraType: 'Steel',
	},
	'Mowsus': {

		species: 'Rotom-Mow', ability: 'Imposter', item: 'Ability Shield', gender: '', level: 51,
		moves: ['Transform', '', ''],
		signatureMove: '',
		evs: { hp: 252, spe: 252 }, ivs: { atk: 30 }, nature: 'Docile', teraType: 'Steel',
	},
	'Nerf': {
		species: 'Zacian', ability: 'Intrepid Sword', item: 'Rusted Sword', gender: '', level: 34,
		moves: ['Behemoth Blade', 'Sacred Sword', 'Quick Attack'],
		signatureMove: 'Protect',

		evs: { hp: 108, atk: 196, spe: 204 }, nature: 'Adamant', teraType: 'Fairy',
	},
	'Pet': {
		species: 'Charjabug', ability: 'Power Spot', item: 'Eviolite', gender: '', level: 60,
		moves: ['Helping Hand', 'Hold Hands', 'Let\'s Snuggle Forever'],
		signatureMove: 'G-Max Cuddle',
		evs: { hp: 252, def: 4, spd: 252 }, nature: 'Impish', teraType: 'Water',
	},

	'PikaBoom': {
		species: 'Pachirisu', ability: 'Lightning Rod', item: 'Focus Sash', gender: '', level: 50,
		moves: ['Explosion', 'Follow Me', 'Nuzzle'],
		signatureMove: 'Protect',

		evs: { hp: 4, atk: 252, spe: 252 }, nature: 'Jolly', teraType: 'Normal',
	},
	'Pincurchin is Bad': {
		species: 'Pincurchin', ability: 'Hadron Engine', item: 'Life Orb', gender: '', level: 50,
		moves: ['Rising Voltage', 'Hydro Pump', 'Sucker Punch'],
		signatureMove: 'Protect',
		evs: { hp: 252, spa: 252 }, ivs: { spe: 0 }, nature: 'Quiet', teraType: 'Water',
	},

	'Roaring Mid': {
		species: 'Roaring-Moon', ability: 'Fairy Aura', item: 'Choice Specs', gender: '', level: 50,
		moves: ['Misty Explosion', 'Draco Meteor', 'Dark Pulse'],
		signatureMove: 'Volt Switch',
		evs: { hp: 4, def: 4, spa: 252, spd: 4, spe: 244 }, ivs: { atk: 0 }, nature: 'Modest', teraType: 'Fairy',
	},
	'S+': {
		species: 'Dragonite', ability: 'Sword of Ruin', item: 'Choice Band', gender: '', level: 50,

		moves: ['Extreme Speed', 'Stomping Tantrum', 'Outrage'],
		signatureMove: 'Aerial Ace',
		evs: { hp: 1, def: 2, spd: 3, spe: 4 }, ivs: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 }, nature: 'Adamant', teraType: 'Normal',
	},

	'Scary': {
		species: 'Gyarados', ability: 'Intimidate', item: 'Sitrus Berry', gender: '', level: 50,
		moves: ['Hydro Pump', 'Taunt', 'Thunder Wave'],
		signatureMove: 'Protect',

		evs: { hp: 204, def: 252, spa: 252, spd: 4, spe: 132 }, ivs: { atk: 0 }, nature: 'Modest', teraType: 'Grass',
	},
	'Shoes': {
		species: 'Tangela', ability: 'Dazzling', item: 'Heavy-Duty Boots', gender: '', level: 63,

		moves: ['Trop Kick', 'Triple Axel', 'Thunderous Kick'],
		signatureMove: 'Detect',
		evs: { hp: 244, atk: 252, def: 4, spd: 4, spe: 4 }, nature: 'Adamant', teraType: 'Fighting',
	},
	'SlowRain': {
		species: 'Slowpoke', ability: 'Drizzle', item: 'Eviolite', gender: '', level: 50,
		moves: ['Hydro Steam', 'Trick Room', 'Yawn'],
		signatureMove: 'Shed Tail',
		evs: { hp: 252, def: 20, spd: 236 }, ivs: { atk: 0, spe: 4 }, nature: 'Sassy', teraType: 'Water',

	},
	'SlowSand': {
		species: 'Slowpoke', ability: 'Sand Stream', item: 'Eviolite', gender: '', level: 50,
		moves: ['Hydro Steam', 'Trick Room', 'Yawn'],
		signatureMove: 'Salt Cure',
		evs: { hp: 252, def: 20, spd: 236 }, ivs: { spe: 8 }, nature: 'Sassy', teraType: 'Water',
	},
	'SlowSnow': {

		species: 'Slowpoke', ability: 'Snow Warning', item: 'Eviolite', gender: '', level: 50,
		moves: ['Hydro Steam', 'Trick Room', 'Yawn'],
		signatureMove: 'Aurora Veil',
		evs: { hp: 252, def: 20, spd: 236 }, ivs: { atk: 0, spe: 10 }, nature: 'Sassy', teraType: 'Water',
	},
	'SlowSun': {
		species: 'Slowpoke', ability: 'Drought', item: 'Eviolite', gender: '', level: 50,
		moves: ['Hydro Steam', 'Trick Room', 'Yawn'],

		signatureMove: 'Will-O-Wisp',
		evs: { hp: 252, def: 20, spd: 236 }, ivs: { atk: 0, spe: 6 }, nature: 'Sassy', teraType: 'Water',
	},
	'Smile': {
		species: 'Salazzle', ability: 'Corrosion', item: 'Focus Sash', gender: '', level: 50,
		moves: ['Heat Wave', 'Sludge Bomb', 'Fake Out'],
		signatureMove: 'Baneful Bunker',
		evs: { hp: 4, spa: 252, spe: 252 }, nature: 'Modest', teraType: 'Poison',
	},
	'Smol': {
		species: 'Cottonee', ability: 'Prankster', item: 'Focus Sash', gender: '', level: 50,
		moves: ['Tailwind', 'Nature\'s Madness', 'Encore'],

		signatureMove: 'Protect',
		evs: { hp: 252, spd: 4, spe: 252 }, ivs: { atk: 0 }, nature: 'Timid', teraType: 'Grass',
	},
	'Snomnom': {

		species: 'Snom', ability: 'Wonder Guard', item: 'Focus Sash', gender: '', level: 50,

		moves: ['Revival Blessing', 'G-Max Vine Lash', 'G-Max Tartness'],
		signatureMove: 'Guardian of Alola',
		evs: { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 }, ivs: { hp: 0, def: 0, spa: 0, spd: 0, spe: 2 }, nature: 'Quirky', teraType: 'Ice',
	},
	'Spin': {
		species: 'Yamper', ability: 'Simple', item: 'Eviolite', gender: '', level: 50,
		moves: ['Extreme Evoboost', 'Volt Tackle', 'Rapid Spin'],

		signatureMove: 'Spin Out',
		evs: { hp: 4, atk: 252, spe: 252 }, nature: 'Jolly', teraType: 'Electric',
	},
	'Stealth Boom': {
		species: 'Zoroark-Hisui', ability: 'Illusion', item: 'Life Orb', gender: '', level: 50,
		moves: ['Explosion', 'Shadow Ball', 'Hyper Voice'],
		signatureMove: 'Protect',
		evs: { hp: 4, atk: 252, spa: 252, spd: 68, spe: 252 }, nature: 'Naive', teraType: 'Normal',
	},
	'Tall Troll': {
		species: 'Exeggutor-Alola', ability: 'Damp', item: 'Mirror Herb', gender: '', level: 50,
		moves: ['Guillotine', 'Shell Side Arm', 'Toxic'],

		signatureMove: 'Obstruct',
		evs: { hp: 252, atk: 132, def: 108, spa: 88, spd: 52, spe: 196 }, nature: 'Brave', teraType: 'Poison',
	},
	'This is Fine': {

		species: 'Rowlet', ability: 'Flash Fire', item: 'Charcoal', gender: '', level: 80,

		moves: ['Eruption', 'Overheat', 'Heat Wave'],

		signatureMove: 'Protect',

		evs: { spa: 252, spe: 252 }, ivs: { atk: 0 }, nature: 'Modest', teraType: 'Fire',
	},
	'Thumbs': {

		species: 'Hawlucha', ability: 'Moxie', item: 'Life Orb', gender: '', level: 50,

		moves: ['Close Combat', 'Dragon Ascent', 'Victory Dance'],

		signatureMove: 'Detect',
		evs: { hp: 4, atk: 252, spe: 252 }, nature: 'Jolly', teraType: 'Flying',
	},

	'Ting_Lu': {

		species: 'Wo-Chien', ability: 'Vessel of Ruin', item: 'Assault Vest', gender: '', level: 50,
		moves: ['Ruination', 'Fissure', 'Stomping Tantrum'],

		signatureMove: 'Heavy Slam',

		evs: { hp: 172, atk: 12, def: 68, spd: 252, spe: 4 }, nature: 'Impish', teraType: 'Ground',

	},
	'Troll': {
		species: 'Exeggutor', ability: 'Serene Grace', item: 'Bright Powder', gender: '', level: 49,
		moves: ['Rock Slide', 'Ancient Power', 'Tri Attack'],

		signatureMove: 'Blizzard',
		evs: { hp: 80, def: 8, spa: 13, spd: 5 }, ivs: { hp: 6, atk: 9, def: 4, spa: 2, spd: 0, spe: 21 }, nature: 'Hardy', teraType: 'Ice',
	},
	'Walking Mid': {
		species: 'Walking-Wake', ability: 'Misty Surge', item: 'Life Orb', gender: '', level: 50,
		moves: ['Hydro Steam', 'Draco Meteor', 'Flamethrower'],
		signatureMove: 'Protect',
		evs: { hp: 20, def: 4, spa: 252, spd: 4, spe: 228 }, ivs: { atk: 0 }, nature: 'Timid', teraType: 'Fire',
	},
	'Weather Counter': {
		species: 'Bronzong', ability: 'Air Lock', item: 'Leftovers', gender: '', level: 50,
		moves: ['Trick Room', 'Protect', 'Iron Defense'],
		signatureMove: 'Body Press',

		evs: { hp: 252, def: 252, spd: 4 }, ivs: { atk: 0, spe: 0 }, nature: 'Relaxed', teraType: 'Normal',

	},

	'Wo_Chien': {
		species: 'Ting-Lu', ability: 'Tablets of Ruin', item: 'Leftovers', gender: '', level: 50,

		moves: ['Giga Drain', 'Leech Seed', 'Pollen Puff'],
		signatureMove: 'Protect',

		evs: { hp: 252, def: 236, spa: 20 }, ivs: { atk: 0 }, nature: 'Bold', teraType: 'Grass',

	},

	'Y Tho?': {
		species: 'Porygon', ability: 'Insomnia', item: 'Eviolite', gender: '', level: 50,

		moves: ['Glare', 'Trick Room', 'Recover'],

		signatureMove: 'Tri Attack',
		evs: { hp: 252, def: 252, spd: 252 }, ivs: { atk: 0, spe: 0 }, nature: 'Sassy', teraType: 'Ghost',

	},

	'You\'ve Been Deceived': {
		species: 'Dondozo', ability: 'Illusion', item: 'Life Orb', gender: '', level: 50,

		moves: ['Shadow Ball', 'Surf', 'Explosion'],

		signatureMove: 'Haze',

		evs: { spa: 116, spe: 252 }, nature: 'Serious', teraType: 'Normal',
	},

	'Zooom': {

		species: 'Sandy-Shocks', ability: 'Speed Boost', item: 'Life Orb', gender: '', level: 50,

		moves: ['Earth Power', 'Thunderbolt', 'Tera Blast'],

		signatureMove: 'Protect',
		evs: { hp: 4, spa: 252, spe: 252 }, ivs: { atk: 0 }, nature: 'Timid', teraType: 'Flying',
	},
	'Holy Shit Scream': {
		species: 'Jigglypuff', ability: 'Punk Rock', item: 'Throat Spray', gender: '', level: 60,
		moves: ['Boomburst', 'Hyper Voice', 'Screech'],
		signatureMove: 'Shed Tail',
		evs: { hp: 252, def: 252, spa: 252, spd: 252, spe: 252 }, ivs: { atk: 0 }, nature: 'Modest', teraType: 'Normal',
	},
	'How Do I Hack?': {
		species: 'Wiglett', ability: 'Wonder Skin', item: 'Dragon Gem', gender: '', level: 53,
		moves: ['Sizzly Slide', 'Pulverizing Pancake', 'Eternabeam'],
		signatureMove: 'Wicked Torque',
		evs: { atk: 252, spa: 252, spe: 252 }, ivs: { hp: 0, def: 0, spd: 0 }, nature: 'Hasty', teraType: 'Fire',
	},
};

const afdSSBSets: SSBSets = {
	'Fox': {
		species: 'Fennekin', ability: 'No Ability', item: '', gender: '',
		moves: [],
		signatureMove: 'Super Metronome',
	},
};

export class RandomStaffBrosTeams extends RandomTeams {
	randomStaffBrosTeam(options: { inBattle?: boolean } = {}) {
		this.enforceNoDirectCustomBanlistChanges();

		const team: PokemonSet[] = [];
		const debug: string[] = []; // Set this to a list of SSB sets to override the normal pool for debugging.
		const ruleTable = this.dex.formats.getRuleTable(this.format);
		const meme = ruleTable.has('dynamaxclause') && !debug.length;
		const afd = !ruleTable.has('dynamaxclause') && ruleTable.has('zmoveclause') && !debug.length;
		const monotype = this.forceMonotype || (ruleTable.has('sametypeclause') ?
			this.sample(this.dex.types.names().filter(x => x !== 'Stellar')) : false);

		let pool = meme ? Object.keys(afdSSBSets) : Object.keys(ssbSets);
		if (debug.length) {
			while (debug.length < 6) {
				const staff = this.sampleNoReplace(pool);
				if (debug.includes(staff) || ssbSets[staff].skip) continue;
				debug.push(staff);
			}
			pool = debug;
		}
		if (monotype && !debug.length && !afd && !meme) {
			pool = pool.filter(x => this.dex.species.get(ssbSets[x].species).types.includes(monotype));
		}
		if (global.Config?.disabledssbsets?.length) {
			pool = pool.filter(x => !global.Config.disabledssbsets.includes(this.dex.toID(x)));
		}
		const typePool: { [k: string]: number } = {};
		let depth = 0;
		while (pool.length && team.length < this.maxTeamSize) {
			if (depth >= 200) throw new Error(`Infinite loop in Super Staff Bros team generation.`);
			depth++;
			const name = meme ? this.sample(pool) : afd ? 'April' : this.sampleNoReplace(pool);
			const ssbSet: SSBSet = meme ? this.dex.deepClone(afdSSBSets[name]) : this.dex.deepClone(ssbSets[name]);
			if (ssbSet.skip) continue;

			// Enforce typing limits
			if (!(debug.length || monotype || meme || afd)) { // Type limits are ignored for debugging, monotype, or memes.
				const species = this.dex.species.get(ssbSet.species);

				const weaknesses = [];
				for (const type of this.dex.types.names()) {
					const typeMod = this.dex.getEffectiveness(type, species.types);
					if (typeMod > 0) weaknesses.push(type);
				}
				let rejected = false;
				for (const type of weaknesses) {
					if (typePool[type] === undefined) typePool[type] = 0;
					if (typePool[type] >= 3) {
						// Reject
						rejected = true;
						break;
					}
				}
				if (ssbSet.ability === 'Wonder Guard') {
					if (!typePool['wonderguard']) {
						typePool['wonderguard'] = 1;
					} else {
						rejected = true;
					}
				}
				if (rejected) continue;
				// Update type counts
				for (const type of weaknesses) {
					typePool[type]++;
				}
			}

			let teraType: string | undefined;
			if (ssbSet.teraType) {
				teraType = ssbSet.teraType === 'Any' ?
					this.sample(this.dex.types.names()) :
					this.sampleIfArray(ssbSet.teraType);
			}
			const moves: string[] = [];
			while (moves.length < 3 && ssbSet.moves.length > 0) {
				let move = this.sampleNoReplace(ssbSet.moves);
				if (Array.isArray(move)) move = this.sampleNoReplace(move);
				moves.push(this.dex.moves.get(move).name);
			}
			moves.push(this.dex.moves.get(ssbSet.signatureMove).name);
			const ivs = { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31, ...ssbSet.ivs };
			if (!moves.map(x => this.dex.moves.get(x)).some(x => x.category === 'Physical')) {
				ivs.atk = 0;
			}

			const set: PokemonSet = {
				name,
				species: ssbSet.species,
				item: this.sampleIfArray(ssbSet.item),
				ability: this.sampleIfArray(ssbSet.ability),
				moves,
				nature: ssbSet.nature ? Array.isArray(ssbSet.nature) ? this.sampleNoReplace(ssbSet.nature) : ssbSet.nature : 'Serious',
				gender: ssbSet.gender ? this.sampleIfArray(ssbSet.gender) : this.sample(['M', 'F', 'N']),
				evs: ssbSet.evs ? { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0, ...ssbSet.evs } :
				{ hp: 84, atk: 84, def: 84, spa: 84, spd: 84, spe: 84 },
				ivs,
				level: this.adjustLevel || ssbSet.level || 100,
				happiness: typeof ssbSet.happiness === 'number' ? ssbSet.happiness : 255,
				shiny: typeof ssbSet.shiny === 'number' ? this.randomChance(1, ssbSet.shiny) : !!ssbSet.shiny,
			};

			// Any set specific tweaks occur here.
			if (set.name === "Felucia") {
				const cmIndex = set.moves.indexOf("Calm Mind");
				if (cmIndex >= 0 && set.moves.includes("Night Shade")) {
					set.moves[cmIndex] = this.sample(["Thief", "Toxic"]);
				}
			}
			if (set.name === "Frostyicelad" && set.shiny) {
				const moveIndex = Math.max(set.moves.indexOf('Dire Claw'),
					set.moves.indexOf('Meteor Mash'), set.moves.indexOf('Bitter Malice'));
				if (moveIndex >= 0) {
					set.moves[moveIndex] = 'Fishious Rend';
					teraType = 'Water';
				}
			}

			if (teraType) set.teraType = teraType;

			team.push(set);

			// Team specific tweaks occur here
			// Swap last and second to last sets if last set has Illusion
			if (team.length === this.maxTeamSize && (set.ability === 'Illusion')) {
				team[this.maxTeamSize - 1] = team[this.maxTeamSize - 2];
				team[this.maxTeamSize - 2] = set;
			}
		}
		return team;
	}
}

export default RandomStaffBrosTeams;
