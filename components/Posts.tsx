"use client";
import { usePosts } from "@/store";
import { shallow } from "zustand/shallow";
import { useEffect } from "react";
import Link from "next/link";

export const Posts = () => {
  const [posts, loading, getAllPosts] = usePosts(
    (state) => [state.posts, state.loading, state.getAllPosts],
    shallow
  );

  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);

  return loading ? (
    <h3>loading...</h3>
  ) : (
    <ul className="postsList">
      {posts.map((post: any) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};
