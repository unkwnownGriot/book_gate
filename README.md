# Book Gate
Book Gate is a **fullstack web application** built with **Flask** (backend) and **React** (frontend) for managing a personal library.  
It allows users to browse, list, and filter books through a simple and responsive interface.
You can follow the tutorials here :  [big flask tutorial](https://medium.com/@elsamatchole)

## 🚀 Features
- List books with details
- Filter/search functionality
- Flask REST API backend
- React frontend connected to the API
- Utility scripts for scraping author data and populating the database
- Basic backend tests with Python

## 🛠️ Tech Stack
- **Frontend:** React (Vite, Hooks, functional components)  
- **Backend:** Flask (REST API, SQLite)  
- **Languages:** JavaScript, Python  
- **Others:** npm, pip  

## Installation
- Clone the repository to your local machine:
```sh
git clone https://github.com/unkwnownGriot/book_gate.git
```
-  Change into the directory of the cloned repository:
```sh
cd book gate
```
- Install the backend dependencies by navigating to the `flask_api` directory and run:
```python
pip install -r requirements.txt
```
- Install the frontend dependencies by navigating to the `client` directory and run:
 ```node
 npm install
 ```
 ## Running the Application
 - Start the Flask backend by navigating to the `flask_api` directory and run:
 ```python
 flask run
 ```
 - Start the React frontend by navigating to the `client` directory and run:
``` 
npm run dev
```
## Testing
To run the tests for the backend navigate to the `flask_api` directory and run:
```python
python tests.py
```
## Scrape authrors data
To run the script to get the author data run :
``` python
python scrape_author.py
```
## Populate database
```sh
python populate_db.py
```

