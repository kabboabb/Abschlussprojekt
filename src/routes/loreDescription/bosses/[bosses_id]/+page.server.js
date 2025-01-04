import db from "$lib/db";

export async function load ({params}){
    return{
        bosses: await db.getBoss(params.bosses_id),
    }
}