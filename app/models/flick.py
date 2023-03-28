from sqlalchemy import null
from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime


class Flick(db.Model):
    __tablename__ = 'flicks'

    # if environment == "production":
    #     __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.VARCHAR(255), nullable=False)
    flickImg = db.Column(db.String, nullable=False)
    preview = db.Column(db.String, nullable=False)
    categoryId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('categories.id')))
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'flickImg': self.flickImg,
            'preview': self.preview,
            'categoryId': self.categoryId,
            "created_at": self.created_at,
            "updated_at": self.updated_at
        }
