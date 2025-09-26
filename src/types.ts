export interface SiteInfo {
  name: string;
  notary: string;
  phone: string;
  mobile: string;
  email: string;
  address: string;
  mapEmbedUrl: string;
  externalLinks: {
    judiciaryCouncil: string;
    propertyRegistry: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string;
    ogImage: string;
  };
}