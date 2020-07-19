console.log("Assignment 3");

var shoppingList=['Fruits','Soap','Vegetables','Biscuits','Dairy','Cheese','Eggs','Bread'];

var basket=shoppingList;

console.log("Products in Basket According to the shopinglist are :"+basket);

var shoppingBasket=[
    ...shoppingList,
    'Oils','Sweet','Dry Beans','Nuts',
];

console.log("Products in Basket After adding some extra products are :"+shoppingBasket);