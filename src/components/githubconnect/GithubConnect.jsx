import { useState, useEffect } from 'react';
import Spinner from './Spinner';
import axios from 'axios';
import styles from './githubconnect.module.scss';
import RepoInfo from './RepoInfo';
import ProfileImage from './profileimag/ProfileImage';
/* import PieChart from './graphs/PieChart'; */

const GithubConnect = () => {
  const [username, setUsername] = useState('robonexx');
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [repoDetails, setRepoDetails] = useState({});
  const [repoLoading, setRepoLoading] = useState(false);
  const [languages, setLanguages] = useState([]);
  const [commits, setCommits] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [commitLoading, setCommitLoading] = useState(false);

  useEffect(() => {
    setRepos([]);
    setRepoDetails({});
    setLanguages([]);
  }, [username]);

  function handleSubmit(e) {
    e.preventDefault(true);
    searchRepos();
  }

  function searchRepos() {
    setLoading(true);
    axios({
      method: 'get',
      url: `https://api.github.com/users/${username}/repos`,
    }).then((resp) => {
      setLoading(false);
      setRepos(resp.data);
      console.log(resp.data[0].owner);
    });
  }

  async function getDetails(repoName) {
    setRepoLoading(true);
    try {
      const resp = await axios({
        method: 'get',
        url: `https://api.github.com/repos/${username}/${repoName}`,
      });
      console.log(resp);
      setRepoDetails(resp.data);

      // Fetch languages
      const languageData = await getLanguageData(username, repoName);
      setLanguages(languageData.languages);
      // Fetch commits
      const commitData = await getCommits(username, repoName);
      setCommits(commitData);
    } catch (error) {
      console.error('Error fetching repo details:', error);
    } finally {
      setRepoLoading(false);
    }
  }

  const getLanguageData = async (username, repo) => {
    try {
      const response = await fetch(
        `https://api.github.com/repos/${username}/${repo}/languages`
      );
      const json = await response.json();
      const data = {
        languages: Object.keys(json),
      };
      return data;
    } catch (error) {
      console.error('Error fetching languages:', error);
      return { languages: [] };
    }
  };

  function repoData(repo) {
    return (
      <div
        className={styles.item}
        onClick={() => getDetails(repo.name)}
        key={repo.id}
      >
        <h5>{repo.name}</h5>
      </div>
    );
  }

  const getCommits = async (username, repo) => {
    try {
      setCommitLoading(true);
      const response = await axios.get(
        `https://api.github.com/repos/${username}/${repo}/commits`
      );
      const commitData = response.data;
      /*  console.log(commitData); */
      return commitData;
    } catch (error) {
      console.error('Error fetching commits:', error);
      return [];
    } finally {
      setCommitLoading(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h3>
        Press search to check my repo <br /> or search for an other one. :D
      </h3>
      <form>
        <input
          className={styles.input}
          value={username}
          placeholder='Search github user'
          onChange={(e) => setUsername(e.target.value)}
        />
        <button className={styles.btn} onClick={handleSubmit}>
          {loading ? <Spinner /> : 'Search'}
        </button>
      </form>
      {repos.length !== 0 ? <ProfileImage /> : <div></div>}
      <div className={styles.list}>{repos.map(repoData)}</div>

      <div>
        <RepoInfo repoDetails={repoDetails} loading={repoLoading} />
      </div>
      {/* Render languages here */}
      <div>
        {languages.length > 0 && (
          <div className={styles.info_wrapper}>
            <h3>Languages:</h3>
            {languages.map((language, index) => (
              <div className={styles.language} key={index}>
                {language}
              </div>
            ))}
          </div>
        )}
        {commits > 0 ? (
          <div>
            <h3>Commits:</h3>
            <p>{commits[0].commit.author.name}</p>
            <p>{commits.length}</p>
          </div>
        ) : (
          <div></div>
        )}
        {/*  <PieChart languages={languages} /> */}
        {languages
          ? Object.entries(languages).map((t, k) => <p key={k}>{t.key}</p>)
          : null}
      </div>
    </div>
  );
};

export default GithubConnect;
