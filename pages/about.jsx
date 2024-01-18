import Head from 'next/head'
import Container from '../components/Layout/Container'
import Layout from '../components/Layout/Layout'
import { BLOG_NAME } from '../lib/constants'
import PageHeading from '../components/PageHeading'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About | {BLOG_NAME}</title>
      </Head>
      <Container>
        {/* <PageHeading>Nice to meet you.</PageHeading> */}
        <section className="max-w-3xl mx-auto py-8 md:py-16 lg:py-24">
          <div className="grid gap-4"> {/* Grid container */}
            <p className="">
              I{'\''}m Joe: a machine learning engineer and computational social scientist.
              Currently, I work at
              {" "}
              <a
                href="https://replicate.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-800"
              >
                Replicate
              </a>
              , where I focus on language models and ML infrastructure.
            </p>

            <div className="flex items-start">
              <img
                src="/assets/blog/authors/joe-hoover-avatar.jpg"
                alt="Profile Picture"
                className="w-64 mr-auto"
              />
              <div className="flex-1 ml-4">
                Before Transformers took over the world, I used ML and NLP to study phenomena like
                <a
                  href="https://www.mola-lab.org/s/moralization-in-social-networks-and-the-emergence-of-violent-protests.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-800"
                >
                  {" "} violent protests {" "}
                </a>
                and
                <a
                  href="https://www.nature.com/articles/s41467-021-24786-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-800"
                >
                  {" "} acts of hate{" "}
                </a>.

                I also worked on various aspects of NLP, like
                <a
                  href="https://journals.sagepub.com/doi/pdf/10.1177/1948550619876629"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-800"
                >
                  {" "} corpus development, {" "}
                </a>
                language dynamics (e.g.
                <a
                  href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=7PA-mHAAAAAJ&citation_for_view=7PA-mHAAAAAJ:Tyk-4Ss8FVUC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-800"
                >
                  {" "} here {" "}
                </a>
                &
                <a
                  href="https://link.springer.com/article/10.3758/s13428-017-0926-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-800"
                >
                  {" "} here
                </a>
                ), and the measurement of complex semantic constructs (e.g.

                <a
                  href="https://ieeexplore.ieee.org/abstract/document/8508244"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-800"
                >
                  {" "} here
                </a>
                {" "} &
                <a
                  href="https://link.springer.com/article/10.3758/s13428-017-0875-9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-800"
                >
                  {" "} here
                </a>
                ).

                <p> 
                  <br/>
                    However, after a postdoc at Northwestern, I decided to leave academia.
                    I was drawn to the potential of LMs and I wanted to help build the future.
                </p>
              </div>
            </div>

            <p>              
              Since then, I{'\''}ve worked with language models in many contexts, including R&D, applied science, 
              product development, and ML engineering. 
            </p>

          </div>
        </section>
      </Container>
    </Layout>
  )
}