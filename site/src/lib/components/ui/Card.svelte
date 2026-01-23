<script lang="ts">
  export let title = '';
  export let price = 0;
  export let location = '';
  export let image = '';
</script>

<div class="border rounded-lg overflow-hidden shadow hover:shadow-md transition">
  <img src={image} class="w-full h-48 object-cover" />
  <div class="p-4">
    <h3 class="font-bold">{title}</h3>
    <p class="text-gray-600 text-sm">{location}</p>
    <p class="mt-2 text-lg font-bold text-blue-600">R$ {price}/mês</p>
  </div>
</div>
