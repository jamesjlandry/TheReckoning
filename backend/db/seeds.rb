# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Type.create(name: "Champion", text: "You are a born warrior and always seem to have the upper hand in a fight. Champions are a call back to past society when rulers selected the best of the best to be their champion in battle. Now the name persists for anyone who stands above the rest when it comes to battle. Many people claim the name, but in truth, only a select few are worthy of the title. As a Champion, you have 2 additional Stat Points in either Strength or Dexterity. You have an additional 4 Stat Points to place however you like.")

Type.create(name: "Mage", text: "While magic permeates the world around, you are able to grasp its powers much easier than most. Your natural attunement to magic helps you to use magical devices and artifacts easier than most. As a Mage, you start the game with 2 additional Stat Points in magic. You have an additional 4 Stat Points to place however you like.")

Type.create(name: "Rogue", text: "Your best work is done in the shadows. This isn't to say that your intentions aren't noble, you just know how to get things done. Skills are where a Rogue shines best. You may not have all the powers of a Mage or the fighting ability of a Champion, but your wit and your skills have always gotten you out of a scrape. And likely gotten you into a bit more coin. Choose 3 of the following skills to start: Deception, Perception, Stealth, Swimming, CLimbing, Balancing, Initiative. You have 2 additional points in Dexterity. You have an additional 4 Stat Points to place however you like.")

Type.create(name: "Artificer", text: "Artificers are more than mere craftsment. You infuse your creations with magic. Yet not everyone who crafts magical items can call themselves Artificers though. But for a true Artificer, this practice is so engrained in them that they likely would struggle making a mundane object without 'life'. As an Artificer, you have 1 additional point in magic and 1 additional point in Wisdom. You have an additional 4 Stat Points to place however you like.")

Type.create(name: "Emissary", text: "You're not just good with words, you are trained in them. You read a face in a moment and know exactly what to say to leverage what you see. As an Emissary you start the game with 2 additional points in Charisma. You have an additional 4 Stat Points to place however you like.")

Race.create(name: "Human", text: "Humans are the most populous race on the planet, and have spread themselves out across the globe, integrating themselves into many cultures. As a Human, you start the game with 1 additional Stat Point to place in any Stat of your choosing and with 1 extra Skill of your choosing.")

Race.create(name: "Goblin", text: "For many years a missunderstanding between cultures kept Goblins on the outskirts of society. Diplomacy between the Goblins and the Halflings eventually allowed Goblins to integrate into other societies. Goblins are slightly larger than halflings and very strong for their size. While they are not evil as most races once thought, Goblins tend to be very shrewd and are highly intelligent. As a Goblin, you gain 2 points in Wisdom to start the game.")

Race.create(name: "Halfling", text: "Halflings have all of the appearances of a human, but are about the size of a 7 year old human child. Halfings tend to be very outgoing and have integrated into many societies well. While their size hinders their strength, their small fingers are very nimble. As a Halfling you start the game with -1 Strength, 2 additional points in Dexterity, and 1 additional point in Charisma.")

Race.create(name: "Trollkin", text: "Trollkin are the only known remaining descendants of the original race of Trolls. Standing between 6'-7' tall on average with green tinted skin, Trollkin share several physical characteristics with their Troll ancestors, however their personalities are as varied as any other race. As a Trollkin, you start the game with 2 additional points in Strength.")

Race.create(name: "Dark Elf", text: "Not much is known about the history of Dark Elves, even amongst themselves. Due to their war with the Light Elves, much of their previous history and culture was lost. Even the history of the war has been mostly lost. While no one has seen a Light Elf for over 1000 years, the distinction is still made amongst the races. Dark Elves appearance range in color from pitch black skin to a dusky blue-grey. As a Dark Elf, you start the game with 1 additional point in Dexterity and 1 additional point in Wisdom.")

Race.create(name: "Feytouched", text: "The descendants of Humans and Fey, Feytouched still hold a spark of the old magic. While Feytouched appear mostly human, they almost always have some unique mark of their Fey ancestry. Sometimes this mark is as discrete as unnatural colored eyes, or as ornate as large antlers, horns, or a prehensile tail. Feytouched start the game with 2 additional point in Magic.")


