<!-- Navbar.svelte -->

<script>
  import { page } from "$app/stores";
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome'
  import { faBars, faThumbsUp, faXmark } from '@fortawesome/free-solid-svg-icons'
  import { config } from '@fortawesome/fontawesome-svg-core'

  import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
  config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

  let isMenuOpen = false;

  const paths = [
    { name: "Origin", url: "/" },
    { name: "Work Experience", url: "/work" },
    { name: "Skills", url: "/skills" },
    { name: "Contact", url: "/contact" },
  ];

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>
<style>
  .menu-transition {
    transition: transform 0.3s ease-in-out;
  }
  .hidden-menu {
    transform: translateX(100%);
  }
  .visible-menu {
    transform: translateX(0);
  }
</style>

<nav class="bg-white p-4 flex items-center justify-between font-caps">
  <div class="text-gray-800 text-5xl font-semibold">Brian George</div>
  <div class="hidden lg:flex space-x-4">  
    {#each paths as path, index}
        <a href={path.url} class="text-gray-800 text-2xl hover:bg-red-300" class:bg-gray-300={($page.url.pathname.includes(path.url) &&
          path.url !== "/") ||
          (path.url === "/" && $page.url.pathname === "/")}>
              <div class="py-2 px-4 m-2 rounded-md bg-inherit">
                {path.name}
              </div></a>
    {/each}
  </div>
  <div>
    <button class="lg:hidden text-gray-800 text-2xl" on:click={toggleMenu}>
      <p class:hidden={isMenuOpen}><FontAwesomeIcon icon={faBars} /></p>
    </button>
  </div>
</nav>

<div class={`fixed top-0 right-0 w-2/3 h-full bg-gray-300 text-gray-800 p-4 menu-transition ${isMenuOpen ? 'visible-menu' : 'hidden-menu'}`}>
  <div class="flex justify-end">
    <button class="lg:hidden text-gray-800 text-2xl" on:click={toggleMenu}>
      <p class:hidden={!isMenuOpen}><FontAwesomeIcon icon={faXmark} /></p>
    </button>
  </div>
  {#each paths as path, index}
    <a href={path.url} on:click={toggleMenu} class="rounded-md block m-2 hover:bg-red-300" class:bg-gray-500={($page.url.pathname.includes(path.url) &&
      path.url !== "/") ||
      (path.url === "/" && $page.url.pathname === "/")}>
          <div class="py-2 px-4 m-2 rounded-md bg-inherit">
            {path.name}
          </div></a>
  {/each}
</div>
<!--
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
</div> -->

