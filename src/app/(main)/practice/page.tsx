import { redirect } from "next/navigation";
import { courseCatalog } from "@/data/courses/catalog";

export default function PracticePage() {
  redirect(`/courses/${courseCatalog[0]?.slug ?? ""}`);
}
