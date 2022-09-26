# WEBSCRAPER

**OVERVIEW**

An exercise from Colt Steele's [`The Modern Python Bootcamp`](https://www.udemy.com/course/the-modern-python3-bootcamp/)

**SITE**

- [Books To Scrape](http://books.toscrape.com)

**PYTHON MODULES**

*Using: Python 3.10.7*

- [sqlite3](https://www.sqlite.org/index.html): Part of the [`Standard Library`](https://docs.python.org/3/library/index.html)

- [Requests](https://requests.readthedocs.io/en/latest/)

- [Beautiful Soup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/)


**EXTENSION(S)**

I don't want to only create a .db file after a scrape, but also build a .csv file for future analysis. The following 'recipe' can be applied from the terminal in order to do this. This needs to be integrated into the scraper.

> % sqlite3

> sqlite> .open books.db

> sqlite> .headers on

> sqlite> .mode csv

> sqlite> .output books.csv

> sqlite> select * from books;

> sqlite> .output stdout