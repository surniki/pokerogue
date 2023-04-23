export class Ability {
  public id: Abilities;
  public name: string;
  public description: string;
  public generation: integer;

  constructor(id: Abilities, name: string, description: string, generation: integer) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.generation = generation;
  }
}

export enum Abilities {
  NONE,
  AIR_LOCK = 1,
  ARENA_TRAP,
  BATTLE_ARMOR,
  BLAZE,
  CHLOROPHYLL,
  CLEAR_BODY,
  CLOUD_NINE,
  COLOR_CHANGE,
  COMPOUND_EYES,
  CUTE_CHARM,
  DAMP,
  DRIZZLE,
  DROUGHT,
  EARLY_BIRD,
  EFFECT_SPORE,
  FLAME_BODY,
  FLASH_FIRE,
  FORECAST,
  GUTS,
  HUGE_POWER,
  HUSTLE,
  HYPER_CUTTER,
  ILLUMINATE,
  IMMUNITY,
  INNER_FOCUS,
  INSOMNIA,
  INTIMIDATE,
  KEEN_EYE,
  LEVITATE,
  LIGHTNING_ROD,
  LIMBER,
  LIQUID_OOZE,
  MAGMA_ARMOR,
  MAGNET_PULL,
  MARVEL_SCALE,
  MINUS,
  NATURAL_CURE,
  OBLIVIOUS,
  OVERGROW,
  OWN_TEMPO,
  PICKUP,
  PLUS,
  POISON_POINT,
  PRESSURE,
  PURE_POWER,
  RAIN_DISH,
  ROCK_HEAD,
  ROUGH_SKIN,
  RUN_AWAY,
  SAND_STREAM,
  SAND_VEIL,
  SERENE_GRACE,
  SHADOW_TAG,
  SHED_SKIN,
  SHELL_ARMOR,
  SHIELD_DUST,
  SOUNDPROOF,
  SPEED_BOOST,
  STATIC,
  STENCH,
  STICKY_HOLD,
  STURDY,
  SUCTION_CUPS,
  SWARM,
  SWIFT_SWIM,
  SYNCHRONIZE,
  THICK_FAT,
  TORRENT,
  TRACE,
  TRUANT,
  VITAL_SPIRIT,
  VOLT_ABSORB,
  WATER_ABSORB,
  WATER_VEIL,
  WHITE_SMOKE,
  WONDER_GUARD,
  ADAPTABILITY,
  AFTERMATH,
  ANGER_POINT,
  ANTICIPATION,
  BAD_DREAMS,
  DOWNLOAD,
  DRY_SKIN,
  FILTER,
  FLOWER_GIFT,
  FOREWARN,
  FRISK,
  GLUTTONY,
  HEATPROOF,
  HONEY_GATHER,
  HYDRATION,
  ICE_BODY,
  IRON_FIST,
  KLUTZ,
  LEAF_GUARD,
  MAGIC_GUARD,
  MOLD_BREAKER,
  MOTOR_DRIVE,
  MULTITYPE,
  NO_GUARD,
  NORMALIZE,
  POISON_HEAL,
  QUICK_FEET,
  RECKLESS,
  RIVALRY,
  SCRAPPY,
  SIMPLE,
  SKILL_LINK,
  SLOW_START,
  SNIPER,
  SNOW_CLOAK,
  SNOW_WARNING,
  SOLAR_POWER,
  SOLID_ROCK,
  STALL,
  STEADFAST,
  STORM_DRAIN,
  SUPER_LUCK,
  TANGLED_FEET,
  TECHNICIAN,
  TINTED_LENS,
  UNAWARE,
  UNBURDEN,
  ANALYTIC,
  BIG_PECKS,
  CONTRARY,
  CURSED_BODY,
  DEFEATIST,
  DEFIANT,
  FLARE_BOOST,
  FRIEND_GUARD,
  HARVEST,
  HEALER,
  HEAVY_METAL,
  ILLUSION,
  IMPOSTER,
  INFILTRATOR,
  IRON_BARBS,
  JUSTIFIED,
  LIGHT_METAL,
  MAGIC_BOUNCE,
  MOODY,
  MOXIE,
  MULTISCALE,
  MUMMY,
  OVERCOAT,
  PICKPOCKET,
  POISON_TOUCH,
  PRANKSTER,
  RATTLED,
  REGENERATOR,
  SAND_FORCE,
  SAND_RUSH,
  SAP_SIPPER,
  SHEER_FORCE,
  TELEPATHY,
  TERAVOLT,
  TOXIC_BOOST,
  TURBOBLAZE,
  UNNERVE,
  VICTORY_STAR,
  WEAK_ARMOR,
  WONDER_SKIN,
  ZEN_MODE,
  COMPETITIVE,
  DARK_AURA,
  FAIRY_AURA,
  PROTEAN,
  SLUSH_RUSH,
  NEUTRALIZING_GAS
}

