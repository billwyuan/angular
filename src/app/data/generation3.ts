  /** Flat node with expandable and level information */
export interface GenNode3 {
    expandable: boolean;
    name: string;
    level: number;
    isExpanded?: boolean;
  }
export const GEN_DATA3: GenNode3[] = [
    {
      name: 'Fruit',
      expandable: true,
      level: 0,
    }, {
      name: 'Apple',
      expandable: false,
      level: 1,
    }, {
      name: 'Banana',
      expandable: false,
      level: 1,
    }, {
      name: 'Fruit loops',
      expandable: false,
      level: 1,
    }, {
      name: 'Vegetables',
      expandable: true,
      level: 0,
    }, {
      name: 'Green',
      expandable: true,
      level: 1,
    }, {
      name: 'Broccoli',
      expandable: false,
      level: 2,
    }, {
      name: 'Brussel sprouts',
      expandable: false,
      level: 2,
    }, {
      name: 'Orange',
      expandable: true,
      level: 1,
    }, {
      name: 'Pumpkins',
      expandable: false,
      level: 2,
    }, {
      name: 'Carrots',
      expandable: false,
      level: 2,
    }
  ];
  
