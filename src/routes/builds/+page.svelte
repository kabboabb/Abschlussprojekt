<script>
    let { data } = $props();
</script>

<div>
  <h2>Select Your Armor</h2>
  <select>
    <option value="" disabled selected>Select an armor</option>
    {#each data.armor as armor}
      <option value="{armor._id}">{armor.name}</option>
    {/each}
  </select>

  <h2>Select Your Weapon</h2>
  <select>
    <option value="" disabled selected>Select a weapon</option>
    {#each data.weapons as weapon}
      <option value="{weapon._id}">{weapon.name}</option>
    {/each}
  </select>
</div>
