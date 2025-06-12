export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ keyword: string }>;
}) {
  const data = await searchParams;
  console.log(data);
  const keyword = data.keyword ?? "";

  return <div>서치결과 페이지 {keyword}</div>;
}
