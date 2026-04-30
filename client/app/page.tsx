import Image from "next/image";
import AboutTeamSection from "@/components/localComps/About";
import { SentimentAnalysisFAQ } from "@/components/localComps/FAQ";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main>
        <div>
          <AboutTeamSection/>
          <SentimentAnalysisFAQ />
        </div>
      </main>
    </div>
  );
}
