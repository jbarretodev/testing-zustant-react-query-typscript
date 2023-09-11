import { useFavoriteReposStore } from "../store/favoriteRepos";
import { Repository } from "./../hooks/types";

type CardsProps = {
  repository: Repository;
  isFavorite: boolean;
};

const Card = ({ repository, isFavorite }: CardsProps) => {
  const addFavoriteRepo = useFavoriteReposStore(
    (state) => state.addFavoriteRepo
  );

  const removeFavoriteRepo = useFavoriteReposStore(
    (state) => state.removeFavoriteRepo
  );

  const toggleFavorite = () => {
    return isFavorite
      ? removeFavoriteRepo(repository.id)
      : addFavoriteRepo(repository.id);
  };

  return (
    <div>
      <h1>{repository.name}</h1>
      <button onClick={toggleFavorite}>
        {isFavorite ? "Dislike" : "Like"}
      </button>
    </div>
  );
};

export default Card;
