# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Type.create(name: "Champion", text: "Champions are a call back to past society when rulers selected the best of the best to be their champion in battle. Now the name persists for anyone who stands above the rest in the art of war. Many people claim the name, but in truth, only a select few are worthy of the title. As a Champion, you have 2 additional Stat Points in either Strength or Dexterity. You have an additional 4 Stat Points to place however you like. Additionally, you may choose 3 of the following skills: Acrobatics, Balance, Ride, Swim, Perception, Persuasion, Deception, Heal, Initiative, Light Armor, Medium Armor, Heavy Armor. You can wield all weapon types without penalty.")

Type.create(name: "Mage", text: "While magic permeates the world around, you are able to grasp its powers much easier than most. Your natural attunement to magic helps you to use magical devices and artifacts easier than most. As a Mage, you start the game with 2 additional Stat Points in magic. You have an additional 4 Stat Points to place however you like. You are trained in Arcane Knowledge. Additionally, you may choose 2 of the following skills: Lore, Perception, Persuasion, Deception, Heal, Initiative, Light Armor. You can wield Light Weapons without penalty.")

Type.create(name: "Rogue", text: "Your best work is done in the shadows. This isn't to say that your intentions aren't noble, you just know how to get things done. Skills are where a Rogue shines best. You may not have all the powers of a Mage or the fighting ability of a Champion, but your wit and your skills have always gotten you out of a scrape. And likely gotten you into a bit more coin.  You have 2 additional points in Dexterity. You have an additional 4 Stat Points to place however you like. You are trained in Stealth and Perception. Addtionally choose 3 of the following skills to start: Locksmith, Deception, Swim, CLimb, Balance, Initiative, Heal, Light Armor. You can wield Light and Medium weapons without penalty.")

Type.create(name: "Artificer", text: "Artificers are more than mere craftsment. You infuse your creations with magic. Yet not everyone who crafts magical items can call themselves Artificers though. But for a true Artificer, this practice is so engrained in them that they likely would struggle making a mundane object without 'life'. As an Artificer, you have 1 additional point in magic and 1 additional point in Wisdom. You have an additional 4 Stat Points to place however you like. You are trained in Arcane Knowledge, Craft, and Arcane Craft. Choose one additional skill from the following: Perception, Lore, Heal, Persuasion, Light Armor, Medium Armor. You can weild Light and Medium weapons without penalty.")

Type.create(name: "Emissary", text: "You're not just good with words, you are trained in them. You read a face in a moment and know exactly what to say to leverage what you see. As an Emissary you start the game with 2 additional points in Charisma. You have an additional 4 Stat Points to place however you like. You are trained in Persuasion, Perception, and Politics. Choose one additional skill from the following: Lore, Heal, Initiative, Deception, Light Armor. You can wield Light weapons without penalty.")

Race.create(name: "Human", text: "Humans are the most populous race on the planet, and have spread themselves out across the globe, integrating themselves into many cultures. As a Human, you start the game with 1 additional Stat Point to place in any Stat of your choosing and with 1 extra Skill of your choosing other than Weapon Proficiencies and Armor Proficiencies.")

Race.create(name: "Goblin", text: "For many years a missunderstanding between cultures kept Goblins on the outskirts of society. Diplomacy between the Goblins and the Halflings eventually allowed Goblins to integrate into other societies. Goblins are slightly larger than halflings and very strong for their size. While they are not evil as most races once thought, Goblins tend to be very shrewd and are highly intelligent. As a Goblin, you gain 2 points in Wisdom to start the game.")

Race.create(name: "Halfling", text: "Halflings have all of the appearances of a human, but are about the size of a 7 year old human child. Halfings tend to be very outgoing and have integrated into many societies well. While their size hinders their strength, their small fingers are very nimble. As a Halfling you start the game with -1 Strength, 2 additional points in Dexterity, and 1 additional point in Charisma.")

Race.create(name: "Trollkin", text: "Trollkin are the only known remaining descendants of the original race of Trolls. Standing between 6'-7' tall on average with green tinted skin, Trollkin share several physical characteristics with their Troll ancestors, however their personalities are as varied as any other race. As a Trollkin, you start the game with 2 additional points in Strength.")

Race.create(name: "Dark Elf", text: "Not much is known about the history of Dark Elves, even amongst themselves. Due to their war with the Light Elves, much of their previous history and culture was lost. Even the history of the war has been mostly lost. While no one has seen a Light Elf for over 1000 years, the distinction is still made amongst the races. Dark Elves appearance range in color from pitch black skin to a dusky blue-grey. As a Dark Elf, you start the game with 1 additional point in Dexterity and 1 additional point in Wisdom.")

Race.create(name: "Feytouched", text: "The descendants of Humans and Fey, Feytouched still hold a spark of the old magic. While Feytouched appear mostly human, they almost always have some unique mark of their Fey ancestry. Sometimes this mark is as discrete as unnatural colored eyes, or as ornate as large antlers, horns, or a prehensile tail. Feytouched start the game with 2 additional point in Magic.")


Blessing.create(name: "Blessing of Shadows", text: "Shadows are not something to be feared, they are yours to controll. You have the ability to move and bend shadows to your will. Not only that, but you can make them take physical form, and use them as armor for defense, or even shape them into weapons.", curse_name: "Aura of Cold", curse_text: "The temperature around you is several degrees cooler than the rest of the area. In warm climates, this is not necessarily a problem, as standning near you can cool others off. Your skin is also noticeably cooler than others however and tends to cause an adverse reaction to anyone who touches you.")

BlessingLevel.create(name: "Shadow Armor", blessing_id: 1, level: 1, text: "You call nearby shadows to surround you, providing a + 2 to your armor for the next 10 minutes. Cost: 1 Magic point")

BlessingLevel.create(name: "Shadow Blade", blessing_id: 1, level: 1, text: "You call nearby shadow to your hand, shaping it into a blade of your choosing for the next 10 minutes. The blade counts as a light weapon, even if its shape would be considered otherwise. The shadow blade does 1d6 + 5 damage. Cost: 1 Magic point")

BlessingLevel.create(name: "Sample Name", blessing_id: 1, level: 2, text: "Sample Text for Ability description.")

BlessingLevel.create(name: "Sample Name 2", blessing_id: 1, level: 2, text: "Sample Text for Ability description 2.")

BlessingLevel.create(name: "Sample Name", blessing_id: 1, level: 3, text: "Sample Text for Ability description.")

