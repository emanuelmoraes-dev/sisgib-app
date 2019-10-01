<template>
<div class="wrapper-emprestimos-ativos">
	<div class="row">
		<div class="col">
			<listar-emprestimos
				ref="listarEmprestimos"
				titleTable="Empréstimos Ativos"
				:request="$req.emprestimo.parseRequestListEntities(true, true)"
				:definitions="definitions"
				:paramsRequest="[{
					attr: 'ativo',
					value: true,
					operator: 'default',
					descriptor: { type: Boolean }
				}]"
				@on_error="onError"
			>
				<div class="text-center" slot="td_option" slot-scope="{ entity, index }">
					<button type="button" class="btn btn-warning option option-icon" @click.prevent.stop="entityView(entity, index)" data-toggle="tooltip" data-placement="top" title="Visualizar Livro">
						<i class="far fa-eye"></i>
					</button>
					<button type="button" class="btn btn-success option option-icon" @click.prevent.stop="devolverLivro(entity, index)" data-toggle="tooltip" data-placement="top" title="Devolver Livro">
						<i class="far fa-bookmark"></i>
					</button>
				</div>
			</listar-emprestimos>
		</div>
	</div>
</div>
</template>

<script src="./emprestimos-ativos.js"></script>

<style lang="stylus">
	@import "./emprestimos-ativos.styl";
</style>
