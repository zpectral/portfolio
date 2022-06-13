import { Client } from "@notionhq/client";

const notionClient = new Client({ auth: process.env.NOTION_ACCESS_TOKEN});

export async function getNotionBlogPosts() {
  const databaseId = process.env.NOTION_BLOG_DATABASE_ID;
  const response = await notionClient.databases.query({
    database_id: databaseId,
  });
  return response;
}

export async function getBlogPostsInfo() {
  const { results } = await getNotionBlogPosts();
  const posts = results.map((post) => {
    return {
      id: post.id,
      date: post.created_time,
      title: post.properties.Name.title[0].plain_text,
      cover: post.cover?.external.url,
      description: post.properties.Description.rich_text[0]?.plain_text,
      tags: [post.properties.Tags.multi_select],
    }
  });
  console.log(posts);

}


export const getNotionBlocks = async (id) => {
  let response = await notionClient.blocks.children.list ({
    id, 
  });
  return response;
}

export async function listNotionDatabases() {
  const res = await notionClient.search({
    query: 'test',
    sort: {
      direction: 'ascending' ,
      timestamp: 'last_edited_time',
    }
  });
  console.log(res);
}

export async function getPosts() {
  const payload = {
    path
  }
}