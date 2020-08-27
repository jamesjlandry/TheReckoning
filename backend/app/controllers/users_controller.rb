class UsersController < ApplicationController

    def index
        users = User.all 

        render json: users, :include => [:characters]
    end


    def create
        user = User.create({username: params[:username], password: params[:password], first_name: params[:first_name], last_name: params[:last_name], email: params[:email], account_type: params[:account_type]})
            session[:user_id] = user.id
            render json: user
    end

end