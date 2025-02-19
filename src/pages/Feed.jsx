import PostCard from "../components/PostCard";
import { useGetPostByIdQuery } from "../redux/features/api/baseApi";

export default function Feed() {
  // const { data: posts, isLoading, isError, error } = useGetPostsQuery();
  const { data: post, isLoading, isError, error } = useGetPostByIdQuery(1);

  if (isLoading) {
    return <p className="text-9xl text-zinc-300">Loading...</p>;
  }

  if (!isLoading && isError) {
    return <p className="text-9xl text-zinc-300">Something went wrong!</p>;
  }

  return (
    <div>
      <h1>Feed</h1>
      <div className="flex flex-col gap-3">
        {/* {posts?.map((post) => ( */}
        <PostCard key={post.id} post={post}></PostCard>
        {/* // ))} */}
      </div>
    </div>
  );
}
