import type { PostType } from "../types/PostType";

type PostCardProps = {
  post: PostType;
  likeCount: number;
  onLike: () => void;
};

const PostCard = ({ post, likeCount, onLike }: PostCardProps) => {
  return (
    <div className="mx-auto mb-10 w-1/2 rounded-lg border bg-blue-400 p-4 shadow-md">
      <h2 className="text-xl font-bold">{post.title}</h2>

      <p className="mt-2 text-gray-700">{post.content}</p>

      <button
        onClick={onLike}
        className="group mt-4 flex items-center gap-2 text-2xl"
        aria-label="いいね"
      >
        <span className="cursor-pointer inline-block transition-transform duration-200 group-active:scale-200 text-center">
          ❤️
        </span>

        <span className="text-base text-white">{likeCount}</span>
      </button>
    </div>
  );
};

export default PostCard;
