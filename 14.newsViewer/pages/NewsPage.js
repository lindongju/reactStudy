import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

import { useParams } from '../../node_modules/react-router-dom/dist/index';

const NewsPage = () => {
  const params = useParams();
  const category = params.category || 'all';

  return (
    <div>
      <textarea value={JSON.stringify(params)}></textarea>
      <Categories />
      <NewsList category={category} />
    </div>
  );
};

export default NewsPage;
