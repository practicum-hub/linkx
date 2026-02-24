import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const socialProviders = [
  { name: "Google", icon: "/icons/google.png" },
  { name: "LinkedIn", icon: "/icons/linkedin.png" },
  { name: "Facebook", icon: "/icons/facebook.png" },
  { name: "Microsoft", icon: "/icons/microsoft.png" },
] as const;

export default function SignInPage() {
  return (
    <main className={styles.page}>
      <div className={styles.bg} aria-hidden="true">
        <span className={`${styles.blob} ${styles.blobTopLeftA}`} />
        <span className={`${styles.blob} ${styles.blobTopLeftB}`} />
        <span className={`${styles.blob} ${styles.blobTopRightA}`} />
        <span className={`${styles.blob} ${styles.blobTopRightB}`} />
        <span className={`${styles.blob} ${styles.blobMidLeftA}`} />
        <span className={`${styles.blob} ${styles.blobMidLeftB}`} />
        <span className={`${styles.blob} ${styles.blobMidRightA}`} />
        <span className={`${styles.blob} ${styles.blobMidRightB}`} />
        <span className={`${styles.blob} ${styles.blobMidRightC}`} />
        <span className={`${styles.blob} ${styles.blobBottomLeftA}`} />
        <span className={`${styles.blob} ${styles.blobBottomLeftB}`} />
        <span className={`${styles.blob} ${styles.blobBottomLeftC}`} />
        <span className={`${styles.blob} ${styles.blobBottomRightA}`} />
        <span className={`${styles.blob} ${styles.blobBottomRightB}`} />
        <span className={`${styles.blob} ${styles.blobTopCenterA}`} />
        <span className={`${styles.blob} ${styles.blobTopCenterB}`} />
      </div>

      <section className={styles.content}>
        <div className={styles.card}>
          <h1>Welcome Back!</h1>

          <label htmlFor="signin-email">E-mail address</label>
          <input id="signin-email" type="email" />

          <button type="button" className={styles.submitBtn}>
            Next
          </button>

          <div className={styles.optionsRow}>
            <label className={styles.checkboxWrap} htmlFor="remember-me">
              <input id="remember-me" type="checkbox" />
              <span>Remember me</span>
            </label>
            <Link href="/roadmap" className={styles.helpLink}>
              Need Help?
            </Link>
          </div>

          <p className={styles.socialLabel}>Or sign in using:</p>
          <div className={styles.socialRow}>
            {socialProviders.map((provider) => (
              <button
                key={provider.name}
                type="button"
                className={styles.socialBtn}
                aria-label={`Continue with ${provider.name}`}
              >
                <Image
                  src={provider.icon}
                  alt=""
                  aria-hidden="true"
                  width={18}
                  height={18}
                  className={styles.socialIcon}
                />
              </button>
            ))}
          </div>

          <p className={styles.terms}>
            By signing in, you accept our <Link href="/roadmap">Terms of Use</Link>,
            our <Link href="/roadmap">Privacy Policy</Link> and that your data is
            stored in the USA.
          </p>
        </div>

        <div className={styles.signupCard}>
          Or <Link href="/signup">click here</Link> to create your free account.
        </div>
      </section>
    </main>
  );
}
