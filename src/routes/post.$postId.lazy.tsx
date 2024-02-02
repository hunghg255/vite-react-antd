import { createLazyFileRoute } from '@tanstack/react-router';

import MainLayout from '@/layout/MainLayout/MainLayout';

export const Route = createLazyFileRoute('/post/$postId')({
  component: PostDetail,
});

function PostDetail() {
  const { postId } = Route.useParams();
  return (
    <MainLayout>
      <br />
      <br />
      <hr />
      <h3>Post Detail {postId}</h3>
    </MainLayout>
  );
}
