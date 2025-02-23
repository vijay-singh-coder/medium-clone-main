import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export function usePosts() {
  const posts = useQuery(api.posts.getPosts);

  return {
    data: posts, // Data from Convex
    isLoading: posts === undefined, // Simulates TanStack's isLoading
    isError: posts === null, // Simulates TanStack's isError
  };
}
