import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        domains: ["i.scdn.co"], // 해당 도메인으로 부터 불러오는 이미지는 안전하다고 해줌, 기존과 비교했을때 Type과 Size도 낮고, 이미지도 lazy loading알아서 해줌
    },
};

export default nextConfig;
