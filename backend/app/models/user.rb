class User < ApplicationRecord
    validates :name, pressence: { strict: true }, uniqueness: {case_sensative: false}
    validates :password_digest, pressence: { strict: true }, length: {minimum: 10}
    has_many :characters
end
