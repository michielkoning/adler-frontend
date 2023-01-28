export interface IMenuItem {
  id: string;
  uri: string;
  title: string;
}

export interface IMenu {
  hotel: IMenuItem;
  environment: IMenuItem;
  kids: IMenuItem;
}