BlessingLevel.create(name: "Sample Name 2", blessing_id: 1, level: 3, text: "Sample Text for Ability description 2.")

BlessingLevel.create(name: "Sample Name", blessing_id: 1, level: 4, text: "Sample Text for Ability description.")

BlessingLevel.create(name: "Sample Name 2", blessing_id: 1, level: 4, text: "Sample Text for Ability description 2.")

BlessingLevel.create(name: "Sample Name", blessing_id: 1, level: 5, text: "Sample Text for Ability description.")

BlessingLevel.create(name: "Sample Name 2", blessing_id: 1, level: 5, text: "Sample Text for Ability description 2.")

BlessingLevel.create(name: "Sample Name", blessing_id: 1, level: 6, text: "Sample Text for Ability description.")

BlessingLevel.create(name: "Sample Name 2", blessing_id: 1, level: 6, text: "Sample Text for Ability description 2.")

BlessingLevel.create(name: "Sample Name", blessing_id: 1, level: 7, text: "Sample Text for Ability description.")

BlessingLevel.create(name: "Sample Name 2", blessing_id: 1, level: 7, text: "Sample Text for Ability description 2.")

BlessingLevel.create(name: "Sample Name", blessing_id: 1, level: 8, text: "Sample Text for Ability description.")

BlessingLevel.create(name: "Sample Name 2", blessing_id: 1, level: 8, text: "Sample Text for Ability description 2.")

BlessingLevel.create(name: "Sample Name", blessing_id: 1, level: 9, text: "Sample Text for Ability description.")

BlessingLevel.create(name: "Sample Name 2", blessing_id: 1, level: 9, text: "Sample Text for Ability description 2.")

CurseLevel.create(name: "Cold Snap", level: 1, blessing_id: 1, text: "Whenever you use at least 1 point of Magic, every creature adjacent to you, including yourself, takes 1 point of damage from a sudden drop in temperature. This effect lasts 1 round.")

CurseLevel.create(name: "Expanded Aura", level: 2, blessing_id: 1, text: "Whenever you use at least 1 point of Magic, your auro of cold extends to a 10' radius around you, lasting until the spell ends. This effect extends the radius for the Biting Cold effect as well.")

CurseLevel.create(name: "Biting Cold", level: 3, blessing_id: 1, text: "Whenever you use at least 1 point of Magic, you take 1 additional point of damage. Additionally, all creatures within your Aura (including you) take damage equal to the amount of Magic points used.")

CurseLevel.create(name: "Sample Name", level: 4, blessing_id: 1, text: "Sample Curse Description.")

CurseLevel.create(name: "Sample Name", level: 5, blessing_id: 1, text: "Sample Curse Description.")

CurseLevel.create(name: "Sample Name", level: 6, blessing_id: 1, text: "Sample Curse Description.")

CurseLevel.create(name: "Sample Name", level: 7, blessing_id: 1, text: "Sample Curse Description.")

CurseLevel.create(name: "Sample Name", level: 8, blessing_id: 1, text: "Sample Curse Description.")

CurseLevel.create(name: "Sample Name", level: 9, blessing_id: 1, text: "Sample Curse Description.")

Blessing.create(name: "Blessing of the Mind", text: "Telekinesis, Telepathy, you're not sure what to call it, you just know you can do things with your mind others must use their hands to do. You have the ability to move small objects with your mind. This ability cannot be used to make attacks and cannot lift anything that you cannot easily carry with one hand.", curse_name: "Aura of Stillness", curse_text: "The air around you always seems heavy. Anyone moving feels labored. This effect is not enough to hunder normal tasks." )

CurseLevel.create(name: "Viscous Air", level: 1, blessing_id: 2, text: "Whenever you use at least 1 point from your Magic pool, every creature adjacent to you, including yourself, is slowed for 1 round. While slowed, you can only move or take an action, but not both.")

CurseLevel.create(name: "Sample Name", level: 2, blessing_id: 2, text: "Sample Curse Description.")

CurseLevel.create(name: "Sample Name ", level: 2, blessing_id: 2, text: "Sample Curse Description.")

CurseLevel.create(name: "Sample Name", level: 3, blessing_id: 2, text: "Sample Curse Description.")

CurseLevel.create(name: "Sample Name", level: 4, blessing_id: 2, text: "Sample Curse Description.")

CurseLevel.create(name: "Sample Name", level: 5, blessing_id: 2, text: "Sample Curse Description.")

CurseLevel.create(name: "Sample Name ", level: 6, blessing_id: 2, text: "Sample Curse Description.")

CurseLevel.create(name: "Sample Name", level: 7, blessing_id: 2, text: "Sample Curse Description.")

CurseLevel.create(name: "Sample Name", level: 8, blessing_id: 2, text: "Sample Curse Description.")

CurseLevel.create(name: "Sample Name", level: 9, blessing_id: 2, text: "Sample Curse Description.")

TypeLevel.create(name: "First Strike", type_id: 3, level: 1, text: "Whenever you attack a foe who has not yet acted in combat, add 3 to your normal weapon damage. Cost: 1 Dexterity Point.")

TypeLevel.create(name: "Feint", type_id: 3, level: 1, text: "You make a feint attack, lowering your target's defense. You gain a + 5 attack bonus, but subtract 2 from your damage dealt. Cost: 1 Dexterity Point.")

TypeLevel.create(name: "Evasive", type_id: 3, level: 1, text: "When an area effect would do damage to you, you may reduce that damage by 2 points. Cost: 1 Dexterity Point.")

TypeLevel.create(name: "Trick Attack", type_id: 3, level: 1, text: "You make an attack with a - 1 penalty. On a successful hit, you can move your taget to any spot adjacent to you, or switch places with your foe. Provides + 2 bonus to your defense against that foe for 1 round. Cost: 1 Dexterity Point.")

TypeLevel.create(name: "Uncanny Awareness", type_id: 3, level: 2, text: "You gain a + 3 bonus to defense rolls for the next 10 minutes. Cost: 2 Dexterity Points.")

TypeLevel.create(name: "Study Foe", type_id: 3, level: 2, text: "As an immediate action, you study your foe before attacking gaining either a + 2 bonus to your attack roll, or a + 2 bonus to damage. Cost: 1 Wisdom point.")

TypeLevel.create(name: "Sample Ability 3", type_id: 3, level: 2, text: "You do some sample ability stuff that would be here. Cost: 2 Dexterity Points.")