Blessing.create(name: "Blessing of Shadows", text: "Shadows are not something to be feared, they are yours to controll. You have the ability to move and bend shadows to your will. Not only that, but you can make them take physical form, and use them as armor for defense, or even shape them into weapons.")

BlessingLevel.create(name: "Shadow Armor", blessing_id: 1, level: 1, text: "You call nearby shadows to surround you, providing a + 2 to your armor for the next 10 minutes. Cost: 1 Magic point")

BlessingLevel.create(name: "Shadow Blade", blessing_id: 1, level: 1, text: "You call nearby shadow to your hand, shaping it into a blade of your choosing for the next 10 minutes. The blade counts as a light weapon, even if its shape would be considered otherwise. The shadow blade does 1d6 + 5 damage. Cost: 1 Magic point")

BlessingLevel.create(name: "Sample Name", blessing_id: 1, level: 2, text: "Sample Text for Ability description.")

BlessingLevel.create(name: "Sample Name", blessing_id: 1, level: 2, text: "Sample Text for Ability description.")

BlessingLevel.create(name: "Sample Name", blessing_id: 1, level: 3, text: "Sample Text for Ability description.")

BlessingLevel.create(name: "Sample Name", blessing_id: 1, level: 3, text: "Sample Text for Ability description.")

BlessingLevel.create(name: "Sample Name", blessing_id: 1, level: 4, text: "Sample Text for Ability description.")

BlessingLevel.create(name: "Sample Name", blessing_id: 1, level: 4, text: "Sample Text for Ability description.")

BlessingLevel.create(name: "Sample Name", blessing_id: 1, level: 5, text: "Sample Text for Ability description.")

BlessingLevel.create(name: "Sample Name", blessing_id: 1, level: 5, text: "Sample Text for Ability description.")

BlessingLevel.create(name: "Sample Name", blessing_id: 1, level: 6, text: "Sample Text for Ability description.")

BlessingLevel.create(name: "Sample Name", blessing_id: 1, level: 6, text: "Sample Text for Ability description.")

BlessingLevel.create(name: "Sample Name", blessing_id: 1, level: 7, text: "Sample Text for Ability description.")

BlessingLevel.create(name: "Sample Name", blessing_id: 1, level: 7, text: "Sample Text for Ability description.")

BlessingLevel.create(name: "Sample Name", blessing_id: 1, level: 8, text: "Sample Text for Ability description.")

BlessingLevel.create(name: "Sample Name", blessing_id: 1, level: 8, text: "Sample Text for Ability description.")

BlessingLevel.create(name: "Sample Name", blessing_id: 1, level: 9, text: "Sample Text for Ability description.")

BlessingLevel.create(name: "Sample Name", blessing_id: 1, level: 9, text: "Sample Text for Ability description.")

Curse.create(name: "Aura of Cold", text: "The temperature around you is several degrees cooler than the rest of the area. In warm climates, this is not necessarily a problem, as standning near you can cool others off. Your skin is also noticeably cooler than others however and tends to cause an adverse reaction to anyone who touches you.", blessing_id: 1)

CurseLevel.create(name: "Bitter Cold", level: 1, curse_id: 1, text: "Whenever you use at least 1 point of Magic, every creature adjacent to you, including yourself, takes 1 point of damage from a sudden drop in temperature. This effect lasts 1 round.")

CurseLevel.create(name: "Expanded Aura", level: 2, curse_id: 1, text: "Whenever you use at least 1 point of Magic, your auro of cold extends to a 10' radius around you, lasting until the spell ends. This effect extends the radius for the Biting Cold effect as well.")

CurseLevel.create(name: "Biting Cold", level: 3, curse_id: 1, text: "Whenever you use at least 1 point of Magic, you take 1 additional point of damage. Additionally, all creatures within your Aura (including you) take damage equal to the amount of Magic points used.")

CurseLevel.create(name: "Sample Name", level: 4, curse_id: 1, text: "Sample Curse Description.")

