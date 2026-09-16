import { useState } from "react";

const useLikes = () => {
  const [likes, setLikes] = useState<Record<number, number>>({});

  const handleLike = (id: number) => {
    setLikes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  return { likes, handleLike };
};

export default useLikes;