TypeLevel.create(name: "Sample Ability 4", type_id: 3, level: 2, text: "You do some sampele ability stuff that would be here. Cost: 1 Wisdom point.")

TypeLevel.create(name: "Swift Attack", type_id: 3, level: 3, text: "On a successful melee or ranged attack with a light weapon, you may immediately make a second attack with that weapon. If the attack is ranged thrown, you must be weilding a second light weapon in your off hand. Cost: 2 Dexterity Points.")

TypeLevel.create(name: "Precise Cut", type_id: 3, level: 3, text: "You place a precise attack with your light bladed or light or medium ranged attack, causing 3 bleed damage on your foe's turn for 1D6 rounds. Cost: 2 Dexterity points.")

TypeLevel.create(name: "Sample Ability 3", type_id: 3, level: 3, text: "You do some sample ability stuff that would be here. Cost: 2 Dexterity Points.")

TypeLevel.create(name: "Sample Ability 4", type_id: 3, level: 3, text: "You do some sample ability stuff that would be here. Cost: 2 Dexterity points.")

TypeLevel.create(name: "Dual Light Wield", type_id: 3, level: 4, text: "You can weild 2 light melee weapons at once, dealing 1D6 + 2 extra damage on a successful attack. Requires Dexterity of 10 or higher.")

TypeLevel.create(name: "Precise Shot", type_id: 3, level: 4, text: "You target a specific area of your foe with a ranged attack. On a successful attack the target take an additional 2d6 damage. You can forgo the extra damage to instead choose from one of the following effects: Your strike causes your foe to drop their weapon. Your strike causes your foe to fall prone. Your strike lodges in a major joint and slows your opponent for 1 D6 rounds. Cost: 4 Dexterity points.")

TypeLevel.create(name: "Sample Name", type_id: 3, level: 5, text: "Sample Text for Ability Description.")

TypeLevel.create(name: "Sample Name 2", type_id: 3, level: 5, text: "Sample Text for Ability Description 2.")

TypeLevel.create(name: "Sample Name 3", type_id: 3, level: 5, text: "Sample Text for Ability Description.")

TypeLevel.create(name: "Sample Name 4", type_id: 3, level: 5, text: "Sample Text for Ability Description.")

TypeLevel.create(name: "Sample Name 2", type_id: 3, level: 6, text: "Sample Text for Ability Description 2.")

TypeLevel.create(name: "Sample Name", type_id: 3, level: 6, text: "Sample Text for Ability Description.")

TypeLevel.create(name: "Sample Name 3", type_id: 3, level: 6, text: "Sample Text for Ability Description 2.")

TypeLevel.create(name: "Sample Name 4", type_id: 3, level: 6, text: "Sample Text for Ability Description.")

TypeLevel.create(name: "Sample Name 2", type_id: 3, level: 7, text: "Sample Text for Ability Description 2.")

TypeLevel.create(name: "Sample Name", type_id: 3, level: 7, text: "Sample Text for Ability Description.")

TypeLevel.create(name: "Sample Name 3", type_id: 3, level: 7, text: "Sample Text for Ability Description 2.")

TypeLevel.create(name: "Sample Name 4", type_id: 3, level: 7, text: "Sample Text for Ability Description.")

TypeLevel.create(name: "Sample Name 2", type_id: 3, level: 8, text: "Sample Text for Ability Description 2.")

TypeLevel.create(name: "Sample Name", type_id: 3, level: 8, text: "Sample Text for Ability Description.")

TypeLevel.create(name: "Sample Name 3", type_id: 3, level: 8, text: "Sample Text for Ability Description 2.")

TypeLevel.create(name: "Sample Name 4", type_id: 3, level: 8, text: "Sample Text for Ability Description.")

TypeLevel.create(name: "Sample Name 2", type_id: 3, level: 9, text: "Sample Text for Ability Description 2.")

TypeLevel.create(name: "Sample Name", type_id: 3, level: 9, text: "Sample Text for Ability Description.")

TypeLevel.create(name: "Sample Name 4", type_id: 3, level: 9, text: "Sample Text for Ability Description 2.")

TypeLevel.create(name: "Sample Name 3", type_id: 3, level: 9, text: "Sample Text for Ability Description.")


TypeLevel.create(name: "Sample Name", type_id: 1, level: 1, text: "Sample Ability Description Text.")

TypeLevel.create(name: "Sample Name 2", type_id: 1, level: 1, text: "Sample Ability Text.")

TypeLevel.create(name: "Sample Name 3", type_id: 1, level: 1, text: "Sample Text.")

TypeLevel.create(name: "Sample Name", type_id: 1, level: 2, text: "Sample Ability Text.")

TypeLevel.create(name: "Sample Name 2", type_id: 1, level: 2, text: "Sample Text.")

TypeLevel.create(name: "Sample Name", type_id: 1, level: 3, text: "Sample Text for Ability Description.")

TypeLevel.create(name: "Sample Name 2", type_id: 1, level: 3, text: "Sample text.")

TypeLevel.create(name: "Sample Name", type_id: 1, level: 4, text: "Sample Text for Ability Description.")

TypeLevel.create(name: "Sample Name 2", type_id: 1, level: 4, text: "Sample Text for Ability Description 2.")

TypeLevel.create(name: "Sample Name", type_id: 1, level: 5, text: "Sample Text for Ability Description.")

TypeLevel.create(name: "Sample Name 2", type_id: 1, level: 5, text: "Sample Text for Ability Description 2.")

TypeLevel.create(name: "Sample Name", type_id: 1, level: 5, text: "Sample Text for Ability Description.")

TypeLevel.create(name: "Sample Name 2", type_id: 1, level: 6, text: "Sample Text for Ability Description 2.")

TypeLevel.create(name: "Sample Name", type_id: 1, level: 6, text: "Sample Text for Ability Description.")

TypeLevel.create(name: "Sample Name 2", type_id: 1, level: 7, text: "Sample Text for Ability Description 2.")

TypeLevel.create(name: "Sample Name", type_id: 1, level: 7, text: "Sample Text for Ability Description.")

TypeLevel.create(name: "Sample Name 2", type_id: 1, level: 8, text: "Sample Text for Ability Description 2.")

TypeLevel.create(name: "Sample Name", type_id: 1, level: 8, text: "Sample Text for Ability Description.")

TypeLevel.create(name: "Sample Name 2", type_id: 1, level: 9, text: "Sample Text for Ability Description 2.")

TypeLevel.create(name: "Sample Name", type_id: 1, level: 9, text: "Sample Text for Ability Description.")

