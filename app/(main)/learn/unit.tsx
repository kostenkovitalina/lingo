import React from 'react';
import {lessons, units} from "@/db/schema";
import {UnitBanner} from "@/app/(main)/learn/unit-banner";
import {LessonButton} from "@/app/(main)/learn/lesson-button";

type Props = {
    id: number,
    order: number,
    title: string,
    description: string,
    lessons: (typeof lessons.$inferSelect & {
        completed: boolean
    })[],
    activeLesson: typeof lessons.$inferSelect & {
        unit: typeof units.$inferSelect
    } | undefined,
    activeLessonPercentage: number
}

export const Unit = ({id, order, title, lessons, description, activeLesson, activeLessonPercentage}: Props) => {
    return (
        <>
            <UnitBanner title={title} description={description}/>
            <div className='flex items-center flex-col relative'>
                {lessons.map((lesson, index) => {
                    const isCurrent = lesson.id === activeLesson?.id
                    const isLocked = !lesson.completed && !isCurrent

                    return (
                        <LessonButton
                            key={lesson.id}
                            id={lesson.id}
                            index={index}
                            totalCount={lessons.length - 1}
                            current={isCurrent}
                            locked={isLocked}
                            percentage={activeLessonPercentage}
                        />
                    )
                })}
            </div>
        </>
    );
};

