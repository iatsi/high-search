
# API REST Catalog

The purpose of this document is to explain the api payload and response:


## Minimize resources nesting


### Add Event

POST API

```javascript
/event
```

#### Sample Input 

```json
{
    "event":{
    "email": "mail@gmail.com",
    "environment": "prod",
    "component": "app",
    "message": "Addition 1",
    "data": {"addedBy":"Ashutosh"}
    }
}
```


#### Sample Output

```json
{
    "success": true,
    "data": {
        "_id": "5eee2ab5bf824d4973297a24",
        "email": "wfefe113@gmail.com",
        "environment": "dev",
        "component": "app",
        "message": "Addition 3",
        "data": {
            "addedBy": "Rakesh"
        },
        "createdAt": "2020-06-20T15:26:45.107Z",
        "updatedAt": "2020-06-20T15:26:45.107Z",
        "__v": 0
    }
}
```





### Search Event

GET API

```javascript
/search/event
```

#### Sample Input 

```text
queryString = email=gmail&date=1590665200875&message=addition&component=prod&environment=staging
```


#### Sample Output

```json
{
    "success": true,
    "data": [
        {
            "_id": "5eee2a811f824d4973297a22",
            "email": "mail@gmail.com",
            "environment": "staging",
            "component": "website",
            "message": "Addition 1",
            "data": {
                "addedBy": "Ashutosh"
            },
            "createdAt": "2020-06-20T15:25:53.266Z",
            "updatedAt": "2020-06-20T15:25:53.266Z",
            "__v": 0
        }
    ]
}
```


## *Note

Inorder to cater concurrent request Clustering is used, which uses multiple CPU cores to handle multiple requests. 


## Installation Guide

1. Go to folder /backend and use command 
  ```text
  npm i
  ```  
2. Once completed , use following code to start the server 
  ```text
  node index.js
  ```    