import db from "$lib/db";

export async function load() {
    return {
        armor: await db.getArmors(),
        weapons: await db.getWeapons()
    }
}

export const actions = {
    create: async ({ request }) => {
        let data = await request.formData();
        console.log(data);

        let build = {
            name: data.get("buildName"),
            helm: data.get("helm"),
            chestArmor: data.get("chestArmor"),
            gauntletArmor: data.get("gauntletArmor"),
            legArmor: data.get("legArmor"),
            weaponName: data.get("weapon"),
            weight: data.get("weight"),
            phy: data.get("phy"),
            strike: data.get("strike"),
            slash: data.get("slash"),
            pierce: data.get("pierce"),
            magic: data.get("magic"),
            fire: data.get("fire"),
            ligt: data.get("ligt"),
            holy: data.get("holy"),
            immunity: data.get("immunity"),
            robustness: data.get("robustness"),
            focus: data.get("focus"),
            vitality: data.get("vitality"),
            poise: data.get("poise"),
            weapon: {
            phy: data.get("weaponPhy"),
            mag: data.get("weaponMag"),
            fire: data.get("weaponFire"),
            ligt: data.get("weaponLigt"),
            holy: data.get("weaponHoly"),
            crit: data.get("weaponCrit"),
            scalesStr: data.get("weaponScalesStr"),
            scalesDex: data.get("weaponScalesDex"),
            scalesInt: data.get("weaponScalesInt"),
            scalesArc: data.get("weaponScalesArc"),
            scalesFai: data.get("weaponScalesFai"),
            },
        };

        await db.createBuild(build); // Save the movie in the database
    }
};