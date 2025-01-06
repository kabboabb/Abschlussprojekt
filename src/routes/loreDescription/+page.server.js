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

export const actions = {
    delete: async ({ request }) => {
        const data = await request.formData();
        let id = data.get("id");
        let collection = data.get("collection");

        if (collection === "armors") {
            await db.deleteArmor(id);
        } else if (collection === "weapons") {
            await db.deleteWeapon(id);
        } else if (collection === "npcs") {
            await db.deleteNPC(id);
        } else if (collection === "bosses") {
            await db.deleteBoss(id);
        } else if (collection === "items") {
            await db.deleteItem(id);
        }
    }
};
