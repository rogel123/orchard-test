import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Grid } from "@mui/material";
const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <div className="bg-dark flex-col">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-white">as</div>
          <div className="text-white">as</div>
          <div className="text-white">as</div>
        </div>
        <div className="flex">
          <div className="text-white">as</div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
