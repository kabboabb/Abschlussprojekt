import db from "$lib/db";

export const actions = {
    create: async ({ request }) => {

    try {
        let data = await request.formData();
        console.log(data);
        let collection = data.get("entryType");

        if (collection === "armor") {
            let armors = {
                name : data.get("name"),
                description : data.get("description"),
                category : data.get("category"),
                weight : data.get("weight"),
                strike : data.get("strike"),
                slash : data.get("slash"),
                pierce : data.get("pierce"),
                magic : data.get("magic"),
                fire : data.get("fire"),
                ligt : data.get("ligt"),
                holy : data.get("holy"),
                immunity : data.get("immunity"),
                robustness : data.get("robustness"),    
                focus : data.get("focus"),
                vitality : data.get("vitality"),
                poise : data.get("poise"),
            }
            await db.createArmor(armors);

        } else if (collection === "weapon") {
            let weapons = {
                name : data.get("name"),
                description : data.get("description"),
                category : data.get("category"),
                weight : data.get("weight"),
                phy: data.get("phy"),
                mag: data.get("mag"),
                fire: data.get("fire"),
                ligt: data.get("ligt"),
                holy: data.get("holy"),
                crit: data.get("crit"),
                defencePhy: data.get("defencePhy"),
                defenceMag: data.get("defenceMag"),
                defenceFire: data.get("defenceFire"),
                defenceLigt: data.get("defenceLigt"),
                defenceHoly: data.get("defenceHoly"),
                defenceCrit: data.get("defenceCrit"),
                scalesStr: data.get("scalesStr"),
                scalesDex: data.get("scalesDex"),
                scalesInt: data.get("scalesInt"),
                scalesArc: data.get("scalesArc"),
                scalesFai: data.get("scalesFai"),
            }
            await db.createWeapon(weapons);

        } else if (collection === "npc") {
            let npcs = {
                name: data.get("name"),
                quote: data.get("quote"),
                location: data.get("location"),
                role: data.get("role"),
            }
            await db.createNPC(npcs);

        } else if (collection === "boss") {
            let bosses = {
                name: data.get("name"),
                region: data.get("region"),
                description: data.get("description"),
                location: data.get("location"),
                drops: data.get("drops"),
                healthPoints: data.get("healthPoints"),
            }
            await db.createBoss(bosses);

        } else if (collection === "item") {
            let items = {
                name: data.get("name"),
                description: data.get("description"),
                type: data.get("type"),
                effect: data.get("effect"),

            }
            await db.createItem(items);
        }
        return {success: true};
        
    } catch (error) {
        return {success: false, error};
    }
}
};
