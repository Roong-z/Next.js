import { useRouter } from 'next/router';
import Seo from '../../components/Seo';

export default function Detail({ params }) {
  const router = useRouter();
  const [title, id, poster] = params || [];
  console.log(router);
  return (
    <>
      <Seo title={title} />
      <div className="border border-solid border-white">
        <h4 className="text-center">{title || 'Loading...'}</h4>
      </div>
      <div className="w-2/5">
        <img src={`https://image.tmdb.org/t/p/w500/${poster}`} />
      </div>
    </>
  );
}

export function getServerSideProps({ params: { params } }) {
  console.log(params);
  return {
    props: {
      params,
    },
  };
}
