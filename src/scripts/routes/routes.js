import Home from '../view/pages/home';
import Detail from '../view/pages/detail';

const routes = {
  '/': Home,
  '/detail/:id': Detail,
};

export default routes;
