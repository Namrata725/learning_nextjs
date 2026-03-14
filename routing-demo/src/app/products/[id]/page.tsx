export default async function productDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return (
    <div>
      <h1>product details:{id}</h1>
    </div>
  );
}
