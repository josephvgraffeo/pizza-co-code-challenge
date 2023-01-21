import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const client = new MongoClient(process.env.URI);
const db = client.db(process.env.DB_NAME);
const collection1 = db.collection(process.env.COLLECTION_NAME1)
const collection2 = db.collection(process.env.COLLECTION_NAME2)
const collection3 = db.collection(process.env.COLLECTION_NAME3)


const pizza1 = {
    pizza_name: "cheese pizza",
    sauce: "red",
    topping1: "cheese",
    pizzaID: "p1",
 };

const pizza2 = {
    pizza_name: "white pizza",
    sauce: "white",
    topping1: "cheese",
    pizzaID: "p2",
 };

const pizza3 = {
    pizza_name: "meatlovers pizza",
    sauce: "red",
    topping1: "cheese",
    topping2: "meatballs",
    topping3: "sausage",
    topping4: "bacon",
    pizzaID: "p3",
 };

 const customer1 = {
   first_name: "Bill",
   last_name: "Jones",
   phone: "222-222-2222",
   email: "billjones@fake.com",
   address1: "123 Pizza Ln, Boca Raton, FL 33433",
   rewards_member: true,
   customerID: "c1",
  };
  
  const customer2 = {
    first_name: "Jane",
    last_name: "Doe",
    phone: "555-555-5555",
    email: "janedoes@fake.com",
    address1: "124 Pep Ln, Boca Raton, FL 33433",
    rewards_member: false,
    customerID: "c2",
  };

  const order1 = {
      pizzaID: "p1",
      customerID: "c1",
      addtopping1: "meatball",
      style: "original",
      size: "medium",
      cost: 10.99,
      forDelivery: true
  };
    
  const order2 = {
    pizzaID: "p2",
    customerID: "c2",
    topping1: "onions",
    style: "thin crust",
    size: "large",
    cost: 14.99,
    forDelivery: false
  };
    
  const order3 = {
    pizzaID: "p3",
    customerID: "c1",
    style: "deep dish",
    size: "XL",
    cost: 19.99,
    forDelivery: true
  };


const insertPizzas = async (thisItem) => {
  const result = await collection1.insertOne(thisItem);
  console.log("Pizza added -->", thisItem)
};

const insertCustomers = async (thisItem) => {
  const result = await collection2.insertOne(thisItem);
  console.log("Customer added -->", thisItem);
}

const insertOrders = async (thisItem) => {
  const result = await collection3.insertOne(thisItem);
  console.log("Order submitted -->", thisItem)
}

// const allCollections = [...collection1, ...collection2, ...collection3]

// const getAll = async () => {
//   for (let i=0; i < allCollections.length; i++) {
//     console.table(await getListing(allCollections[i], {}, 0));
//   }
// };

const getListing = async (queryCol, queryParam, queryLimit) => {
  const result = await queryCol.find(queryParam).limit(queryLimit).toArray();
  console.table(result)
};

await getListing(collection1, {}, 0);
await getListing(collection2, {}, 0);
await getListing(collection3, {}, 0);

// await getAll();
// await insertPizza(pizza3);
// await insertCustomers(customer2);
// await insertOrders(order3);




client.close();