StartingStat.create(type_id: 1, race_id: 1, strength: 5, dexterity: 5, charisma: 5, wisdom: 5, magic: 2, remaining_stat_points: 7, skill_slots: 4)

StartingStat.create(type_id: 1, race_id: 2, strength: 5, dexterity: 5, charisma: 5, wisdom: 7, magic: 2, remaining_stat_points: 6, skill_slots: 3)

StartingStat.create(type_id: 1, race_id: 3, strength: 5, dexterity: 7, charisma: 6, wisdom: 5, magic: 2, remaining_stat_points: 6, skill_slots: 3 )

StartingStat.create(type_id: 1, race_id: 4, strength: 7, dexterity: 5, charisma: 5, wisdom: 5, magic: 2, remaining_stat_points: 6, skill_slots: 3 )

StartingStat.create(type_id: 1, race_id: 5, strength: 5, dexterity: 6, charisma: 5, wisdom: 6, magic: 2, remaining_stat_points: 6, skill_slots: 3  )

StartingStat.create(type_id: 1, race_id: 6, strength: 5, dexterity: 5, charisma: 5, wisdom: 5, magic: 4, remaining_stat_points: 6, skill_slots: 3  )

StartingStat.create(type_id: 2, race_id: 1, strength: 5, dexterity: 5, charisma: 5, wisdom: 5, magic: 4, remaining_stat_points: 5, skill_slots: 4  )

StartingStat.create(type_id: 2, race_id: 2, strength: 5, dexterity: 5, charisma: 5, wisdom: 7, magic: 4, remaining_stat_points: 4, skill_slots: 3  )

StartingStat.create(type_id: 2, race_id: 3, strength: 4, dexterity: 2, charisma: 6, wisdom: 5, magic: 4, remaining_stat_points: 4, skill_slots: 3  )

StartingStat.create(type_id: 2, race_id: 4, strength: 7, dexterity: 5, charisma: 5, wisdom: 5, magic: 4, remaining_stat_points: 4, skill_slots: 3  )

StartingStat.create(type_id: 2, race_id: 5, strength: 5, dexterity: 1, charisma: 5, wisdom: 1, magic: 4, remaining_stat_points: 4, skill_slots: 3  )

StartingStat.create(type_id: 2, race_id: 6, strength: 5, dexterity: 5, charisma: 5, wisdom: 5, magic: 6, remaining_stat_points: 4, skill_slots: 3  )

StartingStat.create(type_id: 3, race_id: 1, strength: 5, dexterity: 7, charisma: 5, wisdom: 5, magic: 2, remaining_stat_points: 5, skill_slots: 6 )

StartingStat.create(type_id: 3, race_id: 2, strength: 5, dexterity: 7, charisma: 5, wisdom: 7, magic: 2, remaining_stat_points: 4, skill_slots: 5 )

StartingStat.create(type_id: 3, race_id: 3, strength: 4, dexterity: 9, charisma: 6, wisdom: 5, magic: 2, remaining_stat_points: 4, skill_slots: 5 )

StartingStat.create(type_id: 3, race_id: 4, strength: 7, dexterity: 7, charisma: 5, wisdom: 5, magic: 2, remaining_stat_points: 4, skill_slots: 5 )

StartingStat.create(type_id: 3, race_id: 5, strength: 5, dexterity: 8, charisma: 5, wisdom: 6, magic: 2, remaining_stat_points: 4, skill_slots: 5 )

StartingStat.create(type_id: 3, race_id: 6, strength: 5, dexterity: 7, charisma: 5, wisdom: 5, magic: 4, remaining_stat_points: 4, skill_slots: 5 )

StartingStat.create(type_id: 4, race_id: 1, strength: 5, dexterity: 5, charisma: 5, wisdom: 6, magic: 3, remaining_stat_points: 5, skill_slots: 5 )

StartingStat.create(type_id: 4, race_id: 2, strength: 5, dexterity: 5, charisma: 5, wisdom: 8, magic: 3, remaining_stat_points: 4, skill_slots: 4 )

StartingStat.create(type_id: 4, race_id: 3, strength: 4, dexterity: 7, charisma: 6, wisdom: 6, magic: 3, remaining_stat_points: 4, skill_slots: 4 )

StartingStat.create(type_id: 4, race_id: 4, strength: 7, dexterity: 5, charisma: 5, wisdom: 6, magic: 3, remaining_stat_points: 4, skill_slots: 4 )

StartingStat.create(type_id: 4, race_id: 5, strength: 5, dexterity: 6, charisma: 5, wisdom: 7, magic: 3, remaining_stat_points: 4, skill_slots: 4 )

StartingStat.create(type_id: 4, race_id: 6, strength: 5, dexterity: 5, charisma: 5, wisdom: 6, magic: 5, remaining_stat_points: 4, skill_slots: 4 )

StartingStat.create(type_id: 5, race_id: 1, strength: 5, dexterity: 5, charisma: 7, wisdom: 5, magic: 2, remaining_stat_points: 5, skill_slots: 5 )

StartingStat.create(type_id: 5, race_id: 2, strength: 5, dexterity: 5, charisma: 7, wisdom: 7, magic: 2, remaining_stat_points: 4, skill_slots: 4 )

StartingStat.create(type_id: 5, race_id: 3, strength: 4, dexterity: 7, charisma: 6, wisdom: 5, magic: 2, remaining_stat_points: 4, skill_slots: 4 )

StartingStat.create(type_id: 5, race_id: 4, strength: 7, dexterity: 5, charisma: 7, wisdom: 5, magic: 2, remaining_stat_points: 4, skill_slots: 4 )

StartingStat.create(type_id: 5, race_id: 5, strength: 5, dexterity: 6, charisma: 7, wisdom: 6, magic: 2, remaining_stat_points: 4, skill_slots: 4 )

StartingStat.create(type_id: 5, race_id: 6, strength: 5, dexterity: 5, charisma: 7, wisdom: 5, magic: 4, remaining_stat_points: 4, skill_slots: 4 )

TypeLevel.create(name: "Sample Name", type_id: 2, level: 1, text: "Sample Ability Description Text.")

TypeLevel.create(name: "Sample Name 2", type_id: 2, level: 1, text: "Sample Ability Text.")

TypeLevel.create(name: "Sample Name 3", type_id: 2, level: 1, text: "Sample Text.")

TypeLevel.create(name: "Sample Name", type_id: 2, level: 2, text: "Sample Ability Text.")

