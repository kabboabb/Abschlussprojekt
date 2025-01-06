import db from "$lib/db";

export async function load (){
    return{
        builds: await db.getBuilds(),
        }
}

export const actions = {
    delete: async ({ request }) => {
        const data = await request.formData();
        console.log(data.get("id"));
        let id = data.get("id");
        await db.deleteBuild(id);
    }};
