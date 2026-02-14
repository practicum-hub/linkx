import RightSidebar from "@/components/ui/RightSidebar/RightSidebar";
import Sidebar from "@/components/ui/Sidebar/Sidebar";
import styles from "./layout.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.main}>{children}</main>
      <RightSidebar />
    </div>
  );
}
