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
        description: 'SSR 과 CSR 을 자유롭게 사용할 수 있는 Nextjs 에 대한 정리입니다.',
        IconComponent: TbBrandNextjs
    },
    {
        category: 'jest',
        displayName: 'Jest',
        description: 'Jest 를 사용한 유닛 테스트 관련 정리입니다.',
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
        description: 'LLMOps 를 통해 AI 와 가까워지기 위한 정리입니다.',
        IconComponent: FaGraduationCap,
    },
] as Readonly<TBlogCategoryInfo[]>;
