const extraDevOrigins = (process.env.NEXT_ALLOWED_DEV_ORIGINS || '')
  .split(',')
  .map((v) => v.trim())
  .filter(Boolean);

const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ['localhost', '127.0.0.1', '192.168.56.1', ...extraDevOrigins],
  images: {
    unoptimized: true,
  },
  output: 'standalone',
};

module.exports = nextConfig;

