from app import db
from flask import url_for



class PaginateAPIMixim(object):
    @staticmethod
    def to_collection_dict(query,page,per_page,endpoint, **kwargs):
        resources = query.paginate(page=page, per_page=per_page,error_out=False)
        data = {
            'items': [item.to_dict() for item in resources.items],
            '_meta': {
                'page': page,
                'per_page': per_page,
                'total_pages': resources.pages,
                'total_items': resources.total
            },
            '_links': {
                'self': url_for(endpoint, page=page, per_page=per_page,
                                **kwargs),
                'next': url_for(endpoint, page=page + 1, per_page=per_page,
                                **kwargs) if resources.has_next else None,
                'prev': url_for(endpoint, page=page - 1, per_page=per_page,
                                **kwargs) if resources.has_prev else None
            }
        }
        return data


book_author = db.Table('book_author',
                        db.Column('book_id',db.Integer,db.ForeignKey('book.id')),
                        db.Column('author_id',db.Integer,db.ForeignKey('author.id')))



class Author(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64),index=True,nullable=False)
    about = db.Column(db.Text)
    url_pic = db.Column(db.String)
    books = db.relationship('Book',secondary=book_author,back_populates="authors")

    def __repr__(self) -> str:
        return f"<Author {self.name}>"


class Book(PaginateAPIMixim,db.Model):
    id = db.Column(db.Integer,primary_key=True)
    title = db.Column(db.String(64),index=True,nullable=False)
    description = db.Column(db.Text,index=True,nullable=False)
    book_url = db.Column(db.String,nullable=False)
    number_pages = db.Column(db.Integer)
    book_isbn = db.Column(db.Integer)
    language = db.Column(db.String)
    date_parution = db.Column(db.String)
    price = db.Column(db.Float,nullable=False)
    authors = db.relationship('Author',secondary=book_author,back_populates="books")

    FIELDS = ['title','book_url','number_pages',
    'language','date_parution','description','price','authors','book_isbn']

    def __repr__(self) -> str:
        return f"<Book {self.title}>"
    
    def get_authors(self):
        data = []
        for author in self.authors:
            data.append({'name':author.name,
            'about':author.about,'url_pic':author.url_pic})
        return data

    def to_dict(self):
        data = {
            'id':self.id,
            'title':self.title,
            'authors':self.get_authors(),
            'description':self.description,
            'book_url':self.book_url,
            'number_pages':self.number_pages,
            'book_isbn':self.book_isbn,
            'language':self.language,
            'date_parution':self.date_parution,
            'price':self.price,
            '_links':{
                'self': url_for('api.get_book',id=self.id)
            }
        }
        return data
    
    def from_dict(self,data):
        for field in self.FIELDS:
            if field in data:
                setattr(self,field,data[field])