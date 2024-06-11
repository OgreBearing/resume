<!-- Navbar.svelte -->

<script>
  import { page } from "$app/stores";

  const paths = [
    { name: "Origin", url: "/" },
    { name: "Items", url: "/items" },
    { name: "Sales", url: "/sales" },
  ];
</script>
<div class="flex font-caps">
  <div class="bg-white px-4 py-[0.65rem]">
    <div class="container mx-auto text-gray-800 text-5xl font-semibold">Brian George</div>
  </div>

  <nav>
    {#each paths as path, index}
      <div class="inline-block" key={index}>
        <a
          href={path.url}
          class="text-2xl mb-4 hover:bg-red-300"
          class:bg-gray-300={($page.url.pathname.includes(path.url) &&
            path.url !== "/") ||
            (path.url === "/" && $page.url.pathname === "/")}
        >
          <div class="py-2 px-4 m-2 rounded-md bg-inherit">
            {path.name}
          </div>
        </a>
      </div>
    {/each}
  </nav>
</div>

