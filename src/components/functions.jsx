const accessKey = "drgUGanvxoQgx83H8hO6p1yCpvj5onYyPTYqwVbQRpk";

async function getImage(photoId) {
  const url = `https://api.unsplash.com/photos/${photoId}`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data.urls.thumb;
  } catch (error) {
    console.error("Failed to fetch photo:", error);
  }
}

export { getImage };
