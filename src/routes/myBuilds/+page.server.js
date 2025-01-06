import db from "$lib/db";

export async function load (){
    return{
        builds: await db.getBuilds(),
        }
}