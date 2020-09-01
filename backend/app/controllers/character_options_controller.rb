class CharacterOptionsController < ApplicationController

    def index

        character_options = {}
        character_options['races'] = Race.all
        character_options['types'] = Type.all
        character_options['blessings'] = Blessing.all
        character_options['skills'] = Skill.all
        character_options['equipments'] = Equipment.all
        character_options['armors'] = Armor.all
        character_options['weapons'] = Weapon.all
        character_options['typelevels'] = TypeLevel.all
        character_options['blessinglevels'] = BlessingLevel.all
        character_options['curselevels'] = CurseLevel.all
        character_options['startingstats'] = StartingStat.all
        render json: character_options
    end

end