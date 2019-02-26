import _cloneDeep from 'lodash/cloneDeep'


export const state = () => {
    return {
        list: [],
        recordList: [],
        record: {},
        $record: {},
        addRecord: {},
        grid: {pagination: {}},
        mode: 'add',
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
    addRecord (state,  p ) {
        state.list.push({p})
    },
    setMode (state, payload) { state.mode = payload },
    setForm (state, payload) { state.form = payload },
    setEditMode (state) { state.mode = 'edit' },
    setAddMode (state) { state.mode = 'add' }

}
export const actions = {
    update ({dispatch, commit, state}, {data, id, options = {}}) {
        const url = `/code/${id}`
        return dispatch('api/put', {url, data, options}, root)
            .then(response => commit('addRecord', {p:response.data}))
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
            .then(response => commit('addRecord', {p:response.data}))
    },
    load ({dispatch, commit, state}, {id = null, force = true, options = {}}) {
        if (!force && state.loaded) {
            return
        }
        if (id === null) {
            return dispatch('api/get', {url: `/code`, options, debug: false}, root)
                .then(res => {
                    commit('setList', res.data)
                    return res
                })
        } else {
            return dispatch('api/get', {url: `/code/{id}`, options}, root)
                .then(res => {
                    commit('setRecord', res.data)
                    return res
                })
        }
    },
}

export const getters = {
    isEditMode: state => state.mode === 'edit',
    isAddMode: state => state.mode === 'add'
}


