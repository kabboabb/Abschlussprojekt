import db from "$lib/db";

export async function load (){
    return{
        armors: await db.getArmors(),
        weapons: await db.getWeapons(),
        npcs: await db.getNPCs(),
        bosses: await db.getBosses(),
        items: await db.getItems(),
        }
}