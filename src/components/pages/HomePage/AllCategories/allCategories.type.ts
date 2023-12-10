// react-icons
import {
    TbBrandNextjs,
    TbBrandJavascript,
    TbBrandVue,
    TbBrandTypescript,
    SiReactivex,
} from '@icons';
import { 
    IconType,
} from 'react-icons';

export type TBlogCategoryInfo = {
    category: string;
    displayName: string;
    description: string;
    IconComponent: IconType;
};

export const allBlogCategoryInfoList = [
    {
        category: 'nextjs',
        displayName: 'Nextjs',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        IconComponent: TbBrandNextjs
    },
    {
        category: 'javascript',
        displayName: 'Javascript',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        IconComponent: TbBrandJavascript,
    },
    {
        category: 'vue',
        displayName: 'Vue',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        IconComponent: TbBrandVue,
    },
    {
        category: 'typescript',
        displayName: 'Typescript',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        IconComponent: TbBrandTypescript,
    },
    {
        category: 'rxjs',
        displayName: 'Rxjs',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        IconComponent: SiReactivex,
    },
] as Readonly<TBlogCategoryInfo[]>;
