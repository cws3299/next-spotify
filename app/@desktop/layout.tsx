import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <div>데스크탑용 레이아웃 {children}</div>;
}
