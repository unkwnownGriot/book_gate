import requests
import string
from bs4 import BeautifulSoup
import json

 
author_url = "https://en.wikipedia.org/wiki/List_of_best-selling_fiction_authors"

def get_author_info():
    authors_data =[]
    with open('authors.txt','r',encoding='utf-8') as file:
        for line in file:
            wiki_bot(line,authors_data)
    write_json(authors_data)


def write_json(data):
    json_data = {
        'authors': data
    }
    with open('authors_data.json','w',encoding="utf-8") as file:
        json.dump(json_data,file,indent=4,ensure_ascii=True)

def wiki_bot(name,authors_data:list):
    list_word = name.split()
    word = "_".join(list_word)
    url = "https://en.wikipedia.org/wiki/"+word
    url_open = requests.get(url=url)
    soup = BeautifulSoup(url_open.text,'html.parser')
    soup.encode("utf-8")
    name = soup.find('h1',{'id':'firstHeading'}).text
    summary = soup.find("div", {"id": "mw-content-text"}).find_all('p')[1].text
    info_image = soup.find("table", {"class": "infobox"})
    image_url = info_image.find("img")["src"] if info_image else ''
        

    # Save the information to a JSON file
    data = {
        "name": name,
        "summary": summary,
        "image_url": image_url if image_url else ''
    }
    authors_data.append(data)


    
## Create a function to scrape the best selling authors fiction boooks in wikipedia
def scrape_author(author_url):
    url = requests.get(author_url)
    soup = BeautifulSoup(url.text,'html.parser')
    rows = soup.find('table').find_all('tr')
    authors = []
    for row in rows:
        first_cell = row.find('td')
        if first_cell:
            authors.append(first_cell.text.strip())
    with open('authors.txt','w',encoding='utf-8') as file:
        for i in range(19):
            file.write(authors[i]+'\n')
    

get_author_info()
