<template>
<div class="wrapper-listar-emprestimos">
	<list-entities
		ref="listEntities"
		:autoSearch="autoSearch"
		:definitions="definitions"
		:request="request"
		:routeNameEdit="routeNameEdit"
		:parseEditParams="parseEditParams"
		:paramsRequest="paramsRequest"
		:joinSep="joinSep"
		:defaultPattern="defaultPattern"
		:searchOperatorsShow="searchOperatorsShow"
		:stringOperators="stringOperators"
		:numberOperators="numberOperators"
		:dateOperators="dateOperators"
		:titleTable="titleTable"
		:attrAll="attrAll"
		:titleSearch="titleSearch"
		:tdOptionName="tdOptionName"
		:titleSuccess="titleSuccess"
		:titleConfirm="titleConfirm"
		:titleModalEntity="titleModalEntity"
		:confirmTextModalEntity="confirmTextModalEntity"
		:removeSuccessMessage="removeSuccessMessage"
		:removeConfirmMessage="removeConfirmMessage"
		:tdCheckName="tdCheckName"
		:idAttrName="idAttrName"
		:okText="okText"
		:confirmText="confirmText"
		:cancelText="cancelText"
		:trueStr="trueStr"
		:falseStr="falseStr"
		:okClassModalEntity="okClassModalEntity"
		:options="options"
		:hideSearch="hideSearch"
		:isCompact="isCompact"
		:hideLastAttr="hideLastAttr"
		:classLine="classLine"
		:customRemove="customRemove"
		:optionRemove="optionRemove"
		:optionView="optionView"
		:optionEdit="optionEdit"
		:optionReport="optionReport"
		:limitPagination="limitPagination"
		:alignPagination="alignPagination"
		:sizePagination="sizePagination"
		:pageSize="pageSize"
		:isShowModal="isShowModal"
		:smallModalEntity="smallModalEntity"
		:forceModalEntity="forceModalEntity"

		v-model="entities"
		:totalElements$.sync="totalElements"
		:page$.sync="page"
		:attrSearch$.sync="attrSearch"
		:inputSearch$.sync="inputSearch"

		@on_error="err => $emit('on_error', err)"
		@on_error_remove="err => $emit('on_error_remove', err)"
		@on_error_search_default="err => $emit('on_error_search_default', err)"
		@on_error_search_all="err => $emit('on_error_search_all', err)"
		@on_error_search_attr="err => $emit('on_error_search_attr', err)"

		@on_change_sort="sort => $emit('on_change_sort', sort)"
		@on_remove="(entity, index) => $emit('on_remove', entity, index)"
		@on_edit="(entity, index) => $emit('on_edit', entity, index)"
		@on_search="(inputSearch, params, attr, type) => $emit('on_search', inputSearch, params, attr, type)"
		@on_search_default_success="(inputSearch, params, attr) => $emit('on_search_default_success', inputSearch, params, attr)"
		@on_search_all_success="(inputSearch, params, attr, type) => $emit('on_search_all_success', inputSearch, params, attr, type)"
		@on_search_attr_success="(inputSearch, params, attr, type) => $emit('on_search_attr_success', inputSearch, params, attr, type)"
	>
		<template v-if="$slots.headerText" slot="headerText">
			<slot name="headerText"></slot>
		</template>

		<template v-if="$slots.beforeTable" slot="beforeTable">
			<slot name="beforeTable"></slot>
		</template>

		<template v-if="$slots.tblpre" slot="tblpre">
			<slot name="tblpre"></slot>
		</template>

		<template v-if="$scopedSlots.check" slot="check" slot-scope="{ entity, index }">
			<slot name="check" :entity="entity" :index="index"></slot>
		</template>

		<template v-if="$scopedSlots.entity_line" slot="entity_line" slot-scope="{ entity, index }">
			<slot name="entity_line" :entity="entity" :index="index"></slot>
		</template>

		<template v-for="attr of Object.keys(definitions.descriptor)">
			<span :key="attr" v-if="$scopedSlots[`${attr}_slot`]" :slot="`${attr}_slot`" slot-scope="{ entity, index }">
				<slot :name="`${attr}_slot`" :entity="entity" :index="index"></slot>
			</span>
		</template>

		<template v-for="opt of Object.keys(options)">
			<span :key="opt" v-if="$scopedSlots[opt]" :slot="opt" slot-scope="{ entity, index }">
				<slot :name="opt" :entity="entity" :index="index"></slot>
			</span>
		</template>

		<template v-if="$scopedSlots.td_option" slot="td_option" slot-scope="{ entity, index }">
			<slot name="td_option" :entity="entity" :index="index"></slot>
		</template>

		<template v-if="$scopedSlots.optionView" slot="optionView" slot-scope="{ entity, index }">
			<slot name="optionView" :entity="entity" :index="index"></slot>
		</template>

		<template v-if="$scopedSlots.optionRemove" slot="optionRemove" slot-scope="{ entity, index }">
			<slot name="optionRemove" :entity="entity" :index="index"></slot>
		</template>

		<template v-if="$scopedSlots.optionEdit" slot="optionEdit" slot-scope="{ entity, index }">
			<slot name="optionEdit" :entity="entity" :index="index"></slot>
		</template>

		<template v-if="$scopedSlots.optionReport" slot="optionReport" slot-scope="{ entity, index }">
			<slot name="optionReport" :entity="entity" :index="index"></slot>
		</template>

		<template v-if="$slots.tblpos" slot="tblpos">
			<slot name="tblpos"></slot>
		</template>

		<template v-if="$slots.pagination" slot="pagination">
			<slot name="pagination"></slot>
		</template>

		<template v-for="slotName of definitions.modalSlots">
			<div :key="slotName" v-if="$scopedSlots[`modal_${slotName}`]" :slot="`modal_${slotName}`" slot-scope="{ property }">
				<slot :name="`modal_${slotName}`" :property="property"></slot>
			</div>
		</template>
	</list-entities>
</div>
</template>

<script src="./listar-emprestimos.js"></script>

<style lang="stylus">
	@import "./listar-emprestimos.styl";
</style>
