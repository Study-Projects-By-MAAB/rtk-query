import { useForm } from "react-hook-form";
import PostCard from "../components/PostCard";
import {
  useGetPostByIdQuery,
  useSetPostMutation,
} from "../redux/features/api/baseApi";

export default function Feed() {
  // const { data: posts, isLoading, isError, error } = useGetPostsQuery();

  const { register, handleSubmit } = useForm();

  const { data: post, isLoading, isError, error } = useGetPostByIdQuery(1);

  const [setPost, { data: postData }] = useSetPostMutation();
  console.log("🚀 ~ Feed ~ postData:", postData);

  const onSubmit = (data) => {
    setPost(data); 
  };

  if (isLoading) {
    return <p className="text-9xl text-zinc-300">Loading...</p>;
  }

  if (!isLoading && isError) {
    return <p className="text-9xl text-zinc-300">Something went wrong!</p>;
  }

  return (
    <div>
      <h1>Feed</h1>
      <div className="my-10">
        <form className="flex gap-3" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="w-full text-zinc-300 bg-zinc-800 p-3 rounded-md"
            type="text"
            {...register("post")}
          />
          <button
            type="submit"
            className="bg-zinc-800 text-zinc-300 text-lg p-3 border border-r-zinc-300 rounded-md"
          >
            Post
          </button>
        </form>
      </div>
      <div className="flex flex-col gap-3">
        {/* {posts?.map((post) => ( */}
        <PostCard key={post.id} post={post}></PostCard>
        {/* // ))} */}
      </div>
    </div>
  );
}
