<script>
  let { data, form } = $props();

  let selectedHelm = $state(null);
  let selectedLegArmor = $state(null);
  let selectedChestArmor = $state(null);
  let selectedGauntlets = $state(null);
  let selectedWeapon = $state(null);

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

  function updateSelectedArmor(category, armorName) {
    const armor = data.armor.find((armor) => armor.name === armorName);
    if (category === "Helm") selectedHelm = armor;
    if (category === "Leg Armor") selectedLegArmor = armor;
    if (category === "Chest Armor") selectedChestArmor = armor;
    if (category === "Gauntlets") selectedGauntlets = armor;

    calculateTotalStats();
  }

  function calculateTotalStats() {
    weight =
      phy =
      strike =
      slash =
      pierce =
      magic =
      fire =
      ligt =
      holy =
      immunity =
      robustness =
      focus =
      vitality =
      poise =
        0;

    const armors = [
      selectedHelm,
      selectedLegArmor,
      selectedChestArmor,
      selectedGauntlets,
    ];

    armors.forEach((armor) => {
        weight += armor.weight;
        phy += armor.Phy;
        strike += armor.Strike;
        slash += armor.Slash;
        pierce += armor.Pierce;
        magic += armor.Magic;
        fire += armor.Fire;
        ligt += armor.Ligt;
        holy += armor.Holy;
        immunity += armor.Immunity;
        robustness += armor.Robustness;
        focus += armor.Focus;
        vitality += armor.Vitality;
        poise += armor.Poise;
    });
  }

  function updateWeaponStats(weaponName) {
    const weapon = data.weapons.find((weapon) => weapon.name === weaponName);
    selectedWeapon = weapon;
      weaponPhy = weapon.Phy;
      weaponMag = weapon.Mag;
      weaponFire = weapon.Fire;
      weaponLigt = weapon.Ligt;
      weaponHoly = weapon.Holy;
      weaponCrit = weapon.Crit;
      weaponScalesStr = weapon.scalesStr || "does not scale";
      weaponScalesDex = weapon.scalesDex || "does not scale";
      weaponScalesArc = weapon.scalesArc || "does not scale";
      weaponScalesInt = weapon.scalesInt || "does not scale";
      weaponScalesFai = weapon.scalesFai || "does not scale";
  }
</script>

<h1>Create A New Build</h1>

<form method="Post" action="?/create">
  <div class="mb-3">
    <label for="inputName" class="form-label">Build Name</label>
    <input
        name="buildName"
        type="text"
        id="inputName"
        class="form-control"
        placeholder="Build Name"
    />