TypeLevel.create(name: "Sample Name 2", type_id: 2, level: 2, text: "Sample Text.")

TypeLevel.create(name: "Sample Name", type_id: 2, level: 3, text: "Sample Text for Ability Description.")

TypeLevel.create(name: "Sample Name 2", type_id: 2, level: 3, text: "Sample text.")

TypeLevel.create(name: "Sample Name", type_id: 2, level: 4, text: "Sample Text for Ability Description.")

TypeLevel.create(name: "Sample Name 2", type_id: 2, level: 4, text: "Sample Text for Ability Description 2.")

TypeLevel.create(name: "Sample Name", type_id: 2, level: 5, text: "Sample Text for Ability Description.")

TypeLevel.create(name: "Sample Name 2", type_id: 2, level: 5, text: "Sample Text for Ability Description 2.")

TypeLevel.create(name: "Sample Name", type_id: 2, level: 5, text: "Sample Text for Ability Description.")

TypeLevel.create(name: "Sample Name 2", type_id: 2, level: 6, text: "Sample Text for Ability Description 2.")

TypeLevel.create(name: "Sample Name", type_id: 2, level: 6, text: "Sample Text for Ability Description.")

TypeLevel.create(name: "Sample Name 2", type_id: 2, level: 7, text: "Sample Text for Ability Description 2.")

TypeLevel.create(name: "Sample Name", type_id: 2, level: 7, text: "Sample Text for Ability Description.")

TypeLevel.create(name: "Sample Name 2", type_id: 2, level: 8, text: "Sample Text for Ability Description 2.")

TypeLevel.create(name: "Sample Name", type_id: 2, level: 8, text: "Sample Text for Ability Description.")

TypeLevel.create(name: "Sample Name 2", type_id: 2, level: 9, text: "Sample Text for Ability Description 2.")

TypeLevel.create(name: "Sample Name", type_id: 2, level: 9, text: "Sample Text for Ability Description.")

Armor.create(name: "Silk Armor", style: "Light", defense: 1, text: "Silk is heavily woven into this armor, adding minimal weight to basic clothes.", cost: 3)

Armor.create(name: "Chainmail shirt", style: "Medium", defense: 2, text: "Chainmail shirts are worn between an undershirt and basic clothes, adding weight to slow you down. Armor penalty of 1.", cost: 5)

Armor.create(name: "Dragon Scale Armor", style: "Heavy", defense: 3, text: "This armor is made of interlocking dragon scales. It provides great protection, however will significantly slow you down. Armor penalty of 2", cost: 15)

TypeLevel.create(name: "Sample Name", type_id: 4, level: 1, text: "Sample Ability Description Text.")

TypeLevel.create(name: "Sample Name 2", type_id: 4, level: 1, text: "Sample Ability Text.")

TypeLevel.create(name: "Sample Name 3", type_id: 4, level: 1, text: "Sample Text.")

TypeLevel.create(name: "Sample Name", type_id: 4, level: 2, text: "Sample Ability Text.")

TypeLevel.create(name: "Sample Name 2", type_id: 4, level: 2, text: "Sample Text.")

TypeLevel.create(name: "Sample Name", type_id: 4, level: 3, text: "Sample Text for Ability Description.")

TypeLevel.create(name: "Sample Name 2", type_id: 4, level: 3, text: "Sample text.")

TypeLevel.create(name: "Sample Name", type_id: 4, level: 4, text: "Sample Text for Ability Description.")

TypeLevel.create(name: "Sample Name 2", type_id: 4, level: 4, text: "Sample Text for Ability Description 2.")

TypeLevel.create(name: "Sample Name", type_id: 4, level: 5, text: "Sample Text for Ability Description.")

TypeLevel.create(name: "Sample Name 2", type_id: 4, level: 5, text: "Sample Text for Ability Description 2.")

TypeLevel.create(name: "Sample Name", type_id: 4, level: 5, text: "Sample Text for Ability Description.")

TypeLevel.create(name: "Sample Name 2", type_id: 4, level: 6, text: "Sample Text for Ability Description 2.")

TypeLevel.create(name: "Sample Name", type_id: 4, level: 6, text: "Sample Text for Ability Description.")

TypeLevel.create(name: "Sample Name 2", type_id: 4, level: 7, text: "Sample Text for Ability Description 2.")

TypeLevel.create(name: "Sample Name", type_id: 4, level: 7, text: "Sample Text for Ability Description.")

TypeLevel.create(name: "Sample Name 2", type_id: 4, level: 8, text: "Sample Text for Ability Description 2.")

TypeLevel.create(name: "Sample Name", type_id: 4, level: 8, text: "Sample Text for Ability Description.")

TypeLevel.create(name: "Sample Name 2", type_id: 4, level: 9, text: "Sample Text for Ability Description 2.")

TypeLevel.create(name: "Sample Name", type_id: 4, level: 9, text: "Sample Text for Ability Description.")

Equipment.create(name: "Explorer's pack", text: "Contains a cloak, boots, a bed roll, 50' of rope, hammer and spikes, 4 minor glow stones, and rations for 3 days.", cost: 20)

Equipment.create(name: "Grappling hook", text: "Basic grappling with 4 extendable hooks. Does not come with rope. Provides +5 to climb checks. (GM determines if hook has sufficient ledge to grab)", cost: 3)

Equipment.create(name: "First Aid Kit", text: "Contains bandages, thread and needles and healing salves. Provides + 5 to heal checks.", cost: 10)

Weapon.create(name: "Blowgun", style: "Light", damage: 2, text: "Comes with 12 darts. Short Range.", cost: 4)

Weapon.create(name: "Flintlock Pistol", style: "Light", damage: 4, text: "Flintlock Pistols fire a single round bullet that are not always accurate even at short range. Flintlock Pistols ignore non-magical armor, however suffer -1 to attacks. Comes with 12 bullets. Short Range. Action to reload.", cost: 12)

Weapon.create(name: "Blunderbuss", style: "Medium", damage: 4, text: "Fires shot in a cone spread at short range. Shot bypasses non-magical armor. Short range. Action to reload.", cost: 20)

Weapon.create(name: "Dagger", style: "Light", damage: 2, text: "Can be thrown at short range.", cost: 1)

Weapon.create(name: "Arm Blade", style: "Light", damage: 2, text: "Retractable blade that attaches to your forearm.", cost: 4)

