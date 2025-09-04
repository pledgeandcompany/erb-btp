// Server-side utility function for generating canonical URLs
export function generateCanonicalUrl(path?: string) {
  // If path is provided, use it; otherwise it will be filled in by the page
  return `https://www.erb-btp.com${path || ''}`;
}
