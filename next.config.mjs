import { withExpo } from "@expo/next-adapter";
import withTM from "next-transpile-modules";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "cdn.pixabay.com",
      "seeklogo.com",
      "upload.wikimedia.org",
      "cdn.freebiesupply.com",
      "www.svgrepo.com",
      "icons.veryicon.com",
      "cdn.icon-icons.com",
      "p7.hiclipart.com",
      "git-scm.com",
      "www.pngfind.com",
    ],
  },
};

export default withExpo(withTM(["aos"])(nextConfig));
