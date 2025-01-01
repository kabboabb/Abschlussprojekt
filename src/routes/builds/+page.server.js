import db from "$lib/db";

export async function load (){
    return{
        armor: await db.getArmors(),
        weapons: await db.getWeapons()
        }
}