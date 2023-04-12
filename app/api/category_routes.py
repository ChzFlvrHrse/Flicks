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

@category_routes.route("/anime")
# @login_required
def get_anime():
    animes = Category.query.filter(Category.name == 'Anime')
    return {"animes": [anime.to_dict() for anime in animes]}

@category_routes.route("/drama")
# @login_required
def get_drama():
    dramas = Category.query.filter(Category.name == 'Drama')
    return {"dramas": [drama.to_dict() for drama in dramas]}

@category_routes.route("/independent")
# @login_required
def get_independent():
    independents = Category.query.filter(Category.name == 'Independent Movies')
    return {"independents": [independent.to_dict() for independent in independents]}

@category_routes.route("/thriller")
# @login_required
def get_thriller():
    thrillers = Category.query.filter(Category.name == 'Thriller Movies')
    return {"thrillers": [thriller.to_dict() for thriller in thrillers]}

@category_routes.route("/horror")
# @login_required
def get_horror():
    horrors = Category.query.filter(Category.name == 'Horror Movies')
    return {"horrors": [horror.to_dict() for horror in horrors]}

@category_routes.route("/kids_family")
# @login_required
def get_kids_family():
    kids_familys = Category.query.filter(Category.name == 'Kids & Family Movies')
    return {"kids_familys": [kids_family.to_dict() for kids_family in kids_familys]}

@category_routes.route("/tv")
# @login_required
def get_tv():
    tvs = Category.query.filter(Category.name == 'TV Shows')
    return {"tvs": [tv.to_dict() for tv in tvs]}

@category_routes.route("/romantic")
# @login_required
def get_romantic():
    romantics = Category.query.filter(Category.name == 'Romantic Movies')
    return {"romantics": [romantic.to_dict() for romantic in romantics]}

@category_routes.route("/comedy")
# @login_required
def get_comedy():
    comedys = Category.query.filter(Category.name == 'Comedies')
    return {"comedys": [comedy.to_dict() for comedy in comedys]}

@category_routes.route("/musical")
# @login_required
def get_musical():
    musicals = Category.query.filter(Category.name == 'Music & Musicals')
    return {"musicals": [musical.to_dict() for musical in musicals]}

@category_routes.route("/scifi_fantasy")
# @login_required
def get_scifi_fantasy():
    scifi_fantasys = Category.query.filter(Category.name == 'Sci-Fi & Fantasy')
    return {"scifi_fantasys": [scifi_fantasy.to_dict() for scifi_fantasy in scifi_fantasys]}

@category_routes.route("/action_adventure")
# @login_required
def get_action_adventure():
    action_adventures = Category.query.filter(Category.name == 'Action & Adventure')
    return {"action_adventures": [action_adventure.to_dict() for action_adventure in action_adventures]}

@category_routes.route("/classic")
# @login_required
def get_classic():
    classics = Category.query.filter(Category.name == 'Classic Movies')
    return {"classics": [classic.to_dict() for classic in classics]}

@category_routes.route("/documentaries")
# @login_required
def get_documentaries():
    documentariess = Category.query.filter(Category.name == 'Documentaries')
    return {"documentariess": [documentaries.to_dict() for documentaries in documentariess]}

@category_routes.route("/international")
# @login_required
def get_international():
    internationals = Category.query.filter(Category.name == 'International Movies')
    return {"internationals": [international.to_dict() for international in internationals]}

@category_routes.route("/crime")
# @login_required
def get_crime():
    crimes = Category.query.filter(Category.name == 'Crime')
    return {"crimes": [crime.to_dict() for crime in crimes]}

@category_routes.route("/faith_spirituality")
# @login_required
def get_faith_spirituality():
    faith_spiritualitys = Category.query.filter(Category.name == 'Faith & Spirituality')
    return {"faith_spiritualitys": [faith_spirituality.to_dict() for faith_spirituality in faith_spiritualitys]}

@category_routes.route("/sports")
# @login_required
def get_sports():
    sportss = Category.query.filter(Category.name == 'Sports')
    return {"sportss": [sports.to_dict() for sports in sportss]}