CurseLevel.create(name: "Sample Name", level: 5, curse_id: 1, text: "Sample Curse Description.")

CurseLevel.create(name: "Sample Name", level: 6, curse_id: 1, text: "Sample Curse Description.")

CurseLevel.create(name: "Sample Name", level: 7, curse_id: 1, text: "Sample Curse Description.")

CurseLevel.create(name: "Sample Name", level: 8, curse_id: 1, text: "Sample Curse Description.")

CurseLevel.create(name: "Sample Name", level: 9, curse_id: 1, text: "Sample Curse Description.")

Blessing.create(name: "Blessing of the Mind", text: "Telekinesis, Telepathy, you're not sure what to call it, you just know you can do things with your mind others must use their hands to do. You have the ability to move small objects with your mind. This ability cannot be used to make attacks and cannot lift anything that you cannot easily carry with one hand.")

BlessingLevel.create(name: "Warding Mind", blessing_id: 2, level: 1, text: "You bend attacks away from you. Provides a + 3 to defense for the next 10 minutes. Cost: 1 Magic point")

Curse.create(name: "Aura of Stillness", text: "The air around you always seems heavy. Anyone moving feels labored. This effect is not enough to hunder normal tasks.")

CurseLevel.create(name: "Tangible Air", curse_id: 2, text: "Whenever you use at least 1 point from your Magic pool, every creature adjacent to you, including yourself, is slowed for 1 round. While slowed, you can only move or take an action, but not both.")

TypeLevel.create(name: "Surprise Attack", type_id: 3, level: 1, text: "Whenever you attack a foe who has not yet acted in combat, and you are attacking wiht a light weapon, add 3 to your normal weapon damage. Cost: 1 Dexterity Point.")

TypeLevel.create(name: "Feint", type_id: 3, level: 1, text: "You make a feint attack, lowering your target's defense. You gain a + 5 attack bonus, but subtract 2 from your damage dealt. Cost: 1 Dexterity Point.")

TypeLevel.create(name: "Evasive", type_id: 3, level: 1, text: "When an area effect would do damage to you, you may reduce that damage by 2 points. Cost: 1 Dexterity Point.")

TypeLevel.create(name: "Uncanny Awareness", type_id: 3, level: 2, text: "You gain a + 3 bonus to defense rolls for the next 10 minutes. Cost: 2 Dexterity Points.")

TypeLevel.create(name: "Study Foe", type_id: 3, level: 2, text: "As an immediate action, you study your foe before attacking gaining either a + 2 bonus to your attack roll, or a + 2 bonus to damage. Cost: 1 Wisdom point.")

TypeLevel.create(name: "Swift Attack", type_id: 3, level: 3, text: "On a successful melee or ranged attack with a light weapon, you may immediately make a second attack with that weapon. If the attack is ranged thrown, you must be weilding a second light weapon in your off hand. Cost: 2 Dexterity Points.")

TypeLevel.create(name: "Precise Cut", type_id: 3, level: 3, text: "You place a precise attack with your light bladed or light or medium ranged attack, causing 3 bleed damage on your foe's turn for 1D6 rounds. Cost: 2 Dexterity points.")

TypeLevel.create(name: "Dual Light Wield", type_id: 3, level: 4, text: "You can weild 2 light melee weapons at once, dealing 1D6 + 2 extra damage on a successful attack. Requires Dexterity of 10 or higher.")

TypeLevel.create(name: "Precise Shot", type_id: 3, level: 4, text: "You target a specific area of your foe with a ranged attack. On a successful attack the target take an additional 2d6 damage. You can forgo the extra damage to instead choose from one of the following effects: Your strike causes your foe to drop their weapon. Your strike causes your foe to fall prone. Your strike lodges in a major joint and slows your opponent for 1 D6 rounds. Cost: 4 Dexterity points.")

TypeLevel.create(name: "Sample Name", type_id: 3, level: 5, text: "Sample Text for Ability Description.")

