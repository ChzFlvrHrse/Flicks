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

@flick_routes.route("/<string:title>", methods=["GET"])
# @login_required
def get_flick(title):
    flick = Flick.query.filter_by(title=title).first()
    return flick.to_dict()

@flick_routes.route("/<string:title>/search")
def search_flick(title):
    title_cased = title.title()
    flick_search = Flick.query.filter(Flick.title.startswith(title_cased)).all()
    return {'searched': [flick.to_dict() for flick in flick_search]}
