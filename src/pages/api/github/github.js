const sortBy = (key) => {
  return (a, b) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0);
};

const sortByDate = (key) => {
  return (a, b) =>
    new Date(a[key]) > new Date(b[key]) ? 1 : new Date(b[key]) > new Date(a[key]) ? -1 : 0;
};

// NOTE: Unauthenticated requests through github rate limit is 60 per hour
// hence the Cache-Control header set below

const github = async (req, res) => {
  const userResponse = await fetch('https://api.github.com/users/lsbyerley');
  const userReposResponse = await fetch('https://api.github.com/users/lsbyerley/repos');
  const userStarredResponse = await fetch('https://api.github.com/users/lsbyerley/starred');

  const user = await userResponse.json();
  const repositories = await userReposResponse.json();
  const starred = await userStarredResponse.json();

  const mine = repositories.filter((repo) => !repo.fork);
  const stars = mine.reduce((accumulator, repository) => {
    return accumulator + repository['stargazers_count'];
  }, 0);

  const publicRepos = repositories.filter((repo) => !repo.private);
  publicRepos.concat().sort(sortByDate('pushed_at'));

  res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600');

  return res.status(200).json({
    followers: user.followers,
    stars,
    publicRepos,
    starred,
  });
};

export default github;
