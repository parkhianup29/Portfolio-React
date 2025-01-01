import styles from './HeroStyles.module.css';
import heroImg from '../../assets/anup.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import gmail from '../../assets/gmail.svg';
import phone from '../../assets/phone.png';
import whatsapp from '../../assets/whatsapp.svg';
import linkedinLight from '../../assets/linkedin-logo.svg';
import linkedinDark from '../../assets/linkedin-logo.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Anup Parkhi"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Anup
          <br />
          Parkhi
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="tel:+17373893189" target="_blank">
            <img src={phone} alt="phone" />
          </a>
          <a href="https://wa.me/919579830009" target="_blank">
            <img src={whatsapp} alt="whatsapp" />
          </a>
          <a href="mailto:anupvparkhi@gmail.com" target="_blank">
            <img src={gmail} alt="Gmail" />
          </a>
          <a href="https://github.com/parkhianup29" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/anup-parkhi/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern React web apps for commercial
          businesses.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;