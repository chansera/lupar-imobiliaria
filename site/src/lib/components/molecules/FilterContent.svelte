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
		<h3 class="mb-3 text-xs font-bold uppercase tracking-wider text-victoria-500">Finalidade</h3>
		<div class="flex rounded-lg bg-victoria-100 p-1">
			<button
				class="flex-1 rounded-md py-2 text-sm font-bold transition-all {finalidade === 'Venda' ? 'bg-white text-victoria-600 shadow-sm' : 'text-victoria-500 hover:text-victoria-900'}"
				onclick={() => (finalidade = 'Venda')}
			>
				Comprar
			</button>
			<button
				class="flex-1 rounded-md py-2 text-sm font-bold transition-all {finalidade === 'Aluguel' ? 'bg-white text-victoria-600 shadow-sm' : 'text-victoria-500 hover:text-victoria-900'}"
				onclick={() => (finalidade = 'Aluguel')}
			>
				Alugar
			</button>
		</div>
	</div>

	{#each gruposTipos as grupo}
		<div>
			<h3 class="mb-3 text-xs font-bold uppercase tracking-wider text-victoria-500">{grupo.titulo}</h3>
			<div class="space-y-3">
				{#each grupo.tipos as t}
					<label class="group flex cursor-pointer items-center gap-3">
						<input
							type="checkbox"
							checked={tiposSelecionados.includes(t)}
							onchange={() => toggleTipo(t)}
							class="h-4 w-4 rounded border-victoria-300 accent-victoria-600 focus:ring-victoria-500"
						/>
						<span class="text-sm text-victoria-700 transition-colors group-hover:text-victoria-600">{t}</span>
					</label>
				{/each}
			</div>
		</div>
	{/each}

	<div class="grid grid-cols-2 gap-4 border-t border-victoria-100 pt-6">
		<div>
			<h3 class="mb-3 text-xs font-bold uppercase tracking-wider text-victoria-500">Quartos</h3>
			<select
				bind:value={quartosMin}
				class="w-full rounded-lg border border-victoria-300 bg-white px-3 py-2 text-sm outline-none focus:border-victoria-600"
			>
				<option value={0}>Todos</option>
				<option value={1}>1+</option>
				<option value={2}>2+</option>
				<option value={3}>3+</option>
				<option value={4}>4+</option>
			</select>
		</div>
		<div>
			<h3 class="mb-3 text-xs font-bold uppercase tracking-wider text-victoria-500">Banheiros</h3>
			<select
				bind:value={banheirosMin}
				class="w-full rounded-lg border border-victoria-300 bg-white px-3 py-2 text-sm outline-none focus:border-victoria-600"
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
