import os
import requests
os.environ['DATABASE_URI'] = 'sqlite://'

import unittest
from app import create_app,db
from app.models import Book


app = create_app()

class BookModelCase(unittest.TestCase):
    URL = "http://127.0.0.1:5000/api/books"
    data = {
        'title':'One Piece Tome 01 Romance Dawn',
        'description':"""We are in the age of pirates. Luffy,
                        a young mischievous boy, dreams of becoming the king
                        of the pirates by finding the "One Piece", a fabulous 
                        treasure. One day, Luffy accidentally swallowed a demonic
                        fruit that turned him into a rubber man. Since then, he is able
                        to twist his elastic body in all directions, but he has lost the\
                        ability to swim. With the help of his precious friends, including
                        the faithful Shanks, he will have to face fearsome pirates in ever
                        more incredible adventures.""",
        'price':10.34,
        'book_url':"https://m.media-amazon.com/images/I/61a249sIzNL._SX320_BO1,204,203,200_.jpg",
        'number_pages':207,
        'book_isbn':2723488527,
        'language':'English',
        'date_parution':'July 15, 2013',
        'authors':['Eiichiro Oda']
    }
    
    def setup(self):
        self.app_context = app.app_context()
        self.app_context.push()
        db.create_all()
    
    def teardown(self):
        db.session.remove()
        db.drop_all()
        self.app_context.pop()
    
    def test_get_all_books(self):
        response = requests.get(self.URL)
        self.assertEqual(response.status_code,200)
        self.assertEqual(len(response.json()),3)
    
    def test_create_book(self):
        response = requests.post(self.URL, json=self.data)
        self.assertEqual(response.status_code,201)
        self.assertTrue(response.json().items() ,self.data.items())
    
    def test_get_specific_book(self):
        response = requests.get(self.URL+'/1')
        self.assertTrue(isinstance(response.json()['authors'],list))
        self.assertEqual(response.json()['title'],"Murder on the Orient Express")
        self.assertEqual(response.status_code,200)
    
    def test_update_one_book(self):
        response = requests.put(self.URL+'/6',json={'title':'Luffy'})
        self.assertEqual(response.json()['title'],'Luffy')
    
    
    

if __name__ == "__main__":
    unittest.main()
