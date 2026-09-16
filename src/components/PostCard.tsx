import type { PostType } from "../types/PostType";

type PostCardProps = {
  post: PostType;
  likeCount: number;
  onLike: () => void;
};

const PostCard = ({ post, likeCount, onLike }: PostCardProps) => {
  return (
    <div className="rounded-lg border p-4 shadow-md">
      <h2 className="text-xl font-bold">{post.title}</h2>

      <p className="mt-2 text-gray-700">{post.content}</p>

      <button onClick={onLike} className="mt-4 rounded-md bg-pink-500 px-3 py-1 text-white">
        いいね ({likeCount})
      </button>
    </div>
  );
};

export default PostCard;
