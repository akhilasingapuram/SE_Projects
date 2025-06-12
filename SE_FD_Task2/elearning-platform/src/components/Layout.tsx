// import type { ReactNode } from "react";
// import Header from "./Header";

// type Props = {
//   children: ReactNode;
// };

// const Layout = ({ children }: Props) => {
//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col">
//       <Header />
//       <main className="flex-1 flex flex-col items-center justify-center pt-20 px-4">
//         {children}
//       </main>
//     </div>
//   );
// };

// export default Layout;

import React from "react";
import Header from "./Header";
import "./Layout.css";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <main className="main-content">{children}</main>
  </>
);

export default Layout;