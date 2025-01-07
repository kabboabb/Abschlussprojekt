  <script>
      let { data } = $props();
      let builds = data.builds;
  </script>
  
  <div class="card">
      <div class="card-header">
          <h3>{builds.name}</h3>
      </div>
      <div class="card-body">
          <div class="text-center">
              <img class="img" src="/genericbuild.jpg" alt={builds.name} />
          </div>
          <ul class="list-group list-group-flush">
              <li class="list-group-item"><strong>Weight:</strong> {builds.weight}</li>
              <li class="list-group-item"><strong>Physical:</strong> {builds.phy}</li>
              <li class="list-group-item"><strong>Strike:</strong> {builds.strike}</li>
              <li class="list-group-item"><strong>Slash:</strong> {builds.slash}</li>
              <li class="list-group-item"><strong>Pierce:</strong> {builds.pierce}</li>
              <li class="list-group-item"><strong>Magic:</strong> {builds.magic}</li>
              <li class="list-group-item"><strong>Fire:</strong> {builds.fire}</li>
              <li class="list-group-item"><strong>Light:</strong> {builds.light}</li>
              <li class="list-group-item"><strong>Holy:</strong> {builds.holy}</li>
              <li class="list-group-item"><strong>Immunity:</strong> {builds.immunity}</li>
              <li class="list-group-item"><strong>Robustness:</strong> {builds.robustness}</li>
              <li class="list-group-item"><strong>Focus:</strong> {builds.focus}</li>
              <li class="list-group-item"><strong>Vitality:</strong> {builds.vitality}</li>
              <li class="list-group-item"><strong>Poise:</strong> {builds.poise}</li>
              <li class="list-group-item"><strong>Weapon:</strong></li>
              <li class="list-group-item"><strong>Physical:</strong> {builds.weapon.phy}</li>
              <li class="list-group-item"><strong>Magic:</strong> {builds.weapon.mag}</li>
              <li class="list-group-item"><strong>Fire:</strong> {builds.weapon.fire}</li>
              <li class="list-group-item"><strong>Lightning:</strong> {builds.weapon.ligt}</li>
              <li class="list-group-item"><strong>Holy:</strong> {builds.weapon.holy}</li>
              <li class="list-group-item"><strong>Crit:</strong> {builds.weapon.crit}</li>
              <li class="list-group-item"><strong>Scaling Strength:</strong> {builds.weapon.scalesStr}</li>
              <li class="list-group-item"><strong>Scaling Dexterity:</strong> {builds.weapon.scalesDex}</li>
              <li class="list-group-item"><strong>Scaling Intelligence:</strong> {builds.weapon.scalesInt}</li>
              <li class="list-group-item"><strong>Scaling Faith:</strong> {builds.weapon.scalesFai}</li>
              <li class="list-group-item"><strong>Scaling Arcane:</strong> {builds.weapon.scalesArc}</li>
          </ul>
      </div>
  </div>
  
  <a href="/loreDescription" class="btn btn-primary mb-4">Back</a>