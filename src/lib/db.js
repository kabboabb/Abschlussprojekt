import { MongoClient, ObjectId } from "mongodb"; // See https://www.mongodb.com/docs/drivers/node/current/quick-start/
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("Eldenring"); // select database

//////////////////////////////////////////
// Armors
//////////////////////////////////////////

// Get all armors
async function getArmors() {
  let armor = [];
  try {
    const collection = db.collection("armor");
    // You can specify a query/filter here
    const query = {};

    // Get all objects that match the query
    armor = await collection.find(query).toArray();
    armor.forEach((armor) => {
      armor._id = armor._id.toString(); // convert ObjectId to String
    });
  } catch (error) {
    console.log(error);
    // TODO: error handling
  }
  return armor;
}

// Get armor by id
async function getArmor(id) {
  let armor = null;
  try {
    const collection = db.collection("armor");
    const query = { _id: new ObjectId(id) }; // filter by id
    armor = await collection.findOne(query);

    if (!movie) {
      console.log("No movie with id " + id);
      // TODO: errorhandling
    } else {
      armor._id = armor._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return armor;
}


// Create armor
// Example armor object:
/* 
{
  name: "All-knowing Greaves",
  image: "https://eldenring.fanapis.com/images/armors/...",
  description: "Greaves set with countless eyes and ears...",
  category: "Leg Armor",
  dmgNegation: [
    { name: "Phy", amount: 7 },
    { name: "Strike", amount: 6 }
  ],
  resistance: [
    { name: "Immunity", amount: 17 },
    { name: "Robustness", amount: 28 }
  ],
  weight: 6.6
}
*/
async function createArmor(armor) {
  try {
    const collection = db.collection("armor");
    const result = await collection.insertOne(armor);
    return result.insertedId.toString(); // convert ObjectId to String
  } catch (error) {
    // TODO: error handling
    console.log(error.message);
  }
  return null;
}

// Update armor
// Example armor object:
/* 
{
  _id: "6630e72c95e12055f661ff13",
  name: "All-knowing Greaves",
  image: "https://eldenring.fanapis.com/images/armors/...",
  description: "Updated description...",
  category: "Leg Armor",
  dmgNegation: [...],
  resistance: [...],
  weight: 6.6
}
*/
// Returns: id of the updated armor or null if it couldn't be updated
async function updateArmor(armor) {
  try {
    let id = armor._id;
    delete armor._id; // delete the _id from the object because the _id cannot be updated
    const collection = db.collection("armor");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.updateOne(query, { $set: armor });

    if (result.matchedCount === 0) {
      console.log("No armor with id " + id);
      // TODO: error handling
    } else {
      console.log("Armor with id " + id + " has been updated.");
      return id;
    }
  } catch (error) {
    // TODO: error handling
    console.log(error.message);
  }
  return null;
}

// Delete armor by id
// Returns: id of the deleted armor or null if it couldn't be deleted
async function deleteArmor(id) {
  try {
    const collection = db.collection("armor");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("No armor with id " + id);
    } else {
      console.log("Armor with id " + id + " has been successfully deleted.");
      return id;
    }
  } catch (error) {
    // TODO: error handling
    console.log(error.message);
  }
  return null;
}


// Get all weapons
async function getWeapons() {
  let weapons = [];
  try {
    const collection = db.collection("weapon");
    // You can specify a query/filter here
    const query = {};

    // Get all objects that match the query
    weapons = await collection.find(query).toArray();
    weapons.forEach((weapon) => {
      weapon._id = weapon._id.toString(); // convert ObjectId to String
    });
  } catch (error) {
    console.log(error);
    // TODO: error handling
  }
  return weapons;
}

// Get weapon by id
async function getWeapon(id) {
  let weapon = null;
  try {
    const collection = db.collection("weapon");
    const query = { _id: new ObjectId(id) }; // filter by id
    weapon = await collection.findOne(query);

    if (!weapon) {
      console.log("No weapon with id " + id);
      // TODO: error handling
    } else {
      weapon._id = weapon._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    // TODO: error handling
    console.log(error.message);
  }
  return weapon;
}

// Create weapon
// Example weapon object:
/* 
{
  name: "Blade of Mercy",
  image: "https://example.com/images/weapons/...",
  description: "A fast and sharp blade...",
  category: "Sword",
  damage: [
    { name: "Physical", amount: 100 },
    { name: "Magic", amount: 50 }
  ],
  weight: 3.5
}
*/
async function createWeapon(weapon) {
  try {
    const collection = db.collection("weapon");
    const result = await collection.insertOne(weapon);
    return result.insertedId.toString(); // convert ObjectId to String
  } catch (error) {
    // TODO: error handling
    console.log(error.message);
  }
  return null;
}

// Update weapon
// Example weapon object:
/* 
{
  _id: "6630e72c95e12055f661ff13",
  name: "Blade of Mercy",
  image: "https://example.com/images/weapons/...",
  description: "Updated description...",
  category: "Sword",
  damage: [...],
  weight: 3.5
}
*/
// Returns: id of the updated weapon or null if it couldn't be updated
async function updateWeapon(weapon) {
  try {
    let id = weapon._id;
    delete weapon._id; // delete the _id from the object because the _id cannot be updated
    const collection = db.collection("weapon");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.updateOne(query, { $set: weapon });

    if (result.matchedCount === 0) {
      console.log("No weapon with id " + id);
      // TODO: error handling
    } else {
      console.log("Weapon with id " + id + " has been updated.");
      return id;
    }
  } catch (error) {
    // TODO: error handling
    console.log(error.message);
  }
  return null;
}

// Delete weapon by id
// Returns: id of the deleted weapon or null if it couldn't be deleted
async function deleteWeapon(id) {
  try {
    const collection = db.collection("weapon");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("No weapon with id " + id);
    } else {
      console.log("Weapon with id " + id + " has been successfully deleted.");
      return id;
    }
  } catch (error) {
    // TODO: error handling
    console.log(error.message);
  }
  return null;
}

// Export all functions so they can be used in other files
export default {
  getArmors,
  getArmor,
  createArmor,
  updateArmor,
  deleteArmor,
  getWeapons,
  getWeapon,
  createWeapon,
  updateWeapon,
  deleteWeapon,
};