Weapon.create(name: "Knife", style: "Light", damage: 2, text: "Can be thrown at short range.", cost: 1)

Weapon.create(name: "Rapier", style: "Light", damage: 2, text: "Thin sword that uses speed more than strength.", cost: 1)

Weapon.create(name: "Whip", style: "Light", damage: 2, text: "Can reach up to short range.", cost: 3)

Weapon.create(name: "Unarmed", style: "Light", damage: 1, text: "Punches, kicks, throws, etc.", cost: 0)

Weapon.create(name: "Boomerang", style: "Light", damage: 2, text: "Usually made of a light sturdy wood, rarer boomerangs are made of light metal and infused with magic to strengthen. Can be thrown short range. Returns to the wielder when missing the target.", cost: 3)

Weapon.create(name: "Iron Fan", style: "Light", damage: 4, text: "Foldable metal fan with sharpened edges. Originated from a dancing form of martial arts.", cost: 3)

Weapon.create(name: "Tanto", style: "Light", damage: 2, text: "Curved blade the size of a large dagger. Small companion to the Katana and Wakizashi.", cost: 3)

Weapon.create(name: "Bow", style: "Medium", damage: 4, text: "Long Range. Comes with 12 arrows.", cost: 8)

Weapon.create(name: "Broadsword", style: "Medium", damage: 4, text: "Short sword with double edged blade. ", cost: 3)

Weapon.create(name: "Wakizashi", style: "Medium", damage: 4, text: "Short sword with curved blade. Smaller companion to Katana.", cost: 5)

Weapon.create(name: "Spear", style: "Medium", damage: 4, text: "Two handed. Can be thrown up to long range.", cost: 3)

Weapon.create(name: "Javelin", style: "Medium", damage: 4, text: "Can be thrown up to long range. Hindered for use in melee", cost: 3)

Weapon.create(name: "Machete", style: "Medium", damage: 4, text: "It's a machete, what do you want from me?", cost: 3)

Weapon.create(name: "Katana", style: "Heavy", damage: 6, text: "Two handed curved long sword.", cost: 7)

Weapon.create(name: "Greatsword", style: "Heavy", damage: 6, text: "Requires two hands to wield.", cost: 5)

Weapon.create(name: "Morning Star", style: "Heavy", damage: 6, text: "Large club or mace with varied spikes on the end. Requires two hands to wield.", cost: 5)

Weapon.create(name: "Glaive", style: "Heavy", damage: 6, text: "Long pole with large blade attached to one end. Requires two hands to wield.", cost: 5)

Weapon.create(name: "Heavy Crossbow", style: "Heavy", damage: 6, text: "Long ranged. Action to reload. Comes with 12 bolts.", cost: 8)

TypeLevel.create(name: "Sample Name", type_id: 5, level: 1, text: "Sample Ability Description Text.")

TypeLevel.create(name: "Sample Name 2", type_id: 5, level: 1, text: "Sample Ability Text.")

TypeLevel.create(name: "Sample Name 3", type_id: 5, level: 1, text: "Sample Text.")

TypeLevel.create(name: "Sample Name", type_id: 5, level: 2, text: "Sample Ability Text.")

TypeLevel.create(name: "Sample Name 2", type_id: 5, level: 2, text: "Sample Text.")

TypeLevel.create(name: "Sample Name", type_id: 5, level: 3, text: "Sample Text for Ability Description.")

TypeLevel.create(name: "Sample Name 2", type_id: 5, level: 3, text: "Sample text.")

TypeLevel.create(name: "Sample Name", type_id: 5, level: 4, text: "Sample Text for Ability Description.")

TypeLevel.create(name: "Sample Name 2", type_id: 5, level: 4, text: "Sample Text for Ability Description 2.")

TypeLevel.create(name: "Sample Name", type_id: 5, level: 5, text: "Sample Text for Ability Description.")

TypeLevel.create(name: "Sample Name 2", type_id: 5, level: 5, text: "Sample Text for Ability Description 2.")

TypeLevel.create(name: "Sample Name", type_id: 5, level: 5, text: "Sample Text for Ability Description.")

TypeLevel.create(name: "Sample Name 2", type_id: 5, level: 6, text: "Sample Text for Ability Description 2.")

TypeLevel.create(name: "Sample Name", type_id: 5, level: 6, text: "Sample Text for Ability Description.")

TypeLevel.create(name: "Sample Name 2", type_id: 5, level: 7, text: "Sample Text for Ability Description 2.")

TypeLevel.create(name: "Sample Name", type_id: 5, level: 7, text: "Sample Text for Ability Description.")

TypeLevel.create(name: "Sample Name 2", type_id: 5, level: 8, text: "Sample Text for Ability Description 2.")

TypeLevel.create(name: "Sample Name", type_id: 5, level: 8, text: "Sample Text for Ability Description.")

TypeLevel.create(name: "Sample Name 2", type_id: 5, level: 9, text: "Sample Text for Ability Description 2.")

TypeLevel.create(name: "Sample Name", type_id: 5, level: 9, text: "Sample Text for Ability Description.")

Skill.create(name: "Perception", text: "You are always alert and always studying. Provides + 5 on tasks involving noticing small details, whether through visual, auditory, or other means.")

Skill.create(name: "Light Blades", text: "Provides + 2 when attacking with light bladed weapons.")

Skill.create(name: "Medium Blades", text: "Provides + 2 when attacking with medium bladed weapons.")

Skill.create(name: "Heavy Blades", text: "Provides + 2 when attacking with heavy bladed weapons.")

Skill.create(name: "Light Bludgeon", text: "Provides + 2 when attacking with light Bludgeon weapons such as unarmed attacks.")

Skill.create(name: "Medium Bludgeon", text: "Provides + 2 when attacking with medium Bludgeon weapons such as a club.")

Skill.create(name: "Heavy Bludgeon", text: "Provides + 2 when attacking with heavy Bludgeon weapons such as a maul.")

Skill.create(name: "Light Ranged", text: "Provides + 2 when attacking with light ranged weapons such as a blowgun.")

Skill.create(name: "Medium Ranged", text: "Provides + 2 when attacking with medium ranged weapons such as a bow.")

Skill.create(name: "Heavy Ranged", text: "Provides + 2 when attacking with heavy ranged weapons such as a heavy crossbow.")

Skill.create(name: "Arcane Knowledge", text: "You are trained in knowledge of the arcane. Provides + 5 to any task involving working with or identifying the arcane.")

