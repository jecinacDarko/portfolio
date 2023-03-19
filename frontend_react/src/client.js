import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = process.env.REACT_APP_SANITY_PROJECT_ID;
const token = process.env.REACT_APP_SANITY_TOKEN;


export const client = sanityClient({
  projectId: projectId,
  dataset: 'production',
  apiVersion: '2021-10-21',
  useCdn: true,
  token: token,
  useCors: false,
  ignoreBrowserTokenWarning: true
});


const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source);
