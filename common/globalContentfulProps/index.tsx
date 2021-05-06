import { ContentfulClientApi, EntryCollection } from 'contentful';
import Client from '../../contentful';

class Contentful {
  client: ContentfulClientApi;
  constructor() {
    this.client = Client;
  }

  getMenu(): Promise<EntryCollection<any>> {
    return this.client
      .getEntries({
        content_type: 'menu',
      })
      .then((data: any): any => {
        return Object.values(data?.items[0].fields);
      });
  }

  getLinens(): Promise<EntryCollection<any>> {
    return this.client
      .getEntries({
        content_type: 'linens',
      })
      .then((data: any): any => data?.items);
  }

  getPillow(): Promise<EntryCollection<any>> {
    return this.client
      .getEntries({
        content_type: 'pillow',
      })
      .then((data: any): any => data?.items);
  }

  getPlaid(): Promise<EntryCollection<any>> {
    return this.client
      .getEntries({
        content_type: 'plaid',
      })
      .then((data: any): any => data?.items);
  }

  getTowel(): Promise<EntryCollection<any>> {
    return this.client
      .getEntries({
        content_type: 'towel',
      })
      .then((data: any): any => data?.items);
  }

  getBagIcon(): Promise<EntryCollection<any>> {
    return this.client
      .getEntries({
        content_type: 'bag',
      })
      .then((data: any): any => data?.items);
  }
}

export const getGlobalContentfulProps = async () => {
  const instance = new Contentful();

  const [menu, linens, pillow, plaid, towel, bagIcon]: any = await Promise.all([
    instance.getMenu(),
    instance.getLinens(),
    instance.getPillow(),
    instance.getPlaid(),
    instance.getTowel(),
    instance.getBagIcon(),
  ]);
  return { menu, linens, pillow, plaid, towel, bagIcon };
};
