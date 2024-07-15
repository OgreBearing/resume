<!-- Navbar.svelte -->

<script>
  import { page } from "$app/stores";

  const paths = [
    { name: "Origin", url: "/" },
    { name: "Work Experience", url: "/work" },
    { name: "Skills", url: "/skills" },
    { name: "Contact", url: "/contact" },
  ];
</script>
<div class="container flex justify-between lg:justify-start font-caps">
  <div class="bg-white px-4 py-[0.65rem] flex-grow justify-start min-w-300">
    <div class="mx-auto text-gray-800 text-5xl font-semibold">Brian George</div>
  </div>
  <div class="flex justify-end w-full lg:hidden">
 <button class="text-gray-800 text-5xl">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
  </button>
  </div>

  <nav class="justify-start hidden lg:block">
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

