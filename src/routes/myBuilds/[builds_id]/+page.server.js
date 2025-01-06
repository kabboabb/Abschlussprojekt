import db from "$lib/db";

export async function load ({params}){
    return{
        builds: await db.getBuild(params.builds_id),
    }
}