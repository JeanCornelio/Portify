import { getUserSession } from "@/lib/actions/auth";
import { generatePortfolio } from "@/lib/actions/github-info";
import "@/styles/portfolio-theme.css";

export default async function Page() {
  const session = await getUserSession();
  const { user } = session;

  await generatePortfolio();

  return (
    <div className="max-w-7xl mx-auto " data-theme="portify">
      <section className="bg-primary/30 h-100 flex items-center justify-center">
        <h4 className="text-4xl">Section About me</h4>
      </section>
    </div>
  );
}
