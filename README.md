# Book Gate

 A full-stack Flask-React application for managing a personal library.
This is the repo of my [big flask tutorial](https://medium.com/@elsamatchole)

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

