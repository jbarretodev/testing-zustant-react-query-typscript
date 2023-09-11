import Card from "./components/Card";
import { useFetchRepositories } from "./hooks/useRepost";
import { useFavoriteReposStore } from "./store/favoriteRepos";
const App = () => {
  const { data: repos, isLoading } = useFetchRepositories();

  const { favoriteReposIds } = useFavoriteReposStore();

  if (isLoading) return <div>Loading...</div>;

  //console.log(repos);

  return (
    <div>
      {repos?.map((repo) => (
        <div key={repo.id}>
          <Card
            repository={repo}
            isFavorite={favoriteReposIds.includes(repo.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default App;
