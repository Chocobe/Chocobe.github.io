import HauntedHouse from '@/components/pages/ThreejsPractices/HauntedHouse/HauntedHouse';

export const generateStaticParams = () => {
    return [
        {
            id: '1',
        },
    ];
};

function ThreejsPracticesContentPage({ params }: {
    params: {
        id: string;
    };
}) {
    const {
        id,
    } = params;

    switch(id) {
        case '1':
            return <HauntedHouse />;
    }
}

export default ThreejsPracticesContentPage;
