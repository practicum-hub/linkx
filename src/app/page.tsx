import Image from "next/image";
import Link from "next/link";
import SignupCard from "@/components/pages/Landing/SignupCard/SignupCard";
import SocialFooter from "@/components/ui/SocialFooter/SocialFooter";
import {
  landingCatalogCourses,
  landingFeatures,
  landingFooterColumns,
  landingNavItems,
  landingPathCards,
  landingSignupSocialProviders,
} from "@/data/mocks/landing";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.topBar}>
        <div className={styles.container}>
          <Link href="/" className={styles.brand} aria-label="Uppermind home">
            <span className={styles.brandMark} aria-hidden="true" />
            <span className={styles.logo}>Uppermind</span>
          </Link>

          <nav className={styles.nav}>
            {landingNavItems.map((item) => (
              <Link key={`${item.href}-${item.label}`} href={item.href} className={styles.navLink}>
                {item.label}
                {item.hasArrow ? <span className={styles.navArrow}>v</span> : null}
              </Link>
            ))}
          </nav>

          <div className={styles.topActions}>
            <button type="button" className={styles.iconBtn} aria-label="Search">
              <Image src="/icons/search.png" alt="" aria-hidden="true" width={16} height={16} />
            </button>
            <button type="button" className={styles.langBtn} aria-label="Current language: English">
              <Image src="/globe.svg" alt="" aria-hidden="true" width={15} height={15} />
              <span>EN</span>
            </button>
            <Link href="/sign-in" className={styles.loginBtn}>
              Log in
            </Link>
            <Link href="/signup" className={styles.primaryBtn}>
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div className={styles.textBlock}>
                <h1 className={styles.title}>Build skills with career paths, courses, and programs</h1>
                <p className={styles.subtitle}>
                  Uppermind helps learners grow through guided career tracks, practical courses, and structured
                  programs in one focused platform.
                </p>
                <div className={styles.heroActions}>
                  <Link href="/explore" className={styles.primaryBtnLarge}>
                    Explore paths
                  </Link>
                  <Link href="/courses" className={styles.secondaryBtn}>
                    Browse courses
                  </Link>
                </div>
                <p className={styles.heroRating}>
                  <span className={styles.heroStars} aria-hidden="true">
                    *****
                  </span>{" "}
                  4.7/5 from 2,300+ reviews
                </p>
              </div>

              <SignupCard
                title="Create Your Free Account"
                emailId="hero-email"
                passwordId="hero-password"
                submitHref="/explore"
                submitLabel="Start Learning for Free"
                socialProviders={landingSignupSocialProviders}
              />
            </div>
          </div>
        </section>

        <section className={styles.demoSection}>
          <div className={styles.demoWrap}>
            <video
              className={styles.demoVideo}
              src="/videos/ui/LearningPlatformDemo.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        <section className={styles.catalogSection}>
          <div className={styles.catalogWrap}>
            <h2 className={styles.catalogTitle}>A path for every goal</h2>

            <div className={styles.catalogTopRow}>
              <div className={styles.catalogTabs}>
                <button type="button" className={`${styles.catalogTab} ${styles.catalogTabActive}`}>
                  Top Courses
                </button>
                <button type="button" className={styles.catalogTab}>
                  AI
                </button>
                <button type="button" className={styles.catalogTab}>
                  Career Tracks
                </button>
                <button type="button" className={styles.catalogTab}>
                  Skill Tracks
                </button>
              </div>

              <Link href="/courses" className={styles.catalogCta}>
                Explore Catalog
              </Link>
            </div>

            <div className={styles.catalogGrid}>
              {landingCatalogCourses.map((course) => (
                <article key={course.title} className={styles.catalogCard}>
                  <h3>{course.title}</h3>
                  <p className={styles.catalogMeta}>
                    <span className={styles.catalogLevel}>{course.level}</span>
                    <span className={styles.catalogDuration}>{course.duration}</span>
                  </p>
                  <p className={styles.catalogText}>{course.text}</p>
                  <Link href="/courses" className={styles.catalogLink}>
                    See Details
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.reportSection}>
          <div className={styles.reportWrap}>
            <div className={styles.reportVisual}>
              <p className={styles.reportTag}>2025</p>
              <p className={styles.reportVisualTitle}>Data & AI Literacy</p>
            </div>

            <div className={styles.reportBody}>
              <h2>Download the State of Data & AI Literacy Report 2025</h2>
              <p>Uncover what 500+ leaders in the US & UK believe about their team&apos;s data and AI skills.</p>
              <Link href="/explore" className={styles.reportBtn}>
                Download the Report
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.pathSection}>
          <div className={styles.container}>
            <h2 className={styles.pathTitle}>Find the path that fits your goal</h2>

            <div className={styles.pathGrid}>
              {landingPathCards.map((card) => (
                <article key={card.title} className={styles.pathCard}>
                  <div className={styles.pathImageWrap}>
                    <Image src={card.image} alt={card.title} fill className={styles.pathImage} />
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  <Link href="/careers" className={styles.pathBtn}>
                    {card.cta}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <p className={styles.sectionEyebrow}>Inside the platform</p>
              <h2 className={styles.sectionTitle}>Everything you need to grow with confidence</h2>
            </div>
            <div className={styles.featureGrid}>
              {landingFeatures.map((feature) => (
                <article key={feature.title} className={styles.featureCard}>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.joinSection}>
          <div className={styles.container}>
            <div className={styles.joinGrid}>
              <div className={styles.joinContent}>
                <p className={styles.joinEyebrow}>Start today</p>
                <h2 className={styles.joinTitle}>Join 10k+ learners worldwide</h2>
                <p className={styles.joinRating}>4.7 average rating from active students</p>
              </div>

              <SignupCard
                title="Create Your Free Account"
                emailId="join-email"
                passwordId="join-password"
                submitHref="/explore"
                submitLabel="Start Learning for Free"
                socialProviders={landingSignupSocialProviders}
              />
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerMain}>
            <div className={styles.footerIntro}>
              <p className={styles.footerBrand}>Uppermind</p>
              <p className={styles.footerText}>Uppermind is a platform for career paths, courses, and upskilling programs.</p>
              <Link href="/explore" className={styles.footerCta}>
                Start Learning
              </Link>
            </div>

            <div className={styles.footerCols}>
              {landingFooterColumns.map((column) => (
                <div key={column.title} className={styles.footerCol}>
                  <p className={styles.footerColTitle}>{column.title}</p>
                  <ul className={styles.footerColList}>
                    {column.links.map((link) => (
                      <li key={link}>
                        <Link href="/explore">{link}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.footerTop}>
            <div className={styles.footerLegal}>
              <Link href="/explore">Terms</Link>
              <Link href="/explore">Privacy</Link>
              <Link href="/explore">Cookies</Link>
            </div>
            <div className={styles.footerSocial}>
              <span>Follow us</span>
              <SocialFooter />
            </div>
          </div>

          <div className={styles.footerBottom}>
            <span>c 2026 Uppermind</span>
            <div className={styles.footerLinks}>
              <Link href="/explore">Explore</Link>
              <Link href="/explore">Policy</Link>
              <Link href="/community">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
