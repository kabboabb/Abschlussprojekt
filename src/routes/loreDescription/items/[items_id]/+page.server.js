import db from "$lib/db";

export async function load ({params}){
    return{
        items: await db.getItem(params.items_id),
    }
}