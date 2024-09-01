

chrome.storage.local.set({ generalSettingET:allState});

let allState = {
    ver: 0.01, 
    mainState:'turnON',
    youtubeET:{
        state:'turnON',
        attr:'ytetst',
        name:'Youtube',
        value:['#000','#fff','#000','#aaa','#00000091',
        '#000','#00000057','#000','rgb(255 255 255 / 37%)'
        ,'#0000006b','rgb(75 75 75 / 61%)','hsl(0, 0%, 18.82%)','#ffffff0f',
        '#ffffff3d','#ff000078','#00000094',
        '#000000d4','#fff',9,2,'#00000063','#f00'],
        settings:[
            ['General'
                ['colorsSet','Background Color','--et-spec-base-background']
            ],
            ['Text Colors',
                ['colorsSet','Primary Text Color','--et-spec-text-primary'],
                ['colorsSet','Primary Text Inverse Color','--et-spec-text-primary-inverse'],
                ['colorsSet','Secondar Text Color','--et-spec-text-secondary']
            ],
            ['Left Side Navbar',
                ['colorsSet','Left Nav Background','--et-snav-base-background'],
                ['colorsSet','Left Nav Shadow Color','--et-snav-shadow-clr']
            ],
            ['Top Nav Bar',
                ['colorsSet','Top Nav Background','--et-nav-base-background'],
                ['colorsSet','Top Nav Shadow Color','--et-nav-shadow-clr'],
                ['colorsSet','Icons Color','--et-spec-outline']
            ],
            ['Search Box',
                ['colorsSet','Searchbox background','--et-searchbox-bag'],
                ['colorsSet','Searchbox Shadow Color','--et-searchbox-shadow-clr'],
                ['colorsSet','Searchbox Border Color','--et-searchbox-legacy-border-color'],
                ['colorsSet','Searchbox Button Color','--et-searchbox-legacy-button-color'],
                ['colorsSet','Searchbox Button Hover','--et-searchbox-legacy-button-hover-color']
            ],
            ['Chips',
                ['colorsSet','Chip Active Background','--et-active-bg-transparency'],
                ['colorsSet','Chip Shadow Color','--et-chip-shadow-clr']
            ],
            ['Menu',
                ['colorsSet','Menu Background','--et-spec-menu-background'],
                ['colorsSet','Menu Background Invertes','--et-spec-inverted-background']   
            ],
            ['Video Player',
                ['rangeSet','Ambient Saturation','1','15'],
                ['rangeSet','Ambient Size','0','3']
            ],
            ['Others',
                ['colorsSet','Border Colors','--et-sicon-base-background'],
                ['colorsSet','Theme Color','--et-theme-color']
            ]
        ],
        customOpt:{
            state:'turnOFF',
            value:['#000','#fff','#000','#aaa','#00000091',
            '#000','#00000057','#000','rgb(255 255 255 / 37%)'
            ,'#0000006b','rgb(75 75 75 / 61%)','hsl(0, 0%, 18.82%)','#ffffff0f',
            '#ffffff3d','#ff000078','#00000094',
            '#000000d4','#fff',9,2,'#00000063','#f00']
        }
    },
    googleET:{
        state:'turnON',
        attr:'gtetst',
        name:'Google',
        value:'',
        settings:''
    } 
}