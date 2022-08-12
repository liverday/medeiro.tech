import React, { useMemo } from 'react';
import Image from 'next/image';
import BrandImage from '@/public/assets/writer.svg';

import styles from '@/styles/Brand.module.css';
import Button from '../Button';

const YEAR_THAT_I_BEGIN_WORK = 2016

const Brand: React.FC = () => {
    const experienceInYears = useMemo(() => {
        const today = new Date();
        return today.getFullYear() - YEAR_THAT_I_BEGIN_WORK;
    }, []);

    return (
        <div className={`grid gap-6 grid-cols-2 ${styles.brandContainer}`}>
            <div className="flex flex-col justify-center text-white">
                <h1 className="text-4xl font-bold">Oi, eu sou o <strong className="text-green-500">Vitor</strong></h1>
                <h2 className="text-lg mt-4">Um desenvolvedor fullstack com {experienceInYears} anos de experiência na área.</h2>

                <Button className="mt-6 w-52" variant="primary">Ver projetos</Button>
            </div>
            <div className="flex flex-col justify-center items-end">
                <div className="max-w-sm relative w-full h-full">
                    <Image src={BrandImage} layout="fill" objectFit="contain" alt="Imagem de brand do site, página inicial" />
                </div>
            </div>
        </div>
    )
}

export default Brand;