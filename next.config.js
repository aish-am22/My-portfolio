/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = {
  webpack:(config, {isServer}) => {
    if (!isServer){
      config.resolve.alias['0'] = Path.resolve(__dirname, 'src')
    }
    return config
  }
}
