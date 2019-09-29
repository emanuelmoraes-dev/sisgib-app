<template>
<div class="wrapper-emprestimos-ativos">
	<div class="row">
		<div class="col">
			<listar-emprestimos
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
			/>
		</div>
	</div>
</div>
</template>

<script src="./emprestimos-ativos.js"></script>

<style lang="stylus">
	@import "./emprestimos-ativos.styl";
</style>
