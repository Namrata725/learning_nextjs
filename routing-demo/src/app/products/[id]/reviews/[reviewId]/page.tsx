import { notFound } from "next/navigation";
export default async function reviewDetails({
  params,
}: {
  params: Promise<{ id: string; reviewId: string }>;
}) {
  const { id, reviewId } = await params;

  if (parseInt(reviewId) > 100) {
    notFound();
  }
  return (
    <div>
      <h1>review id:{reviewId}</h1>
      <h1>product id:{id}</h1>
    </div>
  );
}