TypeLevel.create(name: "Sample Name", type_id: 3, level: 5, text: "Sample Text for Ability Description.")

TypeLevel.create(name: "Sample Name", type_id: 3, level: 5, text: "Sample Text for Ability Description.")

TypeLevel.create(name: "Sample Name", type_id: 3, level: 6, text: "Sample Text for Ability Description.")

TypeLevel.create(name: "Sample Name", type_id: 3, level: 6, text: "Sample Text for Ability Description.")

TypeLevel.create(name: "Sample Name", type_id: 3, level: 7, text: "Sample Text for Ability Description.")

TypeLevel.create(name: "Sample Name", type_id: 3, level: 7, text: "Sample Text for Ability Description.")

TypeLevel.create(name: "Sample Name", type_id: 3, level: 8, text: "Sample Text for Ability Description.")

TypeLevel.create(name: "Sample Name", type_id: 3, level: 8, text: "Sample Text for Ability Description.")

TypeLevel.create(name: "Sample Name", type_id: 3, level: 9, text: "Sample Text for Ability Description.")

TypeLevel.create(name: "Sample Name", type_id: 3, level: 9, text: "Sample Text for Ability Description.")

StartingStat.create(type_id: 1, race_id: 1, strength: 5, dexterity: 5, charisma: 5, wisdom: 5, magic: 2 )

StartingStat.create(type_id: 1, race_id: 2, strength: 5, dexterity: 5, charisma: 5, wisdom: 7, magic: 2 )

StartingStat.create(type_id: 1, race_id: 3, strength: 5, dexterity: 7, charisma: 6, wisdom: 5, magic: 2 )

StartingStat.create(type_id: 1, race_id: 4, strength: 7, dexterity: 5, charisma: 5, wisdom: 5, magic: 2 )

StartingStat.create(type_id: 1, race_id: 5, strength: 5, dexterity: 6, charisma: 5, wisdom: 6, magic: 2 )

StartingStat.create(type_id: 1, race_id: 6, strength: 5, dexterity: 5, charisma: 5, wisdom: 5, magic: 4 )

StartingStat.create(type_id: 2, race_id: 1, strength: 5, dexterity: 5, charisma: 5, wisdom: 5, magic: 4)

StartingStat.create(type_id: 2, race_id: 2, strength: 5, dexterity: 5, charisma: 5, wisdom: 7, magic: 4)

StartingStat.create(type_id: 2, race_id: 3, strength: 4, dexterity: 2, charisma: 6, wisdom: 5, magic: 4)

StartingStat.create(type_id: 2, race_id: 4, strength: 7, dexterity: 5, charisma: 5, wisdom: 5, magic: 4)

StartingStat.create(type_id: 2, race_id: 5, strength: 5, dexterity: 1, charisma: 5, wisdom: 1, magic: 4)

StartingStat.create(type_id: 2, race_id: 6, strength: 5, dexterity: 5, charisma: 5, wisdom: 5, magic: 6)

StartingStat.create(type_id: 3, race_id: 1, strength: 5, dexterity: 7, charisma: 5, wisdom: 5, magic: 2)

StartingStat.create(type_id: 3, race_id: 2, strength: 5, dexterity: 7, charisma: 5, wisdom: 7, magic: 2)

StartingStat.create(type_id: 3, race_id: 3, strength: 4, dexterity: 9, charisma: 6, wisdom: 5, magic: 2)

StartingStat.create(type_id: 3, race_id: 4, strength: 7, dexterity: 7, charisma: 5, wisdom: 5, magic: 2)

StartingStat.create(type_id: 3, race_id: 5, strength: 5, dexterity: 8, charisma: 5, wisdom: 6, magic: 2)

StartingStat.create(type_id: 3, race_id: 6, strength: 5, dexterity: 7, charisma: 5, wisdom: 5, magic: 4)

StartingStat.create(type_id: 4, race_id: 1, strength: 5, dexterity: 5, charisma: 5, wisdom: 6, magic: 3)

StartingStat.create(type_id: 4, race_id: 2, strength: 5, dexterity: 5, charisma: 5, wisdom: 8, magic: 3)

