import sqlite3
import requests
from bs4 import BeautifulSoup

#Request URL
response = requests.get("http://books.toscrape.com")
soup = BeautifulSoup(response.text, "html.parser")
books = soup.find_all("article")
print(books)

#Initialize bs4

#Extract data

#Save data to db