import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const socialProviders = [
  { name: "Google", icon: "/icons/google.png" },
  { name: "LinkedIn", icon: "/icons/linkedin.png" },
  { name: "Facebook", icon: "/icons/facebook.png" },
  { name: "Microsoft", icon: "/icons/microsoft.png" },
] as const;

export default function SignupPage() {
  return (
    <main className={styles.page}>
      <div className={styles.bg} aria-hidden="true">
        <span className={`${styles.blob} ${styles.blobTopLeftA}`} />
        <span className={`${styles.blob} ${styles.blobTopLeftB}`} />
        <span className={`${styles.blob} ${styles.blobTopRightA}`} />
        <span className={`${styles.blob} ${styles.blobTopRightB}`} />
        <span className={`${styles.blob} ${styles.blobMidLeftA}`} />
        <span className={`${styles.blob} ${styles.blobMidLeftB}`} />
        <span className={`${styles.blob} ${styles.blobMidLeftC}`} />
        <span className={`${styles.blob} ${styles.blobMidRightA}`} />
        <span className={`${styles.blob} ${styles.blobMidRightB}`} />
        <span className={`${styles.blob} ${styles.blobMidRightC}`} />
        <span className={`${styles.blob} ${styles.blobMidRightD}`} />
        <span className={`${styles.blob} ${styles.blobBottomLeftA}`} />
        <span className={`${styles.blob} ${styles.blobBottomLeftB}`} />
        <span className={`${styles.blob} ${styles.blobTopCenterA}`} />
        <span className={`${styles.blob} ${styles.blobTopCenterB}`} />
        <span className={`${styles.blob} ${styles.blobBottomRightA}`} />
        <span className={`${styles.blob} ${styles.blobBottomRightB}`} />
        <span className={`${styles.blob} ${styles.blobBottomCenterA}`} />
        <span className={`${styles.blob} ${styles.blobBottomCenterB}`} />
      </div>

      <section className={styles.content}>
        <div className={styles.card}>
          <h1>Create your free account</h1>

          <label htmlFor="signup-email">E-mail address</label>
          <input id="signup-email" type="email" />

          <label htmlFor="signup-password">Password</label>
          <div className={styles.passwordWrap}>
            <input id="signup-password" type="password" />
            <Image
              src="/icons/view.png"
              alt=""
              aria-hidden="true"
              width={18}
              height={18}
              className={styles.eye}
            />
          </div>

          <button type="button" className={styles.submitBtn}>
            Get Started
          </button>

          <p className={styles.socialLabel}>Or register using:</p>
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
            By continuing, you accept our{" "}
            <Link href="/roadmap">Terms of Use</Link>, our{" "}
            <Link href="/roadmap">Privacy Policy</Link> and that your data is
            stored in the USA. You confirm you are at least 16 years old.
          </p>
        </div>

        <div className={styles.signinCard}>
          Already have an account? <Link href="/sign-in">Sign in.</Link>
        </div>
      </section>
    </main>
  );
}
