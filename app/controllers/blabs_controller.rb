class BlabsController < ApplicationController

  def index
    @blabs = Blab.all.order(created_at: :desc)
    render json: @blabs, only: [:id, :content]
  end

  def create
    @blab = Blab.new(blab_params)
    if @blab.save
      render json: @blab, only: [:id, :content], status: :created, location: blab_url(@blab, format: :json)
    else
      render json: @blab.errors, status: :unprocessable_entity
    end
  end

private
  def blab_params
    params.require(:blab).permit(:content)
  end
end
