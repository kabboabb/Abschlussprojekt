<script>
  let { data } = $props();

  // State to hold the selected armors and weapon
  let selectedHelm = $state(null);
  let selectedLegArmor = $state(null);
  let selectedChestArmor = $state(null);
  let selectedGauntlets = $state(null);
  let selectedWeapon = $state(null);

  // Define individual stat variables for armor
  let weight = $state(0);
  let phy = $state(0);
  let strike = $state(0);
  let slash = $state(0);
  let pierce = $state(0);
  let magic = $state(0);
  let fire = $state(0);
  let ligt = $state(0);
  let holy = $state(0);
  let immunity = $state(0);
  let robustness = $state(0);
  let focus = $state(0);
  let vitality = $state(0);
  let poise = $state(0);

  // Define individual stat variables for weapon
  let weaponPhy = $state(0);
  let weaponMag = $state(0);
  let weaponFire = $state(0);
  let weaponLigt = $state(0);
  let weaponHoly = $state(0);
  let weaponCrit = $state(0);
  let weaponScalesStr = $state("");
  let weaponScalesDex = $state("");
  let weaponScalesInt = $state("");
  let weaponScalesArc = $state("");
  let weaponScalesFai = $state("");




  // Function to calculate total armor stats
  function calculateTotalStats() {
    // Reset totals for armor
    weight = phy = strike = slash = pierce = magic = fire = ligt = holy = immunity = robustness = focus = vitality = poise = 0;

    // Array of selected armors
    const armors = [selectedHelm, selectedLegArmor, selectedChestArmor, selectedGauntlets];

    // Add stats of each selected armor
    armors.forEach((armor) => {
      if (armor) {
        weight +=armor.weight;
        phy += armor.Phy;
        strike +=armor.Strike;
        slash +=armor.Slash;
        pierce += armor.Pierce;
        magic +=armor.Magic;
        fire += armor.Fire;
        ligt += armor.Ligt;
        holy +=armor.Holy;
        immunity += armor.Immunity;
        robustness +=armor.Robustness;
        focus += armor.Focus;
        vitality +=armor.Vitality;
        poise +=armor.Poise;
      }
    });
  }

  // Function to update weapon stats
  function updateWeaponStats(weaponId) {
    const weapon = data.weapons.find((w) => w._id === weaponId);
    selectedWeapon = weapon;
    if (weapon) {
      weaponPhy =weapon.Phy;
      weaponMag =weapon.Mag;
      weaponFire =weapon.Fire;
      weaponLigt = weapon.Ligt;
      weaponHoly =weapon.Holy;
      weaponCrit = weapon.Crit;
      weaponScalesStr = weapon.scalesStr|| "does not scale";
      weaponScalesDex = weapon.scalesDex|| "does not scale";
      weaponScalesArc = weapon.scalesArc|| "does not scale";
      weaponScalesInt = weapon.scalesInt|| "does not scale";
      weaponScalesFai = weapon.scalesFai|| "does not scale";
    }
  }

  // Update selected armor when a dropdown value changes
  function updateSelectedArmor(category, armorId) {
    const armor = data.armor.find((armor) => armor._id === armorId);
    if (category === "Helm") selectedHelm = armor;
    if (category === "Leg Armor") selectedLegArmor = armor;
    if (category === "Chest Armor") selectedChestArmor = armor;
    if (category === "Gauntlets") selectedGauntlets = armor;

    // Recalculate totals after selecting armor
    calculateTotalStats();
  }
</script>

<div>
  <h2>Select Helm</h2>
  <select onchange={(e) => updateSelectedArmor("Helm", e.target.value)}>
    <option value="" disabled selected>Select an armor</option>
    {#each data.armor as armor (armor._id)}
      {#if armor.category === "Helm"}
        <option value={armor._id}>{armor.name}</option>
      {/if}
    {/each}
  </select>

  <h2>Select Leg Armor</h2>
  <select onchange={(e) => updateSelectedArmor("Leg Armor", e.target.value)}>
    <option value="" disabled selected>Select an armor</option>
    {#each data.armor as armor (armor._id)}
      {#if armor.category === "Leg Armor"}
        <option value={armor._id}>{armor.name}</option>
      {/if}
    {/each}
  </select>

  <h2>Select Chest Armor</h2>
  <select onchange={(e) => updateSelectedArmor("Chest Armor", e.target.value)}>
    <option value="" disabled selected>Select an armor</option>
    {#each data.armor as armor (armor._id)}
      {#if armor.category === "Chest Armor"}
        <option value={armor._id}>{armor.name}</option>
      {/if}
    {/each}
  </select>

  <h2>Select Gauntlet Armor</h2>
  <select onchange={(e) => updateSelectedArmor("Gauntlets", e.target.value)}>
    <option value="" disabled selected>Select an armor</option>
    {#each data.armor as armor (armor._id)}
      {#if armor.category === "Gauntlets"}
        <option value={armor._id}>{armor.name}</option>
      {/if}
    {/each}
  </select>

  <h2>Select Your Weapon</h2>
  <select onchange={(e) => updateWeaponStats(e.target.value)}>
    <option value="" disabled selected>Select a weapon</option>
    {#each data.weapons as weapon}
      <option value={weapon._id}>{weapon.name}</option>
    {/each}
  </select>

  <h2>Total Armor Stats</h2>
  <div>
    {#if selectedHelm|| selectedLegArmor|| selectedChestArmor|| selectedGauntlets}
    <p>Weight: {weight}</p>
    <p>Phy: {phy}</p>
    <p>Strike: {strike}</p>
    <p>Slash: {slash}</p>
    <p>Pierce: {pierce}</p>
    <p>Magic: {magic}</p>
    <p>Fire: {fire}</p>
    <p>Ligt: {ligt}</p>
    <p>Holy: {holy}</p>
    <p>Immunity: {immunity}</p>
    <p>Robustness: {robustness}</p>
    <p>Focus: {focus}</p>
    <p>Vitality: {vitality}</p>
    <p>Poise: {poise}</p>
    {:else}
    <p>Please select a weapon to see its stats.</p>
  {/if}
  </div>

  <h2>Selected Weapon Stats</h2>
  {#if selectedWeapon}
    <div>
      <p>Phy: {weaponPhy}</p>
      <p>Mag: {weaponMag}</p>
      <p>Fire: {weaponFire}</p>
      <p>Ligt: {weaponLigt}</p>
      <p>Holy: {weaponHoly}</p>
      <p>Crit: {weaponCrit}</p>
      <p>Scales Str: {weaponScalesStr}</p>
      <p>Scales Dex: {weaponScalesDex}</p>
      <p>Scales Int: {weaponScalesInt}</p>
      <p>Scales Arc: {weaponScalesArc}</p>
      <p>Scales Fai: {weaponScalesFai}</p>
    </div>
  {:else}
    <p>Please select a weapon to see its stats.</p>
  {/if}
</div>