Skill.create(name: "Stealth", text: "Provides + 5  to tasks involving hiding or sneaking.")

Skill.create(name: "Arcane Craft", text: "You are trained in crafting arcane devices. Provides + 5 to tasks involving creating arcane charms and artifacts.")

Skill.create(name: "Armor", text: "Reduces the dexterity penalty for wearing armor by 1.")

Skill.create(name: "Heal", text: "Provides + 5 to tasks involving healing or medicine. Heal checks provide 1 HP per character level and can stop non-magical ongoing effects such as bleed damage.")

Skill.create(name: "Climb", text: "Provides + 5 to all climb checks.")

Skill.create(name: "Deception", text: "You are trained in all forms of deception. Provides a +5 bonus on tasks attempting to deceive another character or NPC.")

Skill.create(name: "Craft", text: "Choose a specific type of mundane item, such as tailoring, metalwork, or woodworking. You gain a + 5 bonus to checks involving crafting items of that type.")

Skill.create(name: "Swimming", text: "Provides + 5  for swimming tasks.")

Skill.create(name: "Riding", text: "You are trained in riding a mount. Provides + 5 to riding checks including mounted combat.")

Skill.create(name: "Lore", text: "You are trained in ancient history. Provides + 5 to intellect tasks involving lore and history.")

Skill.create(name: "Initiative", text: "Through training, you are always alert and ready for battle. Provides + 5 to intiative rolls for combat.")

Skill.create(name: "Locksmith", text: "You are trained in the use of lockpicks for all lock types. Provides + 5 to all tasks involving opening locks.")

Skill.create(name: "Nature Survival", text: "You are trained in nature and survival. Provides + 5 to tasks involving finding food, water, shelter when in nature.")

Skill.create(name: "Persuasion", text: "You know how to talk to people and get your way. Provides + 5 to all tasks involving persuading another character or NPC.")

Skill.create(name: "Balance", text: "Provides + 5 to all tasks involving balance and careful steps.")

Skill.create(name: "Politics", text: "Provides + 5 to all tasks involving political knowledge and interactions.")

BlessingLevel.create(name: "Warding Mind", blessing_id: 2, level: 1, text: "You bend attacks away from you. Provides a + 3 to defense for the next 10 minutes. Cost: 1 Magic point")

BlessingLevel.create(name: "Sample Name", blessing_id: 2, level: 1, text: "Sample text.")

BlessingLevel.create(name: "Sample Name", blessing_id: 2, level: 2, text: "Sample text.")

BlessingLevel.create(name: "Sample Name 2", blessing_id: 2, level: 2, text: "Sample text 2.")

BlessingLevel.create(name: "Sample Name", blessing_id: 2, level: 3, text: "Sample text.")

BlessingLevel.create(name: "Sample Name 2", blessing_id: 2, level: 3, text: "Sample text 2.")

BlessingLevel.create(name: "Sample Name", blessing_id: 2, level: 4, text: "Sample text.")

BlessingLevel.create(name: "Sample Name 2", blessing_id: 2, level: 4, text: "Sample text 2.")

BlessingLevel.create(name: "Sample Name", blessing_id: 2, level: 5, text: "Sample text.")

BlessingLevel.create(name: "Sample Name 2", blessing_id: 2, level: 5, text: "Sample text 2.")

BlessingLevel.create(name: "Sample Name", blessing_id: 2, level: 6, text: "Sample text.")

BlessingLevel.create(name: "Sample Name 2", blessing_id: 2, level: 6, text: "Sample text 2.")

BlessingLevel.create(name: "Sample Name", blessing_id: 2, level: 7, text: "Sample text.")

BlessingLevel.create(name: "Sample Name 2", blessing_id: 2, level: 7, text: "Sample text 2.")

BlessingLevel.create(name: "Sample Name", blessing_id: 2, level: 8, text: "Sample text.")

BlessingLevel.create(name: "Sample Name 2", blessing_id: 2, level: 8, text: "Sample text 2.")

BlessingLevel.create(name: "Sample Name", blessing_id: 2, level: 9, text: "Sample text.")

BlessingLevel.create(name: "Sample Name 2", blessing_id: 2, level: 9, text: "Sample text 2.")

BlessingLevel.create(name: "Shadow Armor", blessing_id: 1, level: 1, text: "You call nearby shadows to surround you, providing a + 1 to your armor for the next 10 minutes. Magical Armor. Cost: 1 Magic point")

BlessingLevel.create(name: "Shadow Blade", blessing_id: 1, level: 1, text: "You call a nearby shadow to your hand, shaping it into a blade of your choosing for the next 10 minutes. The blade counts as a magical light weapon, even if its shape would be considered otherwise. The shadow blade does 1d6 + 5 damage. Cost: 1 Magic point")

BlessingLevel.create(name: "Shadow Arrows", blessing_id: 1, level: 2, text: "You call nearby shadows to your hand, shaping them into 5 arrows that persist for the next 10 minutes. The arrows do 1d6 + 5 damage. Cost: 2 Magic points")

BlessingLevel.create(name: "Concealing Shadows", blessing_id: 1, level: 2, text: "For the next 10 minutes you may step into a nearby shadow when in dim light or darkness. The shadows completely cover you, hiding your form even to creatures with night vision. Provides a + 10 bonus to stealth checks. Cost: 2 Magic points")

BlessingLevel.create(name: "Sample Name", blessing_id: 1, level: 3, text: "Sample Text for Ability description.")

BlessingLevel.create(name: "Sample Name 2", blessing_id: 1, level: 3, text: "Sample Text for Ability description 2.")

BlessingLevel.create(name: "Sample Name", blessing_id: 1, level: 4, text: "Sample Text for Ability description.")

BlessingLevel.create(name: "Sample Name 2", blessing_id: 1, level: 4, text: "Sample Text for Ability description 2.")

BlessingLevel.create(name: "Sample Name", blessing_id: 1, level: 5, text: "Sample Text for Ability description.")

BlessingLevel.create(name: "Sample Name 2", blessing_id: 1, level: 5, text: "Sample Text for Ability description 2.")

BlessingLevel.create(name: "Sample Name", blessing_id: 1, level: 6, text: "Sample Text for Ability description.")

BlessingLevel.create(name: "Sample Name 2", blessing_id: 1, level: 6, text: "Sample Text for Ability description 2.")

BlessingLevel.create(name: "Sample Name", blessing_id: 1, level: 7, text: "Sample Text for Ability description.")

