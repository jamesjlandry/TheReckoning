# TheCursed

Character Builder App for tabletop role playing game "The Cursed". 

Users can create secure log in username and password. 

Users can create characters and update character build during game play. 

Users can update Character: Stats, Abilities, XP, Coin, Status, Powers, Equipment, Background, and Notes during gameplay and save to backend for the GM to see live updates. 



Ruby on Rails backend with React-Redux frontend. 

Backend:

24 tables with User at top level. User must be logged in to use app.
Sessions Controller verifies authentication through session cookie creation. 

9 Join tables: Character Charms, Character Equipment, Character Armors, Character Skills, Character Weapons, Character Artifacts, Character Type Abilities, Character Curse Abilities, Character Blessing Abilities. 

User begins character creation with Race, Type, and Blessing. Starting Stats are dependant on Race and Type and automatically applied after choice. Type Levels and Blessing levels are available after Type and Blessing are chosen. Curse levels are automatically applied upon Blessing selection. Skills are made available and remaining stat pool based on starting stats. Armors, Weapons, and Equipments are available as optional choices.

Character creation method and character update method in Controllers creates all associated join tables based on selections at the time of character creation.  

All characters and all options are sent to frontend through a single method in the Character Options controller.


Frontend:

Containers and components utilize Redux store to check for conditional rendering for each component, working like a tree to open into each component using ternary operators. 

App renders Header, CharacterIndex, or LogInMain if logged in != true. 

Header renders ProfileBox renders the username and logout option. Future update will render the User Profile on click of username. 

LoginMain conditionally renders the LogIn component or the Register component.

CharacterIndex renders CharacterBox or the default page. 

CharacterBox renders CharacterOptionsContainer or CharacterSheet 

CharacterOptionsContainer renders Tab from semantic-ui-react which conditionally renders components within the tabs. 
Components rendered are 
CharacterArmor
CharacterWeapon
CharacterEquipment
CharacterRace
CharacterType
CharacterBlessing
CharacterTypeLevel
CharacterBlessingLevel
CharacterStats
CharacterSkills
CharacterBuild

CharacterSkills renders CharacterSkillsNew & CharacterSkills level up. CharacterStats renders the same respectively. Future plans to refactor these to shared components. 

CharacterBlessing, CharacterRace, CharacterType render and share CharacterOptionModal by passing options as props to be rendered. 

CharacterArmor, CharacterEquipment, CharacterWeapons, CharacterCharms, and CharacterArtifacts render and share EquipmentOptionModal by passing options as props to be rendered. Future plans to refactor EquipmentOptionModal into CharacterOptionModal.

CharacterBuild renders either NewCharacterSubmit or LevelUpCharacterSubmit which both send fetch request to backend as POST or PATCH respectively.

Future plans: 

Plan to add an admin account option and add components to create new Equipment, Artifacts, Charms, Weapons, and Equipments.

Plan to add Item Shop to character sheet for in game play without needing to level up. 

Plan to add User Profile with password reset and edit options.


