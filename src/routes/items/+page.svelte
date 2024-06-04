<script>
  export let data;
</script>

<h1>Items</h1>
<div>
  {#if data.items && data.items.length > 0}
    {#each data.items as item}
      <form method="POST">
        <div key={item.id}>
          <div>
            <div>#{item.id} - {item.title}</div>
            <div>${item.price}</div>
            <input hidden name="id" value={item.id} />
          </div>
          <div>
            <a href={`/items/edit/${item.id}`}>Edit</a>
            <button formaction="?/delete">Delete</button>
          </div>
        </div>
      </form>
    {/each}
  {:else}
    <p>No items found.</p>
  {/if}
</div>
<div>
  <a href="/items/create">Create New Item</a>
</div>