import { parse }  from 'rss-to-json'

// functions that returns stories from medium MediumStoryService
export async function getMediumStories(): Promise<MediumStory> { 
  const mediumUrl = 'https://medium.com/feed/@richterglucas';
  const res = await parse(mediumUrl, {});
  res.items = res.items.map(v => ({
    title: v.title,
    link: v.link,
    published: new Date(v.published).toISOString(),
    created: new Date(v.created).toISOString(),
  }))
  return res as MediumStory;
}

export type MediumStory = {
  title: string;
  description: string;
  link: string;
  image: string;
  category: string[];
  items: MediumItem[];
}

// axios fecth xml and convert it to json
export type MediumItem = {
  title: string;
  content: string;
  link: string;
  published: Date
  created: Date;
}
