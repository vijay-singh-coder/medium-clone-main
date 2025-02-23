'use client'

import { useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'
import PostItem from '@/components/post-item'
import { Spinner } from '@/components/ui/spinner'
import { useState, useEffect } from 'react'
import { Post } from '@/lib/types'

export default function Posts() {
  const [posts, setPosts] = useState<Post[] | undefined>(undefined);
  const fetchedPosts = useQuery(api.posts.getPosts)

  useEffect(() => {
    if (fetchedPosts !== undefined) {
      setPosts(fetchedPosts)
    }
  }, [fetchedPosts])

  // Loading state
  if (posts === undefined) {
    return (
      <div className="flex h-40 items-center justify-center">
        <Spinner size="lg" />
      </div>
    )
  }

  // No posts state
  if (posts.length === 0) {
    return (
      <div className="flex h-40 items-center justify-center text-gray-500">
        No posts available
      </div>
    )
  }

  return (
    <ul className="space-y-4">
      {posts.map((post) => (
        <PostItem key={post._id} post={post} />
      ))}
    </ul>
  )
}