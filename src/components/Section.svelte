<script>
    export let id;
    export let title="";
    export let backgroundImage = "static/images/background.jpg";
  </script>
  
  <section
    id={id}
    class={`flex justify-center items-center h-screen bg-cover bg-center ${backgroundImage}`}
  >
    <div>
      <h1 class="text-4xl font-bold">{title}</h1>
      <slot />
    </div>
  </section>
  