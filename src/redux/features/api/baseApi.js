import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => ({ url: "/posts" }), // or use, query: () => "/posts"
    }),
    getUsers: builder.query({
      query: () => "/users",
    }),
    getPostById: builder.query({
      query: (id) => `/posts/${id}`,
    }),
    setPost: builder.mutation({
      query: (data) => ({
        url: "/posts",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetPostsQuery, useGetPostByIdQuery, useSetPostMutation } =
  baseApi;

export default baseApi;
