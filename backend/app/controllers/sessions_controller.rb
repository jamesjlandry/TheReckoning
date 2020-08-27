class SessionsController < ApplicationController

    def login
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            render json: {username: user.username, id: user.id, account_type: user.account_type, first_name: user.first_name, last_name: user.last_name}
        else
            render json: nil
        end
    end

    def logged_in
        if session[:user_id]
            user = User.find_by(id: session[:user_id])
            render json: {username: user.username, id: user.id, account_type: user.account_type, first_name: user.first_name, last_name: user.last_name}
        else
            render json: nil 
        end
    end

    def log_out 
        session[:user_id] = nil
        render json: {message: 'logged out'}
    end
end