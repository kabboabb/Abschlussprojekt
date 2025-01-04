import db from "$lib/db";

export async function load ({params}){
    return{
        armors: await db.getArmor(params.armors_id),
        weapons: await db.getWeapon(params.weapons_id),
        npcs: await db.getNPC(params.npcs_id),

    }
}