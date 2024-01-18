import About from "@/components/About";
import Join from "@/components/Join";
import Landing from "@/components/Landing";
import PageWrapper from "@/components/PageWrapper";
export default function Home() {
  return (
    <PageWrapper dir={false}>
      <Landing />
      <About />
      <Join />
    </PageWrapper>
  )
}
