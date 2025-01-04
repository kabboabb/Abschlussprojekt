<script>
    let { data } = $props();
    let weapons = data.weapons;
</script>

<a href="/loreDescription">Back</a>
<div>
    <div>
        <img class="img-fluid" src={weapons.image} alt={weapons.name} />
      </div>
    <strong>Description: </strong> {weapons.description}
  </div>
  <div>
    <strong>Category: </strong> {weapons.category}
  </div>
  <div>
    <strong>Weight: </strong> {weapons.weight}
  </div>
  <div>
    <strong>Physical: </strong> {weapons.Phy}
  </div>
  <div>
    <strong>Magic: </strong> {weapons.Mag}
  </div>
  <div>
    <strong>Fire: </strong> {weapons.Fire}
  </div>
  <div>
    <strong>Lightning: </strong> {weapons.Ligt}
  </div>
  <div>
    <strong>Holy: </strong> {weapons.Holy}
  </div>
  <div>
    <strong>Critical: </strong> {weapons.Crit}
  </div>
  <div>
    <strong>Defence Physical: </strong> {weapons['Defence Phy']}
  </div>
  <div>
    <strong>Defence Magic: </strong> {weapons['Defence Mag']}
  </div>
  <div>
    <strong>Defence Fire: </strong> {weapons['Defence Fire']}
  </div>
  <div>
    <strong>Defence Lightning: </strong> {weapons['Defence Ligt']}
  </div>
  <div>
    <strong>Defence Holy: </strong> {weapons['Defence Holy']}
  </div>
  <div>
    <strong>Defence Critical: </strong> {weapons['Defence Crit']}
  </div>
  {#if weapons.scalesStr}
    <div>
      <strong>Strength Scaling: </strong> {weapons.scalesStr}
    </div>
  {/if}
  {#if weapons.scalesDex}
    <div>
      <strong>Dexterity Scaling: </strong> {weapons.scalesDex}
    </div>
  {/if}
  {#if weapons.scalesInt}
    <div>
      <strong>Intelligence Scaling: </strong> {weapons.scalesInt}
    </div>
  {/if}
  {#if weapons.scalesArc}
    <div>
      <strong>Arcane Scaling: </strong> {weapons.scalesArc}
    </div>
  {/if}
  {#if weapons.scalesFai}
    <div>
      <strong>Faith Scaling: </strong> {weapons.scalesFai}
    </div>
  {/if}
  
