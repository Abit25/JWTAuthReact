# JWTReactAuth
Authentication using JSON Web Tokens

JWTReact is a Django based web app which provides  basic authentication services. This authentication happens using JWT or JSON Web Tokens. JWT authentication is an alternative to the widely used sessions based authentication. 

Functioning:

The basic working of JWT Authentication is using tokens as an identification to ensure that the requests being sent to the server are authentic.
Every time the user logs in, he is provided with an access token, this access token is then supplied as a header in every subsequent request to the backend server.

Hence in JwtReact,  when the user's logs in he is supplied an access token is stored in the local storage of the browser.  Every request that follows this, is associated with an access token that the server uses for verification along with other params such as username and password. 

External Installations required :

API's used:
Djoser 

Packages used :
      1. rest_framework_simplejwt
      2.  django-cors-headers
      3.  djangorestframework


# Instructions for usage 

# INSTALL THE FOLLOWING:

1. rest_framework_simplejwt
2. django-cors-headers
3. djangorestframework
4. djoser


Run it as follows :

1.Start the Django server using python manage.py runserver
2.Start the React development server using npm start.
3.Signup or login on the page using the endpoints given below.

If successfully run, it'll greet you with your username on the page.
     



