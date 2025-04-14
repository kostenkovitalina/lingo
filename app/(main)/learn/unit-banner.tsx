import React from 'react';
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Notebook, NotebookText} from "lucide-react";

type Props = {
    title: string,
    description: string
}

export const UnitBanner = ({title, description}: Props) => {
    return (
        <div className=' w-full rounded-xl bg-green-500 p-5 text-white flex items-center justify-between'>
            <div className='space-y-2.5'>
                <h3 className='text-2xl font-bold'>
                    {title}
                </h3>
                <p className='text-lg'>
                    {description}
                </p>
            </div>
            <Link href='/lesson'>
                <Button
                    size='lg'
                    variant='secondary'
                    className='hidden lg:flex border-2 border-b-4' //lg button
                >
                    <NotebookText className='mr-2'/>
                    Continue
                </Button>
            </Link>

        </div>
    );
};

