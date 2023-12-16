// react-icons
import {
    TbBrandNextjs,
    TbBrandJavascript,
    // TbBrandVue,
    // TbBrandTypescript,
    SiReactivex,
    FaGraduationCap,
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
        category: 'rxjs',
        displayName: 'Rxjs',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        IconComponent: SiReactivex,
    },
    {
        category: 'llmops',
        displayName: 'LLMOps',
        description: 'LLMOps 관련 용어를 정리합니다.',
        IconComponent: FaGraduationCap,
    },
] as Readonly<TBlogCategoryInfo[]>;
