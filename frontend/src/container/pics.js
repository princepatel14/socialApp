import axios from 'axios';

const pics = async () => {
  // Your Unsplash Access Key
  const accessKey = 'thoA8CqcO0r8o7-4JN9FY1aY2ZSJ_fLDW1DHGkRqW00';

  try {
    const response = await axios.get('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      },
    });
    const imageUrl = `${response.data.urls.raw}&w=400&h=100&fit=crop`;
    return imageUrl;
  } catch (error) {
    console.error('Error fetching the image URL:', error);
    return null;
  }
};

export default pics;
