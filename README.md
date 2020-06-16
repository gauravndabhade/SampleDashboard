# Sample Dashboard

Getting started with React & Django. I am following [Django REST with React](https://www.valentinog.com/blog/drf/#Django_REST_with_React_Django_and_React_together)

## Prerequirement
- python 3.6
- [Node.js  npm](https://www.npmjs.com/get-npm)

## Initialization

Create virtual environment and install requirements 
```sh
$ python3.6 -m venv env
$ source env/bin/activate
(env) $
(env) $ pip install -r requorements.txt

```

Install npm dependencies
```sh
(env) $ npm install 
(env) $ npm install dev
```
Compile React(ES6) code to JavaScript using [Webpack](https://webpack.js.org/) and [Babel](https://babeljs.io/)
```sh
(env) $ npm run dev         # For development
(env) $ npm run build       # For production
```

```sh
(env) $ python manage.py migrate
(env) $ python manage.py runserver
```
App will start in brower in [`http://127.0.0.1:8000`](http://127.0.0.1:8000)