<script>
  let { data } = $props();
  let weapons = data.weapons;
</script>

<div class="card ">
  <div class="card-header">
      <h3>{weapons.name}</h3>
  </div>
  <div class="card-body">
      <div class="text-center">
          <img class="img" src={weapons.image} alt={weapons.name} />
      </div>
      <p><strong>Description:</strong> {weapons.description}</p>
      <ul class="list-group list-group-flush">
          <li class="list-group-item"><strong>Category:</strong> {weapons.category}</li>
          <li class="list-group-item"><strong>Weight:</strong> {weapons.weight}</li>
          <li class="list-group-item"><strong>Physical:</strong> {weapons.Phy}</li>
          <li class="list-group-item"><strong>Magic:</strong> {weapons.Mag}</li>
          <li class="list-group-item"><strong>Fire:</strong> {weapons.Fire}</li>
          <li class="list-group-item"><strong>Lightning:</strong> {weapons.Ligt}</li>
          <li class="list-group-item"><strong>Holy:</strong> {weapons.Holy}</li>
          <li class="list-group-item"><strong>Critical:</strong> {weapons.Crit}</li>
          <li class="list-group-item"><strong>Defence Physical:</strong> {weapons['Defence Phy']}</li>
          <li class="list-group-item"><strong>Defence Magic:</strong> {weapons['Defence Mag']}</li>
          <li class="list-group-item"><strong>Defence Fire:</strong> {weapons['Defence Fire']}</li>
          <li class="list-group-item"><strong>Defence Lightning:</strong> {weapons['Defence Ligt']}</li>
          <li class="list-group-item"><strong>Defence Holy:</strong> {weapons['Defence Holy']}</li>
          <li class="list-group-item"><strong>Defence Critical:</strong> {weapons['Defence Crit']}</li>
            {#if weapons.scalesStr}
            <li class="list-group-item"><strong>Strength Scaling:</strong> {weapons.scalesStr}</li>
          {/if}
          {#if weapons.scalesDex}
            <li class="list-group-item"><strong>Dexterity Scaling:</strong> {weapons.scalesDex}</li>
          {/if}
          {#if weapons.scalesInt}
            <li class="list-group-item"><strong>Intelligence Scaling:</strong> {weapons.scalesInt}</li>
          {/if}
          {#if weapons.scalesArc}
            <li class="list-group-item"><strong>Arcane Scaling:</strong> {weapons.scalesArc}</li>
          {/if}
          {#if weapons.scalesFai}
            <li class="list-group-item"><strong>Faith Scaling:</strong> {weapons.scalesFai}</li>
          {/if}
      </ul>
  </div>
</div>
<a href="/loreDescription" class="btn btn-primary">Back</a>

