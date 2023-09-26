import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Grid } from "@mui/material";
import "./styles.css";
import image1 from "../images/Image-01@2x.jpg";
import image2 from "../images/Image-02@2x.jpg";
import image3 from "../images/Image-03@2x.jpg";
import "@fontsource/open-sans";
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans-condensed";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <div className="main-container">
        <Grid container lg={9} spacing={3} className="grid-container">
          <Grid item lg={4} md={4} xs={12} sm={6}>
            <img src={image1} style={{ width: "100%", height: "100%" }} />
          </Grid>
          <Grid item lg={4} xs={12} md={4} sm={6}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                justifyContent: "space-between",
              }}
            >
              <div style={{ height: "48%" }}>
                <img src={image2} style={{ width: "100%", height: "100%" }} />
              </div>
              <div style={{ height: "48%" }}>
                <img src={image3} style={{ width: "100%", height: "100%" }} />
              </div>
            </div>
          </Grid>
          <Grid item lg={4} xs={12} md={4} sm={12}>
            <div>
              <p className="header-title">answer your body's needs</p>
              <p className="description text-size ">
                The way ingredients are sourced affects the way we nourish our
                bodies. Author Mark Schatzer believes our body naturally
                devolops an appetite for the foods and nutrients it needs to be
                healthy, but that artificial flavourings are getting in the way.
                This can be reversed by focusing on high-quality ingredients and
                being mindful as your appetite guides you to consume according
                to your body's needs.
              </p>
              <p className="mindful text-size">be mindful</p>
              <p className="mindful-desc text-size">
                Sourcing local or organic food is a good way to start being more
                mindful about what you're cooking and eating.
              </p>
            </div>
          </Grid>
        </Grid>
        <Grid className="flex">
          <div>as</div>
        </Grid>
      </div>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
