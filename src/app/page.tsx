import Image from "next/image";
import Link from "next/link";
import SocialFooter from "@/components/ui/SocialFooter/SocialFooter";
import styles from "./page.module.css";

const features = [
  {
    title: "Career paths",
    text: "Move from your current level to a target role with structured paths, milestones, and practical outcomes.",
  },
  {
    title: "Courses and programs",
    text: "Combine short courses, deeper programs, and guided sequences in one platform.",
  },
  {
    title: "Practice in every step",
    text: "Study with lessons, exercises, checkpoints, and progress tracking across the full journey.",
  },
  {
    title: "Flexible pace",
    text: "Learn on your own schedule, keep momentum in short sessions, and pick up where you left off.",
  },
] as const;

const catalogCourses = [
  {
    title: "Introduction to Python",
    level: "Basic",
    duration: "4 hr",
    text: "Master the basics of data analysis with Python in just four hours. This online course introduces the Python interface and popular packages.",
  },
  {
    title: "Introduction to SQL",
    level: "Basic",
    duration: "2 hr",
    text: "Learn how to create and query relational databases using SQL in focused short lessons with practical exercises.",
  },
  {
    title: "Introduction to Power BI",
    level: "Basic",
    duration: "4 hr",
    text: "Master Power BI fundamentals and learn to use modern data visualization tools for clear, impactful reports.",
  },
  {
    title: "Understanding Artificial Intelligence",
    level: "Basic",
    duration: "2 hr",
    text: "Learn key AI concepts, including machine learning, deep learning, NLP, and practical generative AI examples.",
  },
  {
    title: "Introduction to Tableau",
    level: "Basic",
    duration: "6 hr",
    text: "Start your Tableau journey with dashboards, dimensions, and data storytelling workflows used by analysts.",
  },
  {
    title: "Introduction to Excel",
    level: "Basic",
    duration: "4 hr",
    text: "Master Excel basics and use spreadsheets for everyday analysis tasks, reporting, and data organization.",
  },
] as const;

const pathCards = [
  {
    title: "I'm switching careers",
    text: "Move into a new field with guided career paths, core courses, and practical programs that build confidence.",
    cta: "Explore Career Paths",
    image: "/images/algorithms.png",
  },
  {
    title: "I'm a team leader",
    text: "Give your team clear development routes with role-based programs, shared progress, and upskilling plans.",
    cta: "For Teams",
    image: "/images/nextjs.webp",
  },
  {
    title: "I want to skill up",
    text: "Add new skills through focused courses and programs in data, AI, analytics, and technical foundations.",
    cta: "Browse Programs",
    image: "/images/rust.png",
  },
] as const;

