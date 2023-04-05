from app.models import db, Flick
import json
import requests

keys_dict = {'Anime': [7424, 1], 'Drama': [5763, 2], 'Independent': [7077, 3],
            'Thriller': [89811, 4], 'Horror': [8711, 5], 'Kids & Family': [783, 6],
            'TV': [72404, 7], 'Romantic': [3830, 8], 'Comedies': [9736, 9],
            'Music & Musicals': [52852, 10], 'Sci-Fi & Fantasy': [1492, 11],
            'Action & Adventure': [801362, 12], 'Classic': [31574, 13],
            'Documentaries': [6839, 14], 'International': [78367, 15],
            'Crime': [5824, 16], 'Faith & Spirituality': [26835, 17],
            'Sports': [4370, 18]}


def seedFlicks(genrelist_id, key_name, category_id):

    url = "https://unogsng.p.rapidapi.com/search"

    querystring = {"genrelist": f"{genrelist_id}", "start_year": "1972", "orderby": "rating", "audiosubtitle_andor": "and",
                   "limit": "100", "subtitle": "english", "countrylist": "78,46", "audio": "english", "offset": "0", "end_year": "2019"}

    headers = {
        "X-RapidAPI-Key": "f0faebeddbmsh64aa79a31f4306fp182282jsn9093002a5af7",
        "X-RapidAPI-Host": "unogsng.p.rapidapi.com"
    }

    response = requests.request(
        "GET", url, headers=headers, params=querystring)

    json_data = json.loads(response.text)

    for data in json_data['results']:
        db.session.add(Flick(title=data['title'], img=data['img'], runtime=data['runtime'], synopsis=data['synopsis'], year=data['year'], vtype=data['vtype'], categoryName=key_name, categoryId=category_id))

    return

def seed_flicks():
    for key in keys_dict:
        seedFlicks(keys_dict[key][0], key, keys_dict[key][1])

    db.session.commit()

def undo_flicks():
    db.session.execute('TRUNCATE flicks RESTART IDENTITY CASCADE;')
    db.session.commit()
