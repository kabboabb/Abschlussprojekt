import db from "$lib/db";

export async function load ({params}){
    return{
        weapons: await db.getWeapon(params.weapons_id),
    }
}