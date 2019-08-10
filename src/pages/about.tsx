import React from "react";
import { Link, graphql } from "gatsby";
import { IndexHeader } from "../components/indexHeader";
import { IndexMenu } from "../components/indexMenu";
import SEO from "../components/seo";
import { AboutPageQuery } from "../graphqlTypes";

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
                    <p>
                        FGBG's goal is to gather as many backgrounds as possible, you can help by{" "}
                        <Link to="/identify-backgrounds">identifying unknown backgrounds</Link>.
                    </p>
                    <p className={styles.signOff}>
                        Thanks for stopping by - <a href="https://twitter.com/mattegreer">Matt</a>
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
