import styles from './repoinfo.module.scss';

const RepoInfo = ({ repoDetails, loading }) => {
  const renderContent = () => {
    if (loading || !repoDetails) {
      return <h3>Loading...</h3>;
    }

    const { name, language, html_url } = repoDetails;

    return (
      <div className={styles.container}>
        <h2>REPO INFO</h2>
        <div className={styles.content}>
          <p>Project name: </p>
          <span>{name}</span>
        </div>
        <div className={styles.content}>
          <p>Main language: </p>
          <span>{language}</span>
        </div>
        <div className={styles.content}>
          <p>Repo Url: </p>
          <div>
            <span>
              <a href={`${html_url}`} target='_blank' rel='noopener noreferrer'>
                {name} URL
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  };

  return renderContent();
};

export default RepoInfo;
