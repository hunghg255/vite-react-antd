import { Link, createLazyFileRoute } from '@tanstack/react-router';

import MainLayout from '@/layout/MainLayout/MainLayout';

export const Route = createLazyFileRoute('/posts')({
  component: Post,
});

function Post() {
  return (
    <MainLayout>
      <h3>Post</h3>
      <Link to='/post/$postId' params={{ postId: '1' }}>
        Post 1
      </Link>
      <Link to='/post/$postId' params={{ postId: '2' }}>
        Post 2
      </Link>
    </MainLayout>
  );
}
