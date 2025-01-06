import db from "$lib/db";

export const actions = {
    create: async ({ request }) => {
        let data = await request.formData();
        console.log(data);

        let weapon = {
            name: data.get("name"),
            category: data.get("category"),
            description: data.get("description"),
        };

        await db.createWeapon(weapon); // Save the movie in the database
    }
};
