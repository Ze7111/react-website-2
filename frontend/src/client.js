import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '83t8shq3',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'sk5S7R7mvLO0SqbuourppzwtHVmS8CaYTFU7PqFYx6ttbUBS0FQAD90Fw4iVYiJCxE6yO7ojsh8PgGdLt2t98BhLZbff04SbjQZolUJWnE92lGgKFzwp9CyUEoFr8KWctbljbWVT8OJAwhePKOTVyzwRXe6FDLfnHXK3iVT437OIT0axkfi9',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
