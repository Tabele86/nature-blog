import sanityClient from '@sanity/client';

const dataset = 'production';
const projectId = '4z4uwb3a';

export default sanityClient({
	projectId: '4z4uwb3a',
	dataset: 'production'
});

export { dataset, projectId };
