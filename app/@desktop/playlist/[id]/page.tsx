export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const data = await params;

  return <div>플레이리스트 {data.id}</div>;
}
