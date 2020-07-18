class ProductsController < ApplicationController
  before_action :set_product, only: %i[show update destroy]
  # before_action :authorize_request, only: %i[show create update destroy]

   # GET /products
   def index
    @products = Product.all

    render json: @products
  end

  # GET /products/1
  def show
   render json: @product
  end

  # POST /products
  def create
    @product = Product.new(product_params)
    @store = Store.find(params[:store_id])
    @product.store = @store
       if @product.save
           render json: @product, status: :created
        else
            render json: @product.errors, status: :unprocessable_entity
        end
  end

  # PUT /products/1
  def update
    if @product.update(product_params)
      render json: @product
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  # DELETE /products/1
  def destroy
    @product.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_product
    @product = Product.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def product_params
    params.require(:product).permit(:name, :images, :description, :price, :quantity)
  end

end
