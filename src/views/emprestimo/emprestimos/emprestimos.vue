<template>
<div class="wrapper-emprestimos">
	<div class="row">
		<div class="col">
			<listar-emprestimos @on_error="onError"></listar-emprestimos>
		</div>
	</div>
</div>
</template>

<script src="./emprestimos.js"></script>

<style lang="stylus">
	@import "./emprestimos.styl";
</style>
