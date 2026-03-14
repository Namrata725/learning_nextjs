import { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).id;

  return {
    title: `this is demo title for dynamic metadata for Product ${id}`,
    description: `this is demo description for dynamic metadata for Product ${id}`,
  };
};

export default async function ProductDetails({ params }: Props) {
  const id = (await params).id;

  return (
    <div>
      <h1>product details: {id}</h1>
    </div>
  );
}
