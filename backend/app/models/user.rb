class User < ApplicationRecord
    validates :username, presence: { strict: true }, uniqueness: {case_sensative: false}
    validates :password_digest, presence: { strict: true }, length: {minimum: 10}
    has_many :characters
end
