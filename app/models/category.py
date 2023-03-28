from .db import db, environment, SCHEMA, add_prefix_for_prod


class Category(db.Model):
    __tablename__ = 'categories'

    if environment== "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.VARCHAR(75), nullable=False)

    # flicks = db.relationship("Flick", backref='category', cascade='all, delete-oprhan')

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            # 'flicks': [flick.to_dict() for flick in self.flicks]
        }
