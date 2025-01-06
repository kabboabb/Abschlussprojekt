<script>
    let { data } = $props();
    let builds = data.builds;
</script>

<a href="/loreDescription">Back</a>
<div>
    <div>
      <img class="img-fluid" src="/genericbuild.jpg" alt={builds.name} />
    </div>
      <div>
        <strong>Weight: </strong> {builds.weight}
      </div>
      <div>
        <strong>Physical: </strong> {builds.phy}
      </div>
      <div>
        <strong>Strike: </strong> {builds.strike}
      </div>
      <div>
        <strong>Slash: </strong> {builds.slash}
      </div>
      <div>
        <strong>Pierce: </strong> {builds.pierce}
      </div>
      <div>
        <strong>Magic: </strong> {builds.magic}
      </div>
      <div>
        <strong>Fire: </strong> {builds.fire}
      </div>
      <div>
        <strong>Light: </strong> {builds.light}
      </div>
      <div>
        <strong>Holy: </strong> {builds.holy}
      </div>
      <div>
        <strong>Immunity: </strong> {builds.immunity}
      </div>
      <div>
        <strong>Robustness: </strong> {builds.robustness}
      </div>
      <div>
        <strong>Focus: </strong> {builds.focus}
      </div>
      <div>
        <strong>Vitality: </strong> {builds.vitality}
      </div>
      <div>
        <strong>Poise: </strong> {builds.poise}
      </div>
      <div>
        <strong>Weapon</strong>
      </div>
      <div>
        <strong>Physical: </strong> {builds.weapon.phy}
      </div>
      <div>
        <strong>Magic: </strong> {builds.weapon.mag}
      </div>
      <div>
        <strong>Fire: </strong> {builds.weapon.fire}
      </div>
      <div>
        <strong>Lightning: </strong> {builds.weapon.ligt}
      </div>
      <div>
        <strong>Holy: </strong> {builds.weapon.holy}
      </div>
      <div>
        <strong>Crit: </strong> {builds.weapon.crit}
      </div>
      <div>
        <strong>Scaling Strength: </strong> {builds.weapon.scalesStr}
      </div>
      <div>
        <strong>Scaling Dexterity: </strong> {builds.weapon.scalesDex}
      </div>
      <div>
        <strong>Scaling Intelligence: </strong> {builds.weapon.scalesInt}
      </div>
      <div>
        <strong>Scaling Faith: </strong> {builds.weapon.scalesFai}
      </div>
      <div>
        <strong>Scaling Arcane: </strong> {builds.weapon.scalesArc}
      </div>
</div>
      
  
