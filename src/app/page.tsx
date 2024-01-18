import About from "@/components/About";
import Join from "@/components/Join";
import Landing from "@/components/Landing";
import PageWrapper from "@/components/PageWrapper";
export default function Home() {
  return (
    <PageWrapper dir={false}>
      <section id="landing">
        <Landing />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="join">
        <Join />
      </section>
    </PageWrapper>
  )
}
