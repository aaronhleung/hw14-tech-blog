## Tech Blog
   
### Description
This is a blog that is geared towards tech-related content. Users can create an account to post and comment on other peoples' posts.


## Instructions
The app is deployed on Heroku [here](https://sheltered-springs-67332.herokuapp.com/)

However, if you wish to run it locally:

Add a .env file to the root directory
```text
DB_NAME='tech_blog_db'
DB_USER='root'
DB_PW='password'
```
Run 
```text
npm i
```
and 
```text
npm run seed
```
then finally
```text
npm start
```
to begin posting!