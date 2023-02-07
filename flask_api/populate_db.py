from app.models import Book,Author
from app import db,create_app
import json
app = create_app()


with app.app_context():
    db.drop_all()
    db.create_all()

    authors = []
    with open('authors_data.json','r') as file:
            data = json.load(file)
            for row in data['authors']:
                  author = Author(name=row['name'],about=row['summary'],url_pic=row['image_url'])
                  authors.append(author)
   
    db.session.add_all(authors)

    db.session.commit()