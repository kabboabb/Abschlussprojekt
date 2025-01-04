<script>
  let { weapons } = $props();
</script>

<div class="weapons-card">
  <div>
    <img class="img-fluid" src={weapons.image} alt={weapons.name} />
  </div>
  <div class="details">
    <div class="title">
      <a href={"/loreDescription/weapons/" + weapons._id}>{weapons.name}</a>
    </div>
    <div>
      <div>
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
      </div>
  </div>
</div>

    

<style>
  .weapons-card {
    border: 1px solid #555;
    height: 100%;
    background-color: #444;
    color: white;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .img-fluid {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  .details {
    padding: 1em;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .title {
    font-weight: bold;
    font-size: 1.2em;
    margin-bottom: 0.5em;
  }
  .title a {
    color: #f8d210;
    text-decoration: none;
  }
  .title a:hover {
    text-decoration: underline;
  }
  div {
    margin-bottom: 0.5em;
  }
</style>
