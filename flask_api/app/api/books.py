from flask import request,jsonify,url_for,current_app
from app import db
from app.api import api
from app.api.errors import bad_request
from app.models import Book,Author




@api.route('/books/<int:id>', methods=['GET'])
def get_book(id):
    return jsonify(Book.query.get_or_404(id).to_dict())


@api.route('/books/', methods=['GET'])
def get_books():
    page = request.args.get('page',1,type=int)
    per_page = current_app.config['POSTS_PER_PAGE']
    data = Book.to_collection_dict(Book.query,page=page,per_page=per_page,endpoint='api.get_books')
    return jsonify(data)


@api.route('/books/', methods=['POST'])
def create_book():
    data = request.get_json() or {}
    if 'title'not in data or 'description' not in data or not 'book_url'in data \
         or not 'price' in data:
        return bad_request('must include username, email and password fields')
    authors = []
    for author_name in data['authors']:
        author = Author.query.filter_by(name=author_name).first()
        if author:
            authors.append(author)
        else:
            return bad_request(404,f'author {author_name} not found')
    data['authors'] = authors
    book = Book()
    book.from_dict(data=data)
    db.session.add(book)
    db.session.commit()
    response = jsonify(book.to_dict())
    response.status_code = 201
    response.headers['Location'] = url_for('api.get_book', id=book.id)
    return response


@api.route('/books/<int:id>', methods=['PUT'])
def update_book(id):
    book = Book.query.get_or_404(id)
    data = request.get_json() 
    book.from_dict(data)
    db.session.commit()
    return jsonify(book.to_dict())


@api.route('/books/<int:id>', methods=['DELETE'])
def delete_book(id):
    book = Book.query.get_or_404(id)
    db.session.delete(book)
    db.session.commit()
    return 'Book deleted successfully'

