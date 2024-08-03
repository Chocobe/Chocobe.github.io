// page
import HauntedHouse from '@/components/pages/ThreejsPractices/HauntedHouse/HauntedHouse';
import GalaxyGenerator from '@/components/pages/ThreejsPractices/GalaxyGenerator/GalaxyGenerator';

const contentMapper = [
    HauntedHouse,
    GalaxyGenerator,
];

export const generateStaticParams = () => {
    return contentMapper.map((_, i) => ({
        id: `${i + 1}`
    }));
};

function ThreejsPracticesContentPage({ params }: {
    params: {
        id: string;
    };
}) {
    const {
        id,
    } = params;

    const ContentComponent = contentMapper[`${Number(id) - 1}`] ?? <></>;

    return <ContentComponent />;
}

export default ThreejsPracticesContentPage;
