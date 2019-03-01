import _cloneDeep from 'lodash/cloneDeep'


export const state = () => {
    return {
        list: [],
        recordList: [],
        record: {},
        $record: {},
        addRecord: {},
        resetItem: {},
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
        state.list.push(p)
    },
    reset$Record (state) {
        state.$record = {}
    },
    setMode (state, payload) { state.mode = payload },
    setForm (state, payload) { state.form = payload },
    setEditMode (state) { state.mode = 'edit' },
    setAddMode (state) { state.mode = 'add' }

}
export const actions = {
    update ({dispatch, commit, state}, {data, id}) {
        const url = `/code/${id}`
        return dispatch('api/put', {url, data}, root)
            .then(() => {
                const index = state.list.findIndex(o => o[idName] === id)
                commit('setAddMode', index)
            })
    },
    selectItem({commit}, item) {
        commit('set$Record', item)
        commit('setEditMode')


    },
    cancelItem({commit}) {
      commit('reset$Record')
      commit('setAddMode')
    },
    save ({dispatch, commit, state, getters}) {
        // recupero $record da state
        let data = state.$record

        if (getters.isAddMode) {
            return dispatch('insert', {data})
                .then(r => {
                    commit('addRecord', data)
                    commit('set$Record', {})
                })
        } else {
            // recupero l'id che è il codice per fare la put
            let id = data.code
            return dispatch('update', {data, id})
            // svuoto $record
                .then(() => commit('set$Record', {}))
                // ritorno in addMode
                .then(() => commit('setAddMode'))
        }
    },
    insert ({dispatch, commit}, {data}) {
        const url = `/code`
        return dispatch('api/post', {url, data}, root)
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

