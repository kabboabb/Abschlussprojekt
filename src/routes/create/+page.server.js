import db from "$lib/db";

export const actions = {
    create: async ({ request }) => {
        let data = await request.formData();
        console.log(data);
        let imageFile = data.get("image"); // Get the uploaded file

        const chunks = [];
        for await (const chunk of imageFile.stream()) {
            chunks.push(chunk);
        }
        const buffer = Buffer.concat(chunks); // Combine chunks into a single buffer

        // Convert the buffer to a Base64 string
        const base64Image = `data:${imageFile.type};base64,${buffer.toString("base64")}`;

        let weapon = {
            name: data.get("name"),
            category: data.get("category"),
            description: data.get("description"),
            image: base64Image,// Store the Base64 string
        };

        await db.createWeapon(weapon); // Save the movie in the database
    }
};
