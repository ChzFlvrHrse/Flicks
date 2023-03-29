from app.models import db, Category

def seed_categories():
    anime = Category(name='Anime')
    drama = Category(name='Drama')
    indy = Category(name='Independent Movies')
    thriller = Category(name='Thriller Movies')
    horror = Category(name='Horror Movies')
    kids_family = Category(name='Kids & Family Movies')
    tv = Category(name="TV Shows")
    romantic = Category(name='Romantic Movies')
    comedies = Category(name='Comedies')
    music_musicals = Category(name='Music & Musicals')
    scifi_fantasy = Category(name='Sci-Fi & Fantasy')
    action_adventure = Category(name='Action & Adventure')
    classic = Category(name='Classic Movies')
    documentaries = Category(name='Documentaries')
    international = Category(name='International Movies')
    crime = Category(name='Crime')
    faith_spirituality = Category(name='Faith & Spirituality')
    sports = Category(name='Sports')

    catArr = [anime, drama, indy, thriller, horror,
              kids_family, tv, romantic, comedies,
              music_musicals, scifi_fantasy, action_adventure,
              classic, documentaries, international, crime,
              faith_spirituality, sports]

    for cat in catArr:
        db.session.add(cat)

    db.session.commit()

def undo_categories():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()
