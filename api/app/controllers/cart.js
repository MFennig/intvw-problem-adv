const carts = {
  "100": {
    cartId: 100,
    cartItems: [
      {
        cartItemId: 78,
        description: "PING Stretch Webbing Belt",
        quantity: 2
      },
      {
        cartItemId: 56,
        description: "Sol Visor",
        quantity: 3
      },
      {
        cartItemId: 305,
        description: "Ladies Umbrella",
        quantity: 2
      },
      {
        cartItemId: 356,
        description: "PING Sport Ladies Glove",
        quantity: 4
      },
    ]
  },
  "101": {
    cartId: 101,
    cartItems: [
      {
        cartItemId: 189,
        description: "Summit Patch Cap",
        quantity: 4
      },
      {
        cartItemId: 226,
        description: "Pioneer",
        quantity: 1
      },
    ]
  },
  "102": {
    cartId: 102,
    cartItems: [
      {
        cartItemId: 478,
        description: "Tour Tee",
        quantity: 2
      },
    ]
  },
}

exports.get = (request, response) => {
  const { id } = request.params;

  if (carts[id]) {
    response.json({
      error: false,
      data: carts[id]
    });
  } else {
    response.status(500).send({
      error: true,
      message: 'Internal Error reaching partner server.',
    });
  }
};