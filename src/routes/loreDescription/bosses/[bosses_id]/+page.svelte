    <script>
        let { data } = $props();
        let bosses = data.bosses;
    </script>
    
    <div class="card">
        <div class="card-header">
            <h3>{bosses.name}</h3>
        </div>
        <div class="card-body">
            <div class="text-center">
                <img class="img" src={bosses.image} alt={bosses.name} />
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><strong>Region:</strong> {bosses.region}</li>
                <li class="list-group-item"><strong>Description:</strong> {bosses.description}</li>
                <li class="list-group-item"><strong>Location:</strong> {bosses.location}</li>
                <li class="list-group-item"><strong>Drops:</strong> {bosses.drops}</li>
                <li class="list-group-item"><strong>Health Points:</strong> {bosses.healthPoints}</li>
            </ul>
        </div>
    </div>
    <a href="/loreDescription" class="btn btn-primary">Back</a>
  

  