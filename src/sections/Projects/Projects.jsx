import styles from './ProjectsStyles.module.css';
import freshBurger from '../../assets/icons8-apple-logo-150.svg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={freshBurger}
          link="https://support.apple.com"
          h3="Apple Inc"
        />
      </div>
    </section>
  );
}

export default Projects;