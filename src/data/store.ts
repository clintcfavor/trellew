export interface ICanvas {
  id: number;
  cards: ICard[];
  title: string;
}

export interface ICard {
  id: number;
  assigneeCount: number;
  isWatching: boolean;
  hasDescription: boolean;
  hasImage: boolean;
  tagCount: number;
  attachedFileCount: number;
  checkList?: ICheckbox;
  dateCreated?: Date;
}

export interface ICheckbox {
  total: number;
  checkedCount: number;
}

export class Store {
  GetCanvases(): ICanvas[] {
    let canvases: ICanvas[] = [];

    let canvas1: ICanvas = {
      id: 101,
      title: 'To Do',
      cards: [
        {
          id: 1011,
          tagCount: 2,
          isWatching: true,
          hasDescription: false,
          hasImage: false,
          attachedFileCount: 2,
          assigneeCount: 2,
        },
        {
          id: 1012,
          tagCount: 0,
          hasDescription: false,
          hasImage: false,
          assigneeCount: 0,
          isWatching: false,
          attachedFileCount: 0,
        },
      ],
    };

    canvases.push(canvas1);

    let canvas2: ICanvas = {
      id: 102,
      title: 'Doing',
      cards: [
        {
          id: 1021,
          tagCount: 2,
          attachedFileCount: 0,
          isWatching: false,
          hasDescription: true,
          hasImage: false,
          checkList: {
            total: 10,
            checkedCount: 2,
          },
          assigneeCount: 2,
        },
        {
          id: 1022,
          tagCount: 0,
          hasDescription: false,
          hasImage: false,
          assigneeCount: 0,
          isWatching: false,
          attachedFileCount: 0,
        },
        {
          id: 1023,
          tagCount: 2,
          attachedFileCount: 0,
          isWatching: true,
          hasDescription: false,
          hasImage: true,
          checkList: {
            total: 10,
            checkedCount: 6,
          },
          assigneeCount: 2,
        },
      ],
    };

    canvases.push(canvas2);

    let canvas3: ICanvas = {
      id: 103,
      title: 'Done',
      cards: [
        {
          id: 1031,
          tagCount: 0,
          hasDescription: false,
          hasImage: false,
          assigneeCount: 0,
          isWatching: false,
          attachedFileCount: 0,
        },
        {
          id: 1032,
          tagCount: 1,
          isWatching: false,
          hasDescription: true,
          hasImage: false,
          assigneeCount: 2,
          attachedFileCount: 6,
        },
        {
          id: 1033,
          tagCount: 2,
          hasDescription: false,
          hasImage: false,
          dateCreated: new Date(2022, 0o2, 12),
          assigneeCount: 3,
          isWatching: true,
          attachedFileCount: 0,
        },
        {
          id: 1034,
          tagCount: 2,
          isWatching: true,
          hasDescription: false,
          hasImage: true,
          checkList: {
            total: 10,
            checkedCount: 10,
          },
          assigneeCount: 2,
          attachedFileCount: 0,
        },
        {
          id: 1035,
          tagCount: 0,
          hasDescription: false,
          hasImage: false,
          assigneeCount: 0,
          isWatching: false,
          attachedFileCount: 0,
        },
      ],
    };

    canvases.push(canvas3);

    return canvases;
  }
}
