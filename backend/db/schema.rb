# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_08_24_205132) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "armors", force: :cascade do |t|
    t.string "name"
    t.string "type"
    t.integer "defense"
    t.string "text"
    t.integer "cost"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "artifacts", force: :cascade do |t|
    t.string "name"
    t.string "text"
    t.integer "cost"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "blessing_levels", force: :cascade do |t|
    t.string "name"
    t.integer "blessing_id"
    t.integer "level"
    t.string "text"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "blessings", force: :cascade do |t|
    t.string "name"
    t.string "text"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "character_armors", force: :cascade do |t|
    t.integer "character_id"
    t.integer "armor_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "character_artifacts", force: :cascade do |t|
    t.integer "character_id"
    t.integer "artifact_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "character_blessing_abilities", force: :cascade do |t|
    t.integer "character_id"
    t.integer "blessing_level_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "character_charms", force: :cascade do |t|
    t.integer "character_id"
    t.integer "charm_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "character_curse_abilities", force: :cascade do |t|
    t.integer "character_id"
    t.integer "curse_level_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "character_equipments", force: :cascade do |t|
    t.integer "character_id"
    t.integer "equipment_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "character_skills", force: :cascade do |t|
    t.integer "character_id"
    t.integer "skill_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "character_type_abilities", force: :cascade do |t|
    t.integer "character_id"
    t.integer "type_level_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "character_weapons", force: :cascade do |t|
    t.integer "character_id"
    t.integer "weapon_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "characters", force: :cascade do |t|
    t.string "name"
    t.integer "type_id"
    t.integer "blessing_id"
    t.integer "race_id"
    t.integer "user_id"
    t.integer "curse_id"
    t.string "status"
    t.integer "level"
    t.string "image"
    t.integer "coins"
    t.string "background"
    t.string "notes"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "charms", force: :cascade do |t|
    t.string "name"
    t.string "text"
    t.integer "cost"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "curse_levels", force: :cascade do |t|
    t.string "name"
    t.integer "curse_id"
    t.integer "level"
    t.string "text"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "curses", force: :cascade do |t|
    t.string "name"
    t.string "text"
    t.integer "blessing_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "equipment", force: :cascade do |t|
    t.string "name"
    t.string "text"
    t.integer "cost"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "races", force: :cascade do |t|
    t.string "name"
    t.string "text"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "skills", force: :cascade do |t|
    t.string "name"
    t.string "text"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "starting_stats", force: :cascade do |t|
    t.integer "type_id"
    t.integer "race_id"
    t.integer "strength"
    t.integer "dexterity"
    t.integer "charisma"
    t.integer "wisdom"
    t.integer "magic"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "stats", force: :cascade do |t|
    t.integer "character_id"
    t.integer "strength"
    t.integer "charisma"
    t.integer "wisdom"
    t.integer "magic"
    t.integer "recovery"
    t.integer "strength_pool"
    t.integer "dexterity_pool"
    t.integer "charisma_pool"
    t.integer "wisdom_pool"
    t.integer "magic_pool"
    t.integer "starting_stat_id"
    t.integer "xp"
    t.integer "hp"
    t.integer "recovery_pool"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "type_levels", force: :cascade do |t|
    t.string "name"
    t.integer "type_id"
    t.integer "level"
    t.string "text"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "types", force: :cascade do |t|
    t.string "name"
    t.string "text"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "account_type"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "weapons", force: :cascade do |t|
    t.string "name"
    t.string "type"
    t.integer "damage"
    t.string "text"
    t.integer "cost"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
