import React from "react";
import { Link, graphql } from "gatsby";
import { IndexHeader } from "../components/indexHeader";
import { IndexMenu } from "../components/indexMenu";
import SEO from "../components/seo";
import { AboutPageQuery } from "../graphqlTypes";
import { gamePath, backgroundPath } from "../util";

import styles from "./about.module.css";

interface AboutPageProps {
    data: AboutPageQuery;
}

const AboutPage: React.FunctionComponent<AboutPageProps> = ({ data }) => {
    const twitterImg = data.twitterImg.edges[0].node.childImageSharp.fixed.src;
    const bgImg = data.bgImg.edges[0].node.childImageSharp.fixed.src;

    return (
        <>
            <div className={styles.ukyo} />
            <div className={styles.credit}>
                by <a href="https://twitter.com/mattegreer">@mattegreer</a>
            </div>
            <div className={styles.blur} style={{ backgroundImage: `url(${bgImg})` }} />
            <IndexMenu className={styles.menu} />
            <div className={styles.root}>
                <div className={styles.content}>
                    <SEO title="Fighting Game Backgrounds" imageUrl={twitterImg} />
                    <Link to="/" className={styles.header}>
                        <IndexHeader />
                    </Link>
                    <p>
                        LoneSage on the neo-geo forums{" "}
                        <a href="http://www.neo-geo.com/forums/showthread.php?229323-Fighting-game-backgrounds-animated">
                            started a thread
                        </a>{" "}
                        about fighting game backgrounds and it was awesome! Over the years so many backgrounds were
                        posted, but as time went on the images gradually turned into broken links or became corrupted. I
                        decided to create a more permanent home for this awesome artwork, and FGBG was born.
                    </p>
                    <p className={styles.signOff}>
                        Thanks for stopping by -{" "}
                        <a href="https://twitter.com/mattegreer" alt="mattegreer on twitter">
                            Matt
                        </a>
                    </p>
                    <h2>rip credits</h2>
                    <p>
                        Most backgrounds on this site I found by searching the internet. I have no idea who ripped the
                        backgrounds I found. If you want credit for ripping a background, you can let me know by
                        clicking the "submit a correction" link on the background in question.
                    </p>
                    <p>
                        Did you rip a whole bunch of these? Feel free to{" "}
                        <a href="mailto:matt.e.greer@gmail.com" alt="site owner email address">
                            email me
                        </a>{" "}
                        and let me know, I'll get your credit up, or take the backgrounds down if you prefer that.
                    </p>
                    <h2>NGBG: Neo Geo rip tool</h2>
                    <p>
                        I am excited to say I am building a tool that makes ripping backgrounds from Neo Geo games
                        really easy! So far it has been used to rip three backgrounds, one from{" "}
                        <Link to={gamePath("World Heroes Perfect")}>World Heroes Perfect</Link> and two from{" "}
                        <Link
                            to={backgroundPath({
                                gameNameUsa: "Kizuna Encounter",
                                levelName: "Skyscraper Construction",
                            })}
                        >
                            Kizuna Encounter
                        </Link>
                        . You can see a demo of the tool{" "}
                        <a href="https://www.youtube.com/watch?v=xgQp2mm5K20" title="youtube demo of rip tool">
                            here
                        </a>
                        . There is still a lot of work to be done one it, but once it's finished, it should be easy to
                        get every Neo Geo background ever. From there I will look into expanding the tool for other
                        systems such as CPS2.
                    </p>
                </div>
            </div>
        </>
    );
};

export default AboutPage;

export const query = graphql`
    query AboutPage {
        twitterImg: allFile(filter: { relativePath: { regex: "/bgs/static/kof99_park1/" } }) {
            edges {
                node {
                    childImageSharp {
                        fixed(height: 200) {
                            src
                        }
                    }
                }
            }
        }
        bgImg: allFile(filter: { relativePath: { regex: "/bgs/static/kof99_park1/" } }) {
            edges {
                node {
                    childImageSharp {
                        fixed(height: 40) {
                            src
                        }
                    }
                }
            }
        }
    }
`;