const footerColumns = [
  {
    title: "Learn",
    links: [
      "Catalog",
      "Skill Tracks",
      "Career Paths",
      "Projects",
      "Certifications",
    ],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Press", "Partners", "Contact"],
  },
  {
    title: "Resources",
    links: ["Blog", "Guides", "Webinars", "Community", "Help Center"],
  },
  {
    title: "For Teams",
    links: [
      "For Business",
      "For Universities",
      "Enterprise",
      "Case Studies",
      "Pricing",
    ],
  },
] as const;

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
            <Link href="/courses" className={styles.navLink}>
              Catalog <span className={styles.navArrow}>v</span>
            </Link>
            <Link href="/explore" className={styles.navLink}>
              AI Upskilling <span className={styles.navArrow}>v</span>
            </Link>
            <Link href="/explore" className={styles.navLink}>
              Resources <span className={styles.navArrow}>v</span>
            </Link>
            <Link href="/signup" className={styles.navLink}>
              Pricing <span className={styles.navArrow}>v</span>
            </Link>
            <Link href="/community" className={styles.navLink}>
              For Business
            </Link>
            <Link href="/community" className={styles.navLink}>
              For Universities
            </Link>
          </nav>

          <div className={styles.topActions}>
            <button
              type="button"
              className={styles.iconBtn}
              aria-label="Search"
            >
              <Image
                src="/icons/search.png"
                alt=""
                aria-hidden="true"
                width={16}
                height={16}
              />
            </button>
            <button
              type="button"
              className={styles.langBtn}
              aria-label="Current language: English"
            >
              <Image
                src="/globe.svg"
                alt=""
                aria-hidden="true"
                width={15}
                height={15}
              />
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
                <h1 className={styles.title}>
                  Build skills with career paths, courses, and programs
                </h1>
                <p className={styles.subtitle}>
                  Uppermind helps learners grow through guided career tracks,
                  practical courses, and structured programs in one focused
                  platform.
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
                    ★★★★★
                  </span>{" "}
                  4.7/5 from 2,300+ reviews
                </p>
              </div>

              <aside className={styles.heroPanel}>
                <h3 className={styles.signupTitle}>Create Your Free Account</h3>

                <div className={styles.signupSocialRow}>
                  <button type="button" className={styles.signupSocialBtn}>
                    G
                  </button>
                  <button type="button" className={styles.signupSocialBtn}>
                    in
                  </button>
                  <button type="button" className={styles.signupSocialBtn}>
                    f
                  </button>
                  <button type="button" className={styles.signupSocialBtn}>
                    A
                  </button>
                </div>

                <div className={styles.signupDivider}>
                  <span>or</span>
                </div>

                <label className={styles.signupLabel} htmlFor="hero-email">
                  Email Address
                </label>
                <input
                  id="hero-email"
                  className={styles.signupInput}
                  type="email"
                  placeholder="Email Address"
                />

                <label className={styles.signupLabel} htmlFor="hero-password">
                  Password
                </label>
                <div className={styles.signupPasswordWrap}>
                  <input
                    id="hero-password"
                    className={styles.signupInput}
                    type="password"
                    placeholder="Password"
                  />
                  <span className={styles.signupEye} aria-hidden="true" />
                </div>

                <Link href="/explore" className={styles.signupSubmit}>
                  Start Learning for Free
                </Link>

                <p className={styles.signupTerms}>
                  By continuing, you accept our{" "}
                  <Link href="/explore">Terms of Use</Link>, our{" "}
                  <Link href="/explore">Privacy Policy</Link> and that your data
                  is stored in the USA.
                </p>
              </aside>
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
                <button
                  type="button"
                  className={`${styles.catalogTab} ${styles.catalogTabActive}`}
                >
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
              {catalogCourses.map((course) => (
                <article key={course.title} className={styles.catalogCard}>
                  <h3>{course.title}</h3>
                  <p className={styles.catalogMeta}>
                    <span className={styles.catalogLevel}>{course.level}</span>
                    <span className={styles.catalogDuration}>
                      {course.duration}
                    </span>
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
              <p>
                Uncover what 500+ leaders in the US & UK believe about their
                team&apos;s data and AI skills.
              </p>
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
              {pathCards.map((card) => (
                <article key={card.title} className={styles.pathCard}>
                  <div className={styles.pathImageWrap}>
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className={styles.pathImage}
                    />
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
              <h2 className={styles.sectionTitle}>
                Everything you need to grow with confidence
              </h2>
            </div>
            <div className={styles.featureGrid}>
              {features.map((feature) => (
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
                <h2 className={styles.joinTitle}>
                  Join 10k+ learners worldwide
                </h2>
                <p className={styles.joinRating}>
                  4.7 average rating from active students
                </p>
              </div>

              <aside className={styles.heroPanel}>
                <h3 className={styles.signupTitle}>Create Your Free Account</h3>

                <div className={styles.signupSocialRow}>
                  <button type="button" className={styles.signupSocialBtn}>
                    G
                  </button>
                  <button type="button" className={styles.signupSocialBtn}>
                    in
                  </button>
                  <button type="button" className={styles.signupSocialBtn}>
                    f
                  </button>
                  <button type="button" className={styles.signupSocialBtn}>
                    A
                  </button>
                </div>

                <div className={styles.signupDivider}>
                  <span>or</span>
                </div>

                <label className={styles.signupLabel} htmlFor="join-email">
                  Email Address
                </label>
                <input
                  id="join-email"
                  className={styles.signupInput}
                  type="email"
                  placeholder="Email Address"
                />

                <label className={styles.signupLabel} htmlFor="join-password">
                  Password
                </label>
                <div className={styles.signupPasswordWrap}>
                  <input
                    id="join-password"
                    className={styles.signupInput}
                    type="password"
                    placeholder="Password"
                  />
                  <span className={styles.signupEye} aria-hidden="true" />
                </div>

                <Link href="/explore" className={styles.signupSubmit}>
                  Start Learning for Free
                </Link>

                <p className={styles.signupTerms}>
                  By continuing, you accept our{" "}
                  <Link href="/explore">Terms of Use</Link>, our{" "}
                  <Link href="/explore">Privacy Policy</Link> and that your data
                  is stored in the USA.
                </p>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerMain}>
            <div className={styles.footerIntro}>
              <p className={styles.footerBrand}>Uppermind</p>
              <p className={styles.footerText}>
                Uppermind is a platform for career paths, courses, and
                upskilling programs.
              </p>
              <Link href="/explore" className={styles.footerCta}>
                Start Learning
              </Link>
            </div>

            <div className={styles.footerCols}>
              {footerColumns.map((col) => (
                <div key={col.title} className={styles.footerCol}>
                  <p className={styles.footerColTitle}>{col.title}</p>
                  <ul className={styles.footerColList}>
                    {col.links.map((link) => (
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
            <span>© 2026 Uppermind</span>
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
