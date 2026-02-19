<script lang="ts">
	import type { Finalidade } from '$lib/types/Imovel';

	// 1. Recebendo as funções e estados bidirecionais ($bindable)
	let {
		gruposTipos,
		finalidade = $bindable(),
		tiposSelecionados = $bindable(),
		quartosMin = $bindable(),
		banheirosMin = $bindable(),
		toggleTipo
	}: {
		gruposTipos: { titulo: string; tipos: string[] }[];
		finalidade: Finalidade; // Nossa tipagem estrita ('Venda' | 'Aluguel')
		tiposSelecionados: string[];
		quartosMin: number;
		banheirosMin: number;
		toggleTipo: (t: string) => void;
	} = $props();
</script>

<div class="space-y-8">
	<div>
		<h3 class="mb-3 text-xs font-bold uppercase tracking-wider text-gray-500">Finalidade</h3>
		<div class="flex rounded-lg bg-gray-100 p-1">
			<button
				class="flex-1 rounded-md py-2 text-sm font-bold transition-all {finalidade === 'Venda' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-900'}"
				onclick={() => (finalidade = 'Venda')}
			>
				Comprar
			</button>
			<button
				class="flex-1 rounded-md py-2 text-sm font-bold transition-all {finalidade === 'Aluguel' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-900'}"
				onclick={() => (finalidade = 'Aluguel')}
			>
				Alugar
			</button>
		</div>
	</div>

	{#each gruposTipos as grupo}
		<div>
			<h3 class="mb-3 text-xs font-bold uppercase tracking-wider text-gray-500">{grupo.titulo}</h3>
			<div class="space-y-3">
				{#each grupo.tipos as t}
					<label class="group flex cursor-pointer items-center gap-3">
						<input
							type="checkbox"
							checked={tiposSelecionados.includes(t)}
							onchange={() => toggleTipo(t)}
							class="h-4 w-4 rounded border-gray-300 accent-blue-600 focus:ring-blue-500"
						/>
						<span class="text-sm text-gray-700 transition-colors group-hover:text-blue-600">{t}</span>
					</label>
				{/each}
			</div>
		</div>
	{/each}

	<div class="grid grid-cols-2 gap-4 border-t border-gray-100 pt-6">
		<div>
			<h3 class="mb-3 text-xs font-bold uppercase tracking-wider text-gray-500">Quartos</h3>
			<select
				bind:value={quartosMin}
				class="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-blue-600"
			>
				<option value={0}>Todos</option>
				<option value={1}>1+</option>
				<option value={2}>2+</option>
				<option value={3}>3+</option>
				<option value={4}>4+</option>
			</select>
		</div>
		<div>
			<h3 class="mb-3 text-xs font-bold uppercase tracking-wider text-gray-500">Banheiros</h3>
			<select
				bind:value={banheirosMin}
				class="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-blue-600"
			>
				<option value={0}>Todos</option>
				<option value={1}>1+</option>
				<option value={2}>2+</option>
				<option value={3}>3+</option>
				<option value={4}>4+</option>
			</select>
		</div>
	</div>
</div>
