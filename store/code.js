import _cloneDeep from 'lodash/cloneDeep'

export const state = () => {
    return {
        list: [],
        recordList: [],
        record: {},
        $record: {},
        grid: {pagination: {}},
        mode: 'list'
    }
}

const root = {root: true}

export const mutations = {
    setRecordList (state, payload) { state.recordList = payload },
    setPagination (state, payload) { state.pagination = payload },
    setList (state, payload) {
        state.list = payload
        state.useCache = true
        state.grid = {pagination: {}}
    },
    setRecord (state, payload) {
        state.record = _cloneDeep(payload)
        state.$record = _cloneDeep(payload)
        state.loaded = true
    },
    set$Record (state, payload) {
        state.$record = _cloneDeep(payload)
        state.loaded = true
    },
    setMode (state, payload) { state.mode = payload },
    setForm (state, payload) { state.form = payload },
    setListMode (state) { state.mode = 'list' },
    setViewMode (state) { state.mode = 'view' },
    setEditMode (state) { state.mode = 'edit' },
    setAddMode (state) { state.mode = 'add' }

}
export const actions = {
    update ({dispatch, commit, state}, {data, id, options = {}}) {
        const url = `/code/id`
        return dispatch('api/put', {url, data, options}, root)
            .then(r => {
                return r
            })
    },
    save ({dispatch, commit, state, getters}, {data, id, options = {}}) {
        if (getters.isAddMode) {
            return dispatch('insert', {data, options})
        } else {
            return dispatch('update', {data, id, options})
        }
    },
    insert ({dispatch, commit}, {data, options = {}}) {
        const url = `/code`
        return dispatch('api/post', {url, data, options}, root)
            .then(r => {
                return r
            })
    }
}

export const getters = {
    isListMode: state => state.mode === 'list',
    isEditMode: state => state.mode === 'edit',
    isAddMode: state => state.mode === 'add',
    isViewMode: state => state.mode === 'view'
}


