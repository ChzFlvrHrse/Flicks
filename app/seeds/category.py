from app.models import db, Category

def seed_categories():
    anime = Category(id=1, name='Anime')
    drama = Category(id=2, name='Drama')
    indy = Category(id=3, name='Independent Movies')
    thriller = Category(id=4, name='Thriller Movies')
    horror = Category(id=5, name='Horror Movies')
    kids_family = Category(id=6, name='Kids & Family Movies')
    tv = Category(id=7, name="TV Shows")
    romantic = Category(id=8, name='Romantic Movies')
    comedies = Category(id=9, name='Comedies')
    music_musicals = Category(id=10, name='Music & Musicals')
    scifi_fantasy = Category(id=11, name='Sci-Fi & Fantasy')
    action_adventure = Category(id=12, name='Action & Adventure')
    classic = Category(id=13, name='Classic Movies')
    documentaries = Category(id=14, name='Documentaries')
    international = Category(id=15, name='International Movies')

    catArr = [anime, drama, indy, thriller, horror,
              kids_family, tv, romantic, comedies,
              music_musicals, scifi_fantasy, action_adventure,
              classic, documentaries, international]

    for cat in catArr:
        db.session.add(cat)

    db.session.commit()

def undo_categories():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()
