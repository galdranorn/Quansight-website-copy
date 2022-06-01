export const enum Props {
  Title = 'title',
  Description = 'description',
  Date = 'date',
  Image = 'image',
}

export type TPostsData = {
  title: string;
  description: string;
  date: Date;
  image: string;
  link: string;
};
