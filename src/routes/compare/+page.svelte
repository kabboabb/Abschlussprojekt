<script>
    // Placeholder data for builds and enemies
    let builds = [
      { name: "Knight Build", attack: 150, defense: 100 },
      { name: "Mage Build", attack: 200, defense: 50 }
    ];
  
    let enemies = [
      { name: "Dragon", attack: 180, defense: 150 },
      { name: "Goblin", attack: 50, defense: 30 }
    ];
  
    let selectedBuild = null;
    let selectedEnemy = null;
    let comparison = { attackDifference: 0, defenseDifference: 0 };
  
    function compareStats() {
      if (selectedBuild && selectedEnemy) {
        comparison.attackDifference = selectedBuild.attack - selectedEnemy.attack;
        comparison.defenseDifference = selectedBuild.defense - selectedEnemy.defense;
      } else {
        comparison = { attackDifference: 0, defenseDifference: 0 };
      }
    }
  </script>
  
  
  <div class="container compare-page">
    <h1 class="text-center mb-5">Compare Your Build to an Enemy</h1>
  
    <div class="row">
      <div class="col-md-6 compare-selector">
        <h4>Select Your Build</h4>
        <select bind:value={selectedBuild} on:change={compareStats}>
          <option value="" disabled selected>Select a build</option>
          {#each builds as build}
            <option value={build}>{build.name} (Attack: {build.attack}, Defense: {build.defense})</option>
          {/each}
        </select>
      </div>
  
      <div class="col-md-6 compare-selector">
        <h4>Select an Enemy</h4>
        <select bind:value={selectedEnemy} on:change={compareStats}>
          <option value="" disabled selected>Select an enemy</option>
          {#each enemies as enemy}
            <option value={enemy}>{enemy.name} (Attack: {enemy.attack}, Defense: {enemy.defense})</option>
          {/each}
        </select>
      </div>
    </div>
  
    <div class="comparison-display mt-4">
      <h4>Comparison Results</h4>
      <p><strong>Attack Difference:</strong> {comparison.attackDifference}</p>
      <p><strong>Defense Difference:</strong> {comparison.defenseDifference}</p>
      <button class="btn btn-compare" on:click={compareStats}>Recalculate Comparison</button>
    </div>
  </div>
  