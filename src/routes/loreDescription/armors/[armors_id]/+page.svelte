<script>
    let { data } = $props();
    let armors = data.armors;
</script>

<a href="/loreDescription">Back</a>
<div>
    <img class="img-fluid" src={armors.image} alt={armors.name} />
</div>
<div class="details">
    <div class="title">
        {armors.name}
    </div>
    <div>
        Description: {armors.description}
    </div>
    <div>
        Category: {armors.category}
    </div>
    <div>
        Pthysical: {armors.Phy}
    </div>
    <div>
        Strike: {armors.Strike}
    </div>
    <div>
        Slash: {armors.Slash}
    </div>
</div>
