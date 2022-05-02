import { configureStore } from '@reduxjs/toolkit';

import { reposApi } from '../services/reposApi';

export default configureStore ({
    reducer: {
        [reposApi.reducerPath] : reposApi.reducer,
    },
})