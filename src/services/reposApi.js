import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const baseUrl = 'https://api.github.com';


export const reposApi = createApi({
    reducerPath: 'reposApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getRepos: builder.query({
            query: (token) => ({
                url: `/user/repos`,
                headers: { 
                    'Authorization': `token ${token}`
                }
            }),
        }),
        getUser: builder.query({
            query: (token) => ({
                url: `/user`,
                headers: { 
                    'Authorization': `token ${token}`
                }
            }),
        })
    })
})

export const { useGetReposQuery, useGetUserQuery } = reposApi;