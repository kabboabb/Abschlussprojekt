    <script>
        let { data } = $props();
        let armors = data.armors;
    </script>
    
    <div class="card">
        <div class="card-header">
            <h3>{armors.name}</h3>
        </div>
        <div class="card-body">
            <div class="text-center">
                <img class="img" src={armors.image} alt={armors.name} />
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><strong>Description:</strong> {armors.description}</li>
                <li class="list-group-item"><strong>Category:</strong> {armors.category}</li>
                <li class="list-group-item"><strong>Physical:</strong> {armors.Phy}</li>
                <li class="list-group-item"><strong>Strike:</strong> {armors.Strike}</li>
                <li class="list-group-item"><strong>Slash:</strong> {armors.Slash}</li>
                <li class="list-group-item"><strong>Pierce:</strong> {armors.Pierce}</li>
                <li class="list-group-item"><strong>Magic:</strong> {armors.Magic}</li>
                <li class="list-group-item"><strong>Fire:</strong> {armors.Fire}</li>
                <li class="list-group-item"><strong>Lightning:</strong> {armors.Ligt}</li>
                <li class="list-group-item"><strong>Holy:</strong> {armors.Holy}</li>
                <li class="list-group-item"><strong>Immunity:</strong> {armors.Immunity}</li>
                <li class="list-group-item"><strong>Robustness:</strong> {armors.Robustness}</li>
                <li class="list-group-item"><strong>Focus:</strong> {armors.Focus}</li>
                <li class="list-group-item"><strong>Vitality:</strong> {armors.Vitality}</li>
                <li class="list-group-item"><strong>Poise:</strong> {armors.Poise}</li>
            </ul>
        </div>
    </div>
    <a href="/loreDescription" class="btn btn-primary">Back</a>