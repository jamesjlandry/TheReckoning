class EquipmentOptionsController < ApplicationController

    def index

        equipment_options = {}
        equipment_options['armors'] = Armor.all
        equipment_options['equipments'] = Equipment.all
        equipment_options['weapons'] =  Weapon.all

        render json: equipment_options
    end

end