<script>
  export let title;
  export let description;
  export let imageUrl;
</script>

<div class="max-w-lg rounded shadow-lg bg-white grid grid-cols-2">
  {#if imageUrl}
    <img class="w-full object-cover" src={imageUrl} alt={title} /> <!-- Reverted height to h-48 -->
  {/if}
  <div class="px-8 py-6">
    <div class="font-bold text-xl mb-2">{title}</div> <!-- Reverted font size to text-xl -->
    <p class="text-gray-700 text-base">{description}</p> <!-- Reverted text size to text-base -->
  </div>
</div>