StartingStat.create(type_id: 4, race_id: 3, strength: 4, dexterity: 7, charisma: 6, wisdom: 6, magic: 3)

StartingStat.create(type_id: 4, race_id: 4, strength: 7, dexterity: 5, charisma: 5, wisdom: 6, magic: 3)

StartingStat.create(type_id: 4, race_id: 5, strength: 5, dexterity: 6, charisma: 5, wisdom: 7, magic: 3)

StartingStat.create(type_id: 4, race_id: 6, strength: 5, dexterity: 5, charisma: 5, wisdom: 6, magic: 5)

Armor.create(name: "Leather Armor", type: "Light", defense: 1, text: "Basic leather armor.", cost: 3)

Armor.create(name: "Hardened Leather Armor", type: "Medium", defense: 2, text: "Thicker than normal leather armor, this armor provides better protection, however will slow you down.", cost: 5)

Armor.create(name: "Dragon Scale Armor", type: "Heavy", defense: 3, text: "This armor is made of interlocking dragon scales. It provides great protection, however will significantly slow you down.", cost: 15)

Equipment.create(name: "Explorer's pack", text: "Contains a cloak, boots, a bed roll, 50' of rope, hammer and spikes, 4 minor glow stones, and rations for 3 days.", cost: 20)

Equipment.create(name: "Grappling hook", text: "Basic grappling with 4 extendable hooks. Does not come with rope. Provides +5 to climb checks. (GM determines if hook has sufficient ledge to grab)", cost: 3)

Equipment.create(name: "First Aid Kit", text: "Contains bandages, thread and needles and healing salves. Provides + 5 to heal checks.", cost: 10)

Weapon.create(name: "Blowgun", type: "Light", damage: 2, text: "Comes with 12 dars. Short Range.", cost: 4)

Weapon.create(name: "Dagger", type: "Light", damage: 2, text: "Can be thrown at short range.", cost: 1)

Weapon.create(name: "Arm Blade", type: "Light", damage: 2, text: "Retractable blade that attaches to your forearm.", cost: 4)

Weapon.create(name: "Knife", type: "Light", damage: 2, text: "Can be thrown at short range.", cost: 1)

Weapon.create(name: "Rapier", type: "Light", damage: 2, text: "Thin sword that uses speed more than strength.", cost: 1)

Weapon.create(name: "Whip", type: "Light", damage: 2, text: "Can reach up to short range.", cost: 3)

Weapon.create(name: "Unarmed", type: "Light", damage: 1, text: "Punches, kicks, throws, etc.", cost: 0)

Weapon.create(name: "Boomerang", type: "Light", damage: 2, text: "Usually made of a light sturdy wood, rarer boomerangs are made of light metal and infused with magic to strengthen. Can be thrown short range. Returns to the wielder when missing the target.", cost: 3)

Weapon.create(name: "Iron Fan", type: "Light", damage: 4, text: "Foldable metal fan with sharpened edges. Originated from a dancing form of martial arts.", cost: 3)

Weapon.create(name: "Tanto", type: "Light", damage: 2, text: "Curved blade the size of a large dagger. Small companion to the Katana and Wakizashi.", cost: 3)

Weapon.create(name: "Bow", type: "Medium", damage: 4, text: "Long Range. Comes with 12 arrows.", cost: 8)

Weapon.create(name: "Broadsword", type: "Medium", damage: 4, text: "Short sword with double edged blade. ", cost: 3)

Weapon.create(name: "Wakizashi", type: "Medium", damage: 4, text: "Short sword with curved blade. Smaller companion to Katana.", cost: 5)

Weapon.create(name: "Spear", type: "Medium", damage: 4, text: "Two handed. Can be thrown up to long range.", cost: 3)

Weapon.create(name: "Javelin", type: "Medium", damage: 4, text: "Can be thrown up to long range. Hindered for use in melee", cost: 3)

Weapon.create(name: "Machete", type: "Medium", damage: 4, text: "It's a machete, what do you want from me?", cost: 3)

