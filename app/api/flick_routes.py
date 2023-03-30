from distutils.dep_util import newer
from flask import Blueprint, render_template, request
from flask_login import login_required, current_user
from .auth_routes import validation_errors_to_error_messages
from app.models import Flick

flick_routes = Blueprint('flick', __name__)

@flick_routes.route('/', methods=["GET"])
# @login_required
def get_all_flicks():
    all_flicks = Flick.query.all()
    return {'flicks': [flick.to_dict() for flick in all_flicks]}

@flick_routes.route("/<int:flickId>", methods=["GET"])
# @login_required
def get_flick(flickId):
    flick = Flick.query.get(flickId)
    return flick.to_dict()
