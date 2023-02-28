import requests
URL = "http://127.0.0.1:5000/api/books"
data = {
        'title':'Murder on the Orient Express: A Hercule Poirot Mystery ',
        'description':"""“The murderer is with us—on the train now . . .”

Just after midnight, the famous Orient Express is stopped in its tracks by a snowdrift. By morning, the millionaire Samuel Edward Ratchett lies dead in his compartment, stabbed a dozen times, his door locked from the inside. Without a shred of doubt, one of his fellow passengers is the murderer.

Isolated by the storm, detective Hercule Poirot must find the killer among a dozen of the dead man’s enemies, before the murderer decides to strike again.

“What more . . . can a mystery addict desire?”""",
        'price':8.39,
        'book_url':"https://m.media-amazon.com/images/I/81SoIAzWbnL.jpg",
        'number_pages':288,
        'book_isbn':62073494,
        'language':'English',
        'date_parution':'January 18, 2011',
        'authors':['Agatha Christie']
    }
def post_api():
    try:
        response = requests.post(URL, json=data)
        print(response.json())
    except:
        print('something went wrong')

post_api()