Weapon.create(name: "Katana", type: "Heavy", damage: 6, text: "Two handed curved long sword.", cost: 7)

Weapon.create(name: "Greatsword", type: "Heavy", damage: 6, text: "Requires two hands to wield.", cost: 5)

Weapon.create(name: "Morning Star", type: "Heavy", damage: 6, text: "Large club or mace with varied spikes on the end. Requires two hands to wield.", cost: 5)

Weapon.create(name: "Glaive", type: "Heavy", damage: 6, text: "Long pole with large blade attached to one end. Requires two hands to wield.", cost: 5)

Weapon.create(name: "Heavy Crossbow", type: "Heavy", damage: 6, text: "Long ranged. Action to reload. Comes with 12 bolts.", cost: 8)

Skill.create(name: "Perception", text: "You are always alert and always studying. Provides + 5 on tasks involving noticing small details, whether through visual, auditory, or other means.")

Skill.create(name: "Light Blades", text: "Provides + 2 when attacking with light bladed weapons.")

Skill.create(name: "Medium Blades", text: "Provides + 2 when attacking with medium bladed weapons.")

Skill.create(name: "Heavy Blades", text: "Provides + 2 when attacking with heavy bladed weapons.")

Skill.create(name: "Light Bashing", text: "Provides + 2 when attacking with light bashing weapons such as unarmed attacks.")

Skill.create(name: "Medium Bashing", text: "Provides + 2 when attacking with medium bashing weapons such as a club.")

Skill.create(name: "Heavy Bashing", text: "Provides + 2 when attacking with heavy bashing weapons such as a maul.")

Skill.create(name: "Light Ranged", text: "Provides + 2 when attacking with light ranged weapons such as a blowgun.")

Skill.create(name: "Medium Ranged", text: "Provides + 2 when attacking with medium ranged weapons such as a bow.")

Skill.create(name: "Heavy Ranged", text: "Provides + 2 when attacking with heavy ranged weapons such as a heavy crossbow.")

Skill.create(name: "Arcane Knowledge", text: "You are trained in knowledge of the arcane. Provides + 5 to any task involving working with or identifying the arcane.")

Skill.create(name: "Stealth", text: "Provides + 5  to tasks involving hiding or sneaking.")

Skill.create(name: "Arcane Crafting", text: "You are trained in crafting arcane devices. Provides + 5 to tasks involving creating arcane charms and artifacts.")

Skill.create(name: "Armor", text: "Reduces the dexterity penalty for wearing armor by 1.")

Skill.create(name: "Healing", text: "Provides + 5 to tasks involving healing or medicine. Heal checks provide 1 HP per character level and can stop non-magical ongoing effects such as bleed damage.")

Skill.create(name: "Climbing", text: "Provides + 5 to all climb checks.")

Skill.create(name: "Deception", text: "You are trained in all forms of deception. Provides an asset on tasks attempting to deceive another character or NPC.")

Skill.create(name: "Crafting", text: "Choose a specific type of mundane item, such as tailoring, metalwork, or woodworking. You are trained in crafting items of that type.")

Skill.create(name: "Swimming", text: "Provides + 5  for swimming tasks.")

Skill.create(name: "Riding", text: "You are trained in riding a mount. Provides + 5 to riding checks including mounted combat.")

Skill.create(name: "Lore", text: "You are trained in ancient history. Provides + 5 to intellect tasks involving lore and history.")

Skill.create(name: "Initiative", text: "Through training, you are always alert and ready for battle. Provides + 5 to intiative rolls for combat.")

Skill.create(name: "Locksmith", text: "You are trained in the use of lockpicks for all lock types. Provides + 5 to all tasks involving opening locks.")

Skill.create(name: "Nature Survival", text: "You are trained in nature and survival. Provides + 5 to tasks involving finding food, water, shelter when in nature.")

Skill.create(name: "Persuasion", text: "You know how to talk to people and get your way. Provides + 5 to all tasks involving persuading another character or NPC.")

Skill.create(name: "Balancing", text: "Provides + 5 to all tasks involving balance and careful steps.")