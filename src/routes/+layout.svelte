<script>
  import "../app.css";
  import Navbar from "../lib/components/Navbar.svelte";
  import Footer from "../lib/components/Footer.svelte";
</script>

<div class="bg-gray-100 w-full min-h-screen">
  <div class="container mx-auto flex bg-white p-2">
    <div class="w-full border-b-2 border-gray-100">
      <Navbar />
    </div>
  </div>
  <div class="flex container mx-auto bg-white">
    <div class="w-full ml-4">
      <main>
        <slot />
      </main>
    </div>
  </div>
  <div class="flex container mx-auto bg-white">
    <Footer />
  </div>
</div>