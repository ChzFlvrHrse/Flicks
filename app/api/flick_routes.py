from flask import Blueprint, render_template, request
from flask_login import login_required, current_user
from .auth_routes import validation_errors_to_error_messages
from app.models import Flick
from app.models import Category

flick_routes = Blueprint('flick', __name__)

@flick_routes.route('/', methods=["GET"])
# @login_required
def get_all_flicks():
    all_flicks = Flick.query.all()
    return {'flicks': [flick.to_dict() for flick in all_flicks]}

@flick_routes.route("/<string:title>", methods=["GET"])
# @login_required
def get_flick(title):
    flicks = Flick.query.filter_by(title=title).all()
    if flicks == None:
        return {'flick': 'Title does not exist'}
    return {'flick': [flick.to_dict() for flick in flicks]}

@flick_routes.route("/<string:title>/search")
# @login_required
def search_flick(title):
    title_cased = title.title()
    flick_search = Flick.query.filter(Flick.title.startswith(title_cased)).all()
    if len(flick_search) == 0:
        return {'searched': 'Title does not exist'}
    return {'searched': [flick.to_dict() for flick in flick_search]}

@flick_routes.route("/movies")
# @login_required
def get_movies():
    movies = Flick.query.filter(Flick.vtype == 'movie').all()
    return {"movie": [movie.to_dict() for movie in movies]}

@flick_routes.route("/tv")
# @login_required
def get_shows():
    tv = Flick.query.filter(Flick.vtype == 'series').all()
    return {"tv": [shows.to_dict() for shows in tv]}