export const abilities = [
  new Ability(Abilities.AIR_LOCK, "Air Lock", "Eliminates the effects of weather.", 3),
  new Ability(Abilities.ARENA_TRAP, "Arena Trap", "Prevents the foe from fleeing.", 3),
  new Ability(Abilities.BATTLE_ARMOR, "Battle Armor", "The POKéMON is protected against critical hits.", 3),
  new Ability(Abilities.BLAZE, "Blaze", "Powers up Fire-type moves in a pinch.", 3),
  new Ability(Abilities.CHLOROPHYLL, "Chlorophyll", "Boosts the POKéMON's SPEED in sunshine.", 3),
  new Ability(Abilities.CLEAR_BODY, "Clear Body", "Prevents other POKéMON from lowering its stats.", 3),
  new Ability(Abilities.CLOUD_NINE, "Cloud Nine", "Eliminates the effects of weather.", 3),
  new Ability(Abilities.COLOR_CHANGE, "Color Change", "Changes the POKéMON's type to the foe's move.", 3),
  new Ability(Abilities.COMPOUND_EYES, "Compound Eyes", "The POKéMON's accuracy is boosted.", 3),
  new Ability(Abilities.CUTE_CHARM, "Cute Charm", "Contact with the POKéMON may cause infatuation.", 3),
  new Ability(Abilities.DAMP, "Damp", "Prevents the use of self-destructing moves.", 3),
  new Ability(Abilities.DRIZZLE, "Drizzle", "The POKéMON makes it rain when it enters a battle.", 3),
  new Ability(Abilities.DROUGHT, "Drought", "Turns the sunlight harsh when the POKéMON enters a battle.", 3),
  new Ability(Abilities.EARLY_BIRD, "Early Bird", "The POKéMON awakens quickly from sleep.", 3),
  new Ability(Abilities.EFFECT_SPORE, "Effect Spore", "Contact may poison or cause paralysis or sleep.", 3),
  new Ability(Abilities.FLAME_BODY, "Flame Body", "Contact with the POKéMON may burn the attacker.", 3),
  new Ability(Abilities.FLASH_FIRE, "Flash Fire", "It powers up Fire-type moves if it's hit by one.", 3),
  new Ability(Abilities.FORECAST, "Forecast", "Castform transforms with the weather.", 3),
  new Ability(Abilities.GUTS, "Guts", "Boosts ATTACK if there is a status problem.", 3),
  new Ability(Abilities.HUGE_POWER, "Huge Power", "Raises the POKéMON's ATTACK stat.", 3),
  new Ability(Abilities.HUSTLE, "Hustle", "Boosts the ATTACK stat, but lowers accuracy.", 3),
  new Ability(Abilities.HYPER_CUTTER, "Hyper Cutter", "Prevents other POKéMON from lowering ATTACK stat.", 3),
  new Ability(Abilities.ILLUMINATE, "Illuminate", "Raises the likelihood of meeting wild POKéMON.", 3),
  new Ability(Abilities.IMMUNITY, "Immunity", "Prevents the POKéMON from getting poisoned.", 3),
  new Ability(Abilities.INNER_FOCUS, "Inner Focus", "The POKéMON is protected from flinching.", 3),
  new Ability(Abilities.INSOMNIA, "Insomnia", "Prevents the POKéMON from falling asleep.", 3),
  new Ability(Abilities.INTIMIDATE, "Intimidate", "Lowers the foe's ATTACK stat.", 3),
  new Ability(Abilities.KEEN_EYE, "Keen Eye", "Prevents other POKéMON from lowering accuracy.", 3),
  new Ability(Abilities.LEVITATE, "Levitate", "Gives immunity to Ground type moves.", 3),
  new Ability(Abilities.LIGHTNING_ROD, "Lightning Rod", "Draws in all Electric-type moves to up SP. ATK.", 3),
  new Ability(Abilities.LIMBER, "Limber", "The POKéMON is protected from paralysis.", 3),
  new Ability(Abilities.LIQUID_OOZE, "Liquid Ooze", "Damages attackers using any draining move.", 3),
  new Ability(Abilities.MAGMA_ARMOR, "Magma Armor", "Prevents the POKéMON from becoming frozen.", 3),
  new Ability(Abilities.MAGNET_PULL, "Magnet Pull", "Prevents Steel-type POKéMON from escaping.", 3),
  new Ability(Abilities.MARVEL_SCALE, "Marvel Scale", "Ups DEFENSE if there is a status problem.", 3),
  new Ability(Abilities.MINUS, "Minus", "Ups SP. ATK if another POKéMON has Plus or Minus.", 3),
  new Ability(Abilities.NATURAL_CURE, "Natural Cure", "All status problems heal when it switches out.", 3),
  new Ability(Abilities.OBLIVIOUS, "Oblivious", "Prevents it from becoming infatuated.", 3),
  new Ability(Abilities.OVERGROW, "Overgrow", "Powers up Grass-type moves in a pinch.", 3),
  new Ability(Abilities.OWN_TEMPO, "Own Tempo", "Prevents the POKéMON from becoming confused.", 3),
  new Ability(Abilities.PICKUP, "Pickup", "The POKéMON may pick up items.", 3),
  new Ability(Abilities.PLUS, "Plus", "Ups SP. ATK if another POKéMON has Plus or Minus.", 3),
  new Ability(Abilities.POISON_POINT, "Poison Point", "Contact with the POKéMON may poison the attacker.", 3),
  new Ability(Abilities.PRESSURE, "Pressure", "The POKéMON raises the foe's PP usage.", 3),
  new Ability(Abilities.PURE_POWER, "Pure Power", "Raises the POKéMON's ATTACK stat.", 3),
  new Ability(Abilities.RAIN_DISH, "Rain Dish", "The POKéMON gradually regains HP in rain.", 3),
  new Ability(Abilities.ROCK_HEAD, "Rock Head", "Protects the POKéMON from recoil damage.", 3),
  new Ability(Abilities.ROUGH_SKIN, "Rough Skin", "Inflicts damage to the attacker on contact.", 3),
  new Ability(Abilities.RUN_AWAY, "Run Away", "Enables a sure getaway from wild POKéMON.", 3),
  new Ability(Abilities.SAND_STREAM, "Sand Stream", "The POKéMON summons a sandstorm in battle.", 3),
  new Ability(Abilities.SAND_VEIL, "Sand Veil", "Boosts the POKéMON's evasion in a sandstorm.", 3),
  new Ability(Abilities.SERENE_GRACE, "Serene Grace", "Boosts the likelihood of added effects appearing.", 3),
  new Ability(Abilities.SHADOW_TAG, "Shadow Tag", "Prevents the foe from escaping.", 3),
  new Ability(Abilities.SHED_SKIN, "Shed Skin", "The POKéMON may heal its own status problems.", 3),
  new Ability(Abilities.SHELL_ARMOR, "Shell Armor", "The POKéMON is protected against critical hits.", 3),
  new Ability(Abilities.SHIELD_DUST, "Shield Dust", "Blocks the added effects of attacks taken.", 3),
  new Ability(Abilities.SOUNDPROOF, "Soundproof", "Gives immunity to sound-based moves.", 3),
  new Ability(Abilities.SPEED_BOOST, "Speed Boost", "Its SPEED stat is gradually boosted.", 3),
  new Ability(Abilities.STATIC, "Static", "Contact with the POKéMON may cause paralysis.", 3),
  new Ability(Abilities.STENCH, "Stench", "The stench may cause the target to flinch.", 3),
  new Ability(Abilities.STICKY_HOLD, "Sticky Hold", "Protects the POKéMON from item theft.", 3),
  new Ability(Abilities.STURDY, "Sturdy", "It cannot be knocked out with one hit.", 3),
  new Ability(Abilities.SUCTION_CUPS, "Suction Cups", "Negates all moves that force switching out.", 3),
  new Ability(Abilities.SWARM, "Swarm", "Powers up Bug-type moves in a pinch.", 3),
  new Ability(Abilities.SWIFT_SWIM, "Swift Swim", "Boosts the POKéMON's SPEED in rain.", 3),
  new Ability(Abilities.SYNCHRONIZE, "Synchronize", "Passes a burn, poison, or paralysis to the foe.", 3),
  new Ability(Abilities.THICK_FAT, "Thick Fat", "Ups resistance to Fire- and Ice-type moves.", 3),
  new Ability(Abilities.TORRENT, "Torrent", "Powers up Water-type moves in a pinch.", 3),
  new Ability(Abilities.TRACE, "Trace", "The POKéMON copies a foe's Ability.", 3),
  new Ability(Abilities.TRUANT, "Truant", "POKéMON can't attack on consecutive turns.", 3),
  new Ability(Abilities.VITAL_SPIRIT, "Vital Spirit", "Prevents the POKéMON from falling asleep.", 3),
  new Ability(Abilities.VOLT_ABSORB, "Volt Absorb", "Restores HP if hit by an Electric-type move.", 3),
  new Ability(Abilities.WATER_ABSORB, "Water Absorb", "Restores HP if hit by a Water-type move.", 3),
  new Ability(Abilities.WATER_VEIL, "Water Veil", "Prevents the POKéMON from getting a burn.", 3),
  new Ability(Abilities.WHITE_SMOKE, "White Smoke", "Prevents other POKéMON from lowering its stats.", 3),
  new Ability(Abilities.WONDER_GUARD, "Wonder Guard", "Only supereffective moves will hit.", 3),
  new Ability(Abilities.ADAPTABILITY, "Adaptability", "Powers up moves of the same type.", 4),
  new Ability(Abilities.AFTERMATH, "Aftermath", "Damages the attacker landing the finishing hit.", 4),
  new Ability(Abilities.ANGER_POINT, "Anger Point", "Maxes ATTACK after taking a critical hit.", 4),
  new Ability(Abilities.ANTICIPATION, "Anticipation", "Senses a foe's dangerous moves.", 4),
  new Ability(Abilities.BAD_DREAMS, "Bad Dreams", "Reduces a sleeping foe's HP.", 4),
  new Ability(Abilities.DOWNLOAD, "Download", "Adjusts power according to a foe's defenses.", 4),
  new Ability(Abilities.DRY_SKIN, "Dry Skin", "Reduces HP if it is hot. Water restores HP.", 4),
  new Ability(Abilities.FILTER, "Filter", "Reduces damage from super-effective attacks.", 4),
  new Ability(Abilities.FLOWER_GIFT, "Flower Gift", "Powers up party POKéMON when it is sunny.", 4),
  new Ability(Abilities.FOREWARN, "Forewarn", "Determines what moves a foe has.", 4),
  new Ability(Abilities.FRISK, "Frisk", "The POKéMON can check a foe's held item.", 4),
  new Ability(Abilities.GLUTTONY, "Gluttony", "Encourages the early use of a held Berry.", 4),
  new Ability(Abilities.HEATPROOF, "Heatproof", "Weakens the power of Fire-type moves.", 4),
  new Ability(Abilities.HONEY_GATHER, "Honey Gather", "The POKéMON may gather Honey from somewhere.", 4),
  new Ability(Abilities.HYDRATION, "Hydration", "Heals status problems if it is raining.", 4),
  new Ability(Abilities.ICE_BODY, "Ice Body", "The POKéMON gradually regains HP in a hailstorm.", 4),
  new Ability(Abilities.IRON_FIST, "Iron Fist", "Boosts the power of punching moves.", 4),
  new Ability(Abilities.KLUTZ, "Klutz", "The POKéMON can't use any held items.", 4),
  new Ability(Abilities.LEAF_GUARD, "Leaf Guard", "Prevents problems with status in sunny weather.", 4),
  new Ability(Abilities.MAGIC_GUARD, "Magic Guard", "Protects the POKéMON from indirect damage.", 4),
  new Ability(Abilities.MOLD_BREAKER, "Mold Breaker", "Moves can be used regardless of Abilities.", 4),
  new Ability(Abilities.MOTOR_DRIVE, "Motor Drive", "Raises SPEED if hit by an Electric-type move.", 4),
  new Ability(Abilities.MULTITYPE, "Multitype", "Changes type to match the held Plate.", 4),
  new Ability(Abilities.NO_GUARD, "No Guard", "Ensures attacks by or against the POKéMON land.", 4),
  new Ability(Abilities.NORMALIZE, "Normalize", "All the POKéMON's moves become the Normal type.", 4),
  new Ability(Abilities.POISON_HEAL, "Poison Heal", "Restores HP if the POKéMON is poisoned.", 4),
  new Ability(Abilities.QUICK_FEET, "Quick Feet", "Boosts SPEED if there is a status problem.", 4),
  new Ability(Abilities.RECKLESS, "Reckless", "Powers up moves that have recoil damage.", 4),
  new Ability(Abilities.RIVALRY, "Rivalry", "Deals more damage to a POKéMON of same gender.", 4),
  new Ability(Abilities.SCRAPPY, "Scrappy", "Enables moves to hit Ghost-type POKéMON.", 4),
  new Ability(Abilities.SIMPLE, "Simple", "Doubles all stat changes.", 4),
  new Ability(Abilities.SKILL_LINK, "Skill Link", "Increases the frequency of multi-strike moves.", 4),
  new Ability(Abilities.SLOW_START, "Slow Start", "Temporarily halves ATTACK and SPEED.", 4),
  new Ability(Abilities.SNIPER, "Sniper", "Powers up moves if they become critical hits.", 4),
  new Ability(Abilities.SNOW_CLOAK, "Snow Cloak", "Raises evasion in a hailstorm.", 4),
  new Ability(Abilities.SNOW_WARNING, "Snow Warning", "The POKéMON summons a hailstorm in battle.", 4),
  new Ability(Abilities.SOLAR_POWER, "Solar Power", "In sunshine, SP. ATK is boosted but HP decreases.", 4),
  new Ability(Abilities.SOLID_ROCK, "Solid Rock", "Reduces damage from super-effective attacks.", 4),
  new Ability(Abilities.STALL, "Stall", "The POKéMON moves after all other POKéMON do.", 4),
  new Ability(Abilities.STEADFAST, "Steadfast", "Raises SPEED each time the POKéMON flinches.", 4),
  new Ability(Abilities.STORM_DRAIN, "Storm Drain", "Draws in all Water-type moves to up SP. ATK.", 4),
  new Ability(Abilities.SUPER_LUCK, "Super Luck", "Heightens the critical-hit ratios of moves.", 4),
  new Ability(Abilities.TANGLED_FEET, "Tangled Feet", "Raises evasion if the POKéMON is confused.", 4),
  new Ability(Abilities.TECHNICIAN, "Technician", "Powers up the POKéMON's weaker moves.", 4),
  new Ability(Abilities.TINTED_LENS, "Tinted Lens", "Powers up “not very effective” moves.", 4),
  new Ability(Abilities.UNAWARE, "Unaware", "Ignores any stat changes in the POKéMON.", 4),
  new Ability(Abilities.UNBURDEN, "Unburden", "Raises SPEED if a held item is used.", 4),
  new Ability(Abilities.ANALYTIC, "Analytic", "Boosts move power when the POKéMON moves last.", 5),
  new Ability(Abilities.BIG_PECKS, "Big Pecks", "Protects the POKéMON from DEFENSE-lowering attacks.", 5),
  new Ability(Abilities.CONTRARY, "Contrary", "Makes stat changes have an opposite effect.", 5),
  new Ability(Abilities.CURSED_BODY, "Cursed Body", "May disable a move used on the POKéMON.", 5),
  new Ability(Abilities.DEFEATIST, "Defeatist", "Lowers stats when HP drops below half.", 5),
  new Ability(Abilities.DEFIANT, "Defiant", "Sharply raises ATTACK when the POKéMON's stats are lowered.", 5),
  new Ability(Abilities.FLARE_BOOST, "Flare Boost", "Powers up special attacks when burned.", 5),
  new Ability(Abilities.FRIEND_GUARD, "Friend Guard", "Reduces damage done to allies.", 5),
  new Ability(Abilities.HARVEST, "Harvest", "May create another Berry after one is used.", 5),
  new Ability(Abilities.HEALER, "Healer", "May heal an ally's status conditions.", 5),
  new Ability(Abilities.HEAVY_METAL, "Heavy Metal", "Doubles the POKéMON's weight.", 5),
  new Ability(Abilities.ILLUSION, "Illusion", "Enters battle disguised as the last POKéMON in the party.", 5),
  new Ability(Abilities.IMPOSTER, "Imposter", "It transforms itself into the POKéMON it is facing.", 5),
  new Ability(Abilities.INFILTRATOR, "Infiltrator", "Passes through the foe's barrier and strikes.", 5),
  new Ability(Abilities.IRON_BARBS, "Iron Barbs", "Inflicts damage to the POKéMON on contact.", 5),
  new Ability(Abilities.JUSTIFIED, "Justified", "Raises ATTACK when hit by a Dark-type move.", 5),
  new Ability(Abilities.LIGHT_METAL, "Light Metal", "Halves the POKéMON's weight.", 5),
  new Ability(Abilities.MAGIC_BOUNCE, "Magic Bounce", "Reflects status- changing moves.", 5),
  new Ability(Abilities.MOODY, "Moody", "Raises one stat and lowers another.", 5),
  new Ability(Abilities.MOXIE, "Moxie", "Boosts ATTACK after knocking out any POKéMON.", 5),
  new Ability(Abilities.MULTISCALE, "Multiscale", "Reduces damage when HP is full.", 5),
  new Ability(Abilities.MUMMY, "Mummy", "Contact with this POKéMON spreads this Ability.", 5),
  new Ability(Abilities.OVERCOAT, "Overcoat", "Protects the POKéMON from weather damage.", 5),
  new Ability(Abilities.PICKPOCKET, "Pickpocket", "Steals an item when hit by another POKéMON.", 5),
  new Ability(Abilities.POISON_TOUCH, "Poison Touch", "May poison targets when a POKéMON makes contact.", 5),
  new Ability(Abilities.PRANKSTER, "Prankster", "Gives priority to a status move.", 5),
  new Ability(Abilities.RATTLED, "Rattled", "Bug, Ghost or Dark type moves scare it and boost its SPEED.", 5),
  new Ability(Abilities.REGENERATOR, "Regenerator", "Restores a little HP when withdrawn from battle.", 5),
  new Ability(Abilities.SAND_FORCE, "Sand Force", "Boosts certain moves' power in a sandstorm.", 5),
  new Ability(Abilities.SAND_RUSH, "Sand Rush", "Boosts the POKéMON's SPEED in a sandstorm.", 5),
  new Ability(Abilities.SAP_SIPPER, "Sap Sipper", "Boosts ATTACK when hit by a Grass-type move.", 5),
  new Ability(Abilities.SHEER_FORCE, "Sheer Force", "Removes added effects to increase move damage.", 5),
  new Ability(Abilities.TELEPATHY, "Telepathy", "Anticipates an ally's ATTACK and dodges it.", 5),
  new Ability(Abilities.TERAVOLT, "Teravolt", "Moves can be used regardless of Abilities.", 5),
  new Ability(Abilities.TOXIC_BOOST, "Toxic Boost", "Powers up physical attacks when poisoned.", 5),
  new Ability(Abilities.TURBOBLAZE, "Turboblaze", "Moves can be used regardless of Abilities.", 5),
  new Ability(Abilities.UNNERVE, "Unnerve", "Makes the foe nervous and unable to eat Berries.", 5),
  new Ability(Abilities.VICTORY_STAR, "Victory Star", "Boosts the accuracy of its allies and itself.", 5),
  new Ability(Abilities.WEAK_ARMOR, "Weak Armor", "Physical attacks lower DEFENSE and raise SPEED.", 5),
  new Ability(Abilities.WONDER_SKIN, "Wonder Skin", "Makes status-changing moves more likely to miss.", 5),
  new Ability(Abilities.ZEN_MODE, "Zen Mode", "Changes form when HP drops below half.", 5),
  new Ability(Abilities.COMPETITIVE, "Competitive", "Sharply raises SP. ATK when the POKéMON's stats are lowered.", 6),
  new Ability(Abilities.DARK_AURA, "Dark Aura", "Raises power of Dark type moves for all POKéMON in battle.", 6),
  new Ability(Abilities.FAIRY_AURA, "Fairy Aura", "Raises power of Fairy type moves for all POKéMON in battle.", 6),
  new Ability(Abilities.PROTEAN, "Protean", "Changes the POKéMON's type to its last used move.", 6),
  new Ability(Abilities.SLUSH_RUSH, "Slush Rush", "Boosts the POKéMON's SPEED stat in a hailstorm.", 7),
  new Ability(Abilities.NEUTRALIZING_GAS, "Neutralizing Gas", "Neutralizes abilities of all POKéMON in battle.", 8)
];