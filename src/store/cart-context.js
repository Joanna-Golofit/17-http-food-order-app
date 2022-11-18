import React from 'react';

const CartContext = React.createContext({
  items: [{ id: 'm1', name: 'Schnitzel', amount: 1, price: 16.5 }], // te dane tu to tylko wzór, nie korzystamy z nich naprawde, w providerze sie zniemia stan początkowe
  totalAmount: 16.5,
  addItem: (item) => {},
  removeItem: (id) => {},
  clear: () => {}
});

export default CartContext;