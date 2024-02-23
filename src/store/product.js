export default {
    namespaced: true,
    state: () => ({
        isLoading: false,
    }),
    mutations: {
        changeLoadingStatus(state, status=true) {
            if(this.state === status) return
            state.isLoading = status
        },
    },
    modules: {

    },
}
