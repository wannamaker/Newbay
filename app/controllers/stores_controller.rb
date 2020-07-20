class StoresController < ApplicationController
  before_action :set_store, only: %i[show update destroy]
  before_action :authorize_request, only: %i[create update destroy]

   # GET /stores
   def index
    @stores = Store.all

    render json: @stores, include: [:user, :products]
  end

  # def index_by_user
  #   @stores = Store.all
  #   @store.user = @current_user
  #   render json: @stores
  # end

  # GET /stores/1
  def show
   render json: @store, include: :products
  end

  # POST /stores
  def create
    @store = Store.new(store_params)
    @store.user = @current_user
    @current_user.update(:is_a_seller => true)
    @current_user.save
       if @store.save
           render json: @store, status: :created
        else
            render json: @store.errors, status: :unprocessable_entity
        end
  end

  # PUT /stores/1
  def update
    if @store.update(store_params)
      render json: @store
    else
      render json: @store.errors, status: :unprocessable_entity
    end
  end

  # DELETE /stores/1
  def destroy
    @store.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_store
    @store = Store.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def store_params
    params.require(:store).permit(:name, :description, :user_id)
  end
end
