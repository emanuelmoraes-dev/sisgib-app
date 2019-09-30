<template>
<div id="wrapper-livros">
	<div class="row">
		<div class="col">
			<listar-livros ref="listarLivros" @on_error="onError">
				<div class="text-center" slot="td_option" slot-scope="{ entity, index }">
					<button type="button" class="btn btn-warning option option-icon" @click.prevent.stop="entityView(entity, index)" data-toggle="tooltip" data-placement="top" title="Visualizar Livro">
						<i class="fa fa-eye"></i>
					</button>
					<button v-if="!entity.reservado" type="button" class="btn btn-success option option-icon" @click.prevent.stop="realizarEmprestimo(entity, index)" data-toggle="tooltip" data-placement="top" title="Realizar Empréstimo">
						<i class="fa fa-bookmark"></i>
					</button>
				</div>
			</listar-livros>
		</div>
	</div>
</div>
</template>

<script src="./livros.js"></script>

<style lang="stylus">
	@import "./livros.styl";
</style>
