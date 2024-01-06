export async function getStaticPaths() {
    // Replace this with your code to fetch post IDs or other parameters
    const paths = yourData.map((post) => ({
      params: { id: post.id.toString() },
    }));
  
    return { paths, fallback: false };
  }
  