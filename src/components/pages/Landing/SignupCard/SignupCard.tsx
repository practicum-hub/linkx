import Link from "next/link";
import type { SignupSocialProvider } from "@/types/landing";
import styles from "./signupCard.module.css";

type Props = {
  title: string;
  emailId: string;
  passwordId: string;
  submitHref: string;
  submitLabel: string;
  socialProviders: SignupSocialProvider[];
  className?: string;
};

export default function SignupCard({
  title,
  emailId,
  passwordId,
  submitHref,
  submitLabel,
  socialProviders,
  className,
}: Props) {
  return (
    <aside className={`${styles.card} ${className ?? ""}`}>
      <h3 className={styles.title}>{title}</h3>

      <div className={styles.socialRow}>
        {socialProviders.map((provider) => (
          <button key={provider.id} type="button" className={styles.socialBtn} aria-label={provider.id}>
            {provider.label}
          </button>
        ))}
      </div>

      <div className={styles.divider}>
        <span>or</span>
      </div>

      <label className={styles.label} htmlFor={emailId}>
        Email Address
      </label>
      <input id={emailId} className={styles.input} type="email" placeholder="Email Address" />

      <label className={styles.label} htmlFor={passwordId}>
        Password
      </label>
      <div className={styles.passwordWrap}>
        <input id={passwordId} className={styles.input} type="password" placeholder="Password" />
        <span className={styles.eye} aria-hidden="true" />
      </div>

      <Link href={submitHref} className={styles.submit}>
        {submitLabel}
      </Link>

      <p className={styles.terms}>
        By continuing, you accept our <Link href="/explore">Terms of Use</Link>, our{" "}
        <Link href="/explore">Privacy Policy</Link> and that your data is stored in the USA.
      </p>
    </aside>
  );
}
