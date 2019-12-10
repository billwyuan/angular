export interface GenNode1 {
    name: string;
    children?: GenNode1[];
}

export const GEN_DATA1: GenNode1[] = [
    {
        name: '忠县',
        children: [
            {
                name: '位居'
            }, {
                name: 'Banana'
            }, {
                name: 'Fruit loops'
            },
        ]
    }, {
        name: '花絮',
        children: [
            {
                name: 'Green',
                children: [
                    {
                        name: 'Broccoli'
                    }, {
                        name: 'Brussel sprouts'
                    },
                ]
            }, {
                name: 'Orange',
                children: [
                    {
                        name: 'Pumpkins'
                    }, {
                        name: 'Carrots'
                    },
                ]
            },
        ]
    },
];
