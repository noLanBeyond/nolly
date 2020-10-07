import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";
import DownArrow from "../assets/down-arrow.svg";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <div>
          <h1 className="brand">
            nolly<span className="fancy">.</span>
          </h1>
          <span className="handle">@nolansym</span>
          <h2>
            in case stack overflow goes d
            <span className="down">
              <DownArrow width={26} height={21} fill={"#667eea"} />
            </span>
            wn.
          </h2>
          <SocialList />
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
        }
        .brand {
          font-size: 100px;
          margin: 0;
          font-weight: 500;
          color: #667eea;
        }
        h2 {
          font-family: "Montserrat", sans-serif;
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
          color: #2d3748;
        }
        .fancy {
          font-family: "Montserrat", sans-serif;
          color: #2d3748;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #718096;
          letter-spacing: 0.05em;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </Layout>
  );
}
