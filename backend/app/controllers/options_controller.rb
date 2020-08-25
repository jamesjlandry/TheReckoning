class OptionsController < ApplicationController

    def index

        character_options = {}
        character_options['races'] = Race.all
        character_options['types'] = Type.all
        character_options['blessings'] = Blessing.all
        character_options['curses'] = Curse.all

        render json: character_options
    end

end