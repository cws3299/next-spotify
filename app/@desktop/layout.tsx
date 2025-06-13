import { ReactNode } from "react";
import { Sidebar } from "@/widgets/sidebar/index";
import { LoginHeader } from "@/widgets/loginHeader";
import ReactQueryProvider from "@/appRoot/providers/reactQueryProvider";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <ReactQueryProvider>
            <div className="flex h-screen overflow-hidden p-2">
                <Sidebar />
                <div className="flex flex-col flex-1 rounded-lg p-2 mb-2 mr-2">
                    <LoginHeader />
                    {children}
                </div>
            </div>
        </ReactQueryProvider>
    );
}
