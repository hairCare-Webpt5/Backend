# Backend

Local Routes:

Register: http://localhost:5000/api/auth/register

Login:    http://localhost:5000/api/auth/login

Stylist:  http://localhost:5000/api/users/stylist

Users:    http://localhost:5000/api/users/users

Posts:    http://localhost:5000/api/posts/

New post: http://localhost:5000/api/posts/newPost

Api Routes:

Register: https://obscure-stream-79118.herokuapp.com/api/auth/register

{
	"username": ,
	"password": ,
	"location": ,
	"phone": ,
	"roleId":  "You need to specify what type of account"  1 = stylist 2 = client
}

Login:    https://obscure-stream-79118.herokuapp.com/api/auth/login

{
	"username": ,
	"password": 
}

Authorization: Token

Stylist:  https://obscure-stream-79118.herokuapp.com/api/users/stylist

Authorization: Token

Users:    https://obscure-stream-79118.herokuapp.com/api/users/users

Authorization: Token

Posts:    https://obscure-stream-79118.herokuapp.com/api/posts/

Authorization: Token

New post: https://obscure-stream-79118.herokuapp.com/api/posts/newPost

 {
     title: 
     description:  
     image:     "url"
     userId:    "You need to specify what type of account"  1 = stylist 2 = client
},