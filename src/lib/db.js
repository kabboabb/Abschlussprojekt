import { MongoClient, ObjectId } from "mongodb"; // See https://www.mongodb.com/docs/drivers/node/current/quick-start/
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("Eldenring"); // select database

//////////////////////////////////////////
// Armors
//////////////////////////////////////////

// Get all weapons
async function getArmors() {
  let armors = [];
  try {
    const collection = db.collection("armor");
    // You can specify a query/filter here
    const query = {};

    // Get all objects that match the query
    armors = await collection.find(query).toArray();
    armors.forEach((armor) => {
      armor._id = armor._id.toString(); // convert ObjectId to String
    });
  } catch (error) {
    console.log(error);
    // TODO: error handling
  }
  return armors;
}

// Get weapon by id
async function getArmor(id) {
  let armor = null;
  try {
    const collection = db.collection("armor");
    const query = { _id: new ObjectId(id) }; // filter by id
    armor = await collection.findOne(query);

    if (!armor) {
      console.log("No weapon with id " + id);
      // TODO: error handling
    } else {
      armor._id = armor._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    // TODO: error handling
    console.log(error.message);
  }
  return armor;
}

async function createArmor(armor) {
  armor.image = "/genericarmor.jpg";
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


async function createWeapon(weapon) {
  weapon.image = "/genericweapon.jpg";
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

// Get all NPCs
async function getNPCs() {
  let npcs = [];
  try {
    const collection = db.collection("npc");
    // You can specify a query/filter here
    const query = {};

    // Get all objects that match the query
    npcs = await collection.find(query).toArray();
    npcs.forEach((npc) => {
      npc._id = npc._id.toString(); // convert ObjectId to String
    });
  } catch (error) {
    console.log(error);
    // TODO: error handling
  }
  return npcs;
}

// Get NPC by id
async function getNPC(id) {
  let npc = null;
  try {
    const collection = db.collection("npc");
    const query = { _id: new ObjectId(id) }; // filter by id
    npc = await collection.findOne(query);

    if (!npc) {
      console.log("No NPC with id " + id);
      // TODO: error handling
    } else {
      npc._id = npc._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    // TODO: error handling
    console.log(error.message);
  }
  return npc;
}

// Create NPC
// Example NPC object:
async function createNPC(npc) {
  npc.image = "/genericnpc.jpg";
  try {
    const collection = db.collection("npc");
    const result = await collection.insertOne(npc);
    return result.insertedId.toString(); // convert ObjectId to String
  } catch (error) {
    // TODO: error handling
    console.log(error.message);
  }
  return null;
}

// Update NPC
// Returns: id of the updated NPC or null if it couldn't be updated
async function updateNPC(npc) {
  try {
    let id = npc._id;
    delete npc._id; // delete the _id from the object because the _id cannot be updated
    const collection = db.collection("npc");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.updateOne(query, { $set: npc });

    if (result.matchedCount === 0) {
      console.log("No NPC with id " + id);
      // TODO: error handling
    } else {
      console.log("NPC with id " + id + " has been updated.");
      return id;
    }
  } catch (error) {
    // TODO: error handling
    console.log(error.message);
  }
  return null;
}

// Delete NPC by id
// Returns: id of the deleted NPC or null if it couldn't be deleted
async function deleteNPC(id) {
  try {
    const collection = db.collection("npc");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("No NPC with id " + id);
    } else {
      console.log("NPC with id " + id + " has been successfully deleted.");
      return id;
    }
  } catch (error) {
    // TODO: error handling
    console.log(error.message);
  }
  return null;
}
// Get all items
async function getItems() {
  let items = [];
  try {
    const collection = db.collection("items");
    // You can specify a query/filter here
    const query = {};

    // Get all objects that match the query
    items = await collection.find(query).toArray();
    items.forEach((item) => {
      item._id = item._id.toString(); // convert ObjectId to String
    });
  } catch (error) {
    console.log(error);
    // TODO: error handling
  }
  return items;
}

// Get item by id
async function getItem(id) {
  let item = null;
  try {
    const collection = db.collection("items");
    const query = { _id: new ObjectId(id) }; // filter by id
    item = await collection.findOne(query);

    if (!item) {
      console.log("No item with id " + id);
      // TODO: error handling
    } else {
      item._id = item._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    // TODO: error handling
    console.log(error.message);
  }
  return item;
}

// Create item
async function createItem(item) {
  item.image = "/genericitem.jpg";
  try {
    const collection = db.collection("items");
    const result = await collection.insertOne(item);
    return result.insertedId.toString(); // convert ObjectId to String
  } catch (error) {
    // TODO: error handling
    console.log(error.message);
  }
  return null;
}

// Update item
async function updateItem(item) {
  try {
    let id = item._id;
    delete item._id; // delete the _id from the object because the _id cannot be updated
    const collection = db.collection("items");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.updateOne(query, { $set: item });

    if (result.matchedCount === 0) {
      console.log("No item with id " + id);
      // TODO: error handling
    } else {
      console.log("Item with id " + id + " has been updated.");
      return id;
    }
  } catch (error) {
    // TODO: error handling
    console.log(error.message);
  }
  return null;
}

// Delete item by id
// Returns: id of the deleted item or null if it couldn't be deleted
async function deleteItem(id) {
  try {
    const collection = db.collection("items");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("No item with id " + id);
    } else {
      console.log("Item with id " + id + " has been successfully deleted.");
      return id;
    }
  } catch (error) {
    // TODO: error handling
    console.log(error.message);
  }
  return null;
}

// Get all bosses
async function getBosses() {
  let bosses = [];
  try {
    const collection = db.collection("bosses");
    // You can specify a query/filter here
    const query = {};

    // Get all objects that match the query
    bosses = await collection.find(query).toArray();
    bosses.forEach((boss) => {
      boss._id = boss._id.toString(); // convert ObjectId to String
    });
  } catch (error) {
    console.log(error);
    // TODO: error handling
  }
  return bosses;
}

// Get boss by id
async function getBoss(id) {
  let boss = null;
  try {
    const collection = db.collection("bosses");
    const query = { _id: new ObjectId(id) }; // filter by id
    boss = await collection.findOne(query);

    if (!boss) {
      console.log("No boss with id " + id);
      // TODO: error handling
    } else {
      boss._id = boss._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    // TODO: error handling
    console.log(error.message);
  }
  return boss;
}

// Create boss
async function createBoss(boss) {
  boss.image = "/genericboss.jpg";
  try {
    const collection = db.collection("bosses");
    const result = await collection.insertOne(boss);
    return result.insertedId.toString(); // convert ObjectId to String
  } catch (error) {
    // TODO: error handling
    console.log(error.message);
  }
  return null;
}

// Update boss
// Returns: id of the updated boss or null if it couldn't be updated
async function updateBoss(boss) {
  try {
    let id = boss._id;
    delete boss._id; // delete the _id from the object because the _id cannot be updated
    const collection = db.collection("bosses");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.updateOne(query, { $set: boss });

    if (result.matchedCount === 0) {
      console.log("No boss with id " + id);
      // TODO: error handling
    } else {
      console.log("Boss with id " + id + " has been updated.");
      return id;
    }
  } catch (error) {
    // TODO: error handling
    console.log(error.message);
  }
  return null;
}

// Delete boss by id
// Returns: id of the deleted boss or null if it couldn't be deleted
async function deleteBoss(id) {
  try {
    const collection = db.collection("bosses");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("No boss with id " + id);
    } else {
      console.log("Boss with id " + id + " has been successfully deleted.");
      return id;
    }
  } catch (error) {
    // TODO: error handling
    console.log(error.message);
  }
  return null;
}

// Get all builds
async function getBuilds() {
  let builds = [];
  try {
    const collection = db.collection("builds");
    // You can specify a query/filter here
    const query = {};

    // Get all objects that match the query
    builds = await collection.find(query).toArray();
    builds.forEach((build) => {
      build._id = build._id.toString(); // convert ObjectId to String
    });
  } catch (error) {
    console.log(error);
    // TODO: error handling
  }
  return builds;
}

// Get build by id
async function getBuild(id) {
  let build = null;
  try {
    const collection = db.collection("builds");
    const query = { _id: new ObjectId(id) }; // filter by id
    build = await collection.findOne(query);

    if (!build) {
      console.log("No build with id " + id);
      // TODO: error handling
    } else {
      build._id = build._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    // TODO: error handling
    console.log(error.message);
  }
  return build;
}

// Create build
async function createBuild(build) {
  build.image = "/genericbuild.jpg";
  try {
    const collection = db.collection("builds");
    const result = await collection.insertOne(build);
    return result.insertedId.toString(); // convert ObjectId to String
  } catch (error) {
    // TODO: error handling
    console.log(error.message);
  }
  return null;
}

// Update build
// Returns: id of the updated build or null if it couldn't be updated
async function updateBuild(build) {
  try {
    let id = build._id;
    delete build._id; // delete the _id from the object because the _id cannot be updated
    const collection = db.collection("builds");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.updateOne(query, { $set: build });

    if (result.matchedCount === 0) {
      console.log("No build with id " + id);
      // TODO: error handling
    } else {
      console.log("Build with id " + id + " has been updated.");
      return id;
    }
  } catch (error) {
    // TODO: error handling
    console.log(error.message);
  }
  return null;
}

// Delete build by id
// Returns: id of the deleted build or null if it couldn't be deleted
async function deleteBuild(id) {
  try {
    const collection = db.collection("builds");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("No build with id " + id);
    } else {
      console.log("Build with id " + id + " has been successfully deleted.");
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
  getNPCs,
  getNPC,
  createNPC,
  updateNPC,
  deleteNPC,
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
  getBosses,
  getBoss,
  createBoss,
  updateBoss,
  deleteBoss,
  getBuilds,
  getBuild,
  createBuild,
  updateBuild,
  deleteBuild,
};