</div>
  <div class="container my-4">
    <div class="row">
      <div class="col-md-4">
        <h2 class="text-center">Select Helm</h2>
        <select
          class="form-select mb-3" name="helm"
          onchange={(e) => updateSelectedArmor("Helm", e.target.value)}
        >
          <option value="" disabled selected>Select an armor</option>
          {#each data.armor as armor}
            {#if armor.category === "Helm"}
              <option value={armor.name}>{armor.name}</option>
            {/if}
          {/each}
        </select>
      </div>
      <div class="col-md-4">
        <h2 class="text-center">Select Leg Armor</h2>
        <select
          class="form-select mb-3" name = "legArmor"
          onchange={(e) => updateSelectedArmor("Leg Armor", e.target.value)}
        >
          <option value="" disabled selected>Select an armor</option>
          {#each data.armor as armor}
            {#if armor.category === "Leg Armor"}
              <option value={armor.name}>{armor.name}</option>
            {/if}
          {/each}
        </select>
      </div>
      <div class="col-md-4">
        <h2 class="text-center">Select Chest Armor</h2>
        <select
          class="form-select mb-3" name = "chestArmor"
          onchange={(e) => updateSelectedArmor("Chest Armor", e.target.value)}
        >
          <option value="" disabled selected>Select an armor</option>
          {#each data.armor as armor}
            {#if armor.category === "Chest Armor"}
              <option value={armor.name}>{armor.name}</option>
            {/if}
          {/each}
        </select>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4">
        <h2 class="text-center">Select Gauntlet Armor</h2>
        <select
          class="form-select mb-3" name = "gauntletArmor"
          onchange={(e) => updateSelectedArmor("Gauntlets", e.target.value)}
        >
          <option value="" disabled selected>Select an armor</option>
          {#each data.armor as armor}
            {#if armor.category === "Gauntlets"}
              <option value={armor.name}>{armor.name}</option>
            {/if}
          {/each}
        </select>
      </div>
      <div class="col-md-4">
        <h2 class="text-center">Select Your Weapon</h2>
        <select
          class="form-select mb-3" name = "weapon"
          onchange={(e) => updateWeaponStats(e.target.value)}
        >
          <option value="" disabled selected>Select a weapon</option>
          {#each data.weapons as weapon}
            <option value={weapon.name}>{weapon.name}</option>
          {/each}
        </select>
      </div>
      <div class="col-md-4"></div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <div class="border p-3">
          <h2 class="text-center">Total Armor Stats</h2>
          {#if selectedHelm || selectedLegArmor || selectedChestArmor || selectedGauntlets}
            <p>Weight: </p><input type="number" name="weight" value={Math.round(weight)} readonly style="width: 100px;">
            <p>Physical: </p><input type="number" name="phy" value={phy} readonly style="width: 100px;">
            <p>Strike:</p><input type="number" name="strike" value={strike} readonly style="width: 100px;">
            <p>Slash:</p><input type="number" name="slash" value={slash} readonly style="width: 100px;">
            <p>Pierce:</p><input type="number" name="pierce" value={pierce} readonly style="width: 100px;">
            <p>Magic:</p><input type="number" name="magic" value={magic} readonly style="width: 100px;">
            <p>Fire:</p><input type="number" name="fire" value={fire} readonly style="width: 100px;">
            <p>Light:</p><input type="number" name="ligt" value={ligt} readonly style="width: 100px;">
            <p>Holy:</p><input type="number" name="holy" value={holy} readonly style="width: 100px;">
            <p>Immunity:</p><input type="number" name="immunity" value={immunity} readonly style="width: 100px;">
            <p>Robustness:</p><input type="number" name="robustness" value={robustness} readonly style="width: 100px;">
            <p>Focus:</p><input type="number" name="focus" value={focus} readonly style="width: 100px;">
            <p>Vitality:</p><input type="number" name="vitality" value={vitality} readonly style="width: 100px;">
            <p>Poise:</p><input type="number" name="poise" value={poise} readonly style="width: 100px;">
          {:else}
            <p>Please select a weapon to see its stats.</p>
          {/if}
        </div>
      </div>
      <div class="col-md-6">
        <div class="border p-3">
          <h2 class="text-center">Selected Weapon Stats</h2>
          {#if selectedWeapon}
            <p>Physical: </p><input type="number" name="weaponPhy" value={weaponPhy} readonly style="width: 100px;">
            <p>Magic: </p><input type="number" name="weaponMag" value={weaponMag} readonly style="width: 100px;">
            <p>Fire: </p><input type="number" name="weaponFire" value={weaponFire} readonly style="width: 100px;">
            <p>Light: </p><input type="number" name="weaponLigt" value={weaponLigt} readonly style="width: 100px;">
            <p>Holy: </p><input type="number" name="weaponHoly" value={weaponHoly} readonly style="width: 100px;">
            <p>Critical: </p><input type="number" name="weaponCrit" value={weaponCrit} readonly style="width: 100px;">
            <p>Strength Scale: </p><input type="text" name="weaponScalesStr" value={weaponScalesStr} readonly style="width: 100px;">
            <p>Dexterity Scale: </p><input type="text" name="weaponScalesDex" value={weaponScalesDex} readonly style="width: 100px;">
            <p>Intelligence Scale: </p><input type="text" name="weaponScalesInt" value={weaponScalesInt} readonly style="width: 100px;">
            <p>Arcane Scale: </p><input type="text" name="weaponScalesArc" value={weaponScalesArc} readonly style="width: 100px;">
            <p>Faith Scale: </p><input type="text" name="weaponScalesFai" value={weaponScalesFai} readonly style="width: 100px;">
          {:else}
            <p>Please select a weapon to see its stats.</p>
          {/if}
        </div>
      </div>
    </div>
    <div >
    <button class="btn btn-primary" type="submit">Save Build</button>
  </div>
  </div>
</form>

{#if form?.success}
  <div class="alert alert-success" role="alert">
    Entry successfully created!
  </div>
{:else if form?.error}
  <div class="alert alert-danger" role="alert">
    {form.error.message}
  </div>
{/if}

<style>
.border {
 width: 650px;
}
</style>