from sqlalchemy import null
from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime


class Flick(db.Model):
    __tablename__ = 'flicks'

    # if environment == "production":
    #     __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.VARCHAR(255), nullable=False)
    img = db.Column(db.String, nullable=False)
    runtime = db.Column(db.Integer, nullable=False)
    synopsis = db.Column(db.String, nullable=False)
    year = db.Column(db.Integer, nullable=False)
    vtype = db.Column(db.VARCHAR(50), nullable=False)
    # preview = db.Column(db.String, nullable=False)
    categoryId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('categories.id')))
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'img': self.img,
            'runtime': self.runtime,
            'synopsis': self.synopsis,
            'year': self.year,
            'vtype': self.vtype,
            # 'preview': self.preview,
            'categoryId': self.categoryId,
            "created_at": self.created_at,
            "updated_at": self.updated_at
        }
