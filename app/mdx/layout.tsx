import { PropsWithChildren } from "react";
import "../globals.css";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
};

export default Layout;
