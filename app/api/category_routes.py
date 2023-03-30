from distutils.dep_util import newer
from flask import Blueprint, render_template, request
from flask_login import login_required, current_user
from .auth_routes import validation_errors_to_error_messages
from app.models import Category

category_routes = Blueprint('category', __name__)

@category_routes.route('/', methods=["GET"])
# @login_required
def get_all_categories():
    all_categories = Category.query.all()
    return {"categories": [category.to_dict() for category in all_categories]}

@category_routes.route("/<int:categoryId>", methods=["GET"])
# @login_required
def get_category(categoryId):
    category = Category.query.get(categoryId)
    if category == None:
        return {"message": "Category is empty"}
    return category.to_dict()
