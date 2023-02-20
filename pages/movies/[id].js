import { useRouter } from 'next/router';

export default function Detail() {
  const router = useRouter();
  console.log(router);
  return (
    <>
      <h4>{router.query.title || 'Loading...'}</h4>
      <img src={`https://image.tmdb.org/t/p/w500${router.query.poster}`} />
    </>
  );
}
