# olympia_bend
Backend api for olympia built with JWT token based authentication for Node.js GraphQL Apollo Server 2.0

## How to get Started
```
git clone https://github.com/AmosWels/olympia_bend.git
```
```
cd olympia_bend
npm install
npm run start
```

## Test out the api using heroku.

For every request, use [Olympia_bend_url](https://olympia-api.herokuapp.com/) to make requests; Below is an example;

```
[Method Post] https://olympia-api.herokuapp.com/
```

## Graphql Valid Requests
#### Registration Request

    
    mutation q {
    register(email:"bnm@gmail.com", firstname:"burminnn", surname:"lllnum",  gender:"male", password:"amos123"){
        email
        firstname
        surname
        gender
        password
        token
  }
}
    
##### Sample Registration Response
```json
{
  "data": {
    "register": {
      "email": "bnm@gmail.com",
      "firstname": "burminnn",
      "surname": "lllnum",
      "gender": "male",
      "password": "$2a$10$KT8VuGlTW2nEClLi4aleIehlal3b0KIxldCwZJaDZ/2a.9XMWLl3m",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJidXJtaW5ubiIsInN1cm5hbWUiOiJsbGxudW0iLCJnZW5kZXIiOiJtYWxlIiwiZW1haWwiOiJibm1AZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkS1Q4VnVHbFRXMm5FQ2xMaTRhbGVJZWhsYWwzYjBLSXhsZEN3WkphRFovMmEuOVhNV0xsM20iLCJfaWQiOiI1ZTVkMDgxNTAzYTAwMjAwMjQ1NzQ0MzEiLCJpYXQiOjE1ODMxNTUyMjEsImV4cCI6MTU4Mzc2MDAyMX0.DFkzx3Dqe75iYmHzPOK7wKmK6jMPMVdLKc8Z2gcqqF4"
    }
  }
}
```

#### Login Request
```
mutation login {
  login(email:"bnm@gmail.com", password:"amos123"){
    email
    password
    token
    firstname
  }
}
```
##### Login Sample Response
```json
{
  "data": {
    "login": {
      "email": "bnm@gmail.com",
      "password": "$2a$10$KT8VuGlTW2nEClLi4aleIehlal3b0KIxldCwZJaDZ/2a.9XMWLl3m",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTVkMDgxNTAzYTAwMjAwMjQ1NzQ0MzEiLCJmaXJzdG5hbWUiOiJidXJtaW5ubiIsInN1cm5hbWUiOiJsbGxudW0iLCJnZW5kZXIiOiJtYWxlIiwiZW1haWwiOiJibm1AZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkS1Q4VnVHbFRXMm5FQ2xMaTRhbGVJZWhsYWwzYjBLSXhsZEN3WkphRFovMmEuOVhNV0xsM20iLCJpYXQiOjE1ODMxNTUyNjIsImV4cCI6MTU4Mzc2MDA2Mn0.zmuAXkfND4YLBUSNb6ZCk0f2OjHewAT2pXFekQD2m6M",
      "firstname": "burminnn"
    }
  }
}
```

#### Profile Request
```js
{
query profile{
  profile{
    firstname
    surname
    email
    gender
  }
}
}
```
##### Profile Sample Response
```json
{
  "data": {
    "profile": {
      "firstname": "amos",
      "surname": "welike",
      "email": "amos@gmail.com",
      "gender": "male"
    }
  }
}
```
You can checkout the frontend of the app [here.]( https://olympia-v2-git-addformikk.amoswelike.now.sh/.)