BlessingLevel.create(name: "Sample Name 2", blessing_id: 1, level: 7, text: "Sample Text for Ability description 2.")

BlessingLevel.create(name: "Sample Name", blessing_id: 1, level: 8, text: "Sample Text for Ability description.")

BlessingLevel.create(name: "Sample Name 2", blessing_id: 1, level: 8, text: "Sample Text for Ability description 2.")

BlessingLevel.create(name: "Sample Name", blessing_id: 1, level: 9, text: "Sample Text for Ability description.")

BlessingLevel.create(name: "Sample Name 2", blessing_id: 1, level: 9, text: "Sample Text for Ability description 2.")


Blessing.create(name: "Blessing of the Soul", text: "Your connection with others goes beyond normal senses. You understand others on a deeper level, easily discerning emotions and motives. You have a + 1 bonus to all checks on social interactions, detecting lies, and persuasion.", curse_name: "Aura of Desiccation", curse_text: "The air around you is always dry.  Within a 5’ radius around you, all open water evaporates at twice the normal rate. This does not seem to effect your body, as you do not need more water than any other individual, however you have learned to always keep your liquids in airtight containers. ")

BlessingLevel.create(name: "Empathic Touch", blessing_id: 3, level: 1, text: "After touching a target, you sense their emotions for the next 10 minutes. If the target is unwilling, you must make an unarmed attack roll to successfully touch the target. Provides a + 10 bonus to all checks on social interactions, detecting lies, and persuasion. Cost: 1 Magic point")

BlessingLevel.create(name: "Empathic Senses", blessing_id: 3, level: 1, text: "For the next 10 minutes you can sense the basic emotions of all creatures around you within your Aura, even if they are hidden from view.  While this is active, you cannot be surprised by attacks initiated within your Aura. Provides a + 2 bonus to all checks for social interactions, detecting lies, and persuasion for all targets within the area. Cost: 1 Magic point")

BlessingLevel.create(name: "Calm Target", blessing_id: 3, level: 2, text: "After touching a target, you calm their emotions for the next 10 minutes. If the target is unwilling, you must make an unarmed attack roll to successfully touch the target. A calmed target will stop attacking, however will defend themselves if attacked. Cost: 2 Magic points")

BlessingLevel.create(name: "Empathic Drain", blessing_id: 3, level: 2, text: "You dull the emotions of all creatures within your Aura for the next 10 minutes. You gain a + 5 bonus to social interactions with anyone within your Aura. Additionally, all creatures in your Aura become less aggressive, paranoid, afraid, etc. Creatures whose emotions change in this way are more likely to provide useful information. However, creatures who were trusting and friendly also become less so and are less likely to provide useful information.Cost 2 Magic points")

BlessingLevel.create(name: "Empathic Push", blessing_id: 3, level: 3, text: "			After touching a target, you can push an emotion on to them for the next round. If the target is unwilling, you must make an unarmed attack roll to successfully touch the target. Feel free to choose from any emotion and work with your GM on how it will affect your target, however,  choosing from the following emotions provides the following effects:
Fear: The target has an uncontrollable fear and flees wildly.
Sadness: The target  falls into a deep state of depression. Anyone attacking the target has a + 5 bonus to hit during this effect.
Paranoia: The target does not trust anyone, including their allies. The target will attack adjacent allies as willingly as attacking you. For each adjacent creature next to the target, roll a die to decide who the target attacks on their turn. If the target attacks an ally, they gain a + 5 surprise bonus to the attack. 2 Magic points.")

BlessingLevel.create(name: "Sample Name 2", blessing_id: 3, level: 3, text: "Sample Text for Ability description 2.")

BlessingLevel.create(name: "Sample Name", blessing_id: 3, level: 4, text: "Sample Text for Ability description.")

BlessingLevel.create(name: "Sample Name 2", blessing_id: 3, level: 4, text: "Sample Text for Ability description 2.")

BlessingLevel.create(name: "Sample Name", blessing_id: 3, level: 5, text: "Sample Text for Ability description.")

BlessingLevel.create(name: "Sample Name 2", blessing_id: 3, level: 5, text: "Sample Text for Ability description 2.")

BlessingLevel.create(name: "Sample Name", blessing_id: 3, level: 6, text: "Sample Text for Ability description.")

BlessingLevel.create(name: "Sample Name 2", blessing_id: 3, level: 6, text: "Sample Text for Ability description 2.")

BlessingLevel.create(name: "Sample Name", blessing_id: 3, level: 7, text: "Sample Text for Ability description.")

BlessingLevel.create(name: "Sample Name 2", blessing_id: 3, level: 7, text: "Sample Text for Ability description 2.")

BlessingLevel.create(name: "Sample Name", blessing_id: 3, level: 8, text: "Sample Text for Ability description.")

BlessingLevel.create(name: "Sample Name 2", blessing_id: 3, level: 8, text: "Sample Text for Ability description 2.")

BlessingLevel.create(name: "Sample Name", blessing_id: 3, level: 9, text: "Sample Text for Ability description.")

BlessingLevel.create(name: "Sample Name 2", blessing_id: 3, level: 9, text: "Sample Text for Ability description 2.")

CurseLevel.create(name: "Dehydration", level: 1, blessing_id: 3, text: "Whenever you use at least 1 point of magic, all moisture around you suddenly dries up. Anyone within your aura, including you, takes 1 point of damage from the dehydration. Additionally, any opened liquids in range are reduced by half. ")

CurseLevel.create(name: "Expanded Aura", level: 2, blessing_id: 3, text: "Whenever you use at least 1 point of Magic, your auro of cold extends to a 10' radius around you, lasting until the spell ends. This effect extends the radius for the Dehydration effect as well.")

CurseLevel.create(name: "Sample Name", level: 3, blessing_id: 3, text: "Sample curse text here.")

CurseLevel.create(name: "Sample Name", level: 4, blessing_id: 3, text: "Sample Curse Description.")

CurseLevel.create(name: "Sample Name", level: 5, blessing_id: 3, text: "Sample Curse Description.")

CurseLevel.create(name: "Sample Name", level: 6, blessing_id: 3, text: "Sample Curse Description.")

CurseLevel.create(name: "Sample Name", level: 7, blessing_id: 3, text: "Sample Curse Description.")

CurseLevel.create(name: "Sample Name", level: 8, blessing_id: 3, text: "Sample Curse Description.")

CurseLevel.create(name: "Sample Name", level: 9, blessing_id: 3, text: "Sample Curse Description.")