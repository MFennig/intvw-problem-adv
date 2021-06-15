# Interview Problem API

This is the API that you will be communicating with from the front end to return you information from your cart.

## Start Server

```
npm i
npm run start
```

You will know if it successfully runs when you see this in within your terminal output

(NOTE: the port is listed at the end for you to reference)

```
Server Initialized on :5000
```

## API

### Get Cart By ID

Cart ID's to Test With: `[100, 101, 102]`

URL: http://localhost:5000/cart/byid/{cartId}

#### Success Response

```
HTTP/1.1 200
Content-Type: application/json

{
    "error":false,
    "data":{
        "cartId":100,
        "cartItems":[
            {
                "cartItemId":78,
                "description":"PING Stretch Webbing Belt",
                "quantity":2
            },
            {
                "cartItemId":56,
                "description":"Sol Visor",
                "quantity":3
            },
            {
                "cartItemId":305,
                "description":"Ladies Umbrella",
                "quantity":2
            },
            {
                "cartItemId":356,
                "description":"PING Sport Ladies Glove",
                "quantity":4
            }
        ]
    }
}
```

#### Error Response

```
HTTP/1.1 200
Content-Type: application/json

{
    "error":true,
    "message": "Internal Error reaching partner server."
}
